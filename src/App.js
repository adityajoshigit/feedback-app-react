import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import feedbacks from "./data/feedbackData";

function App() {

  const [allFeedbacks, setAllFeedbacks] = useState(feedbacks);

  return (
    <>
      <Header headerTitle={'Any feedback for me..?'}/>
      <div className='container'>
        <FeedbackList feedbacks={allFeedbacks} />
      </div>
    </>
  );
}

export default App;
