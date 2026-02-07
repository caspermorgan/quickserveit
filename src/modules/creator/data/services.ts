import { Video, Smartphone, Layers, Lightbulb } from 'lucide-react';

// TypeScript Interface
export interface CreatorService {
    id: string;
    icon: any;
    title: string;
    tagline: string;
    description: string;
    fullDescKey: string;
    features: string[];
    stepsKey: string[];
    needsKey: string[];
    timelineKey: string;
    artifact: string;
    color: string;
    software?: string[];
    whatsappTemplate: string;
}

// Data Constant
export const CREATOR_SERVICES_DATA: CreatorService[] = [
    {
        id: 'video-editing',
        icon: Video,
        title: 'Premium Video Production',
        tagline: 'Cinematic. Engaging. Professional.',
        description: 'High-quality long-form video editing for YouTube creators.',
        fullDescKey: 'Professional video editing services including color grading, sound design, motion graphics, and storytelling. We transform raw footage into polished, engaging content that keeps viewers watching.',
        features: ['Color Grading', 'Sound Design', 'Motion Graphics', 'Fast Turnaround'],
        stepsKey: ['Footage Review & Planning', 'Rough Cut Assembly', 'Fine Editing & Effects', 'Final Review & Delivery'],
        needsKey: ['Raw video footage', 'Brand assets (logos, colors)', 'Reference videos', 'Delivery deadline'],
        timelineKey: '3-5 days per video',
        artifact: 'video',
        color: 'from-red-500 to-pink-500',
        software: ['Premiere Pro', 'DaVinci Resolve', 'Audition'],
        whatsappTemplate: 'Hi! I need Premium Video Production services.'
    },
    {
        id: 'shorts-reels',
        icon: Smartphone,
        title: 'Viral Shorts & Reels',
        tagline: 'Hook. Retain. Convert.',
        description: 'Repurpose your content into high-retention vertical videos.',
        fullDescKey: 'Transform long-form content into viral-ready shorts and reels. We optimize hooks, add captions and SFX, and format for each platform to maximize reach and engagement.',
        features: ['Hook Optimization', 'Captions & SFX', 'Platform-Specific', 'Batch Production'],
        stepsKey: ['Content Analysis', 'Clip Selection & Editing', 'Platform Optimization', 'Batch Delivery'],
        needsKey: ['Source video content', 'Platform preferences', 'Brand style guide', 'Quantity needed'],
        timelineKey: '1-2 days for 10 shorts',
        artifact: 'shorts',
        color: 'from-purple-500 to-indigo-500',
        software: ['After Effects', 'Premiere Pro'],
        whatsappTemplate: 'Hi! I need Viral Shorts & Reels editing.'
    },
    {
        id: 'motion-graphics',
        icon: Layers,
        title: 'Motion Graphics & VFX',
        tagline: 'Elevate Your Brand.',
        description: 'Custom intros, outros, and motion graphics that stand out.',
        fullDescKey: 'Create stunning motion graphics, animated logos, intros, outros, and visual effects that elevate your brand identity and make your content unforgettable.',
        features: ['Brand Identity', '3D Elements', 'Custom Animations', 'Unlimited Revisions'],
        stepsKey: ['Concept Development', 'Design & Animation', 'Review & Refinement', 'Final Delivery'],
        needsKey: ['Brand assets & guidelines', 'Reference examples', 'Video specifications', 'Usage requirements'],
        timelineKey: '5-7 days per project',
        artifact: 'motion',
        color: 'from-cyan-500 to-blue-500',
        software: ['After Effects', 'Blender', 'Illustrator'],
        whatsappTemplate: 'Hi! I need Motion Graphics & VFX services.'
    },
    {
        id: 'thumbnails',
        icon: Lightbulb,
        title: 'Thumbnails & Strategy',
        tagline: 'Click. Watch. Subscribe.',
        description: 'High-CTR thumbnail design with content strategy consulting.',
        fullDescKey: 'Data-driven thumbnail design combined with content strategy consulting. We analyze competitors, test designs, and provide script feedback to maximize your video performance.',
        features: ['A/B Testing', 'Competitor Analysis', 'Script Consulting', 'Trend Research'],
        stepsKey: ['Video Analysis', 'Concept Design', 'A/B Variants', 'Performance Tracking'],
        needsKey: ['Video topic & script', 'Channel branding', 'Target audience info', 'Competitor channels'],
        timelineKey: '24-48 hours',
        artifact: 'thumbnail',
        color: 'from-amber-500 to-yellow-500',
        software: ['Photoshop', 'Midjourney', 'Notion'],
        whatsappTemplate: 'Hi! I need Thumbnail Design & Strategy services.'
    }
];
