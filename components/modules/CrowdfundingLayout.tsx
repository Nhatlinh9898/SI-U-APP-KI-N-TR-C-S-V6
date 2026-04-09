import React from 'react';
import { HeroSection } from './HeroSection';
import { StatsRow } from './StatsRow';
import { BentoGrid } from './BentoGrid';
import { PricingTable } from './PricingTable';
import { CallToAction } from './CallToAction';
import { Footer } from './Footer';

export const CrowdfundingLayout = (props: any) => {
  const { primary_color } = props;
  return (
    <div className="flex flex-col w-full">
      {props.hero && <HeroSection {...props.hero} primary_color={primary_color} />}
      {props.progress && <StatsRow {...props.progress} primary_color={primary_color} />}
      {props.story && <BentoGrid {...props.story} primary_color={primary_color} />}
      {props.rewards && <PricingTable {...props.rewards} primary_color={primary_color} />}
      {props.back_us && <CallToAction {...props.back_us} primary_color={primary_color} />}
      {props.footer && <Footer {...props.footer} primary_color={primary_color} />}
    </div>
  );
};
