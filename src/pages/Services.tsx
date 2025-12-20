import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import Header from '@/components/professional/Header';
import Footer from '@/components/professional/Footer';
import { Shield, FileText, Clock, Users, BarChart, Headphones, Video, Palette, Zap, TrendingUp, Music, Award } from 'lucide-react';

const Services = () => {
  const { mode } = useMode();

  const institutionalServices = [
    { icon: FileText, title: 'Document Processing', description: 'Professional typing, formatting, and document management for notices, circulars, and official communications.' },
    { icon: Shield, title: 'Certificate Management', description: 'Bulk certificate generation, verification systems, and secure digital documentation.' },
    { icon: Clock, title: 'Timetable Creation', description: 'Complex scheduling solutions for classes, exams, and institutional events.' },
    { icon: Users, title: 'Data Entry & Management', description: 'Accurate data entry, database management, and record keeping services.' },
    { icon: BarChart, title: 'Report Generation', description: 'Custom reports, analytics dashboards, and performance documentation.' },
    { icon: Headphones, title: 'IT Support', description: 'Technical assistance, troubleshooting, and ongoing support for your digital infrastructure.' },
  ];

  const creatorServices = [
    { icon: Video, title: 'Video Editing', description: 'Professional long-form and short-form editing optimized for retention and engagement.' },
    { icon: Palette, title: 'Color Grading', description: 'Cinematic color correction that gives your content a distinctive, professional look.' },
    { icon: Zap, title: 'Motion Graphics', description: 'Custom animations, lower thirds, intros, and visual effects that enhance your brand.' },
    { icon: Music, title: 'Sound Design', description: 'Audio mixing, music selection, and sound effects that elevate your content.' },
    { icon: TrendingUp, title: 'Thumbnail Design', description: 'Click-worthy thumbnails designed using proven psychological principles.' },
    { icon: Award, title: 'Brand Strategy', description: 'Complete channel optimization, content strategy, and growth consulting.' },
  ];

  const services = mode === 'institutional' ? institutionalServices : creatorServices;

  return (
    <>
      <Helmet>
        <title>Services - QuickServe</title>
        <meta name="description" content={mode === 'institutional' ? 'Professional IT services for educational institutions' : 'Premium content creation services for creators'} />
      </Helmet>

      <div className={`min-h-screen ${mode === 'institutional' ? 'mode-institutional' : 'mode-creator'}`}>
        <Header />
        <main className="section-spacing bg-background">
          <div className="container-professional">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-mode-soft text-mode text-xs font-semibold">Our Services</div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">{mode === 'institutional' ? 'Enterprise Solutions' : 'Creator Services'}</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">{mode === 'institutional' ? 'Comprehensive IT services designed for educational institutions and organizations.' : 'Premium production services designed to maximize your content\'s impact.'}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={service.title} className="card-professional p-6 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="w-12 h-12 rounded-lg bg-mode-soft flex items-center justify-center mb-4"><service.icon className="w-6 h-6 text-mode" /></div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Services;