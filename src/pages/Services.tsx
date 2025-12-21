import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useNavigate } from 'react-router-dom';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { 
  FileText, 
  GraduationCap, 
  Building, 
  Calendar, 
  Video, 
  Palette, 
  Music, 
  Lightbulb,
  ChevronDown,
  ChevronUp,
  Clock,
  CheckCircle,
  AlertCircle,
  MessageCircle
} from 'lucide-react';

const Services = () => {
  const { mode, setHasEntered } = useMode();
  const navigate = useNavigate();

  const handleReturn = () => {
    setHasEntered(false);
    navigate('/');
  };

  const institutionalServices = [
    {
      icon: FileText,
      title: 'Examination Documentation',
      shortDesc: 'Complete exam record management from scheduling to result documentation.',
      fullDesc: 'End-to-end examination documentation including student data entry, hall ticket generation, attendance records, answer sheet tracking, and result compilation.',
      howItWorks: [
        'Share exam schedule and student lists via WhatsApp',
        'Provide raw data in any format (Excel, PDF, handwritten)',
        'We structure and digitize all records',
        'Review formatted documents before final submission',
        'Receive complete examination package ready for submission'
      ],
      whatYouNeed: [
        'Student master data (name, roll number, class)',
        'Subject list and exam dates',
        'Any existing documentation templates',
        'Deadline for final submission'
      ],
      timeline: 'Standard: 5-7 working days | Urgent: 2-3 working days (additional charges)',
      whatsappTemplate: 'Hello quickserveit, I need help with examination documentation for [school name]. We have [number] students and the exam starts on [date].'
    },
    {
      icon: GraduationCap,
      title: 'Scholarship Support',
      shortDesc: 'Application processing, eligibility verification, and documentation for scholarships.',
      fullDesc: 'Complete scholarship management including eligibility screening, application form filling, document collection guidance, and submission tracking.',
      howItWorks: [
        'Share scholarship scheme details and student list',
        'We verify eligibility criteria for each student',
        'Guide families on required documents',
        'Fill and format applications accurately',
        'Track submission status and deadlines'
      ],
      whatYouNeed: [
        'Scholarship scheme name and guidelines',
        'Student list with basic details',
        'Income certificates, caste certificates (if applicable)',
        'Bank account details of students/parents'
      ],
      timeline: 'Standard: 7-10 working days | Depends on document collection from families',
      whatsappTemplate: 'Hello quickserveit, I need help with [scholarship name] scholarship applications for [number] students. The deadline is [date].'
    },
    {
      icon: Building,
      title: 'UDISE+ Management',
      shortDesc: 'Complete UDISE+ data entry, verification, and annual updates.',
      fullDesc: 'Annual UDISE+ compliance including data collection, accurate entry, verification before submission, and correction management.',
      howItWorks: [
        'Share current school data and last year\'s UDISE+ records',
        'We audit data for completeness and accuracy',
        'Enter all fields with verification checks',
        'Generate preview report for your review',
        'Submit and provide confirmation documentation'
      ],
      whatYouNeed: [
        'School login credentials (shared securely)',
        'Current year enrollment data',
        'Infrastructure details and updates',
        'Teacher information and qualifications'
      ],
      timeline: 'Standard: 3-5 working days | Annual window: Priority scheduling available',
      whatsappTemplate: 'Hello quickserveit, I need help with UDISE+ data entry for [school name]. Our school code is [UDISE code].'
    },
    {
      icon: Calendar,
      title: 'Daily Digital Support',
      shortDesc: 'Ongoing administrative support for routine documentation needs.',
      fullDesc: 'Retainer-based support for schools requiring regular assistance with circulars, notices, attendance reports, parent communication, and ad-hoc documentation.',
      howItWorks: [
        'Subscribe to monthly support package',
        'Share tasks via dedicated WhatsApp channel',
        'Receive same-day or next-day turnaround',
        'Monthly summary of completed work',
        'Flexible scope based on your needs'
      ],
      whatYouNeed: [
        'List of recurring documentation needs',
        'Communication preferences and templates',
        'Key contacts for clarifications',
        'Monthly task volume estimate'
      ],
      timeline: 'Same-day for simple tasks | 24-48 hours for complex documentation',
      whatsappTemplate: 'Hello quickserveit, I am interested in monthly digital support for [school name]. We typically need help with [types of tasks].'
    }
  ];

  const creatorServices = [
    {
      icon: Video,
      title: 'Long-Form Video Editing',
      shortDesc: 'YouTube, documentary, and educational content with retention-focused editing.',
      fullDesc: 'Premium editing for content 10+ minutes including structure optimization, pacing, cuts, transitions, text animations, and engagement hooks.',
      howItWorks: [
        'Share raw footage via Google Drive or WeTransfer',
        'Provide brief: key moments, style references, target length',
        'Receive first cut within timeline',
        'Review and request revisions (2 rounds included)',
        'Final export in required format and resolution'
      ],
      whatYouNeed: [
        'Raw footage (organized by scene/topic)',
        'Any B-roll or assets to include',
        'Music preferences or licensed tracks',
        'Reference videos for style/pacing'
      ],
      timeline: 'Standard: 7-10 days for 15-20 min video | Depends on complexity',
      whatsappTemplate: 'Hello quickserveit, I need video editing for a [type] video. It\'s approximately [duration] of raw footage targeting [final length].'
    },
    {
      icon: Palette,
      title: 'Thumbnail & Design',
      shortDesc: 'High-CTR thumbnails and channel graphics that drive clicks.',
      fullDesc: 'Scroll-stopping thumbnails, channel art, end screens, and social media graphics designed for maximum click-through.',
      howItWorks: [
        'Share video topic and target emotion',
        'Provide face shots or key frames',
        'Receive 2-3 thumbnail options',
        'Select and request tweaks',
        'Final delivery in all required sizes'
      ],
      whatYouNeed: [
        'Video title and topic',
        'High-quality still from video (or we extract)',
        'Any text to include',
        'Color preferences or brand guidelines'
      ],
      timeline: 'Standard: 24-48 hours | Rush: Same-day available',
      whatsappTemplate: 'Hello quickserveit, I need a thumbnail for my video about [topic]. The title is [title].'
    },
    {
      icon: Music,
      title: 'Motion Graphics & Animation',
      shortDesc: 'Intros, outros, lower thirds, and animated elements.',
      fullDesc: 'Custom motion graphics including animated logos, subscribe buttons, transitions, lower thirds, and full intro/outro sequences.',
      howItWorks: [
        'Share brand assets and style preferences',
        'Discuss animation style and complexity',
        'Receive concept sketches or storyboard',
        'Review animated draft',
        'Final delivery with project files (optional)'
      ],
      whatYouNeed: [
        'Logo files (preferably vector)',
        'Brand colors and fonts',
        'Reference animations you like',
        'Duration and format requirements'
      ],
      timeline: 'Intros/Outros: 5-7 days | Lower thirds: 2-3 days | Complex: Quote required',
      whatsappTemplate: 'Hello quickserveit, I need [intro/outro/motion graphics] for my channel [channel name]. My style is [describe style].'
    },
    {
      icon: Lightbulb,
      title: 'Content Strategy Support',
      shortDesc: 'Planning, scripting, and content calendar development.',
      fullDesc: 'Strategic support for creators including topic research, script frameworks, upload scheduling, and performance analysis.',
      howItWorks: [
        'Share channel goals and current performance',
        'Discuss niche and target audience',
        'Receive content calendar or script outlines',
        'Review and refine together',
        'Ongoing support or one-time strategy'
      ],
      whatYouNeed: [
        'Channel link and analytics access (for analysis)',
        'Content goals (views, subs, monetization)',
        'Topics you want to cover',
        'Current posting frequency'
      ],
      timeline: 'Initial strategy: 5-7 days | Ongoing: Weekly/monthly retainer',
      whatsappTemplate: 'Hello quickserveit, I need help with content strategy for my [niche] channel. Currently at [subscribers] subscribers.'
    }
  ];

  const services = mode === 'institutional' ? institutionalServices : creatorServices;

  return (
    <>
      <Helmet>
        <title>{mode === 'institutional' ? 'Institutional Services' : 'Creator Studio'} | quickserveit</title>
        <meta name="description" content={mode === 'institutional' 
          ? 'Complete documentation services for schools including examinations, scholarships, UDISE+, and daily digital support.'
          : 'Premium video editing, thumbnail design, motion graphics, and content strategy for creators.'
        } />
      </Helmet>
      
      <CursorLight mode={mode} />
      <FilmGrain />
      
      <FloatingNavbar 
        mode={mode} 
        onReturn={handleReturn}
        isVisible={true}
      />
      
      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display mb-4">
              {mode === 'institutional' ? (
                <>Our <span className="text-institutional">Services</span></>
              ) : (
                <>Creator <span className="text-creator">Studio</span></>
              )}
            </h1>
            <p className="text-foreground/50 text-lg">
              {mode === 'institutional' 
                ? 'Structured, confidential support for educational institutions. Each service designed for operational clarity.'
                : 'Premium production services for modern creators. Quality that elevates your content.'}
            </p>
          </div>

          {/* Important Notice */}
          <div className={`max-w-3xl mx-auto mb-16 p-6 rounded-2xl border ${mode === 'institutional' ? 'border-institutional/20 bg-institutional/5' : 'border-creator/20 bg-creator/5'}`}>
            <div className="flex items-start gap-4">
              <AlertCircle className={`w-6 h-6 mt-0.5 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
              <div>
                <h3 className="font-medium mb-2">Before You Begin</h3>
                <ul className="text-sm text-foreground/60 space-y-1">
                  <li>• All services require clear specifications upfront</li>
                  <li>• Working hours: 10:00 AM – 3:00 PM IST (Mon–Sat)</li>
                  <li>• Response time during working hours: Within 2 hours</li>
                  <li>• All files handled with strict confidentiality</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="space-y-8">
            {services.map((service, index) => (
              <ServiceDetailCard key={index} service={service} mode={mode} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer mode={mode} />
    </>
  );
};

interface ServiceDetailCardProps {
  service: {
    icon: any;
    title: string;
    shortDesc: string;
    fullDesc: string;
    howItWorks: string[];
    whatYouNeed: string[];
    timeline: string;
    whatsappTemplate: string;
  };
  mode: 'institutional' | 'creator';
}

const ServiceDetailCard = ({ service, mode }: ServiceDetailCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = service.icon;
  
  const whatsappNumber = '919876543210';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(service.whatsappTemplate)}`;

  return (
    <div className={`rounded-2xl glass-card border border-border/20 overflow-hidden transition-all duration-300 ${isExpanded ? 'ring-1 ' + (mode === 'institutional' ? 'ring-institutional/30' : 'ring-creator/30') : ''}`}>
      {/* Header - Always visible */}
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 flex items-start gap-6 text-left hover:bg-foreground/[0.02] transition-colors"
      >
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'}`}>
          <Icon className={`w-7 h-7 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-medium mb-2">{service.title}</h3>
          <p className="text-foreground/50">{service.shortDesc}</p>
        </div>
        <div className="shrink-0 mt-1">
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-foreground/40" />
          ) : (
            <ChevronDown className="w-5 h-5 text-foreground/40" />
          )}
        </div>
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-6 pb-6 border-t border-border/10 pt-6 animate-fade-in">
          <p className="text-foreground/60 mb-8">{service.fullDesc}</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* How It Works */}
            <div>
              <h4 className="flex items-center gap-2 font-medium mb-4">
                <CheckCircle className={`w-4 h-4 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                How It Works
              </h4>
              <ol className="space-y-3">
                {service.howItWorks.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/60">
                    <span className={`w-5 h-5 rounded-full text-[10px] flex items-center justify-center shrink-0 ${mode === 'institutional' ? 'bg-institutional/20 text-institutional' : 'bg-creator/20 text-creator'}`}>
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            
            {/* What You Need */}
            <div>
              <h4 className="flex items-center gap-2 font-medium mb-4">
                <AlertCircle className={`w-4 h-4 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                What You'll Need to Prepare
              </h4>
              <ul className="space-y-2">
                {service.whatYouNeed.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground/60">
                    <span className="text-foreground/30">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Timeline */}
          <div className={`mt-8 p-4 rounded-xl ${mode === 'institutional' ? 'bg-institutional/5' : 'bg-creator/5'}`}>
            <div className="flex items-center gap-2 text-sm">
              <Clock className={`w-4 h-4 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
              <span className="font-medium">Timeline:</span>
              <span className="text-foreground/60">{service.timeline}</span>
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                mode === 'institutional'
                  ? 'bg-institutional text-background hover:bg-institutional/90'
                  : 'bg-creator text-background hover:bg-creator/90'
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              Start This Service
            </a>
            <p className="text-xs text-foreground/40 self-center">
              Click to open WhatsApp with a pre-filled message
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
