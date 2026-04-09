import React from 'react';
import { HeroSection } from './HeroSection';
import { StatsRow } from './StatsRow';
import { BentoGrid } from './BentoGrid';
import { PricingTable } from './PricingTable';
import { FAQAccordion } from './FAQAccordion';
import { CallToAction } from './CallToAction';
import { Footer } from './Footer';

export const SaasLayout = (props: any) => {
  const { primary_color } = props;
  return (
    <div className="flex flex-col w-full">
      {props.hero && <HeroSection {...props.hero} primary_color={primary_color} />}
      {props.stats && <StatsRow {...props.stats} primary_color={primary_color} />}
      {props.bento && <BentoGrid {...props.bento} primary_color={primary_color} />}
      {props.pricing && <PricingTable {...props.pricing} primary_color={primary_color} />}
      {props.faq && <FAQAccordion {...props.faq} primary_color={primary_color} />}
      {props.cta && <CallToAction {...props.cta} primary_color={primary_color} />}
      {props.footer && <Footer {...props.footer} primary_color={primary_color} />}
    </div>
  );
};
