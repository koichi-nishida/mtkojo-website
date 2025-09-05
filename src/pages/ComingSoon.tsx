import Navigation from '@/components/Navigation';
import NewsletterSignup from '@/components/NewsletterSignup';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ComingSoon = () => {
  const products = [
    {
      name: "Daily Cleanser",
      category: "Cleansing",
      description: "A gentle, effective cleanser that removes impurities without stripping your skin."
    },
    {
      name: "Hydrating Serum",
      category: "Treatment", 
      description: "Lightweight hydration that penetrates deep for lasting moisture."
    },
    {
      name: "All-Day Moisturizer",
      category: "Moisturizing",
      description: "Non-greasy formula that keeps your skin comfortable all day long."
    },
    {
      name: "Eye Cream",
      category: "Targeted Care",
      description: "Specifically formulated to address the delicate eye area."
    },
    {
      name: "SPF Moisturizer",
      category: "Protection",
      description: "Daily protection with broad-spectrum SPF in a lightweight formula."
    },
    {
      name: "Recovery Balm",
      category: "Treatment",
      description: "Intensive care for dry, irritated, or problem areas."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
              Coming Soon
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Our First Collection
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Our first collection is on the way. Be the first to know when it launches.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">What's Coming</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {products.map((product, index) => (
                <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    {/* Coming Soon Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="text-xs">
                        Coming Soon
                      </Badge>
                    </div>
                    
                    {/* Product Image Placeholder */}
                    <div className="w-full h-48 bg-gradient-to-br from-muted to-muted/50 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-muted-foreground">Mt. KOJO</span>
                    </div>
                    
                    {/* Product Info */}
                    <div>
                      <div className="mb-2">
                        <Badge variant="secondary" className="text-xs mb-2">
                          {product.category}
                        </Badge>
                        <h3 className="text-lg font-semibold text-primary">{product.name}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{product.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Be the First to Know</h2>
              <p className="text-lg text-muted-foreground">
                Join our waitlist and get exclusive early access to our first collection.
              </p>
            </div>
            
            <div className="max-w-md mx-auto">
              <NewsletterSignup 
                title="Join the Waitlist"
                description="Get notified the moment our products are available."
              />
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Launch Timeline</h2>
            
            <div className="space-y-8">
              {[
                {
                  phase: "Phase 1",
                  title: "Product Development",
                  status: "In Progress",
                  description: "Perfecting our formulas with natural ingredients"
                },
                {
                  phase: "Phase 2", 
                  title: "Beta Testing",
                  status: "Coming Soon",
                  description: "Limited beta release to select customers"
                },
                {
                  phase: "Phase 3",
                  title: "Full Launch",
                  status: "2024",
                  description: "Complete collection available to everyone"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 border rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <Badge variant={index === 0 ? "default" : "outline"} className="text-xs">
                        {item.status}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
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

export default ComingSoon;