import { useState, useEffect } from 'react';

import HeroSection from '../components/hero/hero';
import SkillsSection from '../components/skills/skills';
import WorkSection from '../components/work/work';
import ContactSection from '../components/contact/contact';
import FooterSection from '../components/footer/footer';
import Loader from '../components/loader/loader';

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  return (
    <>
      {loading && <Loader />}

      {!loading && (
        <div>
          <HeroSection />
          <SkillsSection />
          <WorkSection />
          <ContactSection />
          <FooterSection />
        </div>
      )}
    </>
  );
};

export default HomePage;
