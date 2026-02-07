import { CheckIcon } from '@/modules/core/components/IconSystem';
import { useNavigate } from 'react-router-dom';

interface PricingSectionProps {
  mode: 'institutional' | 'creator';
}

const PricingSection = ({ mode }: PricingSectionProps) => {
  const navigate = useNavigate();

  const handlePlanSelect = (planName: string) => {
    navigate('/contact', {
      state: {
        intent: 'pricing',
        plan: planName
      }
    });
  };
  const institutionalPlans = [
    {
      name: 'Silver',
      price: '₹1,200',
      period: '/month',
      features: [
        '30 micro-tasks per month',
        '12 pages of notice typing',
        'Minor timetable edits',
        'Standard support (4-6 hrs)',
        'WhatsApp assistance',
      ],
      highlight: false,
    },
    {
      name: 'Gold',
      price: '₹2,300',
      period: '/month',
      features: [
        'Everything in Silver',
        'Full timetable (1/month)',
        '100 certificate names',
        'PPT formatting',
        'Priority queue support',
      ],
      highlight: true,
    },
    {
      name: 'Platinum',
      price: '₹4,200',
      period: '/month',
      features: [
        'Everything in Gold',
        'Multi-department coordination',
        'Large certificate batches',
        'Complex scheduling',
        'Fastest turnaround',
      ],
      highlight: false,
    },
  ];

  const creatorPlans = [
    {
      name: 'Starter',
      price: '₹3,000',
      period: '/video',
      features: [
        'Up to 10 min long-form edit',
        'Basic color correction',
        'Simple transitions',
        'Background music sync',
        '2 revision rounds',
      ],
      highlight: false,
    },
    {
      name: 'Pro',
      price: '₹8,000',
      period: '/video',
      features: [
        'Up to 20 min cinematic edit',
        'Advanced color grading',
        'Motion graphics',
        'Sound design',
        'Unlimited revisions',
      ],
      highlight: true,
    },
    {
      name: 'Studio',
      price: 'Custom',
      period: '',
      features: [
        'Documentary & series',
        'Full VFX pipeline',
        'Brand identity package',
        'Content strategy',
        'Dedicated partner',
      ],
      highlight: false,
    },
  ];

  const plans = mode === 'institutional' ? institutionalPlans : creatorPlans;

  return (
    <section id="pricing" className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className={`font-display text-2xl md:text-4xl tracking-wide mb-4 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
            }`}>
            {mode === 'institutional' ? 'Subscription Plans' : 'Pricing'}
          </h2>
          <p className="text-foreground/50 max-w-lg mx-auto">
            {mode === 'institutional'
              ? 'Fair, workload-based pricing that respects your institution'
              : 'Investment in quality that pays dividends in engagement'}
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative glass-card rounded-2xl p-8 animate-fade-in-up ${plan.highlight
                ? `border-2 ${mode === 'institutional' ? 'border-institutional/50' : 'border-creator/50'}`
                : ''
                }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Popular badge */}
              {plan.highlight && (
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-medium ${mode === 'institutional'
                  ? 'bg-institutional text-background'
                  : 'bg-creator text-background'
                  }`}>
                  Most Popular
                </div>
              )}

              {/* Plan name */}
              <h3 className="text-lg font-display tracking-wide text-foreground mb-4">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-6">
                <span className={`text-3xl md:text-4xl font-display ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
                  }`}>
                  {plan.price}
                </span>
                <span className="text-foreground/40 text-sm">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckIcon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
                      }`} />
                    <span className="text-sm text-foreground/60">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => handlePlanSelect(plan.name)}
                className={`w-full py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center ${plan.highlight
                  ? 'btn-premium'
                  : 'btn-outline-premium'
                  }`}
              >
                {plan.price === 'Custom' ? 'Contact Us' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-xs text-foreground/30 mt-10">
          All prices are exclusive of GST. Urgent work may incur additional charges based on complexity and timeline.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
