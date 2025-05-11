
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
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';

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
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-background via-muted/5 to-background"></div>

      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 font-heading text-center gradient-heading">
          Get in Touch
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Feel free to reach out.
        </p>

        <div className="grid md:grid-cols-12 gap-8">
          {/* Contact info */}
          <div className="md:col-span-4 space-y-6">
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-start">
                <div className="p-3 bg-primary/10 rounded-md text-primary mr-4">
                  <Mail />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <a href="mailto:contact@chaitanyamaddala.com" className="text-muted-foreground hover:text-foreground">
                    contact@chaitanyamaddala.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-start">
                <div className="p-3 bg-primary/10 rounded-md text-primary mr-4">
                  <MessageSquare />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Social</h3>
                  <a
                    href="https://www.linkedin.com/in/chaitanya-maddala236/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground block mb-1"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/chaitanya-maddala-236"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground block"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-start">
                <div className="p-3 bg-primary/10 rounded-md text-primary mr-4">
                  <MapPin />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Location</h3>
                  <p className="text-muted-foreground">Available for remote work worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="md:col-span-8">
            <div className="bg-card rounded-xl p-8 border border-border">
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
                            <Input placeholder="Your name" {...field} className="bg-muted" />
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
                            <Input placeholder="Your email" {...field} className="bg-muted" />
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
                          <Input placeholder="Message subject" {...field} className="bg-muted" />
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
                            className="min-h-32 bg-muted"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 w-full rounded-md"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
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
