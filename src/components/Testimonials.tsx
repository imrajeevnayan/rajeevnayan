
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Priya Sharma",
        role: "Senior Developer at CodeForSuccess Pvt. Ltd.",
        content: "Rajeev is an exceptional developer who quickly adapted to our tech stack. His contributions to our backend services using Spring Boot were significant and highly reliable.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
    },
    {
        name: "Dr. Rajesh Kumar",
        role: "Healthcare Administrator",
        content: "The Hospital Management System Rajeev built simplified our operations immensely. The appointment scheduling and patient record security are top-notch.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80"
    },
    {
        name: "Amit Patel",
        role: "Tech Lead at StartUp Inc.",
        content: "Rajeev's work on the Real-Time Chat Application was impressive. He handled WebSocket complexities with ease, delivering a scalable and responsive solution.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                        Testimonials
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        What others say about working with me.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg relative border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
                        >
                            <Quote className="absolute top-8 right-8 text-blue-100 dark:text-blue-900/30 w-12 h-12" />

                            <div className="flex items-center space-x-4 mb-6 relative z-10">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-600 dark:border-blue-400"
                                />
                                <div>
                                    <h3 className="font-bold text-lg dark:text-white">{testimonial.name}</h3>
                                    <p className="text-sm text-blue-600 dark:text-blue-400">{testimonial.role}</p>
                                </div>
                            </div>

                            <p className="text-gray-600 dark:text-gray-300 italic relative z-10">
                                "{testimonial.content}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
