import React from 'react';
import { HeroSection } from './HeroSection';
import { FeatureGrid } from './FeatureGrid';
import { PricingTable } from './PricingTable';
import { TestimonialGrid } from './TestimonialGrid';
import { ContactForm } from './ContactForm';
import { Footer } from './Footer';

export const SpaLayout = (props: any) => {
  const { primary_color } = props;
  return (
    <div className="flex flex-col w-full">
      {props.hero && <HeroSection {...props.hero} primary_color={primary_color} />}
      {props.services && <FeatureGrid {...props.services} primary_color={primary_color} />}
      {props.pricing && <PricingTable {...props.pricing} primary_color={primary_color} />}
      {props.reviews && <TestimonialGrid {...props.reviews} primary_color={primary_color} />}
      {props.booking && <ContactForm {...props.booking} primary_color={primary_color} />}
      {props.footer && <Footer {...props.footer} primary_color={primary_color} />}
    </div>
  );
};
