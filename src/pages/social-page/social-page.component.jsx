import React from 'react'

import './social-page.styles.scss'
import SocialDetail from '../../components/social-detail/social-detail.component';
import Reviews from '../../components/reviews/reviews.component';

const SocialPage = () => (
    <div className='social-page'>
        <SocialDetail />
        <Reviews />
    </div>
)

export default SocialPage;