import React from 'react'
import { ReactComponent as StarIcon } from '../../assest/icon-star.svg'

import './social-rating.styles.scss'

const SocialRating = ({text}) => (
    <div className='social-rating'>
        <div className='social-rating__stars-container'>
            <StarIcon viewBox='0 0 17 16' className='social-rating__star' />
            <StarIcon viewBox='0 0 17 16' className='social-rating__star' />
            <StarIcon viewBox='0 0 17 16' className='social-rating__star' />
            <StarIcon viewBox='0 0 17 16' className='social-rating__star' />
            <StarIcon viewBox='0 0 17 16' className='social-rating__star' />
        </div>
        <p className='social-rating__text'>{text}</p>
    </div>
)

export default SocialRating;