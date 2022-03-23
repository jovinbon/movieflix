import { AxiosRequestConfig } from 'axios';
import MovieCard from 'components/MovieCard';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from 'types/movie';
import { SpringPage } from 'types/vendor/spring';
import { BASE_URL, requestBackend } from 'util/requests';
import './styles.css';

const Catalog = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `${BASE_URL}/movies`,
      withCredentials: true,
    }

    requestBackend(config).then((response) => {
      setPage(response.data);
    })
  }, []);

  return (
    <div className="container my-4 catalog-container">
      <div className="row catalog-title-container">
        <h1>Lista de filmes</h1>
      </div>
      {page?.content.map(movie => (
        <div className="row" key={movie.id}>
          <Link to={`/movies/${movie.id}/reviews`}>
            <MovieCard movie={movie}/>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Catalog;
