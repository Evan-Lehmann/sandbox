import { useRef, useState, useEffect, useCallback } from 'react';
import GameCard from './GameCard';
import geoWager from '../assets/geoWager.png';
import chessBg from '../assets/chess.png';
import skaterBg from '../assets/surfer.png';
import golfBg from '../assets/golf.png';
import flapBg from '../assets/flap.png';
import shapeBg from '../assets/shape.png';
import snakeBg from '../assets/snake.png';
import crossBg from '../assets/cross.png';
import { TrendingUp, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

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

const SCROLL_SPEED = 6; // px per animation frame while holding the arrow

function ScrollableRow({ items }) {
  const rowRef = useRef(null);
  const rafRef = useRef(null);
  const directionRef = useRef(0); // -1 left, 1 right, 0 idle
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdgeState = useCallback(() => {
    const el = rowRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    updateEdgeState();
    const el = rowRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateEdgeState);
    return () => el.removeEventListener('scroll', updateEdgeState);
  }, [updateEdgeState]);

  const tick = useCallback(() => {
    const el = rowRef.current;
    if (!el || directionRef.current === 0) return;

    const maxScroll = el.scrollWidth - el.clientWidth;

    if (directionRef.current === 1 && el.scrollLeft >= maxScroll - 1) {
      // hit the end while holding right — loop back to start
      el.scrollTo({ left: 0, behavior: 'smooth' });
    } else if (directionRef.current === -1 && el.scrollLeft <= 1) {
      // hit the start while holding left — loop to end
      el.scrollTo({ left: maxScroll, behavior: 'smooth' });
    } else {
      el.scrollLeft += directionRef.current * SCROLL_SPEED;
    }

    rafRef.current = requestAnimationFrame(tick);
  }, []);

  const startScrolling = (direction) => {
    directionRef.current = direction;
    rafRef.current = requestAnimationFrame(tick);
  };

  const stopScrolling = () => {
    directionRef.current = 0;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  };

  useEffect(() => stopScrolling, []);

  return (
    <div className="row-wrapper">
      <button
        className="row-arrow row-arrow-left"
        aria-label="scroll left"
        onMouseDown={() => startScrolling(-1)}
        onMouseUp={stopScrolling}
        onMouseLeave={stopScrolling}
        onTouchStart={() => startScrolling(-1)}
        onTouchEnd={stopScrolling}
      >
        <ChevronLeft size={20} />
      </button>

      <div className="trending-row" ref={rowRef}>
        {items.map((g) => (
          <GameCard key={g.title} {...g} />
        ))}
      </div>

      <button
        className="row-arrow row-arrow-right"
        aria-label="scroll right"
        onMouseDown={() => startScrolling(1)}
        onMouseUp={stopScrolling}
        onMouseLeave={stopScrolling}
        onTouchStart={() => startScrolling(1)}
        onTouchEnd={stopScrolling}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}

export default function GamesPage() {
  return (
    <main className="games-page">
      <section className="game-section">
        <div className="section-header">
          <TrendingUp size={18} color="var(--text-secondary)" />
          <h2>Featured Games</h2>
        </div>
        <ScrollableRow items={trendingGames} />
      </section>
    </main>
  );
}