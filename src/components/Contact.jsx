import { motion } from "framer-motion";
import { Mail, MapPin, Send, AlertCircle, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { seoConfig } from "../config/seoConfig";
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setIsSubmitting(true);

        try {
            // Send email using Formspree
            // Your Form ID from formspree.io
            const FORM_ID = "xgoprdje";
            
            const response = await fetch(`https://formspree.io/f/${FORM_ID}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }),
            });

            if (response.ok) {
                setIsSubmitted(true);
                setIsSubmitting(false);

                // Reset form after 3 seconds
                setTimeout(() => {
                    setIsSubmitted(false);
                    setFormData({
                        name: "",
                        email: "",
                        message: "",
                    });
                }, 3000);
            } else {
                throw new Error("Failed to send - please check form configuration");
            }
        } catch (err) {
            console.error("Email send error:", err);
            setError(
                "Failed to send message. Please check setup instructions or contact directly at anshp2931@gmail.com"
            );
            setIsSubmitting(false);
        }
    };

    const contactItem = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <section
            id="contact"
            className="min-h-screen py-24 px-4 xs:px-6 flex items-center bg-section overflow-hidden"
        >
            <Helmet>
                <title>{seoConfig.contact.title}</title>
                <meta name="description" content={seoConfig.contact.description} />
            </Helmet>
            <div className="max-w-6xl mx-auto w-full">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-black mb-4 text-gradient italic tracking-tighter uppercase">
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
                        <div
                            className="glass rounded-2xl p-6 xs:p-8 border-white/5"
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
                                    <div className="p-3 bg-amber-500/10 light:bg-amber-100 rounded-xl">
                                        <Mail className="w-5 h-5 text-amber-500 light:text-amber-600" />
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
                                    <div className="p-3 bg-amber-500/10 light:bg-amber-100 rounded-xl">
                                        <MapPin className="w-5 h-5 text-amber-500 light:text-amber-600" />
                                    </div>

                                    <div>
                                        <p className="text-sm text-secondary">Location</p>
                                        <p className="font-medium text-primary">
                                            Gandhinagar, Gujarat
                                        </p>
                                    </div>
                                </motion.div>

                            </motion.div>
                        </div>

                        {/* Availability Card */}
                        <div
                            className="glass rounded-2xl p-6 xs:p-8 border-white/5"
                        >
                            <h3 className="text-xl font-bold mb-4 text-primary">
                                Availability
                            </h3>

                            <p className="text-secondary">
                                Currently open to new opportunities and interesting projects.
                                Response time is typically within 24 hours.
                            </p>
                        </div>

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
                            className="glass rounded-2xl p-6 xs:p-8 space-y-6 border-white/5 shadow-xl"
                        >

                            {/* Error Message */}
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-red-500/20 border border-red-500/30 rounded-xl flex items-start gap-3"
                                >
                                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                    <p className="text-sm text-red-200">{error}</p>
                                </motion.div>
                            )}

                            {/* Success Message */}
                            {isSubmitted && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-green-500/20 border border-green-500/30 rounded-xl flex items-start gap-3"
                                >
                                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <div className="text-sm text-green-200">
                                        <p className="font-semibold">Message Sent Successfully!</p>
                                        <p className="mt-1">Thank you for reaching out. I'll get back to you soon.</p>
                                    </div>
                                </motion.div>
                            )}

                            {/* Name */}
                            <div>
                                <label htmlFor="contact-name" className="block text-sm font-medium mb-2 text-primary">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    id="contact-name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting || isSubmitted}
                                    placeholder="Your name"
                                    className="w-full px-4 py-3 bg-white/5 light:bg-slate-100/50 border border-white/10 light:border-slate-300 rounded-xl 
                  focus:outline-none focus:border-amber-500/50 light:focus:border-amber-500/50
                  transition-all duration-300 focus:scale-[1.02] text-primary disabled:opacity-50 disabled:cursor-not-allowed"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="contact-email" className="block text-sm font-medium mb-2 text-primary">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    id="contact-email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting || isSubmitted}
                                    placeholder="your.email@example.com"
                                    className="w-full px-4 py-3 bg-white/5 light:bg-slate-100/50 border border-white/10 light:border-slate-300 rounded-xl 
                  focus:outline-none focus:border-amber-500/50 light:focus:border-amber-500/50
                  transition-all duration-300 focus:scale-[1.02] text-primary disabled:opacity-50 disabled:cursor-not-allowed"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="contact-message" className="block text-sm font-medium mb-2 text-primary">
                                    Message
                                </label>

                                <textarea
                                    id="contact-message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting || isSubmitted}
                                    placeholder="Tell me about your project..."
                                    className="w-full px-4 py-3 bg-white/5 light:bg-slate-100/50 border border-white/10 light:border-slate-300 rounded-xl resize-none
                  focus:outline-none focus:border-amber-500/50 light:focus:border-amber-500/50
                  transition-all duration-300 focus:scale-[1.02] text-primary disabled:opacity-50 disabled:cursor-not-allowed"
                                />
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                disabled={isSubmitting || isSubmitted}
                                whileHover={!isSubmitting ? {
                                    scale: 1.05,
                                    boxShadow: "0px 0px 25px rgba(245,158,11,0.4)",
                                } : {}}
                                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                                animate={isSubmitted ? { scale: [1, 1.1, 1] } : isSubmitting ? { scale: 1.02 } : {}}
                                transition={{ duration: 0.4 }}
                                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${isSubmitted
                                    ? "bg-green-500/20 text-green-500"
                                    : "bg-amber-500/10 light:bg-amber-100 hover:bg-amber-500/20 light:hover:bg-amber-200 text-amber-500 light:text-amber-600"
                                    }`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            className="w-5 h-5 border-2 border-transparent border-t-current rounded-full"
                                        />
                                        Sending...
                                    </>
                                ) : isSubmitted ? (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Message Sent!
                                    </>
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