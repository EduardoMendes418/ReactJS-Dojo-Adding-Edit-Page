import React from 'react'
import { useTranslation } from 'react-i18next'
import { HelpModal, HelpOption } from '@sensedia-ui/layout'
import { useToggle } from '@sensedia-ui/hooks'

const Help = () => {
  const [t] = useTranslation()
  const [showAlert, setShowAlert] = useToggle(false)

  return (
    <HelpModal>
      <HelpOption onClick={() => {}}>{'Help'}</HelpOption>
    </HelpModal>
  )
}

export { Help }
