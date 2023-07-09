import React, { useEffect } from 'react'
import Movies from '../../components/movies/Movies'

const MoviesPage = ({setCommon}) => {
  useEffect(()=>{
    setCommon(true)
  }, [])
  return (
    <>
        <Movies />
    </>
  )
}

export default MoviesPage