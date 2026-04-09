import React from 'react';
import { HeroSection } from './HeroSection';
import { BentoGrid } from './BentoGrid';
import { FeatureGrid } from './FeatureGrid';
import { TestimonialGrid } from './TestimonialGrid';
import { CallToAction } from './CallToAction';
import { Footer } from './Footer';

export const BakeryLayout = (props: any) => {
  const { primary_color } = props;
  return (
    <div className="flex flex-col w-full">
      {props.hero && <HeroSection {...props.hero} primary_color={primary_color} />}
      {props.menu && <BentoGrid {...props.menu} primary_color={primary_color} />}
      {props.features && <FeatureGrid {...props.features} primary_color={primary_color} />}
      {props.reviews && <TestimonialGrid {...props.reviews} primary_color={primary_color} />}
      {props.order && <CallToAction {...props.order} primary_color={primary_color} />}
      {props.footer && <Footer {...props.footer} primary_color={primary_color} />}
    </div>
  );
};
