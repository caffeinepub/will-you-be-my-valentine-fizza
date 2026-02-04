import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, Pizza } from 'lucide-react';

function App() {
  const [answer, setAnswer] = useState<'idle' | 'yes' | 'no'>('idle');
  const [noClickCount, setNoClickCount] = useState(0);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  const handleYesClick = () => {
    setAnswer('yes');
  };

  const handleNoClick = () => {
    setAnswer('no');
    setNoClickCount((prev) => prev + 1);
    
    // Move the No button to a random position
    const maxX = 100;
    const maxY = 50;
    setNoButtonPosition({
      x: Math.random() * maxX - maxX / 2,
      y: Math.random() * maxY - maxY / 2,
    });
  };

  const getNoButtonText = () => {
    if (noClickCount === 0) return 'No';
    if (noClickCount === 1) return 'Are you sure?';
    if (noClickCount === 2) return 'Really?';
    if (noClickCount === 3) return 'Think again!';
    return 'Please? 🥺';
  };

  const getSubtitleText = () => {
    if (answer === 'no') {
      if (noClickCount === 1) return 'Come on, give it another thought! 🍕';
      if (noClickCount === 2) return 'Pizza is always a good idea... 🍕❤️';
      if (noClickCount === 3) return 'We could share a heart-shaped pizza! 🍕💕';
      return 'I promise to bring extra cheese! 🧀';
    }
    return 'Click a button to answer!';
  };

  if (answer === 'yes') {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(/assets/generated/fizza-pattern.dim_1024x1024.png)',
            backgroundRepeat: 'repeat',
            backgroundSize: '256px 256px',
          }}
        />
        
        <div className="relative z-10 text-center max-w-3xl mx-auto animate-celebration">
          <div className="mb-8 flex justify-center gap-4 animate-float">
            <Heart className="w-16 h-16 text-love fill-love animate-pulse" />
            <Pizza className="w-16 h-16 text-tomato animate-spin-slow" />
            <Heart className="w-16 h-16 text-love fill-love animate-pulse animation-delay-300" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-tomato mb-6 animate-bounce-in">
            Yay! 🎉
          </h1>
          
          <p className="text-2xl md:text-4xl font-display text-foreground mb-8">
            You've made me the happiest pizza in the world! 🍕❤️
          </p>
          
          <Card className="p-8 bg-cream/80 backdrop-blur-sm border-2 border-love shadow-2xl">
            <p className="text-xl md:text-2xl text-foreground font-medium">
              Get ready for the most delicious Valentine's Day ever!
            </p>
            <p className="text-lg text-muted-foreground mt-4">
              Extra cheese, extra love, and lots of pepperoni hearts! 💕🍕
            </p>
          </Card>
          
          <div className="mt-8 flex justify-center gap-2 animate-float animation-delay-600">
            {[...Array(5)].map((_, i) => (
              <Heart 
                key={i} 
                className="w-8 h-8 text-love fill-love animate-pulse" 
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url(/assets/generated/fizza-pattern.dim_1024x1024.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />
      
      {/* Main content */}
      <main className="flex-1 flex items-center justify-center p-4 relative z-10">
        <div className="max-w-4xl w-full text-center">
          {/* Hero illustration */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/assets/generated/fizza-hero.dim_1200x800.png" 
              alt="Heart-shaped pizza with Valentine decorations"
              className="max-w-full h-auto rounded-3xl shadow-2xl border-4 border-love/20 animate-float"
              style={{ maxHeight: '400px' }}
            />
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-tomato mb-4 leading-tight">
            Will you be my valentine fizza?
          </h1>
          
          {/* Subtitle with dynamic text */}
          <p 
            className="text-xl md:text-2xl text-muted-foreground mb-12 font-medium"
            role="status"
            aria-live="polite"
          >
            {getSubtitleText()}
          </p>
          
          {/* Interactive buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center min-h-[120px]">
            <Button
              onClick={handleYesClick}
              size="lg"
              className="text-2xl px-12 py-8 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 bg-love hover:bg-love/90 text-white border-4 border-love-dark focus-visible:ring-4 focus-visible:ring-love focus-visible:ring-offset-4"
            >
              <Heart className="w-8 h-8 mr-3 fill-white" />
              Yes! 💕
            </Button>
            
            <div className="relative">
              <Button
                onClick={handleNoClick}
                variant="outline"
                size="lg"
                className="text-2xl px-12 py-8 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 border-4 border-muted hover:border-muted-foreground focus-visible:ring-4 focus-visible:ring-muted focus-visible:ring-offset-4"
                style={{
                  transform: noClickCount > 0 
                    ? `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)` 
                    : 'none',
                  transition: 'transform 0.3s ease-out',
                }}
              >
                {getNoButtonText()}
              </Button>
            </div>
          </div>
          
          {/* Playful hint after clicking No */}
          {noClickCount > 0 && (
            <p className="mt-8 text-lg text-basil font-medium animate-bounce-in">
              Hint: The "Yes" button is looking extra delicious today! 🍕✨
            </p>
          )}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 py-6 text-center text-sm text-muted-foreground border-t border-border/50 bg-background/80 backdrop-blur-sm">
        <p className="flex items-center justify-center gap-2 flex-wrap">
          © 2026. Built with 
          <Heart className="w-4 h-4 text-love fill-love inline animate-pulse" /> 
          using{' '}
          <a 
            href="https://caffeine.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-tomato hover:text-love transition-colors underline font-medium focus-visible:ring-2 focus-visible:ring-love focus-visible:ring-offset-2 rounded"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
