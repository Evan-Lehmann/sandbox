import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { User } from 'lucide-react';
 
function usePrizePoolTicker(start = 48210) {
  const [value, setValue] = useState(start);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => v + Math.floor(Math.random() * 12));
    }, 2200);
    return () => clearInterval(interval);
  }, []);
 
  return value;
}
 
export default function Header() {
  const prizePool = usePrizePoolTicker();
 
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="scrims.io" className="logo" draggable="false" />
        <button className="nav-button">Leaderboard</button>
      </div>
 
      <nav className="header-nav">
        <button className="wallet-pill" aria-label="account and balance">
          <User color="white" />
          <span className="wallet-value">$493.08</span>
        </button>
        <button className="nav-button nav-button-primary">Deposit</button>
      </nav>
    </header>
  );
}
