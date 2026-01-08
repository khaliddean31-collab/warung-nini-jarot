'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Button } from './ui/Button';

export const FloatingWhatsapp = () => {
    const phoneNumber = "6281399556625";
    const message = encodeURIComponent("Halo Warung Nini Jarot, saya mau tanya stok produk");

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 1
            }}
            className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 pb-[env(safe-area-inset-bottom)]"
        >
            <motion.a
                href={`https://wa.me/${phoneNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="block"
            >
                <div className="relative group">
                    {/* Pulse effect */}
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75 group-hover:opacity-50 transition-opacity"></span>

                    <Button
                        variant="whatsapp"
                        size="icon"
                        className="h-14 w-14 md:h-16 md:w-16 rounded-full shadow-xl border-2 border-white hover:bg-[#25D366] active:bg-[#128C7E] transition-colors"
                        aria-label="Chat WhatsApp"
                    >
                        <MessageCircle className="h-8 w-8 md:h-9 md:w-9" strokeWidth={2.5} />
                    </Button>
                </div>
            </motion.a>
        </motion.div>
    );
};
