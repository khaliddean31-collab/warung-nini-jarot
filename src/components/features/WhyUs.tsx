import { Star, Truck, Heart, BadgeCheck } from 'lucide-react';
import { SectionWrapper } from '../layout/SectionWrapper';
import { ResponsiveContainer } from '../layout/ResponsiveContainer';

const benefits = [
    {
        icon: BadgeCheck,
        title: "Stok Lengkap",
        description: "Semua kebutuhan dapur dan harian tersedia di sini."
    },
    {
        icon: Star,
        title: "Harga Bersahabat",
        description: "Harga murah meriah, pas di kantong keluarga."
    },
    {
        icon: Heart,
        title: "Pelayanan Ramah",
        description: "Melayani dengan senyum dan kekeluargaan."
    },
    {
        icon: Truck,
        title: "Lokasi Strategis",
        description: "Mudah dijangkau di tengah pemukiman warga."
    }
];

export const WhyUs = () => {
    return (
        <SectionWrapper id="why-us" className="bg-white">
            <ResponsiveContainer>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Kenapa Belanja di Sini?</h2>
                    <p className="text-gray-600 text-lg">Kami berkomitmen memberikan yang terbaik untuk pelanggan setia Warung Nini Jarot.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {benefits.map((item, index) => (
                        <div key={index} className="bg-cream-light p-8 rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-6">
                                <item.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </ResponsiveContainer>
        </SectionWrapper>
    );
};
