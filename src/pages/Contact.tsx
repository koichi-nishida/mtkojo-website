import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Mail, Instagram, Video } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions? Let's connect.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info & Social Links */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Connect with us</h2>
                  <p className="text-muted-foreground mb-6">
                    We'd love to hear from you. Whether you have questions about our upcoming products, 
                    feedback, or just want to say hello, we're here to listen.
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-4">
                  <Card className="p-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <a href="mailto:hello@mtkojo.com" className="text-muted-foreground hover:text-primary transition-colors">
                          hello@mtkojo.com
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-center gap-3">
                      <Instagram className="h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-semibold">Instagram</h3>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          @mtkojo
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-center gap-3">
                      <Video className="h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-semibold">TikTok</h3>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          @mtkojo
                        </a>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* FAQ */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm">When will products be available?</h4>
                      <p className="text-sm text-muted-foreground">We're targeting a 2024 launch. Join our waitlist to be the first to know!</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Do you ship internationally?</h4>
                      <p className="text-sm text-muted-foreground">We'll start with domestic shipping and expand internationally based on demand.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Are your products vegan?</h4>
                      <p className="text-sm text-muted-foreground">Yes, all Mt. KOJO products will be cruelty-free and vegan.</p>
                    </div>
                  </div>
                </div>
              </div>
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

export default Contact;