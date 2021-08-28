import React from 'react'

import './review.styles.scss'

const Review = ({image,review,name}) =>(
    <div className='review'>
        <div className='review__user-info'>
            <img className='review__avtar' src={image} alt='avtar' />
            <div className='review__user-detail'>
                <p className='review__user-name'>{name}</p>
                <p className='review__user-verified-buyer'>Verified Buyer</p>
            </div>
        </div>
        <p className='review__text'>
            {review}
        </p>
    </div>
)

export default Review