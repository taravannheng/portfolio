import HeroSection from '../components/hero/hero';
import SkillsSection from '../components/skills/skills';
import WorkSection from '../components/work/work';
import ContactSection from '../components/contact/contact';
import FooterSection from '../components/footer/footer';
import Loader from '../components/loader/loader';

const HomePage = () => {
  return (
    <div>
      <Loader />
      <HeroSection />
      <SkillsSection />
      <WorkSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default HomePage;
