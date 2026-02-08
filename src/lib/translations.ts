// Quickserve IT - Professional Hindi/English Translation System

export type TranslationKey = keyof typeof translations.en;

export const translations = {
  en: {
    // Brand
    brandName: 'Quickserve IT',
    brandTagline: 'Your Trusted Digital Partner.',
    brandTaglineInstitutional: 'Secure Digital Support for Educational Institutions.',
    brandTaglineCreator: 'Professional Production for Growth-Focused Creators.',
    betaVersion: 'Beta',

    // Landing
    secure: 'Secure',
    india: 'India',
    enter: 'Enter',

    // Mode labels
    institutional: 'Institutional',
    creator: 'Creator',

    // Navigation
    home: 'Home',
    services: 'Services',
    studio: 'Studio',
    portfolio: 'Portfolio',
    projects: 'Projects',
    vision: 'Vision',
    about: 'About',
    founder: 'Founder',
    pricing: 'Pricing',
    contact: 'Contact',
    menu: 'Menu',
    language: 'Language',

    // Hero Section - Institutional
    heroInst1: 'Burden Lifted',
    heroInst2: 'Compliance Simplified',
    heroInst3: 'Documentation Delivered',
    heroInst4: 'Schools Trust',
    heroInstDesc: 'Trusted by Gorakhpur schools for exam documentation, scholarship processing, and compliance support. We handle technical work so you focus on education.',

    // Hero Section - Creator
    heroCreator1: 'Authority Positioning',
    heroCreator2: 'Retention Engineering',
    heroCreator3: 'Broadcast Quality',
    heroCreatorDesc: 'Professional editing, cinematic color grading, and retention-focused storytelling. Limited availability for serious creators ready to elevate their content quality.',

    // CTAs
    getStarted: 'Start Your First Project',
    startCreating: 'Start Creating',
    viewServices: 'View Services',
    seePortfolio: 'See Portfolio',
    contactUs: 'Discuss Your Needs',
    getQuote: 'See Pricing Options',
    discussRetainer: 'Discuss Retainer',
    explorePartnership: 'Explore Partnership',
    discussPackage: 'Discuss Package',
    startThisService: 'Start This Service',

    // Stats
    schoolsServed: 'Schools Served',
    projectsDelivered: 'Projects Delivered',
    uptimeGuarantee: 'Uptime Guarantee',
    documents: 'Documents',
    viewsGenerated: 'Views Generated',

    // Stats Section - Institutional
    statsProjectsCompleted: 'Question Papers Typed',
    statsInstitutionsServed: 'Contract Partnerships',
    statsClientSatisfaction: 'Technical Tasks Resolved',
    statsResponseTime: 'Error-Free Delivery',

    // Stats Section - Creator
    statsVideosEdited: 'Mode Status',
    statsWatchHours: 'For First Cohort',
    statsCreatorsServed: 'Editing Suite Ready',
    statsTurnaroundTime: 'Turnaround Time',

    // Value Proposition
    whyChooseUsTitle: 'Why Choose Us',
    whyChooseUsSubtitle: 'Built on trust, delivered with precision, designed for your peace of mind',

    // Institutional Values
    valueSecurityTitle: 'Sacred Data',
    valueSecurityDesc: 'Student records handled with bank-level security. We never share, never showcase, never compromise your trust. Your data stays protected always.',
    valueTimelyTitle: 'Deadlines Met',
    valueTimelyDesc: 'Academic calendars don\'t wait—neither do we. Clear timelines, regular updates, and delivery you count on. No surprises, no excuses.',
    valuePersonalTitle: 'Real Support',
    valuePersonalDesc: 'No chatbots, no ticket queues. Direct WhatsApp access to people who understand schools and respond like humans, not robots.',
    valueReliableTitle: 'Dependable Results',
    valueReliableDesc: 'Trusted by Gorakhpur schools for UDISE+, scholarships, and exam documentation. We deliver same high quality, every single time—no drama.',

    // Creator Values
    valueQualityTitle: 'Retention Editing',
    valueQualityDesc: 'Every cut, transition, and effect engineered for retention. Your viewers stay engaged, watch time climbs, and channel grows—naturally and sustainably.',
    valueFastTitle: 'Upload Schedule',
    valueFastDesc: 'Clear timelines, honest communication, and delivery respecting both quality and your audience. We keep you on schedule without cutting corners.',
    valueCreativeTitle: 'Vision Alignment',
    valueCreativeDesc: 'We don\'t just follow instructions—we understand your creative intent and bring it to life with precision. Your message lands exactly as imagined.',
    valueCommittedTitle: 'Growth Mission',
    valueCommittedDesc: 'We invest in understanding your channel, your audience, and your goals. The better you do, the better we do—that\'s true partnership.',

    // Contact Form
    contactTitle: 'Get In Touch',
    contactSubtitle: 'Ready to discuss your project? Fill out the form below.',
    yourName: 'Your Name',
    mobileNumber: 'Mobile Number',
    emailAddress: 'Email Address',
    selectService: 'Select Service',
    instituteServices: 'Institute Services',
    creatorServices: 'Creator Services',
    generalInquiry: 'General Inquiry',
    yourMessage: 'Your Message',
    termsAgree: 'I agree to the terms & conditions',
    sendMessage: 'Send Message',
    messageSent: 'Message prepared! Redirecting to WhatsApp...',

    // Footer - Core
    allRightsReserved: 'All Rights Reserved',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',

    // Footer - Identity & Brand
    footerIdentityTitle: 'Identity',
    footerBrandName: 'quickserveit',
    footerLocation: 'Gorakhpur, India',
    footerCoordinates: '26.7606° N, 83.3732° E',
    footerDataSecurity: '100% Privacy Guaranteed',

    // Footer - Navigation
    footerNavigationTitle: 'Navigation',
    footerNavHome: 'Home',
    footerNavServices: 'Services',
    footerNavAbout: 'About',
    footerNavPricing: 'Pricing',
    footerNavFounder: 'Founder',
    footerNavContact: 'Contact',

    // Footer - Legal
    footerLegalTitle: 'Legal',
    footerLegalPrivacy: 'Privacy Policy',
    footerLegalTerms: 'Terms of Service',
    footerLegalDisclaimer: 'Disclaimer',
    footerLegalFAQ: 'FAQ',

    // Footer - Communication
    footerCommunicationTitle: 'Get in Touch',
    footerWhatsAppCTA: 'Chat on WhatsApp',
    footerWhatsAppDesc: 'Preferred communication channel for all inquiries.',
    footerAvailability: 'Availability',

    // Footer - Status & Meta
    footerEstablished: 'Est. 2025',
    footerSystemReady: 'System Ready',
    footerCopyright: '© 2025 quickserveit',
    footerConfidential: 'Confidential',
    footerAllRightsReserved: 'All Rights Reserved',

    // Working Hours
    available: 'Available',
    offline: 'Offline',
    workingHours: 'Working Hours',
    workingHoursInfo: 'Support Hours: 10:00 AM – 4:00 PM (IST)',
    messagesAccepted: 'Messages accepted beyond hours',
    workingDays: 'Monday to Saturday',
    outsideHoursNote: 'Messages received outside these hours will be addressed the next working day.',

    // Header Status
    availableNow: 'Available Now',
    onRequest: 'On Request',

    // Client Work Summary

    // Services Page
    ourServices: 'Our Services',
    creatorStudio: 'Creator Studio',
    servicesInstDesc: 'Structured, confidential support for educational institutions. Each service designed for operational clarity.',
    servicesCreatorDesc: 'Premium production services for modern creators. Quality that elevates your content.',
    beforeYouBegin: 'Before You Begin',
    beforeYouBeginItems: 'All services require clear specifications upfront|Working hours: 10:00 AM – 4:00 PM IST (Mon–Sat)|Response time during working hours: Within 2 hours|All files handled with strict confidentiality',
    howItWorks: 'How It Works',
    whatYouNeed: 'What You\'ll Need to Prepare',
    timeline: 'Timeline',
    whatsappNote: 'Click to open WhatsApp with a pre-filled message',

    // Services - Institutional
    examDocTitle: 'Exam Papers',
    examDocShort: 'Professional typing and formatting of exam question papers from handwritten or digital sources.',
    examDocMedium: 'Professional Question Paper Typing',
    examDocFull: 'Teachers shouldn\'t spend weekends typing exam papers. Send us your handwritten drafts—we\'ll transform them into professional, print-ready documents while you focus on what matters: teaching. Standardized formatting, zero errors, delivered on time.',
    examDocSteps: 'Share raw question papers (PDF, Image, or Handwritten)|We type, format, and structure the questions|Review the draft for any corrections|Receive final print-ready files via Drive Link',
    examDocNeeds: 'Raw question content (Photo/PDF)|Exam pattern/format details|Subject and Class details|Submission deadline',
    examDocTimeline: 'Standard: 5-7 working days | Urgent: 2-3 working days (additional charges)',

    scholarshipTitle: 'Scholarship Processing',
    scholarshipShort: 'Institute portal management, remote verification, and on-site biometric authentication with DSC forwarding.',
    scholarshipMedium: 'Portal + Biometric + DSC Forwarding',
    scholarshipFull: 'Scholarship processing shouldn\'t consume your entire week. We handle everything: remote portal work, on-site biometric verification, and DSC forwarding. You provide the student data—we handle the rest. High approval rates, minimal effort from your team.',
    scholarshipSteps: 'Provide Institute Login & Student Data|We verify and update forms remotely on the portal|We schedule a campus visit for Biometric Authentication|Final Forwarding done using DSC (Dongle)|Submission Report generated',
    scholarshipNeeds: 'Institute Portal Credentials|Principal\'s Digital Signature (DSC Token/Dongle)|Student File/List for verification|Electricity/Internet for on-site Biometric camp',
    scholarshipTimeline: 'Standard: 7-10 working days | Depends on biometric scheduling',

    udiseTitle: 'UDISE Management',
    udiseShort: 'Complete support for the new session starting April 2026: New Entry & Old Student Updates.',
    udiseMedium: 'Complete 2026-27 Session Support',
    udiseFull: 'UDISE+ compliance protects your school\'s funding and recognition. We handle the entire 2026-27 session: data cleaning, student progressions, new entries—all to government standards. Your records stay perfect, your funding stays secure.',
    udiseSteps: 'Share school credentials for the 2026 session|We update/promote existing student data (Progression)|We upload new student profiles (Entry)|Verify all data fields|Finalize and Certify',
    udiseNeeds: 'School login credentials (shared securely)|Current year enrollment data|Infrastructure details and updates|Teacher information and qualifications',
    udiseTimeline: 'Bookings Open for April 2026 | Priority slots for early schools',

    dailySupportTitle: 'Daily Support',
    dailySupportShort: 'On-demand support for confusing government tasks, PDF conversions, translations, and academic content creation.',
    dailySupportMedium: 'Micro-Tasks & Portal Help',
    dailySupportFull: 'Portal errors, file conversions, urgent typing—we handle it all. Think of us as your on-call tech team. Message us when you\'re stuck, and we\'ll solve it fast. No waiting, no hassle, no interruptions to your day.',
    dailySupportSteps: 'Send the task via WhatsApp (e.g., "Fix this PDF" or "Translate this notice")|We confirm the cost (Per-Task/Per-Day)|We process the work immediately (PDF tools, Portal fix, Typing)|Receive final files instantly',
    dailySupportNeeds: 'Raw files (PDF/Images)|Clear instruction on what is needed (Translate/Convert/Create)|Govt Portal credentials (if related to portal work)',
    dailySupportTimeline: 'Instant for Micro-tasks (30-60 mins) | Same day for larger typing works.',

    // Services - Creator
    videoEditTitle: 'Video Production',
    videoEditShort: 'Broadcast-quality storytelling. We specialize in Multi-Cam Sync for podcasts, Cinematic Color Grading (DaVinci), and distraction-free editing for educational content.',
    videoEditMedium: 'Cinematic Editing & Color Grading',
    videoEditFull: 'Stop spending 12 hours editing a 10-minute video. Send us your raw footage—we\'ll handle the cuts, color, and sound while you focus on creating your next masterpiece. Upload-ready in 7-10 days, engineered for maximum retention.',
    videoEditSteps: 'Send Raw Files (Google Drive or Pendrive pickup)|We process in Premiere Pro: Multi-cam sync, A-Roll cleanup|Color grading in DaVinci Resolve for cinematic depth|Client review via Frame.io with timestamped feedback|Final delivery with archival-quality exports',
    videoEditNeeds: 'Raw Footage (Camera/Mobile/Screen Recording)|Audio files (if recorded separately)|Reference style link|Branding assets (Logo/Intro)',
    videoEditTimeline: 'Standard: 7-10 days for 15-20 min video | Depends on complexity',

    shortsTitle: 'Viral Shorts',
    shortsShort: 'Algorithm-optimized vertical content. Features Kinetic Typography, 4K Upscaling, and precise Pattern Interrupts to maximize audience retention.',
    shortsMedium: 'Algorithm-Optimized Vertical Content',
    shortsFull: 'Turn one long video into 10 viral shorts. We extract your best moments, add kinetic text and pacing that stops the scroll, and deliver platform-ready files. More reach, more subscribers, less work for you.',
    shortsSteps: 'Share Source (Long Video Link or Raw Files)|We identify viral moments and script hooks|Custom kinetic typography designed in After Effects|Color grading and sound design for maximum impact|Export via Adobe Media Encoder for platform-perfect quality',
    shortsNeeds: 'Link to your Podcast/YouTube video (for repurposing)|OR Raw vertical footage (Drive/WeTransfer)|Reference Reel style (optional)|Brand Logo (if needed)',
    shortsTimeline: 'Standard: 24-48 hours per reel | Bulk: Monthly packages available',

    motionTitle: 'Motion Graphics',
    motionShort: 'High-end visual engineering. Includes 2.5D Parallax Photos, Character Rigging, Custom Logo Reveals, and seamless Green Screen Compositing.',
    motionMedium: '2.5D Animation & Visual Effects',
    motionFull: 'Professional motion graphics make you look expensive—even if you\'re not. Custom 2.5D animations, logo reveals, and visual effects that separate you from amateur creators. Your content deserves to look as good as it sounds.',
    motionSteps: 'Share brand assets and style preferences|Concept development and storyboarding|Vector design in Illustrator, animation in After Effects|3D elements created in Blender (if needed)|Final delivery with project files (optional)',
    motionNeeds: 'Logo files (preferably vector)|Brand colors and fonts|Reference animations you like|Duration and format requirements',
    motionTimeline: 'Intros/Outros: 5-7 days | Lower thirds: 2-3 days | Complex: Quote required',

    thumbnailTitle: 'Thumbnail Strategy',
    thumbnailShort: 'The complete packaging suite. We combine Notion-based script structuring with Midjourney & Photoshop compositing for High-CTR thumbnails.',
    thumbnailMedium: 'High-CTR Thumbnails & Strategy',
    thumbnailFull: 'Your thumbnail gets 3 seconds to earn a click. We design high-CTR thumbnails based on competitor research and viewer psychology. The result: more clicks, more views, more growth—before your video even starts.',
    thumbnailSteps: 'Share channel niche and target audience|We research topics and create script frameworks in Notion|Generate AI art concepts in Midjourney|Composite and refine in Photoshop for high-CTR impact|Final delivery: Script + Thumbnail + Title suggestions',
    thumbnailNeeds: 'Channel link and niche information|Content goals and target audience|Reference thumbnails you like|Brand assets (Logo, colors, fonts)',
    thumbnailTimeline: 'Thumbnails: 24-48 hours | Script outlines: 3-5 days | Combined package: 5-7 days',

    // Services Section (Home)
    institutionalServices: 'Institutional Services',
    creativeStudio: 'Creative Studio',
    servicesInstSubtitle: 'Comprehensive digital support for educational institutions',
    servicesCreatorSubtitle: 'World-class production for modern creators',

    // Service Cards - Institutional
    examDocCardTitle: 'Exam Documentation',
    examDocCardSubtitle: 'Professional Question Paper Typing',
    examDocCardDesc: 'Professional typing and formatting of handwritten exam papers into print-ready PDFs. Confidential handling, standardized formatting, zero errors guaranteed.',
    scholarshipCardTitle: 'Scholarship Processing',
    scholarshipCardSubtitle: 'Portal + Biometric + DSC Forwarding',
    scholarshipCardDesc: 'Complete scholarship management: remote portal work, on-site biometric verification, and DSC forwarding. High approval rates with minimal effort required.',
    udiseCardTitle: 'UDISE Management',
    udiseCardSubtitle: 'Complete 2026-27 Session Support',
    udiseCardDesc: 'Full UDISE+ compliance for 2026-27 session. Data cleaning, student progressions, new entries—all to government standards. Your funding stays secure.',
    govProjectsTitle: 'Government Projects',
    govProjectsSubtitle: 'Ad-hoc Compliance Assistance',
    govProjectsDesc: 'Rapid response for government circulars, compliance mapping, and special portal assistance. Fast solutions when unexpected requirements arrive unexpectedly.',
    dailySupportCardTitle: 'Daily Support',
    dailySupportCardSubtitle: 'Micro-Tasks & Portal Help',
    dailySupportCardDesc: 'On-demand micro-services: PDF conversions, English-Hindi translation, model papers, and portal error resolution. Fast turnaround for urgent tasks.',
    subscriptionTitle: 'Subscription Plans',
    subscriptionSubtitle: 'Monthly Retainer Options',
    subscriptionDesc: 'Silver, Gold, and Platinum monthly tiers offering predictable support with priority turnaround. Dedicated attention for your institution\'s ongoing needs.',

    // Service Cards - Creator
    videoCardTitle: 'Video Production',
    videoCardSubtitle: 'Cinematic Editing & Color Grading',
    videoCardDesc: 'Complete post-production workflow: precision cuts, cinematic color grading, sound design, and 2.5D visuals engineered for maximum viewer retention.',
    brandingCardTitle: 'Branding Design',
    brandingCardSubtitle: 'High-CTR Thumbnails & Identity',
    brandingCardDesc: 'High-CTR thumbnails designed with viewer psychology, complete brand identity systems, and event posters that demand attention and drive clicks.',
    motionCardTitle: 'Motion Graphics',
    motionCardSubtitle: '2.5D Animation & Visual Effects',
    motionCardDesc: 'Custom logo intros, kinetic typography, professional lower thirds, and seamless green screen cleanup. Premium visual effects for authority positioning.',
    strategyCardTitle: 'Content Strategy',
    strategyCardSubtitle: 'Scripting & Growth Planning',
    strategyCardDesc: 'Strategic scripting, SEO optimization, content calendars, and channel growth management. Data-driven planning to maximize reach and subscriber conversion rates.',
    aiCampaignsTitle: 'AI Campaigns',
    aiCampaignsSubtitle: 'AI-Powered Visual Content',
    aiCampaignsDesc: 'Future-ready AI-driven 2D/3D visual campaigns and filmless premium advertisements. Next-generation content creation for forward-thinking brands and creators.',
    studioSpaceTitle: 'Studio Space',
    studioSpaceSubtitle: 'Professional Recording Environment',
    studioSpaceDesc: 'Coming soon: Soundproof recording environment with professional gear for local talent incubation. Premium production space for serious creators.',

    // About Page
    aboutTitle: 'About',
    aboutIntro: 'We lift digital burdens from people doing meaningful work—educators shaping the next generation and creators building engaged audiences worldwide.',
    ourPhilosophy: 'Our Philosophy',
    confidentialityTitle: 'Confidentiality First',
    confidentialityDesc: 'Your files, your data, your content—handled with the discretion they deserve. We protect institutional records and creator content like they\'re our own.',
    realisticTimelinesTitle: 'Realistic Timelines',
    realisticTimelinesDesc: 'We deliver realistic timelines, not fantasy deadlines. Clear estimates upfront, honest updates if anything changes. Quality takes time—we won\'t rush it.',
    calmCommTitle: 'Calm Communication',
    calmCommDesc: 'No aggressive sales tactics, no spam follow-ups. We respond during working hours, keep messages clear, and respect your time like we\'d want ours respected.',
    focusedExpertiseTitle: 'Focused Expertise',
    focusedExpertiseDesc: 'We don\'t do everything. We do institutional documentation and creator production — deeply and well. That\'s our focus.',
    whoWeServe: 'Who We Serve',
    institutions: 'Institutions',
    institutionsList: 'Schools and colleges needing documentation support|Administrators managing UDISE+, exams, scholarships|Educational trusts requiring compliance assistance|Schools seeking reliable digital partners',
    creators: 'Creators',
    creatorsList: 'YouTubers needing professional editing support|Educators building online course content|Podcasters requiring visual content|Brands seeking premium production quality',
    whatWeDontDo: 'What We Don\'t Do',
    transparencyNote: 'Transparency is important to us. Here\'s what falls outside our scope:',
    dontDoList: 'Academic writing or content creation for students|Guaranteed views, subscribers, or monetization|Falsifying any institutional records|24/7 availability or instant responses|Web development or software projects|Social media management or marketing',

    // About Page - Additional
    aboutPageTitle: 'About',
    aboutPageSubtitle: 'quickserveit',
    theStoryBehind: 'The story behind quickserveit',
    calmOverChaos: 'Calm Over Chaos',
    calmOverChaosDesc: 'We don\'t add to your stress. Every interaction is designed to reduce anxiety, not increase it.',
    clarityOverConfusion: 'Clarity Over Confusion',
    clarityOverConfusionDesc: 'Clear expectations, honest timelines, no hidden surprises. You always know where things stand.',
    confidentialityIsSacred: 'Confidentiality is Sacred',
    confidentialityIsSacredDesc: 'Your data, your documents, your content — treated with the discretion they deserve.',
    qualityWithoutEgo: 'Quality Without Ego',
    qualityWithoutEgoDesc: 'We don\'t need credit. We need your work to succeed. That\'s our satisfaction.',
    aboutVisionAhead: 'The Vision Ahead',
    aboutVisionAheadText1: 'quickserveit is not trying to be everything to everyone. We\'re building a focused practice — deep expertise in institutional documentation and creator production. No distractions, no dilution.',
    aboutVisionAheadText2: 'Whether you\'re a school administrator processing scholarship records or a YouTuber crafting your next video, I want quickserveit to feel like having a reliable colleague who just handles things quietly and well.',
    aboutThankYouMessage: 'Thank you for considering quickserveit.',
    aboutTheFounder: '— The Founder',

    // Institutional About Page
    instAboutHeaderTitle: 'The Commitment',
    instAboutHeaderSubtitle: 'Serving Gorakhpur\'s educational ecosystem with precision, privacy, and accountability.',
    instAboutMissionTitle: 'Why I Do This',
    instAboutMissionContent: 'I started this service because I saw educators drowning in digital paperwork instead of teaching. My mission is simple: handle your documentation burden so you can focus on what matters — education.',
    instAboutWhyUsTitle: 'How I Work',
    instAboutPrivacyTitle: 'Privacy First',
    instAboutPrivacyDesc: 'Your student data is sacred. I treat every record with the confidentiality it deserves. No shortcuts, no compromises.',
    instAboutSpeedTitle: 'Reliable Delivery',
    instAboutSpeedDesc: 'I give you realistic timelines and stick to them. No false promises, no last-minute surprises.',
    instAboutFormatTitle: 'Technical Precision',
    instAboutFormatDesc: 'From English to Hindi Unicode, from simple text to complex equations — I handle it all with professional formatting.',
    instAboutLocalPromiseTitle: 'Local Promise',
    instAboutLocalPromiseText: 'Based in Gorakhpur. Available for on-site consultation for major institutional projects.',
    instAboutLeadershipTitle: 'Leadership',
    instAboutLeadershipName: 'Vinod Kumar',
    instAboutLeadershipRole: 'Lead System Architect',
    instAboutLeadershipDesc: 'Responsible for your data security and institutional trust. Based in Gorakhpur, personally accountable for every project we handle.',
    instAboutFounderTeaserButton: 'Read My Story',

    // Creator About Page
    crAboutHeaderTitle: 'Beyond the Cut',
    crAboutHeaderSubtitle: 'Why I obsess over every frame, sound effect, and transition.',
    crAboutPhilosophyTitle: 'The Editor\'s Mindset',
    crAboutPhilosophyContent: 'I don\'t just edit videos — I engineer attention. Every cut, every transition, every sound effect is designed to keep your viewers hooked. In a world of 3-second attention spans, retention is everything.',
    crAboutTechStackTitle: 'The Creative Arsenal',
    crAboutSoftwareTitle: 'Professional Tools',
    crAboutSoftwareDesc: 'Premiere Pro, After Effects, DaVinci Resolve — I use industry-standard software to deliver broadcast-quality results.',
    crAboutHardwareTitle: 'High-Performance Setup',
    crAboutHardwareDesc: 'Powerful workstation with dedicated GPU for fast rendering and smooth 4K editing workflows.',
    crAboutStrategyTitle: 'Retention Psychology',
    crAboutStrategyDesc: 'I study viewer behavior, pacing psychology, and platform algorithms to maximize watch time and engagement.',
    crAboutCreativeDirectorTitle: 'Creative Director',
    crAboutCreativeDirectorName: 'Vinod Kumar',
    crAboutCreativeDirectorRole: 'Creative Director',
    crAboutCreativeDirectorDesc: 'I don\'t just edit; I engineer attention. Every frame is designed to maximize viewer psychology and retention.',
    crAboutFounderTeaserButton: 'My Creative Journey',

    // Founder Page - Comprehensive Philosophical Content
    founderPageTitle: 'Founder\'s Message',
    founderPageSubtitle: 'A personal message from the founder of quickserveit about our mission, values, and commitment to calm digital execution.',
    aNoteFromFounder: 'A Note from the',
    theStoryBehindQuickserve: 'The Story Behind quickserveit',

    // Opening Philosophy - Shared
    founderOpeningQuote: '"I didn\'t start quickserveit to build a business. I started it to solve a problem that haunted me: watching talented people drown in digital chaos while their real work—the work that matters—waited."',

    // The Origin Story - INSTITUTIONAL MODE
    theOriginStory: 'The Origin Story',
    originInstPara1: 'It started in a small school office in Chandrao. I was helping with UDISE+ data entry, and I watched a principal — a woman who had dedicated 25 years to education — spend her entire Saturday typing student records into a government portal. Her eyes were tired. Her back hurt. And the worst part? This wasn\'t teaching. This wasn\'t mentoring students. This was just... data entry.',
    originInstPara2: 'That image stayed with me. Here was someone who chose education as a calling, now reduced to a data operator because the system demanded it. The digital revolution that promised efficiency had instead created a new kind of burden — one that fell heaviest on those least equipped to handle it.',
    originInstPara3: 'I saw this pattern everywhere. Principals buried in compliance paperwork. Teachers spending evenings on exam documentation. Administrative staff overwhelmed by scholarship portals. Good people, doing important work, being crushed by the weight of digital bureaucracy.',
    originInstPara4: 'I realized: these institutions didn\'t need another software solution. They needed a human partner who could quietly handle the technical burden, so educators could get back to educating.',

    // The Origin Story - CREATOR MODE
    originCreatorPara1: 'It started when I met a creator — a young educator making brilliant explainer videos on YouTube. His content was gold. His storytelling was captivating. But his editing? Basic. Not because he lacked vision, but because he lacked resources and time.',
    originCreatorPara2: 'He was spending 12 hours editing a 10-minute video, learning software as he went, when he should have been researching his next topic. The technical barrier was killing his creative momentum. Every hour spent fumbling with editing tools was an hour stolen from content creation.',
    originCreatorPara3: 'I saw this pattern with other creators too. Brilliant ideas, powerful messages, but trapped in the production bottleneck. They needed professional polish but couldn\'t afford big agencies. They were stuck between amateur quality and professional dreams.',
    originCreatorPara4: 'I realized: creators didn\'t need another tutorial or plugin. They needed a production partner who understood their vision and could execute it professionally, so they could focus on what they do best — creating content.',

    // The Problem I Saw - INSTITUTIONAL MODE
    theProblemISaw: 'The Problem I Saw',
    problemInstPara1: 'The world talks about "digital transformation" like it\'s a gift to education. But for schools, especially in rural areas, it\'s often a curse. They\'re told to digitize everything — attendance, exams, scholarships, compliance reports — but nobody asks: who will do this work?',
    problemInstPara2: 'Teachers are educators, not data scientists. Principals are leaders, not IT professionals. Yet they\'re expected to master government portals, manage databases, and produce error-free documentation — all while running a school.',
    problemInstPara3: 'What frustrated me most was the loneliness of it. Schools struggling in silence, too embarrassed to admit they can\'t keep up. Administrators working weekends, sacrificing family time, just to stay compliant. The system demands perfection but provides no support.',
    problemInstPara4: 'I realized: what schools needed wasn\'t another software tool. They needed a human partner. Someone who understood the pressure, respected the mission of education, and could quietly handle the technical burden.',

    // The Problem I Saw - CREATOR MODE
    problemCreatorPara1: 'The world tells creators: "Just post consistently" and "Maintain quality." As if editing, thumbnails, color grading, and storytelling are simple tasks anyone can master in their spare time. The advice is everywhere, but the support isn\'t.',
    problemCreatorPara2: 'The barrier to entry has never been lower — anyone can upload a video. But the barrier to quality has never been higher. Viewers expect cinematic production, perfect pacing, and professional polish. Creators are expected to be videographers, editors, designers, and marketers all at once.',
    problemCreatorPara3: 'What frustrated me most was watching talented creators burn out. They had the ideas, the passion, the message — but they were drowning in the technical execution. Every hour spent learning editing software was an hour not spent creating content.',
    problemCreatorPara4: 'I realized: what creators needed wasn\'t another tutorial or template. They needed a production partner. Someone who understood their vision, respected their craft, and could handle the technical execution professionally.',

    // Core Philosophy - Shared (applies to both modes)
    corePhilosophy: 'Core Philosophy',
    philosophyIntro: 'quickserveit is built on principles I refuse to compromise:',

    principle1Title: 'Calm Over Chaos',
    principle1Text: 'Every interaction with quickserveit should reduce your stress, not add to it. No aggressive sales calls. No pushy follow-ups. No artificial urgency. When you message us, you get clarity and respect—not a sales pitch. If we can\'t help, we say so. Your peace of mind is sacred.',

    principle2Title: 'Clarity Over Confusion',
    principle2Text: 'You will always know where your work stands. Clear timelines. Honest estimates. If something delays, you hear about it immediately — with a reason and a revised plan. No vague promises. No disappearing acts. Transparency isn\'t a feature; it\'s the foundation.',

    principle3Title: 'Confidentiality as Sacred Trust',
    principle3Text: 'Your data—student records, exam papers, raw footage, scripts—is treated with the discretion it deserves. We never showcase your work without permission. We never discuss your projects publicly. What you share with us dies with us. Trust, once broken, can never be fully repaired. We guard it like our lives depend on it—because our business does.',

    principle4Title: 'Quality Without Ego',
    principle4Text: 'We don\'t need credit. We don\'t need our name on your work. What we need is for your work to succeed. When a school\'s scholarship applications get approved, that\'s our win. When a creator\'s video hits 100K views, that\'s our satisfaction. We exist in the background, making you look good.',

    principle5Title: 'Focused Expertise Over Scattered Services',
    principle5Text: 'We don\'t do everything. We do institutional documentation and creator production — deeply and well. We say no to web development, app building, social media management, and other profitable services — because dilution kills quality. Our focus is our strength.',

    // What Drives Me - INSTITUTIONAL MODE
    whatDrivesMe: 'What Drives Me',
    driveInstPara1: 'I think about that principal often. The one who spent her Saturday on data entry. I wonder how many Saturdays she\'s lost to administrative work that could have been delegated. How many students missed out on her mentorship because she was buried in paperwork.',
    driveInstPara2: 'I think about the teachers who stay late, not to plan lessons, but to format exam papers. The administrators who sacrifice weekends to meet compliance deadlines. The educators who chose this profession to shape young minds, not to wrestle with government portals.',
    driveInstPara3: 'That\'s what drives me. Not revenue. Not scale. Not building an empire. I want to give time back to educators. I want principals to lead, teachers to teach, and administrators to focus on students — not spreadsheets.',
    driveInstPara4: 'This isn\'t just a service business. It\'s a mission. Because when you free an educator from digital overwhelm, you don\'t just complete a task — you restore their capacity to do what they were called to do. That\'s transformational.',

    // What Drives Me - CREATOR MODE
    driveCreatorPara1: 'I think about that creator often. The one editing until 2 AM, eyes burning, wondering if it\'s worth it. I think about the videos he didn\'t make because he was stuck in the technical weeds. The ideas that died because execution felt impossible.',
    driveCreatorPara2: 'I think about the creators with powerful messages but amateur production. The educators building courses who spend more time editing than teaching. The storytellers whose vision deserves cinematic quality but can\'t afford big agencies.',
    driveCreatorPara3: 'That\'s what drives me. Not revenue. Not scale. Not building an empire. I want to give time back to creators. I want them to focus on storytelling, not software. I want to be the invisible force that makes professional production accessible.',
    driveCreatorPara4: 'This isn\'t just a service business. It\'s a mission. Because when you free a creator from technical overwhelm, you don\'t just edit a video — you enable them to share their message with the world. That\'s transformational.',

    // The Vision - INSTITUTIONAL MODE
    theVisionAhead: 'The Vision Ahead',
    visionInstPara1: 'I don\'t want quickserveit to be the biggest. I want it to be the most trusted partner for educational institutions. I want schools to think of us first when they\'re drowning in compliance work. I want educators to know their data is in safe hands.',
    visionInstPara2: 'Five years from now, I see quickserveit as the quiet constant that schools rely on. Not flashy, not famous, but deeply reliable. The kind of partner you don\'t have to worry about. The kind of service that just works, every time, without drama.',
    visionInstPara3: 'I see us helping more schools navigate the digital burden without losing their soul. I see principals spending weekends with family, not with UDISE+ portals. I see teachers focused on lesson plans, not exam formatting. I see education reclaiming its time.',
    visionInstPara4: 'We won\'t chase trends. We won\'t pivot to whatever\'s hot. We\'ll stay focused on institutional documentation, stay humble, and stay committed to the educators who trust us with their most important work.',

    // The Vision - CREATOR MODE
    visionCreatorPara1: 'I don\'t want quickserveit to be the biggest production house. I want it to be the most reliable partner for content creators. I want creators to know that when they send us their raw footage, it\'s in safe hands and will come back with professional polish.',
    visionCreatorPara2: 'Five years from now, I see quickserveit as the quiet constant that creators rely on. Not flashy, not famous, but deeply reliable. The kind of partner you don\'t have to worry about. The kind of production quality that just works, every time.',
    visionCreatorPara3: 'I see us enabling more creators to focus on storytelling instead of software. I see YouTubers spending time on research, not rendering. I see educators building courses, not learning editing tools. I see creators reclaiming their creative time.',
    visionCreatorPara4: 'We won\'t chase trends. We won\'t pivot to whatever\'s hot. We\'ll stay focused on creator production, stay humble, and stay committed to the storytellers who work with us.',

    // A Personal Promise - Shared
    aPersonalPromise: 'A Personal Promise',
    promisePara1: 'If you choose to work with quickserveit, here\'s what I promise you personally:',
    promisePara2: 'I promise we will treat your work like it matters — because it does. Whether it\'s a scholarship form or a YouTube video, it represents someone\'s effort, someone\'s hope, someone\'s livelihood. We will handle it with care.',
    promisePara3: 'I promise we will communicate honestly. If we make a mistake, we\'ll own it. If we can\'t meet a deadline, you\'ll know immediately. If something is outside our expertise, we\'ll say so instead of fumbling through it.',
    promisePara4: 'I promise we will respect your time. No unnecessary meetings. No fluff emails. No "just checking in" messages that waste your day. When we reach out, it\'s because there\'s something you need to know.',
    promisePara5: 'And I promise we will never take your trust for granted. Every project, every interaction, every file we handle — we treat it as an opportunity to prove we deserve your confidence.',

    // Closing Reflection - Shared
    closingReflection: 'A Final Thought',
    closingPara1: 'Building quickserveit has taught me something profound: the best businesses aren\'t built on clever marketing or aggressive growth. They\'re built on solving real problems for real people, with real integrity.',
    closingPara2: 'Every time someone tells me, "You saved me so much time," or "This is exactly what I imagined" — that\'s when I know we\'re on the right path.',
    closingPara3: 'This isn\'t just a service. It\'s a commitment. A commitment to being the partner you wish existed when you were struggling alone. A commitment to making digital work feel less overwhelming and more manageable.',
    closingPara4: 'Thank you for taking the time to read this. Thank you for considering quickserveit. And if you do choose to work with us — thank you for trusting us with your work. We won\'t let you down.',

    // Signature - Shared
    withGratitude: 'With gratitude and commitment,',
    theFounder: '— The Founder',
    quickserveitTeam: 'quickserveit',

    // Pricing Page
    transparentPricing: 'Transparent Pricing',
    pricingSubtitle: 'No hidden fees. Clear scope. Honest timelines.',
    recommended: 'Recommended',
    perTask: 'Per-Task',
    perTaskDesc: 'For occasional documentation needs',
    quoteBased: 'Quote-based',
    perTaskFeatures: 'Single project scope|Standard timeline|WhatsApp support|1 revision round',
    monthlyRetainer: 'Monthly Retainer',
    monthlyRetainerDesc: 'For schools with regular needs',
    custom: 'Custom',
    monthlyRetainerFeatures: 'Priority support|Faster turnaround|Dedicated channel|Unlimited minor tasks|Monthly reporting',
    annualPartnership: 'Annual Partnership',
    annualPartnershipDesc: 'For long-term collaboration',
    annualPartnershipFeatures: 'All retainer benefits|Discounted rates|Annual planning support|Priority scheduling|Dedicated account manager',
    singleVideo: 'Single Video',
    singleVideoDesc: 'For individual projects',
    fromPrice: 'From ₹2,500',
    singleVideoFeatures: 'Up to 15 min final|2 revision rounds|Color grading|Basic sound design',
    monthlyPackage: 'Monthly Package',
    monthlyPackageDesc: 'For regular uploaders',
    monthlyPackageFeatures: '4-8 videos/month|Priority queue|Thumbnails included|Consistent style|Faster turnaround',
    fullProduction: 'Full Production',
    fullProductionDesc: 'For premium content',
    fullProductionFeatures: 'Scripting support|Advanced motion graphics|Custom animations|Music licensing help|Multiple formats',

    // Pricing Page - Additional
    pricingPageTitle: 'Pricing',
    pricingPageSubtitle: 'Transparent pricing for institutional documentation and creator production services.',
    noHiddenFees: 'No hidden fees. Clear scope. Honest timelines.',

    // Pricing Section (Home)
    subscriptionPlans: 'Subscription Plans',
    pricingTitle: 'Pricing',
    pricingInstSubtitle: 'Fair, workload-based pricing that respects your institution',
    pricingCreatorSubtitle: 'Investment in quality that pays dividends in engagement',
    mostPopular: 'Most Popular',
    silver: 'Silver',
    silverFeatures: '30 micro-tasks per month|12 pages of notice typing|Minor timetable edits|Standard support (4-6 hrs)|WhatsApp assistance',
    gold: 'Gold',
    goldFeatures: 'Everything in Silver|Full timetable (1/month)|100 certificate names|PPT formatting|Priority queue support',
    platinum: 'Platinum',
    platinumFeatures: 'Everything in Gold|Multi-department coordination|Large certificate batches|Complex scheduling|Fastest turnaround',
    starter: 'Starter',
    starterFeatures: 'Up to 10 min long-form edit|Basic color correction|Simple transitions|Background music sync|2 revision rounds',
    pro: 'Pro',
    proFeatures: 'Up to 20 min cinematic edit|Advanced color grading|Motion graphics|Sound design|Unlimited revisions',
    studioTier: 'Studio',
    studioFeatures: 'Documentary & series|Full VFX pipeline|Brand identity package|Content strategy|Dedicated partner',
    pricingNote: 'All prices are exclusive of GST. Urgent work may incur additional charges based on complexity and timeline.',
    perMonth: '/month',
    perVideo: '/video',

    // Institutional Pricing - Service Tabs
    // Tab 1 - Examination & Documentation
    pricingInstTab1Label: 'Examination & Documentation',
    pricingInstTab1Title: 'Examination & Documentation',
    pricingInstTab1Desc: 'Professional typing & formatting services with error-free delivery.',
    pricingInstItem1Name: 'English Typing',
    pricingInstItem1Desc: 'Standard documentation & exam papers',
    pricingInstItem1Price: '₹20/page',
    pricingInstItem2Name: 'Hindi Typing',
    pricingInstItem2Desc: 'Unicode formatting • Specialized skill',
    pricingInstItem2Price: '₹25/page',
    pricingInstItem3Name: 'Maths / Science & Other',
    pricingInstItem3Desc: 'Formulas, diagrams, equations, Image, Icon, etc',
    pricingInstItem3Price: '₹30/page',
    pricingInstTab1Highlight: 'Error-free formatting optimized for bulk printing, including equation editor, diagram support, and professional layout.',

    // Tab 2 - Data Architecture (UDISE+ & Scholarship)
    pricingInstTab2Label: 'Data Architecture',
    pricingInstTab2Title: 'Data Architecture (UDISE+ & Scholarship)',
    pricingInstTab2Desc: 'UDISE+ & scholarship processing with zero-rejection guarantee.',
    pricingInstItem4Name: 'UDISE+ Existing Student',
    pricingInstItem4Desc: '2026-27 session update',
    pricingInstItem4Price: '₹10/student',
    pricingInstItem5Name: 'UDISE+ New Student',
    pricingInstItem5Desc: 'Complete account creation • Validation',
    pricingInstItem5Price: '₹15/student',
    pricingInstItem6Name: 'Scholarship Verification',
    pricingInstItem6Desc: 'Portal + Biometric + DSC forwarding',
    pricingInstItem6Price: '₹30–₹50',
    pricingInstItem7Name: 'Daily Tech Support',
    pricingInstItem7Desc: 'Micro to heavy tasks • Full working day',
    pricingInstItem7Price: '₹99–₹499',
    pricingInstTab2Highlight: '99.9% acceptance rate on first submission. Re-submissions handled at no extra cost.',

    // Tab 3 - Terms & Protocol
    pricingInstTab3Label: 'Terms & Protocol',
    pricingInstTab3Title: 'Terms & Protocol',
    pricingInstTab3Desc: 'Built on mutual respect, transparency, and secure collaboration.',
    pricingInstPolicy1Title: 'Payment Terms',
    pricingInstPolicy1Item1Label: 'Small Tasks',
    pricingInstPolicy1Item1Desc: '100% advance (before starting)',
    pricingInstPolicy1Item2Label: 'Large Work',
    pricingInstPolicy1Item2Desc: '50% advance (work starts after confirmation)',
    pricingInstPolicy2Title: 'Corrections Policy',
    pricingInstPolicy2Item1Label: 'Minor corrections',
    pricingInstPolicy2Item1Desc: 'Included within agreed scope',
    pricingInstPolicy2Item2Label: 'New ideas or late changes',
    pricingInstPolicy2Item2Desc: 'Charged separately',
    pricingInstTab3Highlight: 'Built on mutual respect, transparency, and secure collaboration.',

    // Creator Pricing - Service Tabs
    // Tab 1 - Video Production Plans
    pricingCreatorTab1Label: 'Video',
    pricingCreatorPlan1Name: 'Starter',
    pricingCreatorPlan1Price: '₹999',
    pricingCreatorPlan1Desc: 'Simple editing',
    pricingCreatorPlan1Feature1: 'Clean cuts',
    pricingCreatorPlan1Feature2: 'Basic color correction',
    pricingCreatorPlan1Feature3: 'Smooth flow',
    pricingCreatorPlan1Note: 'Simple: Clean, professional basics',
    pricingCreatorPlan2Name: 'Growth',
    pricingCreatorPlan2Price: '₹1,999',
    pricingCreatorPlan2Desc: 'Narrative-focused editing',
    pricingCreatorPlan2Feature1: 'Better pacing',
    pricingCreatorPlan2Feature2: 'Structured storytelling',
    pricingCreatorPlan2Feature3: 'Enhanced flow',
    pricingCreatorPlan2Note: 'Simple: Narrative-focused editing',
    pricingCreatorPlan3Name: 'Authority',
    pricingCreatorPlan3Price: '₹2,999',
    pricingCreatorPlan3Desc: 'Complex editing',
    pricingCreatorPlan3Feature1: 'Advanced color grading',
    pricingCreatorPlan3Feature2: 'Motion graphics',
    pricingCreatorPlan3Feature3: 'VFX elements',
    pricingCreatorPlan3Note: 'Simple: Premium production',
    pricingCreatorPlan4Name: 'Series Plan',
    pricingCreatorPlan4Price: '₹4,999',
    pricingCreatorPlan4Desc: 'Multi-video',
    pricingCreatorPlan4Feature1: 'Consistent episodic',
    pricingCreatorPlan4Feature2: 'Long-form production',
    pricingCreatorPlan4Feature3: 'Series branding',
    pricingCreatorPlan4Note: 'Complex: Multi-episode series',
    pricingCreatorTab1Highlight: 'Professional editing with retention-focused pacing and platform optimization.',

    // Tab 2 - Shorts
    pricingCreatorTab2Label: 'Shorts',
    pricingCreatorTab2Title: 'Viral Shorts',
    pricingCreatorTab2Desc: 'Algorithm-optimized short-form content for maximum engagement',
    pricingCreatorItem1Name: 'Standard Shorts',
    pricingCreatorItem1Desc: 'Clean edits • Trending audio • Quick delivery',
    pricingCreatorItem1Price: '₹499',
    pricingCreatorItem2Name: 'Premium Shorts',
    pricingCreatorItem2Desc: 'Advanced effects • Custom graphics • Priority queue',
    pricingCreatorItem2Price: '₹999',
    pricingCreatorTab2Highlight: 'Platform-Ready: Optimized for Instagram Reels, YouTube Shorts, and TikTok. Includes trending audio selection and platform-specific formatting.',

    // Tab 3 - Design
    pricingCreatorTab3Label: 'Design',
    pricingCreatorDesign1Name: 'Motion Graphics',
    pricingCreatorDesign1Subtitle: '2.5D Animation & VFX',
    pricingCreatorDesign1Item1Name: 'Basic Motion',
    pricingCreatorDesign1Item1Desc: 'Simple animations',
    pricingCreatorDesign1Item1Price: '₹699',
    pricingCreatorDesign1Item2Name: 'Advanced VFX',
    pricingCreatorDesign1Item2Desc: 'Complex effects',
    pricingCreatorDesign1Item2Price: '₹1,999',
    pricingCreatorDesign1Item3Name: 'Pro VFX',
    pricingCreatorDesign1Item3Desc: 'Premium production',
    pricingCreatorDesign1Item3Price: '₹2,699',
    pricingCreatorDesign1Note: 'Perfect for: Perfect for intros, transitions, lower thirds',
    pricingCreatorDesign2Name: 'Thumbnails & Scripts',
    pricingCreatorDesign2Subtitle: 'High-CTR design + scripts',
    pricingCreatorDesign2Item1Name: 'Thumbnail Only',
    pricingCreatorDesign2Item1Desc: 'Design only',
    pricingCreatorDesign2Item1Price: '₹299',
    pricingCreatorDesign2Item2Name: 'With Strategy + Script',
    pricingCreatorDesign2Item2Desc: 'Design + script + consultation',
    pricingCreatorDesign2Item2Price: '₹699',
    pricingCreatorDesign2Note: 'Perfect for: Includes script writing, A/B testing guidance',
    pricingCreatorTab3Highlight: 'Professional design and motion graphics that elevate your content quality.',

    // Tab 4 - Terms
    pricingCreatorTab4Label: 'Terms',
    pricingCreatorTab4Title: 'Clear terms for smooth collaboration',
    pricingCreatorTab4Desc: 'Clear terms for smooth collaboration',
    pricingCreatorPolicy1Title: 'Payment Terms',
    pricingCreatorPolicy1Item1Label: 'Small Projects: 100% Advance',
    pricingCreatorPolicy1Item1Desc: 'Full payment before starting',
    pricingCreatorPolicy1Item2Label: 'Large Projects: 50% Advance',
    pricingCreatorPolicy1Item2Desc: 'Work starts after confirmation',
    pricingCreatorPolicy2Title: 'Revision Policy',
    pricingCreatorPolicy2Item1Label: 'Up to 2 Rounds of Revisions',
    pricingCreatorPolicy2Item1Desc: 'Within agreed scope only',
    pricingCreatorPolicy2Item2Label: 'Major Changes Charged Separately',
    pricingCreatorPolicy2Item2Desc: 'Late changes outside original scope',
    pricingCreatorDeliveryNote: 'Standard: Standard: 3-5 business days for most projects. Rush delivery available for subscription clients at no extra cost.',
    pricingCreatorTab4Highlight: 'Built on transparency, quality, and creative collaboration.',

    // Creator Mode - New Sections
    creatorModeLaunchNote: 'Creator Mode services will be available for work starting from 1st March.',
    servicesOffered: 'Services Offered',
    professionalSoftware: 'Professional Software',
    appsAndTools: 'Apps & Tools',
    upcomingInnovations: 'Upcoming Innovations',
    moreDetailsNote: 'More information will be shared in future updates.',
    comingSoon: 'Coming Soon',

    // Software & Tools
    adobePremierePro: 'Adobe Premiere Pro',
    adobeAfterEffects: 'Adobe After Effects',
    davinciResolve: 'DaVinci Resolve',
    adobePhotoshop: 'Adobe Photoshop',
    adobeIllustrator: 'Adobe Illustrator',
    figma: 'Figma',
    canvaPro: 'Canva Pro',
    capcut: 'CapCut Pro',

    // Upcoming Items
    aiAgents: 'AI Agents & Automation',
    scanToDigital: 'Scan-to-Digital Automation',
    creatorAutomation: 'Creator-side Automation Tools',

    // Creator Mode Status Notice
    creatorModeStatusTitle: 'Development Status',
    creatorModeStatusMessage: 'This service is currently under development and is not live yet. It will be available in the coming months.',
    creatorModeStatusNote: 'We are finalizing our production workflows and quality standards to ensure the best service for creators.',

    // Portfolio Protection
    portfolioLocked: 'Protected Content',
    portfolioAccessTitle: 'Content Access Policy',
    portfolioAccessMessage: 'This portfolio content is intended only for users evaluating our services. The work showcased may represent real institutional use-cases and client projects. To protect privacy and maintain trust, this material is not shared publicly.',
    portfolioAccessNote: 'If you are evaluating our services and would like to discuss specific case studies, please contact us directly.',
    portfolioUnderstand: 'I Understand',
    portfolioContactUs: 'Contact Us',
    portfolioViewContent: 'View Content',

    // Work Experience & Institutional Exposure
    workExperienceInstHeading: 'Work Experience & Institutional Exposure',
    workExperienceCreatorHeading: 'Work Experience & Creator Exposure',
    workExperienceContext: 'A clear and organized way of working focused on accuracy, responsibility, and proper documentation, so schools can manage academic and administrative tasks without confusion or stress.',
    workExperienceDisclaimer: 'All entries are provided solely as factual reference of individual work experience. No guarantees, commitments, or future assurances are stated or implied. Any services under QuickServe IT are offered separately and subject to independent confirmation.',

    // Institutional Work Experience
    workInst1Name: 'B. N. Singh Adarsh Intermediate College, Chandrao',
    workInst1Role: 'Academic IT Support (Individual Experience)',
    workInst1Tasks: 'Student data entry performed using existing school systems|Examination documentation prepared as instructed (question papers, answer sheets, timetables, notices)|Support provided for academic government documentation tasks|Scholarship form assistance including biometric-related work, where required',
    workInst1Closing: 'Work carried out strictly within assigned responsibilities.',

    workInst2Name: 'Sahid Rudra Pratap Intermediate College, Chandrao',
    workInst2Role: 'Examination Documentation Support (Task-Based)',
    workInst2Tasks: 'Typing of examination papers provided by the institution|Basic formatting for print and submission|Scope limited to specific academic documentation tasks',
    workInst2Closing: 'Tasks completed only for the duration assigned.',

    workInst3Name: 'Vidya Public School, Chandrao',
    workInst3Role: 'Preliminary Institutional Interaction',
    workInst3Tasks: 'General discussion regarding possible scholarship-related technical support|Contact information exchanged for future coordination, if required',
    workInst3Closing: 'No tasks were assigned and no services were initiated.',

    // Creator Work Experience
    workCreator1Name: 'Aman — Gorakhpur, Uttar Pradesh',
    workCreator1Role: 'Educational Content & Video Editing',
    workCreator1Tasks: 'Educational video editing workflow involvement|Content structuring and review process|Output preparation aligned with learning formats|Quality refinement practices',
    workCreator1Closing: 'Work reflects individual creative involvement within educational content workflows.',

    workCreator2Name: 'Rajdeep — Gorakhpur, Uttar Pradesh',
    workCreator2Role: 'Script Research & Structuring Support',
    workCreator2Tasks: 'Topic-based research and reference compilation|Conceptual and narrative framework outlining|Script structure organization|Writing-stage assistance and refinement',
    workCreator2Closing: 'Activities reflect participation in script development processes.',

    workCreator3Name: 'Anju — Online (Freelance Reference via LinkedIn)',
    workCreator3Role: 'Documentary Visual & 2.5D Development',
    workCreator3Tasks: '2.5D visual asset development for narrative use|Documentary-style visual composition approach|Technical workflow execution for visual assembly|Story-focused visual alignment',
    workCreator3Closing: 'Work referenced as part of online freelance-based creative interaction.',

    // Creator Practice & Skill Exposure
    creatorPracticeHeading: 'Creator Practice & Skill Exposure',
    creatorPracticeSubtitle: 'A smooth and structured workflow designed for creators, where editing, revisions, and delivery are handled clearly so you can focus on content without unnecessary back and forth.',
    creatorPracticeFootnote: 'This section represents independent creative practice. It is maintained separately from institutional and client-based work records.',

    // Creator Practice Entries
    creatorPractice1Name: 'Aman — Gorakhpur, Uttar Pradesh',
    creatorPractice1Role: 'Educational Content & Video Editing',
    creatorPractice1Tasks: 'Educational video editing workflow involvement|Content structuring and review process|Output preparation aligned with learning formats|Quality refinement practices',
    creatorPractice1Closing: 'Creative involvement maintained as part of independent content practice.',

    creatorPractice2Name: 'Rajdeep — Gorakhpur, Uttar Pradesh',
    creatorPractice2Role: 'Script Research & Structuring Support',
    creatorPractice2Tasks: 'Topic-based research and reference compilation|Conceptual and narrative framework outlining|Script structure organization|Writing-stage assistance and refinement',
    creatorPractice2Closing: 'Participation reflects ongoing script development practice.',

    creatorPractice3Name: 'Anju — Online (Freelance Reference via LinkedIn)',
    creatorPractice3Role: 'Documentary Visual & 2.5D Development',
    creatorPractice3Tasks: '2.5D visual asset development for narrative use|Documentary-style visual composition approach|Technical workflow execution for visual assembly|Story-focused visual alignment',
    creatorPractice3Closing: 'Work referenced through independent online creative interaction.',

    // Legal Pages - Terms & Conditions
    termsTitle: 'Terms & Conditions',
    termsLastUpdated: 'Last Updated: December 2024',
    termsSection1Title: '1. Nature of Services',
    termsSection1Content: 'QuickServe IT provides technical assistance, documentation support, and creative production services to educational institutions and content creators. We do not provide academic content creation, student work, or guaranteed outcomes. Our services are limited to technical execution, formatting, data entry, and production support only.',
    // MODE-SPECIFIC:
    termsSection1ContentInstitutional: 'QuickServe IT provides technical assistance and documentation support services exclusively to educational institutions. We do not provide academic content creation, student work, or guaranteed outcomes. Our services are limited to technical execution, formatting, and data entry support only.',
    termsSection1ContentCreator: 'QuickServe IT provides creative production and technical execution services exclusively to content creators. We do not provide guaranteed performance outcomes, audience growth, or monetization results. Our services are limited to production quality, editing, and design work only.',
    termsSection2Title: '2. Service Scope',
    termsSection2Content: 'Our services include but are not limited to:',
    termsSection2List: 'Examination documentation and formatting|Scholarship application processing support|UDISE+ data entry and verification|Video editing and post-production|Graphic design and motion graphics|Content strategy consultation',
    // MODE-SPECIFIC:
    termsSection2ListInstitutional: 'Examination documentation and formatting|Scholarship application processing support|UDISE+ data entry and verification|Daily digital support for institutions',
    termsSection2ListCreator: 'Video editing and post-production|Thumbnail and graphic design|Motion graphics and animation|Content strategy consultation',
    termsSection3Title: '3. Institutional Work - Supervision Required',
    // MODE-SPECIFIC:
    termsSection3TitleInstitutional: '3. Institutional Work - Supervision Required',
    termsSection3TitleCreator: '3. Creative Work - Final Approval Rights',
    termsSection3Content: 'For all institutional services, the following conditions apply:',
    // MODE-SPECIFIC:
    termsSection3ContentInstitutional: 'For all institutional services, the following conditions apply:',
    termsSection3ContentCreator: 'For all creative production services, the following conditions apply:',
    termsSection3List: 'Final academic decisions remain with the institution|All data provided by the institution must be verified by authorized personnel|We provide technical execution only; academic correctness is the institution\'s responsibility|Institutions must review all deliverables before final submission|Student eligibility and record authenticity are solely institutional responsibilities',
    // MODE-SPECIFIC:
    termsSection3ListInstitutional: 'Final academic decisions remain with the institution|All data provided by the institution must be verified by authorized personnel|We provide technical execution only; academic correctness is the institution\'s responsibility|Institutions must review all deliverables before final submission|Student eligibility and record authenticity are solely institutional responsibilities',
    termsSection3ListCreator: 'Final creative decisions and content approval remain with the creator|Creators must approve all edits before publication|We provide production quality only; content strategy and messaging are the creator\'s responsibility|Creators must review all deliverables before use|Content compliance with platform guidelines is the creator\'s responsibility',
    termsSection4Title: '4. Timelines and Priority Work',
    termsSection4Content: 'Standard timelines are provided at the time of engagement. Urgent requests may incur additional charges and are subject to availability. Working hours are Monday to Saturday, 10:00 AM to 4:00 PM IST. Responses and deliveries occur within working hours only. Delays due to government portal downtime, third-party dependencies, or incomplete information from clients are beyond our control.',
    termsSection5Title: '5. Confidentiality',
    termsSection5Content: 'All institutional data, student records, and creative content are handled with strict confidentiality. Data is retained only for the duration of the project and deleted upon completion unless otherwise agreed. We do not share client information with third parties except as required for service delivery (e.g., government portals).',
    // MODE-SPECIFIC:
    termsSection5ContentInstitutional: 'All institutional data and student records are handled with strict confidentiality. Data is retained only for the duration of the project and deleted upon completion unless otherwise agreed. We do not share client information with third parties except as required for service delivery (e.g., government portals).',
    termsSection5ContentCreator: 'All creative content, scripts, and raw footage are handled with strict confidentiality. Data is retained only for the duration of the project and deleted upon completion unless otherwise agreed. We do not share client content with third parties or use it for promotional purposes without explicit permission.',
    termsSection6Title: '6. Limitation of Liability',
    termsSection6Content: 'QuickServe IT is not responsible for outcomes dependent on external factors including but not limited to: government portal functionality, scholarship approval decisions, student eligibility determinations, content performance on social media platforms, monetization outcomes, or reach and engagement metrics. Our responsibility is limited to the quality of technical execution and production work.',
    // MODE-SPECIFIC:
    termsSection6ContentInstitutional: 'QuickServe IT is not responsible for outcomes dependent on external factors including but not limited to: government portal functionality, scholarship approval decisions, student eligibility determinations, or policy changes. Our responsibility is limited to the quality of technical execution and data entry work.',
    termsSection6ContentCreator: 'QuickServe IT is not responsible for outcomes dependent on external factors including but not limited to: content performance on social media platforms, monetization outcomes, reach and engagement metrics, or platform algorithm changes. Our responsibility is limited to the quality of production and editing work.',
    termsSection7Title: '7. Governing Law',
    termsSection7Content: 'These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Uttar Pradesh, India.',
    termsSection8Title: '8. Creator Practice Disclaimer',
    termsSection8Content: 'Content displayed under sections such as "Creator Practice & Skill Exposure" represents individual creative practice and skill-based involvement only. This content is maintained separately from institutional or client-based work and does not imply commercial delivery, contractual commitment, or service availability. Any institutional work references are listed independently and should not be interpreted as part of creator practice content.',

    // Legal Pages - Privacy Policy
    privacyTitle: 'Privacy Policy',
    privacyLastUpdated: 'Last Updated: December 2024',
    privacySection1Title: '1. Information We Collect',
    privacySection1Content: 'We collect only the information necessary to provide our services:',
    privacySection1List: 'Contact information (name, phone, email) for communication|Institutional data (student records, exam schedules) for documentation services|Creative content (video files, scripts, graphics) for production services|Payment information for billing purposes',
    // MODE-SPECIFIC:
    privacySection1ListInstitutional: 'Contact information (name, phone, email) for communication|Institutional data (student records, exam schedules, UDISE information) for documentation services|Payment information for billing purposes',
    privacySection1ListCreator: 'Contact information (name, phone, email) for communication|Creative content (video files, scripts, graphics, raw footage) for production services|Channel analytics (if shared) for strategy consultation|Payment information for billing purposes',
    privacySection2Title: '2. How We Use Your Information',
    privacySection2Content: 'Your information is used solely for service delivery. We use contact details for project communication, institutional data for documentation work, and creative files for production services. We do not use your data for marketing, advertising, or any purpose beyond the agreed service scope.',
    // MODE-SPECIFIC:
    privacySection2ContentInstitutional: 'Your information is used solely for service delivery. We use contact details for project communication and institutional data for documentation work and government portal submissions. We do not use your data for marketing, advertising, or any purpose beyond the agreed service scope.',
    privacySection2ContentCreator: 'Your information is used solely for service delivery. We use contact details for project communication and creative files for production services. We do not use your content for promotional purposes, marketing, or any purpose beyond the agreed service scope.',
    privacySection3Title: '3. Data Security',
    privacySection3Content: 'We implement the following security practices:',
    privacySection3List: 'Secure file transfer and storage|Limited access to authorized personnel only|Data deletion after project completion|No sharing with third parties except as required for service delivery',
    privacySection4Title: '4. Data Retention',
    privacySection4Content: 'Institutional and creative data is retained only for the duration of the project. Upon completion and final delivery, all client data is permanently deleted from our systems unless you request otherwise for archival purposes.',
    // MODE-SPECIFIC:
    privacySection4ContentInstitutional: 'Institutional data is retained only for the duration of the project. Upon completion and final delivery, all student records and institutional data are permanently deleted from our systems unless you request otherwise for compliance archival purposes.',
    privacySection4ContentCreator: 'Creative content is retained only for the duration of the project. Upon completion and final delivery, all raw footage, scripts, and project files are permanently deleted from our systems unless you request otherwise for archival purposes.',
    privacySection5Title: '5. Your Rights',
    privacySection5Content: 'You have the right to request access to your data, request corrections, or request deletion at any time. Contact us via WhatsApp or email to exercise these rights.',

    // Legal Pages - Disclaimer
    disclaimerTitle: 'Disclaimer',
    disclaimerLastUpdated: 'Last Updated: December 2024',
    disclaimerSection1Title: '1. No Academic Responsibility',
    // MODE-SPECIFIC:
    disclaimerSection1TitleInstitutional: '1. No Academic Responsibility',
    disclaimerSection1TitleCreator: '1. No Performance Responsibility',
    disclaimerSection1Content: 'QuickServe IT provides technical and documentation support only. We are not responsible for academic correctness, student eligibility decisions, or the authenticity of institutional records. All academic and administrative decisions remain the sole responsibility of the institution.',
    // MODE-SPECIFIC:
    disclaimerSection1ContentInstitutional: 'QuickServe IT provides technical and documentation support only. We are not responsible for academic correctness, student eligibility decisions, or the authenticity of institutional records. All academic and administrative decisions remain the sole responsibility of the institution.',
    disclaimerSection1ContentCreator: 'QuickServe IT provides production and editing services only. We are not responsible for content performance, audience reception, or platform monetization. All creative decisions, messaging, and content strategy remain the sole responsibility of the creator.',
    disclaimerSection2Title: '2. Third-Party Dependencies',
    disclaimerSection2Content: 'Our services often depend on government portals, third-party platforms, and external systems. We are not responsible for portal downtime, system errors, policy changes, or technical issues beyond our control. Service timelines may be affected by such dependencies.',
    disclaimerSection3Title: '3. No Outcome Guarantees',
    disclaimerSection3Content: 'For institutional services, we do not guarantee scholarship approvals, government scheme acceptance, or portal submission success. For creator services, we do not guarantee views, subscribers, monetization, engagement, or content performance. Our focus is on production quality and technical execution.',
    // MODE-SPECIFIC:
    disclaimerSection3ContentInstitutional: 'We do not guarantee scholarship approvals, government scheme acceptance, or portal submission success. Our responsibility is limited to accurate data entry and technical execution. Final decisions on applications and submissions are made by government authorities.',
    disclaimerSection3ContentCreator: 'We do not guarantee views, subscribers, monetization, engagement, or content performance. Our responsibility is limited to production quality and technical editing. Final content performance depends on platform algorithms, audience preferences, and market factors.',
    disclaimerSection4Title: '4. Client Responsibility',
    disclaimerSection4Content: 'Clients are responsible for providing accurate information, timely feedback, and necessary approvals. Delays or errors resulting from incomplete or incorrect information provided by the client are not our responsibility.',
    disclaimerSection5Title: '5. Service Modifications',
    disclaimerSection5Content: 'We reserve the right to modify our services, pricing, and terms at any time. Existing engagements will be honored under the terms agreed upon at the time of engagement.',

    // Legal Page Subtitles
    privacyPageSubtitle: 'How we collect, use, and protect your information',
    termsPageSubtitle: 'Terms and conditions for using our services',
    disclaimerPageSubtitle: 'Important information about our services and limitations',
    faqPageTitle: 'Frequently Asked Questions',
    faqPageSubtitle: 'Quick answers to common questions about our services',

    // FAQ Questions and Answers - Institutional
    faqInstQuestion1: 'What documents do I need for scholarship applications?',
    faqInstAnswer1: 'You\'ll need the Institute Portal login credentials, student list, and the Principal\'s Digital Signature (DSC Dongle). We handle remote verification and portal updates, then visit your campus with biometric machines for final authentication. The DSC is essential for the final forwarding step.',

    faqInstQuestion2: 'How long does UDISE+ data entry take?',
    faqInstAnswer2: 'Standard UDISE+ work takes 3-5 working days. We collect your school data, verify accuracy, enter all fields with checks, and provide a preview before final submission. During the annual UDISE+ window, priority scheduling is available.',

    faqInstQuestion3: 'Can you handle examination documentation remotely?',
    faqInstAnswer3: 'Yes! Just share your raw question papers via WhatsApp (photos, PDFs, or handwritten notes). We type and format them professionally, send you a draft for review, and deliver print-ready files via a secure Drive link within 5-7 working days.',

    faqInstQuestion4: 'Is my school data kept confidential?',
    faqInstAnswer4: 'Absolutely. Student records and institutional data are handled with strict confidentiality protocols. We retain data only during the project and delete it after completion unless you request archival. Your trust is our priority.',

    faqInstQuestion5: 'What are your operating hours for institutional support?',
    faqInstAnswer5: 'Our support hours are 10:00 AM to 4:00 PM IST, Monday through Saturday. You can send messages anytime via WhatsApp, and we\'ll respond during working hours. For urgent institutional work, mention \'urgent\' in your message.',

    // FAQ Questions and Answers - Creator
    faqCreatorQuestion1: 'How do I submit my raw footage for editing?',
    faqCreatorAnswer1: 'Local clients (Gorakhpur area) can provide raw files via Pendrive or Hard Disk pickup. Remote clients can share via Google Drive or Telegram. Include a brief with key moments, style references, and target length. We\'ll provide the first cut within the agreed timeline, with 2 revision rounds included in the standard package.',

    faqCreatorQuestion2: 'What video formats do you deliver?',
    faqCreatorAnswer2: 'We deliver in your required format and resolution—typically MP4 (H.264) optimized for platforms like YouTube, Instagram, or Facebook. Custom formats for specific platforms are available on request. All files are platform-ready and upload-optimized.',

    faqCreatorQuestion3: 'How long does video editing take?',
    faqCreatorAnswer3: 'For a 15-20 minute video, expect 7-10 days depending on complexity. Thumbnails take 24-48 hours (same-day rush available). Motion graphics for intros/outros need 5-7 days. We provide realistic timelines—no false promises.',

    faqCreatorQuestion4: 'Do you guarantee views or subscribers?',
    faqCreatorAnswer4: 'No. We focus on production quality and technical execution—retention-style editing, platform optimization, and professional polish. Content performance depends on many external factors. Our commitment is to deliver high-quality, upload-ready content.',

    faqCreatorQuestion5: 'Are music and stock footage included?',
    faqCreatorAnswer5: 'Basic background music sync is included. Paid stock footage, licensed premium music, sound effects, or advanced VFX plugins are not included by default but can be arranged separately. We\'ll discuss this during scope confirmation.',

    // Contact CTA
    questionsAboutPrivacy: 'Questions about our privacy policy?',
    questionsAboutTerms: 'Questions about our terms?',
    questionsAboutDisclaimer: 'Questions about disclaimers?',
    stillHaveQuestions: 'Still have questions? We\'re here to help.',
    contactWhatsApp: 'Contact Us on WhatsApp',
    disclaimer: 'Disclaimer',
    faq: 'FAQ',

    // Footer Disclaimers
    footerDisclaimerInstitutional: 'quickserveit provides technical assistance and documentation services only. Academic correctness, student eligibility, and final record authenticity remain the sole responsibility of the institution. All files handled with strict confidentiality.',
    footerDisclaimerCreator: 'quickserveit provides creative production and technical execution only. Reach, monetization, and performance depend on platform algorithms; production quality is our focus. All files handled with strict confidentiality.',

    // How It Works
    processStep1Title: 'Contact',
    processStep1Desc: 'Reach out via WhatsApp or form with your initial requirements.',
    processStep2Title: 'Requirement Discussion',
    processStep2Desc: 'We discuss the details, scope, and timeline to ensure clarity.',
    processStep3Title: 'Delivery',
    processStep3Desc: 'Receive your high-quality deliverables on time and ready to use.',

    // How We Work Section
    howWeWorkTitle: 'How We Work',
    howWeWorkSubtitle: 'A structured, transparent process tailored to your needs',

    // How We Work - Institutions
    howWeWorkInstIntro: 'A structured, transparent process for schools and educational institutions. We follow a single operational system for all institutional services.',

    instStep1Title: 'Requirement Identification',
    instStep1Desc: 'We understand the exact requirement: examination documentation, scholarship work, UDISE data, daily support, or government documentation.',

    instStep2Title: 'Data Collection (On-site or Remote)',
    instStep2Desc: 'Required data is collected securely through handwritten papers, PDFs, student records, or school visits. Remote institutions supported through online coordination.',

    instStep3Title: 'Execution as per Service',
    instStep3Desc: 'Work is executed: academic typing, scholarship processing, UDISE management, government schemes, TC documentation, or daily administrative support.',

    instStep4Title: 'Accuracy, Verification & Compliance',
    instStep4Desc: 'All work undergoes proper checks to ensure data accuracy, correct formatting, and institutional/government compliance.',

    instStep5Title: 'Final Handover & Closure',
    instStep5Desc: 'Completed work provided through secure Google Drive sharing, official submission, or printed and bound documents (optional).',

    instWorkNotes: 'On-site visits, per-student work, printing, binding, and distance-based services may involve additional charges. Final approvals remain subject to the concerned authority.',

    // How We Work - Creators
    howWeWorkCreatorIntro: 'A professional production workflow from raw input to final output. We work through a clear, scope-defined workflow focused on clean execution and reliable delivery.',

    creatorStep1Title: 'Requirement & Scope Confirmation',
    creatorStep1Desc: 'We understand the requirement, platform, scope of work, and expected output. Timelines finalized after reviewing raw material and workload.',

    creatorStep2Title: 'Raw Material Collection',
    creatorStep2Desc: 'Creators provide raw inputs: video footage for editing, photos for thumbnails, or basic references and branding guidelines. All material handled securely.',

    creatorStep3Title: 'Editing & Creative Execution',
    creatorStep3Desc: 'Work executed as per agreed scope: video editing, structure, cuts, pacing, thumbnail design, and platform-optimized formats (technical compatibility, not performance guarantees).',

    creatorStep4Title: 'Review & Scoped Revisions',
    creatorStep4Desc: 'Edited content shared for review. Revisions limited to agreed scope, not including major re-editing or creative restructuring unless discussed separately.',

    creatorStep5Title: 'Final Output',
    creatorStep5Desc: 'Final outputs provided through secure digital sharing: ready-to-upload videos, thumbnails in correct formats, and platform-compatible files.',

    creatorWorkNotes: 'Paid stock footage, licensed music, premium sound effects, or advanced VFX plugins are not included by default.',

    // Institutional Typewriter Sentences
    instTypewriter1: 'handle examination documentation',
    instTypewriter2: 'support scholarship and UDISE work',
    instTypewriter3: 'manage academic data securely',
    instTypewriter4: 'assist with government compliance',
    instTypewriter5: 'provide daily digital support',

    // Creator Typewriter Sentences
    creatorTypewriter1: 'edit videos for creators',
    creatorTypewriter2: 'prepare upload-ready content',
    creatorTypewriter3: 'design clean thumbnails',
    creatorTypewriter4: 'deliver platform-ready files',


    // Living Website - Services Teaser
    exploreFullArsenal: 'Explore Full Arsenal',

    // Living Website - Featured Work
    featuredProjectTitle: 'Featured Project',
    decodeProject: 'Decode This Project',
    openTheVault: 'Open The Vault',

    // Living Website - System Status
    systemStatus: 'System Status',
    currentStatus: 'Current Status',
    availableForProjects: 'Available for High-Ticket Projects',
    nextSlot: 'Next Slot',
    priorityQueue: 'Priority Queue',

    // Living Website - Portal CTA
    readyToEliminateChaos: 'Ready to Eliminate Digital Chaos?',
    readyToDisintegrate: 'Ready to Disintegrate the Competition?',
    initializeContact: 'Initialize Contact',
  },
  hi: {
    // Brand
    brandName: 'Quickserve IT',
    brandTagline: 'आपका भरोसेमंद टेक पार्टनर।',
    brandTaglineInstitutional: 'शैक्षणिक संस्थानों के लिए आपका शांत डिजिटल साथी।',
    brandTaglineCreator: 'कंटेंट क्रिएटर्स के लिए आपका शांत डिजिटल साथी।',
    betaVersion: 'बीटा',

    // Landing
    secure: 'सुरक्षित',
    india: 'भारत',
    enter: 'आगे बढ़ें',

    // Mode labels
    institutional: 'स्कूल/कॉलेज के लिए',
    creator: 'क्रिएटर के लिए',

    // Navigation
    home: 'होम',
    services: 'सेवाएं',
    studio: 'स्टूडियो',
    portfolio: 'पोर्टफोलियो',
    projects: 'प्रोजेक्ट्स',
    vision: 'विज़न',
    about: 'हमारे बारे में',
    menu: 'मेन्यू',
    language: 'भाषा',
    founder: 'संस्थापक',
    pricing: 'कीमत',
    contact: 'संपर्क करें',

    // Hero Section - Institutional
    heroInst1: 'डिजिटल काम को आसान बनाएं',
    heroInst2: 'स्कूल के काम में मदद',
    heroInst3: 'शांति से काम, साफ फाइलें',
    heroInst4: 'भरोसेमंद साथी',
    heroInstDesc: 'गोरखपुर के स्कूलों के लिए 160+ परीक्षा पेपर टाइप किए और दैनिक तकनीकी सहायता के साथ सिद्ध ट्रैक रिकॉर्ड।',

    // Hero Section - Creator
    heroCreator1: 'प्रोफेशनल वीडियो बनाएं',
    heroCreator2: 'दर्शकों को बांधे रखने वाला एडिटिंग',
    heroCreator3: 'बेहतरीन क्वालिटी',
    heroCreatorDesc: 'अब हमारे प्रीमियम एडिटिंग वर्कफ़्लो के बीटा टेस्टिंग के लिए चुनिंदा क्रिएटर्स को स्वीकार कर रहे हैं।',

    // CTAs
    getStarted: 'शुरू करें',
    startCreating: 'बनाना शुरू करें',
    viewServices: 'सेवाएं देखें',
    seePortfolio: 'हमारा काम देखें',
    contactUs: 'संपर्क करें',
    getQuote: 'कीमत जानें',
    discussRetainer: 'मासिक प्लान पर बात करें',
    explorePartnership: 'साथ मिलकर काम करें',
    discussPackage: 'पैकेज पर बात करें',
    startThisService: 'यह सेवा लें',

    // Stats
    schoolsServed: 'स्कूल जिनकी मदद की',
    projectsDelivered: 'प्रोजेक्ट पूरे किए',
    uptimeGuarantee: 'सर्विस गारंटी',
    documents: 'दस्तावेज तैयार किए',
    viewsGenerated: 'व्यूज मिले',

    // Stats Section - Institutional
    statsProjectsCompleted: 'प्रोजेक्ट पूरे किए',
    statsInstitutionsServed: 'संस्थानों की सेवा की',
    statsClientSatisfaction: 'ग्राहक संतुष्टि',
    statsResponseTime: 'जवाब देने का समय',

    // Stats Section - Creator
    statsVideosEdited: 'वीडियो एडिट किए',
    statsWatchHours: 'वॉच आवर्स जनरेट किए',
    statsCreatorsServed: 'क्रिएटर्स की सेवा की',
    statsTurnaroundTime: 'काम पूरा करने का समय',

    // Value Proposition
    whyChooseUsTitle: 'हमें क्यों चुनें',
    whyChooseUsSubtitle: 'विश्वास पर आधारित, सटीकता से पूर्ण, आपकी मानसिक शांति के लिए डिज़ाइन किया गया',

    // Institutional Values
    valueSecurityTitle: 'पूर्ण गोपनीयता',
    valueSecurityDesc: 'हर छात्र रिकॉर्ड, परीक्षा पेपर और संस्थागत फाइल को सख्त गोपनीयता नियमों के साथ संभाला जाता है। आपका डेटा कभी साझा नहीं किया जाता, हमेशा सुरक्षित रहता है।',
    valueTimelyTitle: 'समय-सीमा पर केंद्रित निष्पादन',
    valueTimelyDesc: 'हम समझते हैं कि शैक्षणिक कैलेंडर इंतजार नहीं करता। यथार्थवादी समय-सीमा, पारदर्शी अपडेट और समय पर डिलीवरी—हर बार।',
    valuePersonalTitle: 'मानवीय-प्रथम सहायता',
    valuePersonalDesc: 'कोई चैटबॉट नहीं, कोई टिकट सिस्टम नहीं। वास्तविक लोगों से सीधा WhatsApp संपर्क जो आपकी संस्थागत जरूरतों को समझते हैं और देखभाल के साथ जवाब देते हैं।',
    valueReliableTitle: 'सिद्ध ट्रैक रिकॉर्ड',
    valueReliableDesc: 'ग्रामीण गोरखपुर के स्कूलों द्वारा UDISE+, छात्रवृत्ति और परीक्षा दस्तावेज़ीकरण के लिए विश्वसनीय। सुसंगत गुणवत्ता, शून्य नाटक।',

    // Creator Values
    valueQualityTitle: 'ब्रॉडकास्ट-गुणवत्ता उत्पादन',
    valueQualityDesc: 'प्रोफेशनल एडिटिंग, सिनेमैटिक कलर ग्रेडिंग और रिटेंशन-केंद्रित कहानी कहना जो आपको अपने क्षेत्र में एक प्राधिकरण के रूप में स्थापित करता है।',
    valueFastTitle: 'यथार्थवादी टर्नअराउंड',
    valueFastDesc: 'कोई झूठे वादे नहीं। स्पष्ट समय-सीमा, ईमानदार संचार और डिलीवरी जो गुणवत्ता और आपके अपलोड शेड्यूल दोनों का सम्मान करती है।',
    valueCreativeTitle: 'दृष्टि-संरेखित निष्पादन',
    valueCreativeDesc: 'हम सिर्फ एडिट नहीं करते—हम आपके रचनात्मक इरादे को समझते हैं और इसे सटीकता के साथ निष्पादित करते हैं, यह सुनिश्चित करते हुए कि आपका संदेश शक्तिशाली रूप से पहुंचे।',
    valueCommittedTitle: 'दीर्घकालिक साझेदारी',
    valueCommittedDesc: 'आपकी वृद्धि हमारा मिशन है। हम आपके चैनल, दर्शकों और लक्ष्यों को समझने में निवेश करते हैं ताकि सुसंगत, रणनीतिक सहायता प्रदान कर सकें।',

    // Contact Form
    contactTitle: 'हमसे बात करें',
    contactSubtitle: 'अपने काम के बारे में बताने के लिए नीचे फॉर्म भरें।',
    yourName: 'आपका नाम',
    mobileNumber: 'मोबाइल नंबर',
    emailAddress: 'ईमेल',
    selectService: 'कौन सी सेवा चाहिए',
    instituteServices: 'स्कूल/कॉलेज की सेवाएं',
    creatorServices: 'क्रिएटर सेवाएं',
    generalInquiry: 'सामान्य जानकारी',
    yourMessage: 'आपका संदेश',
    termsAgree: 'मैं नियम और शर्तों से सहमत हूं',
    sendMessage: 'भेजें',
    messageSent: 'संदेश तैयार है! WhatsApp खुल रहा है...',

    // Footer - Core
    allRightsReserved: 'सर्वाधिकार सुरक्षित',
    privacyPolicy: 'गोपनीयता नीति',
    termsOfService: 'नियम और शर्तें',

    // Footer - Identity & Brand
    footerIdentityTitle: 'पहचान',
    footerBrandName: 'quickserveit',
    footerLocation: 'गोरखपुर, भारत',
    footerCoordinates: '26.7606° उत्तर, 83.3732° पूर्व',
    footerDataSecurity: '100% गोपनीयता गारंटी',

    // Footer - Navigation
    footerNavigationTitle: 'नेविगेशन',
    footerNavHome: 'होम',
    footerNavServices: 'सेवाएं',
    footerNavAbout: 'हमारे बारे में',
    footerNavPricing: 'कीमत',
    footerNavFounder: 'संस्थापक',
    footerNavContact: 'संपर्क करें',

    // Footer - Legal
    footerLegalTitle: 'कानूनी',
    footerLegalPrivacy: 'गोपनीयता नीति',
    footerLegalTerms: 'नियम और शर्तें',
    footerLegalDisclaimer: 'अस्वीकरण',
    footerLegalFAQ: 'FAQ',

    // Footer - Communication
    footerCommunicationTitle: 'संपर्क करें',
    footerWhatsAppCTA: 'WhatsApp पर चैट करें',
    footerWhatsAppDesc: 'सभी पूछताछ के लिए पसंदीदा संचार चैनल।',
    footerAvailability: 'उपलब्धता',

    // Footer - Status & Meta
    footerEstablished: 'स्थापित 2025',
    footerSystemReady: 'सिस्टम तैयार',
    footerCopyright: '© 2025 quickserveit',
    footerConfidential: 'गोपनीय',
    footerAllRightsReserved: 'सर्वाधिकार सुरक्षित',

    // Working Hours
    available: 'उपलब्ध',
    offline: 'ऑफलाइन',
    workingHours: 'काम का समय',
    workingHoursInfo: 'सहायता समय: सुबह 10 से शाम 4 बजे (IST)',
    messagesAccepted: 'समय के बाद संदेश स्वीकार किए जाते हैं',
    workingDays: 'सोमवार से शनिवार',
    outsideHoursNote: 'इस समय के बाद भेजे गए संदेश का जवाब अगले दिन मिलेगा।',

    // Header Status
    availableNow: 'उपलब्ध अभी',
    onRequest: 'अनुरोध पर',

    // Client Work Summary

    // Services Page
    ourServices: 'हमारी सेवाएं',
    creatorStudio: 'क्रिएटर स्टूडियो',
    servicesInstDesc: 'स्कूल और कॉलेज के लिए सही और गोपनीय मदद। हर सेवा आपके काम को आसान बनाने के लिए।',
    servicesCreatorDesc: 'क्रिएटर्स के लिए बेहतरीन प्रोडक्शन सेवाएं। क्वालिटी जो आपके कंटेंट को अगले लेवल पर ले जाए।',
    beforeYouBegin: 'शुरू करने से पहले',
    beforeYouBeginItems: 'सभी सेवाओं के लिए पहले से जानकारी चाहिए|काम का समय: सुबह 10 से शाम 4 बजे (सोम-शनि)|काम के समय में 2 घंटे में जवाब मिलेगा|सभी फाइलें पूरी गोपनीयता से रखी जाती हैं',
    howItWorks: 'कैसे काम करता है',
    whatYouNeed: 'आपको क्या तैयार रखना होगा',
    timeline: 'कितना समय लगेगा',
    whatsappNote: 'WhatsApp खोलने के लिए क्लिक करें (संदेश पहले से लिखा होगा)',

    // Services - Institutional
    examDocTitle: 'परीक्षा पेपर टाइपिंग',
    examDocShort: 'हाथ से लिखे या डिजिटल प्रश्न पत्रों की प्रोफेशनल टाइपिंग और फॉर्मेटिंग।',
    examDocMedium: 'प्रोफेशनल प्रश्न पत्र टाइपिंग',
    examDocFull: 'हम आपकी परीक्षा प्रक्रिया को सुव्यवस्थित करते हैं ताकि शिक्षकों का समय बचे। आप बस हमें हाथ से लिखे प्रश्न भेजें। हमारी टीम उन्हें प्रोफेशनल तरीके से टाइप और फॉर्मेट करके एक सुरक्षित, प्रिंट-तैयार PDF में बदल देती है। यह सुनिश्चित करता है कि हर पेपर मानकीकृत (Standardized) और सुरक्षित हो।',
    examDocSteps: 'कच्चे प्रश्न पत्र साझा करें (PDF, इमेज या हस्तलिखित)|हम प्रश्नों को टाइप और फॉर्मेट करते हैं|सुधार के लिए ड्राफ्ट चेक करें|ड्राइव लिंक के जरिए फाइनल फाइल प्राप्त करें',
    examDocNeeds: 'कच्चे प्रश्न (फोटो/पीडीएफ)|परीक्षा पैटर्न/फॉर्मेट की जानकारी|विषय और कक्षा का विवरण|समय सीमा',
    examDocTimeline: 'मानक: 5-7 कार्य दिवस | तत्काल: 2-3 कार्य दिवस (अतिरिक्त शुल्क)',

    scholarshipTitle: 'छात्रवृत्ति सत्यापन एवं बायोमेट्रिक',
    scholarshipShort: 'इंस्टीट्यूट पोर्टल मैनेजमेंट, रिमोट वेरिफिकेशन और स्कूल जाकर बायोमेट्रिक व DSC डोंगल से फॉरवर्डिंग।',
    scholarshipMedium: 'पोर्टल + बायोमेट्रिक + DSC फॉरवर्डिंग',
    scholarshipFull: 'हम स्कॉलरशिप प्रबंधन का पूरा - "Done-For-You" सिस्टम देते हैं। पहले, हम पोर्टल का सारा डेटा काम रिमोटली पूरा करते हैं। फिर, प्रामाणिकता सुनिश्चित करने के लिए हमारी टीम बायोमेट्रिक मशीनों के साथ आपके कैंपस आती है। अंत में, हम DSC के जरिए डेटा फॉरवर्ड करते हैं, जिससे अप्रूवल की संभावना बढ़ जाती है।',
    scholarshipSteps: 'लॉगिन आईडी और छात्र डेटा साझा करें|हम रिमोटली पोर्टल पर फॉर्म चेक और अपडेट करते हैं|बायोमेट्रिक के लिए हम कैंपस विजिट शेड्यूल करते हैं|DSC (डोंगल) लगाकर फाइनल फॉरवर्डिंग|सबमिशन रिपोर्ट जनरेशन',
    scholarshipNeeds: 'इंस्टीट्यूट पोर्टल आईडी-पासवर्ड|प्रिंसिपल का डिजिटल सिग्नेचर (DSC डोंगल)|सत्यापन के लिए छात्रों की लिस्ट|बायोमेट्रिक कैंप के लिए बिजली/इंटरनेट',
    scholarshipTimeline: 'मानक: 7-10 कार्य दिवस | बायोमेट्रिक शेड्यूलिंग पर निर्भर',

    udiseTitle: 'UDISE+ प्रबंधन (2026-27)',
    udiseShort: 'अप्रैल 2026 से शुरू होने वाले नए सत्र के लिए: नई एंट्री और पुराने छात्रों का अपडेट।',
    udiseMedium: 'पूर्ण 2026-27 सत्र सहायता',
    udiseFull: 'हम आपके स्कूल की UDISE+ फाइलिंग की पूरी जिम्मेदारी लेते हैं। 2026-27 सत्र के लिए, हम डेटा की सफाई, छात्रों का प्रोग्रेशन अपडेट, और नए नामांकन को सरकारी मानकों के अनुसार फाइल करते हैं। हम यह सुनिश्चित करते हैं कि आपका डेटा 100% सटीक हो ताकि भविष्य में मान्यता या फंड को लेकर कोई समस्या न आए।',
    udiseSteps: '2026 सत्र के लिए स्कूल लॉगिन साझा करें|हम पुराने छात्रों का डेटा अपडेट/प्रमोट करते हैं|हम नए छात्रों की प्रोफाइल अपलोड करते हैं|सभी डेटा की जांच करते हैं|फाइनल सबमिट और सर्टिफाई',
    udiseNeeds: 'स्कूल लॉगिन क्रेडेंशियल्स (सशर्त साझा)|वर्तमान वर्ष नामांकन डेटा|बुनियादी ढांचे का विवरण और अपडेट|शिक्षक जानकारी और योग्यता',
    udiseTimeline: 'अप्रैल 2026 के लिए बुकिंग शुरू | पहले आने वाले स्कूलों के लिए प्राथमिकता',

    dailySupportTitle: 'दैनिक टेक्निकल और माइक्रो-टास्क सहायता',
    dailySupportShort: 'सरकारी काम की उलझनें, PDF टूल्स, अनुवाद और नोट्स/पेपर बनाने के लिए तुरंत ऑन-डिमांड सहायता।',
    dailySupportMedium: 'माइक्रो-टास्क और पोर्टल मदद',
    dailySupportFull: 'हमें अपना वर्चुअल ऑफिस असिस्टेंट समझें। जब भी कोई तकनीकी काम आए—जैसे पोर्टल एरर, जटिल फाइल कन्वर्ट करना, या अर्जेंट टाइपिंग—बस हमें मैसेज करें। हम उस काम को तुरंत हल करते हैं, ताकि आपका स्कूल प्रशासन बिना किसी रुकावट के चलता रहे।',
    dailySupportSteps: 'WhatsApp पर काम भेजें (जैसे "यह PDF सही कर दो" या "नोटिस ट्रांसलेट कर दो")|हम लागत बताते हैं (प्रति-काम या प्रति-दिन)|हम तुरंत काम शुरू करते हैं (PDF टूल्स, पोर्टल, टाइपिंग)|तुरंत फाइनल फाइल प्राप्त करें',
    dailySupportNeeds: 'कच्ची फाइलें (PDF/फोटो)|स्पष्ट निर्देश (अनुवाद/कन्वर्ट/बनाना)|सरकारी पोर्टल लॉगिन (यदि पोर्टल का काम हो)',
    dailySupportTimeline: 'माइक्रो-टास्क के लिए तुरंत (30-60 मिनट) | बड़े टाइपिंग काम के लिए उसी दिन।',

    // Services - Creator
    videoEditTitle: 'प्रीमियम लॉन्ग-फॉर्म प्रोडक्शन',
    videoEditShort: 'ब्रॉडकास्ट-क्वालिटी स्टोरीटेलिंग। हम पॉडकास्ट के लिए मल्टी-कैम सिंक और डॉक्यूमेंट्री के लिए सिनेमैटिक कलर ग्रेडिंग में एक्सपर्ट हैं।',
    videoEditMedium: 'सिनेमैटिक एडिटिंग और कलर ग्रेडिंग',
    videoEditFull: 'हम सिर्फ एडिटर नहीं, आपके प्रोडक्शन पार्टनर हैं। आप फुटेज अपलोड करें, हम उसे उच्च क्वालिटी वीडियो में बदलते हैं। मल्टी-कैमरा सिंक, कलर ग्रेडिंग और ऑडियो मिक्सिंग के साथ, हम ऐसा वीडियो तैयार करते हैं जो आपको अपनी फील्ड में एक एक्सपर्ट के रूप में दिखाता है।',
    videoEditSteps: 'कच्ची फाइलें भेजें (Google Drive या पेनड्राइव पिकअप)|Premiere Pro में मल्टी-कैम सिंक और A-Roll क्लीनअप|DaVinci Resolve में सिनेमैटिक कलर ग्रेडिंग|Frame.io से टाइमस्टैम्प फीडबैक के साथ क्लाइंट रिव्यू|आर्काइवल-क्वालिटी एक्सपोर्ट के साथ फाइनल डिलीवरी',
    videoEditNeeds: 'कच्चा फुटेज (कैमरा/मोबाइल/स्क्रीन रिकॉर्डिंग)|ऑडियो फाइलें (यदि अलग से रिकॉर्ड की गई हों)|रेफरेंस वीडियो लिंक|ब्रांडिंग एसेट्स (लोगो/इंट्रो)',
    videoEditTimeline: 'मानक: 15-20 मिनट के वीडियो के लिए 7-10 दिन | जटिलता पर निर्भर करता है',

    shortsTitle: 'वायरल शॉर्ट्स और रील्स',
    shortsShort: 'वायरल होने के लिए डिज़ाइन किया गया। ऑडियंस रिटेंशन बढ़ाने के लिए काइनेटिक टाइपोग्राफी और 4K अपस्केलिंग।',
    shortsMedium: 'वायरल कंटेंट और काइनेटिक टाइपोग्राफी',
    shortsFull: 'हम एल्गोरिदम पर हावी होने में आपकी मदद करते हैं। हम आपके लंबे वीडियो से सबसे दिलचस्प हिस्से निकालते हैं और उन्हें हाई-पेस शॉर्ट्स में बदलते हैं। यह रणनीति आपके चैनल की रीच को बढ़ाती है और नए दर्शकों को आपके पास लाती है, बिना आपकी अतिरिक्त मेहनत के।',
    shortsSteps: 'सोर्स शेयर करें (लॉन्ग वीडियो लिंक या कच्ची फाइलें)|हम वायरल पल और स्क्रिप्ट हुक पहचानते हैं|After Effects में कस्टम काइनेटिक टाइपोग्राफी डिजाइन|मैक्सिमम इम्पैक्ट के लिए कलर ग्रेडिंग और साउंड डिजाइन|Adobe Media Encoder से प्लेटफॉर्म-परफेक्ट क्वालिटी एक्सपोर्ट',
    shortsNeeds: 'अपने पॉडकास्ट/YouTube वीडियो का लिंक (रिपर्पज़िंग के लिए)|या कच्चा वर्टिकल फुटेज (Drive/WeTransfer)|पसंद की रील का उदाहरण (वैकल्पिक)|ब्रांड लोगो (यदि चाहिए)',
    shortsTimeline: 'मानक: 24-48 घंटे प्रति रील | बल्क: मासिक पैकेज उपलब्ध हैं',

    motionTitle: 'मोशन ग्राफिक्स और VFX',
    motionShort: 'हाई-एंड विजुअल इंजीनियरिंग। इसमें 2.5D पैरालेक्स फोटो, कैरेक्टर रिगिंग, कस्टम लोगो रिवील और ग्रीन स्क्रीन कंपोजिटिंग शामिल हैं।',
    motionMedium: '2.5D एनिमेशन और विजुअल इफेक्ट्स',
    motionFull: 'हम आपके कंटेंट को एक महंगे ब्रांड जैसा दिखाते हैं। हमारी टीम ऐसे कस्टम एनिमेशन बनाती है जो मुश्किल टॉपिक्स को आसानी से समझाते हैं। यह विजुअल क्वालिटी आपको आम यूट्यूबर से अलग करती है और आपके कंटेंट की वैल्यू बढ़ाती है।',
    motionSteps: 'ब्रांड एसेट्स और शैली प्राथमिकताएं साझा करें|कॉन्सेप्ट डेवलपमेंट और स्टोरीबोर्डिंग|Illustrator में वेक्टर डिजाइन, After Effects में एनिमेशन|Blender में 3D एलिमेंट्स (यदि जरूरत हो)|प्रोजेक्ट फ़ाइलों के साथ अंतिम डिलीवरी (वैकल्पिक)',
    motionNeeds: 'लोगो फ़ाइलें (अधिमानतः वेक्टर)|ब्रांड रंग और फ़ॉन्ट|संदर्भ एनिमेशन जो आपको पसंद हैं|अवधि और प्रारूप आवश्यकताएँ',
    motionTimeline: 'इंट्रो/आउट्रो: 5-7 दिन | लोअर थर्ड्स: 2-3 दिन | जटिल: कोटेशन आवश्यक',

    thumbnailTitle: 'थंबनेल और स्ट्रेटेजी',
    thumbnailShort: 'पूरा पैकेजिंग सुइट। हम नोशन-बेस्ड स्क्रिप्ट स्ट्रक्चरिंग और मिडजर्नी+फोटोशॉप कंपोजिटिंग के साथ हाई-CTR थंबनेल बनाते हैं।',
    thumbnailMedium: 'हाई-CTR थंबनेल और पहचान',
    thumbnailFull: 'हम पहली नज़र में ही दर्शक को जीतते हैं। हमारी प्रक्रिया वीडियो बनने से पहले ही शुरू हो जाती है। हम रिसर्च करके ऐसा थंबनेल और टाइटल प्लान करते हैं जो जिज्ञासा जगाए। यह सुनिश्चित करता है कि आपके वीडियो पर क्लिक्स आएं और वह वेस्ट न जाए।',
    thumbnailSteps: 'चैनल निश और लक्षित दर्शकों को साझा करें|Notion में स्क्रिप्ट फ्रेमवर्क और टॉपिक रिसर्च|Midjourney में AI आर्ट कॉन्सेप्ट जेनरेट करें|Photoshop में हाई-CTR इम्पैक्ट के लिए कंपोजिट और रिफाइन|फाइनल डिलीवरी: स्क्रिप्ट + थंबनेल + टाइटल सुझाव',
    thumbnailNeeds: 'चैनल लिंक और निश जानकारी|कंटेंट लक्ष्य और लक्षित दर्शक|पसंदीदा थंबनेल रेफरेंस|ब्रांड एसेट्स (लोगो, रंग, फ़ॉन्ट)',
    thumbnailTimeline: 'थंबनेल: 24-48 घंटे | स्क्रिप्ट रूपरेखा: 3-5 दिन | संयुक्त पैकेज: 5-7 दिन',

    // Services Section (Home)
    institutionalServices: 'संस्थागत सेवाएं',
    creativeStudio: 'क्रिएटिव स्टूडियो',
    servicesInstSubtitle: 'शैक्षणिक संस्थानों के लिए व्यापक डिजिटल सहायता',
    servicesCreatorSubtitle: 'आधुनिक क्रिएटर्स के लिए विश्व-स्तरीय प्रोडक्शन',

    // Service Cards - Institutional
    examDocCardTitle: 'परीक्षा दस्तावेज़ीकरण',
    examDocCardSubtitle: 'प्रोफेशनल प्रश्न पत्र टाइपिंग',
    examDocCardDesc: 'हस्तलिखित नोट्स या पीडीएफ से परीक्षा प्रश्न पत्रों की गोपनीय टाइपिंग और फॉर्मेटिंग।',
    scholarshipCardTitle: 'UP छात्रवृत्ति प्रोसेसिंग',
    scholarshipCardSubtitle: 'पोर्टल + बायोमेट्रिक + DSC फॉरवर्डिंग',
    scholarshipCardDesc: 'रिमोट पोर्टल मैनेजमेंट के साथ स्कूल जाकर बायोमेट्रिक वेरिफिकेशन और DSC से फॉरवर्डिंग।',
    udiseCardTitle: 'UDISE+ डेटा प्रबंधन',
    udiseCardSubtitle: 'पूर्ण 2026-27 सत्र सहायता',
    udiseCardDesc: 'संरचित डेटा एंट्री, छात्र पदोन्नति ट्रैकिंग और आर्काइव-रेडी रिकॉर्ड के साथ अंतिम प्रमाणन।',
    govProjectsTitle: 'सरकारी प्रोजेक्ट्स',
    govProjectsSubtitle: 'तदर्थ अनुपालन सहायता',
    govProjectsDesc: 'तदर्थ परिपत्रों के लिए त्वरित प्रतिक्रिया, अनुपालन मैपिंग और विशेष सरकारी पोर्टल सहायता।',
    dailySupportCardTitle: 'दैनिक डिजिटल सहायता',
    dailySupportCardSubtitle: 'माइक्रो-टास्क और पोर्टल मदद',
    dailySupportCardDesc: 'माइक्रो-सेवाएं: PDF से इमेज, हिंदी-अंग्रेजी अनुवाद, मॉडल पेपर बनाना और पोर्टल की त्रुटियां सुलझाना।',
    subscriptionTitle: 'सब्सक्रिप्शन प्लान',
    subscriptionSubtitle: 'मासिक रिटेनर विकल्प',
    subscriptionDesc: 'प्राथमिकता टर्नअराउंड के साथ अनुमानित मासिक सहायता प्रदान करने वाले सिल्वर, गोल्ड और प्लेटिनम टियर।',

    // Service Cards - Creator
    videoCardTitle: 'वीडियो एवं पोस्ट-प्रोडक्शन',
    videoCardSubtitle: 'सिनेमैटिक एडिटिंग और कलर ग्रेडिंग',
    videoCardDesc: 'पूरा पोस्ट-प्रोडक्शन: कट्स, कलर, साउंड और रिटेंशन के लिए 2.5D विजुअल्स।',
    brandingCardTitle: 'ब्रांडिंग एवं डिज़ाइन',
    brandingCardSubtitle: 'हाई-CTR थंबनेल और पहचान',
    brandingCardDesc: 'उच्च-CTR थंबनेल, ब्रांड पहचान प्रणाली और ध्यान आकर्षित करने वाले इवेंट पोस्टर।',
    motionCardTitle: 'मोशन ग्राफिक्स एवं VFX',
    motionCardSubtitle: '2.5D एनिमेशन और विजुअल इफेक्ट्स',
    motionCardDesc: 'कस्टम लोगो इंट्रो, काइनेटिक टाइपोग्राफी, लोअर थर्ड्स और प्रोफेशनल ग्रीन स्क्रीन क्लीनअप।',
    strategyCardTitle: 'कंटेंट रणनीति',
    strategyCardSubtitle: 'स्क्रिप्टिंग और ग्रोथ प्लानिंग',
    strategyCardDesc: 'स्क्रिप्टिंग, SEO अनुकूलन, कंटेंट कैलेंडर और चैनल विकास प्रबंधन।',
    aiCampaignsTitle: 'AI विज़ुअल कैंपेन',
    aiCampaignsSubtitle: 'AI-संचालित विजुअल कंटेंट',
    aiCampaignsDesc: 'भविष्य के लिए तैयार AI-संचालित 2D/3D विज़ुअल माइक्रो-कैंपेन और फिल्मलेस प्रीमियम विज्ञापन।',
    studioSpaceTitle: 'क्रिएटर स्टूडियो स्पेस',
    studioSpaceSubtitle: 'प्रोफेशनल रिकॉर्डिंग वातावरण',
    studioSpaceDesc: 'जल्द आ रहा है: स्थानीय प्रतिभा इनक्यूबेशन के लिए प्रोफेशनल गियर के साथ साउंडप्रूफ वातावरण।',

    // About Page
    aboutTitle: 'परिचय',
    aboutIntro: 'हम उन लोगों के लिए डिजिटल बोझ कम करने के लिए मौजूद हैं जो सार्थक कार्य करते हैं — चाहे वह अगली पीढ़ी को शिक्षित करना हो या कंटेंट के माध्यम से दर्शक बनाना।',
    ourPhilosophy: 'हमारा दर्शन',
    confidentialityTitle: 'गोपनीयता सर्वोपरि',
    confidentialityDesc: 'हर फाइल, हर बातचीत, हर डेटा को विवेक के साथ संभाला जाता है। हम संस्थागत रिकॉर्ड और क्रिएटर कंटेंट दोनों की संवेदनशीलता को समझते हैं।',
    realisticTimelinesTitle: 'यथार्थवादी समय-सीमा',
    realisticTimelinesDesc: 'हम अधिक वादे नहीं करते। स्पष्ट समय-सीमा की अपेक्षा करें, किसी भी देरी के बारे में ईमानदार संचार के साथ। जल्दबाजी का काम खराब काम है।',
    calmCommTitle: 'सुगम संचार',
    calmCommDesc: 'कोई आक्रामक फॉलो-अप नहीं, कोई जबरदस्त बिक्री नहीं। हम कार्य समय में जवाब देते हैं, संदेश स्पष्ट रखते हैं और आपके समय का सम्मान करते हैं।',
    focusedExpertiseTitle: 'केंद्रित विशेषज्ञता',
    focusedExpertiseDesc: 'हम सब कुछ नहीं करते। हम संस्थागत दस्तावेज़ीकरण और क्रिएटर प्रोडक्शन करते हैं — गहराई से और श्रेष्ठता से। यही हमारा फोकस है।',
    whoWeServe: 'हम किसकी सेवा करते हैं',
    institutions: 'संस्थान',
    institutionsList: 'दस्तावेज़ीकरण सहायता की आवश्यकता वाले विद्यालय और कॉलेज|UDISE+, परीक्षा, छात्रवृत्ति प्रबंधित करने वाले प्रशासक|अनुपालन सहायता की आवश्यकता वाले शैक्षिक ट्रस्ट|विश्वसनीय डिजिटल साझेदार खोजने वाले विद्यालय',
    creators: 'क्रिएटर्स',
    creatorsList: 'प्रोफेशनल संपादन सहायता की आवश्यकता वाले YouTubers|ऑनलाइन कोर्स कंटेंट बनाने वाले शिक्षक|विज़ुअल कंटेंट की आवश्यकता वाले पॉडकास्टर्स|प्रीमियम प्रोडक्शन गुणवत्ता चाहने वाले ब्रांड्स',
    whatWeDontDo: 'हम क्या नहीं करते',
    transparencyNote: 'पारदर्शिता हमारे लिए महत्वपूर्ण है। यहां वह है जो हमारे दायरे से बाहर है:',
    dontDoList: 'छात्रों के लिए शैक्षणिक लेखन या कंटेंट निर्माण|गारंटीड व्यूज, सब्सक्राइबर्स या मुद्रीकरण|किसी भी संस्थागत रिकॉर्ड में हेराफेरी|24/7 उपलब्धता या तत्काल प्रतिक्रियाएं|वेब डेवलपमेंट या सॉफ्टवेयर प्रोजेक्ट्स|सोशल मीडिया प्रबंधन या मार्केटिंग',

    // Pricing Page
    transparentPricing: 'पारदर्शी मूल्य निर्धारण',
    pricingSubtitle: 'कोई छिपी हुई फीस नहीं। स्पष्ट दायरा। ईमानदार समय-सीमा।',
    recommended: 'अनुशंसित',
    perTask: 'प्रति-कार्य',
    perTaskDesc: 'कभी-कभी दस्तावेज़ीकरण आवश्यकताओं के लिए',
    quoteBased: 'कोटेशन-आधारित',
    perTaskFeatures: 'एकल प्रोजेक्ट स्कोप|मानक समय-सीमा|WhatsApp सहायता|1 रिवीज़न राउंड',
    monthlyRetainer: 'मासिक रिटेनर',
    monthlyRetainerDesc: 'नियमित आवश्यकताओं वाले विद्यालयों के लिए',
    custom: 'कस्टम',
    monthlyRetainerFeatures: 'प्राथमिकता सहायता|तेज़ टर्नअराउंड|समर्पित चैनल|असीमित छोटे कार्य|मासिक रिपोर्टिंग',
    annualPartnership: 'वार्षिक साझेदारी',
    annualPartnershipDesc: 'दीर्घकालिक सहयोग के लिए',
    annualPartnershipFeatures: 'सभी रिटेनर लाभ|रियायती दरें|वार्षिक योजना सहायता|प्राथमिकता शेड्यूलिंग|समर्पित खाता प्रबंधक',
    singleVideo: 'सिंगल वीडियो',
    singleVideoDesc: 'व्यक्तिगत प्रोजेक्ट्स के लिए',
    fromPrice: '₹2,500 से',
    singleVideoFeatures: '15 मिनट तक फाइनल|2 रिवीज़न राउंड|कलर ग्रेडिंग|बेसिक साउंड डिज़ाइन',
    monthlyPackage: 'मासिक पैकेज',
    monthlyPackageDesc: 'नियमित अपलोडर्स के लिए',
    monthlyPackageFeatures: '4-8 वीडियो/माह|प्राथमिकता कतार|थंबनेल शामिल|सुसंगत शैली|तेज़ टर्नअराउंड',
    fullProduction: 'फुल प्रोडक्शन',
    fullProductionDesc: 'प्रीमियम कंटेंट के लिए',
    fullProductionFeatures: 'स्क्रिप्टिंग सहायता|एडवांस्ड मोशन ग्राफिक्स|कस्टम एनिमेशन|म्यूज़िक लाइसेंसिंग सहायता|मल्टीपल फॉर्मेट्स',

    // Pricing Section (Home)
    subscriptionPlans: 'सब्सक्रिप्शन प्लान',
    pricingTitle: 'मूल्य निर्धारण',
    pricingInstSubtitle: 'उचित, कार्यभार-आधारित मूल्य निर्धारण जो आपकी संस्था का सम्मान करता है',
    pricingCreatorSubtitle: 'गुणवत्ता में निवेश जो एंगेजमेंट में लाभांश देता है',
    mostPopular: 'सबसे लोकप्रिय',
    silver: 'सिल्वर',
    silverFeatures: '30 माइक्रो-टास्क प्रति माह|12 पेज नोटिस टाइपिंग|मामूली टाइमटेबल एडिट्स|स्टैंडर्ड सपोर्ट (4-6 घंटे)|WhatsApp सहायता',
    gold: 'गोल्ड',
    goldFeatures: 'सिल्वर में सब कुछ|फुल टाइमटेबल (1/माह)|100 सर्टिफिकेट नाम|PPT फॉर्मेटिंग|प्राथमिकता कतार सपोर्ट',
    platinum: 'प्लेटिनम',
    platinumFeatures: 'गोल्ड में सब कुछ|मल्टी-डिपार्टमेंट कोऑर्डिनेशन|बड़े सर्टिफिकेट बैच|जटिल शेड्यूलिंग|सबसे तेज़ टर्नअराउंड',
    starter: 'स्टार्टर',
    starterFeatures: '10 मिनट तक लॉन्ग-फॉर्म एडिट|बेसिक कलर करेक्शन|सिंपल ट्रांज़िशन|बैकग्राउंड म्यूज़िक सिंक|2 रिवीज़न राउंड',
    pro: 'प्रो',
    proFeatures: '20 मिनट तक सिनेमैटिक एडिट|एडवांस्ड कलर ग्रेडिंग|मोशन ग्राफिक्स|साउंड डिज़ाइन|अनलिमिटेड रिवीज़न',
    studioTier: 'स्टूडियो',
    studioFeatures: 'डॉक्यूमेंट्री और सीरीज़|फुल VFX पाइपलाइन|ब्रांड आइडेंटिटी पैकेज|कंटेंट स्ट्रैटेजी|डेडिकेटेड पार्टनर',
    pricingNote: 'सभी मूल्य GST को छोड़कर हैं। अर्जेंट कार्य में जटिलता और समय-सीमा के आधार पर अतिरिक्त शुल्क लग सकता है।',
    perMonth: '/माह',
    perVideo: '/video',

    // Institutional Pricing - Service Tabs
    // Tab 1 - Examination & Documentation
    pricingInstTab1Label: 'परीक्षा और दस्तावेज़ीकरण',
    pricingInstTab1Title: 'परीक्षा और दस्तावेज़ीकरण',
    pricingInstTab1Desc: 'त्रुटि-मुक्त डिलीवरी के साथ प्रोफेशनल टाइपिंग और फॉर्मेटिंग सेवाएं।',
    pricingInstItem1Name: 'अंग्रेजी टाइपिंग',
    pricingInstItem1Desc: 'मानक दस्तावेज़ और परीक्षा पेपर',
    pricingInstItem1Price: '₹20/पेज',
    pricingInstItem2Name: 'हिंदी टाइपिंग',
    pricingInstItem2Desc: 'यूनिकोड फॉर्मेटिंग • विशेष कौशल',
    pricingInstItem2Price: '₹25/पेज',
    pricingInstItem3Name: 'गणित / विज्ञान और अन्य',
    pricingInstItem3Desc: 'फॉर्मूला, डायग्राम, समीकरण, इमेज, आइकन आदि',
    pricingInstItem3Price: '₹30/पेज',
    pricingInstTab1Highlight: 'बल्क प्रिंटिंग के लिए अनुकूलित त्रुटि-मुक्त फॉर्मेटिंग, जिसमें समीकरण संपादक, डायग्राम सपोर्ट और प्रोफेशनल लेआउट शामिल है।',

    // Tab 2 - Data Architecture (UDISE+ & Scholarship)
    pricingInstTab2Label: 'डेटा आर्किटेक्चर',
    pricingInstTab2Title: 'डेटा आर्किटेक्चर (UDISE+ और छात्रवृत्ति)',
    pricingInstTab2Desc: 'शून्य-अस्वीकृति गारंटी के साथ UDISE+ और छात्रवृत्ति प्रोसेसिंग।',
    pricingInstItem4Name: 'UDISE+ मौजूदा छात्र',
    pricingInstItem4Desc: '2026-27 सत्र अपडेट',
    pricingInstItem4Price: '₹10/छात्र',
    pricingInstItem5Name: 'UDISE+ नया छात्र',
    pricingInstItem5Desc: 'पूर्ण खाता निर्माण • सत्यापन',
    pricingInstItem5Price: '₹15/छात्र',
    pricingInstItem6Name: 'छात्रवृत्ति सत्यापन',
    pricingInstItem6Desc: 'पोर्टल + बायोमेट्रिक + DSC फॉरवर्डिंग',
    pricingInstItem6Price: '₹30–₹50',
    pricingInstItem7Name: 'दैनिक टेक सपोर्ट',
    pricingInstItem7Desc: 'माइक्रो से भारी कार्य • पूरा कार्य दिवस',
    pricingInstItem7Price: '₹99–₹499',
    pricingInstTab2Highlight: 'पहली सबमिशन पर 99.9% स्वीकृति दर। पुनः सबमिशन बिना अतिरिक्त लागत के संभाला जाता है।',

    // Tab 3 - Terms & Protocol
    pricingInstTab3Label: 'नियम और प्रोटोकॉल',
    pricingInstTab3Title: 'नियम और प्रोटोकॉल',
    pricingInstTab3Desc: 'आपसी सम्मान, पारदर्शिता और सुरक्षित सहयोग पर आधारित।',
    pricingInstPolicy1Title: 'भुगतान नियम',
    pricingInstPolicy1Item1Label: 'छोटे कार्य',
    pricingInstPolicy1Item1Desc: '100% एडवांस (शुरू करने से पहले)',
    pricingInstPolicy1Item2Label: 'बड़े कार्य',
    pricingInstPolicy1Item2Desc: '50% एडवांस (पुष्टि के बाद कार्य शुरू)',
    pricingInstPolicy2Title: 'सुधार नीति',
    pricingInstPolicy2Item1Label: 'मामूली सुधार',
    pricingInstPolicy2Item1Desc: 'सहमत दायरे में शामिल',
    pricingInstPolicy2Item2Label: 'नए विचार या देर से बदलाव',
    pricingInstPolicy2Item2Desc: 'अलग से शुल्क लिया जाता है',
    pricingInstTab3Highlight: 'आपसी सम्मान, पारदर्शिता और सुरक्षित सहयोग पर आधारित।',

    // Creator Pricing - Service Tabs (Hindi)
    // Tab 1 - Video Production Plans
    pricingCreatorTab1Label: 'वीडियो प्रोडक्शन',
    pricingCreatorPlan1Name: 'स्टार्टर प्लान',
    pricingCreatorPlan1Price: '₹2,500/वीडियो',
    pricingCreatorPlan1Desc: 'प्रोफेशनल एडिटिंग के साथ शुरुआत के लिए बिल्कुल सही',
    pricingCreatorPlan1Feature1: '10 मिनट तक का फाइनल वीडियो',
    pricingCreatorPlan1Feature2: 'बेसिक कलर करेक्शन',
    pricingCreatorPlan1Feature3: '2 रिविजन राउंड',
    pricingCreatorPlan1Note: 'शुरुआती और छोटे चैनलों के लिए आदर्श',
    pricingCreatorPlan2Name: 'प्रो प्लान',
    pricingCreatorPlan2Price: '₹5,000/वीडियो',
    pricingCreatorPlan2Desc: 'गंभीर क्रिएटर्स के लिए प्रोफेशनल क्वालिटी',
    pricingCreatorPlan2Feature1: '20 मिनट तक का सिनेमैटिक एडिट',
    pricingCreatorPlan2Feature2: 'एडवांस्ड कलर ग्रेडिंग',
    pricingCreatorPlan2Feature3: 'असीमित रिविजन',
    pricingCreatorPlan2Note: 'YouTubers के लिए सबसे लोकप्रिय विकल्प',
    pricingCreatorPlan3Name: 'स्टूडियो प्लान',
    pricingCreatorPlan3Price: '₹10,000/वीडियो',
    pricingCreatorPlan3Desc: 'टॉप-टियर कंटेंट के लिए प्रीमियम प्रोडक्शन',
    pricingCreatorPlan3Feature1: 'डॉक्यूमेंट्री और सीरीज सपोर्ट',
    pricingCreatorPlan3Feature2: 'फुल VFX पाइपलाइन',
    pricingCreatorPlan3Feature3: 'डेडिकेटेड पार्टनर',
    pricingCreatorPlan3Note: 'प्रोफेशनल क्रिएटर्स और ब्रांड्स के लिए',
    pricingCreatorPlan4Name: 'एंटरप्राइज प्लान',
    pricingCreatorPlan4Price: 'कस्टम कोट',
    pricingCreatorPlan4Desc: 'बड़े पैमाने की परियोजनाओं के लिए अनुकूलित समाधान',
    pricingCreatorPlan4Feature1: 'मल्टी-वीडियो पैकेज',
    pricingCreatorPlan4Feature2: 'ब्रांड आइडेंटिटी पैकेज',
    pricingCreatorPlan4Feature3: 'कंटेंट स्ट्रेटेजी शामिल',
    pricingCreatorPlan4Note: 'कस्टम प्राइसिंग के लिए संपर्क करें',
    pricingCreatorTab1Highlight: 'सभी प्लान में प्रोफेशनल एडिटिंग, साउंड डिज़ाइन और प्लेटफॉर्म ऑप्टिमाइजेशन शामिल है।',

    // Tab 2 - Shorts & Reels (Hindi)
    pricingCreatorTab2Label: 'शॉर्ट्स और रील्स',
    pricingCreatorTab2Title: 'वायरल शॉर्ट्स और रील्स',
    pricingCreatorTab2Desc: 'अधिकतम पहुंच के लिए एल्गोरिदम-ऑप्टिमाइज्ड वर्टिकल कंटेंट।',
    pricingCreatorItem1Name: 'सिंगल शॉर्ट/रील',
    pricingCreatorItem1Desc: 'एक हाई-क्वालिटी वर्टिकल वीडियो',
    pricingCreatorItem1Price: '₹500/रील',
    pricingCreatorItem2Name: 'बल्क पैकेज (10 रील्स)',
    pricingCreatorItem2Desc: 'मासिक बैच प्रोडक्शन',
    pricingCreatorItem2Price: '₹4,000/महीना',
    pricingCreatorTab2Highlight: 'काइनेटिक टाइपोग्राफी, कैप्शन और प्लेटफॉर्म-स्पेसिफिक ऑप्टिमाइजेशन शामिल।',

    // Tab 3 - Design Services (Hindi)
    pricingCreatorTab3Label: 'डिज़ाइन सर्विसेज',
    pricingCreatorDesign1Name: 'थंबनेल पैकेज',
    pricingCreatorDesign1Subtitle: 'हाई-CTR थंबनेल डिज़ाइन',
    pricingCreatorDesign1Item1Name: 'सिंगल थंबनेल',
    pricingCreatorDesign1Item1Desc: 'एक कस्टम थंबनेल',
    pricingCreatorDesign1Item1Price: '₹300',
    pricingCreatorDesign1Item2Name: 'A/B टेस्ट पैकेज',
    pricingCreatorDesign1Item2Desc: 'टेस्टिंग के लिए 3 वेरिएंट',
    pricingCreatorDesign1Item2Price: '₹800',
    pricingCreatorDesign1Item3Name: 'मासिक पैकेज',
    pricingCreatorDesign1Item3Desc: '10 थंबनेल/महीना',
    pricingCreatorDesign1Item3Price: '₹2,500',
    pricingCreatorDesign1Note: 'कंपटीटर एनालिसिस और टाइटल सुझाव शामिल',
    pricingCreatorDesign2Name: 'मोशन ग्राफिक्स',
    pricingCreatorDesign2Subtitle: 'इंट्रो, आउट्रो और एनिमेशन',
    pricingCreatorDesign2Item1Name: 'लोगो इंट्रो/आउट्रो',
    pricingCreatorDesign2Item1Desc: '5-10 सेकंड एनिमेशन',
    pricingCreatorDesign2Item1Price: '₹1,500',
    pricingCreatorDesign2Item2Name: 'लोअर थर्ड्स पैक',
    pricingCreatorDesign2Item2Desc: 'एनिमेटेड नेम टैग',
    pricingCreatorDesign2Item2Price: '₹2,000',
    pricingCreatorDesign2Note: 'अनुरोध पर कस्टम एनिमेशन उपलब्ध',
    pricingCreatorTab3Highlight: 'प्रोफेशनल डिज़ाइन जो आपकी ब्रांड आइडेंटिटी को बढ़ाता है।',

    // Tab 4 - Terms & Policy (Hindi)
    pricingCreatorTab4Label: 'नियम और नीति',
    pricingCreatorTab4Title: 'नियम और नीति',
    pricingCreatorTab4Desc: 'विश्वास, पारदर्शिता और रचनात्मक सहयोग पर आधारित।',
    pricingCreatorPolicy1Title: 'भुगतान शर्तें',
    pricingCreatorPolicy1Item1Label: 'छोटी परियोजनाएं',
    pricingCreatorPolicy1Item1Desc: '100% एडवांस (शुरू करने से पहले)',
    pricingCreatorPolicy1Item2Label: 'बड़ी परियोजनाएं',
    pricingCreatorPolicy1Item2Desc: '50% एडवांस (पुष्टि के बाद काम शुरू)',
    pricingCreatorPolicy2Title: 'रिविजन नीति',
    pricingCreatorPolicy2Item1Label: 'शामिल रिविजन',
    pricingCreatorPolicy2Item1Desc: 'प्लान के अनुसार (स्टार्टर के लिए 2 राउंड, प्रो के लिए असीमित)',
    pricingCreatorPolicy2Item2Label: 'स्कोप परिवर्तन',
    pricingCreatorPolicy2Item2Desc: 'नए विचार या बड़े बदलाव अलग से चार्ज किए जाते हैं',
    pricingCreatorDeliveryNote: 'मानक डिलीवरी: लॉन्ग-फॉर्म के लिए 7-10 दिन, शॉर्ट्स/थंबनेल के लिए 24-48 घंटे।',
    pricingCreatorTab4Highlight: 'विश्वास, पारदर्शिता और रचनात्मक सहयोग पर आधारित।',

    // Creator Mode - New Sections
    creatorModeLaunchNote: 'क्रिएटर मोड सेवाएं 1 मार्च से कार्य के लिए उपलब्ध होंगी।',
    servicesOffered: 'प्रदान की जाने वाली सेवाएं',
    professionalSoftware: 'प्रोफेशनल सॉफ्टवेयर',
    appsAndTools: 'ऐप्स और टूल्स',
    upcomingInnovations: 'आगामी नवाचार',
    moreDetailsNote: 'भविष्य के अपडेट में अधिक जानकारी साझा की जाएगी।',
    comingSoon: 'शीघ्र आ रहा है',

    // Software & Tools (Keep in English - Technical Terms)
    adobePremierePro: 'Adobe Premiere Pro',
    adobeAfterEffects: 'Adobe After Effects',
    davinciResolve: 'DaVinci Resolve',
    adobePhotoshop: 'Adobe Photoshop',
    adobeIllustrator: 'Adobe Illustrator',
    figma: 'Figma',
    canvaPro: 'Canva Pro',
    capcut: 'CapCut Pro',

    // Upcoming Items
    aiAgents: 'AI एजेंट्स और ऑटोमेशन',
    scanToDigital: 'स्कैन-टू-डिजिटल ऑटोमेशन',
    creatorAutomation: 'क्रिएटर-साइड ऑटोमेशन टूल्स',

    // Creator Mode Status Notice
    creatorModeStatusTitle: 'विकास स्थिति',
    creatorModeStatusMessage: 'यह सेवा वर्तमान में विकास के अधीन है और अभी तक लाइव नहीं है। यह आगामी महीनों में उपलब्ध होगी।',
    creatorModeStatusNote: 'हम क्रिएटर्स के लिए सर्वोत्तम सेवा सुनिश्चित करने के लिए अपने प्रोडक्शन वर्कफ़्लो और गुणवत्ता मानकों को अंतिम रूप दे रहे हैं।',

    // Portfolio Protection
    portfolioLocked: 'संरक्षित सामग्री',
    portfolioAccessTitle: 'सामग्री एक्सेस नीति',
    portfolioAccessMessage: 'यह पोर्टफोलियो सामग्री केवल उन उपयोगकर्ताओं के लिए है जो हमारी सेवाओं का मूल्यांकन कर रहे हैं। प्रदर्शित कार्य वास्तविक संस्थागत उपयोग-मामलों और क्लाइंट प्रोजेक्ट्स का प्रतिनिधित्व कर सकता है। गोपनीयता की रक्षा और विश्वास बनाए रखने के लिए, यह सामग्री सार्वजनिक रूप से साझा नहीं की जाती है।',
    portfolioAccessNote: 'यदि आप हमारी सेवाओं का मूल्यांकन कर रहे हैं और विशिष्ट केस स्टडीज पर चर्चा करना चाहते हैं, तो कृपया हमसे सीधे संपर्क करें।',
    portfolioUnderstand: 'मैं सहमत हूं',
    portfolioContactUs: 'संपर्क करें',
    portfolioViewContent: 'सामग्री देखें',

    // Institutional About Page - Hindi
    instAboutHeaderTitle: 'प्रतिबद्धता',
    instAboutHeaderSubtitle: 'गोरखपुर के शैक्षिक पारिस्थितिकी तंत्र को सटीकता, गोपनीयता और जवाबदेही के साथ सेवा प्रदान करना।',
    instAboutMissionTitle: 'मैं यह क्यों करता हूं',
    instAboutMissionContent: 'मैंने यह सेवा इसलिए शुरू की क्योंकि मैंने शिक्षकों को पढ़ाने के बजाय डिजिटल कागजी कार्रवाई में डूबते देखा। मेरा मिशन सरल है: आपके दस्तावेज़ीकरण के बोझ को संभालना ताकि आप जो मायने रखता है उस पर ध्यान केंद्रित कर सकें — शिक्षा।',
    instAboutWhyUsTitle: 'मैं कैसे काम करता हूं',
    instAboutPrivacyTitle: 'गोपनीयता सर्वप्रथम',
    instAboutPrivacyDesc: 'आपका छात्र डेटा पवित्र है। मैं हर रिकॉर्ड को उस गोपनीयता के साथ संभालता हूं जिसके वह हकदार है। कोई शॉर्टकट नहीं, कोई समझौता नहीं।',
    instAboutSpeedTitle: 'विश्वसनीय डिलीवरी',
    instAboutSpeedDesc: 'मैं आपको यथार्थवादी समयसीमा देता हूं और उन पर टिका रहता हूं। कोई झूठे वादे नहीं, कोई अंतिम समय की चौंकाने वाली बातें नहीं।',
    instAboutFormatTitle: 'तकनीकी सटीकता',
    instAboutFormatDesc: 'अंग्रेजी से हिंदी यूनिकोड तक, सरल पाठ से जटिल समीकरणों तक — मैं पेशेवर स्वरूपण के साथ सब कुछ संभालता हूं।',
    instAboutLocalPromiseTitle: 'स्थानीय वादा',
    instAboutLocalPromiseText: 'गोरखपुर में स्थित। प्रमुख संस्थागत परियोजनाओं के लिए ऑन-साइट परामर्श के लिए उपलब्ध।',
    instAboutLeadershipTitle: 'नेतृत्व',
    instAboutLeadershipName: 'विनोद कुमार',
    instAboutLeadershipRole: 'मुख्य सिस्टम आर्किटेक्ट',
    instAboutLeadershipDesc: 'आपके डेटा सुरक्षा और संस्थागत विश्वास के लिए जिम्मेदार। गोरखपुर में स्थित, हर परियोजना के लिए व्यक्तिगत रूप से जवाबदेह।',
    instAboutFounderTeaserButton: 'मेरी कहानी पढ़ें',

    // Creator About Page - Hindi
    crAboutHeaderTitle: 'कट से परे',
    crAboutHeaderSubtitle: 'मैं हर फ्रेम, साउंड इफेक्ट और ट्रांजिशन पर क्यों जुनूनी हूं।',
    crAboutPhilosophyTitle: 'संपादक की मानसिकता',
    crAboutPhilosophyContent: 'मैं सिर्फ वीडियो एडिट नहीं करता — मैं ध्यान को इंजीनियर करता हूं। हर कट, हर ट्रांजिशन, हर साउंड इफेक्ट आपके दर्शकों को बांधे रखने के लिए डिज़ाइन किया गया है। 3-सेकंड के ध्यान अवधि की दुनिया में, प्रतिधारण ही सब कुछ है।',
    crAboutTechStackTitle: 'रचनात्मक शस्त्रागार',
    crAboutSoftwareTitle: 'पेशेवर उपकरण',
    crAboutSoftwareDesc: 'Premiere Pro, After Effects, DaVinci Resolve — मैं प्रसारण-गुणवत्ता परिणाम देने के लिए उद्योग-मानक सॉफ्टवेयर का उपयोग करता हूं।',
    crAboutHardwareTitle: 'उच्च-प्रदर्शन सेटअप',
    crAboutHardwareDesc: 'तेज रेंडरिंग और सुचारू 4K संपादन वर्कफ़्लो के लिए समर्पित GPU के साथ शक्तिशाली वर्कस्टेशन।',
    crAboutStrategyTitle: 'प्रतिधारण मनोविज्ञान',
    crAboutStrategyDesc: 'मैं देखने के समय और जुड़ाव को अधिकतम करने के लिए दर्शक व्यवहार, गति मनोविज्ञान और प्लेटफॉर्म एल्गोरिदम का अध्ययन करता हूं।',
    crAboutCreativeDirectorTitle: 'क्रिएटिव डायरेक्टर',
    crAboutCreativeDirectorName: 'विनोद कुमार',
    crAboutCreativeDirectorRole: 'क्रिएटिव डायरेक्टर',
    crAboutCreativeDirectorDesc: 'मैं सिर्फ एडिट नहीं करता; मैं ध्यान को इंजीनियर करता हूं। हर फ्रेम दर्शक मनोविज्ञान और प्रतिधारण को अधिकतम करने के लिए डिज़ाइन किया गया है।',
    crAboutFounderTeaserButton: 'मेरी रचनात्मक यात्रा',

    // Work Experience & Institutional Exposure
    workExperienceInstHeading: 'कार्य अनुभव और संस्थागत एक्सपोज़र',
    workExperienceCreatorHeading: 'कार्य अनुभव और क्रिएटर एक्सपोज़र',
    workExperienceContext: 'हम सटीकता, जिम्मेदारी और सही दस्तावेज़ प्रक्रिया पर आधारित एक व्यवस्थित कार्य-प्रणाली अपनाते हैं, ताकि स्कूल अपने शैक्षणिक और प्रशासनिक कार्य बिना परेशानी के संभाल सकें।',
    workExperienceDisclaimer: 'सभी प्रविष्टियां केवल व्यक्तिगत कार्य अनुभव के तथ्यात्मक संदर्भ के रूप में प्रदान की गई हैं। कोई गारंटी, प्रतिबद्धता या भविष्य का आश्वासन नहीं दिया गया है। QuickServe IT के तहत कोई भी सेवाएं अलग से प्रदान की जाती हैं और स्वतंत्र पुष्टि के अधीन हैं।',

    // Institutional Work Experience
    workInst1Name: 'बी. एन. सिंह आदर्श इंटरमीडिएट कॉलेज, चंद्राव',
    workInst1Role: 'शैक्षणिक आईटी सहायता (व्यक्तिगत अनुभव)',
    workInst1Tasks: 'मौजूदा स्कूल सिस्टम का उपयोग करके छात्र डेटा एंट्री की गई|निर्देशानुसार परीक्षा दस्तावेज़ीकरण तैयार किया गया (प्रश्न पत्र, उत्तर पुस्तिकाएं, समय सारणी, नोटिस)|शैक्षणिक सरकारी दस्तावेज़ीकरण कार्यों के लिए सहायता प्रदान की गई|आवश्यकतानुसार बायोमेट्रिक-संबंधित कार्य सहित छात्रवृत्ति फॉर्म सहायता',
    workInst1Closing: 'कार्य सख्ती से सौंपी गई जिम्मेदारियों के भीतर किया गया।',

    workInst2Name: 'शहीद रुद्र प्रताप इंटरमीडिएट कॉलेज, चंद्राव',
    workInst2Role: 'परीक्षा दस्तावेज़ीकरण सहायता (कार्य-आधारित)',
    workInst2Tasks: 'संस्था द्वारा प्रदान किए गए परीक्षा पत्रों की टाइपिंग|प्रिंट और सबमिशन के लिए बुनियादी फॉर्मेटिंग|दायरा विशिष्ट शैक्षणिक दस्तावेज़ीकरण कार्यों तक सीमित',
    workInst2Closing: 'कार्य केवल सौंपी गई अवधि के लिए पूर्ण किए गए।',

    workInst3Name: 'विद्या पब्लिक स्कूल, चंद्राव',
    workInst3Role: 'प्रारंभिक संस्थागत बातचीत',
    workInst3Tasks: 'संभावित छात्रवृत्ति-संबंधित तकनीकी सहायता के संबंध में सामान्य चर्चा|आवश्यकता पड़ने पर भविष्य के समन्वय के लिए संपर्क जानकारी का आदान-प्रदान',
    workInst3Closing: 'कोई कार्य सौंपा नहीं गया और कोई सेवाएं शुरू नहीं की गईं।',

    // Creator Work Experience
    workCreator1Name: 'अमन — गोरखपुर, उत्तर प्रदेश',
    workCreator1Role: 'शैक्षिक सामग्री और वीडियो संपादन',
    workCreator1Tasks: 'शैक्षिक वीडियो संपादन वर्कफ़्लो में भागीदारी|सामग्री संरचना और समीक्षा प्रक्रिया|सीखने के प्रारूपों के साथ संरेखित आउटपुट तैयारी|गुणवत्ता परिष्करण प्रथाएं',
    workCreator1Closing: 'कार्य शैक्षिक सामग्री वर्कफ़्लो के भीतर व्यक्तिगत रचनात्मक भागीदारी को दर्शाता है।',

    workCreator2Name: 'राजदीप — गोरखपुर, उत्तर प्रदेश',
    workCreator2Role: 'स्क्रिप्ट शोध और संरचना सहायता',
    workCreator2Tasks: 'विषय-आधारित शोध और संदर्भ संकलन|वैचारिक और कथा ढांचा रूपरेखा|स्क्रिप्ट संरचना संगठन|लेखन-चरण सहायता और परिष्करण',
    workCreator2Closing: 'गतिविधियां स्क्रिप्ट विकास प्रक्रियाओं में भागीदारी को दर्शाती हैं।',

    workCreator3Name: 'अमन — गोरखपुर, उत्तर प्रदेश',
    workCreator3Role: 'डॉक्यूमेंट्री विज़ुअल और 2.5D विकास',
    workCreator3Tasks: 'कथा उपयोग के लिए 2.5D विज़ुअल एसेट विकास|डॉक्यूमेंट्री-शैली विज़ुअल रचना दृष्टिकोण|विज़ुअल असेंबली के लिए तकनीकी वर्कफ़्लो निष्पादन|कहानी-केंद्रित विज़ुअल संरेखण',
    workCreator3Closing: 'कार्य ऑनलाइन फ्रीलांस-आधारित रचनात्मक बातचीत के हिस्से के रूप में संदर्भित।',

    // Creator Practice & Skill Exposure
    creatorPracticeHeading: 'क्रिएटर अभ्यास और कौशल एक्सपोज़र',
    creatorPracticeSubtitle: 'हम क्रिएटर्स के लिए एक स्पष्ट और सरल कार्य-प्रक्रिया अपनाते हैं, जिसमें एडिटिंग, सुधार और डिलीवरी साफ़ तरीके से होती है, ताकि आप कंटेंट पर ध्यान दे सकें।',
    creatorPracticeFootnote: 'यह अनुभाग स्वतंत्र रचनात्मक अभ्यास का प्रतिनिधित्व करता है। इसे संस्थागत और क्लाइंट-आधारित कार्य रिकॉर्ड से अलग रखा गया है।',

    // Creator Practice Entries
    creatorPractice1Name: 'अमन — गोरखपुर, उत्तर प्रदेश',
    creatorPractice1Role: 'शैक्षिक सामग्री और वीडियो संपादन',
    creatorPractice1Tasks: 'शैक्षिक वीडियो संपादन वर्कफ़्लो में भागीदारी|सामग्री संरचना और समीक्षा प्रक्रिया|सीखने के प्रारूपों के साथ संरेखित आउटपुट तैयारी|गुणवत्ता परिष्करण प्रथाएं',
    creatorPractice1Closing: 'स्वतंत्र सामग्री अभ्यास के हिस्से के रूप में रचनात्मक भागीदारी बनाए रखी गई।',

    creatorPractice2Name: 'राजदीप — गोरखपुर, उत्तर प्रदेश',
    creatorPractice2Role: 'स्क्रिप्ट शोध और संरचना सहायता',
    creatorPractice2Tasks: 'विषय-आधारित शोध और संदर्भ संकलन|वैचारिक और कथा ढांचा रूपरेखा|स्क्रिप्ट संरचना संगठन|लेखन-चरण सहायता और परिष्करण',
    creatorPractice2Closing: 'भागीदारी चल रहे स्क्रिप्ट विकास अभ्यास को दर्शाती है।',

    creatorPractice3Name: 'अंजू — ऑनलाइन (LinkedIn के माध्यम से फ्रीलांस संदर्भ)',
    creatorPractice3Role: 'डॉक्यूमेंट्री विज़ुअल और 2.5D विकास',
    creatorPractice3Tasks: 'कथा उपयोग के लिए 2.5D विज़ुअल एसेट विकास|डॉक्यूमेंट्री-शैली विज़ुअल रचना दृष्टिकोण|विज़ुअल असेंबली के लिए तकनीकी वर्कफ़्लो निष्पादन|कहानी-केंद्रित विज़ुअल संरेखण',
    creatorPractice3Closing: 'स्वतंत्र ऑनलाइन रचनात्मक बातचीत के माध्यम से संदर्भित कार्य।',

    // Legal Pages - Terms & Conditions
    termsTitle: 'नियम और शर्तें',
    termsLastUpdated: 'अंतिम अपडेट: दिसंबर 2024',
    termsSection1Title: '1. सेवाओं की प्रकृति',
    termsSection1Content: 'QuickServe IT शैक्षणिक संस्थानों और कंटेंट क्रिएटर्स को तकनीकी सहायता, दस्तावेज़ीकरण सहायता और रचनात्मक प्रोडक्शन सेवाएं प्रदान करता है। हम शैक्षणिक कंटेंट निर्माण, छात्र कार्य या गारंटीड परिणाम प्रदान नहीं करते हैं। हमारी सेवाएं केवल तकनीकी निष्पादन, फॉर्मेटिंग, डेटा एंट्री और प्रोडक्शन सहायता तक सीमित हैं।',
    termsSection2Title: '2. सेवा दायरा',
    termsSection2Content: 'हमारी सेवाओं में शामिल हैं लेकिन इन तक सीमित नहीं हैं:',
    termsSection2List: 'परीक्षा दस्तावेज़ीकरण और फॉर्मेटिंग|छात्रवृत्ति आवेदन प्रसंस्करण सहायता|UDISE+ डेटा एंट्री और सत्यापन|वीडियो संपादन और पोस्ट-प्रोडक्शन|ग्राफिक डिज़ाइन और मोशन ग्राफिक्स|कंटेंट रणनीति परामर्श',
    termsSection3Title: '3. संस्थागत कार्य - पर्यवेक्षण आवश्यक',
    termsSection3Content: 'सभी संस्थागत सेवाओं के लिए, निम्नलिखित शर्तें लागू होती हैं:',
    termsSection3List: 'अंतिम शैक्षणिक निर्णय संस्था के पास रहते हैं|संस्था द्वारा प्रदान किए गए सभी डेटा को अधिकृत कर्मियों द्वारा सत्यापित किया जाना चाहिए|हम केवल तकनीकी निष्पादन प्रदान करते हैं; शैक्षणिक शुद्धता संस्था की जिम्मेदारी है|संस्थाओं को अंतिम सबमिशन से पहले सभी डिलिवरेबल्स की समीक्षा करनी चाहिए|छात्र पात्रता और रिकॉर्ड प्रामाणिकता पूरी तरह से संस्थागत जिम्मेदारियां हैं',
    termsSection4Title: '4. समय-सीमा और प्राथमिकता कार्य',
    termsSection4Content: 'मानक समय-सीमा एंगेजमेंट के समय प्रदान की जाती है। तत्काल अनुरोधों में अतिरिक्त शुल्क लग सकता है और उपलब्धता के अधीन हैं। कार्य समय सोमवार से शनिवार, सुबह 10:00 बजे से शाम 4:00 बजे IST है। प्रतिक्रियाएं और डिलीवरी केवल कार्य समय के भीतर होती हैं। सरकारी पोर्टल डाउनटाइम, तृतीय-पक्ष निर्भरताओं या ग्राहकों से अपूर्ण जानकारी के कारण देरी हमारे नियंत्रण से बाहर है।',
    termsSection5Title: '5. गोपनीयता',
    termsSection5Content: 'सभी संस्थागत डेटा, छात्र रिकॉर्ड और रचनात्मक कंटेंट को सख्त गोपनीयता के साथ संभाला जाता है। डेटा केवल प्रोजेक्ट की अवधि के लिए रखा जाता है और पूर्णता पर हटा दिया जाता है जब तक कि अन्यथा सहमति न हो। हम ग्राहक जानकारी को तृतीय पक्षों के साथ साझा नहीं करते हैं सिवाय सेवा वितरण के लिए आवश्यक के रूप में (जैसे, सरकारी पोर्टल)।',
    termsSection6Title: '6. दायित्व की सीमा',
    termsSection6Content: 'QuickServe IT बाहरी कारकों पर निर्भर परिणामों के लिए जिम्मेदार नहीं है जिनमें शामिल हैं लेकिन इन तक सीमित नहीं हैं: सरकारी पोर्टल कार्यक्षमता, छात्रवृत्ति अनुमोदन निर्णय, छात्र पात्रता निर्धारण, सोशल मीडिया प्लेटफॉर्म पर कंटेंट प्रदर्शन, मुद्रीकरण परिणाम, या पहुंच और एंगेजमेंट मेट्रिक्स। हमारी जिम्मेदारी तकनीकी निष्पादन और प्रोडक्शन कार्य की गुणवत्ता तक सीमित है।',
    termsSection7Title: '7. शासी कानून',
    termsSection7Content: 'ये शर्तें भारत के कानूनों द्वारा शासित हैं। किसी भी विवाद को उत्तर प्रदेश, भारत में अदालतों के अधिकार क्षेत्र के अधीन होगा।',
    termsSection8Title: '8. क्रिएटर अभ्यास अस्वीकरण',
    termsSection8Content: '"क्रिएटर अभ्यास और कौशल एक्सपोज़र" जैसे अनुभागों के तहत प्रदर्शित सामग्री केवल व्यक्तिगत रचनात्मक अभ्यास और कौशल-आधारित भागीदारी का प्रतिनिधित्व करती है। यह सामग्री संस्थागत या क्लाइंट-आधारित कार्य से अलग रखी गई है और वाणिज्यिक डिलीवरी, संविदात्मक प्रतिबद्धता, या सेवा उपलब्धता का संकेत नहीं देती है। किसी भी संस्थागत कार्य संदर्भ को स्वतंत्र रूप से सूचीबद्ध किया गया है और क्रिएटर अभ्यास सामग्री के हिस्से के रूप में व्याख्या नहीं किया जाना चाहिए।',

    // Legal Pages - Privacy Policy
    privacyTitle: 'गोपनीयता नीति',
    privacyLastUpdated: 'अंतिम अपडेट: दिसंबर 2024',
    privacySection1Title: '1. हम जो जानकारी एकत्र करते हैं',
    privacySection1Content: 'हम केवल वह जानकारी एकत्र करते हैं जो हमारी सेवाएं प्रदान करने के लिए आवश्यक है:',
    privacySection1List: 'संचार के लिए संपर्क जानकारी (नाम, फोन, ईमेल)|दस्तावेज़ीकरण सेवाओं के लिए संस्थागत डेटा (छात्र रिकॉर्ड, परीक्षा कार्यक्रम)|प्रोडक्शन सेवाओं के लिए रचनात्मक कंटेंट (वीडियो फाइलें, स्क्रिप्ट, ग्राफिक्स)|बिलिंग उद्देश्यों के लिए भुगतान जानकारी',
    privacySection2Title: '2. हम आपकी जानकारी का उपयोग कैसे करते हैं',
    privacySection2Content: 'आपकी जानकारी का उपयोग केवल सेवा वितरण के लिए किया जाता है। हम प्रोजेक्ट संचार के लिए संपर्क विवरण, दस्तावेज़ीकरण कार्य के लिए संस्थागत डेटा और प्रोडक्शन सेवाओं के लिए रचनात्मक फाइलों का उपयोग करते हैं। हम आपके डेटा का उपयोग मार्केटिंग, विज्ञापन या सहमत सेवा दायरे से परे किसी भी उद्देश्य के लिए नहीं करते हैं।',
    privacySection3Title: '3. डेटा सुरक्षा',
    privacySection3Content: 'हम निम्नलिखित सुरक्षा प्रथाओं को लागू करते हैं:',
    privacySection3List: 'सुरक्षित फाइल ट्रांसफर और स्टोरेज|केवल अधिकृत कर्मियों तक सीमित पहुंच|प्रोजेक्ट पूर्णता के बाद डेटा हटाना|सेवा वितरण के लिए आवश्यक के अलावा तृतीय पक्षों के साथ कोई साझाकरण नहीं',
    privacySection4Title: '4. डेटा प्रतिधारण',
    privacySection4Content: 'संस्थागत और रचनात्मक डेटा केवल प्रोजेक्ट की अवधि के लिए रखा जाता है। पूर्णता और अंतिम डिलीवरी पर, सभी ग्राहक डेटा हमारे सिस्टम से स्थायी रूप से हटा दिया जाता है जब तक कि आप अभिलेखीय उद्देश्यों के लिए अन्यथा अनुरोध न करें।',
    privacySection5Title: '5. आपके अधिकार',
    privacySection5Content: 'आपको किसी भी समय अपने डेटा तक पहुंच का अनुरोध करने, सुधार का अनुरोध करने या हटाने का अनुरोध करने का अधिकार है। इन अधिकारों का प्रयोग करने के लिए WhatsApp या ईमेल के माध्यम से हमसे संपर्क करें।',

    // Legal Pages - Disclaimer
    disclaimerTitle: 'अस्वीकरण',
    disclaimerLastUpdated: 'अंतिम अपडेट: दिसंबर 2024',
    disclaimerSection1Title: '1. कोई शैक्षणिक जिम्मेदारी नहीं',
    disclaimerSection1Content: 'QuickServe IT केवल तकनीकी और दस्तावेज़ीकरण सहायता प्रदान करता है। हम शैक्षणिक शुद्धता, छात्र पात्रता निर्णय या संस्थागत रिकॉर्ड की प्रामाणिकता के लिए जिम्मेदार नहीं हैं। सभी शैक्षणिक और प्रशासनिक निर्णय संस्था की एकमात्र जिम्मेदारी बने रहते हैं।',
    disclaimerSection2Title: '2. तृतीय-पक्ष निर्भरताएं',
    disclaimerSection2Content: 'हमारी सेवाएं अक्सर सरकारी पोर्टल, तृतीय-पक्ष प्लेटफॉर्म और बाहरी सिस्टम पर निर्भर करती हैं। हम पोर्टल डाउनटाइम, सिस्टम त्रुटियों, नीति परिवर्तनों या हमारे नियंत्रण से परे तकनीकी मुद्दों के लिए जिम्मेदार नहीं हैं। सेवा समय-सीमा ऐसी निर्भरताओं से प्रभावित हो सकती है।',
    disclaimerSection3Title: '3. कोई परिणाम गारंटी नहीं',
    disclaimerSection3Content: 'संस्थागत सेवाओं के लिए, हम छात्रवृत्ति अनुमोदन, सरकारी योजना स्वीकृति या पोर्टल सबमिशन सफलता की गारंटी नहीं देते हैं। क्रिएटर सेवाओं के लिए, हम व्यूज, सब्सक्राइबर्स, मुद्रीकरण, एंगेजमेंट या कंटेंट प्रदर्शन की गारंटी नहीं देते हैं। हमारा फोकस प्रोडक्शन गुणवत्ता और तकनीकी निष्पादन पर है।',
    disclaimerSection4Title: '4. ग्राहक जिम्मेदारी',
    disclaimerSection4Content: 'ग्राहक सटीक जानकारी प्रदान करने, समय पर प्रतिक्रिया और आवश्यक अनुमोदन के लिए जिम्मेदार हैं। ग्राहक द्वारा प्रदान की गई अपूर्ण या गलत जानकारी से उत्पन्न देरी या त्रुटियां हमारी जिम्मेदारी नहीं हैं।',
    disclaimerSection5Title: '5. सेवा संशोधन',
    disclaimerSection5Content: 'हम किसी भी समय अपनी सेवाओं, मूल्य निर्धारण और शर्तों को संशोधित करने का अधिकार सुरक्षित रखते हैं। मौजूदा एंगेजमेंट को एंगेजमेंट के समय सहमत शर्तों के तहत सम्मानित किया जाएगा।',

    // Legal Page Subtitles
    privacyPageSubtitle: 'हम आपकी जानकारी कैसे एकत्र, उपयोग और सुरक्षित करते हैं',
    termsPageSubtitle: 'हमारी सेवाओं का उपयोग करने के लिए नियम और शर्तें',
    disclaimerPageSubtitle: 'हमारी सेवाओं और सीमाओं के बारे में महत्वपूर्ण जानकारी',
    faqPageTitle: 'अक्सर पूछे जाने वाले प्रश्न',
    faqPageSubtitle: 'हमारी सेवाओं के बारे में सामान्य प्रश्नों के त्वरित उत्तर',

    // FAQ Questions and Answers - Institutional
    faqInstQuestion1: 'छात्रवृत्ति आवेदन के लिए मुझे किन दस्तावेजों की आवश्यकता है?',
    faqInstAnswer1: 'आपको आमतौर पर छात्र विवरण, आय प्रमाण पत्र, जाति प्रमाण पत्र (यदि लागू हो), बैंक खाता जानकारी, और योजना-विशिष्ट दस्तावेजों की स्कैन की गई प्रतियों की आवश्यकता होगी। इन्हें WhatsApp के माध्यम से साझा करें, और हम सख्त गोपनीयता के साथ पूरी प्रक्रिया में आपका मार्गदर्शन करेंगे।',

    faqInstQuestion2: 'UDISE+ डेटा एंट्री में कितना समय लगता है?',
    faqInstAnswer2: 'मानक UDISE+ कार्य में 3-5 कार्य दिवस लगते हैं। हम आपके स्कूल का डेटा एकत्र करते हैं, सटीकता सत्यापित करते हैं, जांच के साथ सभी फ़ील्ड दर्ज करते हैं, और अंतिम सबमिशन से पहले एक पूर्वावलोकन प्रदान करते हैं। वार्षिक UDISE+ विंडो के दौरान प्राथमिकता शेड्यूलिंग उपलब्ध है।',

    faqInstQuestion3: 'क्या आप परीक्षा दस्तावेज़ीकरण रिमोट से संभाल सकते हैं?',
    faqInstAnswer3: 'हां! अपनी परीक्षा अनुसूची और छात्र सूचियां किसी भी प्रारूप (Excel, PDF, हस्तलिखित) में WhatsApp के माध्यम से साझा करें। हम सब कुछ संरचित और डिजिटाइज़ करते हैं, समीक्षा के लिए स्वरूपित दस्तावेज़ प्रदान करते हैं, और 5-7 कार्य दिवसों में सबमिशन के लिए तैयार पूर्ण परीक्षा पैकेज वितरित करते हैं।',

    faqInstQuestion4: 'क्या मेरे स्कूल का डेटा गोपनीय रखा जाता है?',
    faqInstAnswer4: 'बिल्कुल। छात्र रिकॉर्ड और संस्थागत डेटा सख्त गोपनीयता प्रोटोकॉल के साथ संभाला जाता है। हम डेटा केवल प्रोजेक्ट के दौरान रखते हैं और पूर्णता के बाद हटा देते हैं जब तक कि आप संग्रह का अनुरोध न करें। आपका विश्वास हमारी प्राथमिकता है।',

    faqInstQuestion5: 'संस्थागत सहायता के लिए आपके कार्य समय क्या हैं?',
    faqInstAnswer5: 'हमारे सहायता घंटे सुबह 10:00 बजे से शाम 4:00 बजे IST, सोमवार से शनिवार हैं। आप किसी भी समय WhatsApp के माध्यम से संदेश भेज सकते हैं, और हम कार्य घंटों के दौरान प्रतिक्रिया देंगे। तत्काल संस्थागत कार्य के लिए, अपने संदेश में \'तत्काल\' का उल्लेख करें।',

    // FAQ Questions and Answers - Creator
    faqCreatorQuestion1: 'मैं संपादन के लिए अपना कच्चा फुटेज कैसे जमा करूं?',
    faqCreatorAnswer1: 'गोरखपुर क्षेत्र के स्थानीय ग्राहक पेनड्राइव या हार्ड डिस्क पिकअप के माध्यम से कच्ची फाइलें दे सकते हैं। दूरदराज के ग्राहक Google Drive या Telegram के माध्यम से साझा कर सकते हैं। मुख्य क्षणों, शैली संदर्भों और लक्ष्य लंबाई के साथ एक संक्षिप्त विवरण शामिल करें। हम सहमत समय-सीमा के भीतर पहला कट प्रदान करेंगे, मानक पैकेज में 2 संशोधन राउंड शामिल हैं।',

    faqCreatorQuestion2: 'आप किस वीडियो प्रारूप में डिलीवर करते हैं?',
    faqCreatorAnswer2: 'हम आपके आवश्यक प्रारूप और रिज़ॉल्यूशन में डिलीवर करते हैं—आमतौर पर YouTube, Instagram, या Facebook जैसे प्लेटफॉर्म के लिए अनुकूलित MP4 (H.264)। विशिष्ट प्लेटफॉर्म के लिए कस्टम प्रारूप अनुरोध पर उपलब्ध हैं। सभी फाइलें प्लेटफॉर्म-रेडी और अपलोड-अनुकूलित हैं।',

    faqCreatorQuestion3: 'वीडियो संपादन में कितना समय लगता है?',
    faqCreatorAnswer3: '15-20 मिनट के वीडियो के लिए, जटिलता के आधार पर 7-10 दिन की अपेक्षा करें। थंबनेल में 24-48 घंटे लगते हैं (उसी दिन रश उपलब्ध)। इंट्रो/आउट्रो के लिए मोशन ग्राफिक्स को 5-7 दिन चाहिए। हम यथार्थवादी समय-सीमा प्रदान करते हैं—कोई झूठे वादे नहीं।',

    faqCreatorQuestion4: 'क्या आप व्यूज या सब्सक्राइबर की गारंटी देते हैं?',
    faqCreatorAnswer4: 'नहीं। हम प्रोडक्शन गुणवत्ता और तकनीकी निष्पादन पर ध्यान केंद्रित करते हैं—रिटेंशन-स्टाइल संपादन, प्लेटफॉर्म अनुकूलन, और पेशेवर पॉलिश। कंटेंट प्रदर्शन कई बाहरी कारकों पर निर्भर करता है। हमारी प्रतिबद्धता उच्च गुणवत्ता, अपलोड-रेडी कंटेंट देने की है।',

    faqCreatorQuestion5: 'क्या संगीत और स्टॉक फुटेज शामिल हैं?',
    faqCreatorAnswer5: 'बेसिक बैकग्राउंड म्यूज़िक सिंक शामिल है। भुगतान किए गए स्टॉक फुटेज, लाइसेंस प्राप्त प्रीमियम संगीत, साउंड इफेक्ट्स, या उन्नत VFX प्लगइन्स डिफ़ॉल्ट रूप से शामिल नहीं हैं लेकिन अलग से व्यवस्थित किए जा सकते हैं। हम स्कोप पुष्टि के दौरान इस पर चर्चा करेंगे।',

    // Contact CTA
    questionsAboutPrivacy: 'हमारी गोपनीयता नीति के बारे में प्रश्न?',
    questionsAboutTerms: 'हमारे नियमों के बारे में प्रश्न?',
    questionsAboutDisclaimer: 'अस्वीकरण के बारे में प्रश्न?',
    stillHaveQuestions: 'अभी भी प्रश्न हैं? हम मदद के लिए यहाँ हैं।',
    contactWhatsApp: 'WhatsApp पर हमसे संपर्क करें',
    disclaimer: 'अस्वीकरण',
    faq: 'FAQ',

    // Footer Disclaimers
    footerDisclaimerInstitutional: 'quickserveit केवल तकनीकी सहायता और दस्तावेज़ीकरण सेवाएं प्रदान करता है। शैक्षणिक शुद्धता, छात्र पात्रता, और अंतिम रिकॉर्ड प्रामाणिकता संस्था की एकमात्र जिम्मेदारी है। सभी फाइलें सख्त गोपनीयता के साथ संभाली जाती हैं।',
    footerDisclaimerCreator: 'quickserveit केवल रचनात्मक प्रोडक्शन और तकनीकी निष्पादन प्रदान करता है। पहुंच, मुद्रीकरण, और प्रदर्शन प्लेटफॉर्म एल्गोरिदम पर निर्भर करते हैं; प्रोडक्शन गुणवत्ता हमारा फोकस है। सभी फाइलें सख्त गोपनीयता के साथ संभाली जाती हैं।',

    // How We Work Section
    howWeWorkTitle: 'हम कैसे काम करते हैं',
    howWeWorkSubtitle: 'आपकी आवश्यकताओं के अनुरूप एक संरचित, पारदर्शी प्रक्रिया',

    // How We Work - Institutions
    howWeWorkInstIntro: 'स्कूलों और शैक्षणिक संस्थानों के लिए एक संरचित, पारदर्शी प्रक्रिया। हम सभी संस्थागत सेवाओं के लिए एक ही परिचालन प्रणाली का पालन करते हैं।',

    instStep1Title: 'आवश्यकता पहचान',
    instStep1Desc: 'हम सटीक आवश्यकता को समझते हैं: परीक्षा दस्तावेज़ीकरण, छात्रवृत्ति कार्य, UDISE डेटा, दैनिक सहायता, या सरकारी दस्तावेज़ीकरण।',

    instStep2Title: 'डेटा संग्रह (साइट पर या रिमोट)',
    instStep2Desc: 'आवश्यक डेटा सुरक्षित रूप से एकत्र किया जाता है: हस्तलिखित कागजात, PDF, छात्र रिकॉर्ड, या स्कूल विज़िट के माध्यम से। रिमोट संस्थानों को ऑनलाइन समन्वय के माध्यम से समर्थन दिया जाता है।',

    instStep3Title: 'सेवा के अनुसार निष्पादन',
    instStep3Desc: 'कार्य निष्पादित किया जाता है: शैक्षणिक टाइपिंग, छात्रवृत्ति प्रसंस्करण, UDISE प्रबंधन, सरकारी योजनाएं, TC दस्तावेज़ीकरण, या दैनिक प्रशासनिक सहायता।',

    instStep4Title: 'सटीकता, सत्यापन और अनुपालन',
    instStep4Desc: 'सभी कार्य उचित जांच से गुजरते हैं ताकि डेटा सटीकता, सही फॉर्मेटिंग और संस्थागत/सरकारी अनुपालन सुनिश्चित हो सके।',

    instStep5Title: 'अंतिम हस्तांतरण और समापन',
    instStep5Desc: 'पूर्ण कार्य सुरक्षित Google Drive शेयरिंग, आधिकारिक सबमिशन, या मुद्रित और बाउंड दस्तावेज़ों (वैकल्पिक) के माध्यम से प्रदान किया जाता है।',

    instWorkNotes: 'साइट पर विज़िट, प्रति-छात्र कार्य, प्रिंटिंग, बाइंडिंग और दूरी-आधारित सेवाओं में अतिरिक्त शुल्क लग सकता है। अंतिम अनुमोदन संबंधित प्राधिकारी के अधीन रहते हैं।',

    // How We Work - Creators
    howWeWorkCreatorIntro: 'कच्चे इनपुट से अंतिम आउटपुट तक एक पेशेवर प्रोडक्शन वर्कफ़्लो। हम स्पष्ट, स्कोप-परिभाषित वर्कफ़्लो के माध्यम से काम करते हैं जो स्वच्छ निष्पादन और विश्वसनीय परिणाम पर केंद्रित है।',

    creatorStep1Title: 'आवश्यकता और स्कोप पुष्टि',
    creatorStep1Desc: 'हम आवश्यकता, प्लेटफॉर्म, कार्य का दायरा और अपेक्षित आउटपुट को समझते हैं। कच्ची सामग्री और कार्यभार की समीक्षा के बाद समय-सीमा अंतिम रूप दी जाती है।',

    creatorStep2Title: 'कच्ची सामग्री संग्रह',
    creatorStep2Desc: 'क्रिएटर कच्चे इनपुट प्रदान करते हैं: संपादन के लिए वीडियो फुटेज, थंबनेल के लिए फोटो, या बुनियादी संदर्भ और ब्रांडिंग दिशानिर्देश। सभी सामग्री सुरक्षित रूप से संभाली जाती है।',

    creatorStep3Title: 'संपादन और रचनात्मक निष्पादन',
    creatorStep3Desc: 'सहमत स्कोप के अनुसार कार्य निष्पादित: वीडियो संपादन, संरचना, कट्स, पेसिंग, थंबनेल डिज़ाइन, और प्लेटफॉर्म-अनुकूलित प्रारूप (तकनीकी संगतता, प्रदर्शन गारंटी नहीं)।',

    creatorStep4Title: 'समीक्षा और स्कोप्ड संशोधन',
    creatorStep4Desc: 'संपादित सामग्री समीक्षा के लिए साझा की जाती है। संशोधन सहमत स्कोप तक सीमित हैं, जिसमें प्रमुख पुन: संपादन या रचनात्मक पुनर्गठन शामिल नहीं है जब तक कि अलग से चर्चा न की जाए।',

    creatorStep5Title: 'अंतिम आउटपुट',
    creatorStep5Desc: 'अंतिम आउटपुट सुरक्षित डिजिटल शेयरिंग के माध्यम से प्रदान: अपलोड के लिए तैयार वीडियो, सही प्रारूप में थंबनेल, और प्लेटफॉर्म-संगत फाइलें।',

    creatorWorkNotes: 'भुगतान किए गए स्टॉक फुटेज, लाइसेंस प्राप्त संगीत, प्रीमियम साउंड इफेक्ट्स, या उन्नत VFX प्लगइन्स डिफ़ॉल्ट रूप से शामिल नहीं हैं।',

    // Institutional Typewriter Sentences
    instTypewriter1: 'परीक्षा दस्तावेज़ संभालती हैं',
    instTypewriter2: 'छात्रवृत्ति और UDISE में सहायता करती हैं',
    instTypewriter3: 'शैक्षणिक डाटा सुरक्षित संभालती हैं',
    instTypewriter4: 'सरकारी कार्यों में सहयोग देती हैं',
    instTypewriter5: 'दैनिक डिजिटल सहायता देती हैं',

    // Creator Typewriter Sentences
    creatorTypewriter1: 'वीडियो एडिटिंग करती हैं',
    creatorTypewriter2: 'अपलोड के लिए तैयार कंटेंट देती हैं',
    creatorTypewriter3: 'साफ़ थंबनेल बनाती हैं',
    creatorTypewriter4: 'प्लेटफॉर्म-रेडी फाइल देती हैं',


    // Living Website - Services Teaser
    exploreFullArsenal: 'पूरा शस्त्रागार देखें',

    // Living Website - Featured Work
    featuredProjectTitle: 'विशेष प्रोजेक्ट',
    decodeProject: 'यह प्रोजेक्ट देखें',
    openTheVault: 'वॉल्ट खोलें',

    // Living Website - System Status
    systemStatus: 'सिस्टम स्टेटस',
    currentStatus: 'वर्तमान स्थिति',
    availableForProjects: 'बड़े प्रोजेक्ट्स के लिए उपलब्ध',
    nextSlot: 'अगली स्लॉट',
    priorityQueue: 'प्राथमिकता कतार',

    // Living Website - Portal CTA
    readyToEliminateChaos: 'डिजिटल अराजकता खत्म करने के लिए तैयार हैं?',
    readyToDisintegrate: 'प्रतिस्पर्धा को मिटाने के लिए तैयार हैं?',
    initializeContact: 'संपर्क शुरू करें',

    // Founder Page - Hindi Comprehensive Philosophical Content
    founderPageTitle: 'संस्थापक का संदेश',
    founderPageSubtitle: 'quickserveit के संस्थापक का हमारे मिशन, मूल्यों और शांत डिजिटल निष्पादन के प्रति प्रतिबद्धता के बारे में व्यक्तिगत संदेश।',
    aNoteFromFounder: 'संस्थापक की ओर से',
    theStoryBehindQuickserve: 'quickserveit के पीछे की कहानी',

    // Opening Philosophy - Hindi
    founderOpeningQuote: '"मैंने quickserveit को व्यवसाय बनाने के लिए शुरू नहीं किया। मैंने इसे एक समस्या हल करने के लिए शुरू किया जो मुझे रात में जगाए रखती थी — अच्छे लोगों को डिजिटल अराजकता में डूबते देखना जबकि उनका असली काम इंतजार कर रहा था।"',

    // The Origin Story - Deep Dive - Hindi
    theOriginStory: 'शुरुआत की कहानी',
    originPara1: 'यह चंद्रांव के एक छोटे स्कूल कार्यालय में शुरू हुआ। मैं UDISE+ डेटा एंट्री में मदद कर रहा था, और मैंने एक प्रिंसिपल को देखा — एक महिला जिसने शिक्षा के लिए 25 साल समर्पित किए थे — अपना पूरा शनिवार सरकारी पोर्टल में छात्र रिकॉर्ड टाइप करते हुए बिताते हुए। उनकी आंखें थकी हुई थीं। उनकी पीठ दर्द कर रही थी। और सबसे बुरा हिस्सा? यह पढ़ाना नहीं था। यह छात्रों को मार्गदर्शन देना नहीं था। यह सिर्फ... डेटा एंट्री थी।',
    originPara2: 'वह छवि मेरे साथ रही। यहां कोई था जिसने शिक्षा को एक बुलावे के रूप में चुना, अब एक डेटा ऑपरेटर में बदल गया क्योंकि सिस्टम ने इसकी मांग की। डिजिटल क्रांति जिसने दक्षता का वादा किया था, उसने इसके बजाय एक नया बोझ पैदा किया था — जो उन लोगों पर सबसे भारी पड़ा जो इसे संभालने के लिए कम से कम सुसज्जित थे।',
    originPara3: 'उसी समय के आसपास, मैं एक क्रिएटर से मिला — एक युवा शिक्षक जो YouTube पर शानदार एक्सप्लेनर वीडियो बना रहा था। उसका कंटेंट सोना था। लेकिन उसकी एडिटिंग? बेसिक। इसलिए नहीं कि उसमें विज़न की कमी थी, बल्कि इसलिए कि उसके पास संसाधन नहीं थे। वह 10 मिनट के वीडियो को एडिट करने में 12 घंटे बिता रहा था, सीखते हुए, जबकि उसे अपने अगले विषय पर शोध करना चाहिए था।',
    originPara4: 'दो अलग दुनियाएं। दो अलग संघर्ष। लेकिन एक ही मूल समस्या: प्रतिभाशाली लोग तकनीकी बाधाओं से रोके जा रहे थे जो मौजूद नहीं होनी चाहिए।',

    // The Problem I Saw - Philosophical Depth - Hindi
    theProblemISaw: 'मैंने जो समस्या देखी',
    problemPara1: 'दुनिया "डिजिटल परिवर्तन" के बारे में बात करती है जैसे यह एक उपहार है। लेकिन कई लोगों के लिए, यह एक अभिशाप है। स्कूलों को सब कुछ डिजिटाइज़ करने के लिए कहा जाता है — उपस्थिति, परीक्षा, छात्रवृत्ति, अनुपालन रिपोर्ट — लेकिन कोई नहीं पूछता: यह काम कौन करेगा? शिक्षक शिक्षक हैं, डेटा वैज्ञानिक नहीं। प्रिंसिपल नेता हैं, आईटी पेशेवर नहीं।',
    problemPara2: 'और क्रिएटर्स? उन्हें कहा जाता है "बस लगातार पोस्ट करें" और "गुणवत्ता बनाए रखें।" जैसे कि एडिटिंग, थंबनेल, SEO, और कहानी कहना सरल कार्य हैं जिन्हें कोई भी अपने खाली समय में मास्टर कर सकता है। प्रवेश की बाधा कभी इतनी कम नहीं रही, लेकिन गुणवत्ता की बाधा कभी इतनी ऊंची नहीं रही।',
    problemPara3: 'जो चीज़ मुझे सबसे ज़्यादा निराश करती थी वह थी इसकी अकेलापन। स्कूल चुपचाप संघर्ष कर रहे हैं, यह स्वीकार करने में बहुत शर्मिंदा हैं कि वे बनाए नहीं रख सकते। क्रिएटर्स जल रहे हैं, सोच रहे हैं कि उनका जुनून दूसरी नौकरी क्यों लगता है। हर कोई दिखावा कर रहा है कि उन्होंने इसे समझ लिया है।',
    problemPara4: 'मुझे एहसास हुआ: उन्हें एक और सॉफ्टवेयर टूल की ज़रूरत नहीं थी। उन्हें एक मानव साथी की ज़रूरत थी। कोई जो दबाव को समझता हो, शिल्प का सम्मान करता हो, और चुपचाप तकनीकी बोझ संभाल सके ताकि वे अपने सबसे अच्छे काम पर ध्यान केंद्रित कर सकें।',

    // Core Philosophy - Deeper Principles - Hindi
    corePhilosophy: 'मूल दर्शन',
    philosophyIntro: 'quickserveit उन सिद्धांतों पर बनाया गया है जिनसे मैं समझौता करने से इनकार करता हूं:',

    principle1Title: 'अराजकता पर शांति',
    principle1Text: 'quickserveit के साथ हर बातचीत आपके तनाव को कम करनी चाहिए, इसे बढ़ाना नहीं। कोई आक्रामक बिक्री कॉल नहीं। कोई दबाव वाले फॉलो-अप नहीं। कोई कृत्रिम तात्कालिकता नहीं। यदि आप हमें संदेश भेजते हैं, तो हम स्पष्टता और सम्मान के साथ जवाब देते हैं। यदि हम मदद नहीं कर सकते, तो हम ईमानदारी से कहते हैं। आपकी मानसिक शांति गैर-परक्राम्य है।',

    principle2Title: 'भ्रम पर स्पष्टता',
    principle2Text: 'आप हमेशा जानेंगे कि आपका काम कहां खड़ा है। स्पष्ट समय-सीमा। ईमानदार अनुमान। यदि कुछ देरी होती है, तो आप तुरंत इसके बारे में सुनते हैं — एक कारण और एक संशोधित योजना के साथ। कोई अस्पष्ट वादे नहीं। कोई गायब होने वाले कार्य नहीं। पारदर्शिता एक फीचर नहीं है; यह नींव है।',

    principle3Title: 'पवित्र विश्वास के रूप में गोपनीयता',
    principle3Text: 'आपका डेटा — छात्र रिकॉर्ड, परीक्षा पत्र, कच्चा फुटेज, स्क्रिप्ट — उस विवेक के साथ व्यवहार किया जाता है जिसके वह हकदार है। हम अनुमति के बिना आपके काम को प्रदर्शित नहीं करते। हम सार्वजनिक रूप से आपकी परियोजनाओं पर चर्चा नहीं करते। आप जो हमारे साथ साझा करते हैं वह हमारे साथ रहता है। विश्वास, एक बार टूट जाने पर, कभी पूरी तरह से मरम्मत नहीं किया जा सकता। हम इसे उग्रता से रक्षा करते हैं।',

    principle4Title: 'अहंकार के बिना गुणवत्ता',
    principle4Text: 'हमें श्रेय की ज़रूरत नहीं है। हमें आपके काम पर हमारे नाम की ज़रूरत नहीं है। हमें जो चाहिए वह है आपके काम की सफलता। जब किसी स्कूल के छात्रवृत्ति आवेदन स्वीकृत हो जाते हैं, तो यह हमारी जीत है। जब किसी क्रिएटर का वीडियो 100K व्यूज़ हिट करता है, तो यह हमारी संतुष्टि है। हम पृष्ठभूमि में मौजूद हैं, आपको अच्छा दिखाते हैं।',

    principle5Title: 'बिखरी सेवाओं पर केंद्रित विशेषज्ञता',
    principle5Text: 'हम सब कुछ नहीं करते। हम दो चीजें गहराई से करते हैं: संस्थागत दस्तावेज़ीकरण और क्रिएटर प्रोडक्शन। हम वेब डेवलपमेंट, ऐप बिल्डिंग, सोशल मीडिया मैनेजमेंट, और एक दर्जन अन्य लाभदायक सेवाओं को ना कहते हैं — क्योंकि कमजोर पड़ना गुणवत्ता को मारता है। हमारा फोकस हमारी ताकत है।',

    // What Drives Me - Personal Motivation - Hindi
    whatDrivesMe: 'मुझे क्या प्रेरित करता है',
    drivePara1: 'मैं उस प्रिंसिपल के बारे में अक्सर सोचता हूं। वह जिसने अपना शनिवार डेटा एंट्री पर बिताया। मैं सोचता हूं कि उन्होंने कितने शनिवार प्रशासनिक काम में खो दिए जो सौंपे जा सकते थे। कितने छात्र उनके मार्गदर्शन से चूक गए क्योंकि वे कागजी कार्रवाई में दबी हुई थीं।',
    drivePara2: 'मैं उस क्रिएटर के बारे में भी सोचता हूं। वह जो सुबह 2 बजे तक एडिट कर रहा था, आंखें जल रही थीं, सोच रहा था कि क्या यह इसके लायक है। मैं उन वीडियो के बारे में सोचता हूं जो उसने नहीं बनाए क्योंकि वह तकनीकी खरपतवार में फंसा हुआ था। वे विचार जो मर गए क्योंकि निष्पादन असंभव लगा।',
    drivePara3: 'यही मुझे प्रेरित करता है। राजस्व नहीं। पैमाना नहीं। एक साम्राज्य बनाना नहीं। मैं उन लोगों को समय वापस देना चाहता हूं जो इसके हकदार हैं। मैं चाहता हूं कि शिक्षक शिक्षित करें। मैं चाहता हूं कि क्रिएटर्स बनाएं। और मैं वह अदृश्य शक्ति बनना चाहता हूं जो इसे संभव बनाती है।',
    drivePara4: 'कुछ इसे सेवा व्यवसाय कहते हैं। मैं इसे एक मिशन कहता हूं। क्योंकि जब आप किसी को डिजिटल अभिभूत से मुक्त करते हैं, तो आप सिर्फ एक कार्य पूरा नहीं करते — आप सार्थक काम करने की उनकी क्षमता को बहाल करते हैं। यह लेन-देन नहीं है। यह परिवर्तनकारी है।',

    // The Vision - Long-term Aspiration - Hindi
    theVisionAhead: 'आगे का दृष्टिकोण',
    visionPara1: 'मैं नहीं चाहता कि quickserveit सबसे बड़ा हो। मैं चाहता हूं कि यह सबसे भरोसेमंद हो। मैं चाहता हूं कि स्कूल हमारे बारे में पहले सोचें जब वे अनुपालन काम में डूब रहे हों। मैं चाहता हूं कि क्रिएटर्स जानें कि जब वे हमें अपना कच्चा फुटेज भेजते हैं, तो यह सुरक्षित हाथों में है।',
    visionPara2: 'पांच साल बाद, मैं quickserveit को एक शांत स्थिरांक के रूप में देखता हूं — चमकदार नहीं, प्रसिद्ध नहीं, बल्कि गहराई से विश्वसनीय। वह प्रकार का साथी जिसके बारे में आपको चिंता करने की ज़रूरत नहीं है। वह प्रकार की सेवा जो बस काम करती है, हर बार, बिना नाटक के।',
    visionPara3: 'मैं देखता हूं कि हम अधिक स्कूलों को अपनी आत्मा खोए बिना डिजिटल बोझ को नेविगेट करने में मदद कर रहे हैं। मैं देखता हूं कि हम अधिक क्रिएटर्स को सॉफ्टवेयर के बजाय कहानी कहने पर ध्यान केंद्रित करने में सक्षम बना रहे हैं। और मैं देखता हूं कि हम यह सब उसी शांत, केंद्रित दृष्टिकोण के साथ कर रहे हैं जिसके साथ हमने शुरुआत की थी।',
    visionPara4: 'हम रुझानों का पीछा नहीं करेंगे। हम जो भी गर्म है उसमें पिवट नहीं करेंगे। हम केंद्रित रहेंगे, विनम्र रहेंगे, और उन लोगों के प्रति प्रतिबद्ध रहेंगे जो हमें अपने सबसे महत्वपूर्ण काम के साथ भरोसा करते हैं।',

    // A Personal Promise - Hindi
    aPersonalPromise: 'एक व्यक्तिगत वादा',
    promisePara1: 'यदि आप quickserveit के साथ काम करना चुनते हैं, तो यहां वह है जो मैं आपसे व्यक्तिगत रूप से वादा करता हूं:',
    promisePara2: 'मैं वादा करता हूं कि हम आपके काम को ऐसे व्यवहार करेंगे जैसे यह मायने रखता है — क्योंकि यह मायने रखता है। चाहे वह छात्रवृत्ति फॉर्म हो या YouTube वीडियो, यह किसी के प्रयास, किसी की आशा, किसी की आजीविका का प्रतिनिधित्व करता है। हम इसे देखभाल के साथ संभालेंगे।',
    promisePara3: 'मैं वादा करता हूं कि हम ईमानदारी से संवाद करेंगे। यदि हम गलती करते हैं, तो हम इसे स्वीकार करेंगे। यदि हम समय सीमा को पूरा नहीं कर सकते, तो आप तुरंत जानेंगे। यदि कुछ हमारी विशेषज्ञता के बाहर है, तो हम इसे फंबल करने के बजाय कहेंगे।',
    promisePara4: 'मैं वादा करता हूं कि हम आपके समय का सम्मान करेंगे। कोई अनावश्यक बैठकें नहीं। कोई फुलाने वाले ईमेल नहीं। कोई "बस चेक इन" संदेश नहीं जो आपके दिन को बर्बाद करते हैं। जब हम संपर्क करते हैं, तो यह इसलिए है क्योंकि कुछ है जो आपको जानने की ज़रूरत है।',
    promisePara5: 'और मैं वादा करता हूं कि हम कभी भी आपके विश्वास को हल्के में नहीं लेंगे। हर परियोजना, हर बातचीत, हर फाइल जो हम संभालते हैं — हम इसे एक अवसर के रूप में मानते हैं कि हम आपके विश्वास के योग्य हैं।',

    // Closing Reflection - Hindi
    closingReflection: 'एक अंतिम विचार',
    closingPara1: 'quickserveit बनाने ने मुझे कुछ गहरा सिखाया है: सर्वश्रेष्ठ व्यवसाय चतुर मार्केटिंग या आक्रामक विकास पर नहीं बनाए जाते। वे वास्तविक लोगों के लिए वास्तविक समस्याओं को हल करने पर बनाए जाते हैं, वास्तविक अखंडता के साथ।',
    closingPara2: 'हर बार जब कोई स्कूल प्रिंसिपल मुझे बताता है, "आपने मुझे बहुत समय बचाया," या कोई क्रिएटर कहता है, "यह एडिट बिल्कुल वैसा ही है जैसा मैंने कल्पना की थी" — तभी मुझे पता चलता है कि हम सही रास्ते पर हैं।',
    closingPara3: 'यह सिर्फ एक सेवा नहीं है। यह एक प्रतिबद्धता है। वह साथी होने की प्रतिबद्धता जिसकी आप चाहते थे कि जब आप अकेले संघर्ष कर रहे थे तब मौजूद होता। डिजिटल काम को कम भारी और अधिक प्रबंधनीय महसूस कराने की प्रतिबद्धता।',
    closingPara4: 'इसे पढ़ने के लिए समय निकालने के लिए धन्यवाद। quickserveit पर विचार करने के लिए धन्यवाद। और यदि आप हमारे साथ काम करना चुनते हैं — अपने काम के साथ हमें भरोसा करने के लिए धन्यवाद। हम आपको निराश नहीं करेंगे।',

    // Signature - Hindi
    withGratitude: 'कृतज्ञता और प्रतिबद्धता के साथ,',
    theFounder: '— संस्थापक',
    quickserveitTeam: 'quickserveit',
  }
} as const;
