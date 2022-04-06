import { Movie } from 'types/movie';
import './styles.css';

type ObjMovie = {
  movie: Movie;
};

const ReviewMovie = ({ movie }: ObjMovie) => {
  return (
    <div className="base-card review-movie-card">
      <div className="review-image-container">
        <img src={movie.imgUrl} alt={movie.title} />
      </div>
      <div className="review-text-container">
        <div className="review-card-container">
          <h2>{movie.title}</h2>
          <h3>{movie.year}</h3>
          <h4>{movie.subTitle}</h4>
        </div>
        <div className="card-synopse-container">
          <p>{movie.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewMovie;
