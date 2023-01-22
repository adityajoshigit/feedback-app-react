import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackStats from "./components/FeedbackStats";
import feedbacks from "./data/feedbackData";

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
    }
  };


  return (
    <>
      <Header headerTitle={'Any feedback for me..?'}/>
      <div className='container'>
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
