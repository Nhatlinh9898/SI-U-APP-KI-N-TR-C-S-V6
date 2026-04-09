import React from 'react';
import { HeroSection } from './HeroSection';
import { FeatureGrid } from './FeatureGrid';
import { StepByStep } from './StepByStep';
import { TestimonialGrid } from './TestimonialGrid';
import { FAQAccordion } from './FAQAccordion';
import { ContactForm } from './ContactForm';
import { Footer } from './Footer';

export const LocalServiceLayout = (props: any) => {
  const { primary_color } = props;
  return (
    <div className="flex flex-col w-full">
      {props.hero && <HeroSection {...props.hero} primary_color={primary_color} />}
      {props.services && <FeatureGrid {...props.services} primary_color={primary_color} />}
      {props.process && <StepByStep {...props.process} primary_color={primary_color} />}
      {props.reviews && <TestimonialGrid {...props.reviews} primary_color={primary_color} />}
      {props.faq && <FAQAccordion {...props.faq} primary_color={primary_color} />}
      {props.quote && <ContactForm {...props.quote} primary_color={primary_color} />}
      {props.footer && <Footer {...props.footer} primary_color={primary_color} />}
    </div>
  );
};
