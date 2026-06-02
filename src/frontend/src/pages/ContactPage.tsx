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
    <div className="relative overflow-hidden px-6 py-12 md:py-16">
      {/* Ambient orbs */}
      <div
        className="pointer-events-none absolute -top-20 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full opacity-15 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,255,0.5) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[250px] w-[250px] translate-x-1/4 rounded-full opacity-10 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
            style={{
              background: "rgba(0,212,255,0.07)",
              border: "1px solid rgba(0,212,255,0.3)",
              color: "#00d4ff",
              backdropFilter: "blur(12px)",
            }}
          >
            <MessageSquare className="size-3.5" />
            <span>Get in Touch</span>
          </div>
          <h1
            className="neon-glow font-display text-4xl font-extrabold tracking-tight md:text-5xl"
            style={{
              background: "linear-gradient(135deg, #00d4ff 0%, #a855f7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Contact Us
          </h1>
          <p className="mt-3 text-muted-foreground">
            Have a project in mind? We would love to hear from you.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Contact Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div
              className="glass-card relative h-full overflow-hidden rounded-2xl border-t-2 border-t-[#00d4ff] p-6"
              data-ocid="contact.info_panel"
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(0,212,255,0.5), transparent)",
                }}
              />
              <h2 className="font-display mb-6 text-lg font-bold text-foreground">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div
                    className="flex size-9 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      background: "rgba(0,212,255,0.1)",
                      color: "#00d4ff",
                      boxShadow: "0 0 12px rgba(0,212,255,0.2)",
                    }}
                  >
                    <Mail className="size-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Email
                    </p>
                    <a
                      href="mailto:CosmicNova369@gmail.com"
                      className="text-sm transition-all duration-200"
                      style={{
                        color: "#00d4ff",
                        textShadow: "0 0 8px rgba(0,212,255,0.4)",
                      }}
                    >
                      CosmicNova369@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div
                    className="flex size-9 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      background: "rgba(168,85,247,0.1)",
                      color: "#a855f7",
                      boxShadow: "0 0 12px rgba(168,85,247,0.2)",
                    }}
                  >
                    <MapPin className="size-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Location
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Global — Remote Engineering Lab
                    </p>
                  </div>
                </div>

                <div
                  className="rounded-xl p-4"
                  style={{
                    background: "rgba(0,212,255,0.05)",
                    border: "1px solid rgba(0,212,255,0.15)",
                  }}
                >
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    We typically respond within 24-48 hours. For urgent
                    inquiries, please mention &quot;Urgent&quot; in the subject
                    line.
                  </p>
                </div>
              </div>

              {/* Corner glow */}
              <div
                className="pointer-events-none absolute -right-6 -bottom-6 h-24 w-24 rounded-full opacity-20 blur-2xl"
                style={{ background: "#00d4ff" }}
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div
              className="glass-card relative overflow-hidden rounded-2xl border-t-2 border-t-[#a855f7] p-6"
              data-ocid="contact.form_panel"
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(168,85,247,0.5), transparent)",
                }}
              />
              <h2 className="font-display mb-6 text-lg font-bold text-foreground">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground"
                    >
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
                      className="border-border/30 bg-transparent text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-2 focus-visible:ring-[#00d4ff]/50"
                      style={{ backdropFilter: "blur(12px)" }}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
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
                      className="border-border/30 bg-transparent text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-2 focus-visible:ring-[#00d4ff]/50"
                      style={{ backdropFilter: "blur(12px)" }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="subject"
                    className="text-sm font-medium text-foreground"
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
                    className="border-border/30 bg-transparent text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-2 focus-visible:ring-[#00d4ff]/50"
                    style={{ backdropFilter: "blur(12px)" }}
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
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
                    className="border-border/30 bg-transparent text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-2 focus-visible:ring-[#00d4ff]/50"
                    style={{ backdropFilter: "blur(12px)" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  data-ocid="contact.submit_button"
                  className="flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold transition-all duration-300 disabled:opacity-70"
                  style={{
                    background: submitted
                      ? "rgba(0,212,255,0.15)"
                      : "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(168,85,247,0.15))",
                    border: "1px solid rgba(0,212,255,0.4)",
                    color: "#00d4ff",
                    boxShadow: submitted
                      ? "none"
                      : "0 0 24px rgba(0,212,255,0.25)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  {submitted ? (
                    <span
                      style={{
                        color: "#00ffc8",
                        textShadow: "0 0 8px rgba(0,255,200,0.5)",
                      }}
                    >
                      ✓ Message Sent!
                    </span>
                  ) : (
                    <>
                      <Send className="size-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              <div
                className="pointer-events-none absolute -right-6 -bottom-6 h-24 w-24 rounded-full opacity-15 blur-2xl"
                style={{ background: "#a855f7" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
