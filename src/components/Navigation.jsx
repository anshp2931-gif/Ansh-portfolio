import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';

const navItems = [
    { label: 'Home',         href: '/' },
    { label: 'About',        href: '/about' },
    { label: 'Education',    href: '/education' },
    { label: 'Skills',       href: '/skills' },
    { label: 'Projects',     href: '/projects' },
    { label: 'Hackathons',   href: '/hackathons' },
    { label: 'Certificates', href: '/certificates' },
    { label: 'Contact',      href: '/contact' },
];

const Logo = memo(() => (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ willChange: 'transform' }}>
        <Link to="/" aria-label="Home" className="flex items-center gap-3">
            {/* Glowing ring + logo image */}
            <div className="relative w-10 h-10 shrink-0">
                {/* Outer animated glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-plasma to-magenta opacity-30 blur-[6px] animate-pulse pointer-events-none" />
                {/* Clean circle container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border border-plasma/40 shadow-[0_0_12px_rgba(34,211,238,0.2)]">
                    <img 
                        src={logoImg} 
                        alt="Ansh Patel Logo" 
                        loading="Lazy"
                        className="w-full h-full object-cover bg-void"
                    />
                </div>
            </div>
            {/* Name text */}
            <span className="hidden sm:block font-display font-bold text-lg tracking-tight text-white hover:text-plasma transition-colors duration-300">
                Ansh Patel
            </span>
        </Link>
    </motion.div>
));
Logo.displayName = 'Logo';

/* ── Nav link ─────────────────────────────────────────────── */
const NavLink = memo(({ label, href, active }) => (
    <Link
        to={href}
        className={`relative px-3.5 py-2 text-sm font-bold rounded-full transition-colors duration-300 ${
            active ? 'text-void' : 'text-slate-400 hover:text-white'
        }`}
    >
        {active && (
            <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 bg-gradient-to-r from-plasma to-arc rounded-full shadow-[0_0_18px_rgba(34,211,238,0.45)]"
                style={{ zIndex: -1 }}
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            />
        )}
        <span className="relative z-10">{label}</span>
    </Link>
));
NavLink.displayName = 'NavLink';

/* ── Navigation ───────────────────────────────────────────── */
const Navigation = () => {
    const [scrolled,   setScrolled]   = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handle = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', handle, { passive: true });
        return () => window.removeEventListener('scroll', handle);
    }, []);

    // eslint-disable-next-line react-hooks/set-state-in-effect
    useEffect(() => { setMobileOpen(false); }, [location.pathname]);

    return (
        <>
            {/* ── Desktop floating pill ──────────────────────────── */}
            <div className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8 pointer-events-none">
                <motion.nav
                    initial={{ y: -80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.1 }}
                    style={{ willChange: 'transform' }}
                    className="mx-auto max-w-7xl pointer-events-auto"
                >
                    {/* Gradient border wrapper */}
                    <div className={`relative rounded-full transition-all duration-500 ${
                        scrolled ? 'p-px bg-gradient-to-r from-plasma/40 via-magenta/20 to-arc/40 shadow-[0_16px_48px_rgba(0,0,0,0.55)]' : ''
                    }`}>
                        <div className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-3 transition-all duration-500 ${
                            scrolled ? 'bg-[#080c14]/85 backdrop-blur-2xl' : 'bg-transparent'
                        }`}>
                            <Logo />

                            {/* Desktop links */}
                            <div className="hidden lg:flex items-center gap-1">
                                {navItems.map(({ label, href }) => (
                                    <NavLink
                                        key={label}
                                        label={label}
                                        href={href}
                                        active={location.pathname === href}
                                    />
                                ))}
                            </div>

                            {/* Mobile hamburger */}
                            <div className="lg:hidden">
                                <motion.button
                                    onClick={() => setMobileOpen(o => !o)}
                                    whileTap={{ scale: 0.9 }}
                                    aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                                    className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-plasma/30 transition-all duration-300"
                                >
                                    <AnimatePresence mode="wait" initial={false}>
                                        {mobileOpen
                                            ? <motion.span key="x"    initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X    className="w-5 h-5 text-plasma" /></motion.span>
                                            : <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }}  animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><Menu className="w-5 h-5 text-plasma" /></motion.span>
                                        }
                                    </AnimatePresence>
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </motion.nav>
            </div>

            {/* ── Mobile dropdown ────────────────────────────────── */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -12, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -12, scale: 0.96 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="fixed top-24 left-4 right-4 lg:hidden z-40"
                    >
                        {/* Gradient border wrapper */}
                        <div className="p-px rounded-[2rem] bg-gradient-to-b from-plasma/30 via-magenta/10 to-transparent shadow-2xl">
                            <div className="bg-[#080c14]/90 backdrop-blur-2xl rounded-[calc(2rem-1px)] p-3 flex flex-col gap-1">
                                {navItems.map(({ label, href }) => {
                                    const active = location.pathname === href;
                                    return (
                                        <Link
                                            key={label}
                                            to={href}
                                            onClick={() => setMobileOpen(false)}
                                            className={`px-5 py-3.5 rounded-2xl text-center font-bold text-[15px] tracking-wide transition-all duration-200 ${
                                                active
                                                    ? 'bg-gradient-to-r from-plasma to-arc text-void shadow-[0_0_20px_rgba(34,211,238,0.3)]'
                                                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                                            }`}
                                        >
                                            {label}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navigation;
