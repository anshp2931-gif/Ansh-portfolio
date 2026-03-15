import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Settings } from 'lucide-react';

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
                    className={`text-xl font-black tracking-tighter uppercase ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}
                    whileHover={{ scale: 1.05 }}
                >
                    A P
                </motion.a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <motion.a
                            key={item.label}
                            href={item.href}
                            className={`text-sm font-medium transition-colors ${theme === 'light' ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'}`}
                            whileHover={{ y: -1 }}
                        >
                            {item.label}
                        </motion.a>
                    ))}

                    {/* Theme Toggle Button */}
                    <motion.button
                        onClick={toggleTheme}
                        className={`p-2 rounded-full glass glass-hover border transition-colors ${theme === 'light' ? 'text-blue-600 border-gray-200' : 'text-yellow-400 border-white/10'}`}
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
