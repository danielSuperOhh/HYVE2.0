import PropTypes from 'prop-types';
import './button.css';

const Button = ({ width, height, hoverColor, hoverTextColor, padding, color, border, borderRadius, backgroundColor, children, ...restProps }) => {
  const buttonStyle = {
    width: width,
    height: height,
    backgroundColor: backgroundColor || '#007bff',
    padding: padding || '15.45px 30.901px',
    borderRadius: borderRadius,
    color: color            ,
    border: border
};

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = hoverColor || backgroundColor;
    e.target.style.color = hoverTextColor || '#FBFBFB';
  };
                                                                                                                                                       
  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = backgroundColor;
    // e.target.style.color = '#093D8B' || '#FBFBFB';
  };

  return (
    <button
      className="custom-button"
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...restProps}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  hoverColor: PropTypes.string,
  hoverTextColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
