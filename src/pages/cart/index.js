import React, { useEffect } from 'react'
import Cart from '../../components/cart/Cart'

const CartPage = ({setCommon}) => {
  useEffect(()=>{
    setCommon(true)
  }, [])
  return (
    <>
        <Cart />
    </>
  )
}

export default CartPage