import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from './HeroSection';
import PricingSection from './PricingSection';
import MethodologySection from './MethodologySection';
import TestimonialsSection from './TestimonialsSection';
import CountdownSection from './CountdownSection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Last Recovery Method - 75% Off Final Recovery Program | Granimals</title>
        <meta
          name="description"
          content="Final chance for recovery transformation with Granimals 10-phase method. 75% discount on 3 & 6-month programs. Real testimonials, proven results, limited time offer."
        />
        <meta property="og:title" content="Last Recovery Method - 75% Off Final Recovery Program | Granimals" />
        <meta property="og:description" content="Final chance for recovery transformation with Granimals 10-phase method. 75% discount on 3 & 6-month programs. Real testimonials, proven results, limited time offer." />
      </Helmet>

      <main>
        <HeroSection />
        <PricingSection />
        <MethodologySection />
        <TestimonialsSection />
        <CountdownSection />
      </main>
    </>
  );
};

export default Home;