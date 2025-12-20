import { Check } from 'lucide-react';
import { useMode } from '@/context/ModeContext';
import { Link } from 'react-router-dom';

const PricingSection = () => {
  const { mode } = useMode();

  const institutionalPlans = [
    {
      name: 'Basic',
      price: '₹1,200',
      period: '/month',
      description: 'Perfect for small schools and departments',
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
      name: 'Professional',
      price: '₹2,300',
      period: '/month',
      description: 'Ideal for growing institutions',
      features: [
        'Everything in Basic',
        'Full timetable (1/month)',
        '100 certificate names',
        'PPT formatting',
        'Priority queue support',
      ],
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: '₹4,200',
      period: '/month',
      description: 'For large-scale operations',
      features: [
        'Everything in Professional',
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
      description: 'Perfect for new creators',
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
      name: 'Professional',
      price: '₹8,000',
      period: '/video',
      description: 'For growing channels',
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
      description: 'For established creators',
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
    <section className="section-spacing bg-background">
      <div className="container-professional">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {mode === 'institutional'
              ? 'Fair, workload-based pricing that respects your institution\'s budget.'
              : 'Investment in quality that pays dividends in engagement and growth.'}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`card-professional p-6 md:p-8 animate-fade-in-up ${
                plan.highlight ? 'ring-2 ring-mode relative' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Popular Badge */}
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-mode text-card text-xs font-semibold">
                  Most Popular
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                {plan.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-3xl md:text-4xl font-heading font-bold text-mode">
                  {plan.price}
                </span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-mode" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                to="/contact"
                className={`block w-full text-center py-3 rounded-md font-semibold text-sm trans-smooth ${
                  plan.highlight
                    ? 'btn-primary'
                    : 'btn-outline'
                }`}
              >
                {plan.price === 'Custom' ? 'Contact Us' : 'Choose Plan'}
              </Link>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-xs text-muted-foreground mt-10">
          All prices are exclusive of GST. Urgent work may incur additional charges.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
