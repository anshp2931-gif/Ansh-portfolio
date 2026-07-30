import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trophy, MapPin, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import codinggita from '../assets/codinggita.jpg';
import group from '../assets/group.jpg';
import thirdprice from '../assets/thirdprice.jpg';

const TOTAL_SECONDS = 15;

const HACKATHONS = [
  {
    id: 'hs',
    tab: 'Coding Gita',
    badge: '● OFFLINE HACKATHON · WINNER',
    university: 'CodingGita',
    event: 'CodingGita HackSprint \'26',
    location: 'Gujarat, India',
    year: '2026',
    place: '🥉 3rd Place',
    placeSub: 'Team Syntax Squad · Multiplayer Horror Game Project',
    desc: 'Built Tales Beyond the Tomb — a real-time Multiplayer Horror Game Lobby that delivers an immersive pre-game experience where players can connect, communicate, and prepare together before entering the game. Developed using React.js, Tailwind CSS, Framer Motion, Node.js, Express.js, MongoDB, Socket.io, and LiveKit (WebRTC) for live synchronization and seamless voice/video communication. The project secured 3rd place through strong teamwork, innovative real-time features, and an engaging multiplayer experience.',
    images: [thirdprice, group, codinggita],
  },
];

/* ── Circular countdown ring ─────────────────────────────── */
function CountdownRing({ seconds }) {
  const r = 26;
  const circ = 2 * Math.PI * r;
  const dash = circ * (seconds / TOTAL_SECONDS);
  return (
    <div style={{ position: 'relative', width: 60, height: 60, flexShrink: 0 }}>
      <svg width="60" height="60" style={{ transform: 'rotate(-90deg)' }}>
        <circle cx="30" cy="30" r={r} fill="none" stroke="rgba(245,158,11,0.12)" strokeWidth="3.5" />
        <circle
          cx="30" cy="30" r={r} fill="none"
          stroke="#f59e0b" strokeWidth="3.5" strokeLinecap="round"
          strokeDasharray={`${dash} ${circ}`}
          style={{ transition: 'stroke-dasharray 1s linear' }}
        />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Trophy size={18} color="#f59e0b" />
      </div>
    </div>
  );
}

/* ── Main Modal ──────────────────────────────────────────── */
export default function HackathonWinnerModal({ isOpen, onClose }) {
  const [tab, setTab] = useState(0);
  const [imgIdx, setImgIdx] = useState(0);
  const [seconds, setSeconds] = useState(TOTAL_SECONDS);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [shineDone, setShineDone] = useState(false);
  const imgAreaRef = useRef(null);
  const timerRef = useRef(null);
  const cancelledRef = useRef(false);
  const confettiFired = useRef(false);

  const hack = HACKATHONS[tab];

  /* confetti */
  useEffect(() => {
    if (!isOpen || confettiFired.current) return;
    confettiFired.current = true;
    import('canvas-confetti').then(({ default: confetti }) => {
      const opts = { particleCount: 70, spread: 110, colors: ['#f59e0b','#fbbf24','#d97706','#fff','#fcd34d'], ticks: 200, gravity: 0.85, zIndex: 20000 };
      confetti({ ...opts, origin: { x: 0.3, y: 0.5 } });
      setTimeout(() => confetti({ ...opts, particleCount: 50, origin: { x: 0.7, y: 0.5 } }), 180);
    }).catch(() => {});
  }, [isOpen]);

  /* countdown */
  useEffect(() => {
    if (!isOpen) return;
    cancelledRef.current = false;
    setSeconds(TOTAL_SECONDS);
    timerRef.current = setInterval(() => {
      if (cancelledRef.current) { clearInterval(timerRef.current); return; }
      setSeconds(s => s - 1);
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [isOpen]);

  /* auto-close when hits 0 */
  useEffect(() => {
    if (isOpen && seconds <= 0 && !cancelledRef.current) {
      clearInterval(timerRef.current);
      onClose();
    }
  }, [seconds, isOpen, onClose]);

  /* shine per tab */
  useEffect(() => {
    setShineDone(false);
    setImgIdx(0);
    const t = setTimeout(() => setShineDone(true), 1200);
    return () => clearTimeout(t);
  }, [tab]);

  const handleClose = useCallback(() => {
    cancelledRef.current = true;
    clearInterval(timerRef.current);
    onClose();
  }, [onClose]);

  const prev = () => setImgIdx(i => (i - 1 + hack.images.length) % hack.images.length);
  const next = () => setImgIdx(i => (i + 1) % hack.images.length);

  const onMouseMove = e => {
    const el = imgAreaRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setTilt({ x: -dy * 5, y: dx * 5 });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="hw-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={handleClose}
          style={{
            position: 'fixed', inset: 0, zIndex: 19999,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '12px',
            background: 'rgba(0,0,0,0.87)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <motion.div
            key="hw-modal"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            onClick={e => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: 960,
              maxHeight: '94vh',
              overflow: 'hidden',
              borderRadius: 18,
              background: '#030712',
              border: '1px solid rgba(245,158,11,0.18)',
              boxShadow: '0 0 80px rgba(245,158,11,0.07), 0 40px 100px rgba(0,0,0,0.9)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* animated top border */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 2, zIndex: 20,
              background: 'linear-gradient(90deg, transparent, #f59e0b, #fbbf24, #d97706, transparent)',
              backgroundSize: '200% 100%',
              animation: 'hwBorderSweep 2.8s linear infinite',
            }} />

            {/* X close */}
            <button
              onClick={handleClose}
              style={{
                position: 'absolute', top: 14, right: 14, zIndex: 30,
                width: 32, height: 32, borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#94a3b8', cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background='rgba(245,158,11,0.15)'; e.currentTarget.style.color='#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.06)'; e.currentTarget.style.color='#94a3b8'; }}
            >
              <X size={15} />
            </button>

            {/* ── BODY: split on md, stacked on mobile ── */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              overflow: 'hidden',
            }} className="hw-body">

              {/* LEFT — image panel */}
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', background: 'rgba(0,0,0,0.35)', minHeight: 220 }} className="hw-left">
                {/* main image */}
                <div
                  ref={imgAreaRef}
                  onMouseMove={onMouseMove}
                  onMouseLeave={() => setTilt({ x: 0, y: 0 })}
                  style={{ flex: 1, position: 'relative', overflow: 'hidden', perspective: 900, minHeight: 220 }}
                >
                  <motion.div
                    animate={{ rotateX: tilt.x, rotateY: tilt.y }}
                    transition={{ type: 'spring', stiffness: 180, damping: 22 }}
                    style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, transformStyle: 'preserve-3d' }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={`${tab}-${imgIdx}`}
                        src={hack.images[imgIdx]}
                        alt=""
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.97 }}
                        transition={{ duration: 0.4 }}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0, display: 'block' }}
                        draggable={false}
                      />
                    </AnimatePresence>
                    {/* light sweep */}
                    {!shineDone && (
                      <div key={`shine-${tab}`} style={{
                        position: 'absolute', inset: 0, zIndex: 5, pointerEvents: 'none',
                        background: 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.22) 50%, transparent 80%)',
                        backgroundSize: '250% 100%',
                        animation: 'hwImageSweep 1.1s ease-out forwards',
                      }} />
                    )}
                  </motion.div>

                  {/* counter */}
                  <div style={{
                    position: 'absolute', bottom: 10, left: 10, zIndex: 10,
                    padding: '3px 10px', borderRadius: 20, fontSize: 11,
                    fontFamily: 'monospace', fontWeight: 700, letterSpacing: '0.12em',
                    color: '#fbbf24', background: 'rgba(3,7,18,0.75)',
                    border: '1px solid rgba(245,158,11,0.25)',
                  }}>
                    {imgIdx + 1} / {hack.images.length}
                  </div>

                  {/* arrows */}
                  {hack.images.length > 1 && <>
                    <button onClick={prev} style={arrowStyle('left')}>
                      <ChevronLeft size={14} />
                    </button>
                    <button onClick={next} style={arrowStyle('right')}>
                      <ChevronRight size={14} />
                    </button>
                  </>}

                  {/* bottom fade */}
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 60, pointerEvents: 'none', background: 'linear-gradient(to top, #030712, transparent)' }} />
                </div>

                {/* thumbnail strip */}
                <div style={{ display: 'flex', gap: 8, padding: '10px 12px', background: 'rgba(0,0,0,0.3)', overflowX: 'auto', flexShrink: 0 }}>
                  {hack.images.map((img, i) => (
                    <button key={i} onClick={() => setImgIdx(i)} style={{
                      flexShrink: 0, width: 60, height: 42, borderRadius: 8, overflow: 'hidden',
                      border: `1.5px solid ${i === imgIdx ? '#f59e0b' : 'rgba(255,255,255,0.08)'}`,
                      boxShadow: i === imgIdx ? '0 0 12px rgba(245,158,11,0.4)' : 'none',
                      cursor: 'pointer', position: 'relative', padding: 0, background: 'none',
                      animation: i === imgIdx ? 'hwThumbGlow 2s ease-in-out infinite' : 'none',
                    }}>
                      <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: i === imgIdx ? 1 : 0.5 }} draggable={false} />
                    </button>
                  ))}
                </div>
              </div>

              {/* RIGHT — content panel */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '22px 20px 20px', overflowY: 'auto' }} className="hw-right">

                {/* tab switcher */}
                <div style={{
                  display: 'flex', gap: 4, padding: 4, borderRadius: 12, marginBottom: 18, flexShrink: 0,
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)',
                }}>
                  {HACKATHONS.map((h, i) => (
                    <button
                      key={h.id}
                      onClick={() => setTab(i)}
                      style={{
                        flex: 1, padding: '8px 6px', borderRadius: 8, fontSize: 11, fontWeight: 700,
                        letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer',
                        background: tab === i ? 'rgba(245,158,11,0.08)' : 'transparent',
                        color: tab === i ? '#f59e0b' : '#475569',
                        border: 'none', position: 'relative', transition: 'all 0.2s',
                      }}
                    >
                      {h.tab}
                      {tab === i && (
                        <motion.div
                          layoutId="hw-tab-underline"
                          style={{
                            position: 'absolute', bottom: 2, left: 8, right: 8, height: 2, borderRadius: 2,
                            background: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
                          }}
                          transition={{ type: 'spring', stiffness: 320, damping: 30 }}
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* animated content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={tab}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}
                  >
                    {/* badge */}
                    <span style={{
                      alignSelf: 'flex-start', fontSize: 10, fontWeight: 700, letterSpacing: '0.16em',
                      textTransform: 'uppercase', padding: '6px 12px', borderRadius: 20,
                      color: '#f59e0b', border: '1px solid rgba(245,158,11,0.35)', background: 'rgba(245,158,11,0.06)',
                    }}>
                      {hack.badge}
                    </span>

                    {/* university */}
                    <div>
                      <h2 style={{ fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 900, color: '#f8fafc', margin: 0, lineHeight: 1.2 }}>
                        {hack.university}
                      </h2>
                      <p style={{ fontSize: 13, fontWeight: 600, color: 'rgba(245,158,11,0.8)', margin: '4px 0 0' }}>
                        {hack.event}
                      </p>
                    </div>

                    {/* location */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, fontFamily: 'monospace', color: '#475569', letterSpacing: '0.08em' }}>
                      <MapPin size={12} color="#334155" />
                      {hack.location} · {hack.year}
                    </div>

                    {/* divider */}
                    <div style={{ height: 1, background: 'linear-gradient(90deg, rgba(245,158,11,0.25), transparent)' }} />

                    {/* achievement */}
                    <div>
                      <div style={{ fontSize: 'clamp(22px, 4vw, 30px)', fontWeight: 900, color: '#f8fafc' }}>{hack.place}</div>
                      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,158,11,0.65)', marginTop: 2 }}>{hack.placeSub}</div>
                    </div>

                    {/* description */}
                    <p style={{ fontSize: 13, lineHeight: 1.65, color: '#64748b', margin: 0 }}>{hack.desc}</p>

                    <div style={{ flex: 1, minHeight: 8 }} />

                    {/* CTA */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flexShrink: 0 }}>
                      <button
                        onClick={handleClose}
                        className="hw-cta-btn"
                        style={{
                          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                          padding: '13px 18px', borderRadius: 12, fontWeight: 900, fontSize: 13,
                          letterSpacing: '0.06em', cursor: 'pointer', border: 'none', position: 'relative', overflow: 'hidden',
                          background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                          color: '#030712',
                          boxShadow: '0 0 28px rgba(245,158,11,0.22), 0 4px 16px rgba(0,0,0,0.4)',
                          transition: 'box-shadow 0.3s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.boxShadow='0 0 44px rgba(245,158,11,0.45), 0 4px 20px rgba(0,0,0,0.5)'}
                        onMouseLeave={e => e.currentTarget.style.boxShadow='0 0 28px rgba(245,158,11,0.22), 0 4px 16px rgba(0,0,0,0.4)'}
                      >
                        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <ArrowRight size={16} />
                          CONTINUE TO PORTFOLIO
                        </span>
                        <span style={{ fontSize: 12, fontFamily: 'monospace', padding: '2px 8px', borderRadius: 6, background: 'rgba(3,7,18,0.25)' }}>
                          {seconds}s
                        </span>
                      </button>

                      {/* ring + label */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <CountdownRing seconds={Math.max(0, seconds)} />
                        <div>
                          <div style={{ fontSize: 11, fontFamily: 'monospace', color: '#475569' }}>Auto-close in</div>
                          <div style={{ fontSize: 18, fontWeight: 900, fontFamily: 'monospace', color: '#f59e0b' }}>{Math.max(0, seconds)}s</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Responsive CSS */}
          <style>{`
            .hw-body { flex-direction: column !important; }
            .hw-left { min-height: 200px; }
            @media (min-width: 640px) {
              .hw-body { flex-direction: row !important; }
              .hw-left { width: 50% !important; min-height: unset !important; }
              .hw-right { overflow-y: auto; }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* arrow button style */
function arrowStyle(side) {
  return {
    position: 'absolute', [side]: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 10,
    width: 28, height: 28, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)',
    background: 'rgba(0,0,0,0.55)', color: '#fff', cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  };
}

/* ── Hook: fires instantly once preloader is done (session-gated) ─── */
export function useHackathonWinnerModal(preloaderDone) {
  const [isOpen, setIsOpen] = useState(false);
  const fired = useRef(false);

  useEffect(() => {
    if (!preloaderDone || fired.current) return;
    if (sessionStorage.getItem('hwModal_shown')) return;
    fired.current = true;
    // fire right away — no artificial delay
    setIsOpen(true);
    sessionStorage.setItem('hwModal_shown', '1');
  }, [preloaderDone]);

  const close = useCallback(() => setIsOpen(false), []);
  return { isOpen, close };
}
