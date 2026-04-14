import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-black text-dark uppercase tracking-tighter mb-8">Find Us in Taunton</h2>
            <p className="text-gray text-lg mb-10 leading-relaxed">
              Conveniently located on Railway Street, just a short walk from Taunton Train Station. Drop your car off and explore the town while you wait.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-border h-fit">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray mb-1">Our Address</h4>
                  <p className="text-dark font-bold text-lg">Railway Street, Taunton, TA2 6HF</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-border h-fit">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray mb-1">Call Us</h4>
                  <p className="text-dark font-bold text-lg">01823 335 337</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-border h-fit">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray mb-1">Opening Hours</h4>
                  <p className="text-dark font-bold text-lg">Mon-Fri: 08:30 - 17:30</p>
                  <p className="text-dark font-bold text-lg">Sat: 08:30 - 12:30</p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://share.google/ZkJAOI63aYc4BKEBY" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-12 inline-flex items-center gap-2 bg-dark text-white px-8 py-4 rounded-sm font-bold uppercase text-sm tracking-widest hover:bg-accent transition-colors group"
            >
              Get Directions
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
          
          <div className="relative h-[500px] lg:h-auto rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
            <iframe 
              src="https://maps.google.com/maps?q=A1%20MOT%20Centre%20Railway%20Street%20Taunton%20TA2%206HF&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="A1 MOT Centre Location"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
