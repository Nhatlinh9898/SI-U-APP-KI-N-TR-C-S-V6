import React from 'react';
import { HeroSection } from './HeroSection';
import { BentoGrid } from './BentoGrid';
import { FeatureGrid } from './FeatureGrid';
import { TestimonialGrid } from './TestimonialGrid';
import { CallToAction } from './CallToAction';
import { Footer } from './Footer';

export const EcommerceLayout = (props: any) => {
  const { primary_color } = props;
  return (
    <div className="flex flex-col w-full">
      {props.hero && <HeroSection {...props.hero} primary_color={primary_color} />}
      {props.categories && <BentoGrid {...props.categories} primary_color={primary_color} />}
      {props.products && <FeatureGrid {...props.products} primary_color={primary_color} />}
      {props.reviews && <TestimonialGrid {...props.reviews} primary_color={primary_color} />}
      {props.newsletter && <CallToAction {...props.newsletter} primary_color={primary_color} />}
      {props.footer && <Footer {...props.footer} primary_color={primary_color} />}
    </div>
  );
};
