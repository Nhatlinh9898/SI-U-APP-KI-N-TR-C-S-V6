import React from 'react';
import { HeroSection } from './HeroSection';
import { DataList } from './DataList';
import { StatsRow } from './StatsRow';
import { TestimonialGrid } from './TestimonialGrid';
import { ContactForm } from './ContactForm';
import { Footer } from './Footer';

export const CreatorLayout = (props: any) => {
  const { primary_color } = props;
  return (
    <div className="flex flex-col w-full">
      {props.profile && <HeroSection {...props.profile} primary_color={primary_color} />}
      {props.links && <DataList {...props.links} primary_color={primary_color} />}
      {props.stats && <StatsRow {...props.stats} primary_color={primary_color} />}
      {props.shoutouts && <TestimonialGrid {...props.shoutouts} primary_color={primary_color} />}
      {props.contact && <ContactForm {...props.contact} primary_color={primary_color} />}
      {props.footer && <Footer {...props.footer} primary_color={primary_color} />}
    </div>
  );
};
