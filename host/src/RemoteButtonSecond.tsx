import React, { Suspense } from 'react'
import { useFederatedComponent } from 'dynamic-module-federation'

const RemoteButtonSecond = () => {
  const { error, Component } = useFederatedComponent({
    remoteUrl: 'http://localhost:3002/remoteEntry.js',
    scope: 'remoteAppSecond',
    module: './Button'
  })
  if (error) {
    console.log(error)
  }
  return (
    <>
      {error && <text>An error occured while loading the remote module</text>}
      {Component && (
        <Suspense fallback={<>Loading ... </>}>
          <Component />
        </Suspense>
      )}
    </>
  )
}

export default RemoteButtonSecond
