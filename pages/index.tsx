import { useState, useEffect } from 'react';

import HeaderSection from '../components/header/header';
import HeroSection from '../components/hero/hero';
import SkillsSection from '../components/skills/skills';
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
          <HeaderSection />
          <HeroSection />
          <SkillsSection />
          <ContactSection />
          <FooterSection />
        </div>
      )}
    </>
  );
};

export default HomePage;
