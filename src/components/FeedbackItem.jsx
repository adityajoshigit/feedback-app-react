import PropTypes from 'prop-types';
import Card from './shared/Card';

function FeedbackItem({
  item
}) {
  return (
    <Card reverse={false}>
      <div className='num-display'>
        {item.rating}
      </div>
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