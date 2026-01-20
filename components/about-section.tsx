import { Award, Heart, Shield, Sparkles } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {'Mengapa Pemilik Hewan Memilih Toko Hewan Pawfect'}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {'Kami lebih dari sekadar toko hewan—kami adalah komunitas yang berdedikasi pada kesehatan, kebahagiaan, dan kesejahteraan hewan kesayangan Anda.'}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-card-foreground mb-2">{'Tim Ahli'}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {'Profesional bersertifikat dengan pengalaman 10+ tahun dalam perawatan hewan'}
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-card-foreground mb-2">{'Produk Berkualitas'}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {'Merek premium dan perlengkapan yang disetujui dokter hewan untuk keamanan hewan Anda'}
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-card-foreground mb-2">{'Pelayanan Penuh Perhatian'}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {'Perhatian personal dan cinta kasih tulus untuk setiap hewan yang kami layani'}
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-card-foreground mb-2">{'Fasilitas Bersih'}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {'Ruangan modern dan higienis yang dirancang untuk kenyamanan hewan Anda'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
