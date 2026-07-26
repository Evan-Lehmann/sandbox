import GameCard from './GameCard';
import slitherThumb from '../assets/slither.png';

const featuredGames = [
  { title: 'slither.io', entryFee: 5, prizePool: 36, players: 6, maxPlayers: 8 },
  { title: 'Battle Royale', entryFee: 10, prizePool: 108, players: 9, maxPlayers: 12 },
  { title: 'Death Match', entryFee: 3, prizePool: 16, players: 4, maxPlayers: 6, thumbnail: slitherThumb },
];

const classicGames = [
  { title: 'Duel Arena', entryFee: 5, prizePool: 9, players: 1, maxPlayers: 2 },
  { title: 'Quickdraw', entryFee: 15, prizePool: 27, players: 2, maxPlayers: 2 },
  { title: 'Chess Clock', entryFee: 8, prizePool: 14, players: 1, maxPlayers: 2 },
];

export default function GamesPage() {
  return (
    <main className="games-page">
      <section className="game-section">
        <div className="section-header">
          <h2>Featured Games:</h2>
        </div>
        <div className="game-grid">
          {featuredGames.map((g) => (
            <GameCard key={g.title} {...g} />
          ))}
        </div>
      </section>

      <section className="game-section">
        <div className="section-header">
          <h2>Classics:</h2>
        </div>
        <div className="game-grid">
          {classicGames.map((g) => (
            <GameCard key={g.title} {...g} />
          ))}
        </div>
      </section>
    </main>
  );
}