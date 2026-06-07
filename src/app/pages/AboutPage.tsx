import { AboutSection } from '../components/AboutSection';
import { InspirationSection } from '../components/InspirationSection';
import { VisionMissionSection } from '../components/VisionMissionSection';
import { CoreValuesSection } from '../components/CoreValuesSection';
import { LeadershipSection } from '../components/LeadershipSection';
import { OfficeSection } from '../components/OfficeSection';
import { ContactSection } from '../components/ContactSection';

export function AboutPage() {
  return (
    <div className="pt-20">
      <AboutSection />
      <InspirationSection />
      <VisionMissionSection />
      <CoreValuesSection />
      <LeadershipSection />
      <OfficeSection />
      <ContactSection />
    </div>
  );
}
