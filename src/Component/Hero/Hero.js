import { Link } from 'react-router-dom';
import { useReviews } from '../../hooks/useReviews';
import Baner from '../../Image/slider-2.webp';
import HomeReview from '../HomeReview/HomeReview';
import './Hero.css';

const Hero = () => {
    const [reviews] = useReviews();
    const thereReviews = reviews.slice(0, 3);
    
    return (
        <div>
        <div style={{ backgroundImage: `url(${Baner})`, backgroundSize: "cover", backgroundPosition: "center center", height: "650px", width: "auto" }}>
            
            <div className='hero-container container pt-5'>
                <div>
                    <h1 className='text-white display-4 fw-bold text-uppercase'>Feel the Music</h1>
                    <h1 className='text-white display-4 fw-bold text-uppercase'>in your bones</h1>
                    <p className='text-white fs-1 mb-0'>Music loud</p>
                    <p className='text-white fs-1 mt-0'>Fulfill your music needs</p>
                    <button className='py-2      custom-button'>ORER NOW</button>
                </div>
                <div>

                </div>
            </div>
            
            </div>
            <h2 className='text-center mt-3 fs-1'>Review Section</h2>
            <div className='row container mx-auto mt-5 mb-5 gap-4'>
            {
                thereReviews.map(review=><HomeReview review={review} key={review.id}></HomeReview>)
                }
            </div>
            <Link to='/reviews' className='custom-button py-2 d-flex mx-auto justify-content-center align-items-center bg-white text-decoration-none mb-5'>All Review</Link>    
        </div>
    );
};

export default Hero;