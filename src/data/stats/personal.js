import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1991-06-13T17:55:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'counries-lived',
    label: 'Countries lived',
    value: '4',
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 12,
    link:
      'https://www.google.com/maps/d/u/0/edit?mid=198zBJBd_PrYiGG9wT2Eh5FZAjXD6mCw&ll=0.18383389787321391%2C0&z=2',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Gastonia, North Carolina',
  },
];

export default data;
