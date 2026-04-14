import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "What happens if my vehicle fails the MOT?",
      answer: "If your vehicle fails, we will provide a clear report of the reasons. Because we don't do repairs, you are free to take your vehicle to any garage for the necessary work. We offer a free retest within 10 working days."
    },
    {
      question: "How long does an MOT test take?",
      answer: "A standard MOT test takes approximately 45 minutes. You are welcome to wait in our comfortable viewing lounge or drop your vehicle off and collect it later."
    },
    {
      question: "Do I need to bring any documents?",
      answer: "Generally, no. We can access your vehicle's history via the DVSA database. However, if it's your vehicle's first MOT, bringing the V5C logbook can be helpful."
    },
    {
      question: "How far in advance can I book an MOT?",
      answer: "You can have your MOT carried out up to one month (minus a day) before it expires and keep the same renewal date for the following year."
    }
  ];

  return (
    <section className="py-24 bg-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-dark uppercase tracking-tighter mb-4">Frequently Asked Questions</h2>
          <p className="text-gray">Everything you need to know about your MOT test at A1 MOT Centre.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg border border-border overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex justify-between items-center text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-bold text-dark uppercase tracking-tight text-sm">{question}</span>
        {isOpen ? <Minus className="w-5 h-5 text-accent" /> : <Plus className="w-5 h-5 text-accent" />}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6 pt-0 text-gray text-sm leading-relaxed border-t border-border bg-slate-50/50">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
