import { Video, Zap, Palette, ShieldCheck } from 'lucide-react';

// TypeScript Interfaces
export interface CreatorPricingPlan {
    name: string;
    price?: string;
    desc?: string;
    subtitle?: string;
    features?: string[];
    items?: Array<{ name: string; desc: string; price: string }>;
    note?: string;
}

export interface CreatorPricingTab {
    id: number;
    icon: any;
    label: string;
    title?: string;
    description?: string;
    isGrid?: boolean;
    plans?: CreatorPricingPlan[];
    items?: Array<{ name: string; desc: string; price: string }>;
    policies?: Array<{
        title: string;
        items: Array<{ label: string; desc: string }>;
    }>;
    deliveryNote?: string;
    highlight: string;
}

// Data Factory Function (accepts translation function)
export const getCreatorPricingData = (t: (key: string) => string): CreatorPricingTab[] => [
    {
        id: 0,
        icon: Video,
        label: t('pricingCreatorTab1Label'),
        isGrid: true,
        plans: [
            {
                name: t('pricingCreatorPlan1Name'),
                price: t('pricingCreatorPlan1Price'),
                desc: t('pricingCreatorPlan1Desc'),
                features: [t('pricingCreatorPlan1Feature1'), t('pricingCreatorPlan1Feature2'), t('pricingCreatorPlan1Feature3')],
                note: t('pricingCreatorPlan1Note')
            },
            {
                name: t('pricingCreatorPlan2Name'),
                price: t('pricingCreatorPlan2Price'),
                desc: t('pricingCreatorPlan2Desc'),
                features: [t('pricingCreatorPlan2Feature1'), t('pricingCreatorPlan2Feature2'), t('pricingCreatorPlan2Feature3')],
                note: t('pricingCreatorPlan2Note')
            },
            {
                name: t('pricingCreatorPlan3Name'),
                price: t('pricingCreatorPlan3Price'),
                desc: t('pricingCreatorPlan3Desc'),
                features: [t('pricingCreatorPlan3Feature1'), t('pricingCreatorPlan3Feature2'), t('pricingCreatorPlan3Feature3')],
                note: t('pricingCreatorPlan3Note')
            },
            {
                name: t('pricingCreatorPlan4Name'),
                price: t('pricingCreatorPlan4Price'),
                desc: t('pricingCreatorPlan4Desc'),
                features: [t('pricingCreatorPlan4Feature1'), t('pricingCreatorPlan4Feature2'), t('pricingCreatorPlan4Feature3')],
                note: t('pricingCreatorPlan4Note')
            }
        ],
        highlight: t('pricingCreatorTab1Highlight')
    },
    {
        id: 1,
        icon: Zap,
        label: t('pricingCreatorTab2Label'),
        title: t('pricingCreatorTab2Title'),
        description: t('pricingCreatorTab2Desc'),
        items: [
            { name: t('pricingCreatorItem1Name'), desc: t('pricingCreatorItem1Desc'), price: t('pricingCreatorItem1Price') },
            { name: t('pricingCreatorItem2Name'), desc: t('pricingCreatorItem2Desc'), price: t('pricingCreatorItem2Price') }
        ],
        highlight: t('pricingCreatorTab2Highlight')
    },
    {
        id: 2,
        icon: Palette,
        label: t('pricingCreatorTab3Label'),
        isGrid: true,
        plans: [
            {
                name: t('pricingCreatorDesign1Name'),
                subtitle: t('pricingCreatorDesign1Subtitle'),
                items: [
                    { name: t('pricingCreatorDesign1Item1Name'), desc: t('pricingCreatorDesign1Item1Desc'), price: t('pricingCreatorDesign1Item1Price') },
                    { name: t('pricingCreatorDesign1Item2Name'), desc: t('pricingCreatorDesign1Item2Desc'), price: t('pricingCreatorDesign1Item2Price') },
                    { name: t('pricingCreatorDesign1Item3Name'), desc: t('pricingCreatorDesign1Item3Desc'), price: t('pricingCreatorDesign1Item3Price') }
                ],
                note: t('pricingCreatorDesign1Note')
            },
            {
                name: t('pricingCreatorDesign2Name'),
                subtitle: t('pricingCreatorDesign2Subtitle'),
                items: [
                    { name: t('pricingCreatorDesign2Item1Name'), desc: t('pricingCreatorDesign2Item1Desc'), price: t('pricingCreatorDesign2Item1Price') },
                    { name: t('pricingCreatorDesign2Item2Name'), desc: t('pricingCreatorDesign2Item2Desc'), price: t('pricingCreatorDesign2Item2Price') }
                ],
                note: t('pricingCreatorDesign2Note')
            }
        ],
        highlight: t('pricingCreatorTab3Highlight')
    },
    {
        id: 3,
        icon: ShieldCheck,
        label: t('pricingCreatorTab4Label'),
        title: t('pricingCreatorTab4Title'),
        description: t('pricingCreatorTab4Desc'),
        policies: [
            {
                title: t('pricingCreatorPolicy1Title'),
                items: [
                    { label: t('pricingCreatorPolicy1Item1Label'), desc: t('pricingCreatorPolicy1Item1Desc') },
                    { label: t('pricingCreatorPolicy1Item2Label'), desc: t('pricingCreatorPolicy1Item2Desc') }
                ]
            },
            {
                title: t('pricingCreatorPolicy2Title'),
                items: [
                    { label: t('pricingCreatorPolicy2Item1Label'), desc: t('pricingCreatorPolicy2Item1Desc') },
                    { label: t('pricingCreatorPolicy2Item2Label'), desc: t('pricingCreatorPolicy2Item2Desc') }
                ]
            }
        ],
        deliveryNote: t('pricingCreatorDeliveryNote'),
        highlight: t('pricingCreatorTab4Highlight')
    }
];
