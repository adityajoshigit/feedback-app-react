import React from 'react'
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types'

function FeedbackList({
    feedbacks,
    handleFeedbackDelete
}) {
  return (
    <div className='feedback-list'>
      {   
        (feedbacks && feedbacks.filter(item => !item.isDeleted).length) 
        ? (
          feedbacks
            .filter(item => !item.isDeleted )
            .map(item => (
              <FeedbackItem 
                key={item.id} 
                item={item} 
                handleFeedbackDelete={handleFeedbackDelete}/>
            ) )
        )
        : 'No feedbacks yet..'
      }
    </div>
  )
}

FeedbackList.defaultProps = {
    feedbacks: []
};

FeedbackList.propTypes = {
    feedbacks: PropTypes.array
};

export default FeedbackList;