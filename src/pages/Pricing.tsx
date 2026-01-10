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
  const { mode, setHasEntered, setCurrentSection } = useMode();
  const navigate = useNavigate();
  const [activeServiceTab, setActiveServiceTab] = useState(0);

  const handleReturn = () => {
    setHasEntered(false);
    setCurrentSection(mode);
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
                <span className="text-institutional">Professional</span> Institutional Pricing
              </h1>
              <p className="text-foreground/70 text-lg leading-relaxed mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Scope-based pricing for serious institutions.<br />
                <span className="text-foreground/50 text-base">Only what is written here is promised and delivered.</span>
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
                          <p className="text-xl font-bold text-institutional">₹20/page</p>
                          <p className="text-xs text-foreground/40">Per page</p>
                        </div>
                      </div>

                      <div className="flex items-start justify-between gap-4 p-4 rounded-lg bg-institutional/5 border border-institutional/10">
                        <div className="flex-1">
                          <p className="font-medium text-foreground mb-1">Hindi Typing</p>
                          <p className="text-sm text-foreground/50">Unicode formatting • Specialized skill</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-institutional">₹25/page</p>
                          <p className="text-xs text-institutional/60">Per page</p>
                        </div>
                      </div>

                      <div className="flex items-start justify-between gap-4 p-4 rounded-lg bg-institutional/5 border border-institutional/10">
                        <div className="flex-1">
                          <p className="font-medium text-foreground mb-1">Maths / Science</p>
                          <p className="text-sm text-foreground/50">Formulas, diagrams, equations</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-institutional">₹30/page</p>
                          <p className="text-xs text-institutional/60">Per page</p>
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

                    <button
                      onClick={() => navigate('/contact')}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-medium text-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] bg-institutional text-background hover:shadow-lg hover:shadow-institutional/30"
                    >
                      Get Instant Quote
                    </button>
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
                          <p className="font-medium text-foreground mb-1">UDISE+ Existing Student</p>
                          <p className="text-sm text-foreground/50">2026-27 session update</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-institutional">₹10/student</p>
                          <p className="text-xs text-foreground/40">Per student</p>
                        </div>
                      </div>

                      <div className="flex items-start justify-between gap-4 p-4 rounded-lg bg-institutional/5 border border-institutional/10">
                        <div className="flex-1">
                          <p className="font-medium text-foreground mb-1">UDISE+ New Student</p>
                          <p className="text-sm text-foreground/50">Complete account creation • Validation</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-institutional">₹15/student</p>
                          <p className="text-xs text-institutional/60">Per student</p>
                        </div>
                      </div>

                      <div className="flex items-start justify-between gap-4 p-4 rounded-lg bg-institutional/5 border border-institutional/10">
                        <div className="flex-1">
                          <p className="font-medium text-foreground mb-1">Scholarship Verification</p>
                          <p className="text-sm text-foreground/50">Portal + Biometric + DSC forwarding</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-institutional">₹30-₹50</p>
                          <p className="text-xs text-foreground/40">Per student</p>
                        </div>
                      </div>

                      <div className="flex items-start justify-between gap-4 p-4 rounded-lg bg-institutional/5 border border-institutional/10">
                        <div className="flex-1">
                          <p className="font-medium text-foreground mb-1">Daily Tech Support</p>
                          <p className="text-sm text-foreground/50">Micro to heavy tasks • Full working day</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-institutional">₹99-₹499</p>
                          <p className="text-xs text-foreground/40">Based on scope</p>
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

                    <button
                      onClick={() => navigate('/contact')}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-medium text-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] bg-institutional text-background hover:shadow-lg hover:shadow-institutional/30"
                    >
                      Get Instant Quote
                    </button>
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
                              <p className="text-foreground mb-1 font-medium">Small Tasks: 100% Advance</p>
                              <p className="text-sm text-foreground/60">Full payment before starting</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-institutional mt-0.5 shrink-0" />
                            <div>
                              <p className="text-foreground mb-1 font-medium">Large Work: 50% Advance</p>
                              <p className="text-sm text-foreground/60">Work starts only after confirmation</p>
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
                              <p className="text-foreground mb-1 font-medium">Minor Corrections Included</p>
                              <p className="text-sm text-foreground/60">Within agreed scope</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-institutional mt-0.5 shrink-0" />
                            <div>
                              <p className="text-foreground mb-1 font-medium">New Ideas Charged Separately</p>
                              <p className="text-sm text-foreground/60">Late changes outside original scope</p>
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

                    <button
                      onClick={() => navigate('/contact')}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-medium text-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] bg-institutional text-background hover:shadow-lg hover:shadow-institutional/30"
                    >
                      Contact Us
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Subscription Models */}
            <div className="mb-16">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-institutional/5 border border-institutional/10 mb-3">
                  <TrendingUp className="w-3.5 h-3.5 text-institutional" />
                  <span className="text-xs text-institutional">Save Up to 17%</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display mb-2">
                  <span className="text-institutional">Subscription</span> Plans
                </h2>
                <p className="text-foreground/60 text-sm">
                  Regular UDISE+ & scholarship support — better rates, priority service
                </p>
                <p className="text-foreground/40 text-xs mt-2">
                  📄 Paper typing always billed separately at standard rates
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {/* Monthly Plan */}
                <div className="glass-card rounded-2xl p-8 border border-border/20 hover:border-institutional/30 transition-all duration-500 animate-float">
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-institutional/10 border border-institutional/20 mb-4">
                      <Clock className="w-3 h-3 text-institutional" />
                      <span className="text-xs font-medium text-institutional">Monthly</span>
                    </div>
                    <h3 className="text-xl font-display mb-1">Basic Support</h3>
                    <p className="text-sm text-foreground/50 mb-4">Month-to-month flexibility</p>

                    <div className="mb-4">
                      <div className="text-3xl font-display text-institutional mb-1">₹2,999</div>
                      <p className="text-xs text-foreground/40">Per month • No commitment</p>
                    </div>
                  </div>

                  <div className="space-y-2.5 mb-6">
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-institutional shrink-0" />
                      <span>UDISE+ support included</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-institutional shrink-0" />
                      <span>Scholarship processing</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-institutional shrink-0" />
                      <span>Priority WhatsApp support</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-institutional shrink-0" />
                      <span>48hr turnaround</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-institutional/5 border border-institutional/10 mb-4">
                    <p className="text-xs font-medium text-institutional mb-2">Included:</p>
                    <p className="text-xs text-foreground/60">Up to 100 UDISE+ entries/month, scholarship support</p>
                  </div>

                  <div className="p-3 rounded-lg bg-background/50 border border-border/20 mb-6">
                    <p className="text-xs font-medium text-foreground/70 mb-1">Billed Separately:</p>
                    <p className="text-xs text-foreground/50">Paper typing (₹20-₹30/page)</p>
                  </div>

                  <button
                    onClick={() => navigate('/contact')}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border border-institutional hover:bg-institutional hover:text-background"
                  >
                    Start Monthly Plan
                  </button>
                </div>

                {/* 6-Month Plan - HIGHLIGHTED */}
                <div className="glass-card rounded-2xl p-8 border-2 border-institutional/50 ring-2 ring-institutional/20 relative overflow-hidden animate-float" style={{ animationDelay: '0.15s' }}>
                  {/* Popular Badge */}
                  <div className="absolute top-0 right-0 bg-gradient-to-br from-institutional to-institutional/80 text-background px-4 py-1.5 text-xs font-bold tracking-wide">
                    MOST POPULAR
                  </div>

                  <div className="mb-6 mt-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-institutional/20 border border-institutional/30 mb-4">
                      <Crown className="w-3 h-3 text-institutional" />
                      <span className="text-xs font-medium text-institutional">6 Months</span>
                    </div>
                    <h3 className="text-xl font-display mb-1">Premium Support</h3>
                    <p className="text-sm text-foreground/50 mb-4">Best value for schools</p>

                    <div className="mb-4">
                      <div className="flex items-baseline gap-2">
                        <div className="text-3xl font-display text-institutional">₹15,999</div>
                        <div className="px-2 py-0.5 rounded bg-institutional/20 text-institutional text-xs font-bold">SAVE 11%</div>
                      </div>
                      <p className="text-xs text-foreground/40">₹2,666/month • Save ₹2,000</p>
                      <p className="text-xs text-foreground/30 line-through mt-0.5">Regular: ₹17,994</p>
                    </div>
                  </div>

                  <div className="space-y-2.5 mb-6">
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-institutional shrink-0" />
                      <span className="font-medium">All Monthly benefits</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-institutional shrink-0" />
                      <span>24hr priority turnaround</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-institutional shrink-0" />
                      <span>Dedicated support channel</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-institutional shrink-0" />
                      <span>Quarterly review calls</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-gradient-to-br from-institutional/15 to-institutional/5 border border-institutional/20 mb-4">
                    <p className="text-xs font-medium text-institutional mb-2">Included:</p>
                    <p className="text-xs text-foreground/60">Up to 150 UDISE+ entries/month, priority scholarship processing</p>
                  </div>

                  <div className="p-3 rounded-lg bg-background/50 border border-border/20 mb-6">
                    <p className="text-xs font-medium text-foreground/70 mb-1">Billed Separately:</p>
                    <p className="text-xs text-foreground/50">Paper typing (₹20-₹30/page)</p>
                  </div>

                  <button
                    onClick={() => navigate('/contact')}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] bg-institutional text-background hover:shadow-lg hover:shadow-institutional/30"
                  >
                    Start 6-Month Plan
                  </button>
                </div>

                {/* Annual Plan */}
                <div className="glass-card rounded-2xl p-8 border border-border/20 hover:border-institutional/30 transition-all duration-500 animate-float" style={{ animationDelay: '0.3s' }}>
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-institutional/10 border border-institutional/20 mb-4">
                      <Award className="w-3 h-3 text-institutional" />
                      <span className="text-xs font-medium text-institutional">Best Value</span>
                    </div>
                    <h3 className="text-xl font-display mb-1">Annual Partnership</h3>
                    <p className="text-sm text-foreground/50 mb-4">Maximum savings</p>

                    <div className="mb-4">
                      <div className="flex items-baseline gap-2">
                        <div className="text-3xl font-display text-institutional">₹29,999</div>
                        <div className="px-2 py-0.5 rounded bg-institutional/20 text-institutional text-xs font-bold">SAVE 17%</div>
                      </div>
                      <p className="text-xs text-foreground/40">₹2,499/month • Save ₹6,000</p>
                      <p className="text-xs text-foreground/30 line-through mt-0.5">Regular: ₹35,988</p>
                    </div>
                  </div>

                  <div className="space-y-2.5 mb-6">
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-institutional shrink-0" />
                      <span className="font-medium">All 6-Month benefits</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-institutional shrink-0" />
                      <span>12hr rush support available</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-institutional shrink-0" />
                      <span>Dedicated account manager</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-institutional shrink-0" />
                      <span>Annual planning support</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-institutional/5 border border-institutional/10 mb-4">
                    <p className="text-xs font-medium text-institutional mb-2">Included:</p>
                    <p className="text-xs text-foreground/60">Up to 200 UDISE+ entries/month, VIP scholarship processing</p>
                  </div>

                  <div className="p-3 rounded-lg bg-background/50 border border-border/20 mb-6">
                    <p className="text-xs font-medium text-foreground/70 mb-1">Billed Separately:</p>
                    <p className="text-xs text-foreground/50">Paper typing (₹20-₹30/page)</p>
                  </div>

                  <button
                    onClick={() => navigate('/contact')}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border border-institutional hover:bg-institutional hover:text-background"
                  >
                    Start Annual Plan
                  </button>
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
                  "This pricing is designed for serious institutions. All work is scope-based, clearly defined, and executed professionally. Only what is written here is promised and delivered."
                </blockquote>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    onClick={() => navigate('/contact')}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-institutional text-background font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg hover:shadow-institutional/30"
                  >
                    Get Custom Quote Now
                  </button>
                  <p className="text-xs text-foreground/40">
                    💬 Response within 2 hours • No obligation
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // CREATOR MODE - Tab-Based Service Pricing
          <div className="container mx-auto px-6">
            {/* Hero Section */}
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-creator/10 border border-creator/20 mb-6 animate-fade-in">
                <Sparkles className="w-4 h-4 text-creator" />
                <span className="text-xs font-medium text-creator">Flexible Creator Pricing</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display mb-5 animate-fade-in-up">
                Premium <span className="text-creator">Creator Services</span>
              </h1>
              <p className="text-foreground/70 text-lg leading-relaxed mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Professional production for serious creators.<br />
                <span className="text-foreground/50 text-base">Clearly defined scope. Professionally executed. Responsibly delivered.</span>
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-foreground/50 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-creator" />
                  <span>1080p Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-creator" />
                  <span>Platform-Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-creator" />
                  <span>Clear Scope</span>
                </div>
              </div>
            </div>

            {/* Service-Based Pricing */}
            <div className="mb-20">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-creator/5 border border-creator/10 mb-3">
                  <Zap className="w-3.5 h-3.5 text-creator" />
                  <span className="text-xs text-creator">Pay Per Project</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display mb-2">
                  Service-Based <span className="text-creator">Pricing</span>
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
                    ? 'bg-creator text-background shadow-lg shadow-creator/30'
                    : 'glass-card border border-border/20 hover:border-creator/40 text-foreground/70 hover:text-foreground'
                    }`}
                >
                  <Video className="w-4 h-4" />
                  <span>Video Production</span>
                </button>
                <button
                  onClick={() => setActiveServiceTab(1)}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-300 ${activeServiceTab === 1
                    ? 'bg-creator text-background shadow-lg shadow-creator/30'
                    : 'glass-card border border-border/20 hover:border-creator/40 text-foreground/70 hover:text-foreground'
                    }`}
                >
                  <Zap className="w-4 h-4" />
                  <span>Short-Form Content</span>
                </button>
                <button
                  onClick={() => setActiveServiceTab(2)}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-300 ${activeServiceTab === 2
                    ? 'bg-creator text-background shadow-lg shadow-creator/30'
                    : 'glass-card border border-border/20 hover:border-creator/40 text-foreground/70 hover:text-foreground'
                    }`}
                >
                  <Palette className="w-4 h-4" />
                  <span>Design Services</span>
                </button>
                <button
                  onClick={() => setActiveServiceTab(3)}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-300 ${activeServiceTab === 3
                    ? 'bg-creator text-background shadow-lg shadow-creator/30'
                    : 'glass-card border border-border/20 hover:border-creator/40 text-foreground/70 hover:text-foreground'
                    }`}
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Terms & Workflow</span>
                </button>
              </div>

              {/* Tab Content */}
              <div className="max-w-7xl mx-auto">
                {/* Video Production */}
                {activeServiceTab === 0 && (
                  <div className="animate-fade-in">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                      {/* Starter */}
                      <div className="glass-card rounded-2xl p-8 border border-creator/30">
                        <div className="w-14 h-14 rounded-xl bg-creator/10 flex items-center justify-center mb-4">
                          <Video className="w-7 h-7 text-creator" />
                        </div>
                        <h3 className="text-xl font-display text-creator mb-1">Starter</h3>
                        <p className="text-sm text-foreground/50 mb-4">Simple editing</p>

                        <div className="mb-6">
                          <div className="text-3xl font-display text-creator mb-1">₹999</div>
                          <p className="text-xs text-foreground/40">Per video</p>
                        </div>

                        <div className="space-y-2.5 mb-6">
                          <div className="flex items-center gap-2 text-sm text-foreground/70">
                            <CheckCircle className="w-4 h-4 text-creator shrink-0" />
                            <span>Clean cuts</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-foreground/70">
                            <CheckCircle className="w-4 h-4 text-creator shrink-0" />
                            <span>Basic color correction</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-foreground/70">
                            <CheckCircle className="w-4 h-4 text-creator shrink-0" />
                            <span>Smooth flow</span>
                          </div>
                        </div>

                        <div className="p-3 rounded-lg bg-creator/5 border border-creator/10 mb-6">
                          <p className="text-xs text-foreground/60">
                            <span className="font-medium text-creator">Simple:</span> Clean, professional basics
                          </p>
                        </div>

                        <button
                          onClick={() => navigate('/contact')}
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border border-creator hover:bg-creator hover:text-background"
                        >
                          Get Started
                        </button>
                      </div>

                      {/* Growth */}
                      <div className="glass-card rounded-2xl p-8 border border-creator/30">
                        <div className="w-14 h-14 rounded-xl bg-creator/10 flex items-center justify-center mb-4">
                          <TrendingUp className="w-7 h-7 text-creator" />
                        </div>
                        <h3 className="text-xl font-display text-creator mb-1">Growth</h3>
                        <p className="text-sm text-foreground/50 mb-4">Simple editing</p>

                        <div className="mb-6">
                          <div className="text-3xl font-display text-creator mb-1">₹1,999</div>
                          <p className="text-xs text-foreground/40">Per video</p>
                        </div>

                        <div className="space-y-2.5 mb-6">
                          <div className="flex items-center gap-2 text-sm text-foreground/70">
                            <CheckCircle className="w-4 h-4 text-creator shrink-0" />
                            <span>Better pacing</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-foreground/70">
                            <CheckCircle className="w-4 h-4 text-creator shrink-0" />
                            <span>Structured storytelling</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-foreground/70">
                            <CheckCircle className="w-4 h-4 text-creator shrink-0" />
                            <span>Enhanced flow</span>
                          </div>
                        </div>

                        <div className="p-3 rounded-lg bg-creator/5 border border-creator/10 mb-6">
                          <p className="text-xs text-foreground/60">
                            <span className="font-medium text-creator">Simple:</span> Narrative-focused
                          </p>
                        </div>

                        <button
                          onClick={() => navigate('/contact')}
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border border-creator hover:bg-creator hover:text-background"
                        >
                          Get Started
                        </button>
                      </div>

                      {/* Authority */}
                      <div className="glass-card rounded-2xl p-8 border border-creator/30">
                        <div className="w-14 h-14 rounded-xl bg-creator/10 flex items-center justify-center mb-4">
                          <Crown className="w-7 h-7 text-creator" />
                        </div>
                        <h3 className="text-xl font-display text-creator mb-1">Authority</h3>
                        <p className="text-sm text-foreground/50 mb-4">Complex editing</p>

                        <div className="mb-6">
                          <div className="text-3xl font-display text-creator mb-1">₹2,999</div>
                          <p className="text-xs text-foreground/40">Per video</p>
                        </div>

                        <div className="space-y-2.5 mb-6">
                          <div className="flex items-center gap-2 text-sm text-foreground/70">
                            <CheckCircle className="w-4 h-4 text-creator shrink-0" />
                            <span>Advanced color grading</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-foreground/70">
                            <CheckCircle className="w-4 h-4 text-creator shrink-0" />
                            <span>Motion graphics</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-foreground/70">
                            <CheckCircle className="w-4 h-4 text-creator shrink-0" />
                            <span>VFX elements</span>
                          </div>
                        </div>

                        <div className="p-3 rounded-lg bg-creator/5 border border-creator/10 mb-6">
                          <p className="text-xs text-foreground/60">
                            <span className="font-medium text-creator">Complex:</span> Premium production
                          </p>
                        </div>

                        <button
                          onClick={() => navigate('/contact')}
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border border-creator hover:bg-creator hover:text-background"
                        >
                          Get Started
                        </button>
                      </div>

                      {/* Series Plan */}
                      <div className="glass-card rounded-2xl p-8 border border-creator/30">
                        <div className="w-14 h-14 rounded-xl bg-creator/10 flex items-center justify-center mb-4">
                          <Sparkles className="w-7 h-7 text-creator" />
                        </div>
                        <h3 className="text-xl font-display text-creator mb-1">Series Plan</h3>
                        <p className="text-sm text-foreground/50 mb-4">Multi-video</p>

                        <div className="mb-6">
                          <div className="text-3xl font-display text-creator mb-1">₹4,999</div>
                          <p className="text-xs text-foreground/40">Per series</p>
                        </div>

                        <div className="space-y-2.5 mb-6">
                          <div className="flex items-center gap-2 text-sm text-foreground/70">
                            <CheckCircle className="w-4 h-4 text-creator shrink-0" />
                            <span>Consistent episodic</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-foreground/70">
                            <CheckCircle className="w-4 h-4 text-creator shrink-0" />
                            <span>Long-form production</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-foreground/70">
                            <CheckCircle className="w-4 h-4 text-creator shrink-0" />
                            <span>Series branding</span>
                          </div>
                        </div>

                        <div className="p-3 rounded-lg bg-creator/5 border border-creator/10 mb-6">
                          <p className="text-xs text-foreground/60">
                            <span className="font-medium text-creator">Complex:</span> Multi-episode series
                          </p>
                        </div>

                        <button
                          onClick={() => navigate('/contact')}
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border border-creator hover:bg-creator hover:text-background"
                        >
                          Get Started
                        </button>
                      </div>
                    </div>

                    <div className="p-5 rounded-lg bg-gradient-to-br from-creator/10 to-creator/5 border border-creator/20 max-w-3xl mx-auto">
                      <div className="flex items-start gap-3 mb-3">
                        <Star className="w-5 h-5 text-creator mt-0.5" />
                        <p className="font-medium text-creator">Long-Form Excellence</p>
                      </div>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        Professional 1080p delivery with cinematic color grading. All packages include platform-ready formatting and up to 2 rounds of revisions within agreed scope.
                      </p>
                    </div>
                  </div>
                )}

                {/* Short-Form Content */}
                {activeServiceTab === 1 && (
                  <div className="glass-card rounded-2xl p-8 md:p-10 border border-creator/30 animate-fade-in max-w-3xl mx-auto">
                    <div className="flex items-start gap-6 mb-8">
                      <div className="w-16 h-16 rounded-xl bg-creator/10 flex items-center justify-center shrink-0">
                        <Zap className="w-8 h-8 text-creator" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-display text-creator mb-2">
                          Viral Shorts
                        </h3>
                        <p className="text-foreground/60 leading-relaxed">
                          Algorithm-optimized short-form content for maximum engagement
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-start justify-between gap-4 p-4 rounded-lg bg-creator/5 border border-creator/10">
                        <div className="flex-1">
                          <p className="font-medium text-foreground mb-1">Standard Shorts</p>
                          <p className="text-sm text-foreground/50">Clean edits • Trending audio • Quick delivery</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-creator">₹499</p>
                          <p className="text-xs text-foreground/40">Per short</p>
                        </div>
                      </div>

                      <div className="flex items-start justify-between gap-4 p-4 rounded-lg bg-creator/5 border border-creator/10">
                        <div className="flex-1">
                          <p className="font-medium text-foreground mb-1">Premium Shorts</p>
                          <p className="text-sm text-foreground/50">Advanced effects • Custom graphics • Priority queue</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-creator">₹999</p>
                          <p className="text-xs text-creator/60">Per short</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 rounded-lg bg-gradient-to-br from-creator/10 to-creator/5 border border-creator/20 mb-6">
                      <div className="flex items-start gap-3 mb-3">
                        <Star className="w-5 h-5 text-creator mt-0.5" />
                        <p className="font-medium text-creator">Platform-Ready</p>
                      </div>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        Optimized for Instagram Reels, YouTube Shorts, and TikTok. Includes trending audio selection, hook optimization, and platform-specific formatting.
                      </p>
                    </div>

                    <button
                      onClick={() => navigate('/contact')}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-medium text-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] bg-creator text-background hover:shadow-lg hover:shadow-creator/30"
                    >
                      Get Instant Quote
                    </button>
                  </div>
                )}

                {/* Design Services */}
                {activeServiceTab === 2 && (
                  <div className="animate-fade-in">
                    <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-5xl mx-auto">
                      {/* Motion Graphics & VFX */}
                      <div className="glass-card rounded-2xl p-8 border border-creator/30">
                        <div className="w-16 h-16 rounded-xl bg-creator/10 flex items-center justify-center mb-4">
                          <Sparkles className="w-8 h-8 text-creator" />
                        </div>
                        <h3 className="text-2xl font-display text-creator mb-2">
                          Motion Graphics & VFX
                        </h3>
                        <p className="text-foreground/60 mb-6">2.5D Animation & Visual Effects</p>

                        <div className="space-y-3 mb-6">
                          <div className="flex items-start justify-between gap-4 p-3 rounded-lg bg-creator/5 border border-creator/10">
                            <div className="flex-1">
                              <p className="font-medium text-foreground mb-1">Basic Motion</p>
                              <p className="text-xs text-foreground/50">Simple animations</p>
                            </div>
                            <div className="text-right">
                              <p className="text-lg font-bold text-creator">₹699</p>
                            </div>
                          </div>

                          <div className="flex items-start justify-between gap-4 p-3 rounded-lg bg-creator/5 border border-creator/10">
                            <div className="flex-1">
                              <p className="font-medium text-foreground mb-1">Advanced VFX</p>
                              <p className="text-xs text-foreground/50">Complex effects</p>
                            </div>
                            <div className="text-right">
                              <p className="text-lg font-bold text-creator">₹1,999</p>
                            </div>
                          </div>

                          <div className="flex items-start justify-between gap-4 p-3 rounded-lg bg-creator/5 border border-creator/10">
                            <div className="flex-1">
                              <p className="font-medium text-foreground mb-1">Pro VFX</p>
                              <p className="text-xs text-foreground/50">Premium production</p>
                            </div>
                            <div className="text-right">
                              <p className="text-lg font-bold text-creator">₹2,699</p>
                            </div>
                          </div>
                        </div>

                        <div className="p-3 rounded-lg bg-creator/5 border border-creator/10 mb-6">
                          <p className="text-xs text-foreground/60">
                            <span className="font-medium text-creator">Perfect for:</span> Intros, transitions, lower thirds, effects
                          </p>
                        </div>

                        <button
                          onClick={() => navigate('/contact')}
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border border-creator hover:bg-creator hover:text-background"
                        >
                          Get Started
                        </button>
                      </div>

                      {/* Thumbnails */}
                      <div className="glass-card rounded-2xl p-8 border border-creator/30">
                        <div className="w-16 h-16 rounded-xl bg-creator/10 flex items-center justify-center mb-4">
                          <Palette className="w-8 h-8 text-creator" />
                        </div>
                        <h3 className="text-2xl font-display text-creator mb-2">
                          Thumbnails & Script Writing
                        </h3>
                        <p className="text-foreground/60 mb-6">High-CTR design + engaging scripts</p>

                        <div className="space-y-3 mb-6">
                          <div className="flex items-start justify-between gap-4 p-3 rounded-lg bg-creator/5 border border-creator/10">
                            <div className="flex-1">
                              <p className="font-medium text-foreground mb-1">Thumbnail Only</p>
                              <p className="text-xs text-foreground/50">Design only</p>
                            </div>
                            <div className="text-right">
                              <p className="text-lg font-bold text-creator">₹299</p>
                            </div>
                          </div>

                          <div className="flex items-start justify-between gap-4 p-3 rounded-lg bg-creator/5 border border-creator/10">
                            <div className="flex-1">
                              <p className="font-medium text-foreground mb-1">With Strategy + Script</p>
                              <p className="text-xs text-foreground/50">Design + script writing + consultation</p>
                            </div>
                            <div className="text-right">
                              <p className="text-lg font-bold text-creator">₹699</p>
                            </div>
                          </div>
                        </div>

                        <div className="p-3 rounded-lg bg-creator/5 border border-creator/10 mb-6">
                          <p className="text-xs text-foreground/60">
                            <span className="font-medium text-creator">Includes:</span> Script writing, A/B testing guidance, publishing direction
                          </p>
                        </div>

                        <button
                          onClick={() => navigate('/contact')}
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border border-creator hover:bg-creator hover:text-background"
                        >
                          Get Started
                        </button>
                      </div>
                    </div>

                    <div className="p-5 rounded-lg bg-gradient-to-br from-creator/10 to-creator/5 border border-creator/20 max-w-3xl mx-auto">
                      <div className="flex items-start gap-3 mb-3">
                        <Award className="w-5 h-5 text-creator mt-0.5" />
                        <p className="font-medium text-creator">Design Excellence</p>
                      </div>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        Professional design services to elevate your content. All deliverables include source files and up to 2 rounds of revisions within agreed scope.
                      </p>
                    </div>
                  </div>
                )}

                {/* Terms & Workflow */}
                {activeServiceTab === 3 && (
                  <div className="glass-card rounded-2xl p-8 md:p-10 border border-creator/30 animate-fade-in max-w-3xl mx-auto">
                    <div className="flex items-start gap-6 mb-8">
                      <div className="w-16 h-16 rounded-xl bg-creator/10 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-8 h-8 text-creator" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-display text-creator mb-2">
                          Terms & Workflow
                        </h3>
                        <p className="text-foreground/60 leading-relaxed">
                          Clear terms for smooth collaboration
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6 mb-8">
                      <div className="p-5 rounded-lg bg-creator/5 border border-creator/10">
                        <p className="font-medium text-foreground mb-4 text-lg">Payment Terms</p>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-creator mt-0.5 shrink-0" />
                            <div>
                              <p className="text-foreground mb-1 font-medium">Small Projects: 100% Advance</p>
                              <p className="text-sm text-foreground/60">Full payment before starting</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-creator mt-0.5 shrink-0" />
                            <div>
                              <p className="text-foreground mb-1 font-medium">Large Projects: 50% Advance</p>
                              <p className="text-sm text-foreground/60">Work starts after confirmation</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-5 rounded-lg bg-creator/5 border border-creator/10">
                        <p className="font-medium text-foreground mb-4 text-lg">Revision Policy</p>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-creator mt-0.5 shrink-0" />
                            <div>
                              <p className="text-foreground mb-1 font-medium">Up to 2 Rounds of Revisions</p>
                              <p className="text-sm text-foreground/60">Within agreed scope only</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-creator mt-0.5 shrink-0" />
                            <div>
                              <p className="text-foreground mb-1 font-medium">Major Changes Charged Separately</p>
                              <p className="text-sm text-foreground/60">Late changes outside original scope</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-5 rounded-lg bg-creator/5 border border-creator/10">
                        <p className="font-medium text-foreground mb-3 text-lg">Delivery Timeline</p>
                        <p className="text-foreground/70 leading-relaxed">
                          <span className="font-medium text-creator">Standard:</span> 3-5 business days for most projects. Rush delivery available for subscription clients at no extra cost.
                        </p>
                      </div>
                    </div>

                    <div className="p-5 rounded-lg bg-gradient-to-br from-creator/10 to-creator/5 border border-creator/20 mb-6">
                      <div className="flex items-start gap-3 mb-3">
                        <ShieldCheck className="w-5 h-5 text-creator mt-0.5" />
                        <p className="font-medium text-creator">Professional Partnership</p>
                      </div>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        Built on mutual respect and transparency. Our terms protect both parties and ensure smooth collaboration. No hidden clauses, no surprises.
                      </p>
                    </div>

                    <button
                      onClick={() => navigate('/contact')}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-medium text-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] bg-creator text-background hover:shadow-lg hover:shadow-creator/30"
                    >
                      Contact Us
                    </button>
                  </div>
                )}
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

                  <button
                    onClick={() => navigate('/contact')}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border border-creator hover:bg-creator hover:text-background"
                  >
                    Start Monthly Plan
                  </button>
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

                  <button
                    onClick={() => navigate('/contact')}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] bg-creator text-background hover:shadow-lg hover:shadow-creator/30"
                  >
                    Start Pro Plan
                  </button>
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
                      <p className="text-xs text-foreground/40">Up to 50 projects/year</p>
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
                      <span>Up to 3 revision rounds per project</span>
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

                  <button
                    onClick={() => navigate('/contact')}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border border-creator hover:bg-creator hover:text-background"
                  >
                    Explore Elite Plan
                  </button>
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
                  "This pricing is designed for serious creators and institutions. All work is scope-based, clearly defined, and executed professionally. Only what is written here is promised and delivered."
                </blockquote>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    onClick={() => navigate('/contact')}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-creator text-background font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg hover:shadow-creator/30"
                  >
                    Get Custom Quote Now
                  </button>
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
