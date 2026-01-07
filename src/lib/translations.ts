// Quickserve IT - Professional Hindi/English Translation System

export type TranslationKey = keyof typeof translations.en;

export const translations = {
  en: {
    // Brand
    brandName: 'Quickserve IT',
    brandTagline: 'Your Personal Tech Partner.',
    brandTaglineInstitutional: 'Your calm digital partner for educational institutions.',
    brandTaglineCreator: 'Your calm digital partner for content creators.',
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
    about: 'About',
    founder: 'Founder',
    pricing: 'Pricing',
    contact: 'Contact',

    // Hero Section - Institutional
    heroInst1: 'Calm Digital Execution',
    heroInst2: 'Structured Academic Support',
    heroInst3: 'Quiet Progress, Clear Files',
    heroInst4: 'Trusted Institutional Partner',
    heroInstDesc: 'We transform chaotic digital workloads into organized, confidential, and deadline-calm execution. From examination documentation to government compliance, your institution deserves peace.',

    // Hero Section - Creator
    heroCreator1: 'Cinematic Content Creation',
    heroCreator2: 'Retention-Style Editing',
    heroCreator3: 'World-Class Production',
    heroCreatorDesc: 'We transform raw footage into premium content designed for retention and impact. From YouTube long-form to cinematic documentaries, your vision deserves world-class polish.',

    // CTAs
    getStarted: 'Get Started',
    startCreating: 'Start Creating',
    viewServices: 'View Services',
    seePortfolio: 'See Portfolio',
    contactUs: 'Contact Us',
    getQuote: 'Get a Quote',
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
    statsProjectsCompleted: 'Projects Completed',
    statsInstitutionsServed: 'Institutions Served',
    statsClientSatisfaction: 'Client Satisfaction',
    statsResponseTime: 'Response Time',

    // Stats Section - Creator
    statsVideosEdited: 'Videos Edited',
    statsWatchHours: 'Watch Hours Generated',
    statsCreatorsServed: 'Creators Served',
    statsTurnaroundTime: 'Turnaround Time',

    // Value Proposition
    whyChooseUsTitle: 'Why Choose Us',
    whyChooseUsSubtitle: 'We focus on delivering quality work with personal attention',

    // Institutional Values
    valueSecurityTitle: 'Data Security',
    valueSecurityDesc: 'Your school data stays confidential and secure',
    valueTimelyTitle: 'On-Time Delivery',
    valueTimelyDesc: 'We respect deadlines and deliver work when promised',
    valuePersonalTitle: 'Personal Support',
    valuePersonalDesc: 'Direct communication, no automated responses',
    valueReliableTitle: 'Reliable Service',
    valueReliableDesc: 'Consistent quality you can depend on',

    // Creator Values
    valueQualityTitle: 'Quality First',
    valueQualityDesc: 'Professional editing that makes your content stand out',
    valueFastTitle: 'Quick Turnaround',
    valueFastDesc: 'Fast delivery without compromising on quality',
    valueCreativeTitle: 'Creative Touch',
    valueCreativeDesc: 'We understand your vision and bring it to life',
    valueCommittedTitle: 'Committed Partner',
    valueCommittedDesc: 'Your success is our success',

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

    // Footer
    allRightsReserved: 'All Rights Reserved',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',

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
    examDocTitle: 'Exam Paper Typing',
    examDocShort: 'Professional typing and formatting of exam question papers from handwritten or digital sources.',
    examDocMedium: 'Professional Question Paper Typing',
    examDocFull: 'We streamline your examination process to save teacher time. You simply send us handwritten drafts or photos of questions. Our team professionally types, formats, and proofreads them into a secure, print-ready PDF. This ensures every question paper looks standardized, secure, and professional without burdening your staff.',
    examDocSteps: 'Share raw question papers (PDF, Image, or Handwritten)|We type, format, and structure the questions|Review the draft for any corrections|Receive final print-ready files via Drive Link',
    examDocNeeds: 'Raw question content (Photo/PDF)|Exam pattern/format details|Subject and Class details|Submission deadline',
    examDocTimeline: 'Standard: 5-7 working days | Urgent: 2-3 working days (additional charges)',

    scholarshipTitle: 'Scholarship Verification & Biometric',
    scholarshipShort: 'Institute portal management, remote verification, and on-site biometric authentication with DSC forwarding.',
    scholarshipMedium: 'Portal + Biometric + DSC Forwarding',
    scholarshipFull: 'We offer a complete "Done-For-You" management system. First, we handle the time-consuming data entry and verification remotely on the portal. Then, to ensure authenticity, our team visits your campus with biometric devices to verify students physically. Finally, we handle the digital forwarding via DSC, ensuring high approval rates.',
    scholarshipSteps: 'Provide Institute Login & Student Data|We verify and update forms remotely on the portal|We schedule a campus visit for Biometric Authentication|Final Forwarding done using DSC (Dongle)|Submission Report generated',
    scholarshipNeeds: 'Institute Portal Credentials|Principal\'s Digital Signature (DSC Token/Dongle)|Student File/List for verification|Electricity/Internet for on-site Biometric camp',
    scholarshipTimeline: 'Standard: 7-10 working days | Depends on biometric scheduling',

    udiseTitle: 'UDISE+ Management (2026-27)',
    udiseShort: 'Complete support for the new session starting April 2026: New Entry & Old Student Updates.',
    udiseMedium: 'Complete 2026-27 Session Support',
    udiseFull: 'We take full ownership of your UDISE+ compliance to protect your institution\'s standing. Our team manages the entire lifecycle for the 2026-27 session—cleaning data, updating student progressions, and filing new entries perfectly. We ensure your records match government standards, preventing any future funding or recognition issues.',
    udiseSteps: 'Share school credentials for the 2026 session|We update/promote existing student data (Progression)|We upload new student profiles (Entry)|Verify all data fields|Finalize and Certify',
    udiseNeeds: 'School login credentials (shared securely)|Current year enrollment data|Infrastructure details and updates|Teacher information and qualifications',
    udiseTimeline: 'Bookings Open for April 2026 | Priority slots for early schools',

    dailySupportTitle: 'Daily Tech & Micro-Task Support',
    dailySupportShort: 'On-demand support for confusing government tasks, PDF conversions, translations, and academic content creation.',
    dailySupportMedium: 'Micro-Tasks & Portal Help',
    dailySupportFull: 'Think of us as your virtual administrative partner. Whenever you face a technical block—be it a portal error, a complex file conversion, or an urgent typing need—you just message us. We solve the specific task immediately, keeping your office administration smooth and interruption-free.',
    dailySupportSteps: 'Send the task via WhatsApp (e.g., "Fix this PDF" or "Translate this notice")|We confirm the cost (Per-Task/Per-Day)|We process the work immediately (PDF tools, Portal fix, Typing)|Receive final files instantly',
    dailySupportNeeds: 'Raw files (PDF/Images)|Clear instruction on what is needed (Translate/Convert/Create)|Govt Portal credentials (if related to portal work)',
    dailySupportTimeline: 'Instant for Micro-tasks (30-60 mins) | Same day for larger typing works.',

    // Services - Creator
    videoEditTitle: 'Premium Long-Form Production',
    videoEditShort: 'Broadcast-quality storytelling. We specialize in Multi-Cam Sync for podcasts, Cinematic Color Grading (DaVinci), and distraction-free editing for educational content.',
    videoEditMedium: 'Cinematic Editing & Color Grading',
    videoEditFull: 'We act as your post-production partner, not just editors. You upload raw footage; we engineer it for retention. We handle multi-cam syncing, cinematic color grading, and audio polishing. The result is a broadcast-quality video that positions you as an authority in your niche, delivered ready for upload.',
    videoEditSteps: 'Send Raw Files (Google Drive or Pendrive pickup)|We process in Premiere Pro: Multi-cam sync, A-Roll cleanup|Color grading in DaVinci Resolve for cinematic depth|Client review via Frame.io with timestamped feedback|Final delivery with archival-quality exports',
    videoEditNeeds: 'Raw Footage (Camera/Mobile/Screen Recording)|Audio files (if recorded separately)|Reference style link|Branding assets (Logo/Intro)',
    videoEditTimeline: 'Standard: 7-10 days for 15-20 min video | Depends on complexity',

    shortsTitle: 'Viral Shorts & Reels',
    shortsShort: 'Algorithm-optimized vertical content. Features Kinetic Typography, 4K Upscaling, and precise Pattern Interrupts to maximize audience retention.',
    shortsMedium: 'Algorithm-Optimized Vertical Content',
    shortsFull: 'We help you dominate the algorithm with high-frequency short-form content. We extract the most engaging hooks from your long videos, adding kinetic typography and visual pacing that stops the scroll. This strategy maximizes your reach and brings new viewers to your channel automatically.',
    shortsSteps: 'Share Source (Long Video Link or Raw Files)|We identify viral moments and script hooks|Custom kinetic typography designed in After Effects|Color grading and sound design for maximum impact|Export via Adobe Media Encoder for platform-perfect quality',
    shortsNeeds: 'Link to your Podcast/YouTube video (for repurposing)|OR Raw vertical footage (Drive/WeTransfer)|Reference Reel style (optional)|Brand Logo (if needed)',
    shortsTimeline: 'Standard: 24-48 hours per reel | Bulk: Monthly packages available',

    motionTitle: 'Motion Graphics & VFX',
    motionShort: 'High-end visual engineering. Includes 2.5D Parallax Photos, Character Rigging, Custom Logo Reveals, and seamless Green Screen Compositing.',
    motionMedium: '2.5D Animation & Visual Effects',
    motionFull: 'We build your channel\'s visual authority. Our team designs custom 2.5D animations and motion graphics that explain complex topics simply. This high-end visual packaging separates you from competitors and drastically increases the perceived value of your educational content.',
    motionSteps: 'Share brand assets and style preferences|Concept development and storyboarding|Vector design in Illustrator, animation in After Effects|3D elements created in Blender (if needed)|Final delivery with project files (optional)',
    motionNeeds: 'Logo files (preferably vector)|Brand colors and fonts|Reference animations you like|Duration and format requirements',
    motionTimeline: 'Intros/Outros: 5-7 days | Lower thirds: 2-3 days | Complex: Quote required',

    thumbnailTitle: 'Thumbnails & Strategy',
    thumbnailShort: 'The complete packaging suite. We combine Notion-based script structuring with Midjourney & Photoshop compositing for High-CTR thumbnails.',
    thumbnailMedium: 'High-CTR Thumbnails & Strategy',
    thumbnailFull: 'We optimize your video\'s first impression. Our process combines deep competitor research with high-end design. We structure the thumbnail concept before the video is even made, ensuring the image and title work together to trigger curiosity and drive maximum clicks.',
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
    examDocCardDesc: 'Confidential typing and formatting of exam question papers from handwritten notes or PDFs.',
    scholarshipCardTitle: 'UP Scholarship Processing',
    scholarshipCardSubtitle: 'Portal + Biometric + DSC Forwarding',
    scholarshipCardDesc: 'Remote portal management combined with on-site biometric verification and DSC-based forwarding.',
    udiseCardTitle: 'UDISE+ Data Management',
    udiseCardSubtitle: 'Complete 2026-27 Session Support',
    udiseCardDesc: 'Structured data entry, student promotion tracking, and final certification with archive-ready records.',
    govProjectsTitle: 'Government Projects',
    govProjectsSubtitle: 'Ad-hoc Compliance Assistance',
    govProjectsDesc: 'Rapid response for ad-hoc circulars, compliance mapping, and special government portal assistance.',
    dailySupportCardTitle: 'Daily Digital Support',
    dailySupportCardSubtitle: 'Micro-Tasks & Portal Help',
    dailySupportCardDesc: 'Micro-services: PDF to Image, English-Hindi Translation, Model Paper creation, and resolving portal errors.',
    subscriptionTitle: 'Subscription Plans',
    subscriptionSubtitle: 'Monthly Retainer Options',
    subscriptionDesc: 'Silver, Gold, and Platinum tiers offering predictable monthly support with priority turnaround.',

    // Service Cards - Creator
    videoCardTitle: 'Video & Post-Production',
    videoCardSubtitle: 'Cinematic Editing & Color Grading',
    videoCardDesc: 'Complete post-production: Cuts, Color, Sound, and 2.5D Visuals for high retention.',
    brandingCardTitle: 'Branding & Design',
    brandingCardSubtitle: 'High-CTR Thumbnails & Identity',
    brandingCardDesc: 'High-CTR thumbnails, brand identity systems, and event posters that demand attention.',
    motionCardTitle: 'Motion Graphics & VFX',
    motionCardSubtitle: '2.5D Animation & Visual Effects',
    motionCardDesc: 'Custom logo intros, kinetic typography, lower thirds, and professional green screen cleanup.',
    strategyCardTitle: 'Content Strategy',
    strategyCardSubtitle: 'Scripting & Growth Planning',
    strategyCardDesc: 'Scripting, SEO optimization, content calendars, and channel growth management.',
    aiCampaignsTitle: 'AI Visual Campaigns',
    aiCampaignsSubtitle: 'AI-Powered Visual Content',
    aiCampaignsDesc: 'Future-ready AI-driven 2D/3D visual micro-campaigns and filmless premium advertisements.',
    studioSpaceTitle: 'Creator Studio Space',
    studioSpaceSubtitle: 'Professional Recording Environment',
    studioSpaceDesc: 'Coming soon: Soundproof environment with professional gear for local talent incubation.',

    // About Page
    aboutTitle: 'About',
    aboutIntro: 'We exist to reduce digital overwhelm for those who create meaningful work — whether that\'s educating the next generation or building audiences through content.',
    ourPhilosophy: 'Our Philosophy',
    confidentialityTitle: 'Confidentiality First',
    confidentialityDesc: 'Every file, every conversation, every piece of data is treated with discretion. We understand the sensitivity of institutional records and creator content alike.',
    realisticTimelinesTitle: 'Realistic Timelines',
    realisticTimelinesDesc: 'We don\'t overpromise. Expect clear timelines upfront with honest communication about any delays. Rushed work is poor work.',
    calmCommTitle: 'Calm Communication',
    calmCommDesc: 'No aggressive follow-ups, no pushy sales. We respond during working hours, keep messages clear, and respect your time.',
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
    theVisionAhead: 'The Vision Ahead',
    visionAheadText1: 'quickserveit is not trying to be everything to everyone. We\'re building a focused practice — deep expertise in institutional documentation and creator production. No distractions, no dilution.',
    visionAheadText2: 'Whether you\'re a school administrator processing scholarship records or a YouTuber crafting your next video, I want quickserveit to feel like having a trusted colleague who just handles things quietly and well.',
    thankYouMessage: 'Thank you for considering quickserveit.',
    theFounder: '— The Founder',

    // Founder Page
    founderPageTitle: 'Founder\'s Message',
    founderPageSubtitle: 'A personal message from the founder of quickserveit about our mission, values, and commitment to calm digital execution.',
    aNoteFromFounder: 'A Note from the',
    founderQuote: '"I built quickserveit because I saw a gap — institutions drowning in digital chaos, creators struggling with inconsistent quality. Both needed a partner who understood their world, not just their tasks."',
    whyIStartedThis: 'Why I Started This',
    whyText1: 'Working with schools, I noticed something painful: principals and teachers spending countless hours on documentation instead of education. UDISE+ forms, examination records, government reports — essential work, but exhausting.',
    whyText2: 'On the other side, I saw talented creators with brilliant ideas but limited production resources. They were creating content that deserved premium polish but couldn\'t afford or access it.',
    whyText3: 'quickserveit exists to bridge these gaps — not with flashy promises, but with calm, reliable execution.',
    whatWeBelieve: 'What We Believe',

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
    about: 'हमारे बारे में',
    founder: 'संस्थापक',
    pricing: 'कीमत',
    contact: 'संपर्क करें',

    // Hero Section - Institutional
    heroInst1: 'डिजिटल काम को आसान बनाएं',
    heroInst2: 'स्कूल के काम में मदद',
    heroInst3: 'शांति से काम, साफ फाइलें',
    heroInst4: 'भरोसेमंद साथी',
    heroInstDesc: 'हम आपके डिजिटल कामों को सही तरीके से, गोपनीय रखकर और समय पर पूरा करते हैं। परीक्षा के कागजात हों या सरकारी काम, हम आपकी टेंशन कम करते हैं।',

    // Hero Section - Creator
    heroCreator1: 'प्रोफेशनल वीडियो बनाएं',
    heroCreator2: 'दर्शकों को बांधे रखने वाला एडिटिंग',
    heroCreator3: 'बेहतरीन क्वालिटी',
    heroCreatorDesc: 'हम आपके कच्चे वीडियो को प्रोफेशनल कंटेंट में बदलते हैं जो लोग देखना पसंद करें। YouTube वीडियो हो या डॉक्यूमेंट्री, आपका आइडिया बेहतरीन फिनिश का हकदार है।',

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
    whyChooseUsSubtitle: 'हम गुणवत्ता और व्यक्तिगत ध्यान के साथ काम करते हैं',

    // Institutional Values
    valueSecurityTitle: 'डेटा सुरक्षा',
    valueSecurityDesc: 'आपके स्कूल का डेटा पूरी तरह सुरक्षित रहता है',
    valueTimelyTitle: 'समय पर डिलीवरी',
    valueTimelyDesc: 'हम समय सीमा का सम्मान करते हैं',
    valuePersonalTitle: 'व्यक्तिगत सहायता',
    valuePersonalDesc: 'सीधी बातचीत, कोई ऑटोमेटिक जवाब नहीं',
    valueReliableTitle: 'भरोसेमंद सेवा',
    valueReliableDesc: 'लगातार अच्छी क्वालिटी जिस पर आप भरोसा कर सकें',

    // Creator Values
    valueQualityTitle: 'क्वालिटी पहले',
    valueQualityDesc: 'प्रोफेशनल एडिटिंग जो आपके कंटेंट को खास बनाए',
    valueFastTitle: 'तेज़ डिलीवरी',
    valueFastDesc: 'क्वालिटी के साथ तेज़ काम',
    valueCreativeTitle: 'क्रिएटिव टच',
    valueCreativeDesc: 'हम आपकी सोच को समझते हैं और उसे जीवंत करते हैं',
    valueCommittedTitle: 'प्रतिबद्ध साथी',
    valueCommittedDesc: 'आपकी सफलता ही हमारी सफलता है',

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

    // Footer
    allRightsReserved: 'सर्वाधिकार सुरक्षित',
    privacyPolicy: 'गोपनीयता नीति',
    termsOfService: 'नियम और शर्तें',

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
  }
} as const;
