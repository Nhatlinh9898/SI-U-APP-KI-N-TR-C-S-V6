import React from 'react';
import { HeroSection } from './HeroSection';
import { StatsRow } from './StatsRow';
import { BentoGrid } from './BentoGrid';
import { TestimonialGrid } from './TestimonialGrid';
import { PricingTable } from './PricingTable';
import { Footer } from './Footer';

export const BookLaunchLayout = (props: any) => {
  const { primary_color } = props;
  return (
    <div className="flex flex-col w-full">
      {props.hero && <HeroSection {...props.hero} primary_color={primary_color} />}
      {props.stats && <StatsRow {...props.stats} primary_color={primary_color} />}
      {props.chapters && <BentoGrid {...props.chapters} primary_color={primary_color} />}
      {props.reviews && <TestimonialGrid {...props.reviews} primary_color={primary_color} />}
      {props.pricing && <PricingTable {...props.pricing} primary_color={primary_color} />}
      {props.footer && <Footer {...props.footer} primary_color={primary_color} />}
    </div>
  );
};
