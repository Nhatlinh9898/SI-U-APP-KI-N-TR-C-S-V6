import React from 'react';
import { HeroSection } from './HeroSection';
import { BentoGrid } from './BentoGrid';
import { FeatureGrid } from './FeatureGrid';
import { TestimonialGrid } from './TestimonialGrid';
import { ContactForm } from './ContactForm';
import { Footer } from './Footer';

export const TravelLayout = (props: any) => {
  const { primary_color } = props;
  return (
    <div className="flex flex-col w-full">
      {props.hero && <HeroSection {...props.hero} primary_color={primary_color} />}
      {props.destinations && <BentoGrid {...props.destinations} primary_color={primary_color} />}
      {props.tours && <FeatureGrid {...props.tours} primary_color={primary_color} />}
      {props.reviews && <TestimonialGrid {...props.reviews} primary_color={primary_color} />}
      {props.booking && <ContactForm {...props.booking} primary_color={primary_color} />}
      {props.footer && <Footer {...props.footer} primary_color={primary_color} />}
    </div>
  );
};
