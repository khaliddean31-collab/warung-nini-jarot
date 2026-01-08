'use client';

import { MapPin, Clock, Phone } from 'lucide-react';
import { Button } from '../ui/Button';
import { SectionWrapper } from '../layout/SectionWrapper';
import { ResponsiveContainer } from '../layout/ResponsiveContainer';

export const Contact = () => {
    return (
        <SectionWrapper id="contact" className="bg-primary text-white">
            <ResponsiveContainer>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Mampir ke Warung</h2>
                    <p className="text-green-100 text-lg">Kami siap melayani kebutuhan Anda setiap hari.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    {/* Location */}
                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
                        <div className="bg-white/10 p-4 rounded-full mb-6 text-cream">
                            <MapPin size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Lokasi</h3>
                        <p className="text-gray-300 leading-relaxed">
                            Jl. Poh Kumbang - Penimbun, Prapatan<br />
                            Penimbun, Kec. Karanggayam, Kabupaten Kebumen, Jawa Tengah<br />
                            54365
                        </p>
                    </div>

                    {/* Hours */}
                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
                        <div className="bg-white/10 p-4 rounded-full mb-6 text-cream">
                            <Clock size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Jam Buka</h3>
                        <div className="space-y-2 text-gray-300">
                            <p>Senin - Sabtu: 06.00 - 21.00</p>
                            <p>Minggu: 07.00 - 20.00</p>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
                        <div className="bg-white/10 p-4 rounded-full mb-6 text-cream">
                            <Phone size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Kontak</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Butuh diantar? Atau tanya stok?<br />
                            Chat kami langsung!
                        </p>
                        <Button variant="whatsapp" className="w-full shadow-lg" onClick={() => window.open('https://wa.me/6281399556625', '_blank')}>
                            Chat WhatsApp Sekarang
                        </Button>
                    </div>
                </div>
            </ResponsiveContainer>
        </SectionWrapper>
    );
};
