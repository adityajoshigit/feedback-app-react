import PropTypes from 'prop-types';

function FeedbackItem({
  item
}) {
  return (
    <div className='card'>
      <div className='num-display'>
        {item.rating}
      </div>
      <div className='text-display'>
        {item.description}
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