import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, MapPin, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
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
    placeTitle: '3rd Place',
    placeSub: 'Team Syntax Squad · Multiplayer Horror Game Project',
    desc: 'Built Tales Beyond the Tomb — a real-time Multiplayer Horror Game Lobby that delivers an immersive pre-game experience where players can connect, communicate, and prepare together before entering the game. Developed using React.js, Tailwind CSS, Framer Motion, Node.js, Express.js, MongoDB, Socket.io, and LiveKit (WebRTC) for live synchronization and seamless voice/video communication. The project secured 3rd place through strong teamwork, innovative real-time features, and an engaging multiplayer experience.',
    images: [thirdprice, group, codinggita],
  },
];

/* ── Main Showcase Modal ─────────────────────────────────── */
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

  const hack = HACKATHONS[tab] || HACKATHONS[0];

  /* Single 2-color confetti burst on open */
  useEffect(() => {
    if (!isOpen || confettiFired.current) return;
    confettiFired.current = true;
    import('canvas-confetti').then(({ default: confetti }) => {
      confetti({
        particleCount: 50,
        spread: 65,
        startVelocity: 28,
        colors: ['#f59e0b', '#ffffff'],
        ticks: 75,
        gravity: 1.25,
        origin: { x: 0.72, y: 0.42 },
        zIndex: 20000,
        disableForReducedMotion: true,
      });
    }).catch(() => {});
  }, [isOpen]);

  /* Countdown timer */
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

  /* Auto-close when countdown hits 0 */
  useEffect(() => {
    if (isOpen && seconds <= 0 && !cancelledRef.current) {
      clearInterval(timerRef.current);
      onClose();
    }
  }, [seconds, isOpen, onClose]);

  /* Shine effect reset per tab */
  useEffect(() => {
    setShineDone(false);
    setImgIdx(0);
    const t = setTimeout(() => setShineDone(true), 1200);
    return () => clearTimeout(t);
  }, [tab]);

  const handleClose = useCallback(() => {
    cancelledRef.current = true;
    if (timerRef.current) clearInterval(timerRef.current);
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
          className="fixed inset-0 z-[19999] flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md"
        >
          <motion.div
            key="hw-modal"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            onClick={e => e.stopPropagation()}
            className="relative w-full max-w-5xl max-h-[92vh] overflow-hidden rounded-2xl bg-[#030712] border border-amber-500/20 shadow-[0_0_80px_rgba(245,158,11,0.07),0_40px_100px_rgba(0,0,0,0.9)] flex flex-col"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] z-20 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-80" />

            {/* X Close button */}
            <button
              id="hw-modal-close"
              onClick={handleClose}
              aria-label="Close modal"
              className="absolute top-3.5 right-3.5 z-30 w-8 h-8 rounded-full flex items-center justify-center bg-white/5 hover:bg-amber-500/15 border border-white/10 hover:border-amber-500/40 text-slate-400 hover:text-white transition-all duration-200 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* ── BODY: Split on md, stacked on mobile ── */}
            <div className="flex flex-col md:flex-row flex-1 overflow-hidden">

              {/* LEFT — Image Carousel */}
              <div className="relative flex flex-col bg-black/40 md:w-[50%] shrink-0 min-h-[220px] sm:min-h-[280px] md:min-h-0">
                {/* Main image area */}
                <div
                  ref={imgAreaRef}
                  onMouseMove={onMouseMove}
                  onMouseLeave={() => setTilt({ x: 0, y: 0 })}
                  className="flex-1 relative overflow-hidden cursor-grab active:cursor-grabbing"
                  style={{ perspective: 900 }}
                >
                  <motion.div
                    animate={{ rotateX: tilt.x, rotateY: tilt.y }}
                    transition={{ type: 'spring', stiffness: 180, damping: 22 }}
                    className="w-full h-full absolute inset-0"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={`${tab}-${imgIdx}`}
                        src={hack.images[imgIdx]}
                        alt={`${hack.event} photo ${imgIdx + 1}`}
                        initial={{ opacity: 0, scale: 1.04 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.97 }}
                        transition={{ duration: 0.35 }}
                        className="w-full h-full object-cover absolute inset-0 select-none"
                        draggable={false}
                      />
                    </AnimatePresence>

                    {/* Light-sweep shine */}
                    {!shineDone && (
                      <div
                        key={`shine-${tab}`}
                        className="absolute inset-0 z-10 pointer-events-none"
                        style={{
                          background: 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.2) 50%, transparent 80%)',
                          backgroundSize: '250% 100%',
                          animation: 'hwImageSweep 1.1s ease-out forwards',
                        }}
                      />
                    )}
                  </motion.div>

                  {/* Counter overlay */}
                  <div className="absolute bottom-3 left-3 z-20 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold tracking-widest text-amber-400 bg-[#030712]/80 border border-amber-500/25">
                    {imgIdx + 1} / {hack.images.length}
                  </div>

                  {/* Restyled navigation arrows */}
                  {hack.images.length > 1 && (
                    <>
                      <button
                        onClick={prev}
                        aria-label="Previous photo"
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-xl bg-black/60 hover:bg-amber-500/10 border border-amber-500/20 hover:border-amber-500/50 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:shadow-[0_0_12px_rgba(245,158,11,0.3)] cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={next}
                        aria-label="Next photo"
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-xl bg-black/60 hover:bg-amber-500/10 border border-amber-500/20 hover:border-amber-500/50 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:shadow-[0_0_12px_rgba(245,158,11,0.3)] cursor-pointer"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </>
                  )}

                  {/* Bottom gradient fade */}
                  <div className="absolute bottom-0 left-0 right-0 h-14 pointer-events-none bg-gradient-to-t from-[#030712] to-transparent z-10" />
                </div>

                {/* Thumbnails strip */}
                <div className="flex gap-2 p-3 bg-black/30 overflow-x-auto shrink-0 border-t border-white/5">
                  {hack.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setImgIdx(i)}
                      className={`relative shrink-0 w-16 h-11 rounded-lg overflow-hidden transition-all duration-200 cursor-pointer ${
                        i === imgIdx
                          ? 'border-2 border-amber-500 opacity-100'
                          : 'border border-white/10 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* RIGHT — Content Panel */}
              <div className="flex-1 flex flex-col p-5 sm:p-7 overflow-y-auto">

                {/* Tab Switcher */}
                {HACKATHONS.length > 1 && (
                  <div className="flex gap-1 p-1 rounded-xl mb-6 bg-white/[0.03] border border-white/5 shrink-0">
                    {HACKATHONS.map((h, i) => (
                      <button
                        key={h.id}
                        onClick={() => setTab(i)}
                        className={`relative flex-1 py-2 px-3 text-[11px] font-bold tracking-wider uppercase rounded-lg transition-all duration-200 cursor-pointer ${
                          tab === i ? 'text-amber-400 bg-amber-500/10' : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {h.tab}
                        {tab === i && (
                          <motion.div
                            layoutId="hw-tab-underline"
                            className="absolute bottom-0.5 left-2 right-2 h-[2px] rounded-full bg-amber-400"
                            transition={{ type: 'spring', stiffness: 320, damping: 30 }}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                )}

                {/* Animated content block */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={tab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col flex-1"
                  >
                    {/* Status badge pill */}
                    <div className="mb-4">
                      <span className="inline-block text-[10px] font-bold tracking-[0.16em] uppercase px-3 py-1.5 rounded-full text-amber-400 border border-amber-500/35 bg-amber-500/10">
                        {hack.badge}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="mb-3">
                      <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                        {hack.event}
                      </h2>

                      <div className="flex items-center gap-2 mt-1.5">
                        <Award className="w-5 h-5 text-amber-400 shrink-0 stroke-[2.2]" />
                        <span className="text-base sm:text-lg font-bold text-amber-400 tracking-wide">
                          {hack.placeTitle}
                        </span>
                        <span className="text-slate-500 font-mono text-xs">•</span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-300">
                          {hack.placeSub}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 tracking-wider mt-2">
                        <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        {hack.location} · {hack.year}
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px w-full bg-gradient-to-r from-amber-500/25 via-amber-500/10 to-transparent my-3" />

                    {/* Description */}
                    <p className="text-sm text-slate-400 leading-relaxed max-w-[60ch] mb-6">
                      {hack.desc}
                    </p>

                    <div className="flex-1 min-h-[12px]" />

                    {/* CTA Button */}
                    <div className="shrink-0 mt-auto pt-2">
                      <button
                        id="hw-cta-continue"
                        onClick={handleClose}
                        className="group w-full flex items-center justify-between px-5 py-3.5 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-[0_0_25px_rgba(245,158,11,0.22)] hover:shadow-[0_0_35px_rgba(245,158,11,0.4)] transition-all duration-300 cursor-pointer relative overflow-hidden"
                      >
                        <span className="flex items-center gap-2 font-black">
                          <ArrowRight className="w-4 h-4" />
                          CONTINUE TO PORTFOLIO
                        </span>

                        <div className="flex items-center gap-2 pl-3 border-l border-slate-950/20">
                          <div className="relative w-6 h-6 shrink-0">
                            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                              <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(3,7,18,0.2)" strokeWidth="3" />
                              <circle
                                cx="18" cy="18" r="14" fill="none"
                                stroke="#030712" strokeWidth="3" strokeLinecap="round"
                                strokeDasharray={`${(2 * Math.PI * 14) * (seconds / TOTAL_SECONDS)} ${2 * Math.PI * 14}`}
                                style={{ transition: 'stroke-dasharray 1s linear' }}
                              />
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-mono font-bold text-slate-950">
                              {seconds}
                            </span>
                          </div>
                          <span className="text-[11px] font-mono font-bold text-slate-950">auto-close</span>
                        </div>
                      </button>
                    </div>

                  </motion.div>
                </AnimatePresence>

              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Hook: handles auto-show per session ─── */
export function useHackathonWinnerModal(preloaderDone) {
  const [isOpen, setIsOpen] = useState(false);
  const fired = useRef(false);

  useEffect(() => {
    if (!preloaderDone || fired.current) return;
    if (sessionStorage.getItem('hwModal_shown')) return;
    fired.current = true;
    setIsOpen(true);
    sessionStorage.setItem('hwModal_shown', '1');
  }, [preloaderDone]);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return { isOpen, close };
}
