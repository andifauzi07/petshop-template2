'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';

export function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
			setIsMobileMenuOpen(false);
		}
	};

	const handleWhatsAppClick = () => {
		window.open('https://wa.me/1234567890?text=Hello%20Pawfect%20Pet%20Shop', '_blank');
	};

	return (
		<>
			{/* Top bar */}
			{/* <div className="bg-primary text-primary-foreground py-2 px-4">
				<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-sm gap-2">
					<div className="flex items-center gap-4 flex-wrap">
						<div className="flex items-center gap-2">
							<Clock className="h-4 w-4" />
							<span>{'Sen-Sab: 09.00-20.00 | Min: 10.00-18.00'}</span>
						</div>
						<div className="flex items-center gap-2">
							<Phone className="h-4 w-4" />
							<span>{'+62 812 3456 7890'}</span>
						</div>
					</div>
					<div className="flex items-center gap-2">
						<MapPin className="h-4 w-4" />
						<span>{'Jl. Hewan Peliharaan No. 123, Jakarta'}</span>
					</div>
				</div>
			</div> */}

			{/* Main header */}
			<header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-effect shadow-lg' : 'bg-background border-b border-border/50'}`}>
				<div className="max-w-7xl mx-auto px-4 py-4">
					<div className="flex items-center justify-between">
						{/* Logo */}
						<div className="flex items-center gap-2">
							<div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">{'P'}</div>
							<div>
								<h1 className="font-bold text-xl text-foreground">{'Toko Hewan Pawfect'}</h1>
								<p className="text-xs text-muted-foreground">{'Ahli Perawatan Hewan Kesayangan Anda'}</p>
							</div>
						</div>

						{/* Desktop Navigation */}
						<nav className="hidden md:flex items-center gap-6">
							<button
								onClick={() => scrollToSection('about')}
								className="text-foreground hover:text-primary transition-colors">
								{'Tentang'}
							</button>
							<button
								onClick={() => scrollToSection('services')}
								className="text-foreground hover:text-primary transition-colors">
								{'Layanan'}
							</button>
							<button
								onClick={() => scrollToSection('products')}
								className="text-foreground hover:text-primary transition-colors">
								{'Produk'}
							</button>
							<button
								onClick={() => scrollToSection('testimonials')}
								className="text-foreground hover:text-primary transition-colors">
								{'Testimoni'}
							</button>
							<button
								onClick={() => scrollToSection('location')}
								className="text-foreground hover:text-primary transition-colors">
								{'Lokasi'}
							</button>
							<button
								onClick={() => scrollToSection('faq')}
								className="text-foreground hover:text-primary transition-colors">
								{'FAQ'}
							</button>
						</nav>

						{/* CTA Buttons */}
						<div className="hidden md:flex items-center gap-3">
							<Button
								variant="outline"
								onClick={() => scrollToSection('location')}>
								{'Booking Kunjungan'}
							</Button>
							<Button
								onClick={handleWhatsAppClick}
								className="bg-accent hover:bg-accent/90 text-accent-foreground">
								{'Hubungi WhatsApp'}
							</Button>
						</div>

						{/* Mobile menu button */}
						<button
							className="md:hidden"
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							aria-label="Toggle menu">
							{isMobileMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
						</button>
					</div>

					{/* Mobile Navigation */}
					{isMobileMenuOpen && (
						<nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-border pt-4">
							<button
								onClick={() => scrollToSection('about')}
								className="text-foreground hover:text-primary transition-colors text-left">
								{'Tentang'}
							</button>
							<button
								onClick={() => scrollToSection('services')}
								className="text-foreground hover:text-primary transition-colors text-left">
								{'Layanan'}
							</button>
							<button
								onClick={() => scrollToSection('products')}
								className="text-foreground hover:text-primary transition-colors text-left">
								{'Produk'}
							</button>
							<button
								onClick={() => scrollToSection('testimonials')}
								className="text-foreground hover:text-primary transition-colors text-left">
								{'Testimoni'}
							</button>
							<button
								onClick={() => scrollToSection('location')}
								className="text-foreground hover:text-primary transition-colors text-left">
								{'Lokasi'}
							</button>
							<button
								onClick={() => scrollToSection('faq')}
								className="text-foreground hover:text-primary transition-colors text-left">
								{'FAQ'}
							</button>
							<div className="flex flex-col gap-2 mt-2">
								<Button
									variant="outline"
									onClick={() => scrollToSection('location')}
									className="w-full">
									{'Booking Kunjungan'}
								</Button>
								<Button
									onClick={handleWhatsAppClick}
									className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
									{'Hubungi WhatsApp'}
								</Button>
							</div>
						</nav>
					)}
				</div>
			</header>
		</>
	);
}
