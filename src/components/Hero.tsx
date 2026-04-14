import { motion } from 'motion/react';
import { ChevronRight, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-20 lg:py-32 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-7xl font-black text-dark leading-[1.1] mb-6 tracking-tighter">
                Fair, Impartial <span className="text-accent">MOT Testing</span> in Taunton
              </h1>
              <p className="text-xl text-gray mb-10 max-w-xl leading-relaxed">
                We only do MOTs. No repairs means no hidden agendas or incentive to fail your vehicle. Just an honest, professional 45-minute test.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#booking" 
                  className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-sm font-bold uppercase text-sm tracking-widest btn-shadow hover:brightness-110 transition-all group"
                >
                  Book Online - Save 10%
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:01823335337" 
                  className="inline-flex items-center justify-center gap-2 border-2 border-dark text-dark px-8 py-4 rounded-sm font-bold uppercase text-sm tracking-widest hover:bg-dark hover:text-white transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Call 01823 335 337
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
            >
              <div className="bg-white p-8 rounded-lg card-shadow border border-border">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-bold uppercase tracking-tight">Services & Pricing</h2>
                  <span className="bg-accent/10 text-accent text-[10px] font-black px-2 py-1 rounded uppercase">Online Discount Applied</span>
                </div>
                
                <div className="space-y-6">
                  {[
                    { label: "Class IV (Cars & Vans)", price: "£50.00" },
                    { label: "Class V (Minibuses)", price: "£50.00" },
                    { label: "Class VII (Commercial)", price: "£55.00" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center pb-4 border-b border-border last:border-0 last:pb-0">
                      <span className="font-semibold text-dark">{item.label}</span>
                      <span className="text-2xl font-black text-accent">{item.price}</span>
                    </div>
                  ))}
                </div>
                
                <p className="mt-8 text-xs text-gray italic leading-relaxed">
                  *Free retest within 10 working days if your vehicle fails. Impartial testing guaranteed.
                </p>
              </div>
              
              {/* Decorative Geometric Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/10 -z-10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-dark/5 -z-10 rounded-lg rotate-12"></div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-dark/5 -skew-x-12 transform translate-x-1/2 -z-10"></div>
    </section>
  );
}
