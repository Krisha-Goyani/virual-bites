import HeroSection from '@/components/layout/header/sections/hero';
import ReviewSection from '@/components/layout/header/sections/review';

export default function Home() {
  return (
    <div className="container">
      <HeroSection />
      <ReviewSection />
    </div>
  );
}