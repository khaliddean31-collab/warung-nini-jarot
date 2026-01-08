'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Button } from './Button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { ResponsiveContainer } from '../layout/ResponsiveContainer';

const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Produk', href: '#products' },
    { name: 'Keunggulan', href: '#why-us' },
    { name: 'Kontak', href: '#contact' },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-40 transition-all duration-300 border-b",
                scrolled
                    ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-100 py-3"
                    : "bg-transparent border-transparent py-4"
            )}
        >
            <ResponsiveContainer className="flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5 group relative z-50">
                    <div className="bg-primary p-2 rounded-lg text-white group-hover:bg-primary/90 transition-colors shadow-sm">
                        <ShoppingBag size={22} className="shrink-0" />
                    </div>
                    <span className="text-lg md:text-xl font-bold tracking-tight text-primary">
                        Warung Nini Jarot
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-700 hover:text-primary transition-colors hover:bg-gray-50 px-3 py-2 rounded-md"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button
                        variant="whatsapp"
                        size="sm"
                        onClick={() => window.open('https://wa.me/6281399556625', '_blank')}
                        className="shadow-md hover:shadow-lg transition-shadow"
                    >
                        Pesan Sekarang
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-gray-700 hover:text-primary active:bg-gray-100 rounded-lg relative z-50"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Menu"
                >
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </ResponsiveContainer>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="absolute top-0 left-0 w-full bg-white shadow-xl border-b border-gray-100 md:hidden pt-20 pb-6"
                    >
                        <div className="container mx-auto px-4 flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-gray-800 hover:text-primary hover:bg-gray-50 px-4 py-3 rounded-xl transition-all"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <hr className="my-2 border-gray-100" />
                            <Button
                                variant="whatsapp"
                                className="w-full mt-2"
                                size="lg"
                                onClick={() => window.open('https://wa.me/6281399556625', '_blank')}
                            >
                                Chat WhatsApp
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
