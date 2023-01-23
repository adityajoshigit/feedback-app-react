import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackInput from "./components/FeedbackInput";
import About from "./pages/About";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";


function App() {

  return (
    <FeedbackProvider>
      <Router>
        <Header headerTitle={'Any feedback for me..?'}/>
        <div className='container'>
          <Routes>
            <Route 
              path="/about" 
              element={
                <About />
              }
            />
            <Route exact path="/" element={
                <>
                  <FeedbackInput  />
                  <FeedbackStats  />
                  <FeedbackList   />
                </>
              } 
            />
          </Routes>

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
