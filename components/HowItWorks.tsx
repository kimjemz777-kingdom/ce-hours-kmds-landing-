import React from 'react';
import { Section } from './ui/Section';

export const HowItWorks: React.FC = () => {
  return (
    <Section title="How it works">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { step: '1', title: 'Apply', desc: 'Tell us your goal: CE hours, readiness, or enterprise.' },
          { step: '2', title: 'Get Placed', desc: 'We place you into the 50 CE, 100 CE, or enterprise track.' },
          { step: '3', title: 'Track', desc: 'Modules + live training with clean completion tracking.' },
          { step: '4', title: 'Execute', desc: 'Install workflows so your practice runs DSM consistently.' },
        ].map((s, i) => (
          <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-500/20 transition-colors">
            <span className="text-xs font-bold text-sky-400 mb-2 block">STEP {s.step}</span>
            <h4 className="font-bold text-white mb-2">{s.title}</h4>
            <p className="text-xs text-muted leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};