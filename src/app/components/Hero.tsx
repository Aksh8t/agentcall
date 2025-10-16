'use client';

import { useRef } from 'react';
import LaserFlow from '@/components/ui/laser-flow';
import { HeroVideoDialog } from '@/components/ui/hero-video-dialog';

export default function Hero() {
  const revealImgRef = useRef<HTMLImageElement>(null);
  return (
    <section className="pt-2 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* LaserFlow with Video Box */}
          <div 
            className="mt-12 lg:mt-20 h-[500px] sm:h-[600px] lg:h-[800px] rounded-2xl lg:rounded-3xl relative overflow-hidden bg-black"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const el = revealImgRef.current;
              if (el) {
                el.style.setProperty('--mx', `${x}px`);
                el.style.setProperty('--my', `${y + rect.height * 0.5}px`);
              }
            }}
            onMouseLeave={() => {
              const el = revealImgRef.current;
              if (el) {
                el.style.setProperty('--mx', '-9999px');
                el.style.setProperty('--my', '-9999px');
              }
            }}
          >
            <LaserFlow
              horizontalBeamOffset={0.1}
              verticalBeamOffset={0.0}
              color="#FF813D"
            />
            
            {/* Video/Content Box */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[92%] sm:w-[88%] lg:w-[86%] h-[65%] sm:h-[62%] lg:h-[60%] flex items-center justify-center z-[6] overflow-hidden rounded-2xl lg:rounded-3xl border-2 border-[#FF813D]"
              style={{
                backgroundColor: '#060010',
                boxShadow: '0 0 30px rgba(255, 129, 61, 0.4)'
            }}>
              <div className="relative w-full h-full">
                <HeroVideoDialog
                  className="block dark:hidden"
                  animationStyle="from-center"
                  videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                  thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                  thumbnailAlt="Hero Video"
                />
                <HeroVideoDialog
                  className="hidden dark:block"
                  animationStyle="from-center"
                  videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                  thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
                  thumbnailAlt="Hero Video"
                />
              </div>
            </div>

            {/* Optional: Reveal effect image */}
            <img
              ref={revealImgRef}
              src="/placeholder-image.jpg"
              alt="Reveal effect"
              style={{
                position: 'absolute',
                width: '100%',
                top: '-50%',
                zIndex: 5,
                mixBlendMode: 'lighten',
                opacity: 0.3,
                pointerEvents: 'none',
                // @ts-ignore - CSS custom properties
                '--mx': '-9999px',
                '--my': '-9999px',
                WebkitMaskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
                maskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat'
              } as React.CSSProperties}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
