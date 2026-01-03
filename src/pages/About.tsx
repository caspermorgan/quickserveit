import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';
import { Shield, Target, Users, Zap, Eye, Clock } from 'lucide-react';

const About = () => {
  const { mode, setHasEntered } = useMode();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleReturn = () => {
    setHasEntered(false);
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

      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6">
              {t('aboutPageTitle')} <span className={mode === 'institutional' ? 'text-institutional' : 'text-creator'}>{t('brandName')}</span>
            </h1>
            <p className="text-lg text-foreground/50 leading-relaxed">
              {t('aboutIntro')}
            </p>
          </div>

          {/* Philosophy Section */}
          <section className="max-w-4xl mx-auto mb-20">
            <h2 className="text-2xl font-display mb-8 text-center">{t('ourPhilosophy')}</h2>
            <div className="grid md:grid-cols-2 gap-6">
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

          {/* Who We Serve - Mode Specific */}
          <section className="max-w-4xl mx-auto mb-20">
            <h2 className="text-2xl font-display mb-8 text-center">{t('whoWeServe')}</h2>
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
                    {t('institutionsList').split('|').map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-institutional mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
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
                    {t('creatorsList').split('|').map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-creator mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>

          {/* What We Don't Do */}
          <section className="max-w-3xl mx-auto mb-20">
            <h2 className="text-2xl font-display mb-8 text-center">{t('whatWeDontDo')}</h2>
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
  <div className="p-6 rounded-2xl glass-card border border-border/20">
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'}`}>
      <Icon className={`w-6 h-6 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
    </div>
    <h3 className="text-lg font-medium mb-2">{title}</h3>
    <p className="text-sm text-foreground/50 leading-relaxed">{description}</p>
  </div>
);

export default About;
