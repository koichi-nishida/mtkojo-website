import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              About Mt. KOJO
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're redefining what men's skincare can be.
            </p>
          </div>
        </section>

        {/* Brand Story */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-6 text-primary">Our Story</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Mt. KOJO is redefining men's skincare. We believe in simplicity, confidence, 
                  and products that just work. Inspired by nature and built for the modern man.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Why We Started</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Too many skincare products overcomplicate things. We saw men struggling 
                    with complex routines and confusing ingredients. That's when we decided 
                    to create something different – products that are effective, easy to use, 
                    and built specifically for men's skin.
                  </p>
                </div>
                <div className="bg-muted/50 rounded-lg p-8">
                  <h4 className="font-semibold mb-3 text-primary">Our Mission</h4>
                  <p className="text-sm text-muted-foreground">
                    To provide men with skincare solutions that fit seamlessly into their lives, 
                    using the power of natural ingredients and cutting-edge formulation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Simplicity",
                  description: "Clear formulas, simple routines, real results."
                },
                {
                  title: "Quality",
                  description: "Premium ingredients sourced responsibly."
                },
                {
                  title: "Authenticity",
                  description: "Honest about what works and what doesn't."
                },
                {
                  title: "Innovation",
                  description: "Always improving, never settling."
                }
              ].map((value, index) => (
                <div key={index} className="text-center p-6 bg-background rounded-lg border">
                  <h3 className="text-lg font-semibold mb-3 text-primary">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to simplify your routine?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of men who are already on the waitlist for our first collection.
            </p>
            <Button size="lg" asChild>
              <Link to="/coming-soon">Join the Waitlist</Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-2">&copy; 2024 Mt. KOJO. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-secondary transition-colors">Instagram</a>
            <a href="#" className="hover:text-secondary transition-colors">TikTok</a>
            <a href="mailto:hello@mtkojo.com" className="hover:text-secondary transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;