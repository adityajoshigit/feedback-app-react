import { useState } from "react";
import FeedbackItem from "./components/FeedbackItem";
import Header from "./components/Header";
import feedbacks from "./data/feedbackData";

function App() {

  const [allFeedbacks, setAllFeedbacks] = useState(feedbacks);

  return (
    <>
      <Header headerTitle={'Any feedback for me..?'}/>
      <div className='container'>
        <FeedbackItem item={{id: 1, description: 'something', rating: 10}} />
        {/* {
          allFeedbacks.forEach(feedbackItem => {
            return <FeedbackItem item={feedbackItem} key={feedbackItem.id} />;
          })
        } */}
      </div>
    </>
  );
}

export default App;
