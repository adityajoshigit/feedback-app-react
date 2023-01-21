import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import feedbacks from "./data/feedbackData";

function App() {

  const [allFeedbacks, setAllFeedbacks] = useState(feedbacks);

  const eventHandlers = {
    handleFeedbackDelete: function(feedbackId) {
      console.log('To delete: ' + feedbackId);
    }
  };

  return (
    <>
      <Header headerTitle={'Any feedback for me..?'}/>
      <div className='container'>
        <FeedbackList 
          feedbacks={allFeedbacks} 
          handleFeedbackDelete={eventHandlers.handleFeedbackDelete}
        />
      </div>
    </>
  );
}

export default App;
