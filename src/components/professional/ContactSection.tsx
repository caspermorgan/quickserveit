import { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Send } from 'lucide-react';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import { useMode } from '@/context/ModeContext';

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Please enter a valid email address').max(255, 'Email must be less than 255 characters'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().trim().min(10, 'Message must be at least 10 characters').max(1000, 'Message must be less than 1000 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const WHATSAPP_NUMBER = '919876543210'; // Replace with actual number

const ContactSection = () => {
  const { mode } = useMode();
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = mode === 'institutional'
    ? ['Document Processing', 'Certificate Management', 'Timetable Creation', 'IT Support', 'Custom Projects']
    : ['Video Editing', 'Motion Graphics', 'Color Grading', 'Sound Design', 'Full Package'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form.",
        variant: "destructive",
      });
      return;
    }

    const message = `*New Inquiry from QuickServe Website*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Service:* ${formData.service}
*Mode:* ${mode === 'institutional' ? 'Institutional' : 'Creator'}

*Message:*
${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    toast({
      title: "Opening WhatsApp",
      description: "Your message is ready to send!",
    });

    setFormData({ name: '', email: '', service: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section className="section-spacing bg-secondary/30">
      <div className="container-professional">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {mode === 'institutional'
              ? 'Ready for calm digital execution? Reach out today.'
              : 'Ready to elevate your content? Start the conversation.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <div className="card-professional p-6 md:p-8 animate-fade-in-up">
            <h3 className="text-lg font-heading font-semibold text-foreground mb-6">
              Send an Inquiry
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground trans-smooth focus:outline-none focus:ring-2 focus:ring-mode/30 focus:border-mode ${errors.name ? 'border-destructive' : ''}`}
                />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`w-full bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground trans-smooth focus:outline-none focus:ring-2 focus:ring-mode/30 focus:border-mode ${errors.email ? 'border-destructive' : ''}`}
                />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full bg-background border border-border rounded-md px-4 py-3 text-foreground trans-smooth focus:outline-none focus:ring-2 focus:ring-mode/30 focus:border-mode ${errors.service ? 'border-destructive' : ''} ${!formData.service ? 'text-muted-foreground' : ''}`}
                >
                  <option value="" disabled>Select a service</option>
                  {services.map(service => (
                    <option key={service} value={service} className="text-foreground">
                      {service}
                    </option>
                  ))}
                </select>
                {errors.service && <p className="text-destructive text-xs mt-1">{errors.service}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={4}
                  className={`w-full bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground trans-smooth focus:outline-none focus:ring-2 focus:ring-mode/30 focus:border-mode resize-none ${errors.message ? 'border-destructive' : ''}`}
                />
                {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full inline-flex items-center justify-center gap-3 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                Send via WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <ContactCard
              icon={Phone}
              title="Phone Support"
              value="+91 XXXXX XXXXX"
              subtitle="Mon-Sat, 10AM - 3PM"
            />
            <ContactCard
              icon={Mail}
              title="Email"
              value="hello@quickserve.in"
              subtitle="Response within 24 hours"
            />
            <ContactCard
              icon={Clock}
              title="Working Hours"
              value="9:30 AM - 5:30 PM"
              subtitle="Monday through Saturday"
            />
            <ContactCard
              icon={MapPin}
              title="Location"
              value="Uttar Pradesh, India"
              subtitle="Remote-first operations"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactCardProps {
  icon: React.ElementType;
  title: string;
  value: string;
  subtitle: string;
}

const ContactCard = ({ icon: Icon, title, value, subtitle }: ContactCardProps) => (
  <div className="card-professional p-5 flex items-start gap-4 animate-fade-in-up">
    <div className="w-10 h-10 rounded-lg bg-mode-soft flex items-center justify-center flex-shrink-0">
      <Icon className="w-5 h-5 text-mode" />
    </div>
    <div>
      <div className="text-xs text-muted-foreground mb-1">{title}</div>
      <div className="text-foreground font-medium">{value}</div>
      <div className="text-xs text-muted-foreground">{subtitle}</div>
    </div>
  </div>
);

export default ContactSection;
