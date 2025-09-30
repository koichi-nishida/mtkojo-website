import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Mail } from 'lucide-react';

interface NewsletterSignupProps {
  variant?: 'hero' | 'section';
  title?: string;
  description?: string;
}

const NewsletterSignup = ({ 
  variant = 'section', 
  title = "Stay in the loop",
  description = "Be the first to know when our products launch."
}: NewsletterSignupProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been added to our newsletter.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  if (variant === 'hero') {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
          required
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Joining...' : 'Join the Newsletter'}
        </Button>
      </form>
    );
  }

  return (
    <div className="bg-card rounded-lg p-6 border">
      <div className="text-center mb-4">
        <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Joining...' : 'Join Waitlist'}
        </Button>
      </form>
    </div>
  );
};

export default NewsletterSignup;