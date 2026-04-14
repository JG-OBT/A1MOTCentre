import { motion } from 'motion/react';
import { ShieldCheck, Clock, ThumbsUp, MapPin } from 'lucide-react';

export default function TrustSignals() {
  const signals = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-accent" />,
      title: "No Repair Bias",
      description: "We don't do repairs, so we have no incentive to fail your car. We want you to pass."
    },
    {
      icon: <Clock className="w-8 h-8 text-accent" />,
      title: "45 Min Turnaround",
      description: "Quick, professional testing while you wait in our comfortable viewing lounge."
    },
    {
      icon: <ThumbsUp className="w-8 h-8 text-accent" />,
      title: "Free Retests",
      description: "If your vehicle fails elsewhere, we offer free retests within 10 working days."
    },
    {
      icon: <MapPin className="w-8 h-8 text-accent" />,
      title: "Trusted Locally",
      description: "Serving Taunton drivers on Railway Street for over 15 years with honest testing."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {signals.map((signal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 border-l-4 border-accent bg-bg rounded-r-lg shadow-sm"
            >
              <div className="mb-4">{signal.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-dark uppercase tracking-tight">{signal.title}</h3>
              <p className="text-gray text-sm leading-relaxed">{signal.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
