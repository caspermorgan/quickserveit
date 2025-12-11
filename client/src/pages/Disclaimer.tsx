import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Disclaimer() {
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
              Disclaimer
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground text-lg mb-8">
                Last updated: December 2024
              </p>
              
              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">General Disclaimer</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The information and services provided by Quickserve IT are for general informational and professional service purposes. While we strive for accuracy and quality in all our work, we make no warranties or representations about the completeness, accuracy, reliability, or suitability of the information or services.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Professional Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are provided on a best-effort basis. While we maintain high standards of quality and confidentiality, clients are responsible for final verification of all deliverables before official use. This is particularly important for examination materials and official documentation.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Quickserve IT shall not be held liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use of our services, including but not limited to errors in documentation, delays in delivery, or technical issues beyond our control.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Third-Party Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may contain links to third-party websites or services. We are not responsible for the content, privacy practices, or services offered by these third parties. Use of third-party services is at your own risk.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Government Portal Work</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For work involving government portals (UP Scholarship, UDISE+, etc.), we act as technical facilitators. Final submissions and approvals are subject to government portal policies and timelines. We are not responsible for portal downtimes, policy changes, or rejection of applications due to factors outside our control.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Creative Work</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For creative services, final approval rests with the client. Once work is approved and delivered, responsibility for its use transfers to the client. We recommend maintaining backups of all delivered digital assets.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Future Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Any mention of "Coming Soon" or future services is for informational purposes only and does not constitute a commitment. Availability, features, and pricing of future services may change without notice.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Portfolio Samples</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Portfolio items displayed on our website are representative of our work quality. Client names and sensitive data have been redacted for confidentiality. Individual project outcomes may vary based on specific requirements and constraints.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Disclaimer, please contact us at contact@quickserveit.online.
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
