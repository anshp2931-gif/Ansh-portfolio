import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
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
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Certificates', href: '#certificates' },
        { label: 'Projects', href: '#projects' },
        { label: 'Education', href: '#education' },
        { label: 'Contact', href: '#contact' },
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
                <motion.a
                    href="#"
                    className="group relative flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div className={`relative w-10 h-10 rounded-full overflow-hidden border transition-all duration-300 flex items-center justify-center ${theme === 'light'
                        ? 'border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover:border-purple-600/50 group-hover:shadow-[0_0_20px_rgba(147,51,234,0.4)] bg-white/50'
                        : 'border-electric-cyan/30 shadow-[0_0_15px_rgba(0,255,255,0.2)] group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] bg-black/20'
                        }`}>
                        <svg viewBox="0 0 100 100" className="w-full h-full group-hover:scale-110 transition-transform duration-500">
                            <defs>
                                <linearGradient id="logo-gradient-dark" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#00FFFF" />
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
                </motion.a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <motion.a
                            key={item.label}
                            href={item.href}
                            className={`text-sm font-medium transition-colors ${theme === 'light' ? 'text-indigo-600 hover:text-violet-600' : 'text-gray-400 hover:text-white'}`}
                            whileHover={{ y: -1 }}
                        >
                            {item.label}
                        </motion.a>
                    ))}

                    {/* Theme Toggle Button */}
                    <motion.button
                        onClick={toggleTheme}
                        className={`p-2 rounded-full glass glass-hover border transition-colors ${theme === 'light' ? 'text-indigo-600 border-slate-200 shadow-sm' : 'text-yellow-400 border-white/10'}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {theme === 'dark' ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.243 17.657l.707.707M7.757 6.364l.707.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                        )}
                    </motion.button>
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                    className={`md:hidden p-2 glass rounded-full ${theme === 'light' ? 'border-gray-200 text-gray-900' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    whileTap={{ scale: 0.95 }}
                >
                    {isMobileMenuOpen ? (
                        <X className="w-5 h-5 text-electric-cyan" />
                    ) : (
                        <Menu className="w-5 h-5 text-electric-cyan" />
                    )}
                </motion.button>
            </motion.nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 10 }}
                    className={`md:hidden glass rounded-3xl p-6 space-y-4 pointer-events-auto max-w-sm mx-auto ${theme === 'light' ? 'bg-white shadow-xl border-gray-200' : ''}`}
                >
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className={`block transition-colors py-2 text-center ${theme === 'light' ? 'text-gray-600 hover:text-gray-900' : 'text-gray-300 hover:text-electric-cyan'}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                </motion.div>
            )}
        </div>
    );
};

export default Navigation;
