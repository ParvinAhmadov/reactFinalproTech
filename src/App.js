import React from 'react'
import { RouterProvider } from 'react-router-dom'
import routers from './router'

const App = () => {
  return (
    <div>
              <RouterProvider router={routers} />

    </div>
  )
}

export default App
