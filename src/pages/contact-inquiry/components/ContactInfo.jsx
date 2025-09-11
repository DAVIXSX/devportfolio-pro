import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: 'Mail',
      label: 'Email',
      value: 'nextgendev.davis@gmail.com',
      description: 'Best for project inquiries',
      responseTime: 'Within 24 hours',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=nextgendev.davis@gmail.com&su=Project%20Inquiry&body=Hello%20Chemss,%0D%0A%0D%0AI%27d%20like%20to%20discuss%20a%20project%20opportunity.%0D%0A%0D%0ABest%20regards,'
    },
    {
      icon: 'Phone',
      label: 'Phone',
      value: '+213 775995111',
      description: 'For urgent discussions',
      responseTime: 'Business hours'
    },
    {
      icon: 'MapPin',
      label: 'Location',
      value: 'Algeria, Algiers',
      description: 'Available for remote work',
      responseTime: 'Worldwide'
    }
  ];

  const socialLinks = [
    { icon: 'Github', label: 'GitHub', url: 'https://github.com/DAVIXSX/DAVIXSX.git' },
    { icon: 'Twitter', label: 'Twitter', url: '#' },
    { icon: 'Linkedin', label: 'LinkedIn', url: '#' },
    { icon: 'Globe', label: 'Website', url: '#' }
  ];

  return (
    <div className="space-y-8">
      {/* Availability Status */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-success">Available for new projects</span>
        </div>
        <p className="text-muted-foreground text-sm">
          Currently accepting new client projects and collaboration opportunities. 
          Response time is typically within 24 hours.
        </p>
      </div>
      {/* Contact Methods */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground mb-4">Get in Touch</h3>
        {contactMethods?.map((method, index) => (
          <div 
            key={method?.label}
            className="bg-card rounded-lg p-4 border border-border hover:shadow-custom-sm transition-all duration-300 group"
          >
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Icon name={method?.icon} size={20} color="var(--color-primary)" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-medium text-foreground">{method?.label}</h4>
                  <span className="text-xs text-muted-foreground">{method?.responseTime}</span>
                </div>
                <p className="text-sm text-primary font-medium mb-1">{method?.value}</p>
                <p className="text-xs text-muted-foreground">{method?.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Location & Timezone */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Location & Timezone</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Icon name="MapPin" size={16} color="var(--color-primary)" />
            <span className="text-sm text-foreground">Algeria, Algiers</span>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="Clock" size={16} color="var(--color-primary)" />
            <span className="text-sm text-foreground">Central European Time (CET)</span>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="Globe" size={16} color="var(--color-primary)" />
            <span className="text-sm text-foreground">Available for remote work worldwide</span>
          </div>
        </div>
      </div>
      {/* Social Links */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Connect on Social</h3>
        <div className="grid grid-cols-2 gap-3">
          {socialLinks?.map((social) => (
            <a
              key={social?.label}
              href={social?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 bg-card rounded-lg border border-border hover:shadow-custom-sm hover:border-primary/20 transition-all duration-300 group"
            >
              <Icon 
                name={social?.icon} 
                size={18} 
                className="text-muted-foreground group-hover:text-primary transition-colors duration-300" 
              />
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                {social?.label}
              </span>
            </a>
          ))}
        </div>
      </div>
      {/* Testimonial */}
      <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
            <Icon name="Quote" size={20} color="var(--color-primary)" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;