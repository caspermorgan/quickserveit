import { useState } from 'react';
import { PhoneIcon, MailIcon, ClockIcon, MapPinIcon, SendIcon } from '@/components/IconSystem';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';

interface ContactSectionProps {
  mode: 'institutional' | 'creator';
}

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Please enter a valid email address').max(255, 'Email must be less than 255 characters'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().trim().min(10, 'Message must be at least 10 characters').max(1000, 'Message must be less than 1000 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const WHATSAPP_NUMBER = '916388224877';

const ContactSection = ({ mode }: ContactSectionProps) => {
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
    ? ['Web Design', 'Web Development', 'SEO & Marketing', 'IT Support', 'Consulting']
    : ['Content Strategy', 'Social Media', 'Video Editing', 'Brand Design', 'Full Package'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on change
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

    // Build WhatsApp message
    const message = `*New Inquiry from QuickServe Website*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Service:* ${formData.service}
*Mode:* ${mode === 'institutional' ? 'Institutional' : 'Creator'}

*Message:*
${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Opening WhatsApp",
      description: "Your message is ready to send!",
    });

    // Reset form
    setFormData({ name: '', email: '', service: '', message: '' });
    setIsSubmitting(false);
  };

  const accentClass = mode === 'institutional' ? 'text-institutional' : 'text-creator';
  const accentBorderClass = mode === 'institutional'
    ? 'focus:border-institutional/50 focus:ring-institutional/20'
    : 'focus:border-creator/50 focus:ring-creator/20';

  return (
    <section id="contact" className="py-20 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`font-display text-2xl md:text-4xl tracking-wide mb-4 ${accentClass}`}>
            Let's Connect
          </h2>
          <p className="text-foreground/50 max-w-lg mx-auto">
            {mode === 'institutional'
              ? 'Ready for calm digital execution? Reach out today.'
              : 'Ready to elevate your content? Start the conversation.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card rounded-2xl p-6 md:p-8 animate-fade-in-up">
            <h3 className={`font-display text-lg mb-6 ${accentClass}`}>Send an Inquiry</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs text-foreground/50 mb-2 tracking-wider">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full bg-background/50 border border-foreground/10 rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/30 transition-all duration-300 focus:outline-none focus:ring-2 ${accentBorderClass} ${errors.name ? 'border-destructive' : ''}`}
                />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs text-foreground/50 mb-2 tracking-wider">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`w-full bg-background/50 border border-foreground/10 rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/30 transition-all duration-300 focus:outline-none focus:ring-2 ${accentBorderClass} ${errors.email ? 'border-destructive' : ''}`}
                />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block text-xs text-foreground/50 mb-2 tracking-wider">
                  SERVICE INTERESTED IN
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full bg-background/50 border border-foreground/10 rounded-lg px-4 py-3 text-foreground transition-all duration-300 focus:outline-none focus:ring-2 ${accentBorderClass} ${errors.service ? 'border-destructive' : ''} ${!formData.service ? 'text-foreground/30' : ''}`}
                >
                  <option value="" disabled>Select a service</option>
                  {services.map(service => (
                    <option key={service} value={service} className="bg-background text-foreground">
                      {service}
                    </option>
                  ))}
                </select>
                {errors.service && <p className="text-destructive text-xs mt-1">{errors.service}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs text-foreground/50 mb-2 tracking-wider">
                  YOUR MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={4}
                  className={`w-full bg-background/50 border border-foreground/10 rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/30 transition-all duration-300 focus:outline-none focus:ring-2 resize-none ${accentBorderClass} ${errors.message ? 'border-destructive' : ''}`}
                />
                {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-premium w-full inline-flex items-center justify-center gap-3 disabled:opacity-50"
              >
                <SendIcon className="w-4 h-4" />
                Send via WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <ContactCard
              icon={PhoneIcon}
              title="Phone Support"
              value="+91 XXXXX XXXXX"
              subtitle="Mon-Sat, 10AM - 3PM"
              mode={mode}
            />
            <ContactCard
              icon={MailIcon}
              title="Email"
              value="hello@quickserve.in"
              subtitle="Response within 24 hours"
              mode={mode}
            />
            <ContactCard
              icon={ClockIcon}
              title="Working Hours"
              value="9:30 AM - 5:30 PM"
              subtitle="Monday through Saturday"
              mode={mode}
            />
            <ContactCard
              icon={MapPinIcon}
              title="Location"
              value="Uttar Pradesh, India"
              subtitle="Remote-first operations"
              mode={mode}
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
  mode: 'institutional' | 'creator';
}

const ContactCard = ({ icon: Icon, title, value, subtitle, mode }: ContactCardProps) => (
  <div className="glass-card rounded-xl p-6 text-center animate-fade-in-up">
    <Icon className={`w-6 h-6 mx-auto mb-3 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
      }`} />
    <div className="text-xs text-foreground/40 tracking-wider mb-2">{title}</div>
    <div className="text-foreground font-medium mb-1">{value}</div>
    <div className="text-xs text-foreground/40">{subtitle}</div>
  </div>
);

export default ContactSection;
