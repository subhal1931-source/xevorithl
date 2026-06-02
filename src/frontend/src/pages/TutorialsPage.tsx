import { cn } from "@/lib/utils";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Layers,
  Mail,
  Search,
  Send,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const categories = [
  "All",
  "AI",
  "Robotics",
  "Electronics",
  "SBC",
  "Web Apps",
  "Game Dev",
  "IoT",
  "Cybersecurity",
  "Cloud",
  "DevOps",
  "Data Science",
  "Computer Vision",
  "3D Printing",
  "Embedded",
  "Mobile Apps",
  "UI/UX",
  "Career",
] as const;

type Category = (typeof categories)[number];

type Tutorial = {
  id: number;
  title: string;
  category: Exclude<Category, "All">;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  description: string;
};

const palette = [
  "#00d4ff",
  "#4d9fff",
  "#a855f7",
  "#00ffc8",
  "#ff6b9d",
  "#facc15",
  "#fb923c",
  "#34d399",
  "#38bdf8",
  "#c084fc",
  "#f472b6",
  "#22d3ee",
  "#a3e635",
  "#f87171",
  "#818cf8",
  "#2dd4bf",
  "#e879f9",
  "#fde047",
];

const categoryColors: Record<
  string,
  { accent: string; border: string; glow: string }
> = Object.fromEntries(
  categories.map((category, index) => {
    const color = palette[index % palette.length];
    return [
      category,
      {
        accent: color,
        border: "border-t-[#00d4ff]",
        glow: "hover:shadow-[0_0_50px_rgba(0,212,255,0.22)]",
      },
    ];
  }),
);

const tutorials: Tutorial[] = [
  {
    id: 1,
    title: "Getting Started with Neural Networks",
    category: "AI",
    duration: "45 min",
    level: "Beginner",
    description:
      "Build your first neural network in Python and understand datasets, layers, training loops, evaluation, and model saving.",
  },
  {
    id: 2,
    title: "Prompt Engineering for Practical Automation",
    category: "AI",
    duration: "35 min",
    level: "Beginner",
    description:
      "Create reusable prompt patterns for summarization, classification, coding assistance, and workflow planning.",
  },
  {
    id: 3,
    title: "Fine-Tuning Concepts Without the Hype",
    category: "AI",
    duration: "55 min",
    level: "Intermediate",
    description:
      "Learn when fine-tuning helps, how to prepare examples, and how to evaluate model behavior responsibly.",
  },
  {
    id: 4,
    title: "ROS2 Robot Navigation Basics",
    category: "Robotics",
    duration: "60 min",
    level: "Intermediate",
    description:
      "Set up ROS2 navigation, mapping, localization, and safe path planning for an autonomous robot platform.",
  },
  {
    id: 5,
    title: "Building a 3D Printed Robot Arm",
    category: "Robotics",
    duration: "90 min",
    level: "Intermediate",
    description:
      "Design, print, assemble, and calibrate a compact servo-powered arm with repeatable movement routines.",
  },
  {
    id: 6,
    title: "Line-Following Robot from Scratch",
    category: "Robotics",
    duration: "50 min",
    level: "Beginner",
    description:
      "Combine IR sensors, motor drivers, and control logic to build a reliable classroom-friendly robot.",
  },
  {
    id: 7,
    title: "Arduino Sensor Interfacing",
    category: "Electronics",
    duration: "30 min",
    level: "Beginner",
    description:
      "Wire analog and digital sensors, debounce inputs, smooth noisy readings, and display useful measurements.",
  },
  {
    id: 8,
    title: "PCB Design for Beginners",
    category: "Electronics",
    duration: "50 min",
    level: "Beginner",
    description:
      "Create a KiCad schematic, route a simple PCB, check manufacturability, and prepare fabrication files.",
  },
  {
    id: 9,
    title: "Power Budgeting for Maker Projects",
    category: "Electronics",
    duration: "40 min",
    level: "Intermediate",
    description:
      "Estimate current draw, choose regulators, protect batteries, and avoid overheating in portable builds.",
  },
  {
    id: 10,
    title: "Raspberry Pi Home Server",
    category: "SBC",
    duration: "40 min",
    level: "Beginner",
    description:
      "Turn a Raspberry Pi into a small home server with Docker containers, backups, and secure remote access.",
  },
  {
    id: 11,
    title: "Jetson Nano AI at the Edge",
    category: "SBC",
    duration: "70 min",
    level: "Advanced",
    description:
      "Deploy optimized computer-vision models on NVIDIA Jetson hardware for real-time edge inference.",
  },
  {
    id: 12,
    title: "Orange Pi Media and Automation Hub",
    category: "SBC",
    duration: "45 min",
    level: "Intermediate",
    description:
      "Install Linux, tune storage, and run useful services for dashboards, automation, and media utilities.",
  },
  {
    id: 13,
    title: "Responsive Portfolio Website Build",
    category: "Web Apps",
    duration: "55 min",
    level: "Beginner",
    description:
      "Plan sections, build reusable components, improve accessibility, and deploy a fast portfolio website.",
  },
  {
    id: 14,
    title: "Full-Stack Project Dashboard",
    category: "Web Apps",
    duration: "85 min",
    level: "Intermediate",
    description:
      "Create a dashboard with typed data models, form validation, charts, and clean loading states.",
  },
  {
    id: 15,
    title: "SEO Checklist for Technical Blogs",
    category: "Web Apps",
    duration: "25 min",
    level: "Beginner",
    description:
      "Write searchable titles, metadata, internal links, and helpful content structures for tutorial websites.",
  },
  {
    id: 16,
    title: "2D Game Prototype Loop",
    category: "Game Dev",
    duration: "60 min",
    level: "Beginner",
    description:
      "Design a core mechanic, prototype controls, add scoring, and polish feedback for a playable demo.",
  },
  {
    id: 17,
    title: "Game Feel with Particles and Sound",
    category: "Game Dev",
    duration: "45 min",
    level: "Intermediate",
    description:
      "Use timing, screenshake, particles, animation curves, and sound cues to make interactions feel alive.",
  },
  {
    id: 18,
    title: "ESP32 Weather Station",
    category: "IoT",
    duration: "50 min",
    level: "Beginner",
    description:
      "Read temperature, humidity, and pressure sensors, publish values, and build a simple live dashboard.",
  },
  {
    id: 19,
    title: "MQTT for Home Automation",
    category: "IoT",
    duration: "55 min",
    level: "Intermediate",
    description:
      "Connect microcontrollers and services with MQTT topics, retained messages, and safe access controls.",
  },
  {
    id: 20,
    title: "Secure Your Developer Laptop",
    category: "Cybersecurity",
    duration: "35 min",
    level: "Beginner",
    description:
      "Apply practical hardening steps: updates, password managers, disk encryption, backups, and phishing awareness.",
  },
  {
    id: 21,
    title: "Web Security Fundamentals",
    category: "Cybersecurity",
    duration: "65 min",
    level: "Intermediate",
    description:
      "Understand common vulnerabilities, safe authentication habits, input validation, headers, and dependency hygiene.",
  },
  {
    id: 22,
    title: "Deploy a Static Site to the Cloud",
    category: "Cloud",
    duration: "35 min",
    level: "Beginner",
    description:
      "Choose hosting, configure a domain, enable HTTPS, set cache headers, and monitor uptime.",
  },
  {
    id: 23,
    title: "Serverless API Starter",
    category: "Cloud",
    duration: "55 min",
    level: "Intermediate",
    description:
      "Build an API with environment variables, structured logs, validation, and simple cost controls.",
  },
  {
    id: 24,
    title: "GitHub Actions CI Pipeline",
    category: "DevOps",
    duration: "45 min",
    level: "Beginner",
    description:
      "Automate linting, tests, builds, artifact uploads, and deployment gates for a small project.",
  },
  {
    id: 25,
    title: "Docker Compose for Local Development",
    category: "DevOps",
    duration: "50 min",
    level: "Intermediate",
    description:
      "Run databases, APIs, and supporting services locally with repeatable containers and health checks.",
  },
  {
    id: 26,
    title: "Data Cleaning with Python",
    category: "Data Science",
    duration: "45 min",
    level: "Beginner",
    description:
      "Load messy data, handle missing values, normalize columns, and create a repeatable cleaning notebook.",
  },
  {
    id: 27,
    title: "Build a Sensor Data Dashboard",
    category: "Data Science",
    duration: "75 min",
    level: "Intermediate",
    description:
      "Collect readings, chart trends, calculate summary metrics, and explain insights clearly.",
  },
  {
    id: 28,
    title: "Computer Vision with OpenCV",
    category: "Computer Vision",
    duration: "55 min",
    level: "Intermediate",
    description:
      "Implement object detection, contour analysis, image filtering, and live camera processing in Python.",
  },
  {
    id: 29,
    title: "Quality Control Camera Rig",
    category: "Computer Vision",
    duration: "80 min",
    level: "Advanced",
    description:
      "Build a repeatable lighting, camera, and inspection pipeline for detecting simple product defects.",
  },
  {
    id: 30,
    title: "3D Printing Calibration Guide",
    category: "3D Printing",
    duration: "40 min",
    level: "Beginner",
    description:
      "Tune bed leveling, extrusion, temperature, supports, and slicer profiles for cleaner prints.",
  },
  {
    id: 31,
    title: "Design Enclosures for Electronics",
    category: "3D Printing",
    duration: "65 min",
    level: "Intermediate",
    description:
      "Model mounting posts, cable openings, ventilation, tolerances, and snap-fit features for boards.",
  },
  {
    id: 32,
    title: "Microcontroller Sleep Modes",
    category: "Embedded",
    duration: "50 min",
    level: "Intermediate",
    description:
      "Reduce power use with sleep modes, interrupts, watchdog timers, and measurement techniques.",
  },
  {
    id: 33,
    title: "Embedded C Debugging Workflow",
    category: "Embedded",
    duration: "70 min",
    level: "Advanced",
    description:
      "Use serial logs, breakpoints, assertions, and datasheet-driven debugging for firmware projects.",
  },
  {
    id: 34,
    title: "Mobile App MVP Planning",
    category: "Mobile Apps",
    duration: "30 min",
    level: "Beginner",
    description:
      "Define user stories, screens, release scope, accessibility needs, and analytics before coding.",
  },
  {
    id: 35,
    title: "Cross-Platform App Components",
    category: "Mobile Apps",
    duration: "60 min",
    level: "Intermediate",
    description:
      "Build reusable mobile UI pieces with loading states, validation, navigation, and offline-friendly patterns.",
  },
  {
    id: 36,
    title: "Design Systems for Builders",
    category: "UI/UX",
    duration: "45 min",
    level: "Beginner",
    description:
      "Create colors, typography, spacing, components, and documentation that keep projects consistent.",
  },
  {
    id: 37,
    title: "Accessibility Audit Basics",
    category: "UI/UX",
    duration: "40 min",
    level: "Intermediate",
    description:
      "Check headings, keyboard navigation, contrast, labels, focus states, and meaningful page structure.",
  },
  {
    id: 38,
    title: "Engineering Portfolio Roadmap",
    category: "Career",
    duration: "30 min",
    level: "Beginner",
    description:
      "Plan projects, document decisions, capture screenshots, write case studies, and present your skills clearly.",
  },
  {
    id: 39,
    title: "Technical Writing for Tutorials",
    category: "Career",
    duration: "35 min",
    level: "Beginner",
    description:
      "Write guides with prerequisites, steps, troubleshooting, safety notes, and concise explanations.",
  },
];

const buildGuideSteps = [
  "Pick one clear problem and write a one-sentence goal, target user, and success metric.",
  "List the parts, tools, software accounts, budget, and safety requirements before buying anything.",
  "Sketch the architecture: inputs, processing, outputs, power, data storage, and user interface.",
  "Build the smallest working prototype first, then test each module separately with notes and photos.",
  "Integrate modules gradually, record failures, and improve wiring, code structure, enclosure, and UX.",
  "Publish a final guide with setup steps, screenshots, source files, credits, limitations, and maintenance tips.",
];

const projectIdeas = [
  "AI camera that counts objects on a workbench",
  "ESP32 environmental monitor with dashboard",
  "Raspberry Pi media and backup server",
  "ROS2 rover with obstacle avoidance",
  "Portfolio website with tutorial articles",
  "3D-printed smart enclosure for a sensor node",
];

const buildGuideSteps = [
  "Pick one clear problem and write a one-sentence goal, target user, and success metric.",
  "List the parts, tools, software accounts, budget, and safety requirements before buying anything.",
  "Sketch the architecture: inputs, processing, outputs, power, data storage, and user interface.",
  "Build the smallest working prototype first, then test each module separately with notes and photos.",
  "Integrate modules gradually, record failures, and improve wiring, code structure, enclosure, and UX.",
  "Publish a final guide with setup steps, screenshots, source files, credits, limitations, and maintenance tips.",
];

const projectIdeas = [
  "AI camera that counts objects on a workbench",
  "ESP32 environmental monitor with dashboard",
  "Raspberry Pi media and backup server",
  "ROS2 rover with obstacle avoidance",
  "Portfolio website with tutorial articles",
  "3D-printed smart enclosure for a sensor node",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

const contactEmail = "CosmicNova369@gmail.com";

function buildMailtoLink(data: {
  name: string;
  email: string;
  topic: string;
  message: string;
}) {
  const subject = data.topic.trim()
    ? `Xevorith tutorial request: ${data.topic.trim()}`
    : "Xevorith tutorial request";
  const body = [
    `Name: ${data.name || "Not provided"}`,
    `Email: ${data.email || "Not provided"}`,
    `Topic: ${data.topic || "Not provided"}`,
    "",
    "Message:",
    data.message || "Please help me choose or build a tutorial project.",
  ].join("\n");

  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function TutorialsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [guideRequest, setGuideRequest] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });

  const filtered =
    activeCategory === "All"
      ? tutorials
      : tutorials.filter((t) => t.category === activeCategory);

  const featuredTutorials = [
    tutorials.find((tutorial) => tutorial.id === 14),
    tutorials.find((tutorial) => tutorial.id === 24),
    tutorials.find((tutorial) => tutorial.id === 28),
  ].filter((tutorial): tutorial is Tutorial => Boolean(tutorial));

  const handleGuideRequestChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setGuideRequest((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  };

  const handleGuideRequestSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    window.location.href = buildMailtoLink(guideRequest);
  };

  return (
    <div className="relative overflow-hidden px-6 py-12 md:py-16">
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

      <div className="mx-auto max-w-7xl">
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
            <span>Xevorith Blog</span>
          </div>
          <h1
            className="font-display text-4xl font-extrabold tracking-tight md:text-6xl"
            style={{
              background: "linear-gradient(135deg, #00d4ff 0%, #a855f7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 24px rgba(0,212,255,0.4))",
            }}
          >
            Tutorials, Blogs & Build Guides
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
            A blog-style learning hub for practical engineering articles:
            featured guides first, clean category browsing, latest posts, and a
            direct email request form for custom project help.
          </p>
        </motion.div>

        <section className="mb-12 grid gap-6 lg:grid-cols-[1.6fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="glass-card relative overflow-hidden rounded-3xl border-t-2 border-t-[#00d4ff] p-6 md:p-8"
          >
            <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#00d4ff]">
                  <Search className="size-4" /> Featured Articles
                </p>
                <h2 className="font-display text-3xl font-bold text-foreground">
                  Start with the most useful project guides
                </h2>
              </div>
              <span className="rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/10 px-4 py-2 text-sm font-semibold text-[#00d4ff]">
                {tutorials.length}+ guides
              </span>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {featuredTutorials.map((tutorial) => {
                const colors =
                  categoryColors[tutorial.category] ?? categoryColors.AI;
                return (
                  <article
                    key={tutorial.id}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div
                      className="absolute inset-x-0 top-0 h-1"
                      style={{ background: colors.accent }}
                    />
                    <div className="mb-4 flex flex-wrap items-center gap-2">
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
                      <span className="text-xs text-muted-foreground">
                        {tutorial.level}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold leading-snug text-foreground">
                      {tutorial.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {tutorial.description}
                    </p>
                    <div className="mt-5 flex items-center justify-between text-xs font-semibold text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="size-3" /> {tutorial.duration}
                      </span>
                      <a
                        href={buildMailtoLink({
                          name: "",
                          email: "",
                          topic: tutorial.title,
                          message: `Hi Xevorith, I want help with this tutorial: ${tutorial.title}`,
                        })}
                        className="flex items-center gap-1 transition-colors hover:text-[#00d4ff]"
                      >
                        Ask help <ArrowRight className="size-3" />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="space-y-5"
          >
            <div className="glass-card rounded-3xl border-t-2 border-t-[#a855f7] p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-xl bg-purple-400/10 text-[#a855f7]">
                  <Mail className="size-5" />
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground">
                    Request a Tutorial
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Send mail directly to us from the website.
                  </p>
                </div>
              </div>

              <form onSubmit={handleGuideRequestSubmit} className="space-y-3">
                <input
                  name="name"
                  value={guideRequest.name}
                  onChange={handleGuideRequestChange}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-foreground outline-none transition focus:border-[#00d4ff]/60"
                />
                <input
                  name="email"
                  type="email"
                  value={guideRequest.email}
                  onChange={handleGuideRequestChange}
                  placeholder="Your email"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-foreground outline-none transition focus:border-[#00d4ff]/60"
                />
                <input
                  name="topic"
                  value={guideRequest.topic}
                  onChange={handleGuideRequestChange}
                  placeholder="Tutorial topic"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-foreground outline-none transition focus:border-[#00d4ff]/60"
                />
                <textarea
                  name="message"
                  value={guideRequest.message}
                  onChange={handleGuideRequestChange}
                  placeholder="Tell us what you want to build..."
                  rows={4}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-foreground outline-none transition focus:border-[#00d4ff]/60"
                />
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-black transition hover:scale-[1.01]"
                  style={{
                    background: "linear-gradient(135deg, #00d4ff, #4d9fff)",
                    boxShadow: "0 0 24px rgba(0,212,255,0.28)",
                  }}
                >
                  <Send className="size-4" />
                  Send Email Request
                </button>
              </form>
              <a
                href={`mailto:${contactEmail}`}
                className="mt-4 block text-center text-sm font-semibold text-[#00d4ff] underline underline-offset-4"
              >
                Or email {contactEmail}
              </a>
            </div>

            <div className="glass-card rounded-3xl border-t-2 border-t-[#00ffc8] p-6">
              <h2 className="font-display mb-4 text-xl font-bold text-foreground">
                Build Guide Workflow
              </h2>
              <div className="space-y-3">
                {buildGuideSteps.slice(0, 4).map((step, index) => (
                  <div key={step} className="flex gap-3 text-sm">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#00ffc8]/10 text-xs font-bold text-[#00ffc8]">
                      {index + 1}
                    </span>
                    <p className="leading-relaxed text-muted-foreground">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>
        </section>

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
                data-ocid={`tutorials.filter.${cat.toLowerCase().replace(/\s+/g, "_")}_button`}
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

        <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Layers className="size-4 text-[#00d4ff]" />
            Showing {filtered.length} article{filtered.length === 1 ? "" : "s"}{" "}
            in {activeCategory}
          </div>
          <a
            href={`mailto:${contactEmail}?subject=${encodeURIComponent("Xevorith tutorial question")}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#00d4ff] underline underline-offset-4"
          >
            <Mail className="size-4" /> Contact tutorial team
          </a>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid gap-5 md:grid-cols-2"
          >
            {filtered.map((tutorial, index) => {
              const colors =
                categoryColors[tutorial.category] ?? categoryColors.AI;
              return (
                <motion.article
                  key={tutorial.id}
                  variants={itemVariants}
                  data-ocid={`tutorials.item.${index + 1}`}
                  className="glass-card group relative overflow-hidden rounded-2xl border border-white/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(0,212,255,0.14)]"
                  style={{ borderTop: `2px solid ${colors.accent}` }}
                >
                  <div className="flex h-full flex-col gap-4 md:flex-row">
                    <div
                      className="flex min-h-28 w-full shrink-0 items-center justify-center rounded-2xl md:w-36"
                      style={{
                        background: `linear-gradient(135deg, ${colors.accent}22, rgba(255,255,255,0.04))`,
                        border: `1px solid ${colors.accent}26`,
                      }}
                    >
                      <BookOpen
                        className="size-9"
                        style={{ color: colors.accent }}
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="mb-2 flex flex-wrap items-center gap-2">
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
                        <span className="rounded-full border border-white/10 px-2 py-0.5 text-xs text-muted-foreground">
                          {tutorial.level}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-bold leading-snug text-foreground">
                        {tutorial.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {tutorial.description}
                      </p>
                      <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-semibold">
                        <span style={{ color: colors.accent }}>Read guide</span>
                        <a
                          href={buildMailtoLink({
                            name: "",
                            email: "",
                            topic: tutorial.title,
                            message: `Hi Xevorith, please send more details about: ${tutorial.title}`,
                          })}
                          className="inline-flex items-center gap-1 text-[#00d4ff] transition hover:text-white"
                        >
                          Ask by email
                          <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="pointer-events-none absolute -right-4 -bottom-4 h-20 w-20 rounded-full opacity-15 blur-xl"
                    style={{ background: colors.accent }}
                  />
                </motion.article>
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

        <section className="mt-12 grid gap-5 md:grid-cols-3">
          {projectIdeas.map((idea) => (
            <div
              key={idea}
              className="glass-card rounded-2xl border border-white/10 p-5 text-sm leading-relaxed text-muted-foreground"
            >
              <CheckCircle2 className="mb-3 size-5 text-[#00ffc8]" />
              {idea}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
