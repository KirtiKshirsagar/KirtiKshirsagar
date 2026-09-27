import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  Briefcase,
  CircleDot,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Target,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kirti Kshirsagar — Product Manager | AI & Data Platforms" },
      {
        name: "description",
        content:
          "Portfolio of Kirti Kshirsagar, a Product Manager building AI-enabled and data-driven products. 0→1 launches, pricing platforms, GenAI solutions and experimentation frameworks.",
      },
      { property: "og:title", content: "Kirti Kshirsagar — Product Manager" },
      {
        property: "og:description",
        content:
          "5+ years building AI-enabled, data-driven products across ecommerce and enterprise SaaS. 0→1 launches, GenAI solutions, pricing platforms.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Kirti Kshirsagar — Product Manager" },
      {
        name: "twitter:description",
        content:
          "Product Manager | AI & Data Platforms | LLM-Powered Systems | 0→1 Technical Products",
      },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: Portfolio,
});

const NAV_LINKS = [
  { label: "Experience", href: "#experience" },
  { label: "Impact", href: "#impact" },
  { label: "Skills", href: "#skills" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

const METRICS = [
  {
    value: "24%",
    label: "Checkout conversion lift",
    detail: "Dynamic pricing & discount engine, owned end to end",
  },
  {
    value: "30%",
    label: "Manual triage automated",
    detail: "GenAI support tool built on OpenAI APIs",
  },
  {
    value: "18 min",
    label: "Faster ticket resolution",
    detail: "Average handle time reduced after GenAI rollout",
  },
  {
    value: "18%",
    label: "More new-user sign-ups",
    detail: "Targeted acquisition campaigns + landing page experiments",
  },
];

const EXPERIENCE = [
  {
    role: "Product Manager",
    company: "FirstCry.com",
    period: "Jun 2022 — Present",
    location: "Pune, India",
    tag: "Ecommerce",
    highlights: [
      "Owned the roadmap and delivery of a dynamic pricing and discount engine that increased checkout conversion by 24% while balancing acquisition and profitability.",
      "Launched a GenAI-powered internal support tool on OpenAI APIs, automating 30% of manual triage and cutting average ticket resolution time by 18 minutes.",
      "Executed SQL-driven analytics and A/B testing to optimize feature performance — increasing ROI and reducing marketing spend by 15%.",
      "Analyzed onboarding funnel drop-offs with SQL and cohort analysis, prioritized improvements, and raised activation while shortening first-order completion time.",
      "Established a unified requirement-gathering framework across QA and Engineering, cutting sprint-planning time by 20% and reducing post-release hotfixes.",
      "Accelerated time-to-first-order by 10 days by redesigning the registration funnel around drop-off points found through cohort and funnel analysis.",
    ],
  },
  {
    role: "Business Analyst",
    company: "Netwin Infosolution",
    period: "Mar 2020 — May 2022",
    location: "Nashik, India",
    tag: "Enterprise SaaS",
    highlights: [
      "Led customer discovery with enterprise stakeholders, translating user needs into prioritized PRDs, user stories, and scalable product requirements.",
      "Identified workflow bottlenecks and shipped automation solutions that boosted throughput and reduced manual tasks.",
      "Built low- and high-fidelity wireframes to validate concepts, align stakeholders, and improve usability before engineering build.",
    ],
  },
];

const SKILL_GROUPS = [
  {
    title: "Product Strategy",
    icon: Target,
    skills: [
      "0→1 Product Development",
      "Product Roadmapping",
      "Product Lifecycle Management",
      "PRD / BRD",
      "GTM Strategy",
      "AI-Driven Product Thinking",
      "Executive Stakeholder Management",
    ],
  },
  {
    title: "Data & Analytics",
    icon: CircleDot,
    skills: [
      "GenAI Product",
      "SQL",
      "Python",
      "A/B Testing",
      "Cohort Analysis",
      "Funnel Analysis",
      "Conversion Rate Optimisation",
      "KPI Tracking",
      "Google Analytics",
      "Product Metrics (Adoption, Conversion, Churn)",
      "User Acquisition",
      "Data-Driven Insights",
    ],
  },
  {
    title: "UX & Design",
    icon: BadgeCheck,
    skills: [
      "Wireframing & Prototyping",
      "Figma",
      "Balsamiq",
      "UAT",
      "User-Centered Design",
    ],
  },
  {
    title: "Tools",
    icon: Sparkles,
    skills: [
      "Jira",
      "Confluence",
      "Figma",
      "Excel (Advanced)",
      "CleverTap",
    ],
  },
];

const CREDENTIALS = [
  {
    title: "Scrum Master",
    org: "COEPD",
    note: "Certified Scrum Master",
  },
  {
    title: "SAFe 6 Certified",
    org: "Scaled Agile",
    note: "ID: 86175533-2890",
  },
  {
    title: "IBM AI & Data Science",
    org: "IBM — In Progress",
    note: "Applied ML models, predictive analytics, AI-driven business use cases",
  },
];

const EDUCATION = [
  {
    degree: "B.E. (Information Technology)",
    school: "MET Bhujbal Knowledge City",
    period: "2015 — 2019",
    location: "Nashik",
  },
  {
    degree: "Diploma (Information Technology)",
    school: "Guru Gobind Singh Polytechnic",
    period: "2012 — 2015",
    location: "Nashik",
  },
];

function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="inline-block rounded-full border border-primary/20 bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-bold text-balance-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">{intro}</p>
      ) : null}
    </div>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary font-display text-sm font-bold text-primary-foreground">
              KK
            </span>
            <span className="font-display text-base font-semibold text-foreground">
              Kirti Kshirsagar
            </span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="mailto:Kshirsagarkirti2@gmail.com"
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            Get in touch
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="hero-glow relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24">
            <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  <Sparkles className="size-3.5" />
                  Product Manager · AI &amp; Data Platforms
                </span>
                <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] text-balance-tight text-foreground sm:text-6xl">
                  Building products that turn{" "}
                  <span className="text-primary">data</span> into{" "}
                  <span className="text-primary">growth</span>.
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  5+ years shipping AI-enabled and data-driven products across
                  ecommerce and enterprise SaaS. I take products from 0→1 —
                  pricing platforms, GenAI solutions, and experimentation
                  frameworks that lift conversion, cut costs, and improve the
                  customer experience.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="#experience"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    View experience
                    <ArrowUpRight className="size-4" />
                  </a>
                  <a
                    href="https://linkedin.com/in/kirtiks"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    <Linkedin className="size-4" />
                    Connect on LinkedIn
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="size-4 text-primary" />
                    Pune, Maharashtra
                  </span>
                  <a
                    href="mailto:Kshirsagarkirti2@gmail.com"
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
                  >
                    <Mail className="size-4 text-primary" />
                    Kshirsagarkirti2@gmail.com
                  </a>
                  <a
                    href="tel:+918329362915"
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
                  >
                    <Phone className="size-4 text-primary" />
                    +91 8329362915
                  </a>
                </div>
              </div>

              {/* Signature strengths panel */}
              <div className="relative">
                <div className="rounded-4xl border border-border bg-card p-8 shadow-[0_24px_60px_-24px_oklch(0.4_0.1_260/0.25)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    Signature strengths
                  </p>
                  <ul className="mt-5 space-y-4">
                    {[
                      "0→1 technical product delivery",
                      "LLM-powered systems & GenAI",
                      "Pricing & experimentation platforms",
                      "Data storytelling with SQL & cohorts",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent">
                          <BadgeCheck className="size-4 text-primary" />
                        </span>
                        <span className="text-sm font-medium leading-relaxed text-foreground">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 rounded-2xl bg-navy p-5">
                    <p className="text-sm leading-relaxed text-primary-foreground/90">
                      “Experienced in translating customer problems into
                      scalable product strategies through data, experimentation,
                      and cross-functional leadership.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact metrics */}
        <section id="impact" className="scroll-mt-20 bg-navy py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground/70">
                  Measured impact
                </p>
                <h2 className="mt-2 font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
                  Numbers that shipped
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-primary-foreground/70">
                Results from live products at FirstCry.com — measured across
                funnels, experiments, and support operations.
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-3xl border border-primary-foreground/10 bg-navy-soft/60 p-6 transition-transform duration-200 hover:-translate-y-1"
                >
                  <p className="font-display text-4xl font-bold text-primary-foreground">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-primary-foreground">
                    {metric.label}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-primary-foreground/60">
                    {metric.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-20 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading
              eyebrow="Experience"
              title="Where I've built"
              intro="A track record across high-growth ecommerce and enterprise software — always close to the data."
            />
            <div className="mx-auto mt-12 max-w-3xl space-y-8">
              {EXPERIENCE.map((job) => (
                <article
                  key={job.company}
                  className="relative rounded-4xl border border-border bg-card p-8 transition-shadow duration-200 hover:shadow-[0_20px_48px_-20px_oklch(0.4_0.1_260/0.28)] sm:p-10"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="flex size-11 items-center justify-center rounded-2xl bg-accent">
                          <Briefcase className="size-5 text-primary" />
                        </span>
                        <div>
                          <h3 className="font-display text-xl font-bold text-foreground">
                            {job.role}
                          </h3>
                          <p className="text-sm font-semibold text-primary">
                            {job.company} · {job.tag}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <p className="font-semibold text-foreground">{job.period}</p>
                      <p className="mt-0.5">{job.location}</p>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-3.5">
                    {job.highlights.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="text-sm leading-relaxed text-muted-foreground">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-20 bg-sky-tint py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading
              eyebrow="Skills & Expertise"
              title="The toolkit behind the outcomes"
              intro="Strategy, analytics, and design — the full loop from insight to shipped product."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {SKILL_GROUPS.map((group) => (
                <div
                  key={group.title}
                  className="rounded-4xl border border-border bg-card p-7 sm:p-8"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-accent">
                      <group.icon className="size-5 text-primary" />
                    </span>
                    <h3 className="font-display text-lg font-bold text-foreground">
                      {group.title}
                    </h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-primary/15 bg-accent px-3.5 py-1.5 text-xs font-medium text-accent-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Credentials + Education */}
        <section id="credentials" className="scroll-mt-20 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading
              eyebrow="Credentials"
              title="Certifications & education"
            />
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
                  <Award className="size-5 text-primary" />
                  Certifications
                </h3>
                <div className="mt-5 space-y-4">
                  {CREDENTIALS.map((cert) => (
                    <div
                      key={cert.title}
                      className="rounded-3xl border border-border bg-card p-6"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-semibold text-foreground">
                            {cert.title}
                          </p>
                          <p className="mt-0.5 text-sm text-primary">{cert.org}</p>
                        </div>
                        <BadgeCheck className="size-5 shrink-0 text-primary" />
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {cert.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
                  <GraduationCap className="size-5 text-primary" />
                  Education
                </h3>
                <div className="mt-5 space-y-4">
                  {EDUCATION.map((edu) => (
                    <div
                      key={edu.degree}
                      className="rounded-3xl border border-border bg-card p-6"
                    >
                      <p className="font-semibold text-foreground">{edu.degree}</p>
                      <p className="mt-0.5 text-sm text-primary">{edu.school}</p>
                      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                        <span>{edu.period}</span>
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-3xl bg-navy p-6">
                  <p className="text-sm leading-relaxed text-primary-foreground/90">
                    Currently deepening applied ML and AI-driven business use
                    cases through IBM's AI &amp; Data Science certification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 pb-20 sm:pb-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="hero-glow overflow-hidden rounded-4xl border border-border bg-card px-8 py-14 text-center sm:px-16">
              <h2 className="font-display text-3xl font-bold text-balance-tight text-foreground sm:text-4xl">
                Let's build something{" "}
                <span className="text-primary">worth shipping</span>.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                Open to product leadership conversations — 0→1 launches, AI
                platforms, and data-driven growth. The fastest way to reach me
                is email or LinkedIn.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="mailto:Kshirsagarkirti2@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Mail className="size-4" />
                  Email me
                </a>
                <a
                  href="https://linkedin.com/in/kirtiks"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <Linkedin className="size-4" />
                  linkedin.com/in/kirtiks
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Phone className="size-4 text-primary" />
                  +91 8329362915
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-4 text-primary" />
                  Pune, Maharashtra, India
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Kirti Kshirsagar</p>
          <p>Product Manager · AI &amp; Data Platforms · Pune, India</p>
        </div>
      </footer>
    </div>
  );
}
