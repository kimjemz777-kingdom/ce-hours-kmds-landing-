import React from 'react';
import { CheckCircle2, FileCheck, Layers, PlayCircle, Trophy } from 'lucide-react';
import { Button } from './ui/Button';
import { Card } from './ui/Card';

export const Hero: React.FC = () => {
  return (
    <section className="pt-16 pb-8 md:pt-24 md:pb-12 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-[800px] h-[600px] bg-sky-500/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[500px] bg-violet-500/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-[1120px] mx-auto px-5 relative z-10">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          
          {/* Text Content */}
          <div className="pt-2">
            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-sky-100 mb-6 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.1)] animate-pulse" />
              <span className="font-medium">KMDSM + Dr. Tim — Systems, not just CE</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.1] tracking-tight mb-6">
              Get your CE hours, <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-violet-300">build a sleep department</span>, 
              <br className="hidden lg:block"/>
              and prepare for Diplomate candidacy.
            </h1>

            <p className="text-lg text-muted max-w-xl mb-8 leading-relaxed">
              A CE-driven training + implementation program built to help dental teams execute dental sleep medicine confidently, document properly, and move through a structured "candidate-ready" pathway.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button variant="primary" size="lg" href="#tracks">View Tracks</Button>
              <Button size="lg" href="#apply">Apply Now</Button>
            </div>

            <div className="flex flex-wrap gap-4 text-xs font-medium text-muted">
              <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/5 bg-white/5">
                <FileCheck className="w-4 h-4 text-sky-300" />
                Compliance-first CE
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/5 bg-white/5">
                <Layers className="w-4 h-4 text-violet-300" />
                Readiness Mapped
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/5 bg-white/5">
                <PlayCircle className="w-4 h-4 text-emerald-300" />
                On-demand + Live
              </div>
            </div>
          </div>

          {/* Side Card */}
          <Card className="relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-400" />
                Quick View: What you get
              </h3>
              <p className="text-sm text-muted mb-6">
                Choose a 50 CE or 100 CE pathway, plus optional intensives and mentorship to build a working DSM workflow.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { label: '50 CE', sub: 'Candidate-ready' },
                  { label: '100 CE', sub: 'Mastery option' },
                  { label: 'Live', sub: 'Scenario practice' },
                  { label: 'Systems', sub: 'Scripts & SOPs' },
                ].map((stat) => (
                  <div key={stat.label} className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <strong className="block text-lg font-semibold text-white">{stat.label}</strong>
                    <span className="text-xs text-muted">{stat.sub}</span>
                  </div>
                ))}
              </div>

              <div className="h-px bg-white/10 mb-4" />
              
              <p className="text-xs text-muted/80 leading-relaxed">
                <strong className="text-muted">Important:</strong> We do not guarantee exam outcomes or board status. We provide education and implementation support. Medical diagnosis/collaboration required.
              </p>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
};