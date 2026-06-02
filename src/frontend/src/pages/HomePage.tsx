import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Cpu,
  Gamepad2,
  Globe,
  MessageCircle,
  Palette,
  Youtube,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Cpu,
    title: "Engineering Lab",
    description:
      "Original AI, robotics, electronics and single-board-computer project guidance. From concept to prototype, we help you build the future.",
  },
  {
    icon: Globe,
    title: "Apps & Websites",
    description:
      "Responsive apps and websites for launches, services and portfolios. Clean code, fast performance, and modern design patterns.",
  },
  {
    icon: Gamepad2,
    title: "Game Builds",
    description:
      "Prototype and design support for interactive game ideas, mechanics and playable demos. Turn your concepts into engaging experiences.",
  },
  {
    icon: Palette,
    title: "Design-First Delivery",
    description:
      "Clean UI, practical planning, optimized assets and responsive layouts. Every pixel serves a purpose in our design philosophy.",
  },
];

const socialLinks = [
  {
    label: "YouTube",
    icon: Youtube,
    href: "https://youtube.com",
    color:
      "hover:text-red-400 hover:border-red-400/40 hover:shadow-[0_0_16px_rgba(248,113,113,0.2)]",
  },
  {
    label: "Discord",
    icon: MessageCircle,
    href: "https://discord.com",
    color:
      "hover:text-indigo-400 hover:border-indigo-400/40 hover:shadow-[0_0_16px_rgba(129,140,248,0.2)]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center md:pt-32 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent backdrop-blur-sm">
            <Cpu className="size-3.5" />
            <span>Engineering Lab</span>
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            <span className="glow-accent text-accent">Xevorith</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
            Building the future with AI, robotics, electronics and
            single-board-computer projects. We engineer solutions that push
            boundaries and inspire innovation.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              What We Do
            </h2>
            <p className="mt-3 text-muted-foreground">
              End-to-end engineering and design services
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.title} variants={itemVariants}>
                  <Card className="glass-effect group h-full border-border/30 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_24px_oklch(var(--accent)/0.08)]">
                    <CardHeader className="pb-3">
                      <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                        <Icon className="size-5" />
                      </div>
                      <CardTitle className="font-display text-lg">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Connect With Us
            </h2>
            <p className="mt-3 text-muted-foreground">
              Follow our journey and join the community
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid={`home.social.${social.label.toLowerCase()}_button`}
                  className={cn(
                    "glass-effect flex items-center gap-3 rounded-xl border border-border/30 px-6 py-4 text-sm font-medium text-foreground transition-all duration-300",
                    social.color,
                  )}
                >
                  <Icon className="size-5" />
                  <span>{social.label}</span>
                </a>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
