import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';
import { Shield, Target, Users, Zap, Eye, Clock, Quote, ArrowRight, School, Building2, GraduationCap, BookOpen, Video, Palette, Mic, TrendingUp } from 'lucide-react';
import { H1, H2 } from '@/components/Typography';

const About = () => {
  const { mode, setHasEntered, setCurrentSection } = useMode();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleReturn = () => {
    setHasEntered(false);
    setCurrentSection(mode);
    navigate('/');
  };

  return (
    <>
      <Helmet>
        <title>{t('aboutPageTitle')} | {t('brandName')}</title>
        <meta name="description" content={t('aboutIntro')} />
      </Helmet>

      <CursorLight mode={mode} />
      <FilmGrain />

      <FloatingNavbar
        mode={mode}
        onReturn={handleReturn}
        isVisible={true}
      />

      <main className="min-h-screen bg-background pt-32 sm:pt-36 md:pt-40 pb-12 sm:pb-16 md:pb-20 relative">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          {/* Header */}
          <div className="min-h-[50vh] flex flex-col justify-center text-center mb-12 sm:mb-14 md:mb-16 max-w-3xl mx-auto">
            <h1 className="page-title mb-4 sm:mb-5 md:mb-6 animate-fade-in">
              About <span className={mode === 'institutional' ? 'text-institutional' : 'text-creator'}>Us</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-foreground/60 leading-relaxed px-4 text-balance max-w-[60ch] mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
              {t('aboutIntro')}
            </p>
          </div>

          {/* Philosophy Section */}
          <section className="max-w-3xl mx-auto mb-12 sm:mb-14 md:mb-16">
            <H2 className="mb-6 sm:mb-7 md:mb-8 text-center">{t('ourPhilosophy')}</H2>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              <PhilosophyCard
                icon={Shield}
                title={t('confidentialityTitle')}
                description={t('confidentialityDesc')}
                mode={mode}
              />
              <PhilosophyCard
                icon={Clock}
                title={t('realisticTimelinesTitle')}
                description={t('realisticTimelinesDesc')}
                mode={mode}
              />
              <PhilosophyCard
                icon={Eye}
                title={t('calmCommTitle')}
                description={t('calmCommDesc')}
                mode={mode}
              />
              <PhilosophyCard
                icon={Target}
                title={t('focusedExpertiseTitle')}
                description={t('focusedExpertiseDesc')}
                mode={mode}
              />
            </div>
          </section>

          {/* Founder's Message Teaser */}
          <section className="max-w-3xl mx-auto mb-12 sm:mb-14 md:mb-16">
            <Link
              to="/founder"
              className={`
                block p-8 rounded-2xl glass-card border transition-all duration-300
                ${mode === 'institutional'
                  ? 'border-institutional/20 hover:border-institutional/40 hover:bg-institutional/5'
                  : 'border-creator/20 hover:border-creator/40 hover:bg-creator/5'
                }
                group
              `}
            >
              <div className="flex items-start gap-4 mb-6">
                <Quote className={`w-8 h-8 flex-shrink-0 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                <div className="flex-1">
                  <h2 className="text-2xl font-display mb-2">{t('aNoteFromFounder')} {t('theFounder')}</h2>
                  <p className="text-foreground/50 text-sm">{t('theStoryBehindQuickserve')}</p>
                </div>
                <ArrowRight className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
              </div>

              <blockquote className="text-lg italic text-foreground/70 leading-relaxed border-l-2 pl-6 mb-4" style={{ borderColor: mode === 'institutional' ? 'rgba(234,179,8,0.3)' : 'rgba(34,211,238,0.3)' }}>
                {t('founderOpeningQuote')}
              </blockquote>

              <p className={`text-sm font-medium ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>
                {t('aboutTheFounder')} →
              </p>
            </Link>
          </section>

          {/* Who We Serve - Mode Specific */}
          <section className="max-w-3xl mx-auto mb-12 sm:mb-14 md:mb-16">
            <H2 className="mb-6 sm:mb-7 md:mb-8 text-center">{t('whoWeServe')}</H2>
            <div className="max-w-2xl mx-auto">
              {mode === 'institutional' ? (
                <div className="p-8 rounded-2xl glass-card border border-institutional/30">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-institutional/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-institutional" />
                    </div>
                    <h3 className="text-xl font-medium">{t('institutions')}</h3>
                  </div>
                  <ul className="space-y-3 text-foreground/60">
                    {t('institutionsList').split('|').map((item, i) => {
                      const icons = [School, Building2, GraduationCap, BookOpen];
                      const IconComponent = icons[i % icons.length];
                      return (
                        <li key={i} className="flex items-start gap-3">
                          <div className="bg-white/5 p-2 rounded-full shrink-0">
                            <IconComponent className="w-4 h-4 text-institutional" />
                          </div>
                          <span>{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : (
                <div className="p-8 rounded-2xl glass-card border border-creator/30">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-creator/10 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-creator" />
                    </div>
                    <h3 className="text-xl font-medium">{t('creators')}</h3>
                  </div>
                  <ul className="space-y-3 text-foreground/60">
                    {t('creatorsList').split('|').map((item, i) => {
                      const icons = [Video, Palette, Mic, TrendingUp];
                      const IconComponent = icons[i % icons.length];
                      return (
                        <li key={i} className="flex items-start gap-3">
                          <div className="bg-white/5 p-2 rounded-full shrink-0">
                            <IconComponent className="w-4 h-4 text-creator" />
                          </div>
                          <span>{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </section>

          {/* What We Don't Do */}
          <section className="max-w-3xl mx-auto mb-12 sm:mb-14 md:mb-16">
            <H2 className="mb-6 sm:mb-7 md:mb-8 text-center">{t('whatWeDontDo')}</H2>
            <div className="p-8 rounded-2xl glass-card border border-border/20">
              <p className="text-foreground/60 mb-6">
                {t('transparencyNote')}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {t('dontDoList').split('|').map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-foreground/50">
                    <span className="text-red-400/60">✗</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Founder's Message Teaser */}
          <section className="max-w-3xl mx-auto mb-20">
            <Link
              to="/founder"
              className={`
                block p-8 rounded-2xl glass-card border transition-all duration-300
                ${mode === 'institutional'
                  ? 'border-institutional/20 hover:border-institutional/40 hover:bg-institutional/5'
                  : 'border-creator/20 hover:border-creator/40 hover:bg-creator/5'
                }
                group
              `}
            >
              <div className="flex items-start gap-4 mb-6">
                <Quote className={`w-8 h-8 flex-shrink-0 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                <div className="flex-1">
                  <h2 className="text-2xl font-display mb-2">{t('aNoteFromFounder')} {t('theFounder')}</h2>
                  <p className="text-foreground/50 text-sm">{t('theStoryBehindQuickserve')}</p>
                </div>
                <ArrowRight className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
              </div>

              <blockquote className="text-lg italic text-foreground/70 leading-relaxed border-l-2 pl-6 mb-4" style={{ borderColor: mode === 'institutional' ? 'rgba(234,179,8,0.3)' : 'rgba(34,211,238,0.3)' }}>
                {t('founderOpeningQuote')}
              </blockquote>

              <p className={`text-sm font-medium ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>
                {t('aboutTheFounder')} →
              </p>
            </Link>
          </section>

          {/* Working Hours Notice */}
          <section className="max-w-2xl mx-auto text-center">
            <div className={`p-8 rounded-2xl ${mode === 'institutional' ? 'bg-institutional/5 border border-institutional/20' : 'bg-creator/5 border border-creator/20'}`}>
              <Clock className={`w-8 h-8 mx-auto mb-4 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
              <h3 className="text-xl font-medium mb-3">{t('workingHours')}</h3>
              <p className="text-2xl font-display mb-2">10:00 AM – 4:00 PM IST</p>
              <p className="text-foreground/50">{t('workingDays')}</p>
              <p className="text-sm text-foreground/40 mt-4">
                {t('outsideHoursNote')}
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer mode={mode} />
    </>
  );
};

interface PhilosophyCardProps {
  icon: any;
  title: string;
  description: string;
  mode: 'institutional' | 'creator';
}

const PhilosophyCard = ({ icon: Icon, title, description, mode }: PhilosophyCardProps) => (
  <div className="p-4 sm:p-5 md:p-6 rounded-2xl glass-card border border-border/20">
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'}`}>
      <Icon className={`w-6 h-6 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
    </div>
    <h3 className="text-lg font-medium mb-2">{title}</h3>
    <p className="text-sm text-foreground/50 leading-relaxed">{description}</p>
  </div>
);

export default About;
