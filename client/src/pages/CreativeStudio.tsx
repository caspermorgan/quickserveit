import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  Film, 
  Palette, 
  Sparkles, 
  Megaphone,
  ArrowRight,
  CheckCircle,
  Play,
  Layers,
  Wand2,
  TrendingUp
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ParticleField } from "@/components/ParticleField";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const services = [
  {
    id: "video-editing",
    icon: Film,
    title: "Video Editing & Post Production",
    description: "Cinematic editing that captivates audiences and drives engagement across all platforms.",
    features: [
      "YouTube long-form editing",
      "Reels/Shorts cutting & retention editing",
      "Educational content editing",
      "Documentary-style storytelling",
      "Sound mastering",
      "Cinematic transitions & pacing",
    ],
  },
  {
    id: "branding",
    icon: Palette,
    title: "Branding & Graphic Design",
    description: "Visual identity systems that command attention and build lasting brand recognition.",
    features: [
      "Thumbnails (CTR optimized)",
      "Program & event posters",
      "Instagram creatives",
      "Channel art & banners",
      "Business logos & cards",
      "Brand identity systems",
    ],
  },
  {
    id: "motion-graphics",
    icon: Sparkles,
    title: "Motion Graphics & VFX",
    description: "Dynamic visual elements that elevate your content to professional broadcast quality.",
    features: [
      "Logo intro animations",
      "Lower thirds & overlays",
      "Green screen compositing",
      "Visual explainers",
      "Title animations",
      "Product showcase graphics",
    ],
  },
  {
    id: "content-strategy",
    icon: Megaphone,
    title: "Content Strategy & Channel Support",
    description: "Strategic guidance to grow your audience and maximize content performance.",
    features: [
      "Scriptwriting (hook-body-close)",
      "SEO keywords & metadata",
      "Publishing optimization",
      "Content calendar setup",
      "Audience retention review",
      "Channel growth management",
    ],
  },
];

const capabilities = [
  { icon: Play, label: "4K Video Editing" },
  { icon: Layers, label: "Multi-Layer Compositing" },
  { icon: Wand2, label: "Color Grading" },
  { icon: TrendingUp, label: "Retention Optimization" },
];

export default function CreativeStudio() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <ParticleField mode="cinematic" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none z-10" />
          
          <div className="absolute inset-0 pointer-events-none z-5">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[hsl(var(--ai-blue-rim))]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--ai-blue-rim))]/10 border border-[hsl(var(--ai-blue-rim))]/30 mb-6"
            >
              <Sparkles className="w-4 h-4 text-[hsl(var(--ai-blue-rim))]" />
              <span className="text-sm text-[hsl(var(--ai-blue-rim))]">Cinematic Production Studio</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-foreground mt-4 mb-6"
            >
              <span className="text-gradient-gold">Creative</span> Studio
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Transform your creative vision into cinematic reality. Professional production for creators who refuse to compromise.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-[hsl(var(--ai-blue-rim))] hover:bg-[hsl(var(--ai-blue-rim))]/90 text-white ai-blue-glow"
                  data-testid="button-studio-initiate"
                >
                  Initiate Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="border-[hsl(var(--ai-blue-rim))]/50">
                  View Portfolio
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-6 mt-12"
            >
              {capabilities.map((cap, index) => (
                <div key={cap.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <cap.icon className="w-4 h-4 text-[hsl(var(--ai-blue-rim))]" />
                  <span>{cap.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
        
        <section className="py-20 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="scroll-mt-24"
                >
                  <Card className="p-8 md:p-10 border-border hover:border-[hsl(var(--ai-blue-rim))]/30 transition-all hover:ai-blue-glow">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="flex-1">
                        <div className="w-14 h-14 rounded-md bg-[hsl(var(--ai-blue-rim))]/10 flex items-center justify-center mb-6">
                          <service.icon className="w-7 h-7 text-[hsl(var(--ai-blue-rim))]" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                          {service.title}
                        </h2>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        <Link href="/contact">
                          <Button 
                            className="bg-[hsl(var(--ai-blue-rim))] hover:bg-[hsl(var(--ai-blue-rim))]/90 text-white"
                            data-testid={`button-service-${service.id}`}
                          >
                            Open Studio Channel
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                      
                      <div className="lg:w-80">
                        <h3 className="text-sm font-medium text-[hsl(var(--ai-blue-rim))] uppercase tracking-wider mb-4">
                          Deliverables
                        </h3>
                        <ul className="space-y-3">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-[hsl(var(--ai-blue-rim))] mt-0.5 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 md:py-32 bg-card border-y border-border relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(var(--ai-blue-rim))]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-xs font-medium text-[hsl(var(--ai-blue-rim))] uppercase tracking-wider">
                Coming Soon
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
                Future Tech Advertisements
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Next-generation visual advertising using AI, 2D animation, and 3D rendering.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "AI Commercial Visual Creatives",
                "2D Motion Explainer Ads",
                "3D Style Product Visuals",
                "Political Micro-Campaign Visuals",
                "Event/Festival Digital Ads",
                "Physical Creator Hub Space",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 border-dashed border-[hsl(var(--ai-blue-rim))]/30 bg-[hsl(var(--ai-blue-rim))]/5">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[hsl(var(--ai-blue-rim))] animate-pulse" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Ready to Create Something Exceptional?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Open the studio channel and let's bring your creative vision to life.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    className="bg-[hsl(var(--ai-blue-rim))] hover:bg-[hsl(var(--ai-blue-rim))]/90 text-white ai-blue-glow"
                    data-testid="button-cta-studio"
                  >
                    Open Studio Channel
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button size="lg" variant="outline" className="border-[hsl(var(--ai-blue-rim))]/50">
                    Access Portfolio Vault
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
