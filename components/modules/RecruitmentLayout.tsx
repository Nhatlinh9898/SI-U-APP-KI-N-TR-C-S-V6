import React from 'react';
import { HeroSection } from './HeroSection';
import { StatsRow } from './StatsRow';
import { FeatureGrid } from './FeatureGrid';
import { DataList } from './DataList';
import { CallToAction } from './CallToAction';
import { Footer } from './Footer';

export const RecruitmentLayout = (props: any) => {
  const { primary_color } = props;
  return (
    <div className="flex flex-col w-full">
      {props.hero && <HeroSection {...props.hero} primary_color={primary_color} />}
      {props.stats && <StatsRow {...props.stats} primary_color={primary_color} />}
      {props.benefits && <FeatureGrid {...props.benefits} primary_color={primary_color} />}
      {props.openings && <DataList {...props.openings} primary_color={primary_color} />}
      {props.apply && <CallToAction {...props.apply} primary_color={primary_color} />}
      {props.footer && <Footer {...props.footer} primary_color={primary_color} />}
    </div>
  );
};
