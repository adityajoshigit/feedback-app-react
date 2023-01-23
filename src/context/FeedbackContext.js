import { createContext, useState } from 'react';
import feedbacks from '../data/feedbackData';

const FeedbackContext = createContext();

export const FeedbackProvider = ({
  children
}) => {
  const [feedbacksList, setFeedbacksList] = useState(
    feedbacks
  );

  const [feedbackToEdit, setFeedbackToEdit] = useState(
    {
      item: {},
      edit: false
    }
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
  
  const handleReviewPostClick = function (review, opFlag) {
    console.log(review);
    console.log(review.description);
    console.log(review.rating);
    let list = [];
    if (review && review.description && review.rating) {
      console.log('setting id');
      if (opFlag === 'c') {
        review.id = Math.floor(Math.random() * 1000 );
        list = [
          ...feedbacksList, review
        ];
      } else if(opFlag === 'u') {
        feedbacksList.forEach( (item) => {
          const newItem = {
            ...item,
            description: (review.id === item.id) ? review.description : item.description,
            rating: (review.id === item.id) ? review.rating : item.rating
          };
          list.push(newItem);
        } );
        setFeedbackToEdit({ item: {}, edit: false});
      }
      console.log(opFlag + '_' + review.id);
      setFeedbacksList(list);
    }
  };

  const handleEditFeedback = function(reviewObj) {
    setFeedbackToEdit({ item: reviewObj, edit: true });
  }

  return (
    <FeedbackContext.Provider value={
      {
        feedbackToEdit,
        feedbacksList, 
        handleFeedbackDelete, 
        handleReviewPostClick,
        handleEditFeedback
      }
    }>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext; // result of useContext()