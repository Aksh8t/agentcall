"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Cover } from "@/components/ui/cover";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import {
  IconPhone,
  IconRobot,
  IconLanguage,
  IconClock24,
  IconChartLine,
  IconUsers,
  IconShieldCheck,
} from "@tabler/icons-react";

export default function AboveFooter() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            Why choose us - <Cover>Cherry</Cover>
          </h1>
        </div>

        {/* Bento Grid Section */}
        <div>
          <BentoGrid className="max-w-4xl mx-auto">
            {bentoItems.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              />
            ))}
          </BentoGrid>
        </div>
        
        {/* Footer Image - Full Width */}
        <div className="mt-16 w-full overflow-hidden rounded-3xl mx-auto relative" style={{ width: '100%', maxHeight: '80vh' }}>
          <Image 
            src="/footerfront.jpg" 
            alt="Footer" 
            fill
            className="object-cover"
            style={{ objectPosition: 'center 50%' }}
            priority
          />
          {/* Text Overlay */}
          <TextOverlayWithScroll />
        </div>
      </div>
    </section>
  );
}

const TextOverlayWithScroll = () => {
  const [isVisible, setIsVisible] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = overlayRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={overlayRef} className="absolute inset-0 flex flex-col justify-between px-8 md:px-16 lg:px-20 py-8 md:py-12">
      {/* Call Cherry Heading - Top */}
      <h2 
        className="text-4xl md:text-6xl lg:text-8xl italic text-white text-center" 
        style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
      >
        Call Cherry
      </h2>
      
      {/* Paragraph - Center */}
      <div className="flex items-center justify-center">
        {isVisible && (
          <div className="w-full max-w-6xl text-center" style={{ fontFamily: "'Montserrat', 'Helvetica Neue', 'Arial', sans-serif" }}>
            <div style={{ textShadow: '2px 4px 12px rgba(0, 0, 0, 0.6)' }}>
              <TextGenerateEffect 
                words={cherryPitchText}
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-tight tracking-wide italic"
              />
            </div>
          </div>
        )}
      </div>
      
      {/* Empty spacer for bottom balance */}
      <div></div>
    </div>
  );
};

const cherryPitchText = `Stop losing customers to competitors who respond instantly. Cherry delivers 24/7 AI automation that scales infinitely—deploy in minutes, see ROI in weeks. Zero overhead. Infinite capacity. Join hundreds of businesses already transforming with Cherry. Your competitive advantage starts now.`;

const SkeletonOne = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative">
    <Image
      src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2832&auto=format&fit=crop"
      alt="AI automation"
      fill
      className="object-cover"
    />
  </div>
);

const SkeletonTwo = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative">
    <Image
      src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2865&auto=format&fit=crop"
      alt="Automation robots"
      fill
      className="object-cover"
    />
  </div>
);

const SkeletonThree = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative">
    <Image
      src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2940&auto=format&fit=crop"
      alt="Team collaboration"
      fill
      className="object-cover"
    />
  </div>
);

const SkeletonFour = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative">
    <Image
      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop"
      alt="Global connectivity"
      fill
      className="object-cover"
    />
  </div>
);

const SkeletonFive = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative">
    <Image
      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop"
      alt="Analytics dashboard"
      fill
      className="object-cover"
    />
  </div>
);

const SkeletonSix = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative">
    <Image
      src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2940&auto=format&fit=crop"
      alt="Business growth"
      fill
      className="object-cover"
    />
  </div>
);

const SkeletonSeven = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative">
    <Image
      src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2940&auto=format&fit=crop"
      alt="Security shield"
      fill
      className="object-cover"
    />
  </div>
);

const bentoItems = [
  {
    title: "AI-Powered Voice Automation",
    description: "Transform customer interactions with intelligent voice AI that understands context and delivers human-like responses.",
    header: <SkeletonOne />,
    icon: <IconPhone className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Intelligent Process Automation",
    description: "Streamline workflows and eliminate repetitive tasks with smart automation that learns and adapts to your business.",
    header: <SkeletonTwo />,
    icon: <IconRobot className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Global Multi-Language Support",
    description: "Break language barriers with AI that speaks 40+ languages fluently, enabling seamless global communication.",
    header: <SkeletonThree />,
    icon: <IconLanguage className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Round-the-Clock Availability",
    description: "Provide 24/7 support without hiring night shifts. Our AI never sleeps, ensuring your customers are always heard.",
    header: <SkeletonFour />,
    icon: <IconClock24 className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Advanced Analytics & Insights",
    description: "Gain actionable insights from every interaction. Track KPIs, sentiment analysis, and performance metrics in real-time.",
    header: <SkeletonFive />,
    icon: <IconChartLine className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Enterprise-Grade Scalability",
    description: "From startup to enterprise, our infrastructure grows with you. Handle thousands of concurrent conversations effortlessly.",
    header: <SkeletonSix />,
    icon: <IconUsers className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Bank-Level Security & Compliance",
    description: "SOC 2, GDPR, and HIPAA compliant. Your data is protected with military-grade encryption and advanced security protocols.",
    header: <SkeletonSeven />,
    icon: <IconShieldCheck className="h-4 w-4 text-neutral-500" />,
  },
];
