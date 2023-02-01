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

  const apiCallout = function({
    method,
    body,
    contentType,
    url
  }) {
    let reqParams = {
      method: method,
      headers: {
        'Content-Type': contentType
      },
    };
    if (body) {
      reqParams = {
        ...reqParams, 
        body: JSON.stringify(body)
      };
    }
    return fetch(
      url,
      reqParams
    );
  };


  const getAllFeedbacks = async function () {
    const reqData = {
      url: `/feedbackData?_sort=id&_order=desc`,
      method: 'GET',
      contentType: 'application/json'
    };
    let dataList = [];
    try {
      const response = (await apiCallout(reqData));
      dataList = await response.json();
    } catch (error) {
      console.log(error);
    }
    return dataList;
  }

  // Get data on page load
  useEffect(
    () => {
      const getData = async () => {
          const response = (await apiCallout({
            url: `/feedbackData?_sort=id&_order=desc`,
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

  const handleFeedbackDelete = function(feedbackId) {
    apiCallout({
      url: `/feedbackData/${feedbackId}`,
      method: 'DELETE'
    });
    console.log('To delete: ' + feedbackId);
    
    getAllFeedbacks()
      .then(res => setFeedbacksList(res));
    
  };
  
  const handleReviewPostClick = async function (review, opFlag) {
    let list = [];
    if (review && review.description && review.rating) {
      let reqData = {
        url: '/feedbackData',
        method: 'POST',
        contentType: 'application/json',
        body: review
      };
      setIsLoading(true);
      if (opFlag === 'c') {
        const response = (await apiCallout(reqData));
        const result = await response.json();
        
        list = [
          ...feedbacksList, result
        ];
      } else if(opFlag === 'u') {
        reqData.url = `/feedbackData/${review.id}`;
        reqData.method = 'PUT';
        const response = (await apiCallout(reqData));
        const updatedDataItem = await response.json();
        
        feedbacksList.forEach( (item) => {
          const newItem = {
            ...item,
            description: (review.id === item.id) ? updatedDataItem.description : item.description,
            rating: (review.id === item.id) ? updatedDataItem.rating : item.rating
          };
          list.push(newItem);
        } );
        setFeedbackToEdit({ item: {}, edit: false});
      }
      // console.log(list);
      setFeedbacksList(list);
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