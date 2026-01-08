'use client';

import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { MessageCircle, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { SectionWrapper } from '../layout/SectionWrapper';
import { ResponsiveContainer } from '../layout/ResponsiveContainer';

export const Hero = () => {
    return (
        <SectionWrapper className="relative min-h-[90vh] flex items-center pt-24 md:pt-32 overflow-hidden bg-cream-light">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f2efe9] -z-10 rounded-l-full translate-x-1/2 opacity-50 hidden md:block" />

            {/* Perubahan di sini: grid-cols-1 agar tidak terbagi dua kolom di desktop */}
            <ResponsiveContainer className="grid grid-cols-1 items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }} // Ubah x menjadi y agar animasi muncul dari bawah ke atas (lebih cocok untuk center)
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 md:space-y-8 text-center flex flex-col items-center" // Tambahkan flex-col dan items-center
                >
                    <div className="flex flex-col items-center text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 text-green-700 font-medium text-xs md:text-sm border border-green-100 mx-auto">
                            <span>👋</span>
                            <span>Sugeng Rawuh di Warung Nini Jarot</span>
                        </div>

                        {/* Title */}
                        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                            Belanja Hemat <br />
                            <span className="text-primary mt-2 block">Dekat di Hati</span>
                        </h1>

                        {/* Paragraph */}
                        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed mx-auto">
                            Toko sembako terpercaya untuk warga Desa Penimbun.
                            Lengkap, murah, dan siap melayani kebutuhan harian Anda.
                        </p>
                    </div>

                    {/* Buttons: Perubahan di justify-center */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center items-center w-full">
                        <Button 
                            size="lg" 
                            variant="whatsapp" 
                            onClick={() => window.open('https://wa.me/6281399556625', '_blank')} 
                            className="w-full sm:w-auto text-base"
                        >
                            <MessageCircle className="mr-2 h-5 w-5" />
                            Tanya Stok via WA
                        </Button>
                        <Link href="#products" className="w-full sm:w-auto">
                            <Button size="lg" variant="outline" className="w-full text-base">
                                Lihat Produk
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </ResponsiveContainer>
        </SectionWrapper>
    );
};
