import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useMode } from '@/context/ModeContext';
import { useTranslation } from '@/hooks/useTranslation';
import { Check, Send, Zap, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { toast } from 'sonner';

interface FormData {
  name: string;
  mobile: string;
  email: string;
  service: string;
  message: string;
  agreed: boolean;
  priority: boolean;
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
  const [uploadProgress, setUploadProgress] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    mobile: '',
    email: '',
    service: '',
    message: '',
    agreed: false,
    priority: false,
  });
  const [formErrors, setErrors] = useState<FormErrors>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);

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
    const duration = 1500;
    const end = Date.now() + duration;

    const colors = mode === 'institutional'
      ? ['#EAB308', '#F59E0B', '#FBBF24']
      : ['#22D3EE', '#06B6D4', '#0EA5E9'];

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

  const simulateUpload = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 100);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    simulateUpload();

    try {
      const serviceLabel = services.find(s => s.value === formData.service)?.label || formData.service;

      const priorityPrefix = formData.priority ? '🔥 *PRIORITY REQUEST* 🔥\n\n' : '';

      const whatsappMessage = `${priorityPrefix}${t('whatsappGreeting')}

${t('whatsappIntro')}

👤 *${t('whatsappNameLabel')}* ${formData.name}
📱 *${t('whatsappMobileLabel')}* ${formData.mobile}
📧 *${t('whatsappEmailLabel')}* ${formData.email}
🔧 *${t('whatsappServiceLabel')}* ${serviceLabel}

💬 *${t('whatsappMessageLabel')}*
${formData.message}

${t('whatsappClosing')}

${t('whatsappThankYou')}`;

      const whatsappNumber = '916388224877';
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

      // Wait for upload animation to complete
      await new Promise(resolve => setTimeout(resolve, 1200));

      triggerConfetti();

      toast.success(t('redirectingWhatsApp'), {
        description: t('pleaseSendMessage'),
      });

      setFormData({
        name: '',
        mobile: '',
        email: '',
        service: '',
        message: '',
        agreed: false,
        priority: false,
      });
      setErrors({});

      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 500);
    } catch (error) {
      console.error('WhatsApp Error:', error);
      toast.error(t('somethingWentWrong'), {
        description: t('tryAgainOrContact'),
      });
    } finally {
      setIsSubmitting(false);
      setUploadProgress(0);
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
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Priority Toggle */}
      <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
        <div>
          <h3 className="text-sm font-semibold mb-1">Inquiry Type</h3>
          <p className="text-xs text-foreground/50">Select priority for urgent projects</p>
        </div>
        <button
          type="button"
          onClick={() => setFormData(prev => ({ ...prev, priority: !prev.priority }))}
          className={`relative w-20 h-10 rounded-full transition-all duration-300 ${formData.priority
              ? 'bg-gradient-to-r from-amber-500 to-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.4)]'
              : 'bg-white/[0.1]'
            }`}
        >
          <motion.div
            className={`absolute top-1 w-8 h-8 rounded-full transition-all duration-300 ${formData.priority ? 'bg-white right-1' : 'bg-white/50 left-1'
              }`}
            animate={{ x: formData.priority ? 0 : 0 }}
          />
          {formData.priority && (
            <Zap className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-white" />
          )}
        </button>
      </div>

      {formData.priority && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/30"
        >
          <div className="flex items-center gap-2 text-amber-400 mb-1">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-semibold">Priority Mode Activated</span>
          </div>
          <p className="text-xs text-foreground/60">
            Your request will be marked as high priority and receive expedited attention.
          </p>
        </motion.div>
      )}

      {/* VIP Underline Inputs */}
      <div className="space-y-5">
        {/* Name */}
        <div className="relative">
          <label htmlFor="name" className="block text-xs font-mono tracking-wider text-foreground/50 mb-3 uppercase">
            {t('name')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField(null)}
            placeholder={t('yourFullName')}
            className="w-full bg-transparent border-0 border-b-2 border-white/[0.1] px-0 py-3 text-base font-mono text-foreground placeholder:text-foreground/30 focus:outline-none transition-all duration-300"
            style={{
              borderBottomColor: focusedField === 'name'
                ? mode === 'institutional' ? '#EAB308' : '#22D3EE'
                : formErrors.name ? '#ef4444' : 'rgba(255,255,255,0.1)',
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 h-0.5"
            style={{
              background: mode === 'institutional'
                ? 'linear-gradient(90deg, #EAB308, #F59E0B)'
                : 'linear-gradient(90deg, #22D3EE, #06B6D4)',
            }}
            initial={{ width: 0 }}
            animate={{ width: focusedField === 'name' ? '100%' : 0 }}
            transition={{ duration: 0.3 }}
          />
          {formErrors.name && <p className="mt-2 text-xs text-destructive/80 font-mono">{formErrors.name}</p>}
        </div>

        {/* Mobile */}
        <div className="relative">
          <label htmlFor="mobile" className="block text-xs font-mono tracking-wider text-foreground/50 mb-3 uppercase">
            {t('mobileNumberLabel')}
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            onFocus={() => setFocusedField('mobile')}
            onBlur={() => setFocusedField(null)}
            placeholder={t('tenDigitMobile')}
            className="w-full bg-transparent border-0 border-b-2 border-white/[0.1] px-0 py-3 text-base font-mono text-foreground placeholder:text-foreground/30 focus:outline-none transition-all duration-300"
            style={{
              borderBottomColor: focusedField === 'mobile'
                ? mode === 'institutional' ? '#EAB308' : '#22D3EE'
                : formErrors.mobile ? '#ef4444' : 'rgba(255,255,255,0.1)',
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 h-0.5"
            style={{
              background: mode === 'institutional'
                ? 'linear-gradient(90deg, #EAB308, #F59E0B)'
                : 'linear-gradient(90deg, #22D3EE, #06B6D4)',
            }}
            initial={{ width: 0 }}
            animate={{ width: focusedField === 'mobile' ? '100%' : 0 }}
            transition={{ duration: 0.3 }}
          />
          {formErrors.mobile && <p className="mt-2 text-xs text-destructive/80 font-mono">{formErrors.mobile}</p>}
        </div>

        {/* Email */}
        <div className="relative">
          <label htmlFor="email" className="block text-xs font-mono tracking-wider text-foreground/50 mb-3 uppercase">
            {t('email')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
            placeholder={t('yourEmailPlaceholder')}
            className="w-full bg-transparent border-0 border-b-2 border-white/[0.1] px-0 py-3 text-base font-mono text-foreground placeholder:text-foreground/30 focus:outline-none transition-all duration-300"
            style={{
              borderBottomColor: focusedField === 'email'
                ? mode === 'institutional' ? '#EAB308' : '#22D3EE'
                : formErrors.email ? '#ef4444' : 'rgba(255,255,255,0.1)',
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 h-0.5"
            style={{
              background: mode === 'institutional'
                ? 'linear-gradient(90deg, #EAB308, #F59E0B)'
                : 'linear-gradient(90deg, #22D3EE, #06B6D4)',
            }}
            initial={{ width: 0 }}
            animate={{ width: focusedField === 'email' ? '100%' : 0 }}
            transition={{ duration: 0.3 }}
          />
          {formErrors.email && <p className="mt-2 text-xs text-destructive/80 font-mono">{formErrors.email}</p>}
        </div>

        {/* Service */}
        <div className="relative">
          <label htmlFor="service" className="block text-xs font-mono tracking-wider text-foreground/50 mb-3 uppercase">
            {t('service')}
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            onFocus={() => setFocusedField('service')}
            onBlur={() => setFocusedField(null)}
            className="w-full bg-transparent border-0 border-b-2 border-white/[0.1] px-0 py-3 text-base font-mono text-foreground focus:outline-none appearance-none cursor-pointer transition-all duration-300"
            style={{
              borderBottomColor: focusedField === 'service'
                ? mode === 'institutional' ? '#EAB308' : '#22D3EE'
                : formErrors.service ? '#ef4444' : 'rgba(255,255,255,0.1)',
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 0 center',
            }}
          >
            {services.map(service => (
              <option key={service.value} value={service.value} className="bg-background text-foreground">
                {service.label}
              </option>
            ))}
          </select>
          <motion.div
            className="absolute bottom-0 left-0 h-0.5"
            style={{
              background: mode === 'institutional'
                ? 'linear-gradient(90deg, #EAB308, #F59E0B)'
                : 'linear-gradient(90deg, #22D3EE, #06B6D4)',
            }}
            initial={{ width: 0 }}
            animate={{ width: focusedField === 'service' ? '100%' : 0 }}
            transition={{ duration: 0.3 }}
          />
          {formErrors.service && <p className="mt-2 text-xs text-destructive/80 font-mono">{formErrors.service}</p>}
        </div>

        {/* Message */}
        <div className="relative">
          <label htmlFor="message" className="block text-xs font-mono tracking-wider text-foreground/50 mb-3 uppercase">
            {t('message')}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField(null)}
            placeholder={t('tellUsRequirements')}
            rows={4}
            className="w-full bg-transparent border-0 border-b-2 border-white/[0.1] px-0 py-3 text-base font-mono text-foreground placeholder:text-foreground/30 focus:outline-none resize-none transition-all duration-300"
            style={{
              borderBottomColor: focusedField === 'message'
                ? mode === 'institutional' ? '#EAB308' : '#22D3EE'
                : formErrors.message ? '#ef4444' : 'rgba(255,255,255,0.1)',
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 h-0.5"
            style={{
              background: mode === 'institutional'
                ? 'linear-gradient(90deg, #EAB308, #F59E0B)'
                : 'linear-gradient(90deg, #22D3EE, #06B6D4)',
            }}
            initial={{ width: 0 }}
            animate={{ width: focusedField === 'message' ? '100%' : 0 }}
            transition={{ duration: 0.3 }}
          />
          {formErrors.message && <p className="mt-2 text-xs text-destructive/80 font-mono">{formErrors.message}</p>}
        </div>
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
              : formErrors.agreed
                ? 'border-destructive/50 bg-white/[0.02]'
                : 'border-white/[0.15] bg-white/[0.02] group-hover:border-white/[0.25]'
              }`}>
              {formData.agreed && <Check className="w-3 h-3 text-background" strokeWidth={3} />}
            </div>
          </div>
          <span className="text-xs text-foreground/50 leading-relaxed font-mono">
            {t('termsAgreeWhatsApp')}
          </span>
        </label>
        {formErrors.agreed && <p className="mt-1.5 text-xs text-destructive/80 ml-8 font-mono">{formErrors.agreed}</p>}
      </div>

      {/* Launch Button */}
      <div className="relative">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full relative overflow-hidden flex items-center justify-center gap-3 px-8 py-5 rounded-xl font-display text-base tracking-wider uppercase font-bold transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed ${formData.priority
              ? 'bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-background shadow-[0_0_40px_rgba(234,179,8,0.4)]'
              : mode === 'institutional'
                ? 'bg-gradient-to-r from-institutional via-yellow-500 to-institutional text-background shadow-[0_0_30px_rgba(234,179,8,0.3)]'
                : 'bg-gradient-to-r from-creator via-cyan-400 to-creator text-background shadow-[0_0_30px_rgba(34,211,238,0.3)]'
            }`}
        >
          {isSubmitting ? (
            <>
              <Rocket className="w-5 h-5 animate-bounce" />
              <span>Launching...</span>
            </>
          ) : (
            <>
              {formData.priority ? <Zap className="w-5 h-5" /> : <Send className="w-5 h-5" />}
              <span>{formData.priority ? 'Send Priority Request' : t('sendMessage')}</span>
            </>
          )}

          {/* Progress Bar */}
          <AnimatePresence>
            {isSubmitting && (
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-white/30"
                initial={{ width: 0 }}
                animate={{ width: `${uploadProgress}%` }}
                exit={{ width: 0 }}
                transition={{ duration: 0.1 }}
              />
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Privacy note */}
      <p className="text-center text-[10px] text-foreground/30 font-mono tracking-wide">
        {t('secureAndConfidential')}
      </p>
    </form>
  );
};

export default ContactForm;
