import React, { Suspense } from 'react'
import './App.css'
import RemoteButtonFirst from './RemoteButtonFirst'
import RemoteButtonSecond from './RemoteButtonSecond'
import RemoteErrorExample from './RemoteErrorExample'
// const FederatedButton = React.lazy(() => import('RemoteApp/Button'))

function App() {
  return (
    <div className="App">
      <header className="App-header">This is the host application</header>
      <Suspense fallback={<div>Loading...</div>}>
        <RemoteButtonFirst />
        <RemoteButtonSecond />
        <RemoteErrorExample />
      </Suspense>
    </div>
  )
}

export default App
