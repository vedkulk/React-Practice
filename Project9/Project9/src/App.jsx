import React from 'react'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'

const App = () => {
  return (
    <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
  )
}

export default App