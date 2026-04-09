import React from 'react';
import { HeroSection } from './HeroSection';
import { StatsRow } from './StatsRow';
import { FeatureGrid } from './FeatureGrid';
import { TestimonialGrid } from './TestimonialGrid';
import { ContactForm } from './ContactForm';
import { Footer } from './Footer';

export const RealEstateLayout = (props: any) => {
  const { primary_color } = props;
  return (
    <div className="flex flex-col w-full">
      {props.hero && <HeroSection {...props.hero} primary_color={primary_color} />}
      {props.market_stats && <StatsRow {...props.market_stats} primary_color={primary_color} />}
      {props.properties && <FeatureGrid {...props.properties} primary_color={primary_color} />}
      {props.testimonials && <TestimonialGrid {...props.testimonials} primary_color={primary_color} />}
      {props.contact && <ContactForm {...props.contact} primary_color={primary_color} />}
      {props.footer && <Footer {...props.footer} primary_color={primary_color} />}
    </div>
  );
};
