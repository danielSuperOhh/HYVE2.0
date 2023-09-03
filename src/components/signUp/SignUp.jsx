import './signUp.css'
import hyvelogo from '../../assets/hyvelogo.jpg'
import Input from '../inputField/Input'
import Button from '../button/Button'
import { useState } from 'react'
import DateOfBirthInput from '../DateOfBirthInput'

const countries = [
    { code: '234', name: 'NGN' }
  ];
  
const SignUp = () => {

    const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleCountryChange = (event) => {
    const countryCode = event.target.value;
    const selectedCountry = countries.find(country => country.code === countryCode);
    setSelectedCountry(selectedCountry);
  };

  return (
    <div>
    <div className="signupp">
      <div className="signin-logo">
        <img src={hyvelogo} alt="" />
      </div>
      <div className="signup-containerr">
        <p className='reqq'>All field are required*</p>

        <div className="first-last">
            <div className="first">
                <p>First Name</p>
                <Input
                    border='none'
                    backgroundColor='#f4ecec'
                    padding='15px 0px 15px 14px'
                    placeholder='Enter First Name'
                    type='text'
                />
            </div>
            <div className="last">
                <p>Last Name</p>
                <Input
                    border='none'
                    backgroundColor='#f4ecec'
                    padding='15px 0px 15px 14px'
                    placeholder='Enter Last Name'
                    type='text'
                />
            </div>
        </div>
        <div className="emaill">
            <p>Email Address</p>
            <Input
                border='none'
                backgroundColor='#f4ecec'
                padding='15px 0px 15px 14px'
                placeholder='Enter Email Address'
                type='email'
            />
        </div>
        <div className="phone">
            <p>Phone Number</p>
            <div className="container">
                <div className="phone-input-container">
                    <select
                    className="country-dropdown"
                    value={selectedCountry.code}
                    onChange={handleCountryChange}
                    >
                    {countries.map(country => (
                        <option key={country.code} value={country.code}>
                        {country.name} (+{country.code.toUpperCase()})
                        </option>
                    ))}
                    </select>
                    <input
                    className="phone-input"
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
            </div>
        </div>

        <div className="DOB">
            <p>Date of Birth</p>
            <DateOfBirthInput/>
        </div>

        <Button width='100%' borderRadius='10px' backgroundColor="#093D8B" hoverColor="#032356" color="#FBFBFB">
            Next
        </Button>

      </div>
        <div className="dont">
          <p>Already have an account? <span>Sign in</span></p>
        </div>
    </div>
  </div>
  )
}

export default SignUp