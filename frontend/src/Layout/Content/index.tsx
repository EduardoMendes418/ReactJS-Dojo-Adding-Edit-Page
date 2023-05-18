import React from 'react'
import { ContentContainer } from './styles'

interface ContentProps {
   children: JSX.Element[] | JSX.Element
   onUpdateSize?: () => void
}

const Content = ({ children }: ContentProps): JSX.Element => {
   return <ContentContainer>{children}</ContentContainer>
}

export default Content
