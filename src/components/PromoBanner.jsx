import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Gift, Trophy, Zap, Users } from 'lucide-react';

// Placeholder promo slides — swap copy/gradient/icon for real campaigns later.
const slides = [
  {
    id: 1,
    icon: Gift,
    eyebrow: 'Limited time',
    title: '100% Deposit Match',
    subtitle: 'Double your first deposit up to $500',
    cta: 'Claim Offer',
    gradient: 'linear-gradient(120deg, #4b3b99 0%, #7c5cfc 60%, #a78bfa 100%)',
  },
  {
    id: 2,
    icon: Trophy,
    eyebrow: 'This weekend',
    title: '$10,000 Tournament',
    subtitle: 'Top 50 players split the prize pool',
    cta: 'View Bracket',
    gradient: 'linear-gradient(120deg, #92400e 0%, #f2b84b 65%, #fde68a 100%)',
  },
  {
    id: 3,
    icon: Users,
    eyebrow: 'Refer a friend',
    title: 'Give $25, Get $25',
    subtitle: 'Both of you get credit after their first game',
    cta: 'Invite Friends',
    gradient: 'linear-gradient(120deg, #075985 0%, #0ea5e9 60%, #7dd3fc 100%)',
  },
  {
    id: 4,
    icon: Zap,
    eyebrow: 'New this week',
    title: 'Turbo Mode Unlocked',
    subtitle: 'Faster matches, same stakes',
    cta: 'Try It Now',
    gradient: 'linear-gradient(120deg, #7f1d1d 0%, #f87171 60%, #fca5a5 100%)',
  },
];

const AUTOPLAY_MS = 4500;

export default function PromoBanner() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, []);

  const prev = () => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused, next]);

  return (
    <div
      className="promo-banner"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="promo-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide) => {
          const Icon = slide.icon;
          return (
            <div
              key={slide.id}
              className="promo-slide"
              style={{ background: slide.gradient }}
            >
              <div className="promo-icon-badge">
                <Icon size={22} strokeWidth={1.75} />
              </div>
              <div className="promo-copy">
                <span className="promo-eyebrow">{slide.eyebrow}</span>
                <h3 className="promo-title">{slide.title}</h3>
                <p className="promo-subtitle">{slide.subtitle}</p>
                <button className="promo-cta">{slide.cta}</button>
              </div>
            </div>
          );
        })}
      </div>

      <button className="promo-arrow promo-arrow-left" onClick={prev} aria-label="previous promo">
        <ChevronLeft size={20} />
      </button>
      <button className="promo-arrow promo-arrow-right" onClick={next} aria-label="next promo">
        <ChevronRight size={20} />
      </button>

      <div className="promo-dots">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            className={`promo-dot ${i === index ? 'promo-dot-active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`go to promo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}