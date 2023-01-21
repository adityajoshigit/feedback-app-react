import React from 'react'
import FeedbackItem from './FeedbackItem';

function FeedbackList({
    feedbacks
}) {
  return (
    <div className='feedback-list'>
        {   
            (feedbacks && feedbacks.length) 
            ? (
                feedbacks.map(item => (<FeedbackItem key={item.id} item={item} />) )
            )
            : 'No feedbacks yet..'
        }
    </div>
  )
}

export default FeedbackList;