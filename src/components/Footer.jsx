import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Leetcode = ({ className }) => (
    <svg
        role="img"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.956-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.381 1.381 0 0 0 1.38 1.382H20.79a1.381 1.381 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
    </svg>
);

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        { Icon: Github, href: 'https://github.com/anshp2931-gif', label: 'GitHub' },
        { Icon: Linkedin, href: 'https://www.linkedin.com/in/ansh-patel-059b1b399/', label: 'LinkedIn' },
        { Icon: Mail, href: 'mailto:anshp2931@gmail.com', label: 'Email' },
        { Icon: Leetcode, href: 'https://leetcode.com/u/anshp23/', label: 'Leetcode' },
        { Icon: Youtube, href: 'https://www.youtube.com/@anshpatel.23', label: 'YouTube' },
    ];

    return (
        <footer className="relative py-12 px-4 md:px-8 border-t border-white/10 light:border-slate-200">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 tb:grid-cols-3 gap-10 md:gap-8 mb-12">
                    {/* Brand */}
                    <div className="sm:col-span-2 tb:col-span-1">
                        <h3 className="text-3xl font-black text-gradient mb-3 uppercase italic tracking-tighter">Ansh Patel</h3>
                        <p className="text-secondary text-base max-w-md font-light">
                            Building the future of the web, one line of code at a time. Focused on high-performance, accessible, and beautiful digital experiences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col">
                        <h4 className="font-bold mb-5 text-primary uppercase tracking-widest text-sm text-arc">Quick Links</h4>
                        <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                            {[
                                { label: 'Home', href: '/' },
                                { label: 'About', href: '/about' },
                                { label: 'Skills', href: '/skills' },
                                { label: 'Projects', href: '/projects' },
                                { label: 'Education', href: '/education' },
                                { label: 'Contact', href: '/contact' },
                            ].map(({ label, href }) => (
                                <Link
                                    key={label}
                                    to={href}
                                    className="text-secondary hover:text-arc light:hover:text-indigo-600 transition-all text-sm font-medium hover:translate-x-1"
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Social */}
                    <div className="flex flex-col">
                        <h4 className="font-bold mb-5 text-primary uppercase tracking-widest text-sm text-arc">Connect</h4>
                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map(({ Icon, href, label }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    className="p-3.5 glass glass-hover rounded-2xl border border-white/5"
                                    whileHover={{ scale: 1.1, y: -2, backgroundColor: "rgba(99, 102, 241, 0.1)" }}
                                    whileTap={{ scale: 0.9 }}
                                    aria-label={label}
                                >
                                    <Icon className="w-5 h-5 text-arc light:text-indigo-600" />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Back to Top */}
                <div className="flex justify-center mb-6">
                    <motion.button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 px-5 py-2.5 glass glass-hover rounded-full text-sm text-arc light:text-indigo-600 font-medium cursor-pointer light:shadow-sm"
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
                        Back to Top
                    </motion.button>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-white/10 light:border-slate-200 text-center">
                    <p className="text-secondary text-sm flex items-center justify-center gap-2">
                        © {currentYear} Created by <span className="text-arc font-semibold">Ansh Patel</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
