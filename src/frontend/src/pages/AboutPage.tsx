import { Cpu, Lightbulb, Rocket, Target, Users, Zap } from "lucide-react";
import { motion } from "motion/react";

const values = [
  {
    icon: Target,
    title: "Precision Engineering",
    description:
      "Every project is approached with meticulous attention to detail and rigorous engineering standards.",
    accent: "#00d4ff",
    border: "border-t-[#00d4ff]",
    glow: "hover:shadow-[0_0_50px_rgba(0,212,255,0.3)]",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We stay at the cutting edge of AI, robotics, and electronics to deliver future-ready solutions.",
    accent: "#4d9fff",
    border: "border-t-[#4d9fff]",
    glow: "hover:shadow-[0_0_50px_rgba(77,159,255,0.3)]",
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    description:
      "From concept to working prototype in record time. Iterate fast, learn faster.",
    accent: "#a855f7",
    border: "border-t-[#a855f7]",
    glow: "hover:shadow-[0_0_50px_rgba(168,85,247,0.3)]",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "We believe in open knowledge sharing and building alongside a passionate community of makers.",
    accent: "#00ffc8",
    border: "border-t-[#00ffc8]",
    glow: "hover:shadow-[0_0_50px_rgba(0,255,200,0.3)]",
  },
  {
    icon: Rocket,
    title: "Launch Ready",
    description:
      "Whether it's a product, app, or game — we build with production and launch in mind from day one.",
    accent: "#ff6b9d",
    border: "border-t-[#ff6b9d]",
    glow: "hover:shadow-[0_0_50px_rgba(255,107,157,0.3)]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden px-6 py-12 md:py-16">
      {/* Ambient orbs */}
      <div
        className="pointer-events-none absolute -top-20 left-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full opacity-15 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,255,0.5) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] translate-x-1/4 rounded-full opacity-10 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.5) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
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
            <Cpu className="size-3.5" />
            <span>About Xevorith</span>
          </div>
          <h1
            className="neon-glow font-display text-4xl font-extrabold tracking-tight md:text-6xl"
            style={{
              background:
                "linear-gradient(135deg, #00d4ff 0%, #4d9fff 50%, #a855f7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              lineHeight: 1.1,
            }}
          >
            Engineering the Future
          </h1>
        </motion.div>

        {/* Mission Glass Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="glass-card relative overflow-hidden rounded-2xl border-t-2 border-t-[#00d4ff] p-8 text-center md:p-12">
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(0,212,255,0.5), transparent)",
              }}
            />
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-foreground md:text-xl">
              Xevorith is an{" "}
              <span
                style={{
                  color: "#00d4ff",
                  textShadow: "0 0 12px rgba(0,212,255,0.5)",
                }}
              >
                Engineering Lab
              </span>{" "}
              dedicated to building the future through{" "}
              <span style={{ color: "#4d9fff" }}>AI</span>,{" "}
              <span style={{ color: "#a855f7" }}>robotics</span>,{" "}
              <span style={{ color: "#00ffc8" }}>electronics</span>, and{" "}
              <span style={{ color: "#ff6b9d" }}>single-board-computer</span>{" "}
              projects. We combine deep technical expertise with creative
              problem-solving to deliver solutions that push boundaries and
              inspire innovation.
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              From guiding original hardware projects to crafting responsive web
              applications and designing interactive game experiences, we bring
              a design-first mindset to every challenge. Our mission is to make
              advanced engineering accessible, practical, and visually stunning.
            </p>
            {/* Corner glow */}
            <div
              className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full opacity-20 blur-2xl"
              style={{ background: "#00d4ff" }}
            />
          </div>
        </motion.div>

        {/* Values Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-8 text-center"
        >
          <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
            Our <span style={{ color: "#00d4ff" }}>Core Values</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                variants={itemVariants}
                data-ocid={`about.value.item.${index + 1}`}
                className={`glass-card group relative cursor-default overflow-hidden rounded-2xl border-t-2 p-6 transition-all duration-300 ${value.border} ${value.glow}`}
              >
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${value.accent}80, transparent)`,
                  }}
                />
                <div
                  className="mb-4 flex size-11 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${value.accent}18`,
                    color: value.accent,
                    boxShadow: `0 0 16px ${value.accent}30`,
                  }}
                >
                  <Icon className="size-5" />
                </div>
                <h3 className="font-display text-base font-bold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
                <div
                  className="pointer-events-none absolute -right-4 -bottom-4 h-20 w-20 rounded-full opacity-15 blur-xl"
                  style={{ background: value.accent }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
