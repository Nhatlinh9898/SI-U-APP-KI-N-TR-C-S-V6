import React from 'react';
import { HeroSection } from './HeroSection';
import { StatsRow } from './StatsRow';
import { BentoGrid } from './BentoGrid';
import { FeatureGrid } from './FeatureGrid';
import { FAQAccordion } from './FAQAccordion';
import { ContactForm } from './ContactForm';
import { Footer } from './Footer';

export const ClinicLayout = (props: any) => {
  const { primary_color } = props;
  return (
    <div className="flex flex-col w-full">
      {props.hero && <HeroSection {...props.hero} primary_color={primary_color} />}
      {props.stats && <StatsRow {...props.stats} primary_color={primary_color} />}
      {props.services && <BentoGrid {...props.services} primary_color={primary_color} />}
      {props.doctors && <FeatureGrid {...props.doctors} primary_color={primary_color} />}
      {props.faq && <FAQAccordion {...props.faq} primary_color={primary_color} />}
      {props.appointment && <ContactForm {...props.appointment} primary_color={primary_color} />}
      {props.footer && <Footer {...props.footer} primary_color={primary_color} />}
    </div>
  );
};
