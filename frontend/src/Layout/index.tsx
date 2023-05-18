import React, { useEffect, useState } from 'react'

import { Nav } from './Nav'
import { Sidebar } from './Sidebar'
import { DashboardWrapper, ContentWrapper } from './styles'
import { Outlet } from 'react-router-dom'
import { LoaderProgress } from '@sensedia-ui/loaders'
import { useWindowSize } from '@sensedia-ui/hooks'

const Layout = () => {
  const size = useWindowSize()
  const [open, setOpen] = useState<boolean>((size.width || 0) < 991)

  useEffect(() => {
    setOpen((size?.width || 0) < 991)
  }, [size.width])

  return (
    <DashboardWrapper>
      <Sidebar open={open} />
      <ContentWrapper open={open}>
        <LoaderProgress loading={false} />
        <Nav open={open} setOpen={setOpen} />
        <Outlet />
      </ContentWrapper>
    </DashboardWrapper>
  )
}

export default Layout
