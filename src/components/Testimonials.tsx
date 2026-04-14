import { motion } from 'motion/react';
import { Star, Quote, StarHalf } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Mark Thompson",
      role: "Local Resident",
      content: "I've been coming to A1 for years. The fact they don't do repairs gives me total peace of mind that they aren't just looking for work. Fast, friendly, and fair.",
      stars: 5
    },
    {
      name: "Sarah Jenkins",
      role: "Business Owner",
      content: "Excellent service for our fleet of vans. They always manage to fit us in and the online booking system is so easy to use. Highly recommended for any Taunton driver.",
      stars: 5
    },
    {
      name: "David Wilson",
      role: "Commuter",
      content: "Dropped my car off before work, caught the train from Taunton station, and picked it up on my way home. The most convenient MOT I've ever had.",
      stars: 5
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-dark uppercase tracking-tighter mb-4">What Our Customers Say</h2>
          <div className="flex justify-center gap-1">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-accent text-accent" />
            ))}
            <StarHalf className="w-6 h-6 fill-accent text-accent" />
          </div>
          <p className="mt-4 text-gray font-bold uppercase tracking-widest text-sm">4.7/5 Based on 175+ Google Reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-bg p-10 rounded-2xl relative border border-border"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-accent/10" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.stars)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-dark text-lg italic mb-8 leading-relaxed">"{review.content}"</p>
              
              <div>
                <p className="font-black text-dark uppercase tracking-tight">{review.name}</p>
                <p className="text-xs font-bold text-accent uppercase tracking-widest">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://share.google/ZkJAOI63aYc4BKEBY" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-black uppercase tracking-[0.2em] text-dark border-b-2 border-accent pb-1 hover:text-accent transition-colors"
          >
            View All Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
