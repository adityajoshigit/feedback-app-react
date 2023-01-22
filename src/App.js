import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackStats from "./components/FeedbackStats";
import feedbacks from "./data/feedbackData";
import FeedbackInput from "./components/FeedbackInput";

function App() {

  const [allFeedbacks, setAllFeedbacks] = useState(feedbacks);

  const eventHandlers = {
    handleFeedbackDelete: function(feedbackId) {
      console.log('To delete: ' + feedbackId);
      let l = [];
      allFeedbacks.forEach(item => {
        l.push({
          ...item, 
          isDeleted: ( (item.id === feedbackId) ? true : item.isDeleted )
        });
      });
      setAllFeedbacks(l);
    },
    handleReviewPostClick: function (review) {
      console.log(review);
      console.log(review.description);
      console.log(review.rating);
      if (review && review.description && review.rating) {
        review.id = Math.random * 1000;
      }
      setAllFeedbacks([
        ...allFeedbacks, review
      ]);
    }
  };


  return (
    <>
      <Header headerTitle={'Any feedback for me..?'}/>
      <div className='container'>
        <FeedbackInput 
          onReviewPostClick={eventHandlers.handleReviewPostClick}
        />
        <FeedbackStats 
          feedbacks={allFeedbacks}
        />
        <FeedbackList 
          feedbacks={allFeedbacks} 
          handleFeedbackDelete={eventHandlers.handleFeedbackDelete}
        />
      </div>
    </>
  );
}

export default App;
