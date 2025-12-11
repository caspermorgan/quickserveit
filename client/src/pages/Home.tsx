import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  FileText, 
  GraduationCap, 
  Film, 
  Palette, 
  ArrowRight, 
  Building2,
  Sparkles
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ServiceCard, ServiceGrid } from "@/components/ServiceCard";
import { TrustBadges } from "@/components/TrustBadges";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const instituteServices = [
  {
    icon: FileText,
    title: "Exam Documentation",
    description: "Confidential question paper typing, formatting, and secure delivery for educational institutions.",
    features: ["Hindi/English typing", "Confidential printing", "Secure delivery"],
  },
  {
    icon: GraduationCap,
    title: "UP Scholarship Processing",
    description: "Complete scholarship workflow management from forwarding to final submission.",
    features: ["Technical forwarding", "Biometric authentication", "DSC locking"],
  },
  {
    icon: Building2,
    title: "UDISE+ Management",
    description: "Comprehensive student data management and institutional reporting.",
    features: ["Student promotion", "New admissions", "Report generation"],
  },
];

const creativeServices = [
  {
    icon: Film,
    title: "Video Production",
    description: "Cinematic editing for YouTube, Reels, and educational content with professional polish.",
    features: ["Long-form editing", "Retention optimization", "Sound mastering"],
  },
  {
    icon: Palette,
    title: "Branding & Design",
    description: "CTR-optimized thumbnails, channel art, logos, and complete brand identity systems.",
    features: ["Thumbnail design", "Logo creation", "Brand systems"],
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    description: "Logo animations, lower thirds, visual explainers, and product showcase graphics.",
    features: ["Intro animations", "Green screen", "Title sequences"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Hero mode="corporate" />
        
        <section className="py-20 md:py-32 bg-background" id="institute-services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                For Institutions
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
                Institute Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Streamline your institutional operations with precision, confidentiality, and professional execution.
              </p>
            </motion.div>
            
            <ServiceGrid>
              {instituteServices.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  mode="corporate"
                  delay={index * 0.1}
                />
              ))}
            </ServiceGrid>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-10"
            >
              <Link href="/institute-services">
                <Button variant="outline" className="border-gold">
                  View All Institute Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
        
        <section className="py-20 md:py-32 bg-card border-y border-border" id="creative-studio">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="text-xs font-medium text-[hsl(var(--ai-blue-rim))] uppercase tracking-wider">
                For Creators
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
                Creative Studio
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Transform your creative vision into cinematic reality with our production expertise.
              </p>
            </motion.div>
            
            <ServiceGrid>
              {creativeServices.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  mode="cinematic"
                  delay={index * 0.1}
                />
              ))}
            </ServiceGrid>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-10"
            >
              <Link href="/creative-studio">
                <Button className="bg-[hsl(var(--ai-blue-rim))] hover:bg-[hsl(var(--ai-blue-rim))]/90 text-white">
                  Explore Creative Studio
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
        
        <section className="py-20 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Why Institutions Trust Us
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Built for serious organizations that demand confidentiality, precision, and reliable execution.
              </p>
            </motion.div>
            
            <TrustBadges variant="full" showDescription className="max-w-4xl mx-auto" />
          </div>
        </section>
        
        <section className="py-20 md:py-32 bg-card border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8 md:p-12 border-gold relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none" />
              
              <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-center lg:text-left">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">
                    Ready to Experience Premium Service?
                  </h2>
                  <p className="text-muted-foreground max-w-xl">
                    Whether you need institutional support or creative production, we deliver excellence with confidentiality.
                  </p>
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="gold-glow" data-testid="button-cta-contact">
                      Start a Project
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/pricing">
                    <Button size="lg" variant="outline" className="border-gold" data-testid="button-cta-pricing">
                      View Pricing
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
