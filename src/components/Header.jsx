import React from 'react';
import PropTypes from 'prop-types';

function Header({
  headerTitle,
  headerTextColor
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
  headerTitle: 'Hey there!',
  // headerTextColor: '#ff6a95'
};

Header.propTypes = {
  headerTitle: PropTypes.string
};

export default Header