import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';
import { Quote, Heart, Target, Eye } from 'lucide-react';

const Founder = () => {
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
        <title>{t('founderPageTitle')} | {t('brandName')}</title>
        <meta name="description" content={t('founderPageSubtitle')} />
      </Helmet>

      <CursorLight mode={mode} />
      <FilmGrain />

      <FloatingNavbar
        mode={mode}
        onReturn={handleReturn}
        isVisible={true}
      />

      <main className="min-h-screen bg-background pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 relative z-0 scroll-mask">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display mb-4 sm:mb-5 md:mb-6">
              {t('aNoteFromFounder')} <span className={mode === 'institutional' ? 'text-institutional' : 'text-creator'}>{t('theFounder')}</span>
            </h1>
            <p className="text-foreground/60 text-sm sm:text-base px-4">
              {t('theStoryBehindQuickserve')}
            </p>
          </div>

          {/* Founder Image */}
          <div className="flex justify-center mb-12">
            <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden glass-card border border-border/20">
              <img
                src="https://placehold.co/400x500/1a1a1a/gold?text=Casper"
                alt="Casper Morgan - Founder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Opening Quote */}
          <div className={`p-8 rounded-2xl mb-12 ${mode === 'institutional' ? 'bg-institutional/5 border border-institutional/20' : 'bg-creator/5 border border-creator/20'}`}>
            <Quote className={`w-8 h-8 mb-4 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
            <p className="text-lg md:text-xl italic text-foreground/70 leading-relaxed">
              {t('founderOpeningQuote')}
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-display mb-4 flex items-center gap-3">
                <Heart className={`w-5 h-5 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                {t('whatDrivesMe')}
              </h2>
              {mode === 'institutional' ? (
                <>
                  <p className="text-foreground/60 leading-relaxed">{t('originInstPara1')}</p>
                  <p className="text-foreground/60 leading-relaxed mt-4">{t('originInstPara2')}</p>
                  <p className="text-foreground/60 leading-relaxed mt-4">{t('problemInstPara1')}</p>
                  <p className="text-foreground/60 leading-relaxed mt-4">{t('problemInstPara2')}</p>
                </>
              ) : (
                <>
                  <p className="text-foreground/60 leading-relaxed">{t('originCreatorPara1')}</p>
                  <p className="text-foreground/60 leading-relaxed mt-4">{t('originCreatorPara2')}</p>
                  <p className="text-foreground/60 leading-relaxed mt-4">{t('problemCreatorPara1')}</p>
                  <p className="text-foreground/60 leading-relaxed mt-4">{t('problemCreatorPara2')}</p>
                </>
              )}
            </section>

            <section>
              <h2 className="text-xl font-display mb-4 flex items-center gap-3">
                <Target className={`w-5 h-5 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                {t('corePhilosophy')}
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="p-6 rounded-xl glass-card border border-border/20">
                  <h3 className="font-medium mb-2">{t('calmOverChaos')}</h3>
                  <p className="text-sm text-foreground/50">
                    {t('calmOverChaosDesc')}
                  </p>
                </div>
                <div className="p-6 rounded-xl glass-card border border-border/20">
                  <h3 className="font-medium mb-2">{t('clarityOverConfusion')}</h3>
                  <p className="text-sm text-foreground/50">
                    {t('clarityOverConfusionDesc')}
                  </p>
                </div>
                <div className="p-6 rounded-xl glass-card border border-border/20">
                  <h3 className="font-medium mb-2">{t('confidentialityIsSacred')}</h3>
                  <p className="text-sm text-foreground/50">
                    {t('confidentialityIsSacredDesc')}
                  </p>
                </div>
                <div className="p-6 rounded-xl glass-card border border-border/20">
                  <h3 className="font-medium mb-2">{t('qualityWithoutEgo')}</h3>
                  <p className="text-sm text-foreground/50">
                    {t('qualityWithoutEgoDesc')}
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display mb-4 flex items-center gap-3">
                <Eye className={`w-5 h-5 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                {t('theVisionAhead')}
              </h2>
              {mode === 'institutional' ? (
                <>
                  <p className="text-foreground/60 leading-relaxed">{t('visionInstPara1')}</p>
                  <p className="text-foreground/60 leading-relaxed mt-4">{t('visionInstPara2')}</p>
                </>
              ) : (
                <>
                  <p className="text-foreground/60 leading-relaxed">{t('visionCreatorPara1')}</p>
                  <p className="text-foreground/60 leading-relaxed mt-4">{t('visionCreatorPara2')}</p>
                </>
              )}
            </section>
          </div>

          {/* Closing */}
          <div className="mt-16 text-center">
            <div className={`inline-block p-8 rounded-2xl glass-card border ${mode === 'institutional' ? 'border-institutional/20' : 'border-creator/20'}`}>
              <p className="text-foreground/60 mb-4">
                {t('aboutThankYouMessage')}
              </p>
              <p className={`font-display text-lg ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>
                {t('withGratitude')}
              </p>
              <p className={`font-display text-lg ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>
                {t('theFounder')}
              </p>
              <p className="text-sm text-foreground/40 mt-2">
                {t('quickserveitTeam')}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer mode={mode} />
    </>
  );
};

export default Founder;
