const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="joint-container scale-150">
        {/* Joint body */}
        <div className="relative">
          {/* Paper wrapper */}
          <div className="joint-paper animate-roll-joint h-8 w-0 relative overflow-hidden bg-white/95 border border-foreground/20 rounded-sm transform rotate-6 origin-left shadow-lg">
            {/* Cannabis contents */}
            <div className="joint-contents animate-fill-joint h-full w-0 relative bg-gradient-to-r from-green-700 via-amber-800 to-green-600 opacity-80 rounded-sm" />
            
            {/* Paper texture lines */}
            <div className="absolute inset-0 opacity-30">
              <div className="h-px bg-foreground/40 absolute top-1/3 left-0 right-0" />
              <div className="h-px bg-foreground/30 absolute top-2/3 left-0 right-0" />
              <div className="w-px bg-foreground/20 absolute left-1/4 top-0 bottom-0" />
              <div className="w-px bg-foreground/20 absolute left-3/4 top-0 bottom-0" />
            </div>
          </div>
          
          {/* Twisted tip */}
          <div className="joint-tip animate-roll-tip absolute -right-2 top-0 h-8 w-6 bg-white/90 border border-foreground/20 rounded-r-lg transform scale-x-0 origin-left shadow-md"
               style={{
                 clipPath: 'polygon(0 25%, 60% 0%, 100% 50%, 60% 100%, 0 75%)',
               }}
          />
          
          {/* Cannabis particles floating out */}
          <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-2">
            <div className="animate-float-1 w-1 h-1 bg-green-600 rounded-full opacity-60" />
          </div>
          <div className="absolute top-2 right-0 transform translate-x-10 -translate-y-1">
            <div className="animate-float-2 w-0.5 h-0.5 bg-amber-700 rounded-full opacity-40" />
          </div>
          <div className="absolute top-4 right-0 transform translate-x-12 translate-y-1">
            <div className="animate-float-3 w-0.5 h-0.5 bg-green-700 rounded-full opacity-50" />
          </div>
          
          {/* Hand-drawn style imperfections */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1 left-8 w-2 h-px bg-foreground/30 transform rotate-12 animate-fade-in-delayed" />
            <div className="absolute bottom-2 right-16 w-1 h-px bg-foreground/25 transform -rotate-6 animate-fade-in-delayed-2" />
          </div>
        </div>
        
        {/* Loading text */}
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
          <p className="text-foreground/70 text-lg font-light tracking-wider animate-pulse">
            Rolling...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;