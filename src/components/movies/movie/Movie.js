import React from 'react'

const Movie = ({item}) => {
    const {Title, Year, imdbID, Type, Poster } = item
  return (
    <>
        <div className="col-md-3">
            <div className="movieCard">
                <div className="movieBody">
                    <img src={Poster} alt={Title} className='img-fluid' />
                    <div className="movieText">
                        <h5>{Title}</h5>
                        <p>{Year}</p>
                    </div>                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Movie