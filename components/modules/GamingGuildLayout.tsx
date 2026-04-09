import React from 'react';
import { HeroSection } from './HeroSection';
import { StatsRow } from './StatsRow';
import { FeatureGrid } from './FeatureGrid';
import { BentoGrid } from './BentoGrid';
import { CallToAction } from './CallToAction';
import { Footer } from './Footer';

export const GamingGuildLayout = (props: any) => {
  const { primary_color } = props;
  return (
    <div className="flex flex-col w-full">
      {props.hero && <HeroSection {...props.hero} primary_color={primary_color} />}
      {props.achievements && <StatsRow {...props.achievements} primary_color={primary_color} />}
      {props.roster && <FeatureGrid {...props.roster} primary_color={primary_color} />}
      {props.highlights && <BentoGrid {...props.highlights} primary_color={primary_color} />}
      {props.join_us && <CallToAction {...props.join_us} primary_color={primary_color} />}
      {props.footer && <Footer {...props.footer} primary_color={primary_color} />}
    </div>
  );
};
