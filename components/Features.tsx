import React from 'react';
import { Section } from './ui/Section';
import { Card } from './ui/Card';
import { Activity, BookOpen, Users } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <Section 
      id="program"
      title="What KMDSM Is"
      description="A complete pathway designed to help your office move from 'interested' to 'operational' — while documenting CE completion cleanly."
    >
      <div className="grid md:grid-cols-3 gap-5">
        <Card>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-sky-200 mb-4">
            <Activity size={14} />
            Clinical Workflow
          </div>
          <h3 className="text-lg font-bold mb-3">Standards-based execution</h3>
          <p className="text-sm text-muted mb-4">We teach a step-by-step workflow from screening → collaboration → delivery → follow-up.</p>
          <ul className="text-sm text-muted space-y-2 list-disc pl-4">
            <li>Patient intake & risk screening</li>
            <li>Referral + collaboration protocol</li>
            <li>Delivery/adjustment schedules</li>
          </ul>
        </Card>

        <Card>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-violet-200 mb-4">
            <BookOpen size={14} />
            CE Credits
          </div>
          <h3 className="text-lg font-bold mb-3">CE hours structured for scale</h3>
          <p className="text-sm text-muted mb-4">Choose a 50 CE or 100 CE pathway with transcripts, certificates, and tracking.</p>
          <ul className="text-sm text-muted space-y-2 list-disc pl-4">
            <li>On-demand modules + live intensives</li>
            <li>Attendance tracking + certificates</li>
            <li>Ready-to-file CE transcript packet</li>
          </ul>
        </Card>

        <Card>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-emerald-200 mb-4">
            <Users size={14} />
            Business Systems
          </div>
          <h3 className="text-lg font-bold mb-3">Implementation that creates ROI</h3>
          <p className="text-sm text-muted mb-4">We install real systems: roles, scripts, SOPs, follow-up cadence, and launch metrics.</p>
          <ul className="text-sm text-muted space-y-2 list-disc pl-4">
            <li>Team training (front desk, hygiene)</li>
            <li>Case acceptance scripting</li>
            <li>90-day launch plan + KPI dashboard</li>
          </ul>
        </Card>
      </div>
    </Section>
  );
};