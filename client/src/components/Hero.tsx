import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticleField } from "@/components/ParticleField";
import { AnimatedHeading } from "@/components/TypewriterText";
import { TrustBadges } from "@/components/TrustBadges";
import { InsightBox } from "@/components/InsightBox";
import { getTimeGreeting, getTimeMessage } from "@/lib/utils";

interface HeroProps {
  mode?: "corporate" | "cinematic";
}

export function Hero({ mode = "corporate" }: HeroProps) {
  const greeting = getTimeGreeting();
  const message = getTimeMessage();

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
      data-testid="hero-section"
    >
      <ParticleField mode={mode} className="z-0" />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none z-10" />
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-4xl">
          <AnimatedHeading
            greeting={`${greeting}. ${message}`}
            headline="Engineering Digital Dominance"
            subheadline="A private technology & cinematic production operation for serious institutions and elite creators. We remove risk and deliver excellence."
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.5 }}
            className="flex flex-wrap items-center gap-4 mt-8"
          >
            <Link href="/contact">
              <Button 
                size="lg" 
                className="gold-glow"
                data-testid="button-hero-get-started"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            
            <Link href="/institute-services">
              <Button 
                variant="outline" 
                size="lg"
                className="border-gold"
                data-testid="button-hero-services"
              >
                Our Services
              </Button>
            </Link>
            
            <Button
              variant="ghost"
              size="lg"
              className="text-muted-foreground"
              onClick={() => window.open("https://wa.me/919876543210", "_blank")}
              data-testid="button-hero-whatsapp"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Secure WhatsApp
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 3 }}
            className="mt-12"
          >
            <TrustBadges variant="compact" maxItems={4} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.5 }}
            className="mt-12 max-w-xl"
          >
            <InsightBox />
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
