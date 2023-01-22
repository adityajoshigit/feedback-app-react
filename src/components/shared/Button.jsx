import React from 'react'
import PropTypes from 'prop-types'

function Button({
  bgColor,
  textColor,
  btnClass,
  label,
  onClick,
  isDisabled,
  type
}) {
  const disabledFlag = (isDisabled === null || isDisabled === undefined) 
                        ? false
                        : isDisabled;

  return (
    <button 
      onClick={onClick}
      className={`btn btn-${btnClass}`}
      disabled={disabledFlag}
      type={type}
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