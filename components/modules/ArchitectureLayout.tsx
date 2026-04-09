import React from 'react';
import { HeroSection } from './HeroSection';
import { BentoGrid } from './BentoGrid';
import { StatsRow } from './StatsRow';
import { StepByStep } from './StepByStep';
import { ContactForm } from './ContactForm';
import { Footer } from './Footer';

export const ArchitectureLayout = (props: any) => {
  const { primary_color } = props;
  return (
    <div className="flex flex-col w-full">
      {props.hero && <HeroSection {...props.hero} primary_color={primary_color} />}
      {props.portfolio && <BentoGrid {...props.portfolio} primary_color={primary_color} />}
      {props.stats && <StatsRow {...props.stats} primary_color={primary_color} />}
      {props.process && <StepByStep {...props.process} primary_color={primary_color} />}
      {props.contact && <ContactForm {...props.contact} primary_color={primary_color} />}
      {props.footer && <Footer {...props.footer} primary_color={primary_color} />}
    </div>
  );
};
