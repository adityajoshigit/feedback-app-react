import React from 'react';
import PropTypes from 'prop-types';

function Header({
  headerTitle
}) {
  return (
    <header>
      <div className='header div'>
        <h1>
          {headerTitle}
        </h1>
      </div>
    </header>
  )
}

Header.defaultProps = {
  headerTitle: 'Hey there!'
};

Header.propTypes = {
  headerTitle: PropTypes.string
};

export default Header