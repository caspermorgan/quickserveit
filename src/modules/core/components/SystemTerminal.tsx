import { Terminal } from 'lucide-react';

interface SystemTerminalProps {
  mode: 'institutional' | 'creator';
}

const SystemTerminal = ({ mode }: SystemTerminalProps) => {
  const modeColorClass = mode === 'institutional' ? 'text-institutional' : 'text-creator';

  return (
    <div className="terminal p-6 md:p-8 animate-fade-in-up">
      {/* Terminal Header */}
      <div className="terminal-header">
        <div className="terminal-dot bg-red-500/80" />
        <div className="terminal-dot bg-yellow-500/80" />
        <div className="terminal-dot bg-green-500/80" />
        <span className="ml-4 text-xs text-foreground/40 font-mono">quickserve@system ~ </span>
      </div>

      {/* Terminal Body */}
      <div className="p-4 md:p-6 space-y-4">
        {/* Command */}
        <div className="flex items-center gap-2">
          <span className={`${modeColorClass}`}>root@quickserve:~$</span>
          <span className="text-foreground/80 font-mono text-sm">sys_status</span>
        </div>

        {/* Output - Real Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-4">
          <MetricBlock
            label="PROJECTS"
            value="06 Delivered"
            modeClass={modeColorClass}
          />
          <MetricBlock
            label="CLIENTS"
            value="100% Satisfaction"
            modeClass={modeColorClass}
          />
          <MetricBlock
            label="STACK"
            value="React, TS, Adobe"
            modeClass={modeColorClass}
          />
          <MetricBlock
            label="STATUS"
            value="Open for Contracts"
            modeClass={modeColorClass}
          />
        </div>

        {/* Status line */}
        <div className="flex items-center gap-2 mt-6 pt-4 border-t border-border">
          <Terminal className={`w-4 h-4 ${modeColorClass}`} />
          <span className="text-xs text-foreground/40 font-mono">
            All systems operational • Encryption:
            <span className={`ml-1 ${modeColorClass}`}>SECURE</span>
          </span>
        </div>
      </div>
    </div>
  );
};

interface MetricBlockProps {
  label: string;
  value: string;
  modeClass: string;
}

const MetricBlock = ({ label, value, modeClass }: MetricBlockProps) => (
  <div className="text-center md:text-left">
    <div className="text-[10px] md:text-xs text-foreground/30 tracking-wider mb-1">
      {label}
    </div>
    <div className={`text-sm md:text-lg font-mono ${modeClass}`}>
      {value}
    </div>
  </div>
);

export default SystemTerminal;
