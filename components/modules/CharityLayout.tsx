import React from 'react';
import { HeroSection } from './HeroSection';
import { StatsRow } from './StatsRow';
import { BentoGrid } from './BentoGrid';
import { FeatureGrid } from './FeatureGrid';
import { TestimonialGrid } from './TestimonialGrid';
import { CallToAction } from './CallToAction';
import { Footer } from './Footer';

export const CharityLayout = (props: any) => {
  const { primary_color } = props;
  return (
    <div className="flex flex-col w-full">
      {props.hero && <HeroSection {...props.hero} primary_color={primary_color} />}
      {props.impact && <StatsRow {...props.impact} primary_color={primary_color} />}
      {props.causes && <BentoGrid {...props.causes} primary_color={primary_color} />}
      {props.programs && <FeatureGrid {...props.programs} primary_color={primary_color} />}
      {props.stories && <TestimonialGrid {...props.stories} primary_color={primary_color} />}
      {props.donate && <CallToAction {...props.donate} primary_color={primary_color} />}
      {props.footer && <Footer {...props.footer} primary_color={primary_color} />}
    </div>
  );
};
