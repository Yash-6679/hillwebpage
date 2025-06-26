import React, { useState } from 'react';
import { Send, Loader } from 'lucide-react';

interface ContactFormProps {
  onSubmit: (formData: { name: string; email: string; message: string }) => Promise<void>;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await onSubmit(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-[#0D0907] p-8 rounded-2xl shadow-2xl border border-[#8B4513]/20">
      <h3 className="text-2xl font-serif font-bold text-[#F5F1E8] mb-6">Get in Touch</h3>
      
      {submitStatus === 'success' && (
        <div className="bg-green-500/20 border border-green-500/30 text-green-400 p-4 rounded-lg mb-6">
          Thank you! Your message has been sent successfully.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="bg-red-500/20 border border-red-500/30 text-red-400 p-4 rounded-lg mb-6">
          Sorry, there was an error sending your message. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-[#CD853F] font-medium mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-[#1A0F0A] border border-[#8B4513]/30 rounded-lg px-4 py-3 text-[#F5F1E8] focus:border-[#CD853F] focus:outline-none focus:ring-2 focus:ring-[#CD853F]/20 transition-all duration-300"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-[#CD853F] font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-[#1A0F0A] border border-[#8B4513]/30 rounded-lg px-4 py-3 text-[#F5F1E8] focus:border-[#CD853F] focus:outline-none focus:ring-2 focus:ring-[#CD853F]/20 transition-all duration-300"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-[#CD853F] font-medium mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full bg-[#1A0F0A] border border-[#8B4513]/30 rounded-lg px-4 py-3 text-[#F5F1E8] focus:border-[#CD853F] focus:outline-none focus:ring-2 focus:ring-[#CD853F]/20 transition-all duration-300 resize-vertical"
            placeholder="Tell us about your inquiry, custom orders, or any questions you have..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-[#F5F1E8] py-4 rounded-lg hover:from-[#CD853F] hover:to-[#DEB887] transition-all duration-300 font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <Loader className="h-5 w-5 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}