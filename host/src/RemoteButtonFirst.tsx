import ModFedRemoteLoader from 'dynamic-module-federation'
import React from 'react'

const RemoteButtonFirst = () => {
  console.log('This is remote button from the first application')
  const props = {
    id: 'remoteButton'
  }
  return (
    <ModFedRemoteLoader
      remoteUrl="http://localhost:3001/remoteEntry.js"
      scope="remoteAppFirst"
      module="./Button"
      props={props}
    />
  )
}

export default RemoteButtonFirst
