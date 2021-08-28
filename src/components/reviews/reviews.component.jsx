import React from 'react'
import ImageColton  from '../../assest/image-colton.jpg'
import ImageAnne  from '../../assest/image-anne.jpg'
import ImageIrene  from '../../assest/image-irene.jpg'

import './reviews.styles.scss';
import Review from '../review/review.component';

const Reviews = ()=>{
    const review1 =`We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!`
    
    const review2 = `Customer servie is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.`;

    const review3 = `Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to eveyone!`;

    return (
    <div className='reviews'>
        <div className='reviews__reviews'>
            <div className='reviews__review--2'>
                <Review image={ImageColton} name='Coloton Smith' review={review1} />
            </div>
            <div className='reviews__review--1'>
                <Review image={ImageIrene} name='Irene Roberts' review={review2} />
            </div>
            <div className='reviews__review'>
                <Review image={ImageAnne} name='Anne Wallace' review={review3} />
            </div>
            
        </div>
        
    </div>
)}

export default Reviews