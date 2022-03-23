import { Movie } from 'types/movie';
import './styles.css';

type Props = {
  movie: Movie;
}

const MovieCard = ( { movie } : Props ) => {
  return (
    <>
      <div className="movie-card">
        <h6>{movie.title}</h6>
      </div>
    </>
  );
};

export default MovieCard;
