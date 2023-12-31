import PropTypes from 'prop-types';
import './input.css'

const Input = ({ width, height, type, placeholder, marginBottom, border, borderRadius, backgroundColor, padding, readonly, ...restProps }) => {
  const inputStyle = {
    width: width || '100%',
    padding: padding || '18px 0px 18px 14px',
    marginBottom: marginBottom || '15px',
    outline: 'none',
    border: border || '0.5px solid #325D9E',
    borderRadius: '3.863px',
    backgroundColor: backgroundColor
  };

  const handleKeyDown = (e) => {
    if (type === 'number' && e.key === '-') {
      e.preventDefault();
    }
  };

  return (
    <input
      className={`custom-input ${type === 'number' ? 'no-spinners' : ''}`}
      style={inputStyle}
      readOnly={readonly}
      type={type || 'text'}
      placeholder={placeholder}
      onKeyDown={handleKeyDown}
      {...restProps}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  readonly: PropTypes.bool,
};

export default Input;
