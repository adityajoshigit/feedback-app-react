import React from 'react'
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  const { feedbacksList } = useContext(FeedbackContext);

  if (!Boolean(feedbacksList)) {
    return <></>;
  }

  const activeFeedbacks = feedbacksList.filter(item => !item.isDeleted);

  if (activeFeedbacks.length === 0) {
    return <></>;
  }

  const avgRating = ( 
                      activeFeedbacks
                      .map(item => item.rating)
                      .reduce((a, b) => a + b)
                    ) 
                    / 
                    activeFeedbacks.length;
  
  return (
    <div className='feedback-stats'>
      <h4 className=''>
        {activeFeedbacks.length} Reviews
      </h4>
      <h4 className=''>
        Average Rating: {avgRating}
      </h4>
    </div>
  )
}

export default FeedbackStats