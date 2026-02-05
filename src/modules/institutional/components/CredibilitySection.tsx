import SystemTerminal from './SystemTerminal';
import { Server, Lock, Cpu, Zap } from 'lucide-react';

interface CredibilitySectionProps {
  mode: 'institutional' | 'creator';
}

const CredibilitySection = ({ mode }: CredibilitySectionProps) => {
  const techStack = [
    { icon: Server, label: 'Frontend', value: 'React / Vanilla JS' },
    { icon: Lock, label: 'Security', value: 'End-to-End Encrypted' },
    { icon: Cpu, label: 'Processing', value: 'Edge Optimized' },
    { icon: Zap, label: 'Performance', value: '< 100ms Response' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 px-6 relative overflow-hidden">
      {/* Background grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundSize: '40px 40px',
          backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className={`font-display text-2xl md:text-4xl tracking-wide mb-4 ${
            mode === 'institutional' ? 'text-institutional' : 'text-creator'
          }`}>
            Core Architecture
          </h2>
          <p className="text-foreground/50 max-w-lg mx-auto">
            Built for reliability, designed for scale
          </p>
        </div>
        
        {/* Tech Stack Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {techStack.map((tech, index) => (
            <div 
              key={tech.label}
              className="glass-card p-5 md:p-6 rounded-xl text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <tech.icon className={`w-6 h-6 mx-auto mb-3 ${
                mode === 'institutional' ? 'text-institutional' : 'text-creator'
              }`} />
              <div className="text-xs text-foreground/40 tracking-wider mb-1">{tech.label}</div>
              <div className="text-sm font-medium text-foreground/80">{tech.value}</div>
            </div>
          ))}
        </div>
        
        {/* Terminal */}
        <div className="max-w-3xl mx-auto">
          <SystemTerminal mode={mode} />
        </div>
        
        {/* Engineering Note */}
        <div className="text-center mt-12">
          <code className="text-xs text-foreground/20 font-mono">
            &lt;code&gt; Built by QuickServe Engineering Division &lt;/code&gt;
          </code>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
