import React from 'react'
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion';

function FeedbackList({
    feedbacks,
    handleFeedbackDelete
}) {
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {   
          (feedbacks && feedbacks.filter(item => !item.isDeleted).length) 
          ? (
            feedbacks
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
                    handleFeedbackDelete={handleFeedbackDelete}
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
  //       (feedbacks && feedbacks.filter(item => !item.isDeleted).length) 
  //       ? (
  //         feedbacks
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

FeedbackList.defaultProps = {
    feedbacks: []
};

FeedbackList.propTypes = {
    feedbacks: PropTypes.array
};

export default FeedbackList;