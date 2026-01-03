import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';
import {
  FileText,
  Database,
  ShieldCheck,
  CheckCircle,
  Star,
  Zap,
  Clock,
  Users,
  TrendingUp,
  Award,
  Video,
  Palette,
  Sparkles,
  Crown
} from 'lucide-react';

const Pricing = () => {
  const { mode, setHasEntered } = useMode();
  const navigate = useNavigate();
  const [activeServiceTab, setActiveServiceTab] = useState(0);

  const handleReturn = () => {
    setHasEntered(false);
    navigate('/');
  };

  return (
    <>
      <Helmet>
        <title>{mode === 'institutional' ? 'Institutional Pricing' : 'Creator Pricing'} | QuickServe IT</title>
        <meta name="description" content={mode === 'institutional'
          ? "Transparent pricing for Gorakhpur's educational institutions. Fair rates, honest terms."
          : "Flexible pricing for content creators. From single projects to annual partnerships."
        } />
      </Helmet>

      <CursorLight mode={mode} />
      <FilmGrain />
      <FloatingNavbar mode={mode} onReturn={handleReturn} isVisible={true} />

      <main className="min-h-screen bg-background pt-32 pb-20">
        {mode === 'institutional' ? (
          <div className="container mx-auto px-6">
            {/* Hero Section */}
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-institutional/10 border border-institutional/20 mb-6 animate-fade-in">
                <ShieldCheck className="w-4 h-4 text-institutional" />
                <span className="text-xs font-medium text-institutional">100% Verified Pricing</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display mb-5 animate-fade-in-up">
                <span className="text-institutional">Transparent Value</span> Pricing
              </h1>
              <p className="text-foreground/70 text-lg leading-relaxed mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Fair pricing for Gorakhpur's educational institutions.<br />
                <span className="text-foreground/50 text-base">We charge for the value of your peace of mind, not just the typing.</span>
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-foreground/50 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-institutional" />
                  <span>No Hidden Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-institutional" />
                  <span>Clear Terms</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-institutional" />
                  <span>Zero-Rejection Guarantee</span>
                </div>
              </div>
            </div>

            {/* Per-Task Pricing */}
            <div className="mb-20">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-institutional/5 border border-institutional/10 mb-3">
                  <Zap className="w-3.5 h-3.5 text-institutional" />
                  <span className="text-xs text-institutional">Pay Per Task</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display mb-2">
                  Service-Based <span className="text-institutional">Pricing</span>
                </h2>
                <p className="text-foreground/60 text-sm">
                  Perfect for one-time projects or occasional needs
                </p>
              </div>

              {/* Tab Navigation */}
              <div className="flex flex-wrap justify-center gap-3 mb-8 max-w-4xl mx-auto">
                <button
                  onClick={() => setActiveServiceTab(0)}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-300 ${activeServiceTab === 0
                    ? 'bg-institutional text-background shadow-lg shadow-institutional/30'
                    : 'glass-card border border-border/20 hover:border-institutional/40 text-foreground/70 hover:text-foreground'
                    }`}
                >
                  <FileText className="w-4 h-4" />
                  <span>Documentation</span>
                </button>
                <button
                  onClick={() => setActiveServiceTab(1)}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-300 ${activeServiceTab === 1
                    ? 'bg-institutional text-background shadow-lg shadow-institutional/30'
                    : 'glass-card border border-border/20 hover:border-institutional/40 text-foreground/70 hover:text-foreground'
                    }`}
                >
                  <Database className="w-4 h-4" />
                  <span>Data Services</span>
                </button>
                <button
                  onClick={() => setActiveServiceTab(2)}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-300 ${activeServiceTab === 2
                    ? 'bg-institutional text-background shadow-lg shadow-institutional/30'
                    : 'glass-card border border-border/20 hover:border-institutional/40 text-foreground/70 hover:text-foreground'
                    }`}
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Terms & Policy</span>
                </button>
              </div>

              {/* Tab Content */}
              <div className="max-w-3xl mx-auto">
                {/* Examination & Documentation */}
                {activeServiceTab === 0 && (
                  <div className="glass-card rounded-2xl p-8 md:p-10 border border-institutional/30 animate-fade-in">
                    <div className="flex items-start gap-6 mb-8">
                      <div className="w-16 h-16 rounded-xl bg-institutional/10 flex items-center justify-center shrink-0">
                        <FileText className="w-8 h-8 text-institutional" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-display text-institutional mb-2">
                          Examination & Documentation
                        </h3>
                        <p className="text-foreground/60 leading-relaxed">
                          Professional typing & formatting services with error-free delivery
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-start justify-between gap-4 p-4 rounded-lg bg-institutional/5 border border-institutional/10">
                        <div className="flex-1">
                          <p className="font-medium text-foreground mb-1">English Typing</p>
                          <p className="text-sm text-foreground/50">Standard documentation & exam papers</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-institutional">₹X/page</p>
                          <p className="text-xs text-foreground/40">Market rate</p>
                        </div>
                      </div>

                      <div className="flex items-start justify-between gap-4 p-4 rounded-lg bg-institutional/5 border border-institutional/10">
                        <div className="flex-1">
                          <p className="font-medium text-foreground mb-1">Hindi Typing</p>
                          <p className="text-sm text-foreground/50">Unicode formatting • Specialized skill</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-institutional">₹X/page</p>
                          <p className="text-xs text-institutional/60">+25% premium</p>
                        </div>
                      </div>

                      <div className="flex items-start justify-between gap-4 p-4 rounded-lg bg-institutional/5 border border-institutional/10">
                        <div className="flex-1">
                          <p className="font-medium text-foreground mb-1">Complex Subjects</p>
                          <p className="text-sm text-foreground/50">Science, Math, Chemistry with equations & diagrams</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-institutional">₹X/page</p>
                          <p className="text-xs text-institutional/60">+50% premium</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 rounded-lg bg-gradient-to-br from-institutional/10 to-institutional/5 border border-institutional/20 mb-6">
                      <div className="flex items-start gap-3 mb-3">
                        <Star className="w-5 h-5 text-institutional mt-0.5" />
                        <p className="font-medium text-institutional">Value Promise</p>
                      </div>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        Error-free formatting optimized for bulk printing. Includes equation editor, diagram support, and professional layout. Perfect for schools preparing exam materials.
                      </p>
                    </div>

                    <a
                      href="https://wa.me/916388224877?text=Hello%20quickserveit%2C%20I%20need%20a%20quote%20for%20examination%20documentation."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-medium text-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] bg-institutional text-background hover:shadow-lg hover:shadow-institutional/30"
                    >
                      Get Instant Quote
                    </a>
                  </div>
                )}

                {/* Data Architecture */}
                {activeServiceTab === 1 && (
                  <div className="glass-card rounded-2xl p-8 md:p-10 border border-institutional/30 animate-fade-in">
                    <div className="flex items-start gap-6 mb-8">
                      <div className="w-16 h-16 rounded-xl bg-institutional/10 flex items-center justify-center shrink-0">
                        <Database className="w-8 h-8 text-institutional" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-display text-institutional mb-2">
                          Data Architecture
                        </h3>
                        <p className="text-foreground/60 leading-relaxed">
                          UDISE+ & scholarship processing with zero-rejection guarantee
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-start justify-between gap-4 p-4 rounded-lg bg-institutional/5 border border-institutional/10">
                        <div className="flex-1">
                          <p className="font-medium text-foreground mb-1">Existing Student Update</p>
                          <p className="text-sm text-foreground/50">Maintenance work • Data correction</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-institutional">₹X/student</p>
                          <p className="text-xs text-foreground/40">Base rate</p>
                        </div>
                      </div>

                      <div className="flex items-start justify-between gap-4 p-4 rounded-lg bg-institutional/5 border border-institutional/10">
                        <div className="flex-1">
                          <p className="font-medium text-foreground mb-1">New Student Entry</p>
                          <p className="text-sm text-foreground/50">Complete account creation • High-risk validation</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-institutional">₹X/student</p>
                          <p className="text-xs text-institutional/60">Premium service</p>
                        </div>
                      </div>

                      <div className="flex items-start justify-between gap-4 p-4 rounded-lg bg-institutional/5 border border-institutional/10">
                        <div className="flex-1">
                          <p className="font-medium text-foreground mb-1">Scholarship Processing</p>
                          <p className="text-sm text-foreground/50">Volume-based pricing • Application support</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-institutional">₹30-₹50</p>
                          <p className="text-xs text-foreground/40">Per student</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 rounded-lg bg-gradient-to-br from-institutional/10 to-institutional/5 border border-institutional/20 mb-6">
                      <div className="flex items-start gap-3 mb-3">
                        <Award className="w-5 h-5 text-institutional mt-0.5" />
                        <p className="font-medium text-institutional">Zero-Rejection Guarantee</p>
                      </div>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        99.9% acceptance rate on first submission. We handle re-submissions at no extra cost. Our team validates every entry before delivery.
                      </p>
                    </div>

                    <a
                      href="https://wa.me/916388224877?text=Hello%20quickserveit%2C%20I%20need%20UDISE%2B%20or%20scholarship%20data%20entry%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-medium text-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] bg-institutional text-background hover:shadow-lg hover:shadow-institutional/30"
                    >
                      Get Instant Quote
                    </a>
                  </div>
                )}

                {/* Terms & Protocol */}
                {activeServiceTab === 2 && (
                  <div className="glass-card rounded-2xl p-8 md:p-10 border border-institutional/30 animate-fade-in">
                    <div className="flex items-start gap-6 mb-8">
                      <div className="w-16 h-16 rounded-xl bg-institutional/10 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-8 h-8 text-institutional" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-display text-institutional mb-2">
                          Terms & Protocol
                        </h3>
                        <p className="text-foreground/60 leading-relaxed">
                          The professional handshake - clear terms, secure workflow
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6 mb-8">
                      <div className="p-5 rounded-lg bg-institutional/5 border border-institutional/10">
                        <p className="font-medium text-foreground mb-4 text-lg">Payment Terms</p>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-institutional mt-0.5 shrink-0" />
                            <div>
                              <p className="text-foreground mb-1 font-medium">30% Advance (Initiation)</p>
                              <p className="text-sm text-foreground/60">Required to start work on your project</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-institutional mt-0.5 shrink-0" />
                            <div>
                              <p className="text-foreground mb-1 font-medium">70% Before Delivery</p>
                              <p className="text-sm text-foreground/60">Final payment before file handover</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-5 rounded-lg bg-institutional/5 border border-institutional/10">
                        <p className="font-medium text-foreground mb-3 text-lg">Payment Policy</p>
                        <p className="text-foreground/70 leading-relaxed">
                          <span className="font-medium text-institutional">Instant Payment Protocol</span> - No Delays, No Excuses. We maintain professional standards and expect the same from our clients.
                        </p>
                      </div>

                      <div className="p-5 rounded-lg bg-institutional/5 border border-institutional/10">
                        <p className="font-medium text-foreground mb-4 text-lg">Corrections Policy</p>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-institutional mt-0.5 shrink-0" />
                            <div>
                              <p className="text-foreground mb-1 font-medium">2 Validation Rounds Included</p>
                              <p className="text-sm text-foreground/60">Free corrections for any errors on our part</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-institutional mt-0.5 shrink-0" />
                            <div>
                              <p className="text-foreground mb-1 font-medium">Scope Changes Billed Separately</p>
                              <p className="text-sm text-foreground/60">Major structural changes to original requirements</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 rounded-lg bg-gradient-to-br from-institutional/10 to-institutional/5 border border-institutional/20 mb-6">
                      <div className="flex items-start gap-3 mb-3">
                        <ShieldCheck className="w-5 h-5 text-institutional mt-0.5" />
                        <p className="font-medium text-institutional">Trust Protocol</p>
                      </div>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        Built on mutual respect and transparency. Our terms protect both parties and ensure smooth collaboration. No hidden clauses, no surprises.
                      </p>
                    </div>

                    <a
                      href="https://wa.me/916388224877?text=Hello%20quickserveit%2C%20I%20want%20to%20understand%20your%20terms%20and%20protocol."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-medium text-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] bg-institutional text-background hover:shadow-lg hover:shadow-institutional/30"
                    >
                      View Full Terms
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Subscription Models */}
            <div className="mb-16">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-institutional/5 border border-institutional/10 mb-3">
                  <TrendingUp className="w-3.5 h-3.5 text-institutional" />
                  <span className="text-xs text-institutional">Save Up to 30%</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display mb-2">
                  <span className="text-institutional">Retainer & Subscription</span> Models
                </h2>
                <p className="text-foreground/60 text-sm">
                  Ongoing support for institutions with regular needs — better rates, faster service
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {/* Weekly Sprint */}
                <div className="glass-card rounded-2xl p-8 border border-border/20 hover:border-institutional/30 transition-all duration-500 animate-float">
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-institutional/10 border border-institutional/20 mb-4">
                      <Clock className="w-3 h-3 text-institutional" />
                      <span className="text-xs font-medium text-institutional">Weekly</span>
                    </div>
                    <h3 className="text-xl font-display mb-1">Sprint Support</h3>
                    <p className="text-sm text-foreground/50 mb-4">Urgent, time-bound projects</p>

                    <div className="mb-4">
                      <div className="text-3xl font-display text-institutional mb-1">Custom</div>
                      <p className="text-xs text-foreground/40">Billed weekly • Flexible scope</p>
                    </div>
                  </div>

                  <div className="space-y-2.5 mb-6">
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-institutional shrink-0" />
                      <span>Immediate project start</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-institutional shrink-0" />
                      <span>Daily progress reports</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-institutional shrink-0" />
                      <span>Priority WhatsApp support</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-institutional shrink-0" />
                      <span>Flexible scope adjustments</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-institutional/5 border border-institutional/10 mb-6">
                    <p className="text-xs text-foreground/60">
                      <span className="font-medium text-institutional">Perfect for:</span> Exam season, urgent deadlines
                    </p>
                  </div>

                  <a
                    href="https://wa.me/916388224877?text=Hello%20quickserveit%2C%20I%20need%20weekly%20subscription%20for%20urgent%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border border-institutional hover:bg-institutional hover:text-background"
                  >
                    Discuss Weekly Plan
                  </a>
                </div>

                {/* Monthly Retainer - HIGHLIGHTED */}
                <div className="glass-card rounded-2xl p-8 border-2 border-institutional/50 ring-2 ring-institutional/20 relative overflow-hidden animate-float" style={{ animationDelay: '0.15s' }}>
                  {/* Popular Badge */}
                  <div className="absolute top-0 right-0 bg-gradient-to-br from-institutional to-institutional/80 text-background px-4 py-1.5 text-xs font-bold tracking-wide">
                    MOST POPULAR
                  </div>

                  <div className="mb-6 mt-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-institutional/20 border border-institutional/30 mb-4">
                      <Crown className="w-3 h-3 text-institutional" />
                      <span className="text-xs font-medium text-institutional">Monthly</span>
                    </div>
                    <h3 className="text-xl font-display mb-1">Monthly Retainer</h3>
                    <p className="text-sm text-foreground/50 mb-4">Regular institutional support</p>

                    <div className="mb-4">
                      <div className="flex items-baseline gap-2">
                        <div className="text-3xl font-display text-institutional">Custom</div>
                        <div className="px-2 py-0.5 rounded bg-institutional/20 text-institutional text-xs font-bold">SAVE 20%</div>
                      </div>
                      <p className="text-xs text-foreground/40">Billed monthly • Volume discounts</p>
                    </div>
                  </div>

                  <div className="space-y-2.5 mb-6">
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-institutional shrink-0" />
                      <span className="font-medium">All Weekly benefits</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-institutional shrink-0" />
                      <span>Faster turnaround (48hrs)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-institutional shrink-0" />
                      <span>Dedicated support channel</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-institutional shrink-0" />
                      <span>Unlimited minor tasks</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-institutional shrink-0" />
                      <span>Monthly performance report</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-gradient-to-br from-institutional/15 to-institutional/5 border border-institutional/20 mb-6">
                    <p className="text-xs text-foreground/60">
                      <span className="font-medium text-institutional">Perfect for:</span> Schools with ongoing documentation needs
                    </p>
                  </div>

                  <a
                    href="https://wa.me/916388224877?text=Hello%20quickserveit%2C%20I%20want%20a%20monthly%20retainer%20for%20my%20institution."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] bg-institutional text-background hover:shadow-lg hover:shadow-institutional/30"
                  >
                    Start Monthly Retainer
                  </a>
                </div>

                {/* Annual Partnership */}
                <div className="glass-card rounded-2xl p-8 border border-border/20 hover:border-institutional/30 transition-all duration-500 animate-float" style={{ animationDelay: '0.3s' }}>
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-institutional/10 border border-institutional/20 mb-4">
                      <Award className="w-3 h-3 text-institutional" />
                      <span className="text-xs font-medium text-institutional">Best Value</span>
                    </div>
                    <h3 className="text-xl font-display mb-1">Annual Partnership</h3>
                    <p className="text-sm text-foreground/50 mb-4">Long-term collaboration</p>

                    <div className="mb-4">
                      <div className="flex items-baseline gap-2">
                        <div className="text-3xl font-display text-institutional">Custom</div>
                        <div className="px-2 py-0.5 rounded bg-institutional/20 text-institutional text-xs font-bold">SAVE 30%</div>
                      </div>
                      <p className="text-xs text-foreground/40">Billed annually • Maximum savings</p>
                    </div>
                  </div>

                  <div className="space-y-2.5 mb-6">
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-institutional shrink-0" />
                      <span className="font-medium">All Monthly benefits</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-institutional shrink-0" />
                      <span>30% discounted rates</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-institutional shrink-0" />
                      <span>Annual planning support</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-institutional shrink-0" />
                      <span>Priority scheduling year-round</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-institutional shrink-0" />
                      <span>Dedicated account manager</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-institutional/5 border border-institutional/10 mb-6">
                    <p className="text-xs text-foreground/60">
                      <span className="font-medium text-institutional">Perfect for:</span> Established institutions, year-round needs
                    </p>
                  </div>

                  <a
                    href="https://wa.me/916388224877?text=Hello%20quickserveit%2C%20I%20want%20to%20explore%20annual%20partnership."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border border-institutional hover:bg-institutional hover:text-background"
                  >
                    Explore Partnership
                  </a>
                </div>
              </div>
            </div>

            {/* Social Proof & CTA */}
            <div className="max-w-4xl mx-auto">
              <div className="glass-card rounded-2xl p-8 md:p-10 border border-institutional/20 text-center">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Users className="w-5 h-5 text-institutional" />
                  <p className="text-sm text-institutional font-medium">Trusted by Educational Institutions in Gorakhpur</p>
                </div>

                <blockquote className="text-foreground/70 leading-relaxed mb-8 italic text-lg">
                  "These rates reflect Gorakhpur's local market standards. We believe in fair pricing — you're paying for accuracy, reliability, and your peace of mind, not just keystrokes."
                </blockquote>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="https://wa.me/916388224877?text=Hello%20quickserveit%2C%20I%20need%20custom%20pricing%20details%20for%20my%20institution."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-institutional text-background font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg hover:shadow-institutional/30"
                  >
                    Get Custom Quote Now
                  </a>
                  <p className="text-xs text-foreground/40">
                    💬 Response within 2 hours • No obligation
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // CREATOR MODE - Professional Marketing Design
          <div className="container mx-auto px-6">
            {/* Hero Section */}
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-creator/10 border border-creator/20 mb-6 animate-fade-in">
                <Sparkles className="w-4 h-4 text-creator" />
                <span className="text-xs font-medium text-creator">Flexible Creator Pricing</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display mb-5 animate-fade-in-up">
                Price Your <span className="text-creator">Creative Vision</span>
              </h1>
              <p className="text-foreground/70 text-lg leading-relaxed mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                From single-project sprints to long-term partnerships.<br />
                <span className="text-foreground/50 text-base">Choose what fits your content creation journey.</span>
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-foreground/50 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-creator" />
                  <span>Pro-Grade Quality</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-creator" />
                  <span>Fast Turnaround</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-creator" />
                  <span>Unlimited Revisions*</span>
                </div>
              </div>
            </div>

            {/* Per-Project Pricing */}
            <div className="mb-20">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-creator/5 border border-creator/10 mb-3">
                  <Zap className="w-3.5 h-3.5 text-creator" />
                  <span className="text-xs text-creator">Pay Per Project</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display mb-2">
                  One-Time <span className="text-creator">Projects</span>
                </h2>
                <p className="text-foreground/60 text-sm">
                  Perfect for testing our services or occasional content needs
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {/* Single Video */}
                <div className="glass-card rounded-2xl p-8 border border-border/20 hover:border-creator/40 transition-all duration-500 animate-float group">
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-xl bg-creator/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Video className="w-7 h-7 text-creator" />
                    </div>
                    <h3 className="text-xl font-display mb-1">Single Video</h3>
                    <p className="text-sm text-foreground/50 mb-4">Individual projects</p>

                    <div className="mb-4">
                      <div className="text-3xl font-display text-creator mb-1">From ₹2,500</div>
                      <p className="text-xs text-foreground/40">Per video • Up to 15 min</p>
                    </div>
                  </div>

                  <div className="space-y-2.5 mb-6">
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-creator shrink-0" />
                      <span>Up to 15 min final output</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-creator shrink-0" />
                      <span>2 revision rounds</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-creator shrink-0" />
                      <span>Professional color grading</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-creator shrink-0" />
                      <span>Basic sound design</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-creator/5 border border-creator/10 mb-6">
                    <p className="text-xs text-foreground/60">
                      <span className="font-medium text-creator">Perfect for:</span> Testing quality, one-off content
                    </p>
                  </div>

                  <a
                    href="https://wa.me/916388224877?text=Hello%20quickserveit%2C%20I%20need%20editing%20for%20a%20single%20video%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border border-creator hover:bg-creator hover:text-background"
                  >
                    Get Started
                  </a>
                </div>

                {/* Thumbnail Pack */}
                <div className="glass-card rounded-2xl p-8 border border-border/20 hover:border-creator/40 transition-all duration-500 animate-float group" style={{ animationDelay: '0.15s' }}>
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-xl bg-creator/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Palette className="w-7 h-7 text-creator" />
                    </div>
                    <h3 className="text-xl font-display mb-1">Thumbnail Design</h3>
                    <p className="text-sm text-foreground/50 mb-4">Eye-catching designs</p>

                    <div className="mb-4">
                      <div className="text-3xl font-display text-creator mb-1">₹500/each</div>
                      <p className="text-xs text-foreground/40">Bulk discounts available</p>
                    </div>
                  </div>

                  <div className="space-y-2.5 mb-6">
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-creator shrink-0" />
                      <span>High CTR design strategy</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-creator shrink-0" />
                      <span>2 concept variations</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-creator shrink-0" />
                      <span>YouTube-optimized (1280x720)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-creator shrink-0" />
                      <span>Source files included</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-creator/5 border border-creator/10 mb-6">
                    <p className="text-xs text-foreground/60">
                      <span className="font-medium text-creator">Perfect for:</span> Boosting video clicks & views
                    </p>
                  </div>

                  <a
                    href="https://wa.me/916388224877?text=Hello%20quickserveit%2C%20I%20need%20thumbnail%20design%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border border-creator hover:bg-creator hover:text-background"
                  >
                    Order Thumbnail
                  </a>
                </div>

                {/* Full Production */}
                <div className="glass-card rounded-2xl p-8 border border-border/20 hover:border-creator/40 transition-all duration-500 animate-float group" style={{ animationDelay: '0.3s' }}>
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-xl bg-creator/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="w-7 h-7 text-creator" />
                    </div>
                    <h3 className="text-xl font-display mb-1">Full Production</h3>
                    <p className="text-sm text-foreground/50 mb-4">Premium content</p>

                    <div className="mb-4">
                      <div className="text-3xl font-display text-creator mb-1">Custom</div>
                      <p className="text-xs text-foreground/40">Quote-based pricing</p>
                    </div>
                  </div>

                  <div className="space-y-2.5 mb-6">
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-creator shrink-0" />
                      <span>Scripting support</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-creator shrink-0" />
                      <span>Advanced motion graphics</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-creator shrink-0" />
                      <span>Custom animations & VFX</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-creator shrink-0" />
                      <span>Music licensing help</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-creator shrink-0" />
                      <span>Multiple export formats</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-creator/5 border border-creator/10 mb-6">
                    <p className="text-xs text-foreground/60">
                      <span className="font-medium text-creator">Perfect for:</span> High-production value content
                    </p>
                  </div>

                  <a
                    href="https://wa.me/916388224877?text=Hello%20quickserveit%2C%20I%20need%20full%20production%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border border-creator hover:bg-creator hover:text-background"
                  >
                    Get Custom Quote
                  </a>
                </div>
              </div>
            </div>

            {/* Creator Subscriptions */}
            <div className="mb-16">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-creator/5 border border-creator/10 mb-3">
                  <TrendingUp className="w-3.5 h-3.5 text-creator" />
                  <span className="text-xs text-creator">Save Up to 40%</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display mb-2">
                  <span className="text-creator">Creator</span> Subscription Plans
                </h2>
                <p className="text-foreground/60 text-sm">
                  Consistent content output with better rates and priority support
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {/* Monthly Package */}
                <div className="glass-card rounded-2xl p-8 border border-border/20 hover:border-creator/30 transition-all duration-500 animate-float">
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-creator/10 border border-creator/20 mb-4">
                      <Clock className="w-3 h-3 text-creator" />
                      <span className="text-xs font-medium text-creator">Monthly</span>
                    </div>
                    <h3 className="text-xl font-display mb-1">Content Creator</h3>
                    <p className="text-sm text-foreground/50 mb-4">Regular uploaders</p>

                    <div className="mb-4">
                      <div className="flex items-baseline gap-2">
                        <div className="text-3xl font-display text-creator">Custom</div>
                        <div className="px-2 py-0.5 rounded bg-creator/20 text-creator text-xs font-bold">SAVE 20%</div>
                      </div>
                      <p className="text-xs text-foreground/40">4-8 videos per month</p>
                    </div>
                  </div>

                  <div className="space-y-2.5 mb-6">
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-creator shrink-0" />
                      <span>4-8 videos/month</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-creator shrink-0" />
                      <span>Priority editing queue</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-creator shrink-0" />
                      <span>Thumbnails included</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-creator shrink-0" />
                      <span>Consistent style guide</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-creator shrink-0" />
                      <span>Faster 48hr turnaround</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-creator/5 border border-creator/10 mb-6">
                    <p className="text-xs text-foreground/60">
                      <span className="font-medium text-creator">Perfect for:</span> Weekly uploaders, consistent content
                    </p>
                  </div>

                  <a
                    href="https://wa.me/916388224877?text=Hello%20quickserveit%2C%20I%20want%20a%20monthly%20editing%20package."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border border-creator hover:bg-creator hover:text-background"
                  >
                    Start Monthly Plan
                  </a>
                </div>

                {/* Quarterly Package - HIGHLIGHTED */}
                <div className="glass-card rounded-2xl p-8 border-2 border-creator/50 ring-2 ring-creator/20 relative overflow-hidden animate-float" style={{ animationDelay: '0.15s' }}>
                  {/* Popular Badge */}
                  <div className="absolute top-0 right-0 bg-gradient-to-br from-creator to-creator/80 text-background px-4 py-1.5 text-xs font-bold tracking-wide">
                    BEST VALUE
                  </div>

                  <div className="mb-6 mt-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-creator/20 border border-creator/30 mb-4">
                      <Crown className="w-3 h-3 text-creator" />
                      <span className="text-xs font-medium text-creator">Quarterly</span>
                    </div>
                    <h3 className="text-xl font-display mb-1">Pro Creator</h3>
                    <p className="text-sm text-foreground/50 mb-4">Serious content creators</p>

                    <div className="mb-4">
                      <div className="flex items-baseline gap-2">
                        <div className="text-3xl font-display text-creator">Custom</div>
                        <div className="px-2 py-0.5 rounded bg-creator/20 text-creator text-xs font-bold">SAVE 30%</div>
                      </div>
                      <p className="text-xs text-foreground/40">12-24 videos per quarter</p>
                    </div>
                  </div>

                  <div className="space-y-2.5 mb-6">
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-creator shrink-0" />
                      <span className="font-medium">All Monthly benefits</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-creator shrink-0" />
                      <span>30% discount on all services</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-creator shrink-0" />
                      <span>24hr rush delivery option</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-creator shrink-0" />
                      <span>Dedicated project manager</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-creator shrink-0" />
                      <span>Monthly strategy call</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-gradient-to-br from-creator/15 to-creator/5 border border-creator/20 mb-6">
                    <p className="text-xs text-foreground/60">
                      <span className="font-medium text-creator">Perfect for:</span> Growing channels, consistent uploaders
                    </p>
                  </div>

                  <a
                    href="https://wa.me/916388224877?text=Hello%20quickserveit%2C%20I%20want%20the%20quarterly%20Pro%20Creator%20plan."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] bg-creator text-background hover:shadow-lg hover:shadow-creator/30"
                  >
                    Start Pro Plan
                  </a>
                </div>

                {/* Annual Partnership */}
                <div className="glass-card rounded-2xl p-8 border border-border/20 hover:border-creator/30 transition-all duration-500 animate-float" style={{ animationDelay: '0.3s' }}>
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-creator/10 border border-creator/20 mb-4">
                      <Award className="w-3 h-3 text-creator" />
                      <span className="text-xs font-medium text-creator">Annual</span>
                    </div>
                    <h3 className="text-xl font-display mb-1">Elite Partnership</h3>
                    <p className="text-sm text-foreground/50 mb-4">Full-time creators</p>

                    <div className="mb-4">
                      <div className="flex items-baseline gap-2">
                        <div className="text-3xl font-display text-creator">Custom</div>
                        <div className="px-2 py-0.5 rounded bg-creator/20 text-creator text-xs font-bold">SAVE 40%</div>
                      </div>
                      <p className="text-xs text-foreground/40">Unlimited projects</p>
                    </div>
                  </div>

                  <div className="space-y-2.5 mb-6">
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-creator shrink-0" />
                      <span className="font-medium">All Quarterly benefits</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-creator shrink-0" />
                      <span>40% discount - best rates</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-creator shrink-0" />
                      <span>Unlimited minor edits</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-creator shrink-0" />
                      <span>White-glove service</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-creator shrink-0" />
                      <span>Dedicated editing team</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-creator/5 border border-creator/10 mb-6">
                    <p className="text-xs text-foreground/60">
                      <span className="font-medium text-creator">Perfect for:</span> Established channels, full-time creators
                    </p>
                  </div>

                  <a
                    href="https://wa.me/916388224877?text=Hello%20quickserveit%2C%20I%20want%20to%20discuss%20the%20Elite%20Partnership."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border border-creator hover:bg-creator hover:text-background"
                  >
                    Explore Elite Plan
                  </a>
                </div>
              </div>
            </div>

            {/* Social Proof & CTA */}
            <div className="max-w-4xl mx-auto">
              <div className="glass-card rounded-2xl p-8 md:p-10 border border-creator/20 text-center">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <TrendingUp className="w-5 h-5 text-creator" />
                  <p className="text-sm text-creator font-medium">Trusted by Growing Content Creators</p>
                </div>

                <blockquote className="text-foreground/70 leading-relaxed mb-8 italic text-lg">
                  "Quality editing shouldn't break the bank. Our pricing scales with your growth — from your first video to 100K subscribers."
                </blockquote>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="https://wa.me/916388224877?text=Hello%20quickserveit%2C%20I%20want%20custom%20pricing%20for%20my%20content%20needs."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-creator text-background font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg hover:shadow-creator/30"
                  >
                    Get Custom Quote Now
                  </a>
                  <p className="text-xs text-foreground/40">
                    💬 Free consultation • Portfolio review included
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main >

      <Footer mode={mode} />
    </>
  );
};

export default Pricing;
