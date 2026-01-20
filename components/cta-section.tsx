'use client';

import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Calendar } from 'lucide-react';

export function CTASection() {
	const handleWhatsAppClick = () => {
		window.open('https://wa.me/6281234567890?text=Halo%20Toko%20Hewan%20Pawfect', '_blank');
	};

	const handleCallClick = () => {
		window.location.href = 'tel:+6281234567890';
	};

	const scrollToLocation = () => {
		const element = document.getElementById('location');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<section className="py-16 md:py-24 bg-background text-primary-foreground">
			<div className="max-w-7xl mx-auto px-4">
				<div className="text-center max-w-3xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{'Siap Memberikan Perawatan Terbaik untuk Hewan Anda?'}</h2>
					<p className="text-lg opacity-90 mb-8 text-pretty">{'Kunjungi kami hari ini atau hubungi kami untuk mengetahui lebih lanjut tentang layanan kami. Kebahagiaan hewan Anda adalah prioritas kami!'}</p>

					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<Button
							size="lg"
							variant="secondary"
							onClick={handleWhatsAppClick}
							className="w-full sm:w-auto">
							<MessageCircle className="mr-2 h-5 w-5" />
							{'Hubungi WhatsApp'}
						</Button>
						<Button
							size="lg"
							variant="secondary"
							onClick={handleCallClick}
							className="w-full sm:w-auto">
							<Phone className="mr-2 h-5 w-5" />
							{'Telepon Sekarang'}
						</Button>
						<Button
							size="lg"
							variant="secondary"
							onClick={scrollToLocation}
							className="w-full sm:w-auto">
							<Calendar className="mr-2 h-5 w-5" />
							{'Kunjungi Toko'}
						</Button>
					</div>

					<div className="mt-12 pt-12 border-t border-primary-foreground/20">
						<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
							<div>
								<div className="text-3xl font-bold mb-2">{'10+'}</div>
								<div className="text-sm opacity-80">{'Tahun Pengalaman'}</div>
							</div>
							<div>
								<div className="text-3xl font-bold mb-2">{'5000+'}</div>
								<div className="text-sm opacity-80">{'Hewan Bahagia'}</div>
							</div>
							<div>
								<div className="text-3xl font-bold mb-2">{'200+'}</div>
								<div className="text-sm opacity-80">{'Ulasan Bintang 5'}</div>
							</div>
							<div>
								<div className="text-3xl font-bold mb-2">{'100%'}</div>
								<div className="text-sm opacity-80">{'Cinta & Kasih Sayang'}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
