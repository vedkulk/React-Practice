import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Github = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://api.github.com/users/vedkulk")
        .then((response) => response.json())
        .then((data)=>{
            console.log(data)
            setData(data)
        })
    },[]) 
  return (
    <>
    
        
    
        <div className=' text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github
        <img className='w-[200px] h-[200px]' src={data.avatar_url }>
        </img>
            <div>
                {data.login}
            </div>
        </div>
    </>
  )
}

export default Github