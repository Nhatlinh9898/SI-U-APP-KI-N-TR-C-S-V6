import React from 'react';
import { HeroSection } from './HeroSection';
import { StatsRow } from './StatsRow';
import { StepByStep } from './StepByStep';
import { FeatureGrid } from './FeatureGrid';
import { PricingTable } from './PricingTable';
import { FAQAccordion } from './FAQAccordion';
import { Footer } from './Footer';

export const CourseLayout = (props: any) => {
  const { primary_color } = props;
  return (
    <div className="flex flex-col w-full">
      {props.hero && <HeroSection {...props.hero} primary_color={primary_color} />}
      {props.stats && <StatsRow {...props.stats} primary_color={primary_color} />}
      {props.curriculum && <StepByStep {...props.curriculum} primary_color={primary_color} />}
      {props.benefits && <FeatureGrid {...props.benefits} primary_color={primary_color} />}
      {props.pricing && <PricingTable {...props.pricing} primary_color={primary_color} />}
      {props.faq && <FAQAccordion {...props.faq} primary_color={primary_color} />}
      {props.footer && <Footer {...props.footer} primary_color={primary_color} />}
    </div>
  );
};
