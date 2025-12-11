import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Privacy() {
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
              Privacy Policy
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground text-lg mb-8">
                Last updated: December 2024
              </p>
              
              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect information that you provide directly to us:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Contact information (name, email, phone number)</li>
                  <li>Organization/institution details</li>
                  <li>Project-related documents and materials</li>
                  <li>Communication records</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use collected information to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide and improve our services</li>
                  <li>Communicate about projects and deliveries</li>
                  <li>Process payments and maintain records</li>
                  <li>Send relevant updates and information</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">3. Confidential Document Handling</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For institutional work involving confidential materials (examination papers, student data, etc.), we maintain the highest level of security. Documents are processed in secure environments, accessed only by authorized personnel, and deleted or returned upon project completion as agreed.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">4. Information Sharing</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell, trade, or share your personal information with third parties except:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and safety</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">5. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. This includes secure communication channels, encrypted storage, and access controls.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">6. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your information only as long as necessary to provide services and fulfill legal obligations. For confidential institutional work, materials are deleted or returned immediately upon completion unless otherwise agreed.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">7. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your data</li>
                  <li>Withdraw consent for data processing</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">8. Cookies and Tracking</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may use minimal cookies for essential functionality. We do not use tracking cookies for advertising purposes.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">9. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy periodically. Changes will be posted on this page with an updated revision date.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">10. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about this Privacy Policy or our data practices, contact us at contact@quickserveit.online or through our secure WhatsApp channel.
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
