import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        toast({
          title: "✅ Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        
        setFormData({
          email: '',
          subject: '',
          message: '',
        });
      } else {
        toast({
          title: "❌ Failed to send message",
          description: result.error || "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "❌ Network error",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };


  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="text-center mb-12"
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
          Let's <span className="text-gradient">Connect</span>
        </motion.h2>
        <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-gray-300">
          Have a project in mind or want to discuss potential opportunities?
        </motion.p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <motion.div variants={itemVariants} className="gradient-border p-8 rounded-lg mb-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary/20 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary/20 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-secondary/20 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              ></textarea>
            </div>
            
            <Button 
              type="submit" 
              className="w-full flex items-center justify-center gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  Send Message <Send className="h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;