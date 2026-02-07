import { FileText, Database, GraduationCap, Calendar } from 'lucide-react';

// TypeScript Interface
export interface InstitutionalService {
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
    whatsappTemplate: string;
}

// Data Constant
export const INSTITUTIONAL_SERVICES_DATA: InstitutionalService[] = [
    {
        id: 'exam-docs',
        icon: FileText,
        title: 'Exam Documentation',
        tagline: 'Error-Free. On Time. Every Time.',
        description: 'Professional typing and formatting of examination papers with strict quality protocols.',
        fullDescKey: 'Professional typing, formatting, and quality assurance for all types of examination papers. We handle everything from question papers to answer sheets with zero-error tolerance and strict confidentiality.',
        features: ['350+ Papers Delivered', 'Zero Error Tolerance', '24-48hr Turnaround', 'Confidential Handling'],
        stepsKey: ['Document Receipt & Analysis', 'Professional Typing & Formatting', 'Multi-Level Quality Check', 'Secure Delivery'],
        needsKey: ['Original documents or clear scans', 'Formatting specifications', 'Delivery deadline', 'Contact information'],
        timelineKey: '24-48 hours',
        artifact: 'exam',
        color: 'from-blue-500 to-cyan-500',
        whatsappTemplate: 'Hi! I need help with Exam Documentation services.'
    },
    {
        id: 'udise',
        icon: Database,
        title: 'UDISE+ Management',
        tagline: 'Accurate Data. Seamless Compliance.',
        description: 'Complete UDISE+ portal data entry and management for educational institutions.',
        fullDescKey: 'End-to-end UDISE+ portal management including data entry, verification, updates, and compliance reporting. We ensure your institution meets all government requirements with accurate, timely submissions.',
        features: ['Real-time Updates', 'Compliance Assured', 'Dedicated Support', 'Deadline Management'],
        stepsKey: ['Data Collection & Verification', 'Portal Entry & Validation', 'Compliance Check', 'Submission & Reporting'],
        needsKey: ['Student enrollment data', 'Staff information', 'Infrastructure details', 'Previous UDISE records'],
        timelineKey: '3-5 business days',
        artifact: 'udise',
        color: 'from-purple-500 to-pink-500',
        whatsappTemplate: 'Hi! I need assistance with UDISE+ Management.'
    },
    {
        id: 'scholarships',
        icon: GraduationCap,
        title: 'Scholarship Processing',
        tagline: 'Maximize Student Success.',
        description: 'End-to-end scholarship application support and documentation.',
        fullDescKey: 'Complete scholarship application assistance from documentation to biometric verification. We help maximize student success rates with expert guidance through every step of the scholarship process.',
        features: ['Application Filing', 'Document Verification', 'Status Tracking', 'Biometric Support'],
        stepsKey: ['Eligibility Assessment', 'Document Preparation', 'Application Submission', 'Follow-up & Tracking'],
        needsKey: ['Student academic records', 'Income certificates', 'Caste certificates (if applicable)', 'Bank account details'],
        timelineKey: '2-3 days per application',
        artifact: 'scholarship',
        color: 'from-green-500 to-emerald-500',
        whatsappTemplate: 'Hi! I need help with Scholarship Processing.'
    },
    {
        id: 'daily-support',
        icon: Calendar,
        title: 'Daily Tech Support',
        tagline: 'Your Digital Partner.',
        description: 'Monthly retainer-based digital support for all institutional needs.',
        fullDescKey: 'Comprehensive monthly tech support covering all your digital needs. From urgent fixes to planned projects, we\'re your dedicated technology partner ensuring smooth operations every day.',
        features: ['On-Demand Help', 'Priority Response', 'Custom Solutions', 'Predictable Costs'],
        stepsKey: ['Needs Assessment', 'Support Plan Setup', 'Ongoing Assistance', 'Monthly Review'],
        needsKey: ['List of regular tasks', 'Access credentials', 'Communication channels', 'Budget allocation'],
        timelineKey: 'Ongoing monthly service',
        artifact: 'support',
        color: 'from-amber-500 to-orange-500',
        whatsappTemplate: 'Hi! I\'m interested in Daily Tech Support services.'
    }
];
