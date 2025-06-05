import React, { useState, useEffect } from 'react';

const FlowerGardenHero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const Flower = ({ className = "", index = 1 }) => (
    <div className={`flower flower-${index} ${className}`}>
      <div className={`flower-leafs flower-leafs-${index}`}>
        <div className="flower-leaf flower-leaf-1"></div>
        <div className="flower-leaf flower-leaf-2"></div>
        <div className="flower-leaf flower-leaf-3"></div>
        <div className="flower-leaf flower-leaf-4"></div>
        <div className="flower-white-circle"></div>
        
        {[1,2,3,4,5,6,7,8].map(i => (
          <div key={i} className={`flower-light flower-light-${i}`}></div>
        ))}
      </div>
      <div className="flower-line">
        {Array.from({length: index === 1 ? 6 : 4}, (_, i) => (
          <div key={i} className={`flower-line-leaf flower-line-leaf-${i+1}`}></div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Night Background */}
      <div className="night fixed left-0 top-0 w-full h-full blur-sm"></div>
      
      {/* Flower Garden */}
      <div className="absolute bottom-0 w-full">
        <div className={`flowers flex justify-around flex-wrap transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          {/* Generate multiple rows of flowers */}
          {Array.from({ length: 4 }).map((_, row) => (
            <div key={row} className="w-full flex flex-wrap relative" style={{ marginBottom: `-${row * 2}rem` }}>
              {Array.from({ length: 12 }).map((_, col) => {
                const randomOffset = Math.floor(Math.random() * 40);
                const randomScale = 0.5 + Math.random() * 0.5;
                return (
                  <div 
                    key={`${row}-${col}`}
                    className="relative"
                    style={{
                      width: '8%',
                      marginLeft: `${randomOffset}px`,
                      transform: `scale(${randomScale})`,
                    }}
                  >
                    <Flower 
                      index={(row + col) % 3 + 1}
                      className={`transform translate-y-${20 + randomOffset}`}
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlowerGardenHero;
