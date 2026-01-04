import React from 'react';
import { Section } from './ui/Section';
import { Card } from './ui/Card';
import { CalendarDays, GraduationCap, Rocket, Users2 } from 'lucide-react';
import { SeminarItem } from '../types';

const seminars: SeminarItem[] = [
  {
    tag: '2-Day Intensive',
    title: 'Open Loop Cricket (OLC) Intensive',
    description: 'Hands-on, case-forward training led by Dr. Tim with structured protocols.',
    points: ['Case selection frameworks', 'Records, delivery, troubleshooting', 'Integration with DSM workflow']
  },
  {
    tag: 'Exam Prep',
    title: 'Diplomate Readiness Review',
    description: 'Written-style review + scenario-based case drills designed to sharpen decision-making.',
    points: ['Category-based review plan', 'Mock oral-style scenarios', 'Readiness scorecard']
  },
  {
    tag: 'Implementation',
    title: 'DSM Practice Accelerator',
    description: 'Install the operational system: roles, scripts, SOPs, intake, and KPIs.',
    points: ['Front desk + hygiene training', 'Case acceptance scripting', '90-day launch plan']
  },
  {
    tag: 'Annual',
    title: 'KMDSM Summit',
    description: 'High-level event featuring clinical strategy, implementation wins, and partners.',
    points: ['Keynotes + advanced sessions', 'Case reviews + workshops', 'Partner ecosystem']
  }
];

export const Seminars: React.FC = () => {
  return (
    <>
      <Section 
        id="seminars" 
        title="Seminars & Intensives" 
        description="Live training is where execution gets installed. These events are built to produce competence, systems, and momentum."
      >
        <div className="grid md:grid-cols-2 gap-5">
          {seminars.map((item, idx) => (
            <Card key={idx}>
              <div className="inline-block px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-muted mb-3 font-medium">
                {item.tag}
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted mb-4">{item.description}</p>
              <ul className="text-sm text-muted/80 space-y-1 list-disc pl-4">
                {item.points.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="curriculum" title="Curriculum Overview">
         <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'DSM Core', items: ['SDB Fundamentals', 'Screening & Documentation', 'Testing Workflow', 'OAT Fundamentals'] },
              { title: 'OLC Track', items: ['OLC Rationale', 'Patient Selection', 'Records & Delivery', 'Troubleshooting'] },
              { title: 'Implementation', items: ['Team Roles', 'Consult Scripts', 'SOPs & Recall', 'KPI Dashboard'] }
            ].map((col, idx) => (
              <Card key={idx} className="bg-[#1a202e]/50">
                <h3 className="font-bold text-white mb-4 border-b border-white/5 pb-2">{col.title}</h3>
                <ul className="space-y-2">
                  {col.items.map((it, i) => (
                    <li key={i} className="text-sm text-muted flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500/50 mt-1.5 shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
         </div>
      </Section>
    </>
  );
};