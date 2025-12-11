import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  Check, 
  ArrowRight,
  Zap,
  Building2,
  Crown,
  MessageCircle
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ParticleField } from "@/components/ParticleField";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const pricingTiers = [
  {
    name: "Per Task",
    description: "For occasional needs and specific projects",
    icon: Zap,
    pricing: "Custom Quote",
    pricingNote: "Based on scope & complexity",
    features: [
      "Single project execution",
      "Defined deliverables",
      "Standard turnaround",
      "Digital delivery",
      "One revision cycle",
    ],
    cta: "Get Quote",
    popular: false,
  },
  {
    name: "Monthly Retainer",
    description: "For regular, ongoing support needs",
    icon: Building2,
    pricing: "Custom Monthly",
    pricingNote: "Tailored to your volume",
    features: [
      "Dedicated support hours",
      "Priority processing",
      "Multiple project handling",
      "WhatsApp priority channel",
      "Flexible task allocation",
      "Monthly reporting",
    ],
    cta: "Discuss Needs",
    popular: true,
  },
  {
    name: "Institutional Partnership",
    description: "For schools & organizations with ongoing needs",
    icon: Crown,
    pricing: "Annual Contract",
    pricingNote: "Premium institutional rates",
    features: [
      "All Monthly Retainer benefits",
      "On-campus support visits",
      "Emergency response guarantee",
      "Dedicated account manager",
      "Custom workflow integration",
      "Confidential document handling",
      "Archive & backup services",
    ],
    cta: "Request Partnership",
    popular: false,
  },
];

const serviceCategories = [
  {
    title: "Institute Services",
    services: [
      { name: "Question Paper Typing", note: "Per paper, complexity-based" },
      { name: "Exam Documentation Package", note: "Bundled pricing available" },
      { name: "UP Scholarship Processing", note: "Per student or bulk rates" },
      { name: "UDISE+ Data Entry", note: "Based on volume" },
      { name: "Government Project Support", note: "Project-based quote" },
    ],
  },
  {
    title: "Creative Services",
    services: [
      { name: "Video Editing (Long-form)", note: "Per minute of final output" },
      { name: "Reels/Shorts Editing", note: "Per video" },
      { name: "Thumbnail Design", note: "Per piece or package" },
      { name: "Logo Design", note: "Includes revisions" },
      { name: "Brand Identity Package", note: "Comprehensive system" },
      { name: "Motion Graphics", note: "Based on complexity" },
    ],
  },
];

const policies = [
  {
    title: "Urgent Work Premium",
    description: "Priority processing available with premium charges based on deadline, complexity, and effort required.",
  },
  {
    title: "On-Site Visit Charges",
    description: "Physical visits for on-campus support include travel and time charges based on location.",
  },
  {
    title: "Confidentiality Guarantee",
    description: "All institutional work is handled with strict confidentiality. No additional charge for secure handling.",
  },
];

export default function Pricing() {
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
              Transparent & Fair
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mt-4 mb-6"
            >
              Pricing & Plans
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Premium service at fair, predictable rates. No hidden charges, no surprises.
            </motion.p>
          </div>
        </section>
        
        <section className="py-20 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card 
                    className={cn(
                      "h-full p-8 relative overflow-hidden",
                      tier.popular && "border-gold gold-glow"
                    )}
                    data-testid={`card-pricing-${tier.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {tier.popular && (
                      <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                        Most Popular
                      </Badge>
                    )}
                    
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-6">
                      <tier.icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      {tier.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="text-2xl font-bold text-foreground">{tier.pricing}</div>
                      <div className="text-xs text-muted-foreground">{tier.pricingNote}</div>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link href="/contact">
                      <Button 
                        className={cn(
                          "w-full",
                          tier.popular && "gold-glow"
                        )}
                        variant={tier.popular ? "default" : "outline"}
                        data-testid={`button-pricing-${tier.name.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {tier.cta}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </Card>
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
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Service Categories
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Pricing depends on workload, formatting complexity, urgency, and delivery requirements.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-8 h-full">
                    <h3 className="text-xl font-serif font-bold text-foreground mb-6">
                      {category.title}
                    </h3>
                    <ul className="space-y-4">
                      {category.services.map((service) => (
                        <li key={service.name} className="flex items-start justify-between gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                          <span className="text-foreground">{service.name}</span>
                          <span className="text-sm text-muted-foreground text-right">{service.note}</span>
                        </li>
                      ))}
                    </ul>
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
                Policies & Terms
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {policies.map((policy, index) => (
                <motion.div
                  key={policy.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full border-gold">
                    <h3 className="font-semibold text-foreground mb-2">{policy.title}</h3>
                    <p className="text-sm text-muted-foreground">{policy.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 md:py-32 bg-card border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Get a Custom Estimate
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Every project is unique. Contact us for a detailed quote tailored to your specific requirements.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="gold-glow" data-testid="button-pricing-contact">
                    Request Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-gold"
                  onClick={() => window.open("https://wa.me/919876543210", "_blank")}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
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
