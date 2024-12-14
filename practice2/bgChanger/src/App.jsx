import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('blue');
  
  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <div 
      className="h-screen w-screen flex items-center justify-center duration-200"
      style={{backgroundColor: color}}
    >
      <div className="bg-white p-4 rounded-lg flex space-x-2">
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => handleColorChange('blue')}
        >
          Blue
        </button>
        <button 
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => handleColorChange('red')}
        >
          Red
        </button>
        <button 
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => handleColorChange('green')}
        >
          Green
        </button>
      </div>
    </div>
  )
}

export default App