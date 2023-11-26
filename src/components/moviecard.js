import React from 'react';
import { Link } from 'react-router-dom'; 
import './Styles/cart.css';
import play from './Images/play.gif';
import movieData from './JSON/movie.json';

const MovieCard = () => {
  return (
    <div className="container">
      <div className="row">
        {movieData.map((movie) => (
          <div key={movie.id} className="col-md-3">
            <div className="card card-1 m-4 rounded-4" data-bs-theme="dark">
              <Link to={`/fullmoviestream/${movie.id}`} data-bs-toggle="tooltip" title={`${movie.name}, ${movie.info}`}>
                <img src={movie.imageUrl} className="card-img-top  rounded-4" alt={movie.name} />
                <div className="card-body card-body-1">
                  <img className='play' src={play} alt="Play Button" />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCard;
