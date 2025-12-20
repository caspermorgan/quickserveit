import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import Header from '@/components/professional/Header';
import Footer from '@/components/professional/Footer';
import { Play, ExternalLink } from 'lucide-react';

const projects = [
  { title: 'Tech Review Channel', category: 'YouTube Long-form', views: '2.5M Views', thumbnail: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop' },
  { title: 'Travel Vlog Series', category: 'Documentary', views: '1.8M Views', thumbnail: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop' },
  { title: 'Fitness Brand Campaign', category: 'Commercial', views: '500K Views', thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop' },
  { title: 'Gaming Channel Rebrand', category: 'Branding', views: '3.2M Subscribers', thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop' },
  { title: 'Educational Series', category: 'Long-form', views: '1.2M Views', thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop' },
  { title: 'Music Video Production', category: 'Music Video', views: '4.5M Views', thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop' },
];

const Portfolio = () => {
  const { mode } = useMode();
  return (
    <>
      <Helmet><title>Portfolio - QuickServe</title><meta name="description" content="Explore our portfolio of premium video editing and content creation projects" /></Helmet>
      <div className={`min-h-screen ${mode === 'institutional' ? 'mode-institutional' : 'mode-creator'}`}>
        <Header />
        <main className="section-spacing bg-background">
          <div className="container-professional">
            <div className="text-center mb-12 md:mb-16"><div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-mode-soft text-mode text-xs font-semibold">Our Work</div><h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Featured Projects</h1><p className="text-muted-foreground max-w-2xl mx-auto">A selection of our best work across various content categories and formats.</p></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{projects.map((p, i) => (<div key={p.title} className="card-professional overflow-hidden group animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}><div className="relative aspect-video overflow-hidden"><img src={p.thumbnail} alt={p.title} className="w-full h-full object-cover trans-smooth group-hover:scale-105" loading="lazy" /><div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 trans-smooth flex items-center justify-center"><div className="opacity-0 group-hover:opacity-100 trans-smooth"><div className="w-14 h-14 rounded-full bg-card flex items-center justify-center"><Play className="w-6 h-6 text-mode ml-1" /></div></div></div></div><div className="p-5"><div className="flex items-start justify-between gap-2"><div><h3 className="font-heading font-semibold text-foreground mb-1">{p.title}</h3><p className="text-xs text-muted-foreground">{p.category}</p></div><span className="text-xs font-medium text-mode whitespace-nowrap">{p.views}</span></div></div></div>))}</div>
            <div className="text-center mt-12"><a href="#" className="btn-outline inline-flex items-center gap-2">View All Projects<ExternalLink className="w-4 h-4" /></a></div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Portfolio;