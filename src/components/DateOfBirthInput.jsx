import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const DateInput = styled.input`
  padding: 8px;
  border: none;
  background-color: #f4ecec;
  padding: 15px 10px 15px 10px;
  border-radius: 4px;
  width: 100%;
`;

function DateOfBirthInput() {
  const [dob, setDOB] = useState('');

  const handleDateChange = (event) => {
    setDOB(event.target.value);
  };

  return (
    <Container>
      <DateInput
        type="date"
        id="dob"
        name="dob"
        value={dob}
        onChange={handleDateChange}
      />
    </Container>
  );
}

export default DateOfBirthInput;
