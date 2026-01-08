import { SectionWrapper } from '../layout/SectionWrapper';
import { ResponsiveContainer } from '../layout/ResponsiveContainer';

export const About = () => {
    return (
        <SectionWrapper id="about" className="bg-white">
            <ResponsiveContainer className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="space-y-6 lg:space-y-8">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Tentang Warung Nini Jarot</h2>
                        <div className="w-120 h-1.5 bg-secondary rounded-full"></div>
                    </div>

                    <div className="text-gray-600 space-y-4 leading-relaxed text-lg">
                        <p>
                            Berdiri sejak tahun 1989, Warung Nini Jarot hadir dengan satu tujuan sederhana:
                            menjadi tetangga yang baik dengan menyediakan kebutuhan pokok berkualitas bagi warga sekitar.
                        </p>
                        <p>
                            Kami percaya bahwa belanja sembako tidak harus mahal dan ribet.
                            Dengan nilai kekeluargaan "Mboten Neko-Neko" (Tidak Macam-Macam),
                            kami menjamin kejujuran takaran, keaslian produk, dan keramahan pelayanan layaknya keluarga sendiri.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="p-6 bg-cream-light rounded-2xl border border-primary/10 text-center hover:shadow-sm transition-shadow">
                            <span className="block text-4xl font-bold text-primary mb-2">34+</span>
                            <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Tahun Melayani</span>
                        </div>
                        <div className="p-6 bg-cream-light rounded-2xl border border-primary/10 text-center hover:shadow-sm transition-shadow">
                            <span className="block text-4xl font-bold text-primary mb-2">100%</span>
                            <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Produk Asli</span>
                        </div>
                    </div>
                </div>

                <div className="relative aspect-video md:aspect-square bg-gray-100 rounded-3xl overflow-hidden shadow-xl transform rotate-2 hover:rotate-0 transition-all duration-500 group">
                {/* Image Container */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-primary/10 group-hover:scale-110 transition-transform duration-700">
                    <img 
                    src="./images/warung.jpg" 
                    alt="Foto Warung Mbah Gimin"
                    className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay opsional agar transisi lebih halus atau memberikan efek warna */}
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                </div>

                </ResponsiveContainer>
            </SectionWrapper>
        );
    };
