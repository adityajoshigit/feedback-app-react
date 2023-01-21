import React from 'react'
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types'

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

FeedbackList.defaultProps = {
    feedbacks: []
};

FeedbackList.propTypes = {
    feedbacks: PropTypes.array
};

export default FeedbackList;