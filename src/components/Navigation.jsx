import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import userLogo from '../assets/logo.png';

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (theme === 'light') {
            document.documentElement.classList.add('light');
        } else {
            document.documentElement.classList.remove('light');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Education', href: '/education' },
        { label: 'Skills', href: '/skills' },
        { label: 'Projects', href: '/projects' },
        { label: 'GitHub', href: '/github' },
        { label: 'Hackathons', href: '/hackathons' },
        { label: 'Certificates', href: '/certificates' },
        { label: 'Contact', href: '/contact' },
    ];

    return (
        <div className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8 pointer-events-none">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                className={`max-w-5xl mx-auto glass rounded-full px-6 py-3 flex items-center justify-between pointer-events-auto transition-all duration-300 ${isScrolled ? 'bg-midnight/80 border-white/20 dark:bg-midnight/80' : ''
                    } ${theme === 'light' ? 'bg-white/80 border-gray-200 shadow-lg' : ''}`}
            >
                {/* Logo */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        to="/"
                        aria-label="Home — Ansh Patel Portfolio"
                        className="group relative flex items-center justify-center gap-3"
                    >
                    <div className={`relative w-10 h-10 rounded-full overflow-hidden border transition-all duration-300 flex items-center justify-center ${theme === 'light'
                        ? 'border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover:border-purple-600/50 group-hover:shadow-[0_0_20px_rgba(147,51,234,0.4)] bg-white/50'
                        : 'border-electric-cyan/30 shadow-[0_0_15px_rgba(0,255,255,0.2)] group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] bg-black/20'
                        }`}>
                        <svg viewBox="0 0 100 100" className="w-full h-full group-hover:scale-110 transition-transform duration-500">
                            <defs>
                                <linearGradient id="logo-gradient-dark" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#818cf8" />
                                    <stop offset="100%" stopColor="#A855F7" />
                                </linearGradient>
                                <linearGradient id="logo-gradient-light" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#4F46E5" />
                                    <stop offset="100%" stopColor="#7C3AED" />
                                </linearGradient>
                            </defs>
                            <text
                                x="50"
                                y="72"
                                fontSize="62"
                                fontWeight="900"
                                fontFamily="'Inter', system-ui, sans-serif"
                                letterSpacing="-3px"
                                fill={`url(#logo-gradient-${theme === 'light' ? 'light' : 'dark'})`}
                                textAnchor="middle"
                            >
                                AP
                            </text>
                        </svg>
                        <div className={`absolute inset-0 bg-gradient-to-tr mix-blend-overlay ${theme === 'light' ? 'from-indigo-500/10 to-violet-600/10' : 'from-electric-cyan/10 to-purple-500/10'}`}></div>
                    </div>

                    <span className={`text-xl font-bold hidden sm:block ${theme === 'light' ? 'text-gradient' : 'text-white'}`}>
                        Ansh Patel
                    </span>
                    </Link>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    {navItems.map((item) => (
                        <motion.div key={item.label} whileHover={{ y: -1 }}>
                            <Link
                                to={item.href}
                                className={`text-sm font-medium transition-colors ${theme === 'light' ? 'text-indigo-600 hover:text-violet-600' : 'text-gray-400 hover:text-white'}`}
                            >
                                {item.label}
                            </Link>
                        </motion.div>
                    ))}

                    
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                    className={`md:hidden p-2 glass rounded-full ${theme === 'light' ? 'border-gray-200 text-gray-900' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    whileTap={{ scale: 0.95 }}
                    aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-nav-menu"
                >
                    {isMobileMenuOpen ? (
                        <X className="w-5 h-5 text-electric-cyan" aria-hidden="true" />
                    ) : (
                        <Menu className="w-5 h-5 text-electric-cyan" aria-hidden="true" />
                    )}
                </motion.button>
            </motion.nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    id="mobile-nav-menu"
                    role="navigation"
                    aria-label="Mobile navigation"
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 10, scale: 1 }}
                    className={`md:hidden glass rounded-[2.5rem] p-8 space-y-2 pointer-events-auto max-w-[calc(100vw-2rem)] sm:max-w-sm mx-auto shadow-2xl ${theme === 'light' ? 'bg-white/90 border-gray-200' : 'bg-midnight/90'}`}
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            to={item.href}
                            className={`block transition-all py-3 px-4 rounded-2xl text-center font-bold tracking-tight ${theme === 'light' 
                                ? 'text-indigo-600 hover:bg-indigo-50 active:scale-95' 
                                : 'text-gray-300 hover:text-electric-cyan hover:bg-white/5 active:scale-95'}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}

                   
                </motion.div>
            )}
        </div>
    );
};

export default Navigation;
