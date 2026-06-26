import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Keunggulan from './components/Keunggulan';
import Layanan from './components/Layanan';
import KalkulatorRAB from './components/KalkulatorRAB';
import MengapaPilihKami from './components/MengapaPilihKami';
import Portfolio from './components/Portfolio';
import ProsesKerja from './components/ProsesKerja';
import Testimoni from './components/Testimoni';
import FAQ from './components/FAQ';
import Artikel from './components/Artikel';
import SurveyForm from './components/SurveyForm';
import SEOSection from './components/SEOSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-brand-gray-light min-h-screen text-brand-navy selection:bg-brand-orange selection:text-white">
      {/* Premium Navigation Header */}
      <Navbar />

      {/* Hero Cover */}
      <Hero />

      {/* Core Advantages */}
      <Keunggulan />

      {/* Main 8 Services Catalog */}
      <Layanan />

      {/* Premium Interactive RAB Estimator (Split-Screen & Multi-Step) */}
      <KalkulatorRAB />

      {/* Why Choose Us & Coverage */}
      <MengapaPilihKami />

      {/* Masonry Project Gallery & Lightbox */}
      <Portfolio />

      {/* Structured Construction Workflow */}
      <ProsesKerja />

      {/* Customer Reviews Slider */}
      <Testimoni />

      {/* FAQ Accordions */}
      <FAQ />

      {/* Blog & Educational Guides */}
      <Artikel />

      {/* Survey Form (Lead Capture Hook) */}
      <SurveyForm />

      {/* SEO Tag Clouds */}
      <SEOSection />

      {/* Bottom CTA & Directory Footer */}
      <Footer />
    </div>
  );
}
