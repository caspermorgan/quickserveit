// QuickServe IT - Professional Hindi/English Translation System

export type TranslationKey = keyof typeof translations.en;

export const translations = {
  en: {
    // Brand
    brandName: 'QuickServe IT',
    brandTagline: 'Calm. Confidential. On Time.',
    
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
  },
  hi: {
    // Brand
    brandName: 'QuickServe IT',
    brandTagline: 'शांत। गोपनीय। समय पर।',
    
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
    about: 'हमारे बारे में',
    founder: 'संस्थापक',
    pricing: 'मूल्य',
    contact: 'संपर्क',
    
    // Hero Section - Institutional
    heroInst1: 'शांत डिजिटल कार्यान्वयन',
    heroInst2: 'व्यवस्थित शैक्षणिक सहायता',
    heroInst3: 'मौन प्रगति, स्पष्ट फाइलें',
    heroInst4: 'विश्वसनीय संस्थागत साझेदार',
    heroInstDesc: 'हम अव्यवस्थित डिजिटल कार्यभार को संगठित, गोपनीय और समयबद्ध कार्यान्वयन में बदलते हैं। परीक्षा दस्तावेज़ीकरण से लेकर सरकारी अनुपालन तक, आपकी संस्था शांति की हकदार है।',
    
    // Hero Section - Creator
    heroCreator1: 'सिनेमाई कंटेंट निर्माण',
    heroCreator2: 'रिटेंशन-स्टाइल एडिटिंग',
    heroCreator3: 'विश्व-स्तरीय प्रोडक्शन',
    heroCreatorDesc: 'हम कच्चे फुटेज को रिटेंशन और प्रभाव के लिए डिज़ाइन किए गए प्रीमियम कंटेंट में बदलते हैं। YouTube लॉन्ग-फॉर्म से लेकर सिनेमाई डॉक्यूमेंट्री तक, आपकी कल्पना विश्व-स्तरीय पॉलिश की हकदार है।',
    
    // CTAs
    getStarted: 'शुरू करें',
    startCreating: 'बनाना शुरू करें',
    viewServices: 'सेवाएं देखें',
    seePortfolio: 'पोर्टफोलियो देखें',
    
    // Stats
    schoolsServed: 'स्कूल सेवित',
    projectsDelivered: 'प्रोजेक्ट्स पूर्ण',
    uptimeGuarantee: 'अपटाइम गारंटी',
    documents: 'दस्तावेज़',
    viewsGenerated: 'व्यूज जनरेटेड',
    
    // Contact Form
    contactTitle: 'संपर्क करें',
    contactSubtitle: 'अपने प्रोजेक्ट पर चर्चा करने के लिए तैयार हैं? नीचे फॉर्म भरें।',
    yourName: 'आपका नाम',
    mobileNumber: 'मोबाइल नंबर',
    emailAddress: 'ईमेल पता',
    selectService: 'सेवा चुनें',
    instituteServices: 'संस्थान सेवाएं',
    creatorServices: 'क्रिएटर सेवाएं',
    generalInquiry: 'सामान्य पूछताछ',
    yourMessage: 'आपका संदेश',
    termsAgree: 'मैं नियमों और शर्तों से सहमत हूं',
    sendMessage: 'संदेश भेजें',
    messageSent: 'संदेश तैयार! WhatsApp पर रीडायरेक्ट हो रहा है...',
    
    // Footer
    allRightsReserved: 'सर्वाधिकार सुरक्षित',
    privacyPolicy: 'गोपनीयता नीति',
    termsOfService: 'सेवा की शर्तें',
    
    // Working Hours
    available: 'अभी उपलब्ध',
    offline: 'ऑफलाइन',
  }
} as const;
