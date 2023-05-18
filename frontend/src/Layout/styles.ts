import styled, { css } from 'styled-components'

interface Translate extends React.HtmlHTMLAttributes<HTMLDivElement> {
   open: boolean
}

interface StickyProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
   display?: string
}

export const DashboardWrapper = styled.div`
   height: 100vh;
   background-color: ${({ theme }) => theme.colors.grayDark};
   display: flex;
`

export const ContentWrapper = styled.div<Translate>`
   width: calc(100% - 180px);
   height: 100%;
   border-color: ${({ theme }) => theme.colors.layerBorder};
   background-color: ${({ theme }) => theme.colors.layerBase};
   border-style: solid;
   border-width: 1px 0 1px 1px;
   border-radius: 16px 0 0 16px;
   overflow: hidden;
   box-shadow: 0 0 14px rgba(0, 0, 0, 0.34);
   float: left;
   left: 180px;
   position: relative;
   transition: all 0.5s ease-in-out;
   display: flex;
   flex-direction: column;

   @media (max-width: 991px) {
      ${({ open }) =>
         open &&
         css`
            width: 100%;
            left: 0px;
            border-radius: 0;
            transform: translate(0, 0);
            transition: all 0.5s ease-in-out;
         `}
   }
`

export const ScrollableContent = styled.div`
   min-height: 0;
   width: 100%;
   flex: 1 1 auto;
   overflow: auto;
`

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
