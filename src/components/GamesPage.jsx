import GameCard from './GameCard';
import geoWager from '../assets/geoWager.png';
import chessBg from '../assets/chess.png';
import skaterBg from '../assets/surfer.png';
import golfBg from '../assets/golf.png';
import flapBg from '../assets/flap.png';
import shapeBg from '../assets/shape.png';
import snakeBg from '../assets/snake.png';
import crossBg from '../assets/cross.png';
import {
  TrendingUp,
  Swords,
  Crosshair,
  Skull,
  Zap,
  Flame,
  Trophy,
  Shield,
  Target,
  Gamepad2,
  Crown,
  Rocket,
  Bomb,
  Radar,
} from 'lucide-react';

const trendingGames = [
  { title: 'GeoWager', studio: 'Community Mode', icon: Zap, players: 6, thumbnail: geoWager },
  { title: 'Chess', studio: 'Community Mode', icon: Zap, players: 6, thumbnail: chessBg },
  { title: 'Subway Skater', studio: 'Community Mode', icon: Zap, players: 6, thumbnail: skaterBg },
  { title: 'Golf!', studio: 'Community Mode', icon: Zap, players: 6, thumbnail: golfBg },
  { title: 'Flappy Pigeon', studio: 'Community Mode', icon: Zap, players: 6, thumbnail: flapBg },
  { title: 'Shape Dash', studio: 'Community Mode', icon: Zap, players: 6, thumbnail: shapeBg },
  { title: 'Snake', studio: 'Community Mode', icon: Zap, players: 6, thumbnail: snakeBg },
  { title: 'Cross the Road', studio: 'Community Mode', icon: Zap, players: 6, thumbnail: crossBg },
];

export default function GamesPage() {
  return (
    <main className="games-page">
      <section className="game-section">
        <div className="section-header">
          <TrendingUp size={18} color="var(--text-secondary)" />
          <h2>Featured Games</h2>
        </div>
        <div className="trending-row">
          {trendingGames.map((g) => (
            <GameCard key={g.title} {...g} />
          ))}
        </div>
      </section>
    </main>
  );
}