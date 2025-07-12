const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="joint-container">
        {/* Joint body */}
        <div className="relative">
          {/* Paper wrapper */}
          <div 
            className="joint-paper animate-roll-joint h-3 relative overflow-hidden"
            style={{
              width: '120px',
              transform: 'rotate(-5deg)',
              borderRadius: '2px 8px 8px 2px',
              border: '1px solid rgba(0,0,0,0.1)',
            }}
          >
            {/* Cannabis contents */}
            <div 
              className="joint-contents animate-fill-joint h-full relative"
              style={{
                borderRadius: '1px 6px 6px 1px',
                backgroundImage: `
                  radial-gradient(circle at 20% 50%, hsl(var(--cannabis-green)) 0%, transparent 50%),
                  radial-gradient(circle at 60% 30%, hsl(var(--cannabis-brown)) 0%, transparent 50%),
                  radial-gradient(circle at 80% 70%, hsl(var(--cannabis-green)) 0%, transparent 50%),
                  linear-gradient(90deg, 
                    hsl(var(--cannabis-green)) 0%, 
                    hsl(var(--cannabis-brown)) 30%,
                    hsl(var(--cannabis-green)) 60%,
                    hsl(var(--cannabis-brown)) 100%
                  )
                `,
              }}
            />
            
            {/* Paper texture lines */}
            <div className="absolute inset-0 opacity-20">
              <div className="h-px bg-foreground/30 absolute top-1/4 left-0 right-0" />
              <div className="h-px bg-foreground/20 absolute top-3/4 left-0 right-0" />
            </div>
          </div>
          
          {/* Twisted tip */}
          <div 
            className="joint-tip animate-roll-tip absolute -right-1 top-0 h-3 w-4 origin-left"
            style={{
              background: 'linear-gradient(45deg, rgba(255,255,255,0.9) 0%, rgba(240,240,240,0.8) 100%)',
              borderRadius: '0 6px 6px 0',
              border: '1px solid rgba(0,0,0,0.1)',
              borderLeft: 'none',
              clipPath: 'polygon(0 20%, 70% 0%, 100% 50%, 70% 100%, 0 80%)',
            }}
          />
          
          {/* Hand-drawn style imperfections */}
          <div className="absolute inset-0 pointer-events-none">
            <div 
              className="absolute top-0 left-2 w-1 h-px bg-foreground/20 transform rotate-12"
              style={{ animationDelay: '1s' }}
            />
            <div 
              className="absolute bottom-0 right-8 w-1 h-px bg-foreground/15 transform -rotate-6"
              style={{ animationDelay: '2s' }}
            />
          </div>
        </div>
        
        {/* Loading text */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
          <p className="text-foreground/70 text-sm font-light tracking-wide">
            Rolling...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;