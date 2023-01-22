import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackStats from "./components/FeedbackStats";
import feedbacks from "./data/feedbackData";
import FeedbackInput from "./components/FeedbackInput";
import About from "./pages/About";

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
        console.log('setting id');
        review.id = Math.floor(Math.random() * 1000 );
      }
      console.log(review.id);
      setAllFeedbacks([
        ...allFeedbacks, review
      ]);
    }
  };


  return (
    <Router>
      <Header headerTitle={'Any feedback for me..?'}/>
      <div className='container'>

        <Routes>
          <Route exact path="/" element={
              <>
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
              </>
            } 
          />
          <Route 
            path="/about" 
            element={
              <About />
            }
          />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
