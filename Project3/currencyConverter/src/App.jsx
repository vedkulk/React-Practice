import React, { useState, useEffect } from 'react';
import './App.css';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import { InputBox } from './components/index.js';

const App = () => {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  // Get the currency info for 'from' currency
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo || {});

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount * (currencyInfo[to] || 1));  // Safeguard in case the rate is unavailable
  };

  const convert = () => {
    setConvertedAmount(amount * (currencyInfo[to] || 1)); // Safeguard in case the rate is unavailable
  };

  // Recalculate converted amount whenever the amount or currency changes
  useEffect(() => {
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  }, [amount, from, to, currencyInfo, setConvertedAmount]);

  return (
    <div className="h-screen w-full bg-cyan-100 flex 
    flex-wrap justify-center items-center bg-no-repeat bg-cover bg-center 
    bg-[url('https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg')]">
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-100 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}>
            <div className="w-full mb-4">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
              />
            </div>
            <div className="w-full mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                amountDisabled={true}
                selectedCurrency={to}
              />
            </div>
            <div className="w-full flex justify-between">
              <button 
                type="button" 
                onClick={swap} 
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Swap
              </button>
              <button 
                type="submit" 
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
              >
                Convert
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
