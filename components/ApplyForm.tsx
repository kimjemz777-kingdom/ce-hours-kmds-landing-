import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { AlertCircle, CheckCircle } from 'lucide-react';

export const ApplyForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In a real app, you would POST to an endpoint here.
    // For now, we simulate success.
    setStatus('success');
  };

  return (
    <Section id="apply" title="Apply" description="This application helps us build your roadmap and send the exact scope + next steps.">
      <div className="grid md:grid-cols-[1fr_0.8fr] gap-8 items-start">
        
        <Card>
          {status === 'success' ? (
            <div className="py-12 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Application Received</h3>
              <p className="text-muted mb-6 max-w-sm">
                We've received your details. Check your email (including spam) for your custom roadmap and next steps within 1 business day.
              </p>
              <Button onClick={() => setStatus('idle')}>Submit Another</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-muted mb-2 uppercase tracking-wide">Full Name</label>
                  <input required type="text" className="w-full bg-[#0b0f14] border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all" placeholder="Dr. John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-muted mb-2 uppercase tracking-wide">Email</label>
                  <input required type="email" className="w-full bg-[#0b0f14] border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all" placeholder="doctor@clinic.com" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-muted mb-2 uppercase tracking-wide">Phone (Optional)</label>
                  <input type="tel" className="w-full bg-[#0b0f14] border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all" placeholder="(555) 123-4567" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-muted mb-2 uppercase tracking-wide">Role</label>
                  <select required className="w-full bg-[#0b0f14] border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all text-gray-300">
                    <option value="">Select role...</option>
                    <option>Dentist / Owner</option>
                    <option>Associate Dentist</option>
                    <option>Office Manager</option>
                    <option>DSO Executive</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-muted mb-2 uppercase tracking-wide">Interest</label>
                  <select required className="w-full bg-[#0b0f14] border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all text-gray-300">
                    <option value="">Select track...</option>
                    <option>50 CE Candidate-Ready</option>
                    <option>100 CE Mastery + Mentorship</option>
                    <option>OLC Weekend Intensive</option>
                    <option>Enterprise / DSO</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-muted mb-2 uppercase tracking-wide">Timeline</label>
                  <select required className="w-full bg-[#0b0f14] border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all text-gray-300">
                    <option value="">Select timeline...</option>
                    <option>Immediately (0-30 days)</option>
                    <option>1-3 Months</option>
                    <option>3-6 Months</option>
                    <option>Just browsing</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-muted mb-2 uppercase tracking-wide">Notes</label>
                <textarea className="w-full bg-[#0b0f14] border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all h-24 resize-none" placeholder="Current DSM experience, goals, questions..." />
              </div>

              <div className="pt-2">
                <Button 
                  variant="primary" 
                  className="w-full md:w-auto" 
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
                </Button>
                <p className="text-[10px] text-muted mt-3">
                  By submitting, you agree to be contacted by KMDSM. We do not sell data.
                </p>
              </div>
            </form>
          )}
        </Card>

        <div className="space-y-5">
          <Card className="bg-white/5 border-dashed">
            <h3 className="font-bold text-white mb-3">What happens next</h3>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex gap-2">
                <CheckCircle size={16} className="text-sky-400 mt-0.5" />
                We review your goals & timeline.
              </li>
              <li className="flex gap-2">
                <CheckCircle size={16} className="text-sky-400 mt-0.5" />
                We send your custom scope & pricing.
              </li>
              <li className="flex gap-2">
                <CheckCircle size={16} className="text-sky-400 mt-0.5" />
                Readiness checklist & next steps.
              </li>
            </ul>
          </Card>
          
          <div className="p-6 rounded-2xl border border-sky-500/20 bg-sky-500/5">
            <h3 className="font-bold text-white mb-2">Want to move faster?</h3>
            <p className="text-sm text-muted mb-4">Skip the email tag and book a strategy call directly.</p>
            <Button className="w-full" href="https://kingdommindsetcommunity.as.me/kmdsm" target="_blank">Book Strategy Call</Button>
            <div className="mt-4 text-xs text-muted text-center">
              Or email: <a href="mailto:openloop@kingdommindset.community" className="text-sky-400 hover:underline">openloop@kingdommindset.community</a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};