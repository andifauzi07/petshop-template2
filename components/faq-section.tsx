'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const faqs = [
	{
		question: 'Apa jam operasional toko Anda?',
		answer: 'Kami buka Senin hingga Sabtu dari pukul 09.00 hingga 20.00 WIB, dan Minggu dari pukul 10.00 hingga 18.00 WIB. Kami siap melayani Anda dan hewan kesayangan Anda sepanjang minggu!',
	},
	{
		question: 'Apakah saya perlu membuat janji untuk layanan grooming?',
		answer:
			'Meskipun kami menerima walk-in berdasarkan ketersediaan, kami sangat merekomendasikan untuk membuat janji untuk memastikan slot waktu yang Anda inginkan. Anda dapat membuat janji melalui WhatsApp, telepon, atau dengan mengunjungi toko kami.',
	},
	{
		question: 'Metode pembayaran apa saja yang diterima?',
		answer: 'Kami menerima tunai, semua kartu kredit utama (Visa, Mastercard, American Express), kartu debit, dan metode pembayaran digital termasuk GoPay, OVO, dan QRIS.',
	},
	{
		question: 'Apakah Anda menawarkan layanan pengiriman?',
		answer: 'Ya! Kami menawarkan pengiriman lokal untuk pesanan di atas Rp 200.000. Hubungi kami melalui WhatsApp atau telepon untuk mengatur pengiriman, dan kami akan mengirimkan perlengkapan hewan Anda ke rumah Anda.',
	},
	{
		question: 'Bisakah Anda membantu saya memilih makanan yang tepat untuk hewan saya?',
		answer:
			'Tentu saja! Staf kami yang berpengetahuan dapat memberikan panduan nutrisi berdasarkan usia, ras, ukuran hewan Anda, dan kebutuhan diet khusus apa pun. Kami menyediakan makanan khusus termasuk bebas biji-bijian, organik, dan diet resep.',
	},
	{
		question: 'Apakah Anda menyediakan layanan dokter hewan?',
		answer: 'Kami menawarkan layanan kesehatan dasar termasuk pemeriksaan kesehatan, vaksinasi, dan konsultasi kesejahteraan. Untuk perawatan dokter hewan khusus, kami dapat merekomendasikan klinik mitra terpercaya di area ini.',
	},
	{
		question: 'Merek makanan hewan apa saja yang Anda jual?',
		answer: "Kami menyediakan merek premium termasuk Royal Canin, Hill's Science Diet, Purina Pro Plan, Blue Buffalo, Iams, dan banyak lagi. Kami menyediakan merek populer dan pilihan khusus untuk memenuhi semua kebutuhan diet.",
	},
	{
		question: 'Apakah ada tempat parkir di lokasi Anda?',
		answer: 'Ya, kami memiliki parkir gratis untuk pelanggan kami tepat di depan toko, memudahkan Anda berbelanja dengan hewan kesayangan Anda.',
	},
	{
		question: 'Bisakah saya membawa hewan saya ke dalam toko?',
		answer: 'Ya! Kami menyambut hewan yang berperilaku baik dan bertali kekang di toko kami. Ini adalah lingkungan ramah hewan di mana teman berbulu Anda dapat menjelajah dan Anda dapat memastikan produk cocok untuk mereka.',
	},
	{
		question: 'Apakah Anda menawarkan program loyalitas atau diskon?',
		answer: 'Ya! Tanyakan kepada staf kami tentang program loyalitas kami di mana Anda mendapatkan poin untuk setiap pembelian. Kami juga menawarkan promosi reguler, diskon musiman, dan penawaran khusus untuk pelanggan setia kami.',
	},
];

export function FAQSection() {
	const handleWhatsAppClick = () => {
		window.open('https://wa.me/6281234567890?text=Saya%20punya%20pertanyaan%20tentang%20layanan%20Anda', '_blank');
	};

	return (
		<section
			id="faq"
			className="py-16 md:py-24 bg-secondary/30">
			<div className="max-w-4xl mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">{'Pertanyaan yang Sering Diajukan'}</h2>
					<p className="text-lg text-muted-foreground text-pretty">{'Temukan jawaban cepat untuk pertanyaan umum. Tidak menemukan yang Anda cari? Hubungi kami langsung!'}</p>
				</div>

				<Accordion
					type="single"
					collapsible
					className="space-y-4">
					{faqs.map((faq, index) => (
						<AccordionItem
							key={index}
							value={`item-${index}`}
							className="bg-card border border-border rounded-lg px-6">
							<AccordionTrigger className="text-left hover:no-underline">
								<span className="font-semibold text-card-foreground pr-4">{faq.question}</span>
							</AccordionTrigger>
							<AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>

				<div className="mt-12 text-center bg-card border border-border rounded-2xl p-8">
					<h3 className="text-2xl font-bold text-card-foreground mb-3">{'Masih ada pertanyaan?'}</h3>
					<p className="text-muted-foreground mb-6">{'Tim kami siap membantu! Hubungi kami melalui WhatsApp untuk jawaban instan.'}</p>
					<Button
						size="lg"
						onClick={handleWhatsAppClick}
						className="bg-accent hover:bg-accent/90 text-accent-foreground">
						<MessageCircle className="mr-2 h-5 w-5" />
						{'Chat dengan Kami di WhatsApp'}
					</Button>
				</div>
			</div>
		</section>
	);
}
