import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { useMode } from "@/context/ModeContext";
import { Home, Wrench, MessageCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const { mode } = useMode();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const errorMessage = mode === 'institutional'
    ? t('error404MessageInstitutional')
    : t('error404MessageCreator');

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />

      {/* Glowing orb effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/20 to-amber-500/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center animate-fade-in-up">
        {/* 404 Title */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-gradient-to-br from-cyan-400 via-amber-400 to-cyan-400 bg-clip-text text-transparent mb-4 tracking-tight">
            {t('error404Title')}
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-100 mb-4">
            {t('error404Heading')}
          </h2>
        </div>

        {/* Error Message */}
        <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl mx-auto">
          {errorMessage}
        </p>

        {/* Suggestion */}
        <p className="text-sm text-slate-400 mb-6 font-medium uppercase tracking-wider">
          {t('error404Suggestion')}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link
            to="/home"
            className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            <Home className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            {t('error404Action1')}
          </Link>

          <Link
            to="/services"
            className="group flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-lg font-medium transition-all duration-300 hover:scale-105 border border-slate-700 hover:border-slate-600"
          >
            <Wrench className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            {t('error404Action2')}
          </Link>

          <Link
            to="/contact"
            className="group flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-lg font-medium transition-all duration-300 hover:scale-105 border border-slate-700 hover:border-slate-600"
          >
            <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            {t('error404Action3')}
          </Link>
        </div>

        {/* Help Text */}
        <p className="text-sm text-slate-500 italic">
          {t('error404HelpText')}
        </p>

        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl" />
      </div>
    </div>
  );
};

export default NotFound;
