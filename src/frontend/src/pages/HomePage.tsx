import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Cpu,
  Gamepad2,
  Github,
  Globe,
  Palette,
  Star,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Cpu,
    title: "Engineering Lab",
    description:
      "Original AI, robotics, electronics and single-board-computer project guidance. From concept to prototype, we help you build the future.",
    accent: "#00d4ff",
    borderColor: "border-t-[#00d4ff]",
    glowHover: "hover:shadow-[0_0_60px_rgba(0,212,255,0.35)]",
    iconBg: "rgba(0,212,255,0.1)",
    iconColor: "#00d4ff",
    cornerGlow: "rgba(0,212,255,1)",
  },
  {
    icon: Globe,
    title: "Apps & Websites",
    description:
      "Responsive apps and websites for launches, services and portfolios. Clean code, fast performance, and modern design patterns.",
    accent: "#4d9fff",
    borderColor: "border-t-[#4d9fff]",
    glowHover: "hover:shadow-[0_0_60px_rgba(77,159,255,0.35)]",
    iconBg: "rgba(77,159,255,0.1)",
    iconColor: "#4d9fff",
    cornerGlow: "rgba(77,159,255,1)",
  },
  {
    icon: Gamepad2,
    title: "Game Builds",
    description:
      "Prototype and design support for interactive game ideas, mechanics and playable demos. Turn your concepts into engaging experiences.",
    accent: "#a855f7",
    borderColor: "border-t-[#a855f7]",
    glowHover: "hover:shadow-[0_0_60px_rgba(168,85,247,0.35)]",
    iconBg: "rgba(168,85,247,0.1)",
    iconColor: "#a855f7",
    cornerGlow: "rgba(168,85,247,1)",
  },
  {
    icon: Palette,
    title: "Design-First Delivery",
    description:
      "Clean UI, practical planning, optimized assets and responsive layouts. Every pixel serves a purpose in our design philosophy.",
    accent: "#00ffc8",
    borderColor: "border-t-[#00ffc8]",
    glowHover: "hover:shadow-[0_0_60px_rgba(0,255,200,0.35)]",
    iconBg: "rgba(0,255,200,0.1)",
    iconColor: "#00ffc8",
    cornerGlow: "rgba(0,255,200,1)",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Ambient glow orbs */}
      <div
        className="pointer-events-none absolute -top-32 left-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,255,0.6) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute top-64 right-0 h-[400px] w-[400px] translate-x-1/3 rounded-full opacity-15 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.6) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[350px] w-[350px] -translate-x-1/4 rounded-full opacity-10 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(77,159,255,0.5) 0%, transparent 70%)",
        }}
      />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-6 pt-20 pb-16 text-center md:pt-28 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-4xl"
        >
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
            style={{
              background: "rgba(0,212,255,0.07)",
              border: "1px solid rgba(0,212,255,0.3)",
              color: "#00d4ff",
              backdropFilter: "blur(12px)",
            }}
          >
            <Cpu className="size-3.5" />
            <span>Engineering Lab</span>
          </div>

          <h1
            className="font-display text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl"
            style={{ lineHeight: 1.05 }}
          >
            <span
              style={{
                background:
                  "linear-gradient(135deg, #00d4ff 0%, #4d9fff 40%, #a855f7 80%, #00ffc8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 30px rgba(0,212,255,0.5))",
              }}
            >
              Xevorith
            </span>
            <br />
            <span className="text-white">Engineering Lab</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Building the future with{" "}
            <span style={{ color: "#00d4ff" }}>AI</span>,{" "}
            <span style={{ color: "#4d9fff" }}>robotics</span>,{" "}
            <span style={{ color: "#a855f7" }}>electronics</span> and{" "}
            <span style={{ color: "#00ffc8" }}>single-board-computer</span>{" "}
            projects. We engineer solutions that push boundaries and inspire
            innovation.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              data-ocid="home.hero.cta_button"
              size="lg"
              className="rounded-full px-8 font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(0,212,255,0.6)]"
              style={{
                background: "linear-gradient(135deg, #00d4ff, #4d9fff)",
                boxShadow:
                  "0 0 32px rgba(0,212,255,0.45), 0 0 64px rgba(0,212,255,0.18)",
                border: "none",
              }}
            >
              Get Started
            </Button>
            <Button
              data-ocid="home.hero.learn_button"
              variant="outline"
              size="lg"
              className="rounded-full px-8 font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(0,212,255,0.07)",
                border: "1px solid rgba(0,212,255,0.4)",
                color: "#00d4ff",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                boxShadow:
                  "0 0 20px rgba(0,212,255,0.15), inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>

        {/* Decorative glowing orb below hero */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 h-48 w-48 -translate-x-1/2 translate-y-1/2 rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(0,212,255,0.5) 0%, transparent 70%)",
          }}
        />
      </section>

      {/* Services Bento Grid */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
              <span style={{ color: "#00d4ff" }}>Services</span> & Capabilities
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
            className="grid gap-5 sm:grid-cols-2"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  data-ocid={`home.service.item.${index + 1}`}
                  className={cn(
                    "glass-card group relative cursor-pointer overflow-hidden rounded-2xl border-t-2 p-6 transition-all duration-300",
                    service.borderColor,
                    service.glowHover,
                  )}
                >
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-px"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${service.accent}80, transparent)`,
                    }}
                  />
                  <div
                    className="mb-4 flex size-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: service.iconBg,
                      color: service.iconColor,
                      boxShadow: `0 0 20px ${service.accent}30`,
                    }}
                  >
                    <Icon className="size-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <div
                    className="pointer-events-none absolute -right-6 -bottom-6 h-24 w-24 rounded-full opacity-20 blur-2xl"
                    style={{ background: service.cornerGlow }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Join Community Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <div
              className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
              style={{
                background: "rgba(168,85,247,0.08)",
                border: "1px solid rgba(168,85,247,0.3)",
                color: "#a855f7",
              }}
            >
              <Users className="size-3.5" />
              <span>Community</span>
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
              Join the <span style={{ color: "#a855f7" }}>Community</span>
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-muted-foreground">
              Follow along, explore project code, and collaborate with Xevorith
              on GitHub.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl p-8 md:p-12 text-center"
            style={{
              background: "rgba(168,85,247,0.06)",
              border: "1px solid rgba(168,85,247,0.25)",
              boxShadow: "0 0 60px rgba(168,85,247,0.1)",
            }}
          >
            {/* Background glow */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(168,85,247,0.6), transparent)",
              }}
            />
            <div
              className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
              style={{ background: "rgba(168,85,247,0.8)" }}
            />

            {/* GitHub icon */}
            <div
              className="relative mx-auto mb-6 flex size-20 items-center justify-center rounded-2xl"
              style={{
                background: "rgba(168,85,247,0.12)",
                border: "1px solid rgba(168,85,247,0.3)",
                boxShadow: "0 0 30px rgba(168,85,247,0.3)",
              }}
            >
              <Github className="size-10 text-white" />
            </div>

            <h3 className="relative font-display text-2xl font-bold text-white md:text-3xl">
              pradeep-innovation369
            </h3>
            <p className="relative mt-2 text-muted-foreground">
              Xevorith on GitHub — explore source code, open-source projects,
              and engineering experiments.
            </p>

            {/* Stats row */}
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-6">
              {[
                { icon: Github, label: "Open Source Projects" },
                { icon: Star, label: "Star Our Repos" },
                { icon: Users, label: "Follow & Collaborate" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Icon className="size-4" style={{ color: "#a855f7" }} />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className="relative mt-8">
              <a
                href="https://github.com/pradeep-innovation369"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="rounded-full px-10 font-bold text-white transition-all duration-300 hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #a855f7, #7c3aed)",
                    boxShadow:
                      "0 0 32px rgba(168,85,247,0.5), 0 0 64px rgba(168,85,247,0.2)",
                    border: "none",
                  }}
                >
                  <Github className="mr-2 size-5" />
                  Follow on GitHub
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
