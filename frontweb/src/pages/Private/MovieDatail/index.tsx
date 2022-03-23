import { AxiosRequestConfig } from 'axios';
import ReviewForm from 'components/ReviewForm';
import ReviewListing from 'components/ReviewListing';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Review } from 'types/review';
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

  return (
    <>
      <div className="home-details-movie">
        <h1>Id filme {movieId}</h1>
        <ReviewForm movieId={movieId}/>
        <ReviewListing reviews={reviews}/>
      </div>
    </>
  );
};

export default MovieDetail;
