'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, MessageCircle } from 'lucide-react'
import Image from 'next/image'

export function HeroSection() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/6281234567890?text=Halo%20Toko%20Hewan%20Pawfect', '_blank')
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative overflow-hidden gradient-bg-dark">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              {'🐾 Mitra Terpercaya Perawatan Hewan Kesayangan Anda'}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              {'Semua Kebutuhan Hewan Kesayangan Anda di Satu Tempat'}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              {'Makanan hewan premium, aksesoris, grooming profesional, dan layanan kesehatan ahli. Kami memberikan perawatan lengkap untuk anggota keluarga berbulu Anda dengan penuh kasih sayang dan keahlian.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('services')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground group"
              >
                {'Jelajahi Layanan'}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleWhatsAppClick}
                className="group bg-transparent"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {'Chat via WhatsApp'}
              </Button>
            </div>
            <div className="flex flex-wrap gap-8 pt-6 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">{'10+'}</div>
                <div className="text-sm text-muted-foreground">{'Tahun Pengalaman'}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">{'5000+'}</div>
                <div className="text-sm text-muted-foreground">{'Hewan Bahagia'}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">{'4.9'}</div>
                <div className="text-sm text-muted-foreground">{'Rating Rata-rata'}</div>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl glow-primary border border-primary/20">
              <Image
                src="/hero-pet-shop.jpg"
                alt="Pawfect Pet Shop - Professional pet care services"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-xl glow-accent">
              <div className="text-2xl font-bold">{'Buka Sekarang!'}</div>
              <div className="text-sm opacity-90">{'Kunjungi kami hari ini'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
