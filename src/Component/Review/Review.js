import React from 'react';
import './Review.css';
import {FaStar} from "react-icons/fa"
const Review = ({ review }) => {
    const { Picture, name, about, country, rating } = review;
    const number = parseInt(rating)
    return (
        <div className=' mx-auto review-container col-6 md:col-4 pt-1'>
            <div >
            <div className='d-flex justify-content-between mb-2 '>
                <div className='d-flex align-items-center'>
                    <img src={Picture} style={{ width: "50px", height: "50px",borderRadius:"50%"}} alt="" />
                    <div className='ms-2'>
                        {
                            [...Array(number)].map(()=> {
                                return <FaStar key={Math.random()} className="text-warning"></FaStar>
                            })
                    }
                    <h6>{name}</h6>
                    </div>
                </div>
               <img src={country} style={{height:"20px",width:"20px",borderRadius:"50%"}} alt="" />
            </div>
            <small title={about}> <i>{`${about.slice(0,97)}...`}</i> </small>
           </div>
        </div>
    );
};

export default Review;