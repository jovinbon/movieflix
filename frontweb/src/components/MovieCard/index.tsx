import { Movie } from 'types/movie';
import './styles.css';

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="base-card movie-card">
      <div className="card-image-container">
        <img src={movie.imgUrl} alt={movie.title} />
      </div>
      <div className="card-bottom-container">
        <h4>{movie.title}</h4>
        <h5>{movie.year}</h5>
        <h6>{movie.subTitle}</h6>
      </div>
    </div>
  );
};

export default MovieCard;
