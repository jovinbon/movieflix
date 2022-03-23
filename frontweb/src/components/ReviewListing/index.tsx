import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Review } from 'types/review';
import { BASE_URL, requestBackend } from 'util/requests';
import './styles.css';

type ListingReviews = {
  reviews: Review[];
};

const ReviewListing = ({ reviews }: ListingReviews) => {

  const [list, setList] = useState<ListingReviews>();

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `${BASE_URL}/reviews`,
      withCredentials: true,
    };
    requestBackend(config).then((response) => {
      setList(response.data);
    });
  }, [reviews]);

  
  return (
    <div className="container my-4 catalog-container">
      {list?.map(review =>(
        <div className="content-reviews" key={review.id}>
          <h3>{review.user.name}</h3>
          <div className="review">
            <p>{review.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewListing;
