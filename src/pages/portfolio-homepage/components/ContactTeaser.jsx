import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ContactTeaser = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactMethods = [
    {
      icon: 'Mail',
      title: 'Email',
      description: 'nextgendev.davis@gmail.com',
      action: 'Send Email',
      href: 'mailto:nextgendev.davis@gmail.com'
    },
    {
      icon: 'Phone',
      title: 'Phone',
      description: '+213 775995111',
      action: 'Call Now',
      href: 'tel:+213775995111'
    },
    {
      icon: 'MapPin',
      title: 'Location',
      description: 'Algeria, Algiers',
      action: 'View Map',
      href: '#'
    },
    {
      icon: 'Calendar',
      title: 'Schedule',
      description: 'Book a consultation',
      action: 'Schedule Call',
      href: '#'
    }
  ];

  const handleQuickSubscribe = async (e) => {
    e?.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setEmail('');
    
    // Show success message (in real app, you'd handle this properly)
    alert('Thanks for subscribing! I\'ll keep you updated on my latest projects.');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)', backgroundSize: '36px 36px', color: 'var(--border)' }} />
        <motion.div className="absolute top-10 right-8 w-24 h-24 bg-primary/10 rounded-xl rotate-12" animate={{ y: [0, -8, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="absolute bottom-10 left-8 w-20 h-20 bg-secondary/10 rounded-xl -rotate-6" animate={{ y: [0, 8, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 ring-1 ring-primary/20">
            <Icon name="MessageCircle" size={16} className="mr-2" />
            Let's Connect
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ready to Start a Project?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to work on new challenges and collaborate with amazing people. Let's discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Methods */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Get in Touch
            </h3>
            
            {contactMethods?.map((method, index) => (
              <motion.div
                key={method?.title}
                variants={itemVariants}
                className="group bg-card rounded-xl p-6 shadow-custom-sm border border-border hover:shadow-custom-md transition-all duration-300 cursor-pointer"
                onClick={() => method?.href !== '#' && window.open(method?.href, '_blank')}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Icon name={method?.icon} size={24} className="text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">
                      {method?.title}
                    </h4>
                    <p className="text-muted-foreground mb-2">
                      {method?.description}
                    </p>
                    <span className="text-sm text-primary group-hover:text-secondary transition-colors duration-300">
                      {method?.action} →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card rounded-2xl p-8 shadow-custom-lg border border-border"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Quick Connect
            </h3>
            
            {/* Newsletter Signup */}
            <form onSubmit={handleQuickSubscribe} className="space-y-6 mb-8">
              <div>
                <Input
                  type="email"
                  label="Email Address"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e?.target?.value)}
                  required
                  description="Get updates on my latest projects and tech insights"
                />
              </div>
              
              <Button
                type="submit"
                variant="default"
                size="lg"
                loading={isSubmitting}
                iconName="Send"
                iconPosition="right"
                className="w-full hover:shadow-custom-md"
                disabled={!email}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe to Updates'}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-card text-muted-foreground">or</span>
              </div>
            </div>

            {/* Full Contact Form CTA */}
            <div className="text-center space-y-4">
              <p className="text-muted-foreground">
                Have a specific project in mind?
              </p>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/contact-inquiry')}
                iconName="MessageSquare"
                iconPosition="right"
                className="w-full hover:shadow-custom-sm"
              >
                Send Detailed Message
              </Button>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground text-center mb-4">
                Follow me on social media
              </p>
              <div className="flex justify-center space-x-4">
                {[
                  { icon: 'Github', href: 'https://github.com/DAVIXSX/DAVIXSX.git', label: 'GitHub' },
                  { icon: 'Linkedin', href: '#', label: 'LinkedIn' },
                  { icon: 'Twitter', href: '#', label: 'Twitter' },
                  { icon: 'Instagram', href: '#', label: 'Instagram' }
                ]?.map((social) => (
                  <motion.a
                    key={social?.label}
                    href={social?.href}
                    className="p-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 shadow-custom-sm"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social?.label}
                  >
                    <Icon name={social?.icon} size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactTeaser;