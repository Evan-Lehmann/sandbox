import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PromoBanner from './components/PromoBanner';
import GamesPage from './components/GamesPage';
import LeaderboardPage from './components/LeaderboardPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <PromoBanner />
              <div className="page-content">
                <GamesPage />
              </div>
            </>
          }
        />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;