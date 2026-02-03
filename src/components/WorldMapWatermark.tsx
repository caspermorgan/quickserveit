import { motion } from 'framer-motion';

const WorldMapWatermark = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
            <svg
                viewBox="0 0 1000 500"
                className="w-full h-full"
                style={{
                    filter: 'drop-shadow(0 0 20px rgba(234, 179, 8, 0.3))',
                }}
            >
                {/* Simplified world map outline in gold */}
                <g stroke="#EAB308" strokeWidth="0.5" fill="none">
                    {/* North America */}
                    <path d="M 150 100 Q 180 80 220 90 L 250 110 L 240 150 L 200 180 L 160 170 Z" />
                    <path d="M 200 180 L 220 220 L 180 240 L 150 210 Z" />

                    {/* South America */}
                    <path d="M 220 250 L 240 280 L 250 320 L 230 350 L 210 340 L 200 300 Z" />

                    {/* Europe */}
                    <path d="M 450 80 L 480 70 L 510 85 L 520 110 L 500 130 L 470 120 Z" />

                    {/* Africa */}
                    <path d="M 480 150 L 520 160 L 540 200 L 530 260 L 500 280 L 470 260 L 460 200 Z" />

                    {/* Asia */}
                    <path d="M 550 90 L 620 80 L 680 100 L 720 130 L 700 170 L 650 180 L 600 160 L 570 140 Z" />
                    <path d="M 650 180 L 680 200 L 690 240 L 670 260 L 640 250 Z" />

                    {/* India (highlighted) */}
                    <motion.path
                        d="M 640 180 L 660 190 L 670 220 L 660 240 L 640 235 L 630 210 Z"
                        stroke="#F59E0B"
                        strokeWidth="1"
                        fill="rgba(234, 179, 8, 0.05)"
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />

                    {/* Australia */}
                    <path d="M 750 280 L 800 290 L 820 320 L 800 340 L 760 330 Z" />

                    {/* Antarctica */}
                    <path d="M 200 420 L 800 420 L 780 450 L 220 450 Z" />

                    {/* Grid lines - Latitude */}
                    <line x1="0" y1="125" x2="1000" y2="125" strokeDasharray="5,5" opacity="0.3" />
                    <line x1="0" y1="250" x2="1000" y2="250" strokeDasharray="5,5" opacity="0.3" />
                    <line x1="0" y1="375" x2="1000" y2="375" strokeDasharray="5,5" opacity="0.3" />

                    {/* Grid lines - Longitude */}
                    <line x1="250" y1="0" x2="250" y2="500" strokeDasharray="5,5" opacity="0.3" />
                    <line x1="500" y1="0" x2="500" y2="500" strokeDasharray="5,5" opacity="0.3" />
                    <line x1="750" y1="0" x2="750" y2="500" strokeDasharray="5,5" opacity="0.3" />
                </g>
            </svg>
        </div>
    );
};

export default WorldMapWatermark;
