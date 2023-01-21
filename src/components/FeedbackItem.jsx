import PropTypes from 'prop-types';
import Card from './shared/Card';
import { FaTimes } from 'react-icons/fa';

function FeedbackItem({
  item,
  handleFeedbackDelete
}) {
  const handleCloseClick = function() {
    console.log('item ' + item.id + 'clicked for delete');
    // handleFeedbackDelete(item.id);
  }

  return (
    <Card reverse={false}>
      <div className='num-display'>
        {item.rating}
      </div>
      <button 
        className='close'
        onClick={handleCloseClick}
      >
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>
        {item.description}
      </div>
    </Card>
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