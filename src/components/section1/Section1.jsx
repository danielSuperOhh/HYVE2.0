import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../button/Button';
import Input from '../inputField/Input';
import './section1.css';

const Section1 = () => {
  const [exchangeRate, setExchangeRate] = useState(0);
  const [nairaAmount, setNairaAmount] = useState('');
  const [totalUsdtAmount, setTotalUsdtAmount] = useState('0.00'); // Initialize with '0.00'

  useEffect(() => {
    const apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=ngn';

    axios.get(apiUrl)
      .then(response => {
        const ngnExchangeRate = response.data.tether.ngn;
        setExchangeRate(ngnExchangeRate);
      })
      .catch(error => {
        console.error('Error fetching exchange rate:', error);
      });
  }, []);

  const handleNairaChange = (event) => {
    const nairaValue = parseFloat(event.target.value);
    setNairaAmount(nairaValue);
    const convertedAmount = (nairaValue / exchangeRate).toFixed(4);

    setTotalUsdtAmount((parseFloat(convertedAmount) + 2.07).toFixed(2));
  };

  const formattedTotalUsdtAmount = !isNaN(totalUsdtAmount) ? parseFloat(totalUsdtAmount).toLocaleString(undefined, { maximumFractionDigits: 2, style: 'decimal' }) : '0';

  const convertedUsdtAmount = nairaAmount ? (parseFloat(nairaAmount) / exchangeRate).toFixed(4) : null;
  const formattedUsdtAmount = convertedUsdtAmount !== null ? parseFloat(convertedUsdtAmount).toLocaleString(undefined, { maximumFractionDigits: 2, style: 'decimal' }) : 'Recipient gets';

  return (
    <div>
      <div className="section1">
        <div className="header-text">
          <h1>The seamless remittance platform for borderless swift transactions</h1>
          <p>With our innovative blockchain-powered solution, you can enjoy a seamless and secure remittance experience that is faster, cost-effective, and highly transparent built just for you</p>
        </div>
        <div className="conversion">
          <div className="conv-box">
            <p className='conv-header'>Send money anytime, anyday!!</p>

            <Input
              placeholder="You send"
              type="number"
              value={nairaAmount}
              onChange={handleNairaChange}
            />
            <Input
              placeholder="Recipient gets"
              readOnly={true}
              value={formattedUsdtAmount}
            />

            <p className='conv-info'>Transaction fee: 2.07 USDT</p>
            <p className='conv-info'>Payment method: Bank Transfers</p>

            <p className='conv-total'>Total pay: {formattedTotalUsdtAmount} USDT</p>

            <Button
              backgroundColor="#093D8B"
              hoverColor="#032356"
              borderRadius='7.725px'
              width='100%'
              hoverTextColor='#FBFBFB'
              color="#FBFBFB"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
