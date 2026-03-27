import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitted(true);

        setTimeout(() => setIsSubmitted(false), 5000);

        setFormData({
            name: "",
            email: "",
            message: "",
        });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const contactItem = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <section
            id="contact"
            className="min-h-screen py-24 px-6 flex items-center bg-section overflow-hidden"
        >
            <div className="max-w-6xl mx-auto w-full">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">
                        Let's Connect
                    </h2>

                    <p className="text-secondary text-lg max-w-2xl mx-auto">
                        Have a project in mind or want to discuss opportunities?
                        I'd love to hear from you.
                    </p>
                </motion.div>

                {/* Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* LEFT SIDE */}
                    <motion.div
                        initial={{ x: -200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
                        className="space-y-6"
                    >

                        {/* Contact Card */}
                        <motion.div
                            className="glass rounded-2xl p-8 border-white/5"
                            animate={{ y: [0, -8, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <h3 className="text-2xl font-bold mb-6 text-primary">
                                Get in Touch
                            </h3>

                            <motion.div
                                className="space-y-5"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.2,
                                        },
                                    },
                                }}
                            >

                                <motion.div
                                    variants={contactItem}
                                    className="flex items-center gap-4"
                                >
                                    <div className="p-3 bg-electric-cyan/10 light:bg-indigo-100 rounded-xl">
                                        <Mail className="w-5 h-5 text-electric-cyan light:text-indigo-600" />
                                    </div>

                                    <div>
                                        <p className="text-sm text-secondary">Email</p>
                                        <p className="font-medium text-primary">
                                            anshp2931@gmail.com
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    variants={contactItem}
                                    className="flex items-center gap-4"
                                >
                                    <div className="p-3 bg-electric-cyan/10 light:bg-indigo-100 rounded-xl">
                                        <MapPin className="w-5 h-5 text-electric-cyan light:text-indigo-600" />
                                    </div>

                                    <div>
                                        <p className="text-sm text-secondary">Location</p>
                                        <p className="font-medium text-primary">
                                            Gandhinagar, Gujarat
                                        </p>
                                    </div>
                                </motion.div>

                            </motion.div>
                        </motion.div>

                        {/* Availability Card */}
                        <motion.div
                            className="glass rounded-2xl p-8 border-white/5"
                            animate={{ y: [0, -6, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1,
                            }}
                        >
                            <h3 className="text-xl font-bold mb-4 text-primary">
                                Availability
                            </h3>

                            <p className="text-secondary">
                                Currently open to new opportunities and interesting projects.
                                Response time is typically within 24 hours.
                            </p>
                        </motion.div>

                    </motion.div>

                    {/* RIGHT SIDE FORM */}
                    <motion.div
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
                    >

                        <motion.form
                            onSubmit={handleSubmit}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="glass rounded-2xl p-8 space-y-6 border-white/5 shadow-xl"
                        >

                            {/* Name */}
                            <div>
                                <label className="block text-sm font-medium mb-2 text-primary">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your name"
                                    className="w-full px-4 py-3 bg-white/5 light:bg-slate-100/50 border border-white/10 light:border-slate-300 rounded-xl 
                  focus:outline-none focus:border-electric-cyan/50 light:focus:border-indigo-500/50
                  transition-all duration-300 focus:scale-[1.02] text-primary"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium mb-2 text-primary">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your.email@example.com"
                                    className="w-full px-4 py-3 bg-white/5 light:bg-slate-100/50 border border-white/10 light:border-slate-300 rounded-xl 
                  focus:outline-none focus:border-electric-cyan/50 light:focus:border-indigo-500/50
                  transition-all duration-300 focus:scale-[1.02] text-primary"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-medium mb-2 text-primary">
                                    Message
                                </label>

                                <textarea
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Tell me about your project..."
                                    className="w-full px-4 py-3 bg-white/5 light:bg-slate-100/50 border border-white/10 light:border-slate-300 rounded-xl resize-none
                  focus:outline-none focus:border-electric-cyan/50 light:focus:border-indigo-500/50
                  transition-all duration-300 focus:scale-[1.02] text-primary"
                                />
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                disabled={isSubmitted}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0px 0px 25px rgba(0,255,255,0.4)",
                                }}
                                whileTap={{ scale: 0.95 }}
                                animate={isSubmitted ? { scale: [1, 1.1, 1] } : {}}
                                transition={{ duration: 0.4 }}
                                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 ${isSubmitted
                                    ? "bg-green-500/20 text-green-500"
                                    : "bg-electric-cyan/10 light:bg-indigo-100 hover:bg-electric-cyan/20 light:hover:bg-indigo-200"
                                    }`}
                            >
                                {isSubmitted ? (
                                    "Message Sent!"
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </>
                                )}
                            </motion.button>

                        </motion.form>

                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;