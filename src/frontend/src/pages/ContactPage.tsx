import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, MessageSquare, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <div className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent">
            <MessageSquare className="size-3.5" />
            <span>Get in Touch</span>
          </div>
          <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Contact Us
          </h1>
          <p className="mt-3 text-muted-foreground">
            Have a project in mind? We would love to hear from you.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Card className="glass-effect h-full border-border/30">
              <CardHeader>
                <CardTitle className="font-display text-lg">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Mail className="size-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <a
                      href="mailto:CosmicNova369@gmail.com"
                      className="text-sm text-accent transition-colors hover:underline"
                    >
                      CosmicNova369@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <MapPin className="size-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Location
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Global — Remote Engineering Lab
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border border-border/20 bg-accent/5 p-4">
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    We typically respond within 24-48 hours. For urgent
                    inquiries, please mention &quot;Urgent&quot; in the subject
                    line.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <Card className="glass-effect border-border/30">
              <CardHeader>
                <CardTitle className="font-display text-lg">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm text-foreground">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        data-ocid="contact.input.name"
                        className="glass-effect border-border/30 bg-transparent text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-accent/30"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-sm text-foreground"
                      >
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        data-ocid="contact.input.email"
                        className="glass-effect border-border/30 bg-transparent text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-accent/30"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="subject"
                      className="text-sm text-foreground"
                    >
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What is this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      data-ocid="contact.input.subject"
                      className="glass-effect border-border/30 bg-transparent text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-accent/30"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-sm text-foreground"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      data-ocid="contact.input.message"
                      className="glass-effect border-border/30 bg-transparent text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-accent/30"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={submitted}
                    data-ocid="contact.submit_button"
                    className="w-full bg-accent text-accent-foreground shadow-[0_0_16px_oklch(var(--accent)/0.25)] transition-all hover:bg-accent/90 hover:shadow-[0_0_24px_oklch(var(--accent)/0.35)] disabled:opacity-70"
                  >
                    {submitted ? (
                      <span className="flex items-center gap-2">
                        Message Sent!
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="size-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
