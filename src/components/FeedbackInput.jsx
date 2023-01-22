import React, { useState } from 'react'
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card';

function FeedbackInput({
  onReviewPostClick
}) {

  const [rating, setRating] = useState(10);
  const [comment, setComment] = useState('');
  const [conditionText, setConditionText] = useState('');
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  const eventHandlers = {
    onCommentChange: function(e) {
      const value = e.target.value;
      setComment(value);
      if (value && value.trim() && value.trim().length >= 10) {
        setConditionText('');
        setIsBtnDisabled(false);
      } else {
        setConditionText('Please write at least 10 characters to post your review.');
        setIsBtnDisabled(true);
      }
    },
    onFeedbackSubmit: function (e) {
      e.preventDefault();
      console.log('submit event fired');
      if (comment && comment.trim() && comment.trim().length >= 10) {
        console.log('is valid');
        onReviewPostClick({
          rating: rating,
          description: comment
        });
      }
      resetReviewData();
    },
    onRatingSelect: function (newVal) {
      setRating(newVal);
    }
  };

  const resetReviewData = function() {
    setComment('');
    setRating(10);
  }
  

  return (
    <Card>
      <form onSubmit={eventHandlers.onFeedbackSubmit}>
        <h2>
          How would you rate your overall experience with us?
        </h2>
        <RatingSelect 
          onRatingSelect={eventHandlers.onRatingSelect}
          defaultSelectedValue={rating}
        />
        <div className='input-group'>
          <input 
            type='text'
            placeholder='Please comment here..'
            onChange={eventHandlers.onCommentChange}
            value={comment}
          />
          <Button 
            btnClass='primary' 
            isDisabled={isBtnDisabled} 
            label='Post Review' 
            type='submit'
          />
        </div>
        <p className='condition-text'>
          {conditionText}
        </p>
      </form>
    </Card>
  )
}

export default FeedbackInput