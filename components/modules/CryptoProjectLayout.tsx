import React from 'react';
import { HeroSection } from './HeroSection';
import { StatsRow } from './StatsRow';
import { StepByStep } from './StepByStep';
import { FeatureGrid } from './FeatureGrid';
import { CallToAction } from './CallToAction';
import { Footer } from './Footer';

export const CryptoProjectLayout = (props: any) => {
  const { primary_color } = props;
  return (
    <div className="flex flex-col w-full">
      {props.hero && <HeroSection {...props.hero} primary_color={primary_color} />}
      {props.tokenomics && <StatsRow {...props.tokenomics} primary_color={primary_color} />}
      {props.roadmap && <StepByStep {...props.roadmap} primary_color={primary_color} />}
      {props.team && <FeatureGrid {...props.team} primary_color={primary_color} />}
      {props.community && <CallToAction {...props.community} primary_color={primary_color} />}
      {props.footer && <Footer {...props.footer} primary_color={primary_color} />}
    </div>
  );
};
