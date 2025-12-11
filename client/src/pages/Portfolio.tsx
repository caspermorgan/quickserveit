import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  Lock, 
  Play, 
  ExternalLink,
  Film,
  Palette,
  Building2,
  ArrowRight,
  Eye
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ParticleField } from "@/components/ParticleField";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const portfolioItems = [
  {
    id: "project-1",
    title: "Educational Documentary Series",
    category: "Video Production",
    icon: Film,
    description: "6-part documentary series for an educational institution covering campus life and academic achievements.",
    tags: ["Documentary", "4K", "Color Grading"],
    status: "completed",
  },
  {
    id: "project-2",
    title: "School Branding System",
    category: "Branding & Design",
    icon: Palette,
    description: "Complete brand identity system including logo, stationery, signage, and digital assets.",
    tags: ["Logo", "Brand Identity", "Print"],
    status: "completed",
  },
  {
    id: "project-3",
    title: "YouTube Channel Transformation",
    category: "Content Strategy",
    icon: Play,
    description: "Channel growth from 2K to 50K subscribers with optimized thumbnails and retention editing.",
    tags: ["Growth", "Thumbnails", "SEO"],
    status: "completed",
  },
  {
    id: "project-4",
    title: "Exam Documentation System",
    category: "Institutional Support",
    icon: Building2,
    description: "Confidential exam paper processing for 12 schools covering 3 academic sessions.",
    tags: ["Confidential", "Bulk Processing", "Delivery"],
    status: "completed",
  },
  {
    id: "project-5",
    title: "Motion Graphics Package",
    category: "Motion Graphics",
    icon: Film,
    description: "Custom intro, lower thirds, transitions, and end screens for educational content creator.",
    tags: ["Animation", "After Effects", "Broadcast"],
    status: "completed",
  },
  {
    id: "project-6",
    title: "UDISE+ Migration Project",
    category: "Data Management",
    icon: Building2,
    description: "Complete student data migration and validation for district-level educational authority.",
    tags: ["Data", "Compliance", "Bulk"],
    status: "completed",
  },
];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "45+", label: "Institutions Served" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "3", label: "Years of Excellence" },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <ParticleField mode="cinematic" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none z-10" />
          
          <div className="absolute inset-0 pointer-events-none z-5">
            <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-[hsl(var(--ai-blue-rim))]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border mb-6"
            >
              <Lock className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Classified Work Archive</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-foreground mt-4 mb-6"
            >
              Portfolio <span className="text-gradient-gold">Vault</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              A curated collection of our finest work. Client names and sensitive data have been redacted to protect confidentiality.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
        
        <section className="py-20 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card 
                    className="group h-full overflow-hidden border-border hover:border-[hsl(var(--ai-blue-rim))]/30 transition-all"
                    data-testid={`card-portfolio-${item.id}`}
                  >
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--ai-blue-rim))]/20 to-primary/10" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <item.icon className="w-12 h-12 text-muted-foreground/50" />
                      </div>
                      <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[hsl(var(--ai-blue-rim))] flex items-center justify-center">
                            <Eye className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {item.category}
                        </Badge>
                      </div>
                      
                      <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                        {item.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-4">
                        {item.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 md:py-32 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Lock className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Confidentiality Notice
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Many of our projects involve confidential institutional work. Client names, specific data, and sensitive details have been redacted. For detailed case studies or references, please contact us directly.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="gold-glow" data-testid="button-portfolio-request">
                    Request Case Studies
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-gold"
                  onClick={() => window.open("https://wa.me/919876543210", "_blank")}
                >
                  Discuss Your Project
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
