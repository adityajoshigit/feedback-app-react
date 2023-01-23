import React, { useState, useContext, useEffect } from 'react'
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackInput() {

  const [rating, setRating] = useState(10);
  const [comment, setComment] = useState('');
  const [conditionText, setConditionText] = useState('');
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [postBtnLabel, setPostBtnLabel] = useState('Post');

  const { 
    handleReviewPostClick ,
    feedbackToEdit
  } = useContext(FeedbackContext);

  useEffect(() => {
      if (feedbackToEdit && feedbackToEdit.item && feedbackToEdit.edit) {
        updateFeedbackFormData({
          ...(feedbackToEdit.item)
        });
        setIsBtnDisabled(false);
        setPostBtnLabel('Update');
      }
    }, 
    [feedbackToEdit]
  );


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
        handleReviewPostClick({
          ...(feedbackToEdit.item),
          rating: rating,
          description: comment
        }, (postBtnLabel === 'Update') ? 'u' : 'c');
      }
      updateFeedbackFormData({ description: '', rating: 10 });
    },
    onRatingSelect: function (newVal) {
      setRating(newVal);
    }
  };

  const updateFeedbackFormData = function(obj) {
    setComment(obj.description);
    setRating(obj.rating);
    setPostBtnLabel('Post');
    setIsBtnDisabled(true);
  }
  

  return (
    <Card>
      <form onSubmit={eventHandlers.onFeedbackSubmit}>
        <h2>
          How would you rate your overall experience with us?
        </h2>
        <RatingSelect 
          onRatingSelect={eventHandlers.onRatingSelect}
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
            label={postBtnLabel} 
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