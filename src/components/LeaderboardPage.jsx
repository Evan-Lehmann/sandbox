import { Crown, TrendingUp } from 'lucide-react';

const players = [
  { rank: 1, name: 'ShadowReaper', avatar: 'https://api.dicebear.com/9.x/shapes/svg?seed=p1', winnings: 18420, wins: 142, winRate: 71 },
  { rank: 2, name: 'NovaStrike', avatar: 'https://api.dicebear.com/9.x/shapes/svg?seed=p2', winnings: 15980, wins: 128, winRate: 66 },
  { rank: 3, name: 'VelvetFox', avatar: 'https://api.dicebear.com/9.x/shapes/svg?seed=p3', winnings: 13210, wins: 119, winRate: 64 },
  { rank: 4, name: 'GhostPixel', avatar: 'https://api.dicebear.com/9.x/shapes/svg?seed=p4', winnings: 9870, wins: 98, winRate: 59 },
  { rank: 5, name: 'CrimsonAce', avatar: 'https://api.dicebear.com/9.x/shapes/svg?seed=p5', winnings: 8640, wins: 91, winRate: 55 },
  { rank: 6, name: 'IronVortex', avatar: 'https://api.dicebear.com/9.x/shapes/svg?seed=p6', winnings: 7320, wins: 84, winRate: 53 },
  { rank: 7, name: 'PixelWolf', avatar: 'https://api.dicebear.com/9.x/shapes/svg?seed=p7', winnings: 6110, wins: 76, winRate: 51 },
  { rank: 8, name: 'ZenithRush', avatar: 'https://api.dicebear.com/9.x/shapes/svg?seed=p8', winnings: 5430, wins: 70, winRate: 48 },
  { rank: 9, name: 'AshCipher', avatar: 'https://api.dicebear.com/9.x/shapes/svg?seed=p9', winnings: 4890, wins: 65, winRate: 47 },
  { rank: 10, name: 'LunarByte', avatar: 'https://api.dicebear.com/9.x/shapes/svg?seed=p10', winnings: 4210, wins: 59, winRate: 45 },
];

const periods = ['Today', 'This Week', 'All Time'];

const rankColors = { 1: '#f2b84b', 2: '#c9c9d6', 3: '#c78a4a' };

export default function LeaderboardPage() {
  return (
    <main className="leaderboard-page">
      <div className="page-content">
        <div className="section-header leaderboard-header">
          <Crown size={18} color="var(--gold)" />
          <h2>Leaderboard</h2>
        </div>

        <div className="period-tabs">
          {periods.map((p, i) => (
            <button key={p} className={`period-tab${i === 2 ? ' period-tab-active' : ''}`} disabled={i !== 2}>
              {p}
            </button>
          ))}
        </div>

        <div className="podium">
          {[players[1], players[0], players[2]].map((p) => (
            <div key={p.rank} className={`podium-card podium-rank-${p.rank}`}>
              <div className="podium-rank-badge" style={{ color: rankColors[p.rank] }}>
                #{p.rank}
              </div>
              <img src={p.avatar} alt="" className="podium-avatar" />
              <span className="podium-name">{p.name}</span>
              <span className="podium-winnings">${p.winnings.toLocaleString()}</span>
            </div>
          ))}
        </div>

        <div className="leaderboard-table">
          <div className="leaderboard-row leaderboard-row-head">
            <span>Rank</span>
            <span>Player</span>
            <span>Wins</span>
            <span>Win Rate</span>
            <span className="align-right">Winnings</span>
          </div>

          {players.map((p) => (
            <div className="leaderboard-row" key={p.rank}>
              <span className="rank-cell">
                {p.rank <= 3 ? (
                  <Crown size={15} style={{ color: rankColors[p.rank] }} />
                ) : (
                  <span className="rank-number">{p.rank}</span>
                )}
              </span>
              <span className="player-cell">
                <img src={p.avatar} alt="" className="row-avatar" />
                {p.name}
              </span>
              <span>{p.wins}</span>
              <span className="win-rate-cell">
                <TrendingUp size={13} />
                {p.winRate}%
              </span>
              <span className="align-right winnings-cell">${p.winnings.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}