import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Kusuma',
    pet: 'Pemilik Golden Retriever',
    rating: 5,
    text: 'Toko Hewan Pawfect sangat membantu! Layanan groomingnya luar biasa, dan Max saya selalu pulang terlihat dan merasa hebat. Stafnya benar-benar peduli dengan setiap hewan.',
    date: '2 minggu lalu',
  },
  {
    name: 'Michael Tanoto',
    pet: 'Pemilik kucing',
    rating: 5,
    text: 'Toko hewan terbaik di kota! Mereka memiliki semua yang saya butuhkan untuk dua kucing saya, dan harganya sangat wajar. Stafnya berpengetahuan dan selalu siap membantu.',
    date: '1 bulan lalu',
  },
  {
    name: 'Sari Wijaya',
    pet: 'Pemilik Labrador',
    rating: 5,
    text: 'Saya menghargai kualitas produk yang mereka jual dan layanan grooming profesional. Anjing saya suka ke sana! Konsultasi dokter hewannya juga sangat membantu.',
    date: '3 minggu lalu',
  },
  {
    name: 'Budi Santoso',
    pet: 'Pemilik banyak hewan',
    rating: 5,
    text: 'Ini adalah toko hewan pilihan kami untuk semua hewan peliharaan kami. Dari makanan hingga aksesoris hingga grooming, mereka punya semuanya. Sangat praktis!',
    date: '1 minggu lalu',
  },
  {
    name: 'Lisa Pratiwi',
    pet: 'Pemilik Beagle',
    rating: 5,
    text: 'Tim Pawfect luar biasa! Mereka ingat nama dan preferensi anjing saya. Groomingnya sangat bagus, dan saya sangat mempercayai mereka dengan hewan kesayangan saya.',
    date: '2 bulan lalu',
  },
  {
    name: 'James Hartono',
    pet: 'Pemilik kucing Persia',
    rating: 5,
    text: 'Pelayanan profesional, fasilitas bersih, dan harga bagus. Kucing saya butuh makanan diet khusus, dan mereka memesankannya tanpa masalah. Sangat direkomendasikan!',
    date: '3 minggu lalu',
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {'Apa Kata Pemilik Hewan Tentang Kami'}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {'Jangan hanya percaya kata kami—dengarkan dari pelanggan bahagia kami dan hewan kesayangan mereka.'}
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-2xl font-bold text-foreground">{'4.9'}</span>
            <span className="text-muted-foreground">{'(200+ ulasan)'}</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-card-foreground mb-4 leading-relaxed">
                {`"${testimonial.text}"`}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <div className="font-bold text-card-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.pet}</div>
                </div>
                <div className="text-sm text-muted-foreground">{testimonial.date}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">{'200+'}</div>
            <div className="text-sm text-muted-foreground">{'Ulasan Bintang 5'}</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">{'98%'}</div>
            <div className="text-sm text-muted-foreground">{'Tingkat Kepuasan'}</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">{'5000+'}</div>
            <div className="text-sm text-muted-foreground">{'Pelanggan Bahagia'}</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">{'10+'}</div>
            <div className="text-sm text-muted-foreground">{'Tahun Melayani'}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
