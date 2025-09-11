import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const projectTypes = [
    { value: '', label: 'Select project type' },
    { value: 'web-app', label: 'Web Application' },
    { value: 'mobile-app', label: 'Mobile Application' },
    { value: 'consultation', label: 'Technical Consultation' },
    { value: 'partnership', label: 'Partnership Opportunity' }
  ];

  const budgetRanges = [
    { value: '', label: 'Select budget range' },
    { value: '5k-15k', label: '$5,000 - $15,000' },
    { value: '15k-30k', label: '$15,000 - $30,000' },
    { value: '30k-50k', label: '$30,000 - $50,000' },
    { value: '50k+', label: '$50,000+' }
  ];

  const timelines = [
    { value: '', label: 'Select timeline' },
    { value: 'asap', label: 'ASAP (Rush project)' },
    { value: '1-2months', label: '1-2 months' },
    { value: '3-4months', label: '3-4 months' },
    { value: '6months+', label: '6+ months' }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.name?.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData?.projectType) {
      newErrors.projectType = 'Please select a project type';
    }

    if (!formData?.message?.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData?.message?.trim()?.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors?.[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your EmailJS public key
  }, []);

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        'YOUR_SERVICE_ID',    // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID',   // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company || 'Not specified',
          project_type: formData.projectType,
          budget: formData.budget || 'Not specified',
          timeline: formData.timeline || 'Not specified',
          message: formData.message,
          to_email: 'nextgendev.davis@gmail.com'
        },
        'YOUR_PUBLIC_KEY'     // Replace with your EmailJS public key
      );

      setIsSubmitted(true);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      });
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
      
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-success/10 rounded-xl p-8 border border-success/20 text-center"
      >
        <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle" size={32} color="var(--color-success)" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent Successfully!</h3>
        <p className="text-muted-foreground mb-4">
          Thank you for reaching out. I'll get back to you within 24 hours.
        </p>
        <div className="bg-card rounded-lg p-4 border border-border">
          <h4 className="text-sm font-medium text-foreground mb-2">What happens next?</h4>
          <ul className="text-sm text-muted-foreground space-y-1 text-left">
            <li>• I'll review your project details</li>
            <li>• Schedule a discovery call if needed</li>
            <li>• Provide a detailed proposal</li>
          </ul>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <Input
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            value={formData?.name}
            onChange={(e) => handleInputChange('name', e?.target?.value)}
            onFocus={() => handleFocus('name')}
            onBlur={handleBlur}
            error={errors?.name}
            required
            className={`transition-all duration-300 ${
              focusedField === 'name' ? 'transform scale-102' : ''
            }`}
          />
        </div>

        <div className="relative">
          <Input
            label="Email Address"
            type="email"
            placeholder="your.email@company.com"
            value={formData?.email}
            onChange={(e) => handleInputChange('email', e?.target?.value)}
            onFocus={() => handleFocus('email')}
            onBlur={handleBlur}
            error={errors?.email}
            required
            className={`transition-all duration-300 ${
              focusedField === 'email' ? 'transform scale-102' : ''
            }`}
          />
        </div>
      </div>
      <div className="relative">
        <Input
          label="Company Name"
          type="text"
          placeholder="Your company or organization (optional)"
          value={formData?.company}
          onChange={(e) => handleInputChange('company', e?.target?.value)}
          onFocus={() => handleFocus('company')}
          onBlur={handleBlur}
          className={`transition-all duration-300 ${
            focusedField === 'company' ? 'transform scale-102' : ''
          }`}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative">
          <label className="block text-sm font-medium text-foreground mb-2">
            Project Type <span className="text-error">*</span>
          </label>
          <select
            value={formData?.projectType}
            onChange={(e) => handleInputChange('projectType', e?.target?.value)}
            onFocus={() => handleFocus('projectType')}
            onBlur={handleBlur}
            className={`w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 ${
              focusedField === 'projectType' ? 'transform scale-102' : ''
            } ${errors?.projectType ? 'border-error' : ''}`}
          >
            {projectTypes?.map((type) => (
              <option key={type?.value} value={type?.value}>
                {type?.label}
              </option>
            ))}
          </select>
          {errors?.projectType && (
            <p className="text-error text-xs mt-1">{errors?.projectType}</p>
          )}
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-foreground mb-2">Budget Range</label>
          <select
            value={formData?.budget}
            onChange={(e) => handleInputChange('budget', e?.target?.value)}
            onFocus={() => handleFocus('budget')}
            onBlur={handleBlur}
            className={`w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 ${
              focusedField === 'budget' ? 'transform scale-102' : ''
            }`}
          >
            {budgetRanges?.map((range) => (
              <option key={range?.value} value={range?.value}>
                {range?.label}
              </option>
            ))}
          </select>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-foreground mb-2">Timeline</label>
          <select
            value={formData?.timeline}
            onChange={(e) => handleInputChange('timeline', e?.target?.value)}
            onFocus={() => handleFocus('timeline')}
            onBlur={handleBlur}
            className={`w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 ${
              focusedField === 'timeline' ? 'transform scale-102' : ''
            }`}
          >
            {timelines?.map((timeline) => (
              <option key={timeline?.value} value={timeline?.value}>
                {timeline?.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="relative">
        <label className="block text-sm font-medium text-foreground mb-2">
          Project Details <span className="text-error">*</span>
        </label>
        <textarea
          placeholder="Tell me about your project, goals, and any specific requirements..."
          value={formData?.message}
          onChange={(e) => handleInputChange('message', e?.target?.value)}
          onFocus={() => handleFocus('message')}
          onBlur={handleBlur}
          rows={6}
          className={`w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 resize-none ${
            focusedField === 'message' ? 'transform scale-102' : ''
          } ${errors?.message ? 'border-error' : ''}`}
        />
        {errors?.message && (
          <p className="text-error text-xs mt-1">{errors?.message}</p>
        )}
        <div className="flex justify-between items-center mt-2">
          <p className="text-xs text-muted-foreground">
            Minimum 10 characters required
          </p>
          <p className="text-xs text-muted-foreground">
            {formData?.message?.length}/1000
          </p>
        </div>
      </div>
      <div className="bg-muted/50 rounded-lg p-4 border border-border">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={16} className="text-primary mt-0.5 flex-shrink-0" />
          <div className="text-sm text-muted-foreground">
            <p className="mb-1">
              <strong className="text-foreground">Response Time:</strong> I typically respond within 24 hours.
            </p>
            <p>
              <strong className="text-foreground">Next Steps:</strong> After reviewing your inquiry, I'll schedule a discovery call to discuss your project in detail.
            </p>
          </div>
        </div>
      </div>
      <Button
        type="submit"
        variant="default"
        size="lg"
        loading={isSubmitting}
        disabled={isSubmitting}
        iconName={isSubmitting ? undefined : "Send"}
        iconPosition="right"
        className="w-full"
      >
        {isSubmitting ? 'Sending Message...' : 'Send Message'}
      </Button>
    </motion.form>
  );
};

export default ContactForm;