/// <reference types="vite/client" />
import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useInView, useScroll, useTransform } from 'motion/react';
import { useTheme } from 'next-themes';
import { Link } from 'react-router-dom';
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  Sparkles,
  Heart,
  ChevronUp,
} from 'lucide-react';
import profilePic from '../../assets/profile.jpeg';
import { SparklesCore } from './sparkles';
import { LiquidButton } from './liquid-glass-button';

// ─── Accent palette ──────────────────────────────────────────────────────────
const ACCENT = {
  sky: '#38bdf8',
  violet: '#a78bfa',
  emerald: '#34d399',
  rose: '#fb7185',
  amber: '#fbbf24',
};

const SHIMMER_GRADIENT = `linear-gradient(
  120deg,
  transparent 0%,
  transparent 30%,
  rgba(255,255,255,0.08) 50%,
  transparent 70%,
  transparent 100%
)`;

// ─── Nav sections ────────────────────────────────────────────────────────────
const NAV_SECTIONS = [
  {
    title: 'Explore',
    accent: ACCENT.sky,
    links: [
      { label: 'Home', to: '/' },
      { label: 'About', to: '/about' },
      { label: 'Skills', to: '/skills' },
      { label: 'Projects', to: '/projects' },
    ],
  },
  {
    title: 'Journey',
    accent: ACCENT.violet,
    links: [
      { label: 'Experience', to: '/experience' },
      { label: 'Certificates', to: '/certificates' },
      { label: 'Hackathons', to: '/hackathons' },
      { label: 'Journey', to: '/journey' },
    ],
  },
  {
    title: 'Contact',
    accent: ACCENT.emerald,
    links: [
      { label: 'Contact Me', to: '/contact' },
      { label: 'Email', to: 'mailto:contact@unmeshjoshi.com', external: true },
    ],
  },
];

const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/unmeshjoshi',
    icon: Github,
    color: ACCENT.sky,
    hoverBg: 'rgba(56,189,248,0.12)',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: Linkedin,
    color: ACCENT.violet,
    hoverBg: 'rgba(167,139,250,0.12)',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: Instagram,
    color: ACCENT.rose,
    hoverBg: 'rgba(251,113,133,0.12)',
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function useLiveTime() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const fmt = () =>
      setTime(
        new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(new Date())
      );
    fmt();
    const t = setInterval(fmt, 1000);
    return () => clearInterval(t);
  }, []);
  return time;
}

// ─── Animated entrance wrapper ───────────────────────────────────────────────

function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduce = useReducedMotion();

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={reduce ? {} : { opacity: 0, y: 24, filter: 'blur(6px)' }}
        animate={
          inView
            ? { opacity: 1, y: 0, filter: 'blur(0px)' }
            : reduce
            ? {}
            : { opacity: 0, y: 24, filter: 'blur(6px)' }
        }
        transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// ─── Glass card ──────────────────────────────────────────────────────────────

function GlassCard({
  children,
  className = '',
  isDark,
}: {
  children: React.ReactNode;
  className?: string;
  isDark: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{ scale: hovered ? 1.015 : 1 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`relative overflow-hidden rounded-2xl p-6 ${className}`}
      style={{
        background: isDark
          ? 'rgba(255,255,255,0.04)'
          : 'rgba(12,16,22,0.04)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: isDark
          ? '1px solid rgba(255,255,255,0.08)'
          : '1px solid rgba(12,16,22,0.08)',
        boxShadow: isDark
          ? '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)'
          : '0 8px 32px rgba(12,16,22,0.08), inset 0 1px 0 rgba(255,255,255,0.8)',
      }}
    >
      {/* Shimmer sweep on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ x: hovered ? '200%' : '-100%' }}
        initial={{ x: '-100%' }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        style={{ background: SHIMMER_GRADIENT }}
      />
      {children}
    </motion.div>
  );
}

// ─── Social button ───────────────────────────────────────────────────────────

function SocialBtn({
  label,
  href,
  Icon,
  color,
  hoverBg,
  isDark,
  index,
}: {
  label: string;
  href: string;
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
  hoverBg: string;
  isDark: boolean;
  index: number;
}) {
  const [hov, setHov] = useState(false);

  return (
    <Reveal delay={0.15 + index * 0.07}>
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        onHoverStart={() => setHov(true)}
        onHoverEnd={() => setHov(false)}
        whileTap={{ scale: 0.92 }}
        className="relative flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer"
        style={{
          background: hov ? hoverBg : 'transparent',
          border: `1px solid ${hov ? color + '40' : isDark ? 'rgba(255,255,255,0.08)' : 'rgba(12,16,22,0.08)'}`,
          transition: 'background 0.2s, border 0.2s',
        }}
      >
        <motion.div
          animate={{ rotate: hov ? 360 : 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="flex-shrink-0"
        >
          <Icon
            className="size-4"
            style={{ color: hov ? color : undefined }}
          />
        </motion.div>
        <span
          className="text-sm font-medium"
          style={{
            color: hov ? color : isDark ? 'rgba(255,255,255,0.55)' : 'rgba(12,16,22,0.55)',
            transition: 'color 0.2s',
          }}
        >
          {label}
        </span>
        <motion.div
          className="ml-auto"
          animate={{ x: hov ? 2 : 0, opacity: hov ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowUpRight className="size-3.5" style={{ color }} />
        </motion.div>
      </motion.a>
    </Reveal>
  );
}

// ─── Nav link ────────────────────────────────────────────────────────────────

function NavLink({
  label,
  to,
  external,
  accent,
  index,
  isDark,
}: {
  label: string;
  to: string;
  external?: boolean;
  accent: string;
  index: number;
  isDark: boolean;
}) {
  const [hov, setHov] = useState(false);

  const inner = (
    <motion.span
      onHoverStart={() => setHov(true)}
      onHoverEnd={() => setHov(false)}
      className="flex items-center gap-1.5 text-sm py-1 cursor-pointer"
      style={{
        color: hov ? accent : isDark ? 'rgba(255,255,255,0.5)' : 'rgba(12,16,22,0.5)',
        transition: 'color 0.2s',
      }}
    >
      <motion.span
        animate={{ x: hov ? 3 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {label}
      </motion.span>
      {external && (
        <motion.span
          animate={{ opacity: hov ? 1 : 0, x: hov ? 0 : -4 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowUpRight className="size-3" />
        </motion.span>
      )}
    </motion.span>
  );

  return (
    <Reveal delay={0.08 * index}>
      {external ? (
        <a href={to} target="_blank" rel="noopener noreferrer">
          {inner}
        </a>
      ) : (
        <Link to={to}>{inner}</Link>
      )}
    </Reveal>
  );
}

// ─── Scroll to top ───────────────────────────────────────────────────────────

function ScrollTop({ isDark }: { isDark: boolean }) {
  const [hov, setHov] = useState(false);
  return (
    <motion.button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      onHoverStart={() => setHov(true)}
      onHoverEnd={() => setHov(false)}
      whileTap={{ scale: 0.9 }}
      animate={{ y: hov ? -3 : 0 }}
      transition={{ duration: 0.2 }}
      className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold cursor-pointer"
      style={{
        color: hov
          ? ACCENT.sky
          : isDark
          ? 'rgba(255,255,255,0.4)'
          : 'rgba(12,16,22,0.4)',
        transition: 'color 0.2s',
      }}
    >
      <motion.div
        animate={{ y: hov ? -2 : 0 }}
        transition={{ duration: 0.2, repeat: hov ? Infinity : 0, repeatType: 'reverse' }}
        className="p-1.5 rounded-full border"
        style={{
          borderColor: hov
            ? ACCENT.sky + '60'
            : isDark
            ? 'rgba(255,255,255,0.12)'
            : 'rgba(12,16,22,0.12)',
          transition: 'border-color 0.2s',
        }}
      >
        <ChevronUp className="size-3.5" />
      </motion.div>
      Back to top
    </motion.button>
  );
}

// ─── Main Footer ─────────────────────────────────────────────────────────────

export function FooterSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const time = useLiveTime();

  const footerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  const shouldReduceMotion = useReducedMotion();

  // Scroll parallax reveal properties
  const scrollY = useTransform(scrollYProgress, [0, 1], [120, 0]);
  const scrollScale = useTransform(scrollYProgress, [0, 1], [0.93, 1]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  useEffect(() => setMounted(true), []);

  // Inverted: light-page → dark footer, dark-page → light footer
  const isDark = mounted ? resolvedTheme !== 'dark' : true;
  // isDark=true  → footer has dark background  (light-mode page)
  // isDark=false → footer has light background (dark-mode page)

  const bg = isDark
    ? 'linear-gradient(165deg, #070b12 0%, #030509 45%, #010204 100%)' // Shiny bold dark background
    : 'linear-gradient(165deg, rgba(255, 255, 255, 0.7) 0%, rgba(240, 246, 248, 0.65) 45%, rgba(232, 240, 244, 0.6) 100%)';

  const textPrimary = isDark ? '#F0F6F8' : '#0C1016';
  const textMuted = isDark ? 'rgba(240,246,248,0.45)' : 'rgba(12,16,22,0.45)';
  const dividerColor = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(12,16,22,0.07)';

  const style = shouldReduceMotion
    ? {
        background: bg,
        backdropFilter: isDark ? 'none' : 'blur(20px)',
        WebkitBackdropFilter: isDark ? 'none' : 'blur(20px)',
        transition: 'background 0.5s ease',
      }
    : {
        background: bg,
        backdropFilter: isDark ? 'none' : 'blur(20px)',
        WebkitBackdropFilter: isDark ? 'none' : 'blur(20px)',
        transition: 'background 0.5s ease',
        y: scrollY,
        scale: scrollScale,
        opacity: scrollOpacity,
      };

  return (
    <motion.footer
      ref={footerRef}
      className="relative w-full mt-20 overflow-hidden origin-bottom"
      style={style}
    >
      {/* ── Ambient glow orbs (light mode → sharp dark glow) ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -left-20 w-96 h-96 rounded-full"
          style={{
            background: isDark
              ? 'radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute -top-20 right-0 w-80 h-80 rounded-full"
          style={{
            background: isDark
              ? 'radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48"
          style={{
            background: isDark
              ? 'radial-gradient(ellipse, rgba(52,211,153,0.04) 0%, transparent 70%)'
              : 'radial-gradient(ellipse, rgba(52,211,153,0.05) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* ── Rainbow shimmer top border ── */}
      <div className="relative h-[2px] w-full overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, ${ACCENT.sky}, ${ACCENT.violet}, ${ACCENT.emerald}, ${ACCENT.rose}, ${ACCENT.amber})`,
          }}
        />
        {/* Animated shimmer sweep on the border */}
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)',
          }}
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
        />
      </div>

      {/* ── Top connection glow lines ── */}
      <div className="absolute top-0 inset-x-0 h-4 pointer-events-none overflow-hidden z-10">
        <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent h-[2px] w-full blur-sm" />
        <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[#818cf8] to-transparent h-px w-full" />
        <div className="absolute inset-x-1/4 top-0 bg-gradient-to-r from-transparent via-[#34d399] to-transparent h-[4px] w-1/2 blur-sm" />
        <div className="absolute inset-x-1/4 top-0 bg-gradient-to-r from-transparent via-[#fb7185] to-transparent h-px w-1/2" />
      </div>

      {/* ── Sparkles Background Effect (fills entire footer) ── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.4}
          particleDensity={60}
          className="w-full h-full opacity-60 dark:opacity-40"
          particleColor={isDark ? "#FFFFFF" : "#0C1016"}
          speed={0.6}
        />
        {/* Subtle radial gradient mask to keep it clean */}
        <div 
          className="absolute inset-0 w-full h-full" 
          style={{
            background: isDark
              ? 'radial-gradient(circle at 50% 50%, transparent 40%, rgba(3, 5, 9, 0.4) 100%)'
              : 'radial-gradient(circle at 50% 50%, transparent 40%, rgba(240, 246, 248, 0.4) 100%)'
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="container mx-auto px-6 pt-16 pb-10 relative z-10">

        {/* ════ ROW 1: Brand + Nav columns + Socials ════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">

          {/* ── Brand column (col-span 4) ── */}
          <div className="lg:col-span-4 space-y-6">

            {/* Logo mark (Avatar / profile pic) */}
            <Reveal delay={0.05}>
              <div className="flex items-center gap-3.5">
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  className="w-11 h-11 rounded-full p-[2px] relative flex items-center justify-center overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${ACCENT.sky}, ${ACCENT.violet}, ${ACCENT.emerald})`,
                    boxShadow: `0 4px 16px ${ACCENT.sky}30`,
                  }}
                >
                  <img
                    src={profilePic}
                    alt="Unmesh Joshi"
                    className="w-full h-full object-cover rounded-full bg-sohub-dark-grey"
                  />
                </motion.div>
                <div>
                  <div
                    className="text-xl font-bold tracking-tight leading-none"
                    style={{ color: textPrimary }}
                  >
                    Unmesh Joshi
                  </div>
                  <div
                    className="text-xxs mt-1.5 font-bold tracking-wider uppercase opacity-85"
                    style={{ color: textMuted }}
                  >
                    Engineer • Builder • AI Explorer
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Tagline */}
            <Reveal delay={0.12}>
              <p className="text-sm leading-relaxed max-w-[26ch]" style={{ color: textMuted }}>
                Crafting premium digital experiences with code, design, and obsessive attention to detail.
              </p>
            </Reveal>

            {/* Location + Clock pills */}
            <Reveal delay={0.18}>
              <div className="flex flex-col gap-2">
                <GlassCard isDark={isDark} className="!p-3 !rounded-xl inline-flex items-center gap-2.5 w-fit">
                  <MapPin className="size-3.5 flex-shrink-0" style={{ color: ACCENT.emerald }} />
                  <span className="text-xs font-medium" style={{ color: textMuted }}>
                    Udaipur, Rajasthan, India
                  </span>
                </GlassCard>

                <GlassCard isDark={isDark} className="!p-3 !rounded-xl inline-flex items-center gap-2.5 w-fit">
                  <motion.span
                    className="size-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: ACCENT.emerald }}
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <Clock className="size-3.5 flex-shrink-0" style={{ color: textMuted }} />
                  <span className="text-xs font-mono font-medium" style={{ color: textMuted }}>
                    {time || '00:00:00'}{' '}
                    <span style={{ color: ACCENT.sky }}>IST</span>
                  </span>
                </GlassCard>
              </div>
            </Reveal>
          </div>

          {/* ── Nav links (col-span 5) ── */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {NAV_SECTIONS.map((section, si) => (
              <Reveal key={section.title} delay={0.1 + si * 0.06} className="space-y-4">
                <div>
                  {/* Section header */}
                  <div className="flex items-center gap-2 mb-4">
                    <motion.span
                      className="block w-5 h-[2px] rounded-full"
                      style={{ backgroundColor: section.accent }}
                      whileInView={{ scaleX: [0, 1] }}
                      transition={{ duration: 0.5, delay: 0.2 + si * 0.1 }}
                    />
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.15em]"
                      style={{ color: section.accent }}
                    >
                      {section.title}
                    </span>
                  </div>

                  {/* Links */}
                  <div className="space-y-0.5">
                    {section.links.map((link, li) => (
                      <NavLink
                        key={link.label}
                        label={link.label}
                        to={link.to}
                        external={'external' in link ? link.external : false}
                        accent={section.accent}
                        index={li}
                        isDark={isDark}
                      />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* ── Socials column (col-span 3) ── */}
          <div className="lg:col-span-3">
            <Reveal delay={0.1}>
              <div className="flex items-center gap-2 mb-4">
                <motion.span
                  className="block w-5 h-[2px] rounded-full"
                  style={{ backgroundColor: ACCENT.rose }}
                  whileInView={{ scaleX: [0, 1] }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                />
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.15em]"
                  style={{ color: ACCENT.rose }}
                >
                  Socials
                </span>
              </div>
            </Reveal>

            <div className="space-y-2">
              {SOCIALS.map((s, i) => (
                <SocialBtn
                  key={s.label}
                  label={s.label}
                  href={s.href}
                  Icon={s.icon}
                  color={s.color}
                  hoverBg={s.hoverBg}
                  isDark={isDark}
                  index={i}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ════ Divider ════ */}
        <Reveal delay={0.3}>
          <div
            className="w-full h-px mb-10"
            style={{ background: dividerColor }}
          />
        </Reveal>

        {/* ════ ROW 2: Status card + CTA ════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">

          {/* Status card */}
          <Reveal delay={0.2}>
            <GlassCard isDark={isDark} className="flex items-start gap-4">
              <motion.div
                className="mt-0.5 p-2 rounded-lg flex-shrink-0"
                style={{
                  background: `${ACCENT.emerald}18`,
                  border: `1px solid ${ACCENT.emerald}30`,
                }}
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <Sparkles className="size-4" style={{ color: ACCENT.emerald }} />
              </motion.div>
              <div>
                <div className="text-sm font-semibold mb-1" style={{ color: textPrimary }}>
                  Open to Opportunities
                </div>
                <div className="text-xs leading-relaxed" style={{ color: textMuted }}>
                  Currently available for freelance projects, internships, and full-time roles. Let's build something great.
                </div>
              </div>
            </GlassCard>
          </Reveal>

          {/* CTA card */}
          <Reveal delay={0.26}>
            <GlassCard isDark={isDark} className="flex items-center justify-between gap-4 group">
              <div>
                <div className="text-sm font-semibold mb-1" style={{ color: textPrimary }}>
                  Let's work together
                </div>
                <div className="text-xs" style={{ color: textMuted }}>
                  contact@unmeshjoshi.com
                </div>
              </div>
              <LiquidButton
                href="mailto:contact@unmeshjoshi.com"
                className="flex-shrink-0 rounded-full flex items-center gap-2 text-xs font-semibold text-white hover:text-white dark:text-zinc-950 dark:hover:text-zinc-950 px-6 py-3"
              >
                <Mail className="size-3.5" />
                Say Hello
                <ArrowUpRight className="size-3" />
              </LiquidButton>
            </GlassCard>
          </Reveal>
        </div>

        {/* ════ Bottom bar ════ */}
        <Reveal delay={0.4}>
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-5 pt-8"
            style={{ borderTop: `1px solid ${dividerColor}` }}
          >
            {/* Copyright */}
            <div className="flex items-center gap-2 text-xs" style={{ color: textMuted }}>
              <span>© {new Date().getFullYear()} Unmesh Joshi.</span>
              <span className="opacity-40">·</span>
              <span>All rights reserved.</span>
            </div>

            {/* Scroll to top */}
            <ScrollTop isDark={isDark} />

            {/* Made with */}
            <div className="flex items-center gap-1.5 text-xs" style={{ color: textMuted }}>
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1 }}
              >
                <Heart className="size-3.5 fill-current" style={{ color: ACCENT.rose }} />
              </motion.span>
              <span>in</span>
              <span style={{ color: textPrimary }} className="font-medium">India 🇮🇳</span>
            </div>
          </div>
        </Reveal>
      </div>
    </motion.footer>
  );
}
