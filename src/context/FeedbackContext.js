import { createContext, useState, useEffect } from 'react';

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

  const apiCallout = function(reqData) {
    return fetch(
      reqData.url,
      {
        method: reqData.method,
        headers: {
          'Content-Type': reqData.contentType
        }
      }
    );
  };

  // Get data on page load
  useEffect(
    () => {
      const getDataFromServer = async function () {
        setIsLoading(true);
        const reqData = {
          url: `http://localhost:5000/feedbackData?_sort=id&_order=desc`,
          method: 'GET',
          contentType: 'application/json'
        };
        try {
          const response = (await apiCallout(reqData));
          const dataList = await response.json();
          console.log(dataList);
          if (dataList) {
            setFeedbacksList(dataList);
          }
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
          console.log('--test--');
        }
      }
      getDataFromServer();
    },
    []
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