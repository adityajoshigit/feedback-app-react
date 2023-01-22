import React from 'react'
import PropTypes from 'prop-types';
function FeedbackStats({
  feedbacks
}) {
  if (!Boolean(feedbacks)) {
    return <></>;
  }

  const activeFeedbacks = feedbacks.filter(item => !item.isDeleted);

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

FeedbackStats.defaultProps = {
  feedbacks: []
};

FeedbackStats.propTypes = {
  feedbacks: PropTypes.array.isRequired
};

export default FeedbackStats