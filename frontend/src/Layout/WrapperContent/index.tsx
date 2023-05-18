import React, { useContext } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import * as S from './styles';

interface WrapperProps {
  children?: any;
}

const Context = React.createContext({} as React.RefObject<HTMLDivElement>);

export function useScrollbar() {
  const div = useContext(Context);

  async function getRef(): Promise<HTMLDivElement> {
    return new Promise((resolve, reject) => {
      if (div.current) {
        resolve(div.current);
      } else {
        reject(null);
      }
    });
  }

  async function scrollTop(value = 0) {
    return getRef().then((ref) => (ref.scrollTop = value));
  }

  async function scrollIntoView(arg?: boolean | ScrollIntoViewOptions) {
    return getRef().then((ref) => ref.scrollIntoView(arg));
  }

  async function scroll(arg?: ScrollIntoViewOptions) {
    return getRef().then((ref) => ref.scroll(arg));
  }

  return {
    scrollTop,
    scrollIntoView,
    scroll,
  };
}

export function WrapperContent({ children }: WrapperProps): React.ReactElement {
  const [header, ...content] = React.Children.toArray(children);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  function updateScroll() {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
      scrollRef.current?.removeEventListener('scroll', updateScroll);
    }
  }

  React.useEffect(() => {
    scrollRef.current?.addEventListener('scroll', updateScroll);
  }, []);

  function scrollToTop() {
    if (scrollRef.current) {
      if (scrollRef.current.scrollTop !== 0) {
        scrollRef.current.scrollTop = 0;
      }
    }
  }

  React.useEffect(() => {
    scrollToTop();
  });

  if (!Array.isArray(children)) {
    return (
      <PerfectScrollbar
        containerRef={(e: HTMLElement) => {
          (scrollRef as any).current = e;
        }}
      >
        <S.ContentContainer>{children}</S.ContentContainer>
      </PerfectScrollbar>
    );
  }

  return (
    <Context.Provider value={scrollRef}>
      <S.Sticky>{header}</S.Sticky>
      <PerfectScrollbar
        containerRef={(e: HTMLElement) => {
          (scrollRef as any).current = e;
        }}
      >
        <S.ContentContainer>{content}</S.ContentContainer>
      </PerfectScrollbar>
    </Context.Provider>
  );
}
