                            'use client';

                            import { ProductCard } from '../ProductCard';
                            import { Button } from '../ui/Button';
                            import { SectionWrapper } from '../layout/SectionWrapper';
                            import { ResponsiveContainer } from '../layout/ResponsiveContainer';
                            import { MessageCircle } from 'lucide-react';

                            // Mock Data
                            const products = [
                                { name: "rokok sampoerna kretek", description: "Rokok legend di kalangan warga sekitar.", price: "Rp 19.000", imageSrc: "/images/rokok.jpg" },
                                { name: "Minyak Goreng Rizki 800 ML", description: "Minyak goreng berkualitas.", price: "Rp 18.000", imageSrc: "/images/minyak.jpeg" },
                                { name: "Gulaku 1kg", description: "Gula putih bersih berkualitas tinggi.", price: "Rp 16.000", imageSrc: "/images/gula.jpg" },
                                { name: "Telur Ayam Negri 1kg", description: "Telur Ayam Negri.", price: "Rp 33.000", imageSrc: "/images/telur.jpeg" },
                                { name: "Mie Instan Goreng Indomie", description: "Per dus isi 40 bungkus (Indomie per pcs Rp 4.000).", price: "Rp 122.000", imageSrc: "/images/mie.jpeg" },
                                { name: "Gas LPG 3kg", description: "Tabung melon (tukar).", price: "Rp 22.000", imageSrc: "/images/gas.jpg" },
                                { name: "Tepung Terigu 1kg", description: "Cocok untuk gorengan.", price: "Rp 12.000", imageSrc: "/images/tepung.jpg" },
                                { name: "Teh Gopek Slawi 40 Gr", description: "Teh Legend Di Kalangan Masyarakat.", price: "Rp 8.000", imageSrc: "/images/teh.jpg" },
                            ];

                            export const Products = () => {
                                return (
                                    <SectionWrapper id="products" className="bg-cream-light border-y border-[#efece3]">
                                        <ResponsiveContainer>
                                            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                                                <div className="max-w-xl">
                                                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Produk Unggulan</h2>
                                                    <p className="text-gray-600 text-lg">Kebutuhan pokok tersedia lengkap setiap hari dengan harga sedulur.</p>
                                                </div>
                                                <Button
                                                    variant="outline"
                                                    onClick={() => window.open('https://wa.me/6281399556625', '_blank')}
                                                    className="hidden md:flex"
                                                >
                                                    <MessageCircle className="mr-2 h-4 w-4" />
                                                    Lihat Semua via WA
                                                </Button>
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                                                {products.map((product, idx) => (
                                                    <ProductCard key={idx} {...product} />
                                                ))}
                                            </div>

                                            <div className="mt-8 md:hidden">
                                                <Button
                                                    variant="outline"
                                                    className="w-full"
                                                    onClick={() => window.open('https://wa.me/6281399556625', '_blank')}
                                                >
                                                    <MessageCircle className="mr-2 h-4 w-4" />
                                                    Lihat Semua via WA
                                                </Button>
                                            </div>
                                        </ResponsiveContainer>
                                    </SectionWrapper>
                                );
                            };
