import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({backgroundColor, text, onClick, className}) => {
  return (
    <button data-testid="btnTestTemplate"
            className={className}
            style={{backgroundColor: backgroundColor}}
            onClick={onClick}>{text}</button>
  )
};

Button.protoTypes = {
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
}

Button.defaultProps = {
  className: "btnForm",
  backgroundColor: '#B3382C',
  text: 'Button',
  onClick: () => {
  }
}
export default Button;