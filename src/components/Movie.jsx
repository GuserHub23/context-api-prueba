import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext';

const Movie = ({ movie }) => {

  const { toggleFavouriteMovieToUser, user } = useContext(UserContext);

  const imgStyles = {
    height: '400px',
    objectFit: 'cover',
  }

  const cardUserTrue = {
    height: '550px'
  }
  const cardUserfalse = {
    height: '500px'
  }

  const isFavourite = user?.favouriteMovies?.includes(movie.id);

  return (
    <div className="card mb-3" style={ user ? cardUserTrue : cardUserfalse }>
      <img
        className="card-img-top" 
        src={movie.imageUrl} 
        alt={movie.title} 
        style={imgStyles}
      />
      <div className="card-body d-flex justify-content-between flex-column">
        <h5>{movie.title}</h5>
        {
          user ?
            <button
              onClick={() => 
                toggleFavouriteMovieToUser(movie.id)}
              className={ `mb-0 ${isFavourite ? 'btn btn-warning' : 'btn btn-primary'}` }
              style={{width: 'auto'}}
            >
              {
                isFavourite ? '❤' : 'Favourite'
              }
            </button>
            :
            ''
        }
      </div>
    </div>
  )
}

export default Movie
