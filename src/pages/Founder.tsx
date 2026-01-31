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
        <title>Founder's Message | quickserveit</title>
        <meta name="description" content="A personal message from the founder of quickserveit about our mission, values, and commitment to calm digital execution." />
      </Helmet>

      <CursorLight mode={mode} />
      <FilmGrain />

      <FloatingNavbar
        mode={mode}
        onReturn={handleReturn}
        isVisible={true}
      />

      <main id="main-content" className="min-h-screen bg-background pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-24 md:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display mb-4">
              {t('founderHeroTitle').split(' ').slice(0, -2).join(' ')} <span className={mode === 'institutional' ? 'text-institutional' : 'text-creator'}>{t('founderHeroTitle').split(' ').slice(-1)}</span>
            </h1>
            <p className="text-foreground/50">
              {t('founderHeroSubtitle')}
            </p>
          </div>

          {/* Founder Image */}
          <div className="flex justify-center mb-12">
            <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden glass-card border border-border/20">
              <img
                src="/founder.jpg"
                alt="Casper Morgan - Founder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Opening Quote */}
          <div className={`p-8 rounded-2xl mb-12 ${mode === 'institutional' ? 'bg-institutional/5 border border-institutional/20' : 'bg-creator/5 border border-creator/20'}`}>
            <Quote className={`w-8 h-8 mb-4 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
            <p className="text-lg md:text-xl italic text-foreground/70 leading-relaxed">
              {t('founderOpeningQuoteText')}
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-display mb-4 flex items-center gap-3">
                <Heart className={`w-5 h-5 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                {t('whyIStartedTitle')}
              </h2>
              <p className="text-foreground/60 leading-relaxed">
                {t('whyIStartedPara1')}
              </p>
              <p className="text-foreground/60 leading-relaxed mt-4">
                {t('whyIStartedPara2')}
              </p>
              <p className="text-foreground/60 leading-relaxed mt-4">
                {t('whyIStartedPara3')}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display mb-4 flex items-center gap-3">
                <Target className={`w-5 h-5 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                {t('theGapIFilledTitle')}
              </h2>
              <p className="text-foreground/60 leading-relaxed">
                {t('theGapIFilledPara1')}
              </p>
              <p className="text-foreground/60 leading-relaxed mt-4">
                {t('theGapIFilledPara2')}
              </p>
              <p className="text-foreground/60 leading-relaxed mt-4">
                {t('theGapIFilledPara3')}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display mb-4 flex items-center gap-3">
                <Eye className={`w-5 h-5 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                {t('myCommitmentTitle')}
              </h2>
              <p className="text-foreground/60 leading-relaxed">
                {t('myCommitmentPara1')}
              </p>
              <p className="text-foreground/60 leading-relaxed mt-4">
                {t('myCommitmentPara2')}
              </p>
              <p className="text-foreground/60 leading-relaxed mt-4">
                {t('myCommitmentPara3')}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display mb-4 flex items-center gap-3">
                <Eye className={`w-5 h-5 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                {t('theVisionTitle')}
              </h2>
              <p className="text-foreground/60 leading-relaxed">
                {t('theVisionPara1')}
              </p>
              <p className="text-foreground/60 leading-relaxed mt-4">
                {t('theVisionPara2')}
              </p>
              <p className="text-foreground/60 leading-relaxed mt-4">
                {t('theVisionPara3')}
              </p>
            </section>
          </div>

          {/* Closing */}
          <div className="mt-16 text-center">
            <div className={`inline-block p-8 rounded-2xl glass-card border ${mode === 'institutional' ? 'border-institutional/20' : 'border-creator/20'}`}>
              <p className="text-foreground/60 mb-4">
                Thank you for considering quickserveit.
              </p>
              <p className={`font-display text-lg ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>
                — Casper Morgan
              </p>
              <p className="text-sm text-foreground/40 mt-2">
                Founder, quickserveit
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
