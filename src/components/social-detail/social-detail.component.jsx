import React from 'react'

import './social-detail.styles.scss'
import SocialText from '../social-text/social-text.component'
import SocialRating from '../social-rating/social-rating.component'

const SocialDetail = () => (
    <div className='social-detail'>
        <SocialText />
        <div className='social-detail__ratings'>
            <div className='social-detail__rating--1'>
                <SocialRating text='Rated 5 Stars in Review' />
            </div>
            <div className='social-detail__rating--2'>
                <SocialRating text='Rated 5 Stars in Report Guru' />
            </div>
            <div className='social-detail__rating'>
                <SocialRating text='Rated 5 Stars in BestTech' />
            </div>
        </div>
        
    </div>
)

export default SocialDetail