import React, { useState } from 'react';
import { Section } from './ui/Section';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Does the 50 CE track guarantee I will pass an exam?",
    a: "No. We provide CE, structured readiness preparation, and scenario practice. Outcomes depend on the candidate and the credentialing body’s requirements."
  },
  {
    q: "Are you affiliated with ASBA/ABSB?",
    a: "No. KMDSM is an independent education and implementation program. We are not affiliated, endorsed, or sponsored by any association or board."
  },
  {
    q: "Do you provide medical diagnosis?",
    a: "No. Medical diagnosis is performed by licensed medical professionals. Your clinical workflow should include appropriate collaboration and referrals."
  },
  {
    q: "How do CE hours get tracked?",
    a: "Completion tracking is handled through module completion + attendance verification for live components. You receive certificates and a transcript-style summary."
  },
  {
    q: "Can my whole team join?",
    a: "Yes. We strongly recommend team inclusion because execution breaks down when only the doctor is trained. Office bundles are available."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faq" title="FAQ" description="Common questions about the program.">
      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <button 
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span className="font-semibold text-sm md:text-base text-gray-200">{faq.q}</span>
              <ChevronDown className={`w-5 h-5 text-muted transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`} />
            </button>
            <div 
              className={`px-6 text-sm text-muted leading-relaxed overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-40 py-4 border-t border-white/5' : 'max-h-0'}`}
            >
              {faq.a}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};