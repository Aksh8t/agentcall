'use client';

import { useRef, useState } from 'react';
import LaserFlow from '@/components/ui/laser-flow';
import { HeroVideoDialog } from '@/components/ui/hero-video-dialog';
import { LayoutTextFlip } from '@/components/ui/layout-text-flip';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import { motion } from 'motion/react';

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

export default function Hero() {
  const revealImgRef = useRef<HTMLImageElement>(null);
  const [isToggled, setIsToggled] = useState(false);
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
              horizontalBeamOffset={0.2}
              verticalBeamOffset={0.0}
              color="#FF813D"
            />

            {/* Hero Text - Left Side */}
            <div className="absolute top-8 left-8 lg:top-12 lg:left-16 z-[7] max-w-2xl">
              <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-normal text-white leading-tight">
                <div className="flex items-center gap-2 mb-2">
                  <span>Make the Change </span>
                  
                  {/* Toggle Switch */}
                  <motion.button
                    onClick={() => setIsToggled(!isToggled)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative inline-flex h-7 w-14 items-center rounded-full border-2 border-white transition-all duration-300 shadow-lg ${
                      isToggled ? 'bg-orange-500' : 'bg-red-600'
                    }`}
                  >
                    <motion.span
                      animate={{
                        x: isToggled ? 32 : 4,
                        rotate: isToggled ? 360 : 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 700,
                        damping: 25,
                        rotate: { duration: 0.5, ease: "easeInOut" },
                      }}
                      className="inline-block h-5 w-5 rounded-full bg-white shadow-xl"
                      style={{
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.8)',
                      }}
                    />
                  </motion.button>
                </div>
                
                <div className="flex items-center gap-2 flex-wrap">
                  <LayoutTextFlip
                    text=""
                    words={["Automate", "Upgrade", "Innovate", "Expand"]}
                    className="italic font-serif bg-white border-none shadow-none ring-0"
                    isAnimating={isToggled}
                    duration={2000}
                  />
                  
                  {/* Logo Icon - Tilted with 3D Depth */}
                  <motion.div
                    className="inline-block mx-5 p-1.5 bg-gradient-to-br from-gray-100 to-gray-300 rounded-xl relative"
                    style={{
                      transform: 'rotate(40deg) perspective(1000px) rotateX(5deg) rotateY(-5deg)',
                      boxShadow: `
                        0 10px 25px -5px rgba(0, 0, 0, 0.3),
                        0 8px 16px -8px rgba(0, 0, 0, 0.2),
                        inset 0 2px 4px rgba(255, 255, 255, 0.8),
                        inset 0 -2px 4px rgba(0, 0, 0, 0.1),
                        0 0 20px rgba(255, 255, 255, 0.4)
                      `,
                    }}
                  >
                    <img
                      src="/logoauto.svg"
                      alt="Auto Logo"
                      className="h-14 w-14 lg:h-14 lg:w-14 rounded-xl"
                      style={{
                        filter: 'drop-shadow(0 2px 3px rgba(0, 0, 0, 0.2))',
                      }}
                    />
                  </motion.div>
                  
                  <span> your Business now</span>
                </div>
                
                {/* Animated Tooltip */}
                <div className="flex flex-col items-start mx-10 mt-5">
                  <p className="text-sm text-white/70 mb-3">Trusted by</p>
                  <div className="flex flex-row items-center">
                    <AnimatedTooltip items={people} />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Video/Content Box */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[92%] sm:w-[88%] lg:w-[86%] h-[75%] sm:h-[75%] lg:h-[75%] flex items-center justify-center z-[6] overflow-hidden rounded-2xl lg:rounded-3xl border-2 border-[#FF813D]"
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
