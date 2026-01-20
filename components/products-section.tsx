'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MessageCircle } from 'lucide-react'

const productCategories = [
  {
    category: 'Makanan Anjing',
    items: ['Makanan kering premium', 'Makanan basah & camilan', 'Nutrisi anak anjing', 'Formula anjing senior'],
    badge: 'Populer',
  },
  {
    category: 'Makanan Kucing',
    items: ['Makanan kering', 'Varietas makanan basah', 'Makanan anak kucing', 'Kontrol hairball'],
    badge: 'Terlaris',
  },
  {
    category: 'Aksesoris Hewan',
    items: ['Kalung & harness', 'Tali kekang', 'Tag ID', 'Alat grooming'],
    badge: 'Baru',
  },
  {
    category: 'Mainan & Hiburan',
    items: ['Mainan interaktif', 'Mainan kunyah', 'Mainan lempar', 'Garukan kucing'],
    badge: null,
  },
  {
    category: 'Kesehatan & Kebugaran',
    items: ['Vitamin & suplemen', 'Kontrol kutu & tungau', 'Perawatan gigi', 'Perlengkapan pertolongan pertama'],
    badge: null,
  },
  {
    category: 'Kenyamanan & Tempat Tidur',
    items: ['Tempat tidur hewan', 'Selimut', 'Kandang angkut', 'Kandang & kennel'],
    badge: null,
  },
]

const brands = [
  'Royal Canin',
  'Hill\'s Science Diet',
  'Purina Pro Plan',
  'Blue Buffalo',
  'Iams',
  'Pedigree',
  'Whiskas',
  'Nutro',
]

export function ProductsSection() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/6281234567890?text=Saya%20tertarik%20dengan%20produk%20Anda', '_blank')
  }

  return (
    <section id="products" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {'Produk & Perlengkapan Hewan Premium'}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {'Belanja koleksi lengkap produk hewan berkualitas dari merek terpercaya. Semua yang Anda butuhkan untuk menjaga hewan Anda bahagia dan sehat.'}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {productCategories.map((product, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-card-foreground">{product.category}</h3>
                {product.badge && (
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {product.badge}
                  </Badge>
                )}
              </div>
              <ul className="space-y-2">
                {product.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Brands section */}
        <div className="bg-secondary/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-foreground mb-6">
            {'Merek Terpercaya yang Kami Sediakan'}
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-background rounded-lg border border-border text-foreground font-medium"
              >
                {brand}
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              {'Tanya Tentang Produk'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
