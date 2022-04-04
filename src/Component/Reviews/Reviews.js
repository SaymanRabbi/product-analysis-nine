import React from 'react';
import { useReviews } from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    console.log(reviews);
    return (
        <div className=' container row gap-5 mx-auto mt-5 mb-5'>
            <h1 className='text-center'>All Customer Reviews</h1>
            {
                reviews.map(review=><Review review={review} key={review.id}></Review>)
           }
        </div>
    );
};

export default Reviews;