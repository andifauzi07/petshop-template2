'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Scissors, Stethoscope, ShoppingBag, Sparkles, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const services = [
	{
		title: 'Grooming Profesional',
		description: 'Layanan grooming ahli termasuk mandi, potong rambut, potong kuku, dan styling. Groomer bersertifikat kami memastikan hewan Anda terlihat dan merasa terbaik.',
		features: ['Grooming seluruh tubuh', 'Potong & kikir kuku', 'Pembersihan telinga', 'Potongan khusus ras'],
		icon: Scissors,
		image: '/grooming-service.jpg',
		price: 'Mulai Rp 150.000',
	},
	{
		title: 'Layanan Kesehatan Hewan',
		description: 'Layanan veteriner dasar, pemeriksaan kesehatan, vaksinasi, dan konsultasi kesejahteraan. Kami bermitra dengan dokter hewan berlisensi untuk menjaga kesehatan hewan Anda.',
		features: ['Pemeriksaan kesehatan', 'Vaksinasi', 'Kontrol parasit', 'Konsultasi nutrisi'],
		icon: Stethoscope,
		image: '/hero-pet-shop.jpg',
		price: 'Mulai Rp 100.000',
	},
	{
		title: 'Makanan Hewan Premium',
		description: 'Pilihan makanan hewan berkualitas tinggi dari merek terpercaya. Diet khusus untuk semua tahap kehidupan, ras, dan kebutuhan diet.',
		features: ['Semua merek utama', 'Pilihan organik', 'Diet resep', 'Pilihan bebas biji-bijian'],
		icon: ShoppingBag,
		image: '/pet-food.jpg',
		price: 'Bervariasi',
	},
	{
		title: 'Aksesoris Hewan',
		description: 'Rangkaian lengkap aksesoris termasuk kalung, tali kekang, mainan, tempat tidur, dan kandang angkut. Semua yang dibutuhkan hewan Anda untuk kenyamanan dan bermain.',
		features: ['Mainan & pengayaan', 'Tempat tidur & kandang', 'Kalung & tali kekang', 'Mangkuk & tempat makan'],
		icon: Sparkles,
		image: '/pet-accessories.jpg',
		price: 'Mulai Rp 30.000',
	},
];

export function ServicesSection() {
	const handleWhatsAppClick = () => {
		window.open('https://wa.me/6281234567890?text=Halo%20Toko%20Hewan%20Pawfect', '_blank');
	};

	return (
		<section
			id="services"
			className="py-16 md:py-24 bg-secondary/30">
			<div className="max-w-7xl mx-auto px-4">
				<div className="text-center max-w-3xl mx-auto mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">{'Layanan Perawatan Hewan Komprehensif Kami'}</h2>
					<p className="text-lg text-muted-foreground text-pretty">{'Dari kebutuhan sehari-hari hingga perawatan khusus, kami menawarkan semua yang dibutuhkan hewan Anda untuk tumbuh dan tetap bahagia.'}</p>
				</div>

				<div className="grid md:grid-cols-2 gap-6">
					{services.map((service, index) => {
						const Icon = service.icon;
						return (
							<Card
								key={index}
								className="overflow-hidden hover:shadow-xl transition-all hover:scale-[1.02] border-primary/10 hover:border-primary/30 bg-card/50 backdrop-blur-sm">
								<div className="relative h-48 md:h-56">
									<Image
										src={service.image || '/placeholder.svg'}
										alt={service.title}
										fill
										className="object-cover"
									/>
									<div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium glow-accent">{service.price}</div>
								</div>
								<div className="p-6">
									<div className="flex items-start gap-4 mb-4">
										<div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0">
											<Icon className="h-6 w-6" />
										</div>
										<div>
											<h3 className="text-xl font-bold text-card-foreground mb-2">{service.title}</h3>
											<p className="text-muted-foreground leading-relaxed">{service.description}</p>
										</div>
									</div>
									<ul className="space-y-2 mb-4">
										{service.features.map((feature, idx) => (
											<li
												key={idx}
												className="flex items-center gap-2 text-sm text-muted-foreground">
												<div className="w-1.5 h-1.5 rounded-full bg-primary" />
												{feature}
											</li>
										))}
									</ul>
									<Button
										variant="outline"
										className="w-full group bg-transparent"
										onClick={handleWhatsAppClick}>
										{'Pesan Sekarang'}
										<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
									</Button>
								</div>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
}
