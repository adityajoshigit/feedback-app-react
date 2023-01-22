import React from 'react'
import PropTypes from 'prop-types'

function Button({
  bgColor,
  textColor,
  btnClass,
  label,
  onClick,
  isDisabled
}) {
  const btnStyle = {
    backgroundColor: bgColor || 'white',
    color: textColor || 'black'
  };
  const disabledFlag = (isDisabled === null || isDisabled === undefined) 
                        ? false
                        : isDisabled;

  return (
    <button 
      onClick={onClick}
      style={ btnStyle }
      className={`btn ${btnClass}`}
      disabled={disabledFlag}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  btnClass: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool
};

Button.defaultProps = {
  label: 'Button',
  onClick: () => console.log('Button Clicked'),
  isDisabled: true
};

export default Button