import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  FileText, 
  GraduationCap, 
  Building2, 
  Upload,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Truck,
  FileCheck,
  Users,
  Zap
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ParticleField } from "@/components/ParticleField";
import { ServiceCard, ServiceGrid } from "@/components/ServiceCard";
import { TrustBadges } from "@/components/TrustBadges";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const services = [
  {
    id: "exam-documentation",
    icon: FileText,
    title: "Exam Papers & Documentation",
    description: "Complete examination documentation support with confidential handling and professional formatting.",
    features: [
      "Question Paper Typing (Hindi/English)",
      "Confidential Formatting & Page Setup",
      "Room-wise Seating Sheets",
      "Bundle Sheets & Instruction Pages",
      "Optional Printing & Delivery",
      "Digital PDF Delivery",
    ],
  },
  {
    id: "scholarship",
    icon: GraduationCap,
    title: "UP Scholarship Processing",
    description: "End-to-end scholarship workflow management from forwarding to final submission.",
    features: [
      "Technical Forwarding",
      "Biometric Authentication",
      "DSC Locking (In-Presence)",
      "Bulk List Checking",
      "Error Fixing & Normalization",
      "Final Report Submission",
    ],
  },
  {
    id: "udise",
    icon: Building2,
    title: "UDISE+ Data Management",
    description: "Comprehensive student data management and institutional reporting for government compliance.",
    features: [
      "Student Promotion",
      "New Admission (SDMS)",
      "Teacher Profile Updates",
      "Aadhaar Validation",
      "School Report Card Download",
      "Final Certification Handover",
    ],
  },
  {
    id: "government-projects",
    icon: Upload,
    title: "Government & Special Projects",
    description: "Rapid execution of government initiatives and special institutional projects.",
    features: [
      "Student/Teacher Project Uploads",
      "Bulk Awareness Participation",
      "Exam Centre Mapping Data",
      "Science/Exhibition Registration",
      "Rapid Deadline Completion",
      "Final Output PDF/Screenshots",
    ],
  },
];

const workflowSteps = [
  { icon: Upload, title: "Share Content", description: "Provide handwritten notes, photos, or digital files" },
  { icon: FileCheck, title: "Academic Formatting", description: "Clean spacing, alignment, and proofreading" },
  { icon: CheckCircle, title: "Preview & Corrections", description: "Verify and request changes calmly" },
  { icon: FileText, title: "Final Digital Output", description: "Print-ready PDF/DOC delivered digitally" },
  { icon: Shield, title: "Confidential Printing", description: "Optional printing + class-wise bundling" },
  { icon: Truck, title: "Secure Delivery", description: "Safe return of all original materials" },
];

export default function InstituteServices() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <ParticleField mode="corporate" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none z-10" />
          
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs font-medium text-primary uppercase tracking-wider"
            >
              For Educational Institutions
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mt-4 mb-6"
            >
              Institute Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Streamline your examination process with accuracy, confidentiality, and calm execution.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <TrustBadges variant="compact" maxItems={4} className="justify-center" />
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
                  <Card className="p-8 md:p-10 border-border hover:border-primary/30 transition-colors">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="flex-1">
                        <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center mb-6">
                          <service.icon className="w-7 h-7 text-primary" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                          {service.title}
                        </h2>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        <Link href="/contact">
                          <Button className="gold-glow" data-testid={`button-service-${service.id}`}>
                            Request This Service
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                      
                      <div className="lg:w-80">
                        <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                          What's Included
                        </h3>
                        <ul className="space-y-3">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
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
        
        <section className="py-20 md:py-32 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                How We Work
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A structured 6-step workflow ensures quality, accuracy, and complete confidentiality.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <Card className="p-6 h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-primary">{index + 1}</span>
                      </div>
                      <div>
                        <div className="w-8 h-8 rounded-md bg-muted flex items-center justify-center mb-3">
                          <step.icon className="w-4 h-4 text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full border-gold">
                  <div className="flex items-center gap-3 mb-6">
                    <Users className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-serif font-bold text-foreground">
                      If You Have IT Staff
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    We don't replace your team. We reduce peak-load stress during exam seasons.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Your Team Handles</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>Lab Work</li>
                        <li>Teacher Support</li>
                        <li>Technical Issues</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">We Handle</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>Exam Documentation</li>
                        <li>Urgent Corrections</li>
                        <li>Confidential Printing</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full border-gold">
                  <div className="flex items-center gap-3 mb-6">
                    <Zap className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-serif font-bold text-foreground">
                      If You Don't Have IT Staff
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    We serve as a contract-based digital partner with no permanent costs.
                  </p>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      No Salary Burden
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      No HR Headaches
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      No Infrastructure Costs
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Pay Only When Required
                    </li>
                  </ul>
                </Card>
              </motion.div>
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
                Ready to Streamline Your Institution?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                You manage academics — we manage documentation stress.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="gold-glow" data-testid="button-cta-institute">
                    Contact Documentation Partner
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-gold"
                  onClick={() => window.open("https://wa.me/919876543210", "_blank")}
                >
                  WhatsApp Support
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
