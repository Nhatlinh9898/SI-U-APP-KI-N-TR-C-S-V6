import React from 'react';
import { HeroSection } from './HeroSection';
import { StatsRow } from './StatsRow';
import { StepByStep } from './StepByStep';
import { BentoGrid } from './BentoGrid';
import { ContactForm } from './ContactForm';
import { Footer } from './Footer';

export const WeddingLayout = (props: any) => {
  const { primary_color } = props;
  return (
    <div className="flex flex-col w-full">
      {props.hero && <HeroSection {...props.hero} primary_color={primary_color} />}
      {props.countdown && <StatsRow {...props.countdown} primary_color={primary_color} />}
      {props.schedule && <StepByStep {...props.schedule} primary_color={primary_color} />}
      {props.gallery && <BentoGrid {...props.gallery} primary_color={primary_color} />}
      {props.rsvp && <ContactForm {...props.rsvp} primary_color={primary_color} />}
      {props.footer && <Footer {...props.footer} primary_color={primary_color} />}
    </div>
  );
};
