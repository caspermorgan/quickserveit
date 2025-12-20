import { Shield, Users, Headphones, Server, Palette, Video, Zap, TrendingUp } from 'lucide-react';
import { useMode } from '@/context/ModeContext';

const FeaturesSection = () => {
  const { mode } = useMode();

  const institutionalFeatures = [
    {
      icon: Shield,
      title: 'Secure Infrastructure',
      description: 'Enterprise-grade security with encrypted data handling and confidential document management.',
    },
    {
      icon: Users,
      title: 'Real-time Collaboration',
      description: 'Seamless coordination between departments with live updates and tracking.',
    },
    {
      icon: Headphones,
      title: 'Enterprise Support',
      description: 'Dedicated support team with priority response times for critical tasks.',
    },
    {
      icon: Server,
      title: 'Scalable Architecture',
      description: 'Infrastructure that grows with your institution, from small schools to large universities.',
    },
  ];

  const creatorFeatures = [
    {
      icon: Video,
      title: 'Cinematic Editing',
      description: 'Hollywood-grade editing techniques designed for maximum viewer retention.',
    },
    {
      icon: Palette,
      title: 'Color Grading',
      description: 'Professional color correction that makes your content stand out.',
    },
    {
      icon: Zap,
      title: 'Fast Turnaround',
      description: 'Quick delivery without compromising on quality for consistent uploads.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Focused',
      description: 'Editing strategies proven to increase engagement and subscriber growth.',
    },
  ];

  const features = mode === 'institutional' ? institutionalFeatures : creatorFeatures;

  return (
    <section className="section-spacing bg-secondary/30">
      <div className="container-professional">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
            {mode === 'institutional' ? 'Why Institutions Trust Us' : 'Why Creators Choose Us'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {mode === 'institutional'
              ? 'Built for reliability, designed for excellence in educational and organizational environments.'
              : 'Crafted for engagement, optimized for the algorithms that matter.'}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-professional p-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-mode-soft flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-mode" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
