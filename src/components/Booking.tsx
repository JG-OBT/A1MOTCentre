import { motion } from 'motion/react';
import { Calendar, Clock, CheckCircle } from 'lucide-react';

export default function Booking() {
  return (
    <section id="booking" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-dark rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6 tracking-tighter">
              Book Your MOT <span className="text-accent">Online</span> & Save 10%
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Our real-time booking system allows you to pick a slot that fits your schedule. Instant confirmation via email.
            </p>
            
            <div className="space-y-6">
              {[
                "Real-time availability",
                "Instant email confirmation",
                "No payment required upfront",
                "10% discount applied automatically"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-white font-medium">
                  <CheckCircle className="w-6 h-6 text-accent" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-white p-8 lg:p-12">
            <div className="bg-bg p-8 rounded-xl border border-border">
              <h3 className="text-xl font-bold text-dark uppercase tracking-tight mb-8 text-center">Select Your Slot</h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray mb-2">Vehicle Class</label>
                    <select className="w-full bg-white border border-border p-3 rounded-sm text-sm focus:border-accent outline-none">
                      <option>Class IV (Cars)</option>
                      <option>Class V (Minibuses)</option>
                      <option>Class VII (Commercial)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray mb-2">Preferred Date</label>
                    <input type="date" className="w-full bg-white border border-border p-3 rounded-sm text-sm focus:border-accent outline-none" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray mb-2">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white border border-border p-3 rounded-sm text-sm focus:border-accent outline-none" />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray mb-2">Phone Number</label>
                    <input type="tel" placeholder="07123 456 789" className="w-full bg-white border border-border p-3 rounded-sm text-sm focus:border-accent outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray mb-2">Registration</label>
                    <input type="text" placeholder="AB12 CDE" className="w-full bg-white border border-border p-3 rounded-sm text-sm focus:border-accent outline-none uppercase" />
                  </div>
                </div>
                
                <button className="w-full bg-accent text-white py-4 rounded-sm font-bold uppercase text-sm tracking-widest btn-shadow hover:brightness-110 transition-all mt-4">
                  Confirm Booking
                </button>
                
                <p className="text-[10px] text-gray text-center uppercase tracking-widest mt-4">
                  By booking, you agree to our terms and conditions.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
