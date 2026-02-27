import {ReactElement} from 'react';
import ReviewForm from './review-form.tsx';
import ReviewItem from './review-item.tsx';

import {Review} from '../../../types/review.ts';

type ReviewsListProps = {
  reviews: Review[];
}

function ReviewsList({reviews}: ReviewsListProps): ReactElement {
  return (
    <section className='offer__reviews reviews'>
      <h2 className='reviews__title'>Reviews &middot; <span className='reviews__amount'>{reviews.length}</span></h2>

      <ul className='reviews__list'>
        {reviews.map((review) => (
          <ReviewItem
            key={review.id}
            data={review}
          />
        ))}
      </ul>

      <ReviewForm/>
    </section>
  );
}

export default ReviewsList;
