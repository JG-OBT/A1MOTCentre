/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import TopBanner from './components/TopBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSignals from './components/TrustSignals';
import Services from './components/Services';
import Booking from './components/Booking';
import WhyChooseUs from './components/WhyChooseUs';
import Location from './components/Location';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBanner />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustSignals />
        <WhyChooseUs />
        <Services />
        <Booking />
        <Testimonials />
        <Location />
        <FAQ />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
