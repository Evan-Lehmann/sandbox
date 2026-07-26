export default function GameCard({ title, studio, icon: Icon, thumbnail, players, badge }) {
  return (
    <div className="game-card">
      <div
        className="game-card-thumb"
        style={thumbnail ? { backgroundImage: `url(${thumbnail})` } : undefined}
      >
        {badge && <div className="game-card-badge">{badge}</div>}
        {!thumbnail && Icon && (
          <Icon size={44} strokeWidth={1.5} className="game-card-icon" />
        )}
        <div className="game-card-overlay">
          <h3>{title}</h3>
        </div>
      </div>
      <div className="game-card-stat">
        <span className="game-card-dot" />
        <span className="game-card-count">{players}</span>
        <span className="game-card-playing">playing</span>
      </div>
    </div>
  );
}