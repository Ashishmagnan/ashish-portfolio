import React, { useState } from 'react';
    import { useForm } from 'react-hook-form';
    import { zodResolver } from '@hookform/resolvers/zod';
    import { z } from 'zod';
    import { toast } from 'react-toastify';
    import { Mail, Phone, MapPin, Send } from 'lucide-react';
    import Layout from '../components/Layout';

    const contactSchema = z.object({
      name: z.string().min(2, 'Name must be at least 2 characters'),
      email: z.string().email('Please enter a valid email address'),
      subject: z.string().min(5, 'Subject must be at least 5 characters'),
      message: z.string().min(10, 'Message must be at least 10 characters')
    });

    type ContactFormData = z.infer<typeof contactSchema>;

    export default function Contact() {
      const [isSubmitting, setIsSubmitting] = useState(false);

      const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema)
      });

      const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        
        // Simulate form submission
        try {
          await new Promise(resolve => setTimeout(resolve, 1000));
          toast.success('Message sent successfully! I\'ll get back to you soon.');
          reset();
        } catch (error) {
          toast.error('Failed to send message. Please try again.');
        } finally {
          setIsSubmitting(false);
        }
      };

      return (
        <Layout>
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Ready to discuss your next project? I'm open to UK remote opportunities and would be happy to
                  talk about how I can contribute to your team.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">Let's Connect</h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Whether you need a React developer for a remote role or help with a front-end project,
                    please reach out. I typically respond to enquiries within 24-48 hours.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-sm font-medium text-gray-900">Email</h3>
                        <p className="text-gray-600">ashishmagnani07@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Phone className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-sm font-medium text-gray-900">Phone</h3>
                        <p className="text-gray-600">+91 8320020777</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-sm font-medium text-gray-900">Location</h3>
                        <p className="text-gray-600">India — Open to UK Remote Opportunities</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Availability</h3>
                    <p className="text-gray-600 text-sm">
                      Currently available for remote roles and freelance projects with UK companies.
                      Open to short-term and long-term engagements.
                    </p>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        {...register('name')}
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="your.email@company.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        {...register('subject')}
                        type="text"
                        id="subject"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Project enquiry / Role / Collaboration"
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        {...register('message')}
                        id="message"
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                        placeholder="Tell me about your project requirements, timeline, and any specific questions you have..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message
                          <Send size={16} className="ml-2" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </Layout>
      );
    }