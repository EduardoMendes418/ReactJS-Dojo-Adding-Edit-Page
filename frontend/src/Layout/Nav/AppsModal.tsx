import React from 'react'
import {
  ModalAppsContent,
  ModalApps as Modal,
  AppsContent,
} from '@sensedia-ui/layout'

const Apps = () => {
  const apps = [
    { product: 'events-hub', link: '/events-hub', external: false },
    {
      product: 'flexible-actions',
      link: '/flex-actions',
      external: false,
    },
    { product: 'api-management', link: '/api-manager', external: false },
    {
      product: 'adaptive-governance',
      link: '/governance',
      external: true,
    },
  ]

  return (
    <Modal>
      <ModalAppsContent>
        <AppsContent products={apps} />
      </ModalAppsContent>
    </Modal>
  )
}

export { Apps }
