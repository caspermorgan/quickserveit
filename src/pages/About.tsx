import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import Header from '@/components/professional/Header';
import Footer from '@/components/professional/Footer';
import { Users, Target, Award, MapPin } from 'lucide-react';

const About = () => {
  const { mode } = useMode();
  const stats = [{ value: '50+', label: 'Institutions Served' }, { value: '99.9%', label: 'Uptime Guarantee' }, { value: '5000+', label: 'Documents Processed' }, { value: '24/7', label: 'Support Available' }];
  const values = [{ icon: Target, title: 'Mission', description: 'To provide calm, reliable digital execution that allows institutions to focus on what matters most.' }, { icon: Users, title: 'Team', description: 'A dedicated team of professionals with expertise in documentation, IT systems, and creative production.' }, { icon: Award, title: 'Quality', description: 'Every project is handled with precision, confidentiality, and attention to detail.' }, { icon: MapPin, title: 'Location', description: 'Based in Uttar Pradesh, India, serving institutions and creators worldwide.' }];

  return (
    <>
      <Helmet><title>About - QuickServe</title><meta name="description" content="Learn about QuickServe - The 50M Standard" /></Helmet>
      <div className={`min-h-screen ${mode === 'institutional' ? 'mode-institutional' : 'mode-creator'}`}>
        <Header />
        <main>
          <section className="section-spacing bg-background">
            <div className="container-professional"><div className="max-w-3xl mx-auto text-center"><div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-mode-soft text-mode text-xs font-semibold">About Us</div><h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">The 50M Standard</h1><p className="text-lg text-muted-foreground leading-relaxed">QuickServe transforms chaotic digital workloads into organized, confidential, and deadline-calm execution.</p></div></div>
          </section>
          <section className="py-12 bg-secondary/30"><div className="container-professional"><div className="grid grid-cols-2 md:grid-cols-4 gap-6">{stats.map((stat, i) => (<div key={stat.label} className="text-center animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}><div className="text-3xl md:text-4xl font-heading font-bold text-mode mb-2">{stat.value}</div><div className="text-sm text-muted-foreground">{stat.label}</div></div>))}</div></div></section>
          <section className="section-spacing bg-background"><div className="container-professional"><div className="text-center mb-12"><h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">Our Values</h2></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{values.map((v, i) => (<div key={v.title} className="card-professional p-6 text-center animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}><div className="w-12 h-12 rounded-lg bg-mode-soft flex items-center justify-center mx-auto mb-4"><v.icon className="w-6 h-6 text-mode" /></div><h3 className="text-lg font-heading font-semibold text-foreground mb-2">{v.title}</h3><p className="text-sm text-muted-foreground">{v.description}</p></div>))}</div></div></section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;