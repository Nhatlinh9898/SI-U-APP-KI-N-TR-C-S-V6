import React from 'react';
import { HeroSection } from './HeroSection';
import { FeatureGrid } from './FeatureGrid';
import { StepByStep } from './StepByStep';
import { TestimonialGrid } from './TestimonialGrid';
import { ContactForm } from './ContactForm';
import { Footer } from './Footer';

export const PortfolioLayout = (props: any) => {
  const { primary_color } = props;
  return (
    <div className="flex flex-col w-full">
      {props.hero && <HeroSection {...props.hero} primary_color={primary_color} />}
      {props.features && <FeatureGrid {...props.features} primary_color={primary_color} />}
      {props.steps && <StepByStep {...props.steps} primary_color={primary_color} />}
      {props.testimonials && <TestimonialGrid {...props.testimonials} primary_color={primary_color} />}
      {props.contact && <ContactForm {...props.contact} primary_color={primary_color} />}
      {props.footer && <Footer {...props.footer} primary_color={primary_color} />}
    </div>
  );
};
