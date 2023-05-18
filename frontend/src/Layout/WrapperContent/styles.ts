import styled from 'styled-components'

interface StickyProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  display?: string
}

export const Sticky = styled.div<StickyProps>`
  width: 100%;
  max-width: 1440px;
  padding: 30px 40px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.layerBase};
  position: sticky;
  top: 0px;
  z-index: ${({ theme }) => theme.zIndex.sticky};

  @media (max-height: 670px) {
    padding-bottom: 20px;
  }

  @media (max-height: 600px) {
    position: relative;
  }
`

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0px 40px 40px 40px;
  overflow: hidden;
`
