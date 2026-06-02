import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Layers,
  Mail,
  Search,
  Send,
  Wrench,
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
  guide?: ProjectGuide;
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

  {
    id: 40,
    title: "Build a Safe DC Bench Power Supply",
    category: "Electronics",
    duration: "120 min",
    level: "Intermediate",
    description:
      "Build a compact adjustable bench power supply for electronics testing using a DC adapter, buck converter, meters, fuses, and banana outputs.",
    guide: {
      components: [
        "24V 5A certified DC power adapter (use an external adapter; do not wire AC mains inside the project)",
        "Adjustable CC/CV buck converter module rated above your target current",
        "Digital voltmeter/ammeter panel meter with shunt if required",
        "Inline fuse holder with 5A fuse for input protection",
        "Panel power switch rated for DC current",
        "Red and black banana binding posts",
        "Output terminal block or XT60 connector for internal wiring",
        "Project enclosure with ventilation slots",
        "16-18 AWG wire for power path and 22 AWG wire for meter signals",
        "Heat-shrink tubing, cable glands, screws, labels, and rubber feet",
        "Multimeter for calibration and polarity checks",
      ],
      wiring: [
        "DC adapter positive -> fuse -> panel switch -> buck converter VIN+.",
        "DC adapter negative -> buck converter VIN- and common meter ground.",
        "Buck converter OUT+ -> ammeter shunt/current input -> red banana post.",
        "Buck converter OUT- -> black banana post and meter voltage negative reference.",
        "Panel voltmeter sense positive connects to the final red output post, not only the buck module pad.",
        "Panel voltmeter sense negative connects to the final black output post.",
        "Keep high-current wires short, twisted where possible, and separated from thin meter signal wires.",
        "Add strain relief at the DC input jack so cable movement cannot pull internal terminals loose.",
        "Label polarity, max voltage, max current, and fuse rating on the enclosure before use.",
      ],
      steps: [
        "Plan target output range, for example 0-20V and 0-3A, and choose a buck converter with at least 25% extra rating.",
        "Drill/cut the enclosure for DC input, switch, display, adjustment knobs, vents, and banana posts.",
        "Mount the buck converter with airflow clearance and avoid letting the underside touch metal screws.",
        "Wire the input fuse and switch first, then verify polarity at VIN with a multimeter before connecting the buck converter.",
        "Wire the output through the current shunt or ammeter path exactly as the meter datasheet shows.",
        "Set the buck converter voltage with no load, then connect a dummy load and set the current limit slowly.",
        "Compare panel meter readings against a multimeter and adjust calibration screws if the module supports it.",
        "Run a 30-minute load test at half current; check heat, smell, loose terminals, and voltage drop.",
        "Close the enclosure, add labels, and write a small table of safe starter settings for Arduino, ESP32, motors, and LEDs.",
        "Never connect this DIY supply to AC mains internally; use only the certified external DC adapter input.",
      ],
      code: `// Optional Arduino voltage/current logger for your bench supply
// Use voltage dividers and current sensors rated for your supply.
const int voltagePin = A0;
const int currentPin = A1;
const float adcRef = 5.0;
const float voltageDividerRatio = 5.0; // adjust after calibration
const float ampsPerVolt = 1.0; // adjust for your current sensor

void setup() {
  Serial.begin(9600);
}

void loop() {
  float vSense = analogRead(voltagePin) * adcRef / 1023.0;
  float iSense = analogRead(currentPin) * adcRef / 1023.0;
  float outputVoltage = vSense * voltageDividerRatio;
  float outputCurrent = iSense * ampsPerVolt;
  Serial.print("V="); Serial.print(outputVoltage, 2);
  Serial.print(" I="); Serial.println(outputCurrent, 2);
  delay(500);
}`,
    },
  },
  {
    id: 41,
    title: "ESP32 Mini Drone Flight Controller",
    category: "Robotics",
    duration: "150 min",
    level: "Advanced",
    description:
      "Prototype a tiny ESP32-based quadcopter controller with an IMU, ESC outputs, arming logic, motor mixing, and a safe tethered test workflow.",
    guide: {
      components: [
        "ESP32 development board or ESP32 flight-controller PCB",
        "MPU6050/MPU6500 IMU module",
        "4 micro brushless motors matched to frame size",
        "4 ESCs or a 4-in-1 micro ESC board",
        "2S LiPo battery with correct C rating",
        "5V/3.3V regulator if the ESP32 board cannot be powered directly from ESC BEC",
        "Mini quad frame, propellers, motor screws, and vibration-damping foam",
        "RC receiver with PWM/SBUS/IBUS output or a separate ESP-NOW controller",
        "Power switch, XT30/JST connector, heat shrink, zip ties, and prop guards",
        "USB cable for programming and serial tuning",
      ],
      wiring: [
        "LiPo positive/negative -> ESC power input; add correct connector polarity and never short the battery.",
        "Regulated 5V or 3.3V -> ESP32 power input according to your board documentation.",
        "ESP32 GND, ESC signal GND, receiver GND, and IMU GND must be common.",
        "IMU SDA -> ESP32 GPIO 21 and SCL -> GPIO 22 for default I2C, with 3.3V power.",
        "ESC signal inputs connect to four ESP32 PWM-capable GPIO pins such as 13, 12, 14, and 27.",
        "Receiver throttle/roll/pitch/yaw signals connect to interrupt-capable GPIO pins or one serial input for SBUS/IBUS.",
        "Mount the IMU flat, centered, and aligned with the drone forward direction; mark the arrow on the frame.",
        "Perform first motor spin tests without propellers installed.",
        "Install propellers only after arming logic, failsafe, and motor directions are verified.",
      ],
      steps: [
        "Build the frame and mount motors so wires do not touch propellers or sharp carbon edges.",
        "Flash the ESP32 with an IMU read test and confirm roll/pitch change correctly in Serial Monitor.",
        "Calibrate gyro offsets while the drone is perfectly still on a level surface.",
        "Wire ESC signal pins and test each motor individually with propellers removed.",
        "Confirm motor order: front-left, front-right, rear-right, rear-left, then set correct spin directions.",
        "Add receiver input and verify throttle, arm switch, roll, pitch, and yaw ranges before enabling motors.",
        "Implement PID stabilization and start with very small P values; keep I and D low until stable.",
        "Use a tethered test stand or hold-down jig for the first stabilization test; never hand-launch untested code.",
        "Add failsafe: if receiver signal is lost or angle exceeds a safe limit, set all motors to zero.",
        "Tune PID slowly outdoors in a legal, open area with eye protection and prop guards.",
      ],
      code: `// ESP32 mini drone control skeleton: IMU + motor mixer placeholder
// This is a starting point, not a ready-to-fly autopilot.
#include <Wire.h>
#include <ESP32Servo.h>

Servo motorFL, motorFR, motorRR, motorRL;
const int pinFL = 13, pinFR = 12, pinRR = 14, pinRL = 27;
float rollPid = 0, pitchPid = 0, yawPid = 0;
int throttle = 1000; // microseconds, 1000 stopped, 2000 full
bool armed = false;

void setup() {
  Serial.begin(115200);
  Wire.begin(21, 22);
  motorFL.attach(pinFL, 1000, 2000);
  motorFR.attach(pinFR, 1000, 2000);
  motorRR.attach(pinRR, 1000, 2000);
  motorRL.attach(pinRL, 1000, 2000);
  writeAll(1000);
}

void writeAll(int us) {
  motorFL.writeMicroseconds(us);
  motorFR.writeMicroseconds(us);
  motorRR.writeMicroseconds(us);
  motorRL.writeMicroseconds(us);
}

void loop() {
  // TODO: read IMU angles, receiver channels, and compute PID outputs.
  if (!armed) {
    writeAll(1000);
    return;
  }

  int fl = throttle + pitchPid + rollPid - yawPid;
  int fr = throttle + pitchPid - rollPid + yawPid;
  int rr = throttle - pitchPid - rollPid - yawPid;
  int rl = throttle - pitchPid + rollPid + yawPid;

  motorFL.writeMicroseconds(constrain(fl, 1000, 2000));
  motorFR.writeMicroseconds(constrain(fr, 1000, 2000));
  motorRR.writeMicroseconds(constrain(rr, 1000, 2000));
  motorRL.writeMicroseconds(constrain(rl, 1000, 2000));
}`,
    },
  },
  {
    id: 42,
    title: "Build an RC Plane from Foam Board",
    category: "Robotics",
    duration: "140 min",
    level: "Intermediate",
    description:
      "Create a simple foam-board RC plane with a brushless motor, ESC, receiver, servos, control surfaces, center-of-gravity checks, and a pre-flight checklist.",
    guide: {
      components: [
        "Foam board or depron sheets",
        "Carbon spar, wooden dowel, or lightweight reinforcement strip",
        "Brushless outrunner motor sized for the airframe",
        "ESC matched to motor current with 20-30% headroom",
        "2S or 3S LiPo battery",
        "2.4GHz transmitter and receiver",
        "2-4 micro servos for elevator, ailerons, and rudder",
        "Propeller matched to motor KV and battery voltage",
        "Control horns, pushrods, hinges/tape, hot glue, and packing tape",
        "Battery strap, Velcro, landing gear wire or skid, and CG marker",
      ],
      wiring: [
        "LiPo -> ESC power input using the correct polarized connector.",
        "ESC three motor wires -> motor; swap any two wires if rotation direction is wrong.",
        "ESC signal plug -> receiver throttle channel; ESC BEC powers receiver if supported.",
        "Elevator servo -> receiver elevator channel; aileron servo -> aileron channel; rudder servo -> rudder channel.",
        "Servo signal wires usually face the receiver signal row; brown/black wires face ground row.",
        "Secure the receiver away from the motor and route antennas away from carbon or battery wires.",
        "Keep battery wiring short and strain-relieved so it cannot slide into the propeller arc.",
        "Perform all radio setup with the propeller removed until throttle direction and failsafe are confirmed.",
      ],
      steps: [
        "Choose a proven beginner wing shape and draw full-size templates for fuselage, wing, tail, and control surfaces.",
        "Cut foam parts cleanly, bevel hinge lines, and reinforce the wing with a spar before final assembly.",
        "Glue fuselage and wing square; measure left/right wing tips to keep alignment equal.",
        "Install servos near control surfaces and make pushrods as straight as possible to reduce slop.",
        "Mount motor with slight down/right thrust if your design recommends it, then secure ESC with airflow.",
        "Connect receiver channels, center all trims, and set servo direction before attaching pushrods permanently.",
        "Mark the center of gravity and move battery until the plane balances slightly nose-heavy.",
        "Set low rates and 20-30% expo on transmitter for the first flight.",
        "Do a range check, failsafe check, control direction check, and glide toss without power if safe for the model.",
        "First powered flight should be in a wide open legal area with calm wind and an experienced spotter if possible.",
      ],
      code: `// Optional Arduino receiver + servo bench tester for RC plane setup
#include <Servo.h>
Servo testServo;
const int receiverPin = 2;
const int servoPin = 9;
volatile unsigned long riseTime = 0;
volatile int pulseWidth = 1500;

void readPulse() {
  if (digitalRead(receiverPin)) {
    riseTime = micros();
  } else {
    pulseWidth = micros() - riseTime;
  }
}

void setup() {
  Serial.begin(9600);
  pinMode(receiverPin, INPUT);
  attachInterrupt(digitalPinToInterrupt(receiverPin), readPulse, CHANGE);
  testServo.attach(servoPin);
}

void loop() {
  int safePulse = constrain(pulseWidth, 1000, 2000);
  testServo.writeMicroseconds(safePulse);
  Serial.println(safePulse);
  delay(50);
}`,
    },
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
  "Safe DC bench power supply for electronics testing",
  "ESP32 mini drone flight controller prototype",
  "Foam-board RC plane with receiver and servo setup",
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

type ProjectGuide = {
  components: string[];
  wiring: string[];
  steps: string[];
  code: string;
};

type GuideBlueprint = { components: string[]; wiring: string[]; code: string };

const guideBlueprints: Record<Tutorial["category"], GuideBlueprint> = {
  AI: {
    components: [
      "Computer with Python 3.11+",
      "VS Code",
      "Dataset folder",
      "Python packages: numpy, pandas, scikit-learn",
    ],
    wiring: [
      "No physical wiring is required.",
      "Create folders: data/raw, data/processed, src, models.",
      "Keep dataset files separate from source code.",
    ],
    code: "python -m venv .venv\nsource .venv/bin/activate\npip install pandas scikit-learn joblib\npython src/train.py",
  },
  Robotics: {
    components: [
      "Robot chassis",
      "Microcontroller",
      "Motor driver",
      "Motors/servos",
      "Battery pack",
      "Sensors",
    ],
    wiring: [
      "Battery positive -> switch/fuse -> motor driver VIN.",
      "All grounds must be common.",
      "PWM pins connect to motor speed pins; direction pins connect to IN pins.",
      "Sensors connect to rated VCC, GND, and signal pins.",
    ],
    code: "const int motorPwm = 5;\nconst int motorDir = 4;\nvoid setup(){ pinMode(motorPwm, OUTPUT); pinMode(motorDir, OUTPUT); }\nvoid loop(){ digitalWrite(motorDir, HIGH); analogWrite(motorPwm, 120); delay(1000); analogWrite(motorPwm, 0); delay(1000); }",
  },
  Electronics: {
    components: [
      "Arduino-compatible board",
      "Breadboard",
      "Jumper wires",
      "Sensors/LEDs/resistors",
      "Multimeter",
    ],
    wiring: [
      "Board GND -> breadboard ground rail.",
      "Board 5V/3.3V -> positive rail only for compatible parts.",
      "Signal pins connect to analog or digital inputs.",
      "LEDs must use current-limiting resistors.",
    ],
    code: "const int sensorPin = A0;\nvoid setup(){ Serial.begin(9600); }\nvoid loop(){ Serial.println(analogRead(sensorPin)); delay(250); }",
  },
  SBC: {
    components: [
      "Raspberry Pi/Jetson/Orange Pi",
      "microSD or SSD",
      "Power supply",
      "Network connection",
      "Keyboard/monitor or SSH",
    ],
    wiring: [
      "Flash OS image to storage before boot.",
      "Use official power input.",
      "Connect network for updates and remote access.",
      "Use 3.3V-safe GPIO or level shifters for sensors.",
    ],
    code: "sudo apt update && sudo apt upgrade -y\nsudo apt install -y python3-venv git\npython3 -m venv .venv\nsource .venv/bin/activate",
  },
  "Web Apps": {
    components: [
      "Node.js 20+",
      "Code editor",
      "Git repository",
      "Browser",
      "Hosting account",
    ],
    wiring: [
      "No hardware wiring is required.",
      "Connect routes to page components.",
      "Connect forms to mailto or backend APIs.",
      "Connect production build output to hosting.",
    ],
    code: "pnpm create vite my-app --template react-ts\ncd my-app\npnpm install\npnpm dev\npnpm build",
  },
  "Game Dev": {
    components: [
      "Game engine or HTML canvas",
      "Keyboard/controller",
      "Placeholder art",
      "Sound effects",
      "Playtest checklist",
    ],
    wiring: [
      "No physical wiring is required.",
      "Connect input controls to player actions.",
      "Connect collision events to score/health.",
      "Connect UI state to restart and game-over screens.",
    ],
    code: "function loop(){ updatePlayer(); drawScene(); requestAnimationFrame(loop); }\nloop();",
  },
  IoT: {
    components: [
      "ESP32 board",
      "Sensor module",
      "Breadboard",
      "Jumper wires",
      "Wi-Fi network",
    ],
    wiring: [
      "ESP32 3V3 -> sensor VCC.",
      "ESP32 GND -> sensor GND.",
      "Sensor data -> safe ESP32 GPIO.",
      "Add pull-up resistor if the sensor datasheet requires it.",
    ],
    code: '#include <WiFi.h>\nvoid setup(){ Serial.begin(115200); }\nvoid loop(){ Serial.println("publish sensor value"); delay(2000); }',
  },
  Cybersecurity: {
    components: [
      "Authorized computer",
      "Password manager",
      "Backup drive",
      "Updated browser",
      "Local test VM",
    ],
    wiring: [
      "No physical wiring is required.",
      "Only test systems you own or have permission to assess.",
      "Separate labs from personal accounts.",
      "Keep backups protected.",
    ],
    code: "whoami\nuname -a\nss -tulpen\nlast -a | head",
  },
  Cloud: {
    components: [
      "Cloud account",
      "Domain/subdomain",
      "Git repository",
      "Build output",
      "Budget alert",
    ],
    wiring: [
      "Connect repository to hosting provider.",
      "Set DNS records to the deployment target.",
      "Store secrets as environment variables.",
      "Enable HTTPS.",
    ],
    code: "pnpm install\npnpm build\n# upload dist/ to your host and enable SPA fallback to index.html",
  },
  DevOps: {
    components: [
      "Git repository",
      "CI provider",
      "Lockfile",
      "Build commands",
      "Deployment secrets",
    ],
    wiring: [
      "Connect repository to CI.",
      "Connect CI secrets with least privilege.",
      "Separate install, typecheck, build, and deploy steps.",
      "Require passing checks before merge.",
    ],
    code: "name: ci\non: [push, pull_request]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: pnpm install --frozen-lockfile\n      - run: pnpm build",
  },
  "Data Science": {
    components: [
      "Python environment",
      "CSV/JSON dataset",
      "Notebook or scripts",
      "Charting library",
      "README",
    ],
    wiring: [
      "No physical wiring is required unless using sensors.",
      "Put raw files in data/raw.",
      "Write cleaned data to data/processed.",
      "Save charts under reports/figures.",
    ],
    code: "import pandas as pd\ndf = pd.read_csv('data/raw/data.csv')\ndf = df.drop_duplicates().dropna()\nprint(df.describe())",
  },
  "Computer Vision": {
    components: [
      "USB/CSI camera",
      "Computer/SBC",
      "Stable lighting",
      "Python + OpenCV",
      "Camera mount",
    ],
    wiring: [
      "Connect camera by USB or CSI ribbon.",
      "Mount camera firmly.",
      "Use consistent lighting.",
      "Use 3.3V-safe GPIO for triggers.",
    ],
    code: "import cv2\ncap=cv2.VideoCapture(0)\nok, frame = cap.read()\nprint(ok, frame.shape if ok else None)\ncap.release()",
  },
  "3D Printing": {
    components: [
      "FDM printer",
      "PLA/PETG",
      "Slicer",
      "Calipers",
      "Fasteners/inserts",
    ],
    wiring: [
      "No wiring for printed-only parts.",
      "Plan cable holes before printing enclosures.",
      "Keep vents clear for electronics.",
      "Use standoffs or inserts for PCBs.",
    ],
    code: "// OpenSCAD box sketch\ncube([80,50,25]);",
  },
  Embedded: {
    components: [
      "Microcontroller",
      "Programmer/debugger",
      "Breadboard/PCB",
      "Sensor/actuator",
      "Serial monitor",
    ],
    wiring: [
      "Connect regulated power and GND.",
      "Connect programming pins as documented.",
      "Use level shifters for unsafe voltages.",
      "Add decoupling capacitors near modules.",
    ],
    code: "void setup(){ Serial.begin(115200); pinMode(13, OUTPUT); }\nvoid loop(){ digitalWrite(13, !digitalRead(13)); delay(500); }",
  },
  "Mobile Apps": {
    components: [
      "Computer",
      "Phone/emulator",
      "Wireframes",
      "App icon",
      "Crash/analytics plan",
    ],
    wiring: [
      "No physical wiring except USB debugging.",
      "Connect screens through navigation.",
      "Connect forms to state and APIs.",
      "Connect storage only after validation.",
    ],
    code: "function App(){ return <Text>Xevorith mobile project</Text>; }",
  },
  "UI/UX": {
    components: [
      "Design tool",
      "Brand tokens",
      "Component inventory",
      "Accessibility checklist",
      "Prototype",
    ],
    wiring: [
      "No physical wiring is required.",
      "Connect tokens to components.",
      "Connect user flows from landing to action to confirmation.",
      "Connect accessibility notes to interactions.",
    ],
    code: ":root { --accent: #00d4ff; --radius-card: 1rem; --space-2: .5rem; }",
  },
  Career: {
    components: [
      "Portfolio",
      "Case studies",
      "Screenshots",
      "Resume/profile",
      "Repository links",
    ],
    wiring: [
      "No physical wiring is required.",
      "Connect each case study to demo and source links.",
      "Connect contact links to email.",
      "Connect listed skills to real evidence.",
    ],
    code: "## Case Study\nProblem:\nBuild:\nResult:\nLessons learned:",
  },
};

function getProjectGuide(tutorial: Tutorial): ProjectGuide {
  if (tutorial.guide) {
    return tutorial.guide;
  }

  const blueprint =
    guideBlueprints[tutorial.category] ?? guideBlueprints["Web Apps"];
  return {
    components: blueprint.components,
    wiring: blueprint.wiring,
    steps: [
      `Define the goal for ${tutorial.title} and write what success looks like.`,
      "Collect every component, account, dataset, tool, or library from the checklist before starting.",
      "Follow the wiring/connection plan carefully and verify power, ground, routes, or folders before running code.",
      "Create the code or configuration shown below, then run the smallest possible test first.",
      "Debug one module at a time, document screenshots or serial output, and repeat the test.",
      `Publish the finished ${tutorial.title} project with setup notes, limitations, final code, and troubleshooting tips.`,
    ],
    code: blueprint.code,
  };
}

export default function TutorialsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedTutorial, setSelectedTutorial] = useState<Tutorial | null>(
    null,
  );
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

  const openGuide = (tutorial: Tutorial) => {
    setSelectedTutorial(tutorial);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (selectedTutorial) {
    const guide = getProjectGuide(selectedTutorial);
    const colors =
      categoryColors[selectedTutorial.category] ?? categoryColors.AI;

    return (
      <div className="relative overflow-hidden px-6 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <button
            type="button"
            onClick={() => setSelectedTutorial(null)}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-[#00d4ff] transition hover:bg-white/[0.08]"
          >
            <ArrowLeft className="size-4" /> Back to tutorials
          </button>

          <article className="glass-card overflow-hidden rounded-3xl border border-white/10">
            <div
              className="p-6 md:p-10"
              style={{ borderTop: `3px solid ${colors.accent}` }}
            >
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <span
                  className="rounded-full px-3 py-1 text-xs font-bold"
                  style={{
                    background: `${colors.accent}18`,
                    color: colors.accent,
                    border: `1px solid ${colors.accent}40`,
                  }}
                >
                  {selectedTutorial.category}
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted-foreground">
                  {selectedTutorial.level}
                </span>
                <span className="flex items-center gap-1 rounded-full border border-white/10 px-3 py-1 text-xs text-muted-foreground">
                  <Clock className="size-3" /> {selectedTutorial.duration}
                </span>
              </div>

              <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
                {selectedTutorial.title}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                {selectedTutorial.description}
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <section className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                  <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-bold text-foreground">
                    <Wrench
                      className="size-5"
                      style={{ color: colors.accent }}
                    />{" "}
                    Components Required
                  </h2>
                  <ul className="space-y-2">
                    {guide.components.map((component) => (
                      <li
                        key={component}
                        className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#00ffc8]" />
                        {component}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                  <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-bold text-foreground">
                    <Layers
                      className="size-5"
                      style={{ color: colors.accent }}
                    />{" "}
                    Wiring / Connections
                  </h2>
                  <ol className="space-y-2">
                    {guide.wiring.map((wire, index) => (
                      <li
                        key={wire}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span
                          className="flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-black"
                          style={{ background: colors.accent }}
                        >
                          {index + 1}
                        </span>
                        {wire}
                      </li>
                    ))}
                  </ol>
                </section>
              </div>

              <section className="mt-5 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <h2 className="mb-4 font-display text-xl font-bold text-foreground">
                  Full Step-by-Step Build
                </h2>
                <ol className="space-y-3">
                  {guide.steps.map((step, index) => (
                    <li
                      key={step}
                      className="rounded-xl border border-white/10 bg-black/20 p-4 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mb-1 block font-bold text-[#00d4ff]">
                        Step {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </section>

              <section className="mt-5 rounded-2xl border border-white/10 bg-black/40 p-5">
                <h2 className="mb-4 font-display text-xl font-bold text-foreground">
                  Code / Commands
                </h2>
                <pre className="max-h-[520px] overflow-auto rounded-xl border border-white/10 bg-black/60 p-4 text-xs leading-relaxed text-[#b8f7ff]">
                  <code>{guide.code}</code>
                </pre>
              </section>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={buildMailtoLink({
                    name: "",
                    email: "",
                    topic: selectedTutorial.title,
                    message: `Hi Xevorith, I am building ${selectedTutorial.title}. Please help me with the components, wiring, and code.`,
                  })}
                  className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-black transition hover:scale-[1.01]"
                  style={{ background: colors.accent }}
                >
                  <Mail className="size-4" /> Ask help for this project
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedTutorial(null)}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-bold text-foreground transition hover:bg-white/[0.08]"
                >
                  View more tutorials
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

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
                        <button
                          type="button"
                          onClick={() => openGuide(tutorial)}
                          className="text-left transition hover:text-white"
                          style={{ color: colors.accent }}
                        >
                          Read guide
                        </button>
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
