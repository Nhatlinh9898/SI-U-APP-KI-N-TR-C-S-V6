import React from 'react';
import { HeroSection } from './HeroSection';
import { BentoGrid } from './BentoGrid';
import { StatsRow } from './StatsRow';
import { FeatureGrid } from './FeatureGrid';
import { FAQAccordion } from './FAQAccordion';
import { CallToAction } from './CallToAction';
import { Footer } from './Footer';

export const AppPromoLayout = (props: any) => {
  const { primary_color } = props;
  return (
    <div className="flex flex-col w-full">
      {props.hero && <HeroSection {...props.hero} primary_color={primary_color} />}
      {props.bento && <BentoGrid {...props.bento} primary_color={primary_color} />}
      {props.stats && <StatsRow {...props.stats} primary_color={primary_color} />}
      {props.features && <FeatureGrid {...props.features} primary_color={primary_color} />}
      {props.faq && <FAQAccordion {...props.faq} primary_color={primary_color} />}
      {props.cta && <CallToAction {...props.cta} primary_color={primary_color} />}
      {props.footer && <Footer {...props.footer} primary_color={primary_color} />}
    </div>
  );
};
