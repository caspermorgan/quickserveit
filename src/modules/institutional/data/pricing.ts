import { FileText, Database, ShieldCheck } from 'lucide-react';

// TypeScript Interfaces
export interface PricingItem {
    name: string;
    desc: string;
    price: string;
}

export interface PricingPolicy {
    title: string;
    items: Array<{ label: string; desc: string }>;
}

export interface InstitutionalPricingTab {
    id: number;
    icon: any;
    label: string;
    title?: string;
    description?: string;
    items?: PricingItem[];
    policies?: PricingPolicy[];
    highlight: string;
}

// Data Factory Function (accepts translation function)
export const getInstitutionalPricingData = (t: (key: string) => string): InstitutionalPricingTab[] => [
    {
        id: 0,
        icon: FileText,
        label: t('pricingInstTab1Label'),
        title: t('pricingInstTab1Title'),
        description: t('pricingInstTab1Desc'),
        items: [
            { name: t('pricingInstItem1Name'), desc: t('pricingInstItem1Desc'), price: t('pricingInstItem1Price') },
            { name: t('pricingInstItem2Name'), desc: t('pricingInstItem2Desc'), price: t('pricingInstItem2Price') },
            { name: t('pricingInstItem3Name'), desc: t('pricingInstItem3Desc'), price: t('pricingInstItem3Price') }
        ],
        highlight: t('pricingInstTab1Highlight')
    },
    {
        id: 1,
        icon: Database,
        label: t('pricingInstTab2Label'),
        title: t('pricingInstTab2Title'),
        description: t('pricingInstTab2Desc'),
        items: [
            { name: t('pricingInstItem4Name'), desc: t('pricingInstItem4Desc'), price: t('pricingInstItem4Price') },
            { name: t('pricingInstItem5Name'), desc: t('pricingInstItem5Desc'), price: t('pricingInstItem5Price') },
            { name: t('pricingInstItem6Name'), desc: t('pricingInstItem6Desc'), price: t('pricingInstItem6Price') },
            { name: t('pricingInstItem7Name'), desc: t('pricingInstItem7Desc'), price: t('pricingInstItem7Price') }
        ],
        highlight: t('pricingInstTab2Highlight')
    },
    {
        id: 2,
        icon: ShieldCheck,
        label: t('pricingInstTab3Label'),
        title: t('pricingInstTab3Title'),
        description: t('pricingInstTab3Desc'),
        policies: [
            {
                title: t('pricingInstPolicy1Title'),
                items: [
                    { label: t('pricingInstPolicy1Item1Label'), desc: t('pricingInstPolicy1Item1Desc') },
                    { label: t('pricingInstPolicy1Item2Label'), desc: t('pricingInstPolicy1Item2Desc') }
                ]
            },
            {
                title: t('pricingInstPolicy2Title'),
                items: [
                    { label: t('pricingInstPolicy2Item1Label'), desc: t('pricingInstPolicy2Item1Desc') },
                    { label: t('pricingInstPolicy2Item2Label'), desc: t('pricingInstPolicy2Item2Desc') }
                ]
            }
        ],
        highlight: t('pricingInstTab3Highlight')
    }
];
