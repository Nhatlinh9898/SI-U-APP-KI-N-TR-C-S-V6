import React from 'react';
import { HeroSection } from './HeroSection';
import { StatsRow } from './StatsRow';
import { BentoGrid } from './BentoGrid';
import { FeatureGrid } from './FeatureGrid';
import { TestimonialGrid } from './TestimonialGrid';
import { CallToAction } from './CallToAction';
import { Footer } from './Footer';

export const AgencyLayout = (props: any) => {
  const { primary_color } = props;
  return (
    <div className="flex flex-col w-full">
      {props.hero && <HeroSection {...props.hero} primary_color={primary_color} />}
      {props.impact && <StatsRow {...props.impact} primary_color={primary_color} />}
      {props.services && <BentoGrid {...props.services} primary_color={primary_color} />}
      {props.case_studies && <FeatureGrid {...props.case_studies} primary_color={primary_color} />}
      {props.testimonials && <TestimonialGrid {...props.testimonials} primary_color={primary_color} />}
      {props.cta && <CallToAction {...props.cta} primary_color={primary_color} />}
      {props.footer && <Footer {...props.footer} primary_color={primary_color} />}
    </div>
  );
};
