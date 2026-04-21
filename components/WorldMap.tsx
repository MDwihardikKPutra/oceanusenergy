"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Info } from "lucide-react";

interface Marker {
    id: string;
    name: string;
    type: string;
    x: number; // percentage
    y: number; // percentage
    description: string;
}

const markers: Marker[] = [
    { id: "1", name: "Houston Deepwater", type: "Hub", x: 22, y: 42, description: "Advanced subsea robotics center" },
    { id: "2", name: "North Sea Alpha", type: "Hub", x: 47, y: 32, description: "Renewable energy coordination" },
    { id: "3", name: "Singapore Digital", type: "Refinery", x: 78, y: 58, description: "AI-driven supply chain hub" },
    { id: "4", name: "Brazil Offshore", type: "Hub", x: 32, y: 68, description: "Ultra-deepwater exploration" },
    { id: "5", name: "Gulf of Guinea", type: "Refinery", x: 48, y: 55, description: "Clean fuel production center" },
    { id: "6", name: "Middle East Solar", type: "Renewable", x: 58, y: 45, description: "Large-scale photovoltaic array" },
    { id: "7", name: "Western Australia", type: "Renewable", x: 82, y: 72, description: "Green hydrogen plant" },
    { id: "8", name: "Arctic Research", type: "Hub", x: 50, y: 20, description: "Zero-impact climate monitoring" },
];

export default function WorldMap() {
    const [hoveredMarker, setHoveredMarker] = useState<Marker | null>(null);

    return (
        <div className="relative w-full aspect-[16/9] bg-neutral-50 rounded-2xl ring-1 ring-neutral-200/60 overflow-hidden group/map select-none shadow-inner">
            {/* World Map SVG Background (Simplified) */}
            <svg
                viewBox="0 0 1000 500"
                className="w-full h-full fill-neutral-200/50 stroke-neutral-300/30 stroke-[0.5] transition-colors duration-500 group-hover/map:fill-neutral-200/80"
            >
                {/* Simplified World Path - This is a rough representation for aesthetic purposes */}
                <path d="M150,150 L200,100 L300,120 L350,200 L320,300 L250,350 L180,320 L150,250 Z" /> {/* Americas Rough */}
                <path d="M450,100 L550,80 L650,120 L700,200 L680,300 L550,350 L480,300 L450,200 Z" /> {/* Eurasia Rough */}
                <path d="M480,320 L550,350 L600,450 L500,480 L450,420 Z" /> {/* Africa Rough */}
                <path d="M750,350 L850,380 L880,450 L780,470 L750,420 Z" /> {/* Australia Rough */}
                
                {/* Connecting Lines (Subtle) */}
                <g className="opacity-10 group-hover/map:opacity-20 transition-opacity">
                    <line x1="250" y1="200" x2="500" y2="150" stroke="#1b7fb9" strokeDasharray="4 4" />
                    <line x1="500" y1="150" x2="750" y2="300" stroke="#1b7fb9" strokeDasharray="4 4" />
                    <line x1="250" y1="200" x2="750" y2="300" stroke="#1b7fb9" strokeDasharray="4 4" />
                </g>
            </svg>

            {/* Actually use a real high-quality SVG Map background via CSS to keep component clean */}
            <div 
                className="absolute inset-0 opacity-[0.07] grayscale contrast-125"
                style={{ 
                    backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')`,
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat'
                }}
            />

            {/* Markers */}
            <div className="absolute inset-0 pointer-events-none">
                {markers.map((marker) => (
                    <motion.button
                        key={marker.id}
                        className="absolute pointer-events-auto group/marker"
                        style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
                        onMouseEnter={() => setHoveredMarker(marker)}
                        onMouseLeave={() => setHoveredMarker(null)}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: parseFloat(marker.id) * 0.1, type: "spring" }}
                    >
                        {/* Pulse Effect */}
                        <div className="absolute -inset-2 rounded-full bg-[#1b7fb9]/20 animate-ping group-hover/marker:bg-[#1b7fb9]/40" />
                        
                        {/* Dot */}
                        <div className={`relative h-2.5 w-2.5 rounded-full ring-2 ring-white shadow-sm transition-all duration-300 ${
                            hoveredMarker?.id === marker.id ? 'bg-[#1b7fb9] scale-125' : 'bg-[#1b7fb9]/70'
                        }`} />

                        {/* Tooltip (Hover) */}
                        <AnimatePresence>
                            {hoveredMarker?.id === marker.id && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                    animate={{ opacity: 1, y: -8, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 rounded-xl bg-white shadow-xl ring-1 ring-black/5 z-50 pointer-events-none"
                                >
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="h-1.5 w-1.5 rounded-full bg-[#1b7fb9]" />
                                        <span className="text-[11px] font-bold text-neutral-900">{marker.name}</span>
                                    </div>
                                    <p className="text-[10px] text-neutral-500 leading-tight mb-2">{marker.description}</p>
                                    <div className="pt-2 border-t border-neutral-100 flex justify-between items-center">
                                        <span className="text-[9px] uppercase tracking-wider text-neutral-400 font-medium">{marker.type}</span>
                                        <Info className="h-2.5 w-2.5 text-neutral-300" />
                                    </div>
                                    {/* Arrow */}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-white" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                ))}
            </div>

            {/* Legend / Overlay */}
            <div className="absolute bottom-4 left-4 p-3 rounded-lg bg-white/80 backdrop-blur-md ring-1 ring-black/5 shadow-sm">
                <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-[#1b7fb9]" />
                        <span className="text-[10px] font-medium text-neutral-700">Major Operations</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-neutral-300" />
                        <span className="text-[10px] font-medium text-neutral-500">Planned Sites</span>
                    </div>
                </div>
            </div>

            {/* Coordinates Display */}
            <div className="absolute top-4 right-4 text-[9px] font-mono text-neutral-400 select-none hidden md:block">
                GLOBAL_COORD_SYSTEM active: [TRK_ENABLE]
            </div>
        </div>
    );
}
