import React from 'react'
import PropTypes from 'prop-types'

function Button({
  btnClass,
  label,
  onBtnClick,
  isDisabled,
  type
}) {
  const disabledFlag = (isDisabled === null || isDisabled === undefined) 
                        ? false
                        : isDisabled;

  return (
    <button 
      onClick={onBtnClick}
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
  onBtnClick: PropTypes.func,
  isDisabled: PropTypes.bool
};

Button.defaultProps = {
  label: 'Button',
  onBtnClick: () => console.log('Button Clicked'),
  isDisabled: true
};

export default Button