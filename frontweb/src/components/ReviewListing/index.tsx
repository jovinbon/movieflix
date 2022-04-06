import { ReactComponent as ReviewStar } from 'assets/images/review-star.svg';
import { Review } from 'types/review';
import './styles.css';

type ListingReviews = {
  reviews: Review[];
};

const ReviewListing = ({ reviews }: ListingReviews) => {
  return (
    <div className="reviews-container">
      {reviews?.map((review) => (
        <div className="content-reviews" key={review.id}>
          <div className="star-user">
            <ReviewStar />
            <h3>{review.user.name}</h3>
          </div>

          <div className="review">
            <p>{review.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewListing;
