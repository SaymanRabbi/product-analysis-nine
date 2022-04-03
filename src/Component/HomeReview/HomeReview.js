import React from 'react';

const HomeReview = ({review}) => {
    const {Picture,name,about}=review
    return (
        <div className=' mx-auto review-container col-6 md:col-4'>
            <img src={Picture} className="d-flex mx-auto mt-3" style={{ width: "150px", height: "150px", borderRadius: "50%" }} alt="" />
            <h5 className='text-center mt-3'>Name: {name}</h5>
            <p>{`${about.slice(0,90)+'....'}`}</p>
        </div>
    );
};

export default HomeReview;