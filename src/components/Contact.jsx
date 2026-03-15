import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="contact" className="min-h-screen py-20 px-4 md:px-8 relative flex items-center bg-section transition-colors duration-300">
            <div className="max-w-5xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 100 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">Let's Connect</h2>
                    <p className="text-secondary text-lg max-w-2xl mx-auto">
                        Have a project in mind or want to discuss opportunities? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', stiffness: 100 }}
                        className="space-y-6"
                    >
                        <div className="glass rounded-2xl p-8 border-white/5 light:border-slate-200">
                            <h3 className="text-2xl font-bold mb-6 text-primary">Get in Touch</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-electric-cyan/10 rounded-xl">
                                        <Mail className="w-5 h-5 text-electric-cyan" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-secondary">Email</p>
                                        <p className="font-medium text-primary">anshp2931@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-electric-cyan/10 rounded-xl">
                                        <MapPin className="w-5 h-5 text-electric-cyan" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-secondary">Location</p>
                                        <p className="font-medium text-primary">Gandhinagar, Gujarat</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="glass rounded-2xl p-8 border-white/5 light:border-slate-200">
                            <h3 className="text-xl font-bold mb-4 text-primary">Availability</h3>
                            <p className="text-secondary leading-relaxed">
                                Currently open to new opportunities and interesting projects.
                                Response time is typically within 24 hours.
                            </p>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', stiffness: 100 }}
                    >
                        <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6 border-white/5 light:border-slate-200 shadow-xl light:shadow-slate-200/50">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-primary">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/5 light:bg-slate-50 border border-white/10 light:border-slate-200 rounded-xl focus:outline-none focus:border-electric-cyan/50 transition-colors text-primary"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2 text-primary">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/5 light:bg-slate-50 border border-white/10 light:border-slate-200 rounded-xl focus:outline-none focus:border-electric-cyan/50 transition-colors text-primary"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-primary">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 bg-white/5 light:bg-slate-50 border border-white/10 light:border-slate-200 rounded-xl focus:outline-none focus:border-electric-cyan/50 transition-colors resize-none text-primary"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                className="w-full px-6 py-4 bg-electric-cyan/10 hover:bg-electric-cyan/20 rounded-xl font-bold border border-electric-cyan/30 flex items-center justify-center gap-2 transition-all text-primary"
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Send className="w-5 h-5" />
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
