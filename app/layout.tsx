import React from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const _geist = Geist({ subsets: ['latin'] });
const _geistMono = Geist_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Toko Hewan Pawfect | Makanan Hewan Premium, Aksesoris & Layanan Grooming',
	description: 'Destinasi perawatan hewan terpercaya Anda. Belanja makanan hewan premium, aksesoris, grooming profesional, dan layanan dokter hewan. Kunjungi toko hewan lokal kami untuk perawatan ahli dan produk berkualitas.',
	keywords: 'toko hewan, pet shop, makanan hewan, grooming anjing, aksesoris kucing, layanan kesehatan hewan, dokter hewan, perlengkapan hewan terdekat, pet shop Jakarta',
	openGraph: {
		title: 'Toko Hewan Pawfect - Perawatan & Layanan Hewan Premium',
		description: 'Produk hewan berkualitas dan layanan profesional untuk sahabat berbulu Anda',
		type: 'website',
	},
	icons: {
		icon: [
			{
				url: '/Partech Logo.png',
				media: '(prefers-color-scheme: light)',
			},
			{
				url: '/Partech Logo.png',
				media: '(prefers-color-scheme: dark)',
			},
		],
		apple: '/Partech Logo.png',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="id"
			className="dark">
			<body className={`font-sans antialiased`}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
