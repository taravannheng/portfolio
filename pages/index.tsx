import HeroSection from '../components/hero/hero';
import SkillsSection from '../components/skills/skills';
import WorkSection from '../components/work/work';
import FooterSection from '../components/footer/footer';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <SkillsSection />
      <WorkSection />
      <FooterSection />
    </div>
  );
};

export default HomePage;
