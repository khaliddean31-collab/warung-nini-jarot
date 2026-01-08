'use client';


import { Button } from './ui/Button';

import { MessageCircle } from 'lucide-react';

import Image from 'next/image';

import { motion } from 'framer-motion';


interface ProductCardProps {

name: string;

description: string;

imageSrc?: string; // Optional URL, fallback to placeholder

price?: string; // Optional price string

}


export const ProductCard = ({ name, description, imageSrc, price }: ProductCardProps) => {

// Generate WA Link

const message = encodeURIComponent(`Halo Warung Nini Jarot, apakah stok ${name} tersedia?`);

const waLink = `https://wa.me/6281399556625?text=${message}`;


return (

<motion.div

whileHover={{ y: -5 }}

className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col h-full"

>

<div className="relative h-48 bg-gray-100 flex items-center justify-center overflow-hidden">

{imageSrc ? (

<Image

src={imageSrc}

alt={name}

fill

className="object-cover group-hover:scale-110 transition-transform duration-500"

sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

/>

) : (

<div className="text-gray-400 font-medium">No Image</div>

)}

{/* Overlay CTA on hover (Desktop) */}

<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">

<Button variant="whatsapp" size="sm" onClick={() => window.open(waLink, '_blank')}>

<MessageCircle className="mr-2 h-4 w-4" />

Tanya Stok

</Button>

</div>

</div>


<div className="p-4 flex flex-col flex-grow">

<h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">{name}</h3>

<p className="text-sm text-gray-500 mt-1 flex-grow">{description}</p>


{price && (

<div className="mt-3 text-primary font-semibold">

{price}

</div>

)}


<div className="mt-4 pt-4 border-t border-gray-50 md:hidden">

{/* Mobile Button always visible */}

<Button variant="outline" className="w-full" onClick={() => window.open(waLink, '_blank')}>

<MessageCircle className="mr-2 h-4 w-4" />

Tanya via WA

</Button>

</div>

</div>

</motion.div>

);

}; 