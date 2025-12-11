import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  Target, 
  Shield, 
  Zap,
  Users,
  ArrowRight,
  Award,
  Heart,
  Lightbulb,
  TrendingUp
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ParticleField } from "@/components/ParticleField";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const values = [
  {
    icon: Shield,
    title: "Confidentiality First",
    description: "Every document, every project is handled with institutional-grade security and discretion.",
  },
  {
    icon: Zap,
    title: "Precision Execution",
    description: "We deliver exactly what we promise, when we promise. No excuses, no compromises.",
  },
  {
    icon: Users,
    title: "Partnership Mindset",
    description: "We complement your team, never compete. Your success is our success.",
  },
  {
    icon: Heart,
    title: "Genuine Care",
    description: "We understand the pressure you face. Our calm approach reduces your stress.",
  },
];

const milestones = [
  { year: "2022", event: "Founded with a vision to serve educational institutions" },
  { year: "2022", event: "First school partnership established" },
  { year: "2023", event: "Creative Studio division launched" },
  { year: "2023", event: "50+ institutions served milestone" },
  { year: "2024", event: "Expanded to full institutional support services" },
  { year: "2024", event: "150+ successful project deliveries" },
];

const futureVision = [
  {
    icon: Lightbulb,
    title: "AI Integration",
    description: "Smart document structuring and automated formatting tools for faster processing.",
  },
  {
    icon: TrendingUp,
    title: "Physical Studio",
    description: "On-ground creator hub with professional equipment and workspace.",
  },
  {
    icon: Award,
    title: "Regional Expansion",
    description: "Serving more districts and states with consistent quality.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          <ParticleField mode="corporate" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none z-10" />
          
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs font-medium text-primary uppercase tracking-wider"
            >
              Our Story
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mt-4 mb-6"
            >
              About Quickserve IT
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Built for institutions that demand excellence. Crafted for creators who refuse to compromise.
            </motion.p>
          </div>
        </section>
        
        <section className="py-20 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                  The Genesis
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Quickserve IT was born from a simple observation: educational institutions across Uttar Pradesh were struggling with digital documentation during examination seasons. Teachers were overwhelmed, principals were stressed, and critical work was being rushed.
                  </p>
                  <p>
                    We stepped in as a quiet partner — handling the documentation workload so institutions could focus on what they do best: educating students. What started as exam paper typing evolved into comprehensive institutional support.
                  </p>
                  <p>
                    The Creative Studio was a natural extension. The same precision and confidentiality we brought to institutional work translated perfectly into content creation for creators who needed reliable, professional production support.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 border-gold relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none" />
                  <div className="relative">
                    <Target className="w-12 h-12 text-primary mb-6" />
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                      Our Mission
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To be the invisible backbone of institutional success — handling critical documentation and creative work with such precision and confidentiality that our clients can focus entirely on their core mission.
                    </p>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
        
        <section className="py-20 md:py-32 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide every project we undertake.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full text-center">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Our Journey
              </h2>
            </motion.div>
            
            <div className="max-w-2xl mx-auto">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-6 mb-8 last:mb-0"
                >
                  <div className="w-16 flex-shrink-0 text-right">
                    <span className="text-sm font-medium text-primary">{milestone.year}</span>
                  </div>
                  <div className="relative flex-1 pb-8 border-l border-border pl-6">
                    <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-primary" />
                    <p className="text-muted-foreground">{milestone.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 md:py-32 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                Looking Ahead
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
                Future Roadmap
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Where we're headed next. Innovation meets execution.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {futureVision.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full border-dashed border-gold">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
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
                Ready to Work Together?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Whether you're an institution needing reliable support or a creator seeking professional production, we're here to help.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="gold-glow" data-testid="button-about-contact">
                    Start a Conversation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button size="lg" variant="outline" className="border-gold">
                    View Our Work
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
