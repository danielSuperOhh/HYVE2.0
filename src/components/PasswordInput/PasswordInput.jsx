import React, { useState } from 'react';
import './PasswordInput.css'; // Import your CSS file

function PasswordInput() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="password-input-container">
      <div className="input-container">
        <input
          type={passwordVisible ? 'text' : 'password'}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="password-input"
          placeholder='Enter Password'
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="password-toggle"
        >
          {passwordVisible ? 'Hide' : 'Show'}
        </button>
      </div>
    </div>
  );
}

export default PasswordInput;
