import React from 'react'
import { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import { motion, AnimatePresence } from 'framer-motion';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {

  const { feedbacksList } = useContext(FeedbackContext);
  console.log(feedbacksList);
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {   
          (feedbacksList && feedbacksList.filter(item => !item.isDeleted).length) 
          ? (
            feedbacksList
              .filter(item => !item.isDeleted )
              .map(item => (
                <motion.div 
                  key={item.id}
                  initial={ { opacity: 0 } }
                  animate={ { opacity: 1 } }
                  exit={ { opacity: 0 } } 
                >
                  <FeedbackItem 
                    key={item.id} 
                    item={item} 
                  />
                </motion.div>
              ) )
          )
          : 'No feedbacks yet..'
        }
      </AnimatePresence>
    </div>
  )

  // return (
  //   <div className='feedback-list'>
  //     {   
  //       (feedbacksList && feedbacksList.filter(item => !item.isDeleted).length) 
  //       ? (
  //         feedbacksList
  //           .filter(item => !item.isDeleted )
  //           .map(item => (
  //             <FeedbackItem 
  //               key={item.id} 
  //               item={item} 
  //               handleFeedbackDelete={handleFeedbackDelete}/>
  //           ) )
  //       )
  //       : 'No feedbacks yet..'
  //     }
  //   </div>
  // )
}

export default FeedbackList;