import { createContext, useState, useEffect } from 'react';
import { 
  getAll, 
  postFeedback, 
  putFeedback, 
  deleteFeedback,
  apiCallout,
} from '../services/api';

const FeedbackContext = createContext();

export const FeedbackProvider = ({
  children
}) => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [feedbacksList, setFeedbacksList] = useState(
    []
  );

  const [feedbackToEdit, setFeedbackToEdit] = useState(
    {
      item: {},
      edit: false
    }
  );


  // Get data on page load
  useEffect(
    () => {
      const getData = async () => {
          const response = (await apiCallout({
            url: `http://localhost:5000/feedbackData?_sort=id&_order=desc`,
            method: 'GET',
            contentType: 'application/json'
          }));
          const dataList = await response.json();
          if (dataList) {
            setFeedbacksList(dataList);
          }
      };
      (async function () {
        setIsLoading(true);
        await getData();
        setIsLoading(false);
      })();
      // }
    },
    []
  );

  const handleFeedbackDelete = async function(feedbackId) {
    setIsLoading(true);
    await deleteFeedback(feedbackId);
    setFeedbacksList(
      await getAll()
    );
    setIsLoading(false);
  };
  
  const handleReviewPostClick = async function (review, opFlag) {
    setIsLoading(true);
    if (review && review.description && review.rating) {
      if (opFlag === 'c') {
        const result = await postFeedback(review);
        setFeedbacksList( [ ...feedbacksList, result ] );
      } else if(opFlag === 'u') {
        const updatedDataItem = await putFeedback(review);
        setFeedbacksList(
          feedbacksList.map(f => {
            if(f.id === review.id) {
              return updatedDataItem;
            } else {
              return f;
            }
          })
        );
        setFeedbackToEdit({ item: {}, edit: false});
      }
      setIsLoading(false);
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
        isLoading, 
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