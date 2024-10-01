import { useEffect, useState } from 'react';

const Counter = ({ userEarningRate }) => {
  const [balance, setBalance] = useState(0);
  const speed = 0.00000500; // speed per detik

  useEffect(() => {

    const interval = setInterval(() => {
      setBalance(prevBalance => (parseFloat(prevBalance) + speed).toFixed(8));
    }, 1000);

    return () => clearInterval(interval);
  }, [userEarningRate]);

  return <div>{balance}</div>;
};

export default Counter;
