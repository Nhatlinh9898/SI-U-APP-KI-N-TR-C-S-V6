import React from 'react';
import { HeroSection } from './HeroSection';
import { StatsRow } from './StatsRow';
import { FeatureGrid } from './FeatureGrid';
import { StepByStep } from './StepByStep';
import { PricingTable } from './PricingTable';
import { CallToAction } from './CallToAction';
import { Footer } from './Footer';

export const FitnessLayout = (props: any) => {
  const { primary_color } = props;
  return (
    <div className="flex flex-col w-full">
      {props.hero && <HeroSection {...props.hero} primary_color={primary_color} />}
      {props.stats && <StatsRow {...props.stats} primary_color={primary_color} />}
      {props.classes && <FeatureGrid {...props.classes} primary_color={primary_color} />}
      {props.process && <StepByStep {...props.process} primary_color={primary_color} />}
      {props.memberships && <PricingTable {...props.memberships} primary_color={primary_color} />}
      {props.cta && <CallToAction {...props.cta} primary_color={primary_color} />}
      {props.footer && <Footer {...props.footer} primary_color={primary_color} />}
    </div>
  );
};
