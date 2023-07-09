import React, { useEffect } from 'react'
import Login from '../../components/login/Login'

const LoginPage = ({setCommon}) => {
  useEffect(()=>{
    setCommon(false)
  }, [])
  return (
    <>
        <Login />
    </>
  )
}

export default LoginPage