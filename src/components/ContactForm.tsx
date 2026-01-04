import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useMode } from '@/context/ModeContext';
import { Check, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { toast } from 'sonner';

interface FormData {
  name: string;
  mobile: string;
  email: string;
  service: string;
  message: string;
  agreed: boolean;
}

interface FormErrors {
  name?: string;
  mobile?: string;
  email?: string;
  service?: string;
  message?: string;
  agreed?: string;
}

const services = [
  { value: '', label: 'Select a service' },
  { value: 'institute-services', label: 'Institute Services' },
  { value: 'creator-services', label: 'Creator Services' },
  { value: 'general-inquiry', label: 'General Inquiry' },
];

const ContactForm = () => {
  const { mode } = useMode();
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    mobile: '',
    email: '',
    service: '',
    message: '',
    agreed: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  // Context-aware pre-fill based on navigation state
  useEffect(() => {
    const state = location.state as { intent?: string; serviceName?: string; plan?: string } | null;

    if (state?.intent) {
      let prefilledMessage = '';

      switch (state.intent) {
        case 'general_project':
          prefilledMessage = "Hi Casper, I have a vision for a project and I'd like to discuss it...";
          break;
        case 'service':
          if (state.serviceName) {
            prefilledMessage = `I'm interested in your ${state.serviceName} services. I need...`;
          }
          break;
        case 'pricing':
          if (state.plan) {
            prefilledMessage = `I'd like to inquire about the ${state.plan} Package...`;
          }
          break;
        default:
          break;
      }

      if (prefilledMessage) {
        setFormData(prev => ({ ...prev, message: prefilledMessage }));
      }
    }
  }, [location.state]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length > 100) {
      newErrors.name = 'Name must be less than 100 characters';
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^[0-9]{10}$/.test(formData.mobile.replace(/\s/g, ''))) {
      newErrors.mobile = 'Enter a valid 10-digit mobile number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters';
    }

    if (!formData.agreed) {
      newErrors.agreed = 'You must agree to the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const triggerConfetti = () => {
    const duration = 1500; // 1.5 seconds
    const end = Date.now() + duration;

    const colors = mode === 'institutional'
      ? ['#EAB308', '#F59E0B', '#FBBF24'] // Gold colors
      : ['#22D3EE', '#06B6D4', '#0EA5E9']; // Cyan colors

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 },
        colors: colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Get service label for display
      const serviceLabel = services.find(s => s.value === formData.service)?.label || formData.service;

      // Construct formatted WhatsApp message
      const whatsappMessage = `Hello QuickServe IT Team,

I am reaching out to inquire about your services. Here are my details:

👤 *Name:* ${formData.name}
📱 *Mobile:* ${formData.mobile}
📧 *Email:* ${formData.email}
🔧 *Service Required:* ${serviceLabel}

💬 *Message:*
${formData.message}

Looking forward to your response.

Thank you!`;

      // Construct WhatsApp URL
      const whatsappNumber = '916388224877';
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

      // Trigger confetti animation
      triggerConfetti();

      // Show success toast
      toast.success('Redirecting to WhatsApp!', {
        description: "Please send the message to complete your inquiry.",
      });

      // Reset form
      setFormData({
        name: '',
        mobile: '',
        email: '',
        service: '',
        message: '',
        agreed: false,
      });
      setErrors({});

      // Redirect to WhatsApp after a brief delay to allow the user to see the confetti
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 500);
    } catch (error) {
      // Error handling
      console.error('WhatsApp Error:', error);
      toast.error('Something went wrong.', {
        description: 'Please try again or contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, agreed: e.target.checked }));
    if (errors.agreed) {
      setErrors(prev => ({ ...prev, agreed: undefined }));
    }
  };

  const accentColor = mode === 'institutional' ? 'institutional' : 'creator';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-xs font-mono tracking-wider text-foreground/50 mb-2 uppercase">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border backdrop-blur-sm transition-all duration-300 text-sm font-body text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-1 ${errors.name
            ? 'border-destructive/50 focus:border-destructive focus:ring-destructive/30'
            : `border-white/[0.08] focus:border-${accentColor}/50 focus:ring-${accentColor}/20`
            }`}
        />
        {errors.name && <p className="mt-1.5 text-xs text-destructive/80">{errors.name}</p>}
      </div>

      {/* Mobile */}
      <div>
        <label htmlFor="mobile" className="block text-xs font-mono tracking-wider text-foreground/50 mb-2 uppercase">
          Mobile Number
        </label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="10-digit mobile number"
          className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border backdrop-blur-sm transition-all duration-300 text-sm font-body text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-1 ${errors.mobile
            ? 'border-destructive/50 focus:border-destructive focus:ring-destructive/30'
            : `border-white/[0.08] focus:border-${accentColor}/50 focus:ring-${accentColor}/20`
            }`}
        />
        {errors.mobile && <p className="mt-1.5 text-xs text-destructive/80">{errors.mobile}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-xs font-mono tracking-wider text-foreground/50 mb-2 uppercase">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border backdrop-blur-sm transition-all duration-300 text-sm font-body text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-1 ${errors.email
            ? 'border-destructive/50 focus:border-destructive focus:ring-destructive/30'
            : `border-white/[0.08] focus:border-${accentColor}/50 focus:ring-${accentColor}/20`
            }`}
        />
        {errors.email && <p className="mt-1.5 text-xs text-destructive/80">{errors.email}</p>}
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="block text-xs font-mono tracking-wider text-foreground/50 mb-2 uppercase">
          Service
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border backdrop-blur-sm transition-all duration-300 text-sm font-body text-foreground focus:outline-none focus:ring-1 appearance-none cursor-pointer ${errors.service
            ? 'border-destructive/50 focus:border-destructive focus:ring-destructive/30'
            : `border-white/[0.08] focus:border-${accentColor}/50 focus:ring-${accentColor}/20`
            } ${!formData.service ? 'text-foreground/30' : ''}`}
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center' }}
        >
          {services.map(service => (
            <option key={service.value} value={service.value} className="bg-background text-foreground">
              {service.label}
            </option>
          ))}
        </select>
        {errors.service && <p className="mt-1.5 text-xs text-destructive/80">{errors.service}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-mono tracking-wider text-foreground/50 mb-2 uppercase">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your requirements..."
          rows={4}
          className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border backdrop-blur-sm transition-all duration-300 text-sm font-body text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-1 resize-none ${errors.message
            ? 'border-destructive/50 focus:border-destructive focus:ring-destructive/30'
            : `border-white/[0.08] focus:border-${accentColor}/50 focus:ring-${accentColor}/20`
            }`}
        />
        {errors.message && <p className="mt-1.5 text-xs text-destructive/80">{errors.message}</p>}
      </div>

      {/* Terms checkbox */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative mt-0.5">
            <input
              type="checkbox"
              checked={formData.agreed}
              onChange={handleCheckboxChange}
              className="sr-only"
            />
            <div className={`w-5 h-5 rounded-md border transition-all duration-300 flex items-center justify-center ${formData.agreed
              ? mode === 'institutional'
                ? 'bg-institutional border-institutional'
                : 'bg-creator border-creator'
              : errors.agreed
                ? 'border-destructive/50 bg-white/[0.02]'
                : 'border-white/[0.15] bg-white/[0.02] group-hover:border-white/[0.25]'
              }`}>
              {formData.agreed && <Check className="w-3 h-3 text-background" strokeWidth={3} />}
            </div>
          </div>
          <span className="text-xs text-foreground/50 leading-relaxed">
            I agree to the terms & conditions and understand that my inquiry will be sent via WhatsApp.
          </span>
        </label>
        {errors.agreed && <p className="mt-1.5 text-xs text-destructive/80 ml-8">{errors.agreed}</p>}
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-display text-sm tracking-wider uppercase font-medium transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed ${mode === 'institutional'
          ? 'bg-institutional text-background hover:shadow-[0_0_30px_rgba(234,179,8,0.3)]'
          : 'bg-creator text-background hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]'
          }`}
      >
        <Send className="w-4 h-4" />
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {/* Privacy note */}
      <p className="text-center text-[10px] text-foreground/30 font-mono tracking-wide">
        Your information is secure and confidential
      </p>
    </form>
  );
};

export default ContactForm;
