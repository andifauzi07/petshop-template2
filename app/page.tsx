import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { ServicesSection } from '@/components/services-section';
import { ProductsSection } from '@/components/products-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { LocationSection } from '@/components/location-section';
import { FAQSection } from '@/components/faq-section';
import { CTASection } from '@/components/cta-section';
import { Footer } from '@/components/footer';

export default function Home() {
	return (
		<main className="min-h-screen">
			<Header />
			<HeroSection />
			<AboutSection />
			<ServicesSection />
			<ProductsSection />
			<TestimonialsSection />
			<LocationSection />
			<FAQSection />
			<CTASection />
			<Footer />
		</main>
	);
}
