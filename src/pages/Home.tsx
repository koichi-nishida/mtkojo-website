import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import NewsletterSignup from '@/components/NewsletterSignup';
import heroImage from '@/assets/hero-image.jpg';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Japanese skincare inspiration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold font-poppins mb-6 tracking-tight">
            Mt. KOJO
          </h1>
          <h1 className="text-4xl sm:text-3xl lg:text-5xl font-bold font-poppins mb-6 tracking-tight">
            Reset · Hydrate · Shield
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl mb-8 font-semibold max-w-3xl mx-auto leading-relaxed">
            Men’s skincare inspired by Japanese simplicity. Three steps. Real results.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3" asChild>
              <Link to="/coming-soon">Join the Waitlist</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-primary hover:bg-white hover:text-primary" asChild>
              <Link to="/about">Learn Our Story</Link>
            </Button>
          </div>

          {/* Newsletter Signup */}
          <div className="max-w-md mx-auto">
            <NewsletterSignup variant="hero" />
          </div>
        </div>
      </section>

      {/* Brand Values Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Made for Men. Informed by Japan.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Inspired by the rituals of Japanese skincare, we craft formulas that balance minimalism with powerful natural ingredients. 
              Your routine should be simple, effective, and elevate your confidence every day.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Simple",
                description: "Streamlined steps. No clutter. Just essentials that fit seamlessly into your day."
              },
              {
                title: "Natural",
                description: "Formulations inspired by Japanese botanicals — green tea, rice bran, and minerals — chosen for purity and effectiveness."
              },
              {
                title: "Confident",
                description: "Healthy skin, clear mind. Designed to help you show up at your best, every single day."
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground">
            Crafted with care. Informed by Japan. Built for your routine.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-secondary transition-colors">Instagram</a>
            <a href="#" className="hover:text-secondary transition-colors">TikTok</a>
            <a href="mailto:info@mtkojo.com" className="hover:text-secondary transition-colors">Email</a>
          </div>
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Mt. KOJO. All rights reserved.</p>
          
        </div>
      </footer>
    </div>
    
  );
};

console.log("Rendering Home.tsx", new Date().toISOString());
<div style={{position:'fixed',bottom:8,right:8,fontSize:12,opacity:.6,zIndex:9999}}>
  {new Date().toLocaleTimeString()}
</div>



export default Home;
