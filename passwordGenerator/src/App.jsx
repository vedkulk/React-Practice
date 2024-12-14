import React, { useState, useCallback, useEffect, useRef } from 'react'

const App = () => {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += '!@#$%^&*()_+'

    for(let i = 0; i < length; i++){
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length, numberAllowed, charAllowed])

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed, generatePassword])

  const copyPassword = useCallback(() => {
    passwordRef.current.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-800 rounded-lg">
      <div className="flex mb-4">
        <input 
          type="text" 
          placeholder='Generated Password' 
          value={password} 
          readOnly 
          ref={passwordRef}
          className="flex-grow p-2 rounded-l"
        />
        <button 
          className='px-4 bg-blue-500 text-white rounded-r' 
          onClick={copyPassword}
        >
          Copy
        </button>
      </div>
      
      <div className="mb-4">
        <input 
          type="range" 
          id="lengthRange"
          min={8} 
          max={15} 
          value={length} 
          className="w-full cursor-pointer" 
          onChange={(e) => setLength(Number(e.target.value))}
        />
        <label htmlFor="lengthRange" className="text-white block">
          Length: {length}
        </label>
      </div>
      
      <div className="flex items-center mb-2">
        <input 
          type="checkbox" 
          id="numberCheckbox"
          checked={numberAllowed} 
          onChange={() => setNumberAllowed(prev => !prev)}
          className="mr-2"
        />
        <label htmlFor="numberCheckbox" className="text-white">
          Include Numbers
        </label>
      </div>
      
      <div className="flex items-center">
        <input 
          type="checkbox" 
          id="charCheckbox"
          checked={charAllowed} 
          onChange={() => setCharAllowed(prev => !prev)}
          className="mr-2"
        />
        <label htmlFor="charCheckbox" className="text-white">
          Include Special Characters
        </label>
      </div>
      <img src="https://flagcdn.com/us.svg" alt="" />
    </div>

  )
}

export default App