
import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { toast } from '@/hooks/use-toast';
import { Mail, MapPin, Send, MessageSquare, ExternalLink } from 'lucide-react';
import LottieAnimation from './LottieAnimation';
import FloatingParticles from './FloatingParticles';
import successCheck from '@/assets/animations/success-check.json';
import loadingDots from '@/assets/animations/loading-dots.json';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    // Simulating form submission
    setTimeout(() => {
      console.log('Form submitted:', values);
      toast({
        title: 'Message Sent!',
        description: 'Thanks for reaching out. I will get back to you soon!',
      });
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative bg-background">
      <FloatingParticles animationData={loadingDots} count={3} className="opacity-10" />
      
      {/* Decorative Lottie animations */}
      <div className="absolute top-10 right-10 w-20 h-20 opacity-20">
        <LottieAnimation animationData={successCheck} />
      </div>
      <div className="absolute bottom-20 left-10 w-24 h-24 opacity-15">
        <LottieAnimation animationData={loadingDots} />
      </div>
      
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-background via-muted/5 to-background"></div>

      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 font-heading text-center gradient-heading animate-gradient-x">
          Get in Touch
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Feel free to reach out.
        </p>

        <div className="grid md:grid-cols-12 gap-8">
          {/* Contact info with enhanced design */}
          <div className="md:col-span-4 space-y-6">
            <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-primary/5">
              <div className="flex items-start">
                <div className="p-3 bg-primary/10 rounded-md text-primary mr-4 hover:bg-primary/20 transition-colors duration-200">
                  <div className="w-5 h-5">
                     <LottieAnimation 
                       animationData={successCheck} 
                       width="20px" 
                       height="20px"
                     />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <a 
                    href="mailto:chaitanyaa.2006@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                  >
                    chaitanyaa.2006@gmail.com
                    <ExternalLink className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a 
                    href="mailto:contact@chaitanyamaddala.com" 
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                  >
                    contact@chaitanyamaddala.com
                    <ExternalLink className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-primary/5">
              <div className="flex items-start">
                <div className="p-3 bg-primary/10 rounded-md text-primary mr-4">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Social</h3>
                  <a
                    href="https://www.linkedin.com/in/chaitanya-maddala236/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors block mb-1 flex items-center group"
                  >
                    LinkedIn
                    <ExternalLink className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a
                    href="https://github.com/chaitanya-maddala-236"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors block mb-1 flex items-center group"
                  >
                    GitHub
                    <ExternalLink className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a
                    href="https://leetcode.com/u/AI_MASTER/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors block flex items-center group"
                  >
                    LeetCode
                    <ExternalLink className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-primary/5">
              <div className="flex items-start">
                <div className="p-3 bg-primary/10 rounded-md text-primary mr-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Location</h3>
                  <p className="text-muted-foreground">Available for remote work worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form with enhanced design */}
          <div className="md:col-span-8">
            <div className="bg-card rounded-xl p-8 border border-border hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-primary/5">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} className="bg-muted focus:border-primary/30 transition-all" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Your email" {...field} className="bg-muted focus:border-primary/30 transition-all" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Message subject" {...field} className="bg-muted focus:border-primary/30 transition-all" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Your message"
                            className="min-h-32 bg-muted focus:border-primary/30 transition-all resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 w-full rounded-md transition-all flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4">
                          <LottieAnimation 
                            animationData={loadingDots} 
                            width="16px" 
                            height="16px"
                          />
                        </div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
