import { Link } from "@tanstack/react-router";
import { FileText, Mail, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

type LegalPageProps = {
  type: "privacy" | "terms" | "disclaimer";
};

const updatedDate = "June 2, 2026";
const contactEmail = "CosmicNova369@gmail.com";

const pageContent = {
  privacy: {
    eyebrow: "Privacy Policy",
    title: "Privacy Policy",
    intro:
      "This Privacy Policy explains how Xevorith collects, uses, protects, and manages information when you read tutorials, contact us, or interact with our engineering education website.",
    sections: [
      {
        heading: "Information We Collect",
        body: [
          "Information you choose to provide, such as your name, email address, subject, and message when you use the contact form or email us directly.",
          "Basic technical information that browsers and hosting providers commonly make available, such as device type, browser type, approximate region, referring pages, pages visited, and timestamps.",
          "Non-sensitive usage information that helps us understand which tutorials and categories are useful to readers.",
        ],
      },
      {
        heading: "How We Use Information",
        body: [
          "To reply to project questions, support requests, collaboration inquiries, and feedback.",
          "To improve tutorial quality, site navigation, accessibility, performance, safety notes, and troubleshooting resources.",
          "To protect the website from spam, abuse, unauthorized access, and technical issues.",
          "To comply with applicable legal obligations and enforce our website policies.",
        ],
      },
      {
        heading: "Cookies, Analytics, and Advertising",
        body: [
          "Xevorith uses essential cookies for site functionality and may use analytics to measure aggregate traffic and content performance.",
          "This website uses Google AdSense, a third-party advertising service operated by Google LLC. Google AdSense uses cookies — including the DoubleClick cookie — to serve ads based on your prior visits to this website or other websites. These cookies allow Google and its partners to show you ads based on your interests.",
          "Google's use of advertising cookies enables it and its partners to serve ads based on your visit to Xevorith and/or other sites on the Internet. You may opt out of personalised advertising by visiting Google's Ad Settings at https://adssettings.google.com or by visiting the Network Advertising Initiative opt-out page at https://optout.networkadvertising.org.",
          "You can also opt out of personalised advertising for all participating companies via the Digital Advertising Alliance at https://optout.aboutads.info.",
          "You can control and delete cookies through your browser settings. Blocking advertising cookies will not remove advertising from the site — ads will simply be less relevant to you. Blocking essential cookies may affect site functionality.",
        ],
      },
      {
        heading: "Data Sharing",
        body: [
          "We do not sell personal information. We may share limited information with service providers that help operate the website, respond to messages, prevent abuse, provide analytics, or deliver advertising where enabled.",
          "We may disclose information if required by law, to protect rights and safety, or to investigate misuse of the website.",
        ],
      },
      {
        heading: "Data Retention and Security",
        body: [
          "We keep contact messages only as long as reasonably needed to respond, maintain records, improve service, or satisfy legal requirements.",
          "We use reasonable administrative and technical safeguards, but no website or internet transmission can be guaranteed completely secure.",
        ],
      },
      {
        heading: "Your Choices",
        body: [
          "You may ask us to access, update, or delete contact information you provided, subject to reasonable identity verification and legal retention needs.",
          "You can unsubscribe from optional communications if any are offered in the future, and you can manage cookies through your browser or device settings.",
        ],
      },
      {
        heading: "Children's Privacy",
        body: [
          "Xevorith is intended for general engineering education audiences and is not directed at children under 13. We do not knowingly collect personal information from children under 13.",
        ],
      },
      {
        heading: "Contact About Privacy",
        body: [
          `For privacy questions or requests, contact us at ${contactEmail}.`,
        ],
      },
    ],
  },
  terms: {
    eyebrow: "Terms & Conditions",
    title: "Terms & Conditions",
    intro:
      "These Terms & Conditions explain the rules for using Xevorith tutorials, project guides, downloadable materials, contact features, and related website content.",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: [
          "By using this website, you agree to these Terms & Conditions. If you do not agree, please stop using the website.",
          "We may update these terms as the website grows. Continued use after an update means you accept the revised terms.",
        ],
      },
      {
        heading: "Educational Content Only",
        body: [
          "Tutorials, project ideas, code snippets, diagrams, and recommendations are provided for educational and informational purposes.",
          "You are responsible for checking compatibility, local laws, safety requirements, licenses, and manufacturer documentation before building or deploying any project.",
        ],
      },
      {
        heading: "Acceptable Use",
        body: [
          "Do not misuse the website, attempt unauthorized access, submit spam, upload malicious content, scrape excessively, or interfere with site performance.",
          "Do not use Xevorith content to build unsafe devices, violate privacy, attack systems, or break applicable laws.",
        ],
      },
      {
        heading: "Intellectual Property",
        body: [
          "Xevorith names, page designs, original text, graphics, and educational materials are owned by Xevorith or used with permission unless otherwise stated.",
          "You may reference short excerpts with attribution, but you may not copy entire pages, repackage tutorials, or imply endorsement without permission.",
        ],
      },
      {
        heading: "User Messages and Feedback",
        body: [
          "When you send ideas, feedback, or project questions, you confirm that you have the right to share them.",
          "We may use non-confidential feedback to improve tutorials and services, but we will not intentionally publish personal contact details without permission.",
        ],
      },
      {
        heading: "Third-Party Links and Tools",
        body: [
          "The website may mention third-party products, libraries, hosting providers, videos, communities, or tools. We are not responsible for third-party websites, pricing, availability, safety, or policies.",
        ],
      },
      {
        heading: "No Warranties",
        body: [
          "The website is provided on an as-is and as-available basis. We do not promise uninterrupted access, error-free content, or suitability for a specific project.",
        ],
      },
      {
        heading: "Limitation of Liability",
        body: [
          "To the maximum extent permitted by law, Xevorith is not liable for indirect, incidental, special, consequential, or punitive damages arising from use of the website or reliance on tutorials.",
        ],
      },
      {
        heading: "Contact",
        body: [`Questions about these terms can be sent to ${contactEmail}.`],
      },
    ],
  },
  disclaimer: {
    eyebrow: "Disclaimer",
    title: "Disclaimer",
    intro:
      "This Disclaimer explains important limits about Xevorith tutorials, project plans, product mentions, engineering guidance, and website monetization.",
    sections: [
      {
        heading: "General Information",
        body: [
          "Xevorith publishes engineering, software, AI, robotics, electronics, and design content for education. Content should not be treated as professional engineering, legal, financial, medical, or safety certification advice.",
        ],
      },
      {
        heading: "Build and Safety Responsibility",
        body: [
          "Hardware, electronics, robotics, batteries, power supplies, 3D printers, tools, and networked systems can create risks if used incorrectly.",
          "Always follow manufacturer instructions, use protective equipment, disconnect power before wiring, verify ratings, and ask a qualified professional when a project involves mains voltage, high current, vehicles, medical use, public deployment, or safety-critical operation.",
        ],
      },
      {
        heading: "Accuracy and Availability",
        body: [
          "We work to keep content clear and useful, but technologies, libraries, prices, product names, and platform rules change. Verify details before purchasing parts or deploying systems.",
          "We may update, remove, or reorganize content at any time without notice.",
        ],
      },
      {
        heading: "Results May Vary",
        body: [
          "Project outcomes depend on tools, parts quality, environment, skill level, software versions, and testing conditions. We cannot guarantee identical results for every reader.",
        ],
      },
      {
        heading: "Advertising and Affiliate Transparency",
        body: [
          "Xevorith may display ads, sponsored placements, or affiliate links in the future. Such monetization helps support free educational content, and we aim to keep recommendations honest and clearly distinguish advertising where applicable.",
          "Advertising partners may use cookies or similar technologies according to their policies and user controls.",
        ],
      },
      {
        heading: "External Links",
        body: [
          "Links to external websites are provided for convenience and learning. We do not control external content and are not responsible for third-party accuracy, security, terms, or privacy practices.",
        ],
      },
      {
        heading: "Contact",
        body: [`To report an issue with content, email ${contactEmail}.`],
      },
    ],
  },
};

export default function LegalPage({ type }: LegalPageProps) {
  const content = pageContent[type];

  return (
    <div className="relative overflow-hidden px-6 py-12 md:py-16">
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full opacity-15 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,255,0.5) 0%, transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-4xl">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
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
            <ShieldCheck className="size-3.5" />
            <span>{content.eyebrow}</span>
          </div>
          <h1
            className="font-display text-4xl font-extrabold tracking-tight md:text-5xl"
            style={{
              background: "linear-gradient(135deg, #00d4ff 0%, #a855f7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {content.title}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-muted-foreground">
            Last updated: {updatedDate}
          </p>
        </motion.header>

        <motion.article
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card rounded-2xl border-t-2 border-t-[#00d4ff] p-6 md:p-8"
        >
          <div className="mb-8 flex items-start gap-4 rounded-xl border border-[#00d4ff]/20 bg-[#00d4ff]/5 p-4">
            <FileText className="mt-1 size-5 shrink-0 text-[#00d4ff]" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              {content.intro}
            </p>
          </div>

          <div className="space-y-8">
            {content.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display mb-3 text-xl font-bold text-foreground">
                  {section.heading}
                </h2>
                <ul className="space-y-3">
                  {section.body.map((item) => (
                    <li
                      key={item}
                      className="rounded-xl border border-white/10 bg-white/[0.025] p-4 text-sm leading-relaxed text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-[#00ffc8]/20 bg-[#00ffc8]/5 p-5">
            <div className="mb-2 flex items-center gap-2 font-semibold text-[#00ffc8]">
              <Mail className="size-4" />
              Need help?
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Visit the{" "}
              <Link
                to="/contact"
                className="text-[#00d4ff] underline underline-offset-4"
              >
                Contact Us
              </Link>{" "}
              page or email{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="text-[#00d4ff] underline underline-offset-4"
              >
                {contactEmail}
              </a>{" "}
              for questions about this policy.
            </p>
          </div>
        </motion.article>
      </div>
    </div>
  );
}
