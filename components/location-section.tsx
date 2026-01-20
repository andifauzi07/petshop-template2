'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Clock, Phone, Mail, Navigation } from 'lucide-react';

export function LocationSection() {
	const handleGetDirections = () => {
		window.open('https://www.google.com/maps/search/pet+shop+near+me', '_blank');
	};

	const handleCallClick = () => {
		window.location.href = 'tel:+12345678900';
	};

	const handleEmailClick = () => {
		window.location.href = 'mailto:info@pawfectpetshop.com';
	};

	return (
		<section
			id="location"
			className="py-16 md:py-24 bg-background">
			<div className="max-w-7xl mx-auto px-4">
				<div className="text-center max-w-3xl mx-auto mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">{'Kunjungi Toko Kami'}</h2>
					<p className="text-lg text-muted-foreground text-pretty">{'Mampir dan temui kami! Tim ramah kami siap membantu Anda dan hewan kesayangan Anda dengan semua kebutuhan Anda.'}</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-8">
					{/* Contact Information */}
					<div className="space-y-6">
						<Card className="p-6">
							<h3 className="text-2xl font-bold text-card-foreground mb-6">{'Informasi Kontak'}</h3>

							<div className="space-y-4">
								<div className="flex items-start gap-4">
									<div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0">
										<MapPin className="h-5 w-5" />
									</div>
									<div>
										<div className="font-medium text-card-foreground mb-1">{'Alamat'}</div>
										<div className="text-muted-foreground">{'Jl. Hewan Peliharaan No. 123, Jakarta Selatan, 12345'}</div>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0">
										<Clock className="h-5 w-5" />
									</div>
									<div>
										<div className="font-medium text-card-foreground mb-1">{'Jam Operasional'}</div>
										<div className="text-muted-foreground space-y-1">
											<div>{'Senin - Sabtu: 09.00 - 20.00 WIB'}</div>
											<div>{'Minggu: 10.00 - 18.00 WIB'}</div>
										</div>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0">
										<Phone className="h-5 w-5" />
									</div>
									<div>
										<div className="font-medium text-card-foreground mb-1">{'Telepon'}</div>
										<button
											onClick={handleCallClick}
											className="text-primary hover:underline">
											{'+62 812 3456 7890'}
										</button>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0">
										<Mail className="h-5 w-5" />
									</div>
									<div>
										<div className="font-medium text-card-foreground mb-1">{'Email'}</div>
										<button
											onClick={handleEmailClick}
											className="text-primary hover:underline">
											{'info@tokohewanpawfect.com'}
										</button>
									</div>
								</div>
							</div>

							<div className="mt-6 pt-6 border-t border-border">
								<Button
									className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
									size="lg"
									onClick={handleGetDirections}>
									<Navigation className="mr-2 h-5 w-5" />
									{'Dapatkan Arah'}
								</Button>
							</div>
						</Card>

						{/* Quick Info Cards */}
						<div className="grid grid-cols-2 gap-4">
							<Card className="p-4 text-center">
								<div className="text-2xl font-bold text-primary mb-1">{'Gratis'}</div>
								<div className="text-sm text-muted-foreground">{'Parkir Tersedia'}</div>
							</Card>
							<Card className="p-4 text-center">
								<div className="text-2xl font-bold text-primary mb-1">{'Ramah'}</div>
								<div className="text-sm text-muted-foreground">{'Lingkungan Pet-Friendly'}</div>
							</Card>
						</div>
					</div>

					{/* Google Maps Embed */}
					<Card className="overflow-hidden">
						<div className="relative w-full h-[500px]">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6174339026634!2d-73.98784368459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								title="Pawfect Pet Shop Location"
							/>
						</div>
					</Card>
				</div>
			</div>
		</section>
	);
}
