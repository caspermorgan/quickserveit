import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Clock,
  Shield,
  Send,
  Upload
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ParticleField } from "@/components/ParticleField";
import { TrustBadges } from "@/components/TrustBadges";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  organization: z.string().optional(),
  serviceType: z.string().min(1, "Please select a service type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@quickserveit.online",
    href: "mailto:contact@quickserveit.online",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Secure Channel",
    href: "https://wa.me/919876543210",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Uttar Pradesh, India",
    href: null,
  },
];

const serviceTypes = [
  { value: "exam-documentation", label: "Exam Documentation" },
  { value: "scholarship-processing", label: "UP Scholarship Processing" },
  { value: "udise-management", label: "UDISE+ Management" },
  { value: "government-project", label: "Government Project" },
  { value: "video-editing", label: "Video Editing" },
  { value: "branding-design", label: "Branding & Design" },
  { value: "motion-graphics", label: "Motion Graphics" },
  { value: "content-strategy", label: "Content Strategy" },
  { value: "other", label: "Other / Custom" },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      organization: "",
      serviceType: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent Successfully",
        description: "We'll get back to you within 24 hours.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
          <ParticleField mode="corporate" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none z-10" />
          
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs font-medium text-primary uppercase tracking-wider"
            >
              Get In Touch
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mt-4 mb-6"
            >
              Contact & Support
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Ready to start a project? Have questions? We're here to help.
            </motion.p>
          </div>
        </section>
        
        <section className="py-20 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <Card className="p-8 border-gold">
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                    Send Us a Message
                  </h2>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name *</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Your name" 
                                  {...field}
                                  data-testid="input-name"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email *</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="your@email.com" 
                                  type="email"
                                  {...field}
                                  data-testid="input-email"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="+91 XXXXX XXXXX" 
                                  {...field}
                                  data-testid="input-phone"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="organization"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Organization / School</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Your institution name" 
                                  {...field}
                                  data-testid="input-organization"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="serviceType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service Type *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-service-type">
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {serviceTypes.map((type) => (
                                  <SelectItem key={type.value} value={type.value}>
                                    {type.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message *</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Describe your project or inquiry..."
                                className="min-h-32"
                                {...field}
                                data-testid="textarea-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        size="lg"
                        className="gold-glow"
                        disabled={isSubmitting}
                        data-testid="button-submit-contact"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                        <Send className="w-4 h-4 ml-2" />
                      </Button>
                    </form>
                  </Form>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <Card className="p-6 border-gold">
                  <h3 className="font-semibold text-foreground mb-4">Contact Information</h3>
                  <ul className="space-y-4">
                    {contactInfo.map((item) => (
                      <li key={item.label}>
                        {item.href ? (
                          <a 
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors"
                            data-testid={`link-contact-${item.label.toLowerCase()}`}
                          >
                            <item.icon className="w-5 h-5 text-primary mt-0.5" />
                            <div>
                              <div className="text-xs text-muted-foreground">{item.label}</div>
                              <div className="text-foreground">{item.value}</div>
                            </div>
                          </a>
                        ) : (
                          <div className="flex items-start gap-3 text-muted-foreground">
                            <item.icon className="w-5 h-5 text-primary mt-0.5" />
                            <div>
                              <div className="text-xs text-muted-foreground">{item.label}</div>
                              <div className="text-foreground">{item.value}</div>
                            </div>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </Card>
                
                <Card className="p-6 border-gold">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Response Time</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    We typically respond within 24 hours. For urgent matters, use WhatsApp for faster response.
                  </p>
                </Card>
                
                <Card className="p-6 bg-primary/5 border-gold">
                  <div className="flex items-center gap-3 mb-4">
                    <Upload className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Client Upload Vault</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    For confidential document uploads, use our secure WhatsApp channel.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-gold"
                    onClick={() => window.open("https://wa.me/919876543210", "_blank")}
                    data-testid="button-upload-vault"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Open Secure Channel
                  </Button>
                </Card>
                
                <Card className="p-6 border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Confidentiality</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    All communications are treated with strict confidentiality. Your information is safe with us.
                  </p>
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
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8">
                Why Clients Trust Us
              </h2>
              <TrustBadges variant="full" showDescription className="max-w-4xl mx-auto" />
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
