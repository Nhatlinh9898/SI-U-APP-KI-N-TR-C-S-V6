import React from 'react';
import { HeroSection } from './HeroSection';
import { StatsRow } from './StatsRow';
import { StepByStep } from './StepByStep';
import { FeatureGrid } from './FeatureGrid';
import { PricingTable } from './PricingTable';
import { FAQAccordion } from './FAQAccordion';
import { Footer } from './Footer';

export const EventLayout = (props: any) => {
  const { primary_color } = props;
  return (
    <div className="flex flex-col w-full">
      {props.hero && <HeroSection {...props.hero} primary_color={primary_color} />}
      {props.info && <StatsRow {...props.info} primary_color={primary_color} />}
      {props.schedule && <StepByStep {...props.schedule} primary_color={primary_color} />}
      {props.speakers && <FeatureGrid {...props.speakers} primary_color={primary_color} />}
      {props.tickets && <PricingTable {...props.tickets} primary_color={primary_color} />}
      {props.faq && <FAQAccordion {...props.faq} primary_color={primary_color} />}
      {props.footer && <Footer {...props.footer} primary_color={primary_color} />}
    </div>
  );
};
