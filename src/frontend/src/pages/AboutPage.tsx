import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Lightbulb, Rocket, Target, Users, Zap } from "lucide-react";
import { motion } from "motion/react";

const values = [
  {
    icon: Target,
    title: "Precision Engineering",
    description:
      "Every project is approached with meticulous attention to detail and rigorous engineering standards.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We stay at the cutting edge of AI, robotics, and electronics to deliver future-ready solutions.",
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    description:
      "From concept to working prototype in record time. Iterate fast, learn faster.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "We believe in open knowledge sharing and building alongside a passionate community of makers.",
  },
  {
    icon: Rocket,
    title: "Launch Ready",
    description:
      "Whether it's a product, app, or game — we build with production and launch in mind from day one.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
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
    <div className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent">
            <Cpu className="size-3.5" />
            <span>About Xevorith</span>
          </div>
          <h1 className="font-display text-3xl font-bold text-foreground md:text-5xl">
            Engineering the Future
          </h1>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <Card className="glass-effect border-border/30">
            <CardContent className="py-8 text-center md:py-12">
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-foreground md:text-xl">
                Xevorith is an{" "}
                <span className="text-accent">Engineering Lab</span> dedicated
                to building the future through AI, robotics, electronics, and
                single-board-computer projects. We combine deep technical
                expertise with creative problem-solving to deliver solutions
                that push boundaries and inspire innovation.
              </p>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
                From guiding original hardware projects to crafting responsive
                web applications and designing interactive game experiences, we
                bring a design-first mindset to every challenge. Our mission is
                to make advanced engineering accessible, practical, and visually
                stunning.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <motion.div key={value.title} variants={itemVariants}>
                <Card className="glass-effect h-full border-border/30 transition-all duration-300 hover:border-accent/20">
                  <CardContent className="py-6">
                    <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-display text-base font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
