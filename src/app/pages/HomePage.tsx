import { HeroSection } from '../components/HeroSection';
import { HomeAboutSection } from '../components/HomeAboutSection';
import { HomeProgramsSection } from '../components/HomeProgramsSection';
import { InspirationSection } from '../components/InspirationSection';
import { ServicesSection } from '../components/ServicesSection';
import { VisionMissionSection } from '../components/VisionMissionSection';
import { CoreValuesSection } from '../components/CoreValuesSection';
import { LeadershipSection } from '../components/LeadershipSection';
import { ContactSection } from '../components/ContactSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <HomeAboutSection />
      <HomeProgramsSection />
      <ServicesSection />
      <InspirationSection />
      <VisionMissionSection />
      <LeadershipSection />
      <CoreValuesSection />
      <ContactSection />
    </>
  );
}
