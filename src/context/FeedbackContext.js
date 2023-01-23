import { createContext, useState } from 'react';
import feedbacks from '../data/feedbackData';

const FeedbackContext = createContext();

export const FeedbackProvider = ({
  children
}) => {
  const [feedbacksList, setFeedbacksList] = useState(
    feedbacks
  );

  const handleFeedbackDelete = function(feedbackId) {
    console.log('To delete: ' + feedbackId);
    let l = [];
    feedbacksList.forEach(item => {
      l.push({
        ...item, 
        isDeleted: ( (item.id === feedbackId) ? true : item.isDeleted )
      });
    });
    setFeedbacksList(l);
  };
  
  const handleReviewPostClick = function (review) {
    console.log(review);
    console.log(review.description);
    console.log(review.rating);
    if (review && review.description && review.rating) {
      console.log('setting id');
      review.id = Math.floor(Math.random() * 1000 );
    }
    console.log(review.id);
    setFeedbacksList([
      ...feedbacksList, review
    ]);
  };

  return (
    <FeedbackContext.Provider value={
      {
        feedbacksList, handleFeedbackDelete, handleReviewPostClick
      }
    }>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext; // result of useContext()