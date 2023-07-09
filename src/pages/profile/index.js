import React, { useEffect } from 'react'
import Profile from '../../components/profile/Profile'

const ProfilePage = ({setCommon}) => {
  useEffect(()=>{
    setCommon(true)
  }, [])
  return (
    <>
        <Profile />
    </>
    
  )
}

export default ProfilePage