import { cn } from "@/lib/utils";
import {
  Cpu,
  Github,
  Mail,
  Radio,
  Layers,
  Calculator,
  CheckCircle2,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const contactEmail = "CosmicNova369@gmail.com";

type ProjectStatus = "In Progress" | "Testing" | "Completed";

type Project = {
  id: string;
  title: string;
  category: string;
  status: ProjectStatus;
  accent: string;
  icon: typeof Cpu;
  summary: string;
  details: string[];
  stack: string[];
  link?: string;
  linkLabel?: string;
};

const projects: Project[] = [
  {
    id: "rc-plane",
    title: "Long-Range HC-12 RC Plane Control System",
    category: "Radio & Embedded Systems",
    status: "In Progress",
    accent: "#00d4ff",
    icon: Radio,
    summary:
      "A custom transmitter and receiver built around HC-12 wireless radio modules and Arduino Nano boards, designed as an alternative to off-the-shelf RC systems for a fixed-wing plane build.",
    details: [
      "The transmitter reads joystick and switch inputs, packages control data, and streams it over the HC-12's sub-GHz link at a fixed update rate to keep control response predictable in the air.",
      "The receiver unpacks incoming frames on the Nano and drives control surfaces and throttle, with fail-safe handling in place for signal loss.",
      "Current focus is a hardware fault where connecting a joystick causes the Nano to heat up, most likely a short on the 5V rail — working through wiring and load diagnostics before the next test flight.",
    ],
    stack: ["Arduino Nano", "HC-12 (433MHz)", "Analog joystick", "C++/Arduino IDE"],
    linkLabel: "Source available on request",
  },
  {
    id: "esp32-drone",
    title: "ESP32-S3 XIAO WiFi Quadcopter Drone",
    category: "Robotics & Flight Control",
    status: "Testing",
    accent: "#4d9fff",
    icon: Cpu,
    summary:
      "A from-scratch quadcopter built on the Seeed XIAO ESP32-S3, controlled from a phone browser over WiFi with a live WebSocket link — no dedicated app or extra radio hardware required.",
    details: [
      "Flight stack uses an MPU6050 IMU for orientation, AO3400 MOSFETs with SS14 flyback diodes to drive coreless brushed motors, and a landscape-locked in-browser transmitter UI for throttle and stick input.",
      "Solved a motor brownout on arming with a throttle spool-up ramp, replaced a burned IMU and added calibration sanity checks plus an in-app recalibration button after the swap introduced a pitch offset at rest.",
      "Finalized motor pin mapping (FL=GPIO1, FR=GPIO2, RL=GPIO4, RR=GPIO43) and built a structured pre-flight checklist covering IMU verification, motor direction testing, prop mounting, and PID tuning order (Kp, then Kd, then Ki).",
      "The build closely follows the open-source CircuitDigest LiteWing reference design, adapted for the ESP32 Arduino core 3.x LEDC API.",
    ],
    stack: [
      "Seeed XIAO ESP32-S3",
      "MPU6050 IMU",
      "AO3400 MOSFETs",
      "WebSocket phone UI",
      "PID control",
    ],
    linkLabel: "Source available on request",
  },
  {
    id: "emi-calculator",
    title: "EMI & Loan Amortization Calculator",
    category: "Web App / FinTech Tools",
    status: "Completed",
    accent: "#00ffc8",
    icon: Calculator,
    summary:
      "A browser-based EMI calculator for Indian borrowers, built to turn a loan amount, interest rate, and tenure into a clear month-by-month repayment picture in Indian Rupee formatting.",
    details: [
      "Breaks each EMI payment into principal and interest using a donut chart, so the split is visible at a glance rather than buried in a table.",
      "Includes a stacked bar chart comparing principal versus interest across the loan's lifetime, useful for comparing different tenure or rate scenarios.",
      "Generates a full 12-month (and beyond) amortization table showing the outstanding balance after every payment.",
    ],
    stack: ["JavaScript", "Chart.js", "INR formatting", "Responsive HTML/CSS"],
    linkLabel: "Source available on request",
  },
  {
    id: "emi-calculator-v2",
    title: "Advanced Loan Planning Calculator",
    category: "Web App / FinTech Tools",
    status: "Completed",
    accent: "#a855f7",
    icon: Layers,
    summary:
      "A second, more detailed loan planning tool built alongside the first EMI calculator, aimed at scenario comparison rather than a single quick estimate.",
    details: [
      "Lets a user model prepayments and rate changes against the base loan schedule to see the effect on total interest and payoff time.",
      "Shares the same Indian Rupee formatting and visual language as the original calculator for a consistent reading experience across both tools.",
    ],
    stack: ["JavaScript", "Chart.js", "INR formatting"],
    linkLabel: "Source available on request",
  },
];

const statusColors: Record<ProjectStatus, string> = {
  "In Progress": "#facc15",
  Testing: "#4d9fff",
  Completed: "#00ffc8",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function ProjectsPage() {
  const [expanded, setExpanded] = useState<string | null>(projects[0]?.id ?? null);

  return (
    <div className="relative overflow-hidden px-6 py-16 md:py-24">
      <div
        className="pointer-events-none absolute -top-24 left-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full opacity-15 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,255,0.6) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-5xl">
        <motion.header
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
            <Wrench className="size-3.5" />
            <span>Projects</span>
          </div>
          <h1
            className="font-display text-4xl font-extrabold tracking-tight md:text-6xl"
            style={{
              background: "linear-gradient(135deg, #00d4ff 0%, #a855f7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Real Builds, Real Progress
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            These are active and completed hobby-engineering projects from the
            Xevorith lab — hardware, firmware, and web tools built end to end,
            documented as they're built, bugs and all.
          </p>
        </motion.header>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6"
        >
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isOpen = expanded === project.id;
            return (
              <motion.article
                key={project.id}
                variants={itemVariants}
                data-ocid={`projects.item.${index + 1}`}
                className="glass-card group relative overflow-hidden rounded-2xl border-t-2 p-6 transition-all duration-300 md:p-8"
                style={{ borderTopColor: project.accent }}
              >
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${project.accent}80, transparent)`,
                  }}
                />

                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex size-12 shrink-0 items-center justify-center rounded-xl"
                      style={{
                        background: `${project.accent}18`,
                        color: project.accent,
                        boxShadow: `0 0 20px ${project.accent}30`,
                      }}
                    >
                      <Icon className="size-6" />
                    </div>
                    <div>
                      <span
                        className="text-xs font-semibold uppercase tracking-widest"
                        style={{ color: project.accent }}
                      >
                        {project.category}
                      </span>
                      <h2 className="font-display mt-1 text-xl font-bold text-foreground md:text-2xl">
                        {project.title}
                      </h2>
                    </div>
                  </div>
                  <span
                    className="shrink-0 rounded-full px-3 py-1 text-xs font-semibold"
                    style={{
                      background: `${statusColors[project.status]}18`,
                      color: statusColors[project.status],
                      border: `1px solid ${statusColors[project.status]}40`,
                    }}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {project.summary}
                </p>

                {isOpen && (
                  <ul className="mt-5 space-y-3">
                    {project.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-4 text-sm leading-relaxed text-muted-foreground"
                      >
                        <CheckCircle2
                          className="mt-0.5 size-4 shrink-0"
                          style={{ color: project.accent }}
                        />
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() =>
                      setExpanded(isOpen ? null : project.id)
                    }
                    className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-black transition hover:scale-[1.03]"
                    style={{
                      background: project.accent,
                      boxShadow: `0 0 20px ${project.accent}50`,
                    }}
                  >
                    {isOpen ? "Hide Build Notes" : "View Build Notes"}
                    <ArrowRight
                      className={cn(
                        "size-4 transition-transform",
                        isOpen && "rotate-90",
                      )}
                    />
                  </button>

                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold transition hover:text-white"
                      style={{ color: project.accent }}
                    >
                      <Github className="size-4" />
                      {project.linkLabel ?? "View Project"}
                    </a>
                  ) : (
                    <a
                      href={`mailto:${contactEmail}?subject=${encodeURIComponent(
                        `Source request: ${project.title}`,
                      )}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition hover:text-foreground"
                    >
                      <Mail className="size-4" />
                      {project.linkLabel ?? "Ask for source access"}
                    </a>
                  )}
                </div>

                <div
                  className="pointer-events-none absolute -right-6 -bottom-6 h-28 w-28 rounded-full opacity-15 blur-2xl"
                  style={{ background: project.accent }}
                />
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card mt-12 rounded-2xl border-t-2 border-t-[#00d4ff] p-6 text-center md:p-10"
        >
          <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
            Got a build you'd like help planning?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Reach out with your project idea, parts list, or a problem you're
            stuck on. We reply from real project experience, not templated
            answers.
          </p>
          <a
            href={`mailto:${contactEmail}`}
            className="mt-6 inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-bold text-black transition hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #00d4ff, #4d9fff)",
              boxShadow:
                "0 0 32px rgba(0,212,255,0.45), 0 0 64px rgba(0,212,255,0.18)",
            }}
          >
            <Mail className="size-4" />
            Email {contactEmail}
          </a>
        </motion.div>
      </div>
    </div>
  );
}
