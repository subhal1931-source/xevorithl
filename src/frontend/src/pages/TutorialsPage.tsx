import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const categories = ["All", "AI", "Robotics", "Electronics", "SBC"] as const;
type Category = (typeof categories)[number];

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
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
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
    <div className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent">
            <BookOpen className="size-3.5" />
            <span>Learning Center</span>
          </div>
          <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
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
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              size="sm"
              data-ocid={`tutorials.filter.${cat.toLowerCase()}_button`}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "rounded-full border-border/30 transition-all duration-200",
                activeCategory === cat
                  ? "bg-accent text-accent-foreground shadow-[0_0_16px_oklch(var(--accent)/0.3)] hover:bg-accent/90"
                  : "bg-transparent text-muted-foreground hover:border-accent/30 hover:text-foreground",
              )}
            >
              {cat}
            </Button>
          ))}
        </motion.div>

        {/* Tutorial Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((tutorial, index) => (
              <motion.div key={tutorial.id} variants={itemVariants}>
                <Card
                  data-ocid={`tutorials.item.${index + 1}`}
                  className="glass-effect group h-full cursor-pointer border-border/30 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_24px_oklch(var(--accent)/0.08)]"
                >
                  <CardHeader className="pb-3">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                        {tutorial.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="size-3" />
                        {tutorial.duration}
                      </span>
                    </div>
                    <CardTitle className="font-display text-lg leading-snug">
                      {tutorial.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col justify-between">
                    <CardDescription className="text-sm leading-relaxed">
                      {tutorial.description}
                    </CardDescription>
                    <div className="mt-4 flex items-center gap-1 text-xs font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                      <span>Read more</span>
                      <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="py-20 text-center">
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
