import React from 'react';
import { HeroSection } from './HeroSection';
import { FeatureGrid } from './FeatureGrid';
import { BentoGrid } from './BentoGrid';
import { PricingTable } from './PricingTable';
import { ContactForm } from './ContactForm';
import { Footer } from './Footer';

export const CoworkingLayout = (props: any) => {
  const { primary_color } = props;
  return (
    <div className="flex flex-col w-full">
      {props.hero && <HeroSection {...props.hero} primary_color={primary_color} />}
      {props.amenities && <FeatureGrid {...props.amenities} primary_color={primary_color} />}
      {props.gallery && <BentoGrid {...props.gallery} primary_color={primary_color} />}
      {props.plans && <PricingTable {...props.plans} primary_color={primary_color} />}
      {props.tour && <ContactForm {...props.tour} primary_color={primary_color} />}
      {props.footer && <Footer {...props.footer} primary_color={primary_color} />}
    </div>
  );
};
