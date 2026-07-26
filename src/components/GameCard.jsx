export default function GameCard({ title, entryFee, prizePool, players, maxPlayers, thumbnail }) {
  return (
    <div className="game-card">
      <div
        className="game-card-thumb"
        style={thumbnail ? { backgroundImage: `url(${thumbnail})` } : undefined}
      >
      </div>
      <div className="game-card-body">
        <h3>{title}</h3>
        <div className="game-card-stats">
          <div className="stat">
            <span className="stat-label">entry</span>
            <span className="stat-value">${entryFee}</span>
          </div>
          <div className="stat">
            <span className="stat-label">pool</span>
            <span className="stat-value stat-gold">${prizePool}</span>
          </div>
          <div className="stat">
            <span className="stat-label">players</span>
            <span className="stat-value">{players}/{maxPlayers}</span>
          </div>
        </div>
        <button className="join-button">Play</button>
      </div>
    </div>
  );
}