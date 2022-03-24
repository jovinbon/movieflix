import { AxiosRequestConfig } from 'axios';
import ReviewForm from 'components/ReviewForm';
import ReviewListing from 'components/ReviewListing';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Review } from 'types/review';
import { hasAnyRole } from 'util/auth';
import { BASE_URL, requestBackend } from 'util/requests';
import './styles.css';

type urlParams = {
  movieId: string;
};

const MovieDetail = () => {
  const { movieId } = useParams<urlParams>();

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
    <>
      <div className="home-details-movie">
        <h1>Id filme {movieId}</h1>
        {hasAnyRole(['ROLE_MEMBER']) && (
          <ReviewForm movieId={movieId} onInsertUpdatePageReview={handleInserUpdatePageReview} />
          )}

        <ReviewListing reviews={reviews} />
      </div>
    </>
  );
};

export default MovieDetail;
