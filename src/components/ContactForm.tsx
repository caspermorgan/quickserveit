import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useMode } from '@/context/ModeContext';
import { useTranslation } from '@/hooks/useTranslation';
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

const ContactForm = () => {
  const { mode } = useMode();
  const location = useLocation();
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    mobile: '',
    email: '',
    service: '',
    message: '',
    agreed: false,
  });
  const [formErrors, setErrors] = useState<FormErrors>({});

  // Service options using translations
  const services = [
    { value: '', label: t('selectAService') },
    { value: 'institute-services', label: t('instituteServices') },
    { value: 'creator-services', label: t('creatorServices') },
    { value: 'general-inquiry', label: t('generalInquiry') },
  ];

  // Context-aware pre-fill based on navigation state
  useEffect(() => {
    const state = location.state as { intent?: string; serviceName?: string; plan?: string } | null;

    if (state?.intent) {
      let prefilledMessage = '';

      switch (state.intent) {
        case 'general_project':
          prefilledMessage = t('generalProjectMessage');
          break;
        case 'service':
          if (state.serviceName) {
            prefilledMessage = `${t('serviceInquiryPrefix')} ${state.serviceName} ${t('serviceInquirySuffix')}`;
          }
          break;
        case 'pricing':
          if (state.plan) {
            prefilledMessage = `${t('pricingInquiryPrefix')} ${state.plan} ${t('pricingInquirySuffix')}`;
          }
          break;
        default:
          break;
      }

      if (prefilledMessage) {
        setFormData(prev => ({ ...prev, message: prefilledMessage }));
      }
    }
  }, [location.state, t]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t('nameRequired');
    } else if (formData.name.length > 100) {
      newErrors.name = t('nameTooLong');
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = t('mobileRequired');
    } else if (!/^[0-9]{10}$/.test(formData.mobile.replace(/\s/g, ''))) {
      newErrors.mobile = t('mobileInvalid');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('emailInvalid');
    }

    if (!formData.service) {
      newErrors.service = t('serviceRequired');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('messageRequired');
    } else if (formData.message.length > 1000) {
      newErrors.message = t('messageTooLong');
    }

    if (!formData.agreed) {
      newErrors.agreed = t('termsRequired');
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

      // Construct formatted WhatsApp message using translations
      const whatsappMessage = `${t('whatsappGreeting')}

${t('whatsappIntro')}

👤 *${t('whatsappNameLabel')}* ${formData.name}
📱 *${t('whatsappMobileLabel')}* ${formData.mobile}
📧 *${t('whatsappEmailLabel')}* ${formData.email}
🔧 *${t('whatsappServiceLabel')}* ${serviceLabel}

💬 *${t('whatsappMessageLabel')}*
${formData.message}

${t('whatsappClosing')}

${t('whatsappThankYou')}`;

      // Construct WhatsApp URL
      const whatsappNumber = '916388224877';
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

      // Trigger confetti animation
      triggerConfetti();

      // Show success toast
      toast.success(t('redirectingWhatsApp'), {
        description: t('pleaseSendMessage'),
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
      toast.error(t('somethingWentWrong'), {
        description: t('tryAgainOrContact'),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, agreed: e.target.checked }));
    if (formErrors.agreed) {
      setErrors(prev => ({ ...prev, agreed: undefined }));
    }
  };

  const accentColor = mode === 'institutional' ? 'institutional' : 'creator';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-xs font-mono tracking-wider text-foreground/50 mb-2 uppercase">
          {t('name')}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={t('yourFullName')}
          aria-required="true"
          aria-invalid={!!formErrors.name}
          aria-describedby={formErrors.name ? 'name-error' : undefined}
          className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border backdrop-blur-sm transition-all duration-300 text-sm font-body text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-1 ${formErrors.name
            ? 'border-destructive/50 focus:border-destructive focus:ring-destructive/30'
            : `border-white/[0.08] focus:border-${accentColor}/50 focus:ring-${accentColor}/20`
            }`}
        />
        {formErrors.name && <p id="name-error" className="mt-1.5 text-xs text-destructive/80">{formErrors.name}</p>}
      </div>

      {/* Mobile */}
      <div>
        <label htmlFor="mobile" className="block text-xs font-mono tracking-wider text-foreground/50 mb-2 uppercase">
          {t('mobileNumberLabel')}
        </label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder={t('tenDigitMobile')}
          aria-required="true"
          aria-invalid={!!formErrors.mobile}
          aria-describedby={formErrors.mobile ? 'mobile-error' : undefined}
          className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border backdrop-blur-sm transition-all duration-300 text-sm font-body text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-1 ${formErrors.mobile
            ? 'border-destructive/50 focus:border-destructive focus:ring-destructive/30'
            : `border-white/[0.08] focus:border-${accentColor}/50 focus:ring-${accentColor}/20`
            }`}
        />
        {formErrors.mobile && <p id="mobile-error" className="mt-1.5 text-xs text-destructive/80">{formErrors.mobile}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-xs font-mono tracking-wider text-foreground/50 mb-2 uppercase">
          {t('email')}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={t('yourEmailPlaceholder')}
          aria-required="true"
          aria-invalid={!!formErrors.email}
          aria-describedby={formErrors.email ? 'email-error' : undefined}
          className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border backdrop-blur-sm transition-all duration-300 text-sm font-body text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-1 ${formErrors.email
            ? 'border-destructive/50 focus:border-destructive focus:ring-destructive/30'
            : `border-white/[0.08] focus:border-${accentColor}/50 focus:ring-${accentColor}/20`
            }`}
        />
        {formErrors.email && <p id="email-error" className="mt-1.5 text-xs text-destructive/80">{formErrors.email}</p>}
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="block text-xs font-mono tracking-wider text-foreground/50 mb-2 uppercase">
          {t('service')}
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!formErrors.service}
          aria-describedby={formErrors.service ? 'service-error' : undefined}
          className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border backdrop-blur-sm transition-all duration-300 text-sm font-body text-foreground focus:outline-none focus:ring-1 appearance-none cursor-pointer ${formErrors.service
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
        {formErrors.service && <p id="service-error" className="mt-1.5 text-xs text-destructive/80">{formErrors.service}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-mono tracking-wider text-foreground/50 mb-2 uppercase">
          {t('message')}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={t('tellUsRequirements')}
          rows={4}
          aria-required="true"
          aria-invalid={!!formErrors.message}
          aria-describedby={formErrors.message ? 'message-error' : undefined}
          className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border backdrop-blur-sm transition-all duration-300 text-sm font-body text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-1 resize-none ${formErrors.message
            ? 'border-destructive/50 focus:border-destructive focus:ring-destructive/30'
            : `border-white/[0.08] focus:border-${accentColor}/50 focus:ring-${accentColor}/20`
            }`}
        />
        {formErrors.message && <p id="message-error" className="mt-1.5 text-xs text-destructive/80">{formErrors.message}</p>}
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
              aria-required="true"
              aria-checked={formData.agreed}
              aria-invalid={!!formErrors.agreed}
              aria-describedby={formErrors.agreed ? 'agreed-error' : undefined}
            />
            <div className={`w-5 h-5 rounded-md border transition-all duration-300 flex items-center justify-center ${formData.agreed
              ? mode === 'institutional'
                ? 'bg-institutional border-institutional'
                : 'bg-creator border-creator'
              : formErrors.agreed
                ? 'border-destructive/50 bg-white/[0.02]'
                : 'border-white/[0.15] bg-white/[0.02] group-hover:border-white/[0.25]'
              }`}>
              {formData.agreed && <Check className="w-3 h-3 text-background" strokeWidth={3} />}
            </div>
          </div>
          <span className="text-xs text-foreground/50 leading-relaxed">
            {t('termsAgreeWhatsApp')}
          </span>
        </label>
        {formErrors.agreed && <p id="agreed-error" className="mt-1.5 text-xs text-destructive/80 ml-8">{formErrors.agreed}</p>}
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
        {isSubmitting ? t('sending') : t('sendMessage')}
      </button>

      {/* Privacy note */}
      <p className="text-center text-[10px] text-foreground/30 font-mono tracking-wide">
        {t('secureAndConfidential')}
      </p>
    </form>
  );
};

export default ContactForm;
