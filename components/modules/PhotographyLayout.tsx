import React from 'react';
import { HeroSection } from './HeroSection';
import { BentoGrid } from './BentoGrid';
import { PricingTable } from './PricingTable';
import { TestimonialGrid } from './TestimonialGrid';
import { ContactForm } from './ContactForm';
import { Footer } from './Footer';

export const PhotographyLayout = (props: any) => {
  const { primary_color } = props;
  return (
    <div className="flex flex-col w-full">
      {props.hero && <HeroSection {...props.hero} primary_color={primary_color} />}
      {props.gallery && <BentoGrid {...props.gallery} primary_color={primary_color} />}
      {props.packages && <PricingTable {...props.packages} primary_color={primary_color} />}
      {props.reviews && <TestimonialGrid {...props.reviews} primary_color={primary_color} />}
      {props.booking && <ContactForm {...props.booking} primary_color={primary_color} />}
      {props.footer && <Footer {...props.footer} primary_color={primary_color} />}
    </div>
  );
};
