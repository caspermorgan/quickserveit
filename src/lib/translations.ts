// QuickServe IT - Professional Hindi/English Translation System

export type TranslationKey = keyof typeof translations.en;

export const translations = {
  en: {
    // Brand
    brandName: 'QuickServe IT',
    brandTagline: 'Your Personal Tech Partner.',

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
    available: 'Available Now',
    offline: 'Offline',
    workingHours: 'Working Hours',
    workingHoursInfo: 'Working Hours: 10:00 AM – 3:00 PM (Responses within working hours)',
    workingDays: 'Monday to Saturday',
    outsideHoursNote: 'Messages received outside these hours will be addressed the next working day.',

    // Testimonials
    readMore: 'Read more',
    showLess: 'Show less',

    // Services Page
    ourServices: 'Our Services',
    creatorStudio: 'Creator Studio',
    servicesInstDesc: 'Structured, confidential support for educational institutions. Each service designed for operational clarity.',
    servicesCreatorDesc: 'Premium production services for modern creators. Quality that elevates your content.',
    beforeYouBegin: 'Before You Begin',
    beforeYouBeginItems: 'All services require clear specifications upfront|Working hours: 10:00 AM – 3:00 PM IST (Mon–Sat)|Response time during working hours: Within 2 hours|All files handled with strict confidentiality',
    howItWorks: 'How It Works',
    whatYouNeed: 'What You\'ll Need to Prepare',
    timeline: 'Timeline',
    whatsappNote: 'Click to open WhatsApp with a pre-filled message',

    // Services - Institutional
    examDocTitle: 'Examination Documentation',
    examDocShort: 'Complete exam record management from scheduling to result documentation.',
    examDocFull: 'End-to-end examination documentation including student data entry, hall ticket generation, attendance records, answer sheet tracking, and result compilation.',
    examDocSteps: 'Share exam schedule and student lists via WhatsApp|Provide raw data in any format (Excel, PDF, handwritten)|We structure and digitize all records|Review formatted documents before final submission|Receive complete examination package ready for submission',
    examDocNeeds: 'Student master data (name, roll number, class)|Subject list and exam dates|Any existing documentation templates|Deadline for final submission',
    examDocTimeline: 'Standard: 5-7 working days | Urgent: 2-3 working days (additional charges)',

    scholarshipTitle: 'Scholarship Support',
    scholarshipShort: 'Application processing, eligibility verification, and documentation for scholarships.',
    scholarshipFull: 'Complete scholarship management including eligibility screening, application form filling, document collection guidance, and submission tracking.',
    scholarshipSteps: 'Share scholarship scheme details and student list|We verify eligibility criteria for each student|Guide families on required documents|Fill and format applications accurately|Track submission status and deadlines',
    scholarshipNeeds: 'Scholarship scheme name and guidelines|Student list with basic details|Income certificates, caste certificates (if applicable)|Bank account details of students/parents',
    scholarshipTimeline: 'Standard: 7-10 working days | Depends on document collection from families',

    udiseTitle: 'UDISE+ Management',
    udiseShort: 'Complete UDISE+ data entry, verification, and annual updates.',
    udiseFull: 'Annual UDISE+ compliance including data collection, accurate entry, verification before submission, and correction management.',
    udiseSteps: 'Share current school data and last year\'s UDISE+ records|We audit data for completeness and accuracy|Enter all fields with verification checks|Generate preview report for your review|Submit and provide confirmation documentation',
    udiseNeeds: 'School login credentials (shared securely)|Current year enrollment data|Infrastructure details and updates|Teacher information and qualifications',
    udiseTimeline: 'Standard: 3-5 working days | Annual window: Priority scheduling available',

    dailySupportTitle: 'Daily Digital Support',
    dailySupportShort: 'Ongoing administrative support for routine documentation needs.',
    dailySupportFull: 'Retainer-based support for schools requiring regular assistance with circulars, notices, attendance reports, parent communication, and ad-hoc documentation.',
    dailySupportSteps: 'Subscribe to monthly support package|Share tasks via dedicated WhatsApp channel|Receive same-day or next-day turnaround|Monthly summary of completed work|Flexible scope based on your needs',
    dailySupportNeeds: 'List of recurring documentation needs|Communication preferences and templates|Key contacts for clarifications|Monthly task volume estimate',
    dailySupportTimeline: 'Same-day for simple tasks | 24-48 hours for complex documentation',

    // Services - Creator
    videoEditTitle: 'Long-Form Video Editing',
    videoEditShort: 'YouTube, documentary, and educational content with retention-focused editing.',
    videoEditFull: 'Premium editing for content 10+ minutes including structure optimization, pacing, cuts, transitions, text animations, and engagement hooks.',
    videoEditSteps: 'Share raw footage via Google Drive or WeTransfer|Provide brief: key moments, style references, target length|Receive first cut within timeline|Review and request revisions (2 rounds included)|Final export in required format and resolution',
    videoEditNeeds: 'Raw footage (organized by scene/topic)|Any B-roll or assets to include|Music preferences or licensed tracks|Reference videos for style/pacing',
    videoEditTimeline: 'Standard: 7-10 days for 15-20 min video | Depends on complexity',

    thumbnailTitle: 'Thumbnail & Design',
    thumbnailShort: 'High-CTR thumbnails and channel graphics that drive clicks.',
    thumbnailFull: 'Scroll-stopping thumbnails, channel art, end screens, and social media graphics designed for maximum click-through.',
    thumbnailSteps: 'Share video topic and target emotion|Provide face shots or key frames|Receive 2-3 thumbnail options|Select and request tweaks|Final delivery in all required sizes',
    thumbnailNeeds: 'Video title and topic|High-quality still from video (or we extract)|Any text to include|Color preferences or brand guidelines',
    thumbnailTimeline: 'Standard: 24-48 hours | Rush: Same-day available',

    motionTitle: 'Motion Graphics & Animation',
    motionShort: 'Intros, outros, lower thirds, and animated elements.',
    motionFull: 'Custom motion graphics including animated logos, subscribe buttons, transitions, lower thirds, and full intro/outro sequences.',
    motionSteps: 'Share brand assets and style preferences|Discuss animation style and complexity|Receive concept sketches or storyboard|Review animated draft|Final delivery with project files (optional)',
    motionNeeds: 'Logo files (preferably vector)|Brand colors and fonts|Reference animations you like|Duration and format requirements',
    motionTimeline: 'Intros/Outros: 5-7 days | Lower thirds: 2-3 days | Complex: Quote required',

    strategyTitle: 'Content Strategy Support',
    strategyShort: 'Planning, scripting, and content calendar development.',
    strategyFull: 'Strategic support for creators including topic research, script frameworks, upload scheduling, and performance analysis.',
    strategySteps: 'Share channel goals and current performance|Discuss niche and target audience|Receive content calendar or script outlines|Review and refine together|Ongoing support or one-time strategy',
    strategyNeeds: 'Channel link and analytics access (for analysis)|Content goals (views, subs, monetization)|Topics you want to cover|Current posting frequency',
    strategyTimeline: 'Initial strategy: 5-7 days | Ongoing: Weekly/monthly retainer',

    // Services Section (Home)
    institutionalServices: 'Institutional Services',
    creativeStudio: 'Creative Studio',
    servicesInstSubtitle: 'Comprehensive digital support for educational institutions',
    servicesCreatorSubtitle: 'World-class production for modern creators',

    // Service Cards - Institutional
    examDocCardTitle: 'Exam Documentation',
    examDocCardDesc: 'Confidential paper formatting, room-wise seating management, and secure printing with class-wise bundling.',
    scholarshipCardTitle: 'UP Scholarship Processing',
    scholarshipCardDesc: 'On-campus technical assistance, DSC-based locking, and complete scholarship workflow management.',
    udiseCardTitle: 'UDISE+ Data Management',
    udiseCardDesc: 'Structured data entry, student promotion tracking, and final certification with archive-ready records.',
    govProjectsTitle: 'Government Projects',
    govProjectsDesc: 'Rapid response for ad-hoc circulars, compliance mapping, and special government portal assistance.',
    dailySupportCardTitle: 'Daily Digital Support',
    dailySupportCardDesc: 'Remote WhatsApp-based office assistance for notices, file resizing, and quick administrative tasks.',
    subscriptionTitle: 'Subscription Plans',
    subscriptionDesc: 'Silver, Gold, and Platinum tiers offering predictable monthly support with priority turnaround.',

    // Service Cards - Creator
    videoCardTitle: 'Video & Post-Production',
    videoCardDesc: 'Retention-style editing for YouTube, Reels, and documentaries with cinematic scene polish.',
    brandingCardTitle: 'Branding & Design',
    brandingCardDesc: 'High-CTR thumbnails, brand identity systems, and event posters that demand attention.',
    motionCardTitle: 'Motion Graphics & VFX',
    motionCardDesc: 'Custom logo intros, kinetic typography, lower thirds, and professional green screen cleanup.',
    strategyCardTitle: 'Content Strategy',
    strategyCardDesc: 'Scripting, SEO optimization, content calendars, and channel growth management.',
    aiCampaignsTitle: 'AI Visual Campaigns',
    aiCampaignsDesc: 'Future-ready AI-driven 2D/3D visual micro-campaigns and filmless premium advertisements.',
    studioSpaceTitle: 'Creator Studio Space',
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
    creatorModeStatusNote: 'We are finalizing our production workflows and quality standards. Institutional services remain fully operational.',

    // Portfolio Protection
    portfolioLocked: 'Protected Content',
    portfolioAccessTitle: 'Content Access Policy',
    portfolioAccessMessage: 'This portfolio content is intended only for users evaluating our services. The work showcased may represent real institutional use-cases and client projects. To protect privacy and maintain trust, this material is not shared publicly.',
    portfolioAccessNote: 'If you are evaluating our services and would like to discuss specific case studies, please contact us directly.',
    portfolioUnderstand: 'I Understand',
    portfolioContactUs: 'Contact Us',
    portfolioViewContent: 'View Content',

    // Testimonials
    testimonialInstHeading: 'Institutional Feedback',
    testimonialCreatorHeading: 'Creator Feedback',

    // Institutional Testimonials
    testimonialInst1Text: 'The technical support provided during critical academic and administrative work was reliable and well-managed. During scholarship processing, examination documentation, biometric assistance, and government scheme–related digital work, the technical execution was handled carefully and on time. Support during exams and compliance periods reduced pressure on our teaching and office staff. The work remained disciplined, confidential, and aligned with institutional instructions. Overall coordination was smooth and helped manage multiple responsibilities without unnecessary stress.',
    testimonialInst1Name: 'IT Manager',
    testimonialInst1Location: 'B. N. Singh Adarsh Intermediate College, Chandrao',

    testimonialInst2Text: 'Timely examination documentation support made the process smooth and stress-free. QuickServe IT supported us with examination paper preparation and related documentation through the agency framework. The work was delivered on time and handled in a professional manner. It is reassuring for us to receive organized digital services locally in a rural area. We are satisfied with the quality of work and intend to continue this association with the agency.',
    testimonialInst2Name: 'Administrator',
    testimonialInst2Location: 'Sahid Rudra Pratap Intermediate College, Chandrao',

    testimonialInst3Text: 'It is encouraging to see professional digital support becoming available locally in rural areas. We had a discussion regarding scholarship-related technical support, and the approach felt clear and well-structured. It is reassuring to know that such services are being developed within the rural region itself. We look forward to coordinating during the scholarship processing period and appreciate the effort to support schools with timely and organized digital assistance.',
    testimonialInst3Name: 'School Administrator',
    testimonialInst3Location: 'Vidya Public School',

    // Creator Testimonial
    testimonialCreator1Text: 'The video editing quality is exceptional. My content retention improved significantly after working with QuickServe IT. They understand what works on YouTube.',
    testimonialCreator1Name: 'Arjun',
    testimonialCreator1Location: 'Gorakhpur',



    // How It Works
    processStep1Title: 'Contact',
    processStep1Desc: 'Reach out via WhatsApp or form with your initial requirements.',
    processStep2Title: 'Requirement Discussion',
    processStep2Desc: 'We discuss the details, scope, and timeline to ensure clarity.',
    processStep3Title: 'Delivery',
    processStep3Desc: 'Receive your high-quality deliverables on time and ready to use.',
  },
  hi: {
    // Brand
    brandName: 'QuickServe IT',
    brandTagline: 'आपका विश्वसनीय टेक पार्टनर।',

    // Landing
    secure: 'सुरक्षित',
    india: 'भारत',
    enter: 'प्रवेश करें',

    // Mode labels
    institutional: 'संस्थागत',
    creator: 'क्रिएटर',

    // Navigation
    home: 'होम',
    services: 'सेवाएं',
    studio: 'स्टूडियो',
    portfolio: 'पोर्टफोलियो',
    about: 'परिचय',
    founder: 'संस्थापक',
    pricing: 'मूल्य निर्धारण',
    contact: 'संपर्क',

    // Hero Section - Institutional
    heroInst1: 'सुव्यवस्थित डिजिटल निष्पादन',
    heroInst2: 'संरचित शैक्षणिक सहायता',
    heroInst3: 'शांत प्रगति, स्पष्ट फाइलें',
    heroInst4: 'विश्वसनीय संस्थागत भागीदार',
    heroInstDesc: 'हम जटिल डिजिटल कार्यों को व्यवस्थित, गोपनीय और समयबद्ध निष्पादन में बदलते हैं। परीक्षा दस्तावेजों से लेकर सरकारी अनुपालन तक, आपकी संस्था शांति की हकदार है।',

    // Hero Section - Creator
    heroCreator1: 'सिनेमाई कंटेंट निर्माण',
    heroCreator2: 'रिटेंशन-आधारित संपादन',
    heroCreator3: 'विश्व-स्तरीय प्रोडक्शन',
    heroCreatorDesc: 'हम आपके रॉ फुटेज को प्रीमियम कंटेंट में बदलते हैं जो दर्शकों को बांधे रखता है। YouTube लॉन्ग-फॉर्म से लेकर सिनेमाई डॉक्यूमेंट्री तक, आपका विजन विश्व-स्तरीय फिनिश का हकदार है।',

    // CTAs
    getStarted: 'शुरुआत करें',
    startCreating: 'निर्माण शुरू करें',
    viewServices: 'सेवाएं देखें',
    seePortfolio: 'पोर्टफोलियो देखें',
    contactUs: 'संपर्क करें',
    getQuote: 'कोटेशन प्राप्त करें',
    discussRetainer: 'रिटेनर पर चर्चा करें',
    explorePartnership: 'साझेदारी देखें',
    discussPackage: 'पैकेज पर चर्चा करें',
    startThisService: 'यह सेवा शुरू करें',

    // Stats
    schoolsServed: 'विद्यालय सेवारत',
    projectsDelivered: 'प्रोजेक्ट्स पूर्ण',
    uptimeGuarantee: 'अपटाइम गारंटी',
    documents: 'दस्तावेज़ संसाधित',
    viewsGenerated: 'व्यूज जनरेटेड',

    // Contact Form
    contactTitle: 'संपर्क स्थापित करें',
    contactSubtitle: 'अपने प्रोजेक्ट पर चर्चा करने के लिए नीचे दिया गया फॉर्म भरें।',
    yourName: 'आपका नाम',
    mobileNumber: 'मोबाइल नंबर',
    emailAddress: 'ईमेल पता',
    selectService: 'सेवा का चयन करें',
    instituteServices: 'संस्थागत सेवाएं',
    creatorServices: 'क्रिएटर सेवाएं',
    generalInquiry: 'सामान्य पूछताछ',
    yourMessage: 'आपका संदेश',
    termsAgree: 'मैं नियमों और शर्तों से सहमत हूं',
    sendMessage: 'संदेश भेजें',
    messageSent: 'संदेश तैयार है! WhatsApp पर रीडायरेक्ट किया जा रहा है...',

    // Footer
    allRightsReserved: 'सर्वाधिकार सुरक्षित',
    privacyPolicy: 'गोपनीयता नीति',
    termsOfService: 'सेवा की शर्तें',

    // Working Hours
    available: 'उपलब्ध',
    offline: 'ऑफलाइन',
    workingHours: 'कार्य समय',
    workingHoursInfo: 'कार्य समय: सुबह 10:00 – दोपहर 3:00 (केवल कार्य समय में प्रतिक्रिया)',
    workingDays: 'सोमवार से शनिवार',
    outsideHoursNote: 'इन घंटों के बाद प्राप्त संदेशों का उत्तर अगले कार्य दिवस पर दिया जाएगा।',

    // Testimonials
    readMore: 'अधिक पढ़ें',
    showLess: 'कम दिखाएं',

    // Services Page
    ourServices: 'हमारी सेवाएं',
    creatorStudio: 'क्रिएटर स्टूडियो',
    servicesInstDesc: 'शैक्षणिक संस्थानों के लिए संरचित और गोपनीय सहायता। प्रत्येक सेवा परिचालन स्पष्टता के लिए डिज़ाइन की गई है।',
    servicesCreatorDesc: 'आधुनिक क्रिएटर्स के लिए प्रीमियम प्रोडक्शन सेवाएं। गुणवत्ता जो आपके कंटेंट को उनींदा स्तर पर ले जाती है।',
    beforeYouBegin: 'शुरू करने से पहले',
    beforeYouBeginItems: 'सभी सेवाओं के लिए स्पष्ट विनिर्देशों की आवश्यकता होती है|कार्य समय: सुबह 10:00 – दोपहर 3:00 (सोम-शनि)|कार्य समय के दौरान प्रतिक्रिया समय: 2 घंटे के भीतर|सभी फाइलें सख्त गोपनीयता के साथ संहाली जाती हैं',
    howItWorks: 'कार्य प्रक्रिया',
    whatYouNeed: 'आवश्यक तैयारी',
    timeline: 'समय-सीमा',
    whatsappNote: 'पहले से भरे हुए संदेश के साथ WhatsApp खोलने के लिए क्लिक करें',

    // Services - Institutional
    examDocTitle: 'परीक्षा दस्तावेज़ीकरण',
    examDocShort: 'शेड्यूलिंग से लेकर रिजल्ट डॉक्यूमेंटेशन तक पूर्ण परीक्षा रिकॉर्ड प्रबंधन।',
    examDocFull: 'एंड-टू-एंड परीक्षा दस्तावेज़ीकरण जिसमें छात्र डेटा एंट्री, हॉल टिकट जनरेशन, उपस्थिति रिकॉर्ड, उत्तर पुस्तिका ट्रैकिंग और परिणाम संकलन शामिल है।',
    examDocSteps: 'WhatsApp के माध्यम से परीक्षा कार्यक्रम और छात्र सूचियां साझा करें|किसी भी प्रारूप (Excel, PDF, हस्तलिखित) में कच्चा डेटा प्रदान करें|हम सभी रिकॉर्ड्स को संरचित और डिजिटाइज़ करते हैं|अंतिम सबमिशन से पहले स्वरूपित दस्तावेजों की समीक्षा करें|जमा करने के लिए तैयार पूर्ण परीक्षा पैकेज प्राप्त करें',
    examDocNeeds: 'छात्र मास्टर डेटा (नाम, रोल नंबर, कक्षा)|विषय सूची और परीक्षा तिथियां|कोई मौजूदा दस्तावेज़ टेम्पलेट|अंतिम सबमिशन की समय सीमा',
    examDocTimeline: 'मानक: 5-7 कार्य दिवस | तत्काल: 2-3 कार्य दिवस (अतिरिक्त शुल्क)',

    scholarshipTitle: 'छात्रवृत्ति सहायता',
    scholarshipShort: 'छात्रवृत्ति के लिए आवेदन प्रसंस्करण, पात्रता सत्यापन और दस्तावेज़ीकरण।',
    scholarshipFull: 'पात्रता स्क्रीनिंग, आवेदन पत्र भरने, दस्तावेज़ संग्रह मार्गदर्शन और सबमिशन ट्रैकिंग सहित पूर्ण छात्रवृत्ति प्रबंधन।',
    scholarshipSteps: 'छात्रवृत्ति योजना विवरण और छात्र सूची साझा करें|हम प्रत्येक छात्र के लिए पात्रता मानदंड सत्यापित करते हैं|आवश्यक दस्तावेजों पर परिवारों का मार्गदर्शन करें|आवेदन सटीक रूप से भरें और प्रारूपित करें|सबमिशन स्थिति और समय सीमा ट्रैक करें',
    scholarshipNeeds: 'छात्रवृत्ति योजना का नाम और दिशानिर्देश|बुनियादी विवरण के साथ छात्र सूची|आय प्रमाण पत्र, जाति प्रमाण पत्र (यदि लागू हो)|छात्रों/अभिभावकों का बैंक खाता विवरण',
    scholarshipTimeline: 'मानक: 7-10 कार्य दिवस | परिवारों से दस्तावेज़ संग्रह पर निर्भर',

    udiseTitle: 'UDISE+ प्रबंधन',
    udiseShort: 'पूर्ण UDISE+ डेटा एंट्री, सत्यापन और वार्षिक अपडेट।',
    udiseFull: 'डेटा संग्रह, सटीक प्रविष्टि, सबमिशन से पहले सत्यापन और सुधार प्रबंधन सहित वार्षिक UDISE+ अनुपालन।',
    udiseSteps: 'वर्तमान स्कूल डेटा और पिछले वर्ष के UDISE+ रिकॉर्ड साझा करें|हम पूर्णता और सटीकता के लिए डेटा का ऑडिट करते हैं|सत्यापन जांच के साथ सभी फ़ील्ड दर्ज करें|आपकी समीक्षा के लिए पूर्वावलोकन रिपोर्ट तैयार करें|सबमिट करें और पुष्टि दस्तावेज़ प्रदान करें',
    udiseNeeds: 'स्कूल लॉगिन क्रेडेंशियल्स (सशर्त साझा)|वर्तमान वर्ष नामांकन डेटा|बुनियादी ढांचे का विवरण और अपडेट|शिक्षक जानकारी और योग्यता',
    udiseTimeline: 'मानक: 3-5 कार्य दिवस | वार्षिक विंडो: प्राथमिकता शेड्यूलिंग उपलब्ध',

    dailySupportTitle: 'दैनिक डिजिटल सहायता',
    dailySupportShort: 'नियमित दस्तावेज़ीकरण आवश्यकताओं के लिए चल रही प्रशासनिक सहायता।',
    dailySupportFull: 'सर्कुलर, नोटिस, उपस्थिति रिपोर्ट, अभिभावक संचार और तदर्थ दस्तावेज़ीकरण के साथ नियमित सहायता की आवश्यकता वाले स्कूलों के लिए रिटेनर-आधारित सहायता।',
    dailySupportSteps: 'मासिक सहायता पैकेज की सदस्यता लें|समर्पित WhatsApp चैनल के माध्यम से कार्य साझा करें|उसी दिन या अगले दिन का टर्नअराउंड प्राप्त करें|पूर्ण कार्य का मासिक सारांश|आपकी आवश्यकताओं के आधार पर लचीला दायरा',
    dailySupportNeeds: 'आवर्ती दस्तावेज़ीकरण आवश्यकताओं की सूची|संचार प्राथमिकताएं और टेम्पलेट|स्पष्टीकरण के लिए मुख्य संपर्क|मासिक कार्य नत्रप अनुमान',
    dailySupportTimeline: 'सरल कार्यों के लिए उसी दिन | जटिल दस्तावेज़ीकरण के लिए 24-48 घंटे',

    // Services - Creator
    videoEditTitle: 'लॉन्ग-फॉर्म वीडियो संपादन',
    videoEditShort: 'रिटेंशन-केंद्रित संपादन के साथ YouTube, डॉक्यूमेंट्री और शैक्षिक सामग्री।',
    videoEditFull: '10+ मिनट की सामग्री के लिए प्रीमियम संपादन जिसमें संरचना अनुकूलन, पेसिंग, कट्स, ट्रांज़िशन, टेक्स्ट एनिमेशन और एंगेजमेंट हुक शामिल हैं।',
    videoEditSteps: 'Google Drive या WeTransfer के माध्यम से कच्चा फुटेज साझा करें|ब्रीफ प्रदान करें: मुख्य क्षण, शैली संदर्भ, लक्ष्य लंबाई|समय सीमा के भीतर पहला कट प्राप्त करें|समीक्षा और संशोधन का अनुरोध करें (2 राउंड शामिल)|आवश्यक प्रारूप और रिज़ॉल्यूशन में अंतिम निर्यात',
    videoEditNeeds: 'कच्चा फुटेज (दृश्य/विषय द्वारा व्यवस्थित)|शामिल करने के लिए कोई बी-रोल या एसेट्स|संगीत प्राथमिकताएं या लाइसेंस प्राप्त ट्रैक|शैली/पेसिंग के लिए संदर्भ वीडियो',
    videoEditTimeline: 'मानक: 15-20 मिनट के वीडियो के लिए 7-10 दिन | जटिलता पर निर्भर करता है',

    thumbnailTitle: 'थंबनेल एवं डिज़ाइन',
    thumbnailShort: 'उच्च-CTR थंबनेल और चैनल ग्राफिक्स जो क्लिक बढ़ाते हैं।',
    thumbnailFull: 'स्क्रॉल-स्टॉपिंग थंबनेल, चैनल आर्ट, एंड स्क्रीन और सोशल मीडिया ग्राफिक्स जिन्हें अधिकतम क्लिक-थ्रू के लिए डिज़ाइन किया गया है।',
    thumbnailSteps: 'वीडियो विषय और लक्ष्य भावना साझा करें|फेस शॉट्स या की-फ्रेम प्रदान करें|2-3 थंबनेल विकल्प प्राप्त करें|चयन करें और बदलाव का अनुरोध करें|सभी आवश्यक आकारों में अंतिम डिलीवरी',
    thumbnailNeeds: 'वीडियो शीर्षक और विषय|वीडियो से उच्च गुणवत्ता वाला स्टिल (या हम निकालते हैं)|शामिल करने के लिए कोई टेक्स्ट|रंग प्राथमिकताएं या ब्रांड दिशानिर्देश',
    thumbnailTimeline: 'मानक: 24-48 घंटे | रश: उसी दिन उपलब्ध',

    motionTitle: 'मोशन ग्राफिक्स एवं एनिमेशन',
    motionShort: 'इंट्रो, आउट्रो, लोअर थर्ड्स और एनिमेटेड तत्व।',
    motionFull: 'एनिमेटेड लोगो, सब्सक्राइब बटन, ट्रांज़िशन, लोअर थर्ड्स और पूर्ण इंट्रो/आउट्रो सीक्वेंस सहित कस्टम मोशन ग्राफिक्स।',
    motionSteps: 'ब्रांड एसेट्स और शैली प्राथमिकताएं साझा करें|एनिमेशन शैली और जटिलता पर चर्चा करें|कॉन्सेप्ट स्केच या स्टोरीबोर्ड प्राप्त करें|एनिमेटेड ड्राफ्ट की समीक्षा करें|प्रोजेक्ट फ़ाइलों के साथ अंतिम डिलीवरी (वैकल्पिक)',
    motionNeeds: 'लोगो फ़ाइलें (अधिमानतः वेक्टर)|ब्रांड रंग और फ़ॉन्ट|संदर्भ एनिमेशन जो आपको पसंद हैं|अवधि और प्रारूप आवश्यकताएँ',
    motionTimeline: 'इंट्रो/आउट्रो: 5-7 दिन | लोअर थर्ड्स: 2-3 दिन | जटिल: कोटेशन आवश्यक',

    strategyTitle: 'कंटेंट रणनीति',
    strategyShort: 'योजना, स्क्रिप्टिंग और कंटेंट कैलेंडर विकास।',
    strategyFull: 'विषय अनुसंधान, स्क्रिप्ट रूपरेखा, अपलोड शेड्यूलिंग और प्रदर्शन विश्लेषण सहित क्रिएटर्स के लिए रणनीतिक सहायता।',
    strategySteps: 'चैनल लक्ष्य और वर्तमान प्रदर्शन साझा करें|निश और लक्षित दर्शकों पर चर्चा करें|कंटेंट कैलेंडर या स्क्रिप्ट रूपरेखा प्राप्त करें|एक साथ समीक्षा और परिष्कृत करें|चल रही सहायता या एक बार की रणनीति',
    strategyNeeds: 'चैनल लिंक और एनालिटिक्स एक्सेस (विश्लेषण के लिए)|कंटेंट लक्ष्य (व्यूज, सब्सक्राइबर, मुद्रीकरण)|वे विषय जिन्हें आप कवर करना चाहते हैं|वर्तमान पोस्टिंग आवृत्ति',
    strategyTimeline: 'प्रारंभिक रणनीति: 5-7 दिन | चल रही: साप्ताहिक/मासिक रिटेनर',

    // Services Section (Home)
    institutionalServices: 'संस्थागत सेवाएं',
    creativeStudio: 'क्रिएटिव स्टूडियो',
    servicesInstSubtitle: 'शैक्षणिक संस्थानों के लिए व्यापक डिजिटल सहायता',
    servicesCreatorSubtitle: 'आधुनिक क्रिएटर्स के लिए विश्व-स्तरीय प्रोडक्शन',

    // Service Cards - Institutional
    examDocCardTitle: 'परीक्षा दस्तावेज़ीकरण',
    examDocCardDesc: 'गोपनीय पेपर फॉर्मेटिंग, कक्ष-वार सीटिंग प्रबंधन और कक्षा-वार बंडलिंग के साथ सुरक्षित प्रिंटिंग।',
    scholarshipCardTitle: 'UP छात्रवृत्ति प्रोसेसिंग',
    scholarshipCardDesc: 'परिसर में तकनीकी सहायता, DSC-आधारित लॉकिंग और संपूर्ण छात्रवृत्ति वर्कफ़्लो प्रबंधन।',
    udiseCardTitle: 'UDISE+ डेटा प्रबंधन',
    udiseCardDesc: 'संरचित डेटा एंट्री, छात्र पदोन्नति ट्रैकिंग और आर्काइव-रेडी रिकॉर्ड के साथ अंतिम प्रमाणन।',
    govProjectsTitle: 'सरकारी प्रोजेक्ट्स',
    govProjectsDesc: 'तदर्थ परिपत्रों के लिए त्वरित प्रतिक्रिया, अनुपालन मैपिंग और विशेष सरकारी पोर्टल सहायता।',
    dailySupportCardTitle: 'दैनिक डिजिटल सहायता',
    dailySupportCardDesc: 'नोटिस, फ़ाइल आकार बदलने और त्वरित प्रशासनिक कार्यों के लिए रिमोट WhatsApp-आधारित कार्यालय सहायता।',
    subscriptionTitle: 'सब्सक्रिप्शन प्लान',
    subscriptionDesc: 'प्राथमिकता टर्नअराउंड के साथ अनुमानित मासिक सहायता प्रदान करने वाले सिल्वर, गोल्ड और प्लेटिनम टियर।',

    // Service Cards - Creator
    videoCardTitle: 'वीडियो एवं पोस्ट-प्रोडक्शन',
    videoCardDesc: 'सिनेमाई सीन पॉलिश के साथ YouTube, Reels और डॉक्यूमेंट्री के लिए रिटेंशन-स्टाइल संपादन।',
    brandingCardTitle: 'ब्रांडिंग एवं डिज़ाइन',
    brandingCardDesc: 'उच्च-CTR थंबनेल, ब्रांड पहचान प्रणाली और ध्यान आकर्षित करने वाले इवेंट पोस्टर।',
    motionCardTitle: 'मोशन ग्राफिक्स एवं VFX',
    motionCardDesc: 'कस्टम लोगो इंट्रो, काइनेटिक टाइपोग्राफी, लोअर थर्ड्स और प्रोफेशनल ग्रीन स्क्रीन क्लीनअप।',
    strategyCardTitle: 'कंटेंट रणनीति',
    strategyCardDesc: 'स्क्रिप्टिंग, SEO अनुकूलन, कंटेंट कैलेंडर और चैनल विकास प्रबंधन।',
    aiCampaignsTitle: 'AI विज़ुअल कैंपेन',
    aiCampaignsDesc: 'भविष्य के लिए तैयार AI-संचालित 2D/3D विज़ुअल माइक्रो-कैंपेन और फिल्मलेस प्रीमियम विज्ञापन।',
    studioSpaceTitle: 'क्रिएटर स्टूडियो स्पेस',
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
    creatorModeStatusNote: 'हम अपने प्रोडक्शन वर्कफ़्लो और गुणवत्ता मानकों को अंतिम रूप दे रहे हैं। संस्थागत सेवाएं पूरी तरह से परिचालन में हैं।',

    // Portfolio Protection
    portfolioLocked: 'संरक्षित सामग्री',
    portfolioAccessTitle: 'सामग्री एक्सेस नीति',
    portfolioAccessMessage: 'यह पोर्टफोलियो सामग्री केवल उन उपयोगकर्ताओं के लिए है जो हमारी सेवाओं का मूल्यांकन कर रहे हैं। प्रदर्शित कार्य वास्तविक संस्थागत उपयोग-मामलों और क्लाइंट प्रोजेक्ट्स का प्रतिनिधित्व कर सकता है। गोपनीयता की रक्षा और विश्वास बनाए रखने के लिए, यह सामग्री सार्वजनिक रूप से साझा नहीं की जाती है।',
    portfolioAccessNote: 'यदि आप हमारी सेवाओं का मूल्यांकन कर रहे हैं और विशिष्ट केस स्टडीज पर चर्चा करना चाहते हैं, तो कृपया हमसे सीधे संपर्क करें।',
    portfolioUnderstand: 'मैं सहमत हूं',
    portfolioContactUs: 'संपर्क करें',
    portfolioViewContent: 'सामग्री देखें',

    // Testimonials
    testimonialInstHeading: 'संस्थागत प्रतिक्रिया',
    testimonialCreatorHeading: 'क्रिएटर प्रतिक्रिया',

    // Institutional Testimonials
    testimonialInst1Text: 'महत्वपूर्ण शैक्षणिक और प्रशासनिक कार्य के दौरान तकनीकी सहायता विश्वसनीय और सुव्यवस्थित थी। छात्रवृत्ति प्रसंस्करण, परीक्षा दस्तावेज़ीकरण, बायोमेट्रिक सहायता और सरकारी योजना से संबंधित डिजिटल कार्य के दौरान, तकनीकी निष्पादन सावधानीपूर्वक और समय पर संभाला गया। परीक्षा और अनुपालन अवधि के दौरान सहायता ने हमारे शिक्षण और कार्यालय कर्मचारियों पर दबाव कम किया। कार्य अनुशासित, गोपनीय रहा और संस्थागत निर्देशों के अनुरूप रहा। समग्र समन्वय सुगम था और अनावश्यक तनाव के बिना कई जिम्मेदारियों को प्रबंधित करने में मदद की।',
    testimonialInst1Name: 'आईटी प्रबंधक',
    testimonialInst1Location: 'बी. एन. सिंह आदर्श इंटरमीडिएट कॉलेज, चंद्राव',

    testimonialInst2Text: 'समय पर परीक्षा दस्तावेज़ीकरण सहायता ने प्रक्रिया को सुगम और तनाव-मुक्त बनाया। QuickServe IT ने एजेंसी ढांचे के माध्यम से परीक्षा पेपर तैयारी और संबंधित दस्तावेज़ीकरण में हमारा समर्थन किया। कार्य समय पर वितरित किया गया और पेशेवर तरीके से संभाला गया। ग्रामीण क्षेत्र में स्थानीय रूप से संगठित डिजिटल सेवाएं प्राप्त करना हमारे लिए आश्वस्तकारी है। हम कार्य की गुणवत्ता से संतुष्ट हैं और एजेंसी के साथ इस जुड़ाव को जारी रखने का इरादा रखते हैं।',
    testimonialInst2Name: 'प्रशासक',
    testimonialInst2Location: 'शहीद रुद्र प्रताप इंटरमीडिएट कॉलेज, चंद्राव',

    testimonialInst3Text: 'ग्रामीण क्षेत्रों में स्थानीय रूप से पेशेवर डिजिटल सहायता उपलब्ध होना उत्साहजनक है। हमने छात्रवृत्ति से संबंधित तकनीकी सहायता के बारे में चर्चा की, और दृष्टिकोण स्पष्ट और सुव्यवस्थित लगा। यह जानना आश्वस्तकारी है कि ऐसी सेवाएं ग्रामीण क्षेत्र के भीतर ही विकसित की जा रही हैं। हम छात्रवृत्ति प्रसंस्करण अवधि के दौरान समन्वय की प्रतीक्षा कर रहे हैं और समय पर और संगठित डिजिटल सहायता के साथ स्कूलों का समर्थन करने के प्रयास की सराहना करते हैं।',
    testimonialInst3Name: 'स्कूल प्रशासक',
    testimonialInst3Location: 'विद्या पब्लिक स्कूल',

    // Creator Testimonial
    testimonialCreator1Text: 'वीडियो संपादन की गुणवत्ता असाधारण है। QuickServe IT के साथ काम करने के बाद मेरे कंटेंट रिटेंशन में काफी सुधार हुआ। वे समझते हैं कि YouTube पर क्या काम करता है।',
    testimonialCreator1Name: 'अर्जुन',
    testimonialCreator1Location: 'गोरखपुर',
  }
} as const;
