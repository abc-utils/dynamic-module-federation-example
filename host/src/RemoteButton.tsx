import ModFedRemoteLoader from 'dynamic-module-federation'
import React from 'react'
// import ModFedRemoteLoader from './mfloader'

const RemoteButton = () => {
  console.log('This is remote button')
  const props = {
    id: 'remoteButton'
  }
  return (
    <ModFedRemoteLoader
      remoteUrl="http://localhost:3001/remoteEntry.js"
      scope="remoteApp"
      module="./Button"
      props={props}
    />
  )
}

export default RemoteButton
