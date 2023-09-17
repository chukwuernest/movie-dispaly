import React, { useState } from 'react'
const img_url = 'https://image.tmdb.org/t/p/w500'

const MoviePlay = ({ title, poster_path, overview, release_date }) => {
  return (
    <>
      <div className='body_card'>
        <div className='body_top'>
          <div className='movie'>
            <img className='movie_img' src={img_url + poster_path} />

            <p className='movie_overview' data-testid='movie-overview'>
              {overview}
            </p>
            <div className='play'>
              <h1 className='title' data-testid='movie-title'>
                {title}
              </h1>
              <p className='date' data-testid='movie-release-date'>
                {release_date}
              </p>
            </div>
            <div className='button'>
              <button type='button' className='button'>
                view more
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default MoviePlay
