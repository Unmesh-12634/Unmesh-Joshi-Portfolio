import React from 'react';
import { motion } from 'motion/react';

const LINE_GRADIENT =
  'linear-gradient(rgb(28, 78, 255), rgb(254, 136, 27) 0%, rgb(172, 36, 255) 25%, rgb(247, 159, 255) 50%, rgb(255, 214, 0) 66%, rgb(254, 136, 27) 84%, rgba(254, 136, 27, 0) 102%)';

const PILLARS = [
  { label: 'Core Languages', items: ['Python Programming', 'C / C++ Coding', 'Java OOP Principles', 'JavaScript Logic'], leftVw: 2.8, bottomVw: 9 },
  { label: 'Web Frontend', items: ['React & Next.js', 'Tailwind CSS Layouts', 'HTML5 Semantics', 'Responsive Interfaces'], leftVw: 22.4, bottomVw: 11.08 },
  { label: 'Backend & DB', items: ['Node.js Runtimes', 'Express REST APIs', 'SQL Database Schemas', 'MySQL Integrations'], leftVw: 41.2, bottomVw: 13.16 },
  { label: 'AI & ML', items: ['TensorFlow Models', 'OpenCV Image Processing', 'Pandas Data Analysis', 'NumPy Computations'], leftVw: 61.1, bottomVw: 15.24 },
];

export function PrecisionSection() {
  const sectionStyle: React.CSSProperties = {
    backgroundColor: 'var(--sohub-black)',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: 'clamp(24px, 4vw, 60px) clamp(16px, 4vw, 60px) clamp(100px, 12vw, 220px)',
    gap: 'clamp(32px, 4vw, 56px)',
    position: 'relative',
    overflow: 'hidden',
    contentVisibility: 'auto',
    containIntrinsicSize: '0 800px',
  };

  const pillarsContainerStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '82.292vw',
    margin: '0 auto',
  };

  const desktopPillarsStyle: React.CSSProperties = {
    position: 'relative',
    width: '82.292vw',
    height: '33.94vw',
    color: 'var(--sohub-white)',
  };

  const getDesktopPillarWrapperStyle = (left: number, bottom: number): React.CSSProperties => ({
    position: 'absolute',
    bottom: `${bottom}vw`,
    left: `${left}vw`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  });

  const desktopChipStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--sohub-dark-grey)',
    border: '1px solid rgba(120, 120, 120, 0.15)',
    color: 'var(--sohub-white)',
    fontSize: '18px',
    fontWeight: 500,
    borderRadius: '20px',
    paddingTop: '0.972vw',
    paddingBottom: '0.972vw',
    paddingLeft: '1.736vw',
    paddingRight: '1.736vw',
    whiteSpace: 'nowrap',
    gap: '8px',
  };

  const desktopLineItemsWrapperStyle: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  };

  const desktopItemsContainerStyle: React.CSSProperties = {
    position: 'absolute',
    top: '0.56vw',
    left: '1.94vw',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    fontSize: '16px',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  };

  const desktopItemStyle: React.CSSProperties = {
    paddingTop: '0.69vw',
    paddingBottom: '0.69vw',
    paddingLeft: '1.04vw',
    paddingRight: '1.04vw',
    display: 'flex',
    alignItems: 'flex-start',
    color: 'var(--sohub-grey)',
  };

  const desktopGradientLineStyle: React.CSSProperties = {
    backgroundImage: LINE_GRADIENT,
    width: '1px',
    height: '14.24vw',
  };

  const mobilePillarsContainerStyle: React.CSSProperties = {
    color: 'var(--sohub-white)',
    gap: '0',
  };

  const getMobilePillarWrapperStyle = (isRight: boolean): React.CSSProperties => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: isRight ? 'flex-end' : 'flex-start',
    width: '100%',
    paddingBottom: '8px',
  });

  const mobileChipStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: 'var(--sohub-dark-grey)',
    border: '1px solid rgba(120, 120, 120, 0.15)',
    color: 'var(--sohub-white)',
    fontSize: '15px',
    fontWeight: 500,
    borderRadius: '20px',
    padding: '10px 18px',
    whiteSpace: 'nowrap',
    gap: '7px',
  };

  const getMobileLineItemsRowStyle = (isRight: boolean): React.CSSProperties => ({
    display: 'flex',
    flexDirection: isRight ? 'row-reverse' : 'row',
    alignItems: 'stretch',
    width: '100%',
  });

  const getMobileVerticalLineStyle = (isRight: boolean): React.CSSProperties => ({
    width: '1px',
    flexShrink: 0,
    backgroundImage: LINE_GRADIENT,
    marginLeft: isRight ? 0 : '22px',
    marginRight: isRight ? '22px' : 0,
    minHeight: '120px',
  });

  const getMobileItemsWrapperStyle = (isRight: boolean): React.CSSProperties => ({
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
    paddingLeft: isRight ? 0 : '20px',
    paddingRight: isRight ? '20px' : 0,
    paddingTop: '8px',
    paddingBottom: '8px',
    alignItems: isRight ? 'flex-end' : 'flex-start',
  });

  const mobileItemStyle: React.CSSProperties = {
    fontSize: '14px',
    color: 'var(--sohub-grey)',
    padding: '8px 0',
  };

  return (
    <section style={sectionStyle} className="font-precision">
      {/* Block 2 — Pillars container */}
      <div style={pillarsContainerStyle}>
        {/* Desktop pillars */}
        <div className="hidden sm:block" style={desktopPillarsStyle}>
          {PILLARS.map((pillar) => (
            <div key={pillar.label} style={getDesktopPillarWrapperStyle(pillar.leftVw, pillar.bottomVw)}>
              {/* Chip */}
              <div style={desktopChipStyle}>
                {/* Tech Bracket Icon (Inline SVG) */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', flexShrink: 0 }}>
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                <span>{pillar.label}</span>
              </div>

              {/* Line + items wrapper */}
              <div style={desktopLineItemsWrapperStyle}>
                {/* Items container */}
                <div style={desktopItemsContainerStyle}>
                  {pillar.items.map((item) => (
                    <div key={item} style={desktopItemStyle}>
                      {item}
                    </div>
                  ))}
                </div>

                {/* Vertical gradient line */}
                <div style={desktopGradientLineStyle} />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile pillars */}
        <div className="flex flex-col sm:hidden w-full" style={mobilePillarsContainerStyle}>
          {PILLARS.map((pillar, index) => {
            const isRight = index % 2 !== 0;
            return (
              <div key={pillar.label} style={getMobilePillarWrapperStyle(isRight)}>
                {/* Chip */}
                <div style={mobileChipStyle}>
                  {/* Tech Bracket Icon (Inline SVG) */}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', flexShrink: 0 }}>
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                  <span>{pillar.label}</span>
                </div>

                {/* Line + items row */}
                <div style={getMobileLineItemsRowStyle(isRight)}>
                  {/* Vertical line */}
                  <div style={getMobileVerticalLineStyle(isRight)} />

                  {/* Items list */}
                  <div style={getMobileItemsWrapperStyle(isRight)}>
                    {pillar.items.map((item) => (
                      <div key={item} style={mobileItemStyle}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Impact Stats Block to utilize empty space */}
      <div className="relative z-10 mt-16 md:mt-24 w-full max-w-[82.292vw] mx-auto border-t border-sohub-dark-grey/40 pt-16 px-4">
        <div className="mb-10 text-center md:text-left">
          <span className="text-[10px] uppercase tracking-[0.2em] text-sohub-grey font-mono font-bold block mb-2">
            METRIC_LOG // CUMULATIVE_IMPACT
          </span>
          <h3 className="text-2xl md:text-4xl font-display-title font-extrabold text-sohub-white uppercase tracking-tight">
            Competitive Sprints & Impact
          </h3>
          <p className="text-xs md:text-sm text-sohub-grey mt-2 font-medium max-w-2xl mx-auto md:mx-0">
            A readout of cumulative performance and podium finishes achieved across competitive engineering environments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              stat: '20+',
              label: 'Hackathons Joined',
              desc: 'Competed at university, regional, and national levels under tight 24-48 hour execution windows.'
            },
            {
              stat: '15+',
              label: 'AI/ML Prototypes',
              desc: 'Built pipelines ranging from Vertex AI agentic routers to offline computer vision object scanners.'
            },
            {
              stat: '04',
              label: 'Podium Placements',
              desc: 'Secured multiple top placements including 1st Place at Google Lakecity and 2nd Place at SPSU AI-Slingshot.'
            },
            {
              stat: '50+',
              label: 'Sprints & Commits',
              desc: 'Coordinated cross-functional squads under high-pressure, developing production-ready repositories.'
            }
          ].map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="border border-sohub-dark-grey bg-sohub-dark-grey/15 p-6 hover:border-sohub-white/20 transition-all duration-300 group text-left relative overflow-hidden"
            >
              {/* Subtle top indicator line */}
              <div className="absolute top-0 left-0 w-8 h-[2px] bg-gradient-to-r from-blue-500 to-emerald-500 opacity-60" />
              
              <span className="text-4xl md:text-5xl font-display-title font-extrabold text-sohub-white block tracking-tighter group-hover:scale-[1.02] transition-transform duration-300 font-display">
                {item.stat}
              </span>
              <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-sohub-white block mt-3 border-b border-sohub-dark-grey/40 pb-2">
                {item.label}
              </span>
              <p className="text-[11px] text-sohub-grey mt-3 leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Custom Generated Glowing Neon Wave Curve */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '180px', overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
        <svg width="100%" height="100%" viewBox="0 0 1440 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="neon-curve-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1C4EFF" />
              <stop offset="25%" stopColor="#AC24FF" />
              <stop offset="50%" stopColor="#F79FFF" />
              <stop offset="75%" stopColor="#FFD600" />
              <stop offset="100%" stopColor="#FE881B" />
            </linearGradient>
            <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Soft filled background area under the curve */}
          <path
            d="M0,100 C360,180 720,20 1080,180 S 1260,100 1440,100 L1440,200 L0,200 Z"
            fill="var(--sohub-dark-grey)"
            opacity="0.02"
          />

          {/* Frayed Thread Rope Bundle (Clustered on left, diverging organically on right) */}

          {/* Thread 1: Spreads high upwards */}
          <path
            d="M -20,100 C 300,80 600,160 900,80 C 1100,20 1300,10 1460,20"
            fill="none"
            stroke="url(#neon-curve-grad)"
            strokeWidth="1.2"
            opacity="0.55"
          />

          {/* Thread 2: Spreads medium-high upwards */}
          <path
            d="M -20,95 C 300,90 600,150 900,90 C 1100,50 1300,40 1460,50"
            fill="none"
            stroke="url(#neon-curve-grad)"
            strokeWidth="1.0"
            opacity="0.5"
          />

          {/* Thread 3: Main glowing center thread */}
          <path
            d="M -20,100 C 360,180 720,20 1080,180 S 1260,100 1460,100"
            fill="none"
            stroke="url(#neon-curve-grad)"
            strokeWidth="2.0"
            filter="url(#neon-glow)"
            opacity="0.8"
          />

          {/* Thread 4: Spreads medium-low downwards */}
          <path
            d="M -20,105 C 320,110 650,80 950,140 C 1150,160 1300,150 1460,140"
            fill="none"
            stroke="url(#neon-curve-grad)"
            strokeWidth="1.3"
            opacity="0.6"
          />

          {/* Thread 5: Spreads low downwards (off-screen bottom right) */}
          <path
            d="M -20,110 C 300,130 600,60 900,160 C 1100,210 1300,220 1460,210"
            fill="none"
            stroke="url(#neon-curve-grad)"
            strokeWidth="1.0"
            opacity="0.45"
          />

          {/* Thread 6: Crossed wave ending low */}
          <path
            d="M -20,80 C 400,180 800,20 1100,120 C 1250,170 1350,190 1460,180"
            fill="none"
            stroke="url(#neon-curve-grad)"
            strokeWidth="1.5"
            opacity="0.65"
          />

          {/* Thread 7: Crossed wave ending high */}
          <path
            d="M -20,120 C 400,30 800,190 1100,80 C 1250,30 1350,10 1460,15"
            fill="none"
            stroke="url(#neon-curve-grad)"
            strokeWidth="1.3"
            opacity="0.55"
          />

          {/* Thread 8: Sinuous center-low thread */}
          <path
            d="M -20,105 C 350,150 700,90 1000,130 C 1150,150 1280,180 1460,165"
            fill="none"
            stroke="url(#neon-curve-grad)"
            strokeWidth="1.1"
            opacity="0.6"
          />

          {/* Thread 9: Soft middle-ground thread */}
          <path
            d="M -20,90 C 450,120 900,40 1200,110 C 1300,130 1380,140 1460,135"
            fill="none"
            stroke="url(#neon-curve-grad)"
            strokeWidth="1.4"
            opacity="0.6"
          />

          {/* Thread 10: Drooping bottom thread (deep dive) */}
          <path
            d="M -20,115 C 360,195 720,35 1080,195 S 1260,230 1460,230"
            fill="none"
            stroke="url(#neon-curve-grad)"
            strokeWidth="1.0"
            opacity="0.35"
          />

          {/* Thread 11: Arching top thread (high rise) */}
          <path
            d="M -20,70 C 360,20 720,180 1080,30 C 1200,-10 1350,0 1460,-10"
            fill="none"
            stroke="url(#neon-curve-grad)"
            strokeWidth="1.0"
            opacity="0.35"
          />
        </svg>
      </div>
    </section>
  );
}
