import { motion } from 'motion/react';
import { Car, Bus, Truck, CheckCircle2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Class IV MOT",
      subtitle: "Cars, Small Vans & Minibuses",
      price: "£50.00",
      icon: <Car className="w-10 h-10" />,
      features: ["Up to 8 passenger seats", "Standard cars & taxis", "Small goods vehicles", "Private ambulances"]
    },
    {
      title: "Class V MOT",
      subtitle: "Private Passenger Vehicles",
      price: "£50.00",
      icon: <Bus className="w-10 h-10" />,
      features: ["13–16 passenger seats", "16+ passenger seats", "Playbuses", "Large private vehicles"]
    },
    {
      title: "Class VII MOT",
      subtitle: "Commercial Goods Vehicles",
      price: "£55.00",
      icon: <Truck className="w-10 h-10" />,
      features: ["Up to 3,500kg DGW", "Large commercial vans", "Delivery vehicles", "Heavy duty testing"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-dark uppercase tracking-tighter mb-4">Our Testing Services</h2>
          <p className="text-gray max-w-2xl mx-auto">
            Specialized MOT testing for all vehicle classes. We use the latest diagnostic equipment to ensure your vehicle meets safety standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-8 card-shadow border border-border relative overflow-hidden group hover:border-accent transition-colors"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-black text-dark mb-1">{service.title}</h3>
              <p className="text-accent text-sm font-bold uppercase tracking-widest mb-6">{service.subtitle}</p>
              
              <div className="text-4xl font-black text-dark mb-8">
                {service.price}
                <span className="text-sm font-normal text-gray ml-2">inc. VAT</span>
              </div>

              <ul className="space-y-4 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href="#booking" 
                className="block w-full text-center bg-dark text-white py-4 rounded-sm font-bold uppercase text-xs tracking-widest hover:bg-accent transition-colors"
              >
                Book This Class
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
