import Link from 'next/link';
import { ShoppingBag, Star } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-[#1B4D3E] text-white py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <ShoppingBag className="text-cream" />
                            <h3 className="text-xl font-bold font-serif text-cream">Warung Nini Jarot</h3>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                            Toko sembako terpercaya untuk warga Desa Penimbun.
                            Menyediakan kebutuhan harian lengkap dengan harga sedulur.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-cream">Navigasi</h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li><Link href="/" className="hover:text-cream transition-colors">Beranda</Link></li>
                            <li><Link href="#about" className="hover:text-cream transition-colors">Tentang Kami</Link></li>
                            <li><Link href="#products" className="hover:text-cream transition-colors">Produk</Link></li>
                            <li><Link href="#contact" className="hover:text-cream transition-colors">Kontak</Link></li>
                        </ul>
                    </div>

                    {/* Contact - Short */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-cream">Hubungi Kami</h4>
                        <p className="text-gray-300 text-sm mb-2">Siap melayani kebutuhan Anda.</p>
                        <p className="text-gray-300 text-sm font-mono">+62 813-9955-6625 (WhatsApp Only)</p>
                        <p className="text-gray-300 text-sm mt-2">Jl. Poh Kumbang - Penimbun, Prapatan, Penimbun, Kec. Karanggayam, Kabupaten Kebumen, Jawa Tengah</p>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 text-center text-xs text-gray-400">
                    <p>Create By Dean </p>
                </div>
            </div>
        </footer>
    );
};
