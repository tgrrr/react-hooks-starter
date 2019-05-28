import React from 'react';
import propTypes from 'prop-types';

const Button = ({
  children,
  className,
  color,
  dataId,
  disabled,
  name,
  onClick,
  type,
  ...rest,
  }) => (
    <div className='buttonWrapper'>
      <button
        className={className}
        color={color}
        data-id={dataId}
        disabled={disabled}
        name={name}
        onClick={onClick}
        type={type}
        variant="contained"
        {...rest}
      >
        <>
          {children}
        </>
      </button>
    </div>
  );

Button.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  color: propTypes.string,
  disabled: propTypes.bool,
  name: propTypes.string,
  onClick: propTypes.func,
};

Button.defaultProps = {
  children: null,
  className: null,
  color: 'primary',
  disabled: false,
  name: null,
  type: 'button',
};

export default Button;
