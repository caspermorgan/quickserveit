import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link href="/">
              <Button variant="ghost" size="sm" className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">
              Terms & Conditions
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground text-lg mb-8">
                Last updated: December 2024
              </p>
              
              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">1. Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using Quickserve IT services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">2. Services Description</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Quickserve IT provides:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Institutional documentation services (exam papers, scholarship processing, UDISE+ management)</li>
                  <li>Creative production services (video editing, branding, motion graphics)</li>
                  <li>Technical support and consulting for educational institutions</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">3. Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain strict confidentiality for all institutional work. Client data, examination materials, and sensitive documents are handled with the highest level of security. We do not share, sell, or distribute client information to third parties.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">4. Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Payment terms are agreed upon before project commencement:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Per-task services: Payment upon delivery or as agreed</li>
                  <li>Retainer services: Monthly advance payment</li>
                  <li>Institutional partnerships: As per contract terms</li>
                  <li>Urgent work: Premium charges apply, payable immediately</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">5. Delivery & Revisions</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Delivery timelines are communicated at project initiation. Standard projects include one revision cycle. Additional revisions may incur extra charges. Urgent work is prioritized based on availability and incurs premium pricing.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">6. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Upon full payment, clients receive full rights to deliverables. Quickserve IT retains the right to showcase work in portfolios with client permission. For institutional work, no public disclosure is made without explicit consent.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">7. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Quickserve IT shall not be liable for any indirect, incidental, or consequential damages arising from service use. Our liability is limited to the amount paid for the specific service in question.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">8. Cancellation Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Projects may be cancelled with notice. Charges apply for work already completed. Retainer services require 15-day notice for cancellation.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">9. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. Continued use of services after changes constitutes acceptance of new terms.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">10. Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms, contact us at contact@quickserveit.online or through our secure WhatsApp channel.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
