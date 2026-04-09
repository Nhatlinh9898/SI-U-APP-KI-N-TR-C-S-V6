import React from 'react';
import { HeroSection } from './HeroSection';
import { DataList } from './DataList';
import { BentoGrid } from './BentoGrid';
import { StepByStep } from './StepByStep';
import { CallToAction } from './CallToAction';
import { Footer } from './Footer';

export const MusicReleaseLayout = (props: any) => {
  const { primary_color } = props;
  return (
    <div className="flex flex-col w-full">
      {props.hero && <HeroSection {...props.hero} primary_color={primary_color} />}
      {props.tracklist && <DataList {...props.tracklist} primary_color={primary_color} />}
      {props.gallery && <BentoGrid {...props.gallery} primary_color={primary_color} />}
      {props.tour_dates && <StepByStep {...props.tour_dates} primary_color={primary_color} />}
      {props.listen_now && <CallToAction {...props.listen_now} primary_color={primary_color} />}
      {props.footer && <Footer {...props.footer} primary_color={primary_color} />}
    </div>
  );
};
