import ModFedRemoteLoader from 'dynamic-module-federation'
import React from 'react'

const RemoteErrorExample = () => {
  console.log('This is remote button from the first application')
  const props = {
    id: 'remoteButton'
  }
  const FallbackComponent = () => (
    // Add your fallback component
    <div>Error occurred while loading the component</div>
  )
  return (
    <ModFedRemoteLoader
      remoteUrl="http://localhost:3005/remoteEntry.js"
      scope="wrongScope"
      module="./Button"
      props={props}
      fallbackComponent={FallbackComponent()}
    />
  )
}

export default RemoteErrorExample
