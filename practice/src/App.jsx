import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('Blue');
  const handleColorChange = (newColor) => {
    setColor(newColor);
    console.log('Component Rendered, current color:', newColor);
};

  return(
    
    <div className='h-screen w-full duration-200' style={{ backgroundColor: color }}>
            <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
                <div className='fixed flex flex-wrap justify-center w-full max-w-2xl bg-white px-3 py-2 rounded-3xl'>
                    <button onClick={() => handleColorChange('Blue')}>Blue</button>
                    <button onClick={() => handleColorChange('Red')}>Red</button>
                    <button onClick={() => handleColorChange('Green')}>Green</button>
                </div>
            </div>
        </div>
  )
}

export default App
