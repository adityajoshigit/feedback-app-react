import React from 'react'
import FeedbackItem from './FeedbackItem';

function FeedbackList({
    feedbacks
}) {
  return (
    <div className='feedback-list'>
        {
            feedbacks.map(item => (<FeedbackItem key={item.id} item={item} />) )
        }
    </div>
  )
}

export default FeedbackList;