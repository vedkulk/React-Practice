import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext)
    if(!user) {return <div>Not logged in</div> }
    else {
        return (
        <>
            <div>Logged in</div> 
                <div>
                Profile:{user.username} 
                </div>
        </>)
    }
}

export default Profile