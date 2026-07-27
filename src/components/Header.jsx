import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { User, UserCircle, Settings, HelpCircle, LogOut } from 'lucide-react';
import logo from '../assets/logo.png';

const BALANCE = 493.08;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="scrims.io" className="logo" />
      </div>

      <nav className="header-center">
        <NavLink
          to="/"
          className={({ isActive }) => `nav-link${isActive ? ' nav-link-active' : ''}`}
        >
          Play
        </NavLink>
        <NavLink
          to="/leaderboard"
          className={({ isActive }) => `nav-link${isActive ? ' nav-link-active' : ''}`}
        >
          Leaderboard
        </NavLink>
        <button className="nav-link">Promotions</button>
      </nav>

      <div className="header-right">
        <div className="account-menu" ref={menuRef}>
          <button className="ticker" onClick={() => setMenuOpen((open) => !open)}>
            <User size={16} color="white" />
            <span className="ticker-value">${BALANCE.toFixed(2)}</span>
          </button>

          {menuOpen && (
            <div className="account-dropdown">
              <button className="account-dropdown-item" disabled>
                <UserCircle size={16} />
                Profile
              </button>
              <button className="account-dropdown-item" disabled>
                <Settings size={16} />
                Settings
              </button>
              <button className="account-dropdown-item" disabled>
                <HelpCircle size={16} />
                Help
              </button>
              <div className="account-dropdown-divider" />
              <button className="account-dropdown-item" disabled>
                <LogOut size={16} />
                Log Out
              </button>
            </div>
          )}
        </div>

        <button className="nav-button nav-button-primary">Deposit</button>
      </div>
    </header>
  );
}