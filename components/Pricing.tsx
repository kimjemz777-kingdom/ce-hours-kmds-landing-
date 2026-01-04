import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { Check, Construction } from 'lucide-react';
import { PricingTier } from '../types';

const tiers: PricingTier[] = [
  {
    name: 'Candidate-Ready Foundation',
    badge: 'Core Track',
    description: 'Structure: 50 CE pathway + exam readiness framework. You build the study pace.',
    price: 'Custom Scope',
    subPrice: 'Build your study plan',
    features: [
      '50 CE hours via on-demand + live',
      'Exam category map + study plan',
      'Scenario practice (oral-style drills)',
      'CE transcript packet + certificates'
    ],
    cta: 'Inquire about Foundation',
    ctaLink: '#apply',
    disclaimer: 'Not affiliated with any board.',
    primary: true
  },
  {
    name: 'Mastery + Implementation',
    description: 'Structure: 100 CE + Operational Systems. You build the department.',
    price: 'Custom Scope',
    subPrice: 'Build your department',
    features: [
      '100 CE hours structured content',
      'Monthly case reviews + office hours',
      'Team training + SOPs + Scripts',
      'Readiness scorecard + evaluations'
    ],
    cta: 'Inquire about Mastery',
    ctaLink: '#apply',
    disclaimer: 'Outcomes depend on execution.'
  },
  {
    name: 'Enterprise / DSO',
    description: 'Structure: Scalable rollout for groups. We build the training infrastructure.',
    price: 'Custom Scope',
    subPrice: 'Build your network',
    features: [
      'Group onboarding + tracking',
      'Quarterly trainings + champions model',
      'Rollout playbook + KPI tracking',
      'Centralized CE management'
    ],
    cta: 'Book Enterprise Call',
    ctaLink: 'https://kingdommindsetcommunity.as.me/kmdsm',
    disclaimer: 'We scope seats & locations.'
  }
];

export const Pricing: React.FC = () => {
  return (
    <Section 
      id="tracks"
      title="Program Tracks"
      description="We provide adaptable frameworks. Choose the track you want to build upon. Scope is configured based on your team structure and training needs."
      action={<Button href="#apply">Get Your Custom Scope</Button>}
    >
      <div className="grid lg:grid-cols-3 gap-6">
        {tiers.map((tier, idx) => (
          <Card key={idx} className={`relative flex flex-col ${tier.primary ? 'border-sky-500/30 bg-sky-900/5' : ''}`}>
            {tier.badge && (
              <div className="absolute top-4 right-4 px-3 py-1 bg-sky-500/20 border border-sky-500/30 rounded-full text-xs font-bold text-sky-200 uppercase tracking-wider">
                {tier.badge}
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
              <p className="text-sm text-muted h-10 leading-snug">{tier.description}</p>
            </div>

            <div className="mb-6 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                <Construction className="text-sky-400 w-6 h-6" />
              </div>
              <div>
                <div className="text-xl font-bold text-white tracking-tight">{tier.price}</div>
                {tier.subPrice && <div className="text-xs text-muted">{tier.subPrice}</div>}
              </div>
            </div>

            <div className="h-px bg-white/10 mb-6" />

            <ul className="space-y-4 mb-8 flex-1">
              {tier.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className={`w-5 h-5 shrink-0 ${tier.primary ? 'text-sky-400' : 'text-emerald-400'}`} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <Button 
                variant={tier.primary ? 'primary' : 'secondary'} 
                className="w-full"
                href={tier.ctaLink}
              >
                {tier.cta}
              </Button>
              <p className="text-[11px] text-muted text-center mt-3">{tier.disclaimer}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};