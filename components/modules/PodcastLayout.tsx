import React from 'react';
import { HeroSection } from './HeroSection';
import { DataList } from './DataList';
import { FeatureGrid } from './FeatureGrid';
import { TestimonialGrid } from './TestimonialGrid';
import { CallToAction } from './CallToAction';
import { Footer } from './Footer';

export const PodcastLayout = (props: any) => {
  const { primary_color } = props;
  return (
    <div className="flex flex-col w-full">
      {props.hero && <HeroSection {...props.hero} primary_color={primary_color} />}
      {props.episodes && <DataList {...props.episodes} primary_color={primary_color} />}
      {props.hosts && <FeatureGrid {...props.hosts} primary_color={primary_color} />}
      {props.reviews && <TestimonialGrid {...props.reviews} primary_color={primary_color} />}
      {props.subscribe && <CallToAction {...props.subscribe} primary_color={primary_color} />}
      {props.footer && <Footer {...props.footer} primary_color={primary_color} />}
    </div>
  );
};
