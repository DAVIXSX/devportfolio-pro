import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import ContactHero from './components/ContactHero';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';

const ContactInquiry = () => {
  useEffect(() => {
    document.title = 'Contact & Inquiry - DevPortfolio Pro';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Main Content */}
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="py-8">
            <Breadcrumb />
            
            {/* Hero Section */}
            <ContactHero />

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16"
            >
              {/* Contact Form - Takes 2 columns on desktop */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-2xl p-8 border border-border shadow-custom-sm">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      Start Your Project
                    </h2>
                    <p className="text-muted-foreground">
                      Fill out the form below and I'll get back to you within 24 hours 
                      with a detailed response about your project.
                    </p>
                  </div>
                  <ContactForm />
                </div>
              </div>

              {/* Contact Information - Takes 1 column on desktop */}
              <div className="lg:col-span-1">
                <ContactInfo />
              </div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-custom-sm mb-16"
            >
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
                Frequently Asked Questions
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    question: "What's your typical project timeline?",
                    answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 2-6 months. I'll provide a detailed timeline after our initial consultation."
                  },
                  {
                    question: "Do you work with international clients?",
                    answer: "Absolutely! I work with clients worldwide and am experienced in managing projects across different time zones. Communication is key, and I ensure regular updates throughout the project."
                  },
                  {
                    question: "What technologies do you specialize in?",
                    answer: "I specialize in React, Node.js, Python, and modern web technologies. I also have experience with mobile development using React Native and Flutter."
                  },
                  {
                    question: "Do you provide ongoing support?",
                    answer: "Yes, I offer various support packages including bug fixes, feature updates, and maintenance. We can discuss the best support plan for your project during our consultation."
                  }
                ]?.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 + index * 0.1, duration: 0.5 }}
                    className="space-y-3"
                  >
                    <h3 className="text-lg font-semibold text-foreground">
                      {faq?.question}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {faq?.answer}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="text-center bg-primary/5 rounded-2xl p-12 border border-primary/10"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Don't let your ideas stay just ideas. Let's discuss your project 
                and create something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=nextgendev.davis@gmail.com&su=Project%20Inquiry&body=Hello%20Chemss,%0D%0A%0D%0AI%27d%20like%20to%20discuss%20a%20project%20opportunity.%0D%0A%0D%0ABest%20regards,"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300"
                >
                  <span>Email Me Directly</span>
                </a>
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center space-x-2 bg-card text-foreground px-6 py-3 rounded-lg font-medium border border-border hover:shadow-custom-sm transition-all duration-300"
                >
                  <span>Call Now</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="text-center text-muted-foreground">
            <p className="text-sm">
              © {new Date()?.getFullYear()} Chemss Eddine Merabet. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactInquiry;