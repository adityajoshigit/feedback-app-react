import PropTypes from 'prop-types';
import React, { useState } from 'react';

function FeedbackItem({
  item
}) {
  
  const [_item, setItem] = useState(item);

  return (
    <div className='card'>
      <div className='num-display'>
        {_item.rating}
      </div>
      <div className='text-display'>
        {_item.description}
      </div>
    </div>
  )
}

FeedbackItem.defaultProps = {
  item: {
    id: Math.random()*5,
    rating: 10,
    description: 'Informative content, undoubtedly one of the best courses I have ever followed. Thanks!',
    author: {
      firstName: 'John',
      lastName: 'Doe'
    }
  },
};

FeedbackItem.propTypes = {
  item: PropTypes.object
};

export default FeedbackItem;