import { motion } from 'motion/react';
import { Shield, Heart, Zap, Award } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Shield className="w-12 h-12 text-accent" />,
      title: "No Upselling",
      description: "We don't do repairs, so we'll never try to sell you parts or services you don't need."
    },
    {
      icon: <Heart className="w-12 h-12 text-accent" />,
      title: "Honest Testing",
      description: "Our reputation is built on fairness. We want your car to pass as much as you do."
    },
    {
      icon: <Zap className="w-12 h-12 text-accent" />,
      title: "Quick Turnaround",
      description: "Most tests are completed within 45 minutes. Relax in our lounge while you wait."
    },
    {
      icon: <Award className="w-12 h-12 text-accent" />,
      title: "Local Experts",
      description: "Independent and family-run. We've been serving the Taunton community for over 15 years."
    }
  ];

  return (
    <section className="py-24 bg-dark text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-6xl font-black leading-tight tracking-tighter mb-8">
              The Gold Standard of <span className="text-accent">Impartial</span> Testing
            </h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Most garages use the MOT as a way to find repair work. We're different. Because we don't carry out repairs, we have no incentive to fail your vehicle. This ensures a completely fair and unbiased test every single time.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-black text-accent mb-2">15+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Years in Taunton</div>
              </div>
              <div>
                <div className="text-4xl font-black text-accent mb-2">100%</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Impartiality</div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-lg hover:bg-white/10 transition-colors"
              >
                <div className="mb-6">{reason.icon}</div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">{reason.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
    </section>
  );
}
