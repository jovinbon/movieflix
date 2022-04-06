import { AxiosRequestConfig } from 'axios';
import ReviewForm from 'components/ReviewForm';
import ReviewListing from 'components/ReviewListing';
import ReviewMovie from 'components/ReviewMovie';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from 'types/movie';
import { Review } from 'types/review';
import { hasAnyRole } from 'util/auth';
import { BASE_URL, requestBackend } from 'util/requests';
import './styles.css';

type urlParams = {
  movieId: string;
};

const MovieDetail = () => {
  const { movieId } = useParams<urlParams>();

  const [movieReview, setMovieReview] = useState<Movie>();

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `${BASE_URL}/movies/${movieId}`,
      withCredentials: true,
    };
    requestBackend(config).then((response) => {
      setMovieReview(response.data);
    });
  }, [movieId]);

  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `${BASE_URL}/movies/${movieId}/reviews`,
      withCredentials: true,
    };
    requestBackend(config).then((response) => {
      setReviews(response.data);
    });
  }, [movieId]);

  const handleInserUpdatePageReview = (review: Review) => {
     //...reviews desestruturado do useState
     const clone = [...reviews];
     clone.push(review);
     setReviews(clone);
  }

  return (
      <div className="home-details-movie">
        {movieReview ? <ReviewMovie movie={movieReview} /> : null}
        {hasAnyRole(['ROLE_MEMBER']) && (
          <ReviewForm movieId={movieId} onInsertUpdatePageReview={handleInserUpdatePageReview} />
          )}

        <ReviewListing reviews={reviews} />
      </div>
  );
};

export default MovieDetail;
