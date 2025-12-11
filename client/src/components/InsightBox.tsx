import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, RefreshCw } from "lucide-react";
import { getRandomInsight } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface InsightBoxProps {
  className?: string;
}

export function InsightBox({ className = "" }: InsightBoxProps) {
  const [insight, setInsight] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    setInsight(getRandomInsight());
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setInsight(getRandomInsight());
      setIsRefreshing(false);
    }, 300);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className={`relative ${className}`}
      data-testid="insight-box"
    >
      <div className="relative p-6 rounded-lg border border-gold bg-card/50 backdrop-blur-sm overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none" />
        
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <div className="relative flex items-start gap-4">
          <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-4 mb-2">
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                Insight of the Moment
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="w-7 h-7"
                onClick={handleRefresh}
                disabled={isRefreshing}
                data-testid="button-refresh-insight"
              >
                <RefreshCw 
                  className={`w-3.5 h-3.5 text-muted-foreground ${isRefreshing ? 'animate-spin' : ''}`} 
                />
              </Button>
            </div>
            
            <motion.p
              key={insight}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-sm text-foreground/90 leading-relaxed italic"
            >
              "{insight}"
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
