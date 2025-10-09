import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { personalInfo } from '../data/portfolio';
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({
    type: 'idle',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear any previous status when user starts typing
    if (formStatus.type !== 'idle') {
      setFormStatus({ type: 'idle', message: '' });
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setFormStatus({ type: 'error', message: 'Please enter your name.' });
      return false;
    }
    if (!formData.email.trim()) {
      setFormStatus({ type: 'error', message: 'Please enter your email address.' });
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setFormStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return false;
    }
    if (!formData.message.trim()) {
      setFormStatus({ type: 'error', message: 'Please enter your message.' });
      return false;
    }
    if (formData.message.trim().length < 10) {
      setFormStatus({ type: 'error', message: 'Message must be at least 10 characters long.' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setFormStatus({ type: 'loading', message: 'Sending message...' });

    try {
      // Simulate form submission - replace with your actual form submission logic
      // Option 1: Using EmailJS (recommended for client-side)
      // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY');
      
      // Option 2: Using Netlify Forms (if deployed on Netlify)
      // await fetch('/', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      //   body: new URLSearchParams({
      //     'form-name': 'contact',
      //     ...formData
      //   }).toString()
      // });

      // Option 3: Using Formspree (simple form backend service)
      // await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      // For now, simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));

      setFormStatus({ 
        type: 'success', 
        message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!' 
      });

      // Reset form after successful submission
      setFormData({ name: '', email: '', message: '' });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ type: 'idle', message: '' });
      }, 5000);

    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus({ 
        type: 'error', 
        message: 'Oops! Something went wrong. Please try again or contact me directly via email.' 
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-6">
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto mb-12 rounded-full"></div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                  {t('contact.text1')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  {t('contact.text2')}
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                    <FaEnvelope className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Email</p>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-gray-800 dark:text-white font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{t('contact.location')}</p>
                    <p className="text-gray-800 dark:text-white font-medium">{t('contact.cityCountry')}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                  {t('contact.followMe')}
                </h4>
                <div className="flex gap-4">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
                {t('contact.send')}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Status Message */}
                {formStatus.type !== 'idle' && (
                  <div className={`p-4 rounded-lg ${
                    formStatus.type === 'success' 
                      ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800'
                      : formStatus.type === 'error'
                      ? 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800'
                      : 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                  }`}>
                    {formStatus.message}
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={formStatus.type === 'loading'}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={formStatus.type === 'loading'}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    disabled={formStatus.type === 'loading'}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your message..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus.type === 'loading'}
                  className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-colors focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 flex items-center justify-center gap-2"
                >
                  {formStatus.type === 'loading' ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    t('contact.send')
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
