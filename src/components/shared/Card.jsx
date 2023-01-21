import React from 'react'
import PropTypes from 'prop-types'

function Card({
    children,
    reverse
}) {
  return (
    <div className={('card')+( reverse ? ' reverse': '')}>
        {children}
    </div>
  )
}

Card.propTypes = {
    children: PropTypes.node,
    reverse: PropTypes.bool
};

Card.defaultProps = {
    reverse: false
};

export default Card