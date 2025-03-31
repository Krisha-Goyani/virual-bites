import HeroSection from '@/components/hero'
import ReviewSection from '@/components/review';
import Integrations from '../components/integrations';
import CRMSection from '../components/crm';
import POSSection from '../components/pos';

export default function Home() {
  return (
    <div className="container">
      <HeroSection />
      <ReviewSection />
      <Integrations />
      <CRMSection />
      <POSSection />
    </div>
  );
}