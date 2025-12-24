import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useNavigate } from 'react-router-dom';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';
import { MessageCircle, Check } from 'lucide-react';

const Pricing = () => {
  const { mode, setHasEntered } = useMode();
  const navigate = useNavigate();

  const handleReturn = () => {
    setHasEntered(false);
    navigate('/');
  };

  const whatsappNumber = '919876543210';

  const institutionalPlans = [
    {
      name: 'Per-Task',
      description: 'For occasional documentation needs',
      price: 'Quote-based',
      features: ['Single project scope', 'Standard timeline', 'WhatsApp support', '1 revision round'],
      cta: 'Get a Quote',
      template: 'Hello quickserveit, I need a quote for a one-time documentation task.'
    },
    {
      name: 'Monthly Retainer',
      description: 'For schools with regular needs',
      price: 'Custom',
      popular: true,
      features: ['Priority support', 'Faster turnaround', 'Dedicated channel', 'Unlimited minor tasks', 'Monthly reporting'],
      cta: 'Discuss Retainer',
      template: 'Hello quickserveit, I am interested in a monthly retainer for ongoing support.'
    },
    {
      name: 'Annual Partnership',
      description: 'For long-term collaboration',
      price: 'Custom',
      features: ['All retainer benefits', 'Discounted rates', 'Annual planning support', 'Priority scheduling', 'Dedicated account manager'],
      cta: 'Explore Partnership',
      template: 'Hello quickserveit, I would like to explore an annual partnership arrangement.'
    }
  ];

  const creatorPlans = [
    {
      name: 'Single Video',
      description: 'For individual projects',
      price: 'From ₹2,500',
      features: ['Up to 15 min final', '2 revision rounds', 'Color grading', 'Basic sound design'],
      cta: 'Get Started',
      template: 'Hello quickserveit, I need editing for a single video project.'
    },
    {
      name: 'Monthly Package',
      description: 'For regular uploaders',
      price: 'Custom',
      popular: true,
      features: ['4-8 videos/month', 'Priority queue', 'Thumbnails included', 'Consistent style', 'Faster turnaround'],
      cta: 'Discuss Package',
      template: 'Hello quickserveit, I am interested in a monthly editing package.'
    },
    {
      name: 'Full Production',
      description: 'For premium content',
      price: 'Quote-based',
      features: ['Scripting support', 'Advanced motion graphics', 'Custom animations', 'Music licensing help', 'Multiple formats'],
      cta: 'Get Quote',
      template: 'Hello quickserveit, I need full production services for premium content.'
    }
  ];

  const plans = mode === 'institutional' ? institutionalPlans : creatorPlans;

  return (
    <>
      <Helmet>
        <title>Pricing | quickserveit</title>
        <meta name="description" content="Transparent pricing for institutional documentation and creator production services." />
      </Helmet>

      <CursorLight mode={mode} />
      <FilmGrain />
      <FloatingNavbar mode={mode} onReturn={handleReturn} isVisible={true} />

      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display mb-5">
              <span className={mode === 'institutional' ? 'text-institutional' : 'text-creator'}>Transparent</span> Pricing
            </h1>
            <p className="text-foreground/50">No hidden fees. Clear scope. Honest timelines.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div key={index} className={`p-6 md:p-6 rounded-2xl glass-card border transition-all duration-300 ${plan.popular ? (mode === 'institutional' ? 'border-institutional/40 ring-1 ring-institutional/20' : 'border-creator/40 ring-1 ring-creator/20') : 'border-border/20'}`}>
                {plan.popular && (
                  <span className={`text-xs font-medium px-3 py-1 rounded-full mb-4 inline-block ${mode === 'institutional' ? 'bg-institutional/20 text-institutional' : 'bg-creator/20 text-creator'}`}>
                    Recommended
                  </span>
                )}
                <h3 className="text-xl font-medium">{plan.name}</h3>
                <p className="text-sm text-foreground/50 mt-1 mb-4">{plan.description}</p>
                <div className={`text-2xl font-display mb-6 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/60">
                      <Check className={`w-4 h-4 mt-0.5 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(plan.template)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full font-medium transition-all ${plan.popular ? (mode === 'institutional' ? 'bg-institutional text-background' : 'bg-creator text-background') : 'border border-border hover:bg-foreground/5'}`}
                >
                  <MessageCircle className="w-4 h-4" />
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer mode={mode} />
    </>
  );
};

export default Pricing;
