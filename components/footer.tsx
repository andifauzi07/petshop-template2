'use client';

import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export function Footer() {
	const handleWhatsAppClick = () => {
		window.open('https://wa.me/6281234567890?text=Halo%20Toko%20Hewan%20Pawfect', '_blank');
	};

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<footer className="bg-secondary/30 text-foreground">
			<div className="max-w-7xl mx-auto px-4 py-12">
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
					{/* About */}
					<div>
						<div className="flex items-center gap-2 mb-4">
							<div className="w-10 h-10 bg-secondary/30 rounded-full flex items-center justify-center text-foreground font-bold text-xl">{'P'}</div>
							<div>
								<h3 className="font-bold text-lg">{'Toko Hewan Pawfect'}</h3>
							</div>
						</div>
						<p className="text-foreground text-sm leading-relaxed mb-4">{'Mitra terpercaya Anda untuk perawatan hewan lengkap. Produk berkualitas, layanan profesional, dan cinta tulus untuk setiap hewan.'}</p>
						<button
							onClick={handleWhatsAppClick}
							className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
							<MessageCircle className="h-4 w-4" />
							{'Chat via WhatsApp'}
						</button>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="font-bold text-lg mb-4">{'Tautan Cepat'}</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<button
									onClick={() => scrollToSection('about')}
									className="text-foreground hover:text-primary transition-colors">
									{'Tentang Kami'}
								</button>
							</li>
							<li>
								<button
									onClick={() => scrollToSection('services')}
									className="text-foreground hover:text-primary transition-colors">
									{'Layanan Kami'}
								</button>
							</li>
							<li>
								<button
									onClick={() => scrollToSection('products')}
									className="text-foreground hover:text-primary transition-colors">
									{'Produk'}
								</button>
							</li>
							<li>
								<button
									onClick={() => scrollToSection('testimonials')}
									className="text-foreground hover:text-primary transition-colors">
									{'Testimoni Pelanggan'}
								</button>
							</li>
							<li>
								<button
									onClick={() => scrollToSection('faq')}
									className="text-foreground hover:text-primary transition-colors">
									{'FAQ'}
								</button>
							</li>
						</ul>
					</div>

					{/* Services */}
					<div>
						<h4 className="font-bold text-lg mb-4">{'Layanan Kami'}</h4>
						<ul className="space-y-2 text-sm text-foreground">
							<li>{'Grooming Profesional'}</li>
							<li>{'Layanan Kesehatan Hewan'}</li>
							<li>{'Makanan Hewan Premium'}</li>
							<li>{'Aksesoris Hewan'}</li>
							<li>{'Konsultasi Nutrisi'}</li>
							<li>{'Layanan Pengiriman'}</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h4 className="font-bold text-lg mb-4">{'Hubungi Kami'}</h4>
						<ul className="space-y-3 text-sm text-foreground">
							<li className="flex items-start gap-2">
								<MapPin className="h-4 w-4 mt-0.5 shrink-0" />
								<span className="text-foreground">{'Jl. Hewan Peliharaan No. 123, Jakarta Selatan, 12345'}</span>
							</li>
							<li className="flex items-center gap-2">
								<Phone className="h-4 w-4 shrink-0 text-foreground" />
								<a
									href="tel:+6281234567890"
									className="text-foreground hover:text-primary transition-colors">
									{'+62 812 3456 7890'}
								</a>
							</li>
							<li className="flex items-center gap-2">
								<Mail className="h-4 w-4 shrink-0 text-foreground" />
								<a
									href="mailto:info@tokohewanpawfect.com"
									className="text-foreground hover:text-primary transition-colors">
									{'info@tokohewanpawfect.com'}
								</a>
							</li>
							<li className="flex items-start gap-2">
								<Clock className="h-4 w-4 mt-0.5 shrink-0 text-foreground" />
								<div className="text-foreground">
									<div>{'Sen-Sab: 09.00-20.00'}</div>
									<div>{'Min: 10.00-18.00'}</div>
								</div>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="pt-8 border-t border-background/20">
					<div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground">
						<p>{'© 2024 Toko Hewan Pawfect. Hak cipta dilindungi.'}</p>
						<div className="flex items-center gap-6">
							<button className="hover:text-primary transition-colors">{'Kebijakan Privasi'}</button>
							<button className="hover:text-primary transition-colors">{'Syarat Layanan'}</button>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
