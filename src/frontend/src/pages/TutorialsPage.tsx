import { cn } from "@/lib/utils";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const categories = ["All", "AI", "Robotics", "Electronics", "SBC"] as const;
type Category = (typeof categories)[number];

const categoryColors: Record<
  string,
  { accent: string; border: string; glow: string }
> = {
  AI: {
    accent: "#00d4ff",
    border: "border-t-[#00d4ff]",
    glow: "hover:shadow-[0_0_50px_rgba(0,212,255,0.3)]",
  },
  Robotics: {
    accent: "#4d9fff",
    border: "border-t-[#4d9fff]",
    glow: "hover:shadow-[0_0_50px_rgba(77,159,255,0.3)]",
  },
  Electronics: {
    accent: "#a855f7",
    border: "border-t-[#a855f7]",
    glow: "hover:shadow-[0_0_50px_rgba(168,85,247,0.3)]",
  },
  SBC: {
    accent: "#00ffc8",
    border: "border-t-[#00ffc8]",
    glow: "hover:shadow-[0_0_50px_rgba(0,255,200,0.3)]",
  },
  All: {
    accent: "#00d4ff",
    border: "border-t-[#00d4ff]",
    glow: "hover:shadow-[0_0_50px_rgba(0,212,255,0.3)]",
  },
};

const tutorials = [
  {
    id: 1,
    title: "Getting Started with Neural Networks",
    category: "AI",
    duration: "45 min",
    description:
      "Build your first neural network from scratch using Python and understand the fundamentals of deep learning.",
  },
  {
    id: 2,
    title: "ROS2 Robot Navigation Basics",
    category: "Robotics",
    duration: "60 min",
    description:
      "Learn how to set up ROS2 for autonomous robot navigation, SLAM, and path planning.",
  },
  {
    id: 3,
    title: "Arduino Sensor Interfacing",
    category: "Electronics",
    duration: "30 min",
    description:
      "Master the art of connecting and programming various sensors with Arduino microcontrollers.",
  },
  {
    id: 4,
    title: "Raspberry Pi Home Server",
    category: "SBC",
    duration: "40 min",
    description:
      "Transform your Raspberry Pi into a powerful home server with Docker, NAS, and media streaming.",
  },
  {
    id: 5,
    title: "Computer Vision with OpenCV",
    category: "AI",
    duration: "55 min",
    description:
      "Implement real-time object detection and image processing pipelines using OpenCV and Python.",
  },
  {
    id: 6,
    title: "Building a 3D Printed Robot Arm",
    category: "Robotics",
    duration: "90 min",
    description:
      "Design, print, and assemble a functional 3-DOF robot arm with servo control.",
  },
  {
    id: 7,
    title: "PCB Design for Beginners",
    category: "Electronics",
    duration: "50 min",
    description:
      "Create your first printed circuit board design using KiCad from schematic to fabrication.",
  },
  {
    id: 8,
    title: "Jetson Nano AI at the Edge",
    category: "SBC",
    duration: "70 min",
    description:
      "Deploy TensorRT-optimized models on NVIDIA Jetson Nano for real-time edge AI inference.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function TutorialsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? tutorials
      : tutorials.filter((t) => t.category === activeCategory);

  return (
    <div className="relative overflow-hidden px-6 py-12 md:py-16">
      {/* Ambient orbs */}
      <div
        className="pointer-events-none absolute -top-20 right-1/4 h-[300px] w-[300px] rounded-full opacity-10 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,255,0.5) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-1/4 left-0 h-[250px] w-[250px] -translate-x-1/3 rounded-full opacity-10 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.5) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl">
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
            <BookOpen className="size-3.5" />
            <span>Learning Center</span>
          </div>
          <h1
            className="font-display text-4xl font-extrabold tracking-tight md:text-5xl"
            style={{
              background: "linear-gradient(135deg, #00d4ff 0%, #a855f7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 24px rgba(0,212,255,0.4))",
            }}
          >
            Tutorials & Projects
          </h1>
          <p className="mt-3 text-muted-foreground">
            Explore hands-on guides across AI, robotics, electronics, and SBC
            projects
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-10 flex flex-wrap justify-center gap-3"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            const color = categoryColors[cat]?.accent ?? "#00d4ff";
            return (
              <button
                key={cat}
                type="button"
                data-ocid={`tutorials.filter.${cat.toLowerCase()}_button`}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300",
                  isActive
                    ? "text-black"
                    : "text-muted-foreground hover:text-foreground",
                )}
                style={{
                  background: isActive ? color : "rgba(255,255,255,0.04)",
                  border: isActive
                    ? `1px solid ${color}`
                    : "1px solid rgba(255,255,255,0.12)",
                  boxShadow: isActive ? `0 0 20px ${color}60` : "none",
                  backdropFilter: "blur(12px)",
                }}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* Tutorial Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((tutorial, index) => {
              const colors =
                categoryColors[tutorial.category] ?? categoryColors.AI;
              return (
                <motion.div
                  key={tutorial.id}
                  variants={itemVariants}
                  data-ocid={`tutorials.item.${index + 1}`}
                  className={cn(
                    "glass-card group relative cursor-pointer overflow-hidden rounded-2xl border-t-2 p-5 transition-all duration-300",
                    colors.border,
                    colors.glow,
                  )}
                >
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-px"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${colors.accent}80, transparent)`,
                    }}
                  />
                  <div className="mb-3 flex items-center gap-2">
                    <span
                      className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
                      style={{
                        background: `${colors.accent}18`,
                        color: colors.accent,
                        border: `1px solid ${colors.accent}40`,
                      }}
                    >
                      {tutorial.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="size-3" />
                      {tutorial.duration}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold leading-snug text-foreground">
                    {tutorial.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {tutorial.description}
                  </p>
                  <div
                    className="mt-4 flex items-center gap-1 text-xs font-semibold opacity-0 transition-opacity group-hover:opacity-100"
                    style={{ color: colors.accent }}
                  >
                    <span>Read more</span>
                    <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                  </div>
                  <div
                    className="pointer-events-none absolute -right-4 -bottom-4 h-20 w-20 rounded-full opacity-15 blur-xl"
                    style={{ background: colors.accent }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div data-ocid="tutorials.empty_state" className="py-20 text-center">
            <BookOpen className="mx-auto mb-4 size-12 text-muted-foreground/40" />
            <p className="text-muted-foreground">
              No tutorials found in this category yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
