import { Heart } from 'lucide-react';

export function CelebrationEffect() {
  // Generate random positions and delays for floating hearts
  const hearts = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
    size: 20 + Math.random() * 20,
  }));

  // Generate confetti pieces
  const confetti = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 1.5,
    duration: 2 + Math.random() * 2,
    rotation: Math.random() * 360,
    color: ['love', 'tomato', 'basil', 'cream'][Math.floor(Math.random() * 4)],
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Floating hearts */}
      {hearts.map((heart) => (
        <div
          key={`heart-${heart.id}`}
          className="absolute animate-float-up"
          style={{
            left: `${heart.left}%`,
            bottom: '-50px',
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          <Heart
            className="text-love fill-love animate-pulse"
            style={{
              width: `${heart.size}px`,
              height: `${heart.size}px`,
            }}
          />
        </div>
      ))}

      {/* Confetti pieces */}
      {confetti.map((piece) => (
        <div
          key={`confetti-${piece.id}`}
          className={`absolute animate-confetti-fall bg-${piece.color}`}
          style={{
            left: `${piece.left}%`,
            top: '-20px',
            width: '10px',
            height: '10px',
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            transform: `rotate(${piece.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
}
