import React from 'react';
import { HeroSection } from './HeroSection';
import { StatsRow } from './StatsRow';
import { FeatureGrid } from './FeatureGrid';
import { FAQAccordion } from './FAQAccordion';
import { ContactForm } from './ContactForm';
import { Footer } from './Footer';

export const LawyerLayout = (props: any) => {
  const { primary_color } = props;
  return (
    <div className="flex flex-col w-full">
      {props.hero && <HeroSection {...props.hero} primary_color={primary_color} />}
      {props.stats && <StatsRow {...props.stats} primary_color={primary_color} />}
      {props.practices && <FeatureGrid {...props.practices} primary_color={primary_color} />}
      {props.faq && <FAQAccordion {...props.faq} primary_color={primary_color} />}
      {props.consultation && <ContactForm {...props.consultation} primary_color={primary_color} />}
      {props.footer && <Footer {...props.footer} primary_color={primary_color} />}
    </div>
  );
};
