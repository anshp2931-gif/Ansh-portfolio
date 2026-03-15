import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { Icon: Github, href: 'https://github.com/anshp2931-gif', label: 'GitHub' },
        { Icon: Linkedin, href: 'https://www.linkedin.com/in/ansh-patel-059b1b399/', label: 'LinkedIn' },
        { Icon: Mail, href: 'mailto:anshp2931@gmail.com', label: 'Email' },
    ];

    return (
        <footer className="relative py-12 px-4 md:px-8 border-t border-white/10 light:border-slate-200">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold text-gradient mb-3">Ansh Patel</h3>
                        <p className="text-secondary text-sm">
                            Building the future of the web, one line of code at a time.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-3 text-primary">Quick Links</h4>
                        <div className="space-y-2">
                            {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((link) => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    className="block text-secondary hover:text-electric-cyan transition-colors text-sm"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-semibold mb-3 text-primary">Connect</h4>
                        <div className="flex gap-4">
                            {socialLinks.map(({ Icon, href, label }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    className="p-3 glass glass-hover rounded-full"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    aria-label={label}
                                >
                                    <Icon className="w-5 h-5 text-electric-cyan" />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-white/10 light:border-slate-200 text-center">
                    <p className="text-secondary text-sm flex items-center justify-center gap-2">
                        © {currentYear} Created by <span className="text-electric-cyan font-semibold">Ansh Patel</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
