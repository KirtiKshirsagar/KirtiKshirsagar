import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  Briefcase,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Target,
} from "lucide-react";
import { CountUp, EASE, motion, Reveal } from "@/components/reveal";

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
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
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
    value: 24,
    suffix: "%",
    label: "Checkout conversion lift",
    detail: "Dynamic pricing & discount engine, owned end to end",
  },
  {
    value: 30,
    suffix: "%",
    label: "Manual triage automated",
    detail: "GenAI support tool built on OpenAI APIs",
  },
  {
    value: 18,
    suffix: " min",
    label: "Faster ticket resolution",
    detail: "Average handle time reduced after GenAI rollout",
  },
  {
    value: 18,
    suffix: "%",
    label: "More new-user sign-ups",
    detail: "Targeted acquisition campaigns + landing page experiments",
  },
];

const MARQUEE_ITEMS = [
  "0→1 Product Development",
  "GenAI & LLM Systems",
  "Dynamic Pricing Engines",
  "SQL & Cohort Analysis",
  "A/B Testing",
  "Figma Prototyping",
  "GTM Strategy",
  "Funnel Optimisation",
  "Jira & Confluence",
  "Experimentation Frameworks",
  "CleverTap",
  "Python",
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
    icon: Sparkles,
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
    icon: Briefcase,
    skills: ["Jira", "Confluence", "Figma", "Excel (Advanced)", "CleverTap"],
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

const chipContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045 } },
};

const chipItem = {
  hidden: { opacity: 0, y: 14, scale: 0.94 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: EASE } },
};

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
    <Reveal className="mx-auto max-w-2xl text-center">
      <span className="inline-block rounded-full border border-primary/20 bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-bold text-balance-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">{intro}</p>
      ) : null}
    </Reveal>
  );
}

function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

function Portfolio() {
  const scrolled = useScrolled();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.header
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-border/80 bg-background/85 shadow-[0_8px_30px_-18px_oklch(0.4_0.1_260/0.35)] backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-300 ${
            scrolled ? "h-14" : "h-16"
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary font-display text-sm font-bold text-primary-foreground transition-transform duration-300 hover:rotate-6">
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
                className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-right scale-x-0 rounded-full bg-primary transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
              </a>
            ))}
          </nav>
          <a
            href="mailto:Kshirsagarkirti2@gmail.com"
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-8px_oklch(0.53_0.2_258/0.55)] sm:inline-flex"
          >
            Get in touch
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>
      </motion.header>

      <main id="top" className="pt-16">
        {/* Hero */}
        <section className="hero-glow relative overflow-hidden">
          <div className="grid-pattern absolute inset-0" aria-hidden />
          <div
            aria-hidden
            className="animate-float-slow absolute -top-24 right-[8%] size-96 rounded-full bg-primary/25 blur-3xl"
          />
          <div
            aria-hidden
            className="animate-float-slower absolute -bottom-32 left-[4%] size-96 rounded-full bg-primary/20 blur-3xl"
          />
          <div
            aria-hidden
            className="animate-float-slow absolute top-1/3 left-1/2 size-64 rounded-full bg-sky-tint-2/70 blur-3xl"
          />
          <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24">
            <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 32, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, ease: EASE }}
                  className="animate-pulse-ring inline-flex items-center gap-2 rounded-full border border-primary/15 bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary"
                >
                  <Sparkles className="size-3.5" />
                  Product Manager · AI &amp; Data Platforms
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 48, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
                  className="mt-6 font-display text-4xl font-bold leading-[1.08] text-balance-tight text-foreground sm:text-6xl"
                >
                  Building products that turn{" "}
                  <span className="relative inline-block">
                    <span className="text-gradient-animated">data</span>
                    <motion.span
                      aria-hidden
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.7, delay: 0.9, ease: EASE }}
                      className="absolute inset-x-0 bottom-1 -z-10 h-3 origin-left rounded-full bg-primary/20 sm:h-4"
                    />
                  </span>{" "}
                  into{" "}
                  <span className="relative inline-block">
                    <span className="text-gradient-animated">growth</span>
                    <motion.span
                      aria-hidden
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.7, delay: 1.15, ease: EASE }}
                      className="absolute inset-x-0 bottom-1 -z-10 h-3 origin-left rounded-full bg-primary/20 sm:h-4"
                    />
                  </span>
                  .
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
                  className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
                >
                  5+ years shipping AI-enabled and data-driven products across
                  ecommerce and enterprise SaaS. I take products from 0→1 —
                  pricing platforms, GenAI solutions, and experimentation
                  frameworks that lift conversion, cut costs, and improve the
                  customer experience.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
                  className="mt-8 flex flex-wrap items-center gap-3"
                >
                  <a
                    href="#experience"
                    className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-10px_oklch(0.53_0.2_258/0.6)]"
                  >
                    View experience
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/kirtiks"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                  >
                    <Linkedin className="size-4" />
                    Connect on LinkedIn
                  </a>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.45 }}
                  className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
                >
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
                </motion.div>
              </div>

              {/* Signature strengths panel */}
              <motion.div
                initial={{ opacity: 0, y: 64, scale: 0.9, rotate: 2 }}
                animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.35, ease: EASE }}
                className="relative"
              >
                <div className="rounded-4xl border border-border bg-card p-8 shadow-[0_24px_60px_-24px_oklch(0.4_0.1_260/0.25)] transition-transform duration-300 hover:-translate-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    Signature strengths
                  </p>
                  <ul className="mt-5 space-y-4">
                    {[
                      "0→1 technical product delivery",
                      "LLM-powered systems & GenAI",
                      "Pricing & experimentation platforms",
                      "Data storytelling with SQL & cohorts",
                    ].map((item, i) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.45 + i * 0.12, ease: EASE }}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent">
                          <BadgeCheck className="size-4 text-primary" />
                        </span>
                        <span className="text-sm font-medium leading-relaxed text-foreground">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1, ease: EASE }}
                    className="mt-6 rounded-2xl bg-navy p-5"
                  >
                    <p className="text-sm leading-relaxed text-primary-foreground/90">
                      “Experienced in translating customer problems into
                      scalable product strategies through data, experimentation,
                      and cross-functional leadership.”
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Skill marquee */}
          <div className="relative border-y border-border/70 bg-background/70 py-4 backdrop-blur-sm">
            <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
              <div className="marquee-track flex shrink-0 items-center gap-4 pr-4">
                {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
                  <span
                    key={`${item}-${i}`}
                    className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-sm font-medium text-muted-foreground"
                  >
                    <span className="size-1.5 rounded-full bg-primary/60" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Impact metrics */}
        <section id="impact" className="scroll-mt-20 bg-navy py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal className="flex flex-wrap items-end justify-between gap-4">
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
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {METRICS.map((metric, i) => (
                <Reveal key={metric.label} delay={i * 0.1}>
                  <div className="group h-full rounded-3xl border border-primary-foreground/10 bg-navy-soft/60 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-foreground/25 hover:bg-navy-soft">
                    <p className="font-display text-4xl font-bold tabular-nums text-primary-foreground">
                      <CountUp to={metric.value} suffix={metric.suffix} />
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary-foreground">
                      {metric.label}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-primary-foreground/60">
                      {metric.detail}
                    </p>
                  </div>
                </Reveal>
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
              {EXPERIENCE.map((job, jobIndex) => (
                <Reveal key={job.company} delay={jobIndex * 0.12}>
                  <article className="group relative overflow-hidden rounded-4xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_48px_-20px_oklch(0.4_0.1_260/0.32)] sm:p-10">
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 rounded-t-4xl bg-primary transition-transform duration-500 group-hover:scale-x-100"
                    />
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="flex size-11 items-center justify-center rounded-2xl bg-accent transition-transform duration-300 group-hover:scale-110">
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
                      <div className="text-right text-sm text-muted-foreground">
                        <p className="font-semibold text-foreground">{job.period}</p>
                        <p className="mt-0.5">{job.location}</p>
                      </div>
                    </div>
                    <ul className="mt-6 space-y-3.5">
                      {job.highlights.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-125" />
                          <span className="text-sm leading-relaxed text-muted-foreground">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
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
              {SKILL_GROUPS.map((group, groupIndex) => (
                <Reveal key={group.title} delay={groupIndex * 0.08}>
                  <div className="h-full rounded-4xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_-20px_oklch(0.4_0.1_260/0.28)] sm:p-8">
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 items-center justify-center rounded-xl bg-accent">
                        <group.icon className="size-5 text-primary" />
                      </span>
                      <h3 className="font-display text-lg font-bold text-foreground">
                        {group.title}
                      </h3>
                    </div>
                    <motion.div
                      variants={chipContainer}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, margin: "-60px" }}
                      className="mt-5 flex flex-wrap gap-2"
                    >
                      {group.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          variants={chipItem}
                          whileHover={{ y: -3, scale: 1.04 }}
                          className="cursor-default rounded-full border border-primary/15 bg-accent px-3.5 py-1.5 text-xs font-medium text-accent-foreground transition-colors hover:border-primary/40 hover:text-primary"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </Reveal>
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
                <Reveal>
                  <h3 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
                    <Award className="size-5 text-primary" />
                    Certifications
                  </h3>
                </Reveal>
                <div className="mt-5 space-y-4">
                  {CREDENTIALS.map((cert, i) => (
                    <Reveal key={cert.title} delay={i * 0.08}>
                      <div className="rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30">
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
                    </Reveal>
                  ))}
                </div>
              </div>
              <div>
                <Reveal>
                  <h3 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
                    <GraduationCap className="size-5 text-primary" />
                    Education
                  </h3>
                </Reveal>
                <div className="mt-5 space-y-4">
                  {EDUCATION.map((edu, i) => (
                    <Reveal key={edu.degree} delay={i * 0.08}>
                      <div className="rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30">
                        <p className="font-semibold text-foreground">{edu.degree}</p>
                        <p className="mt-0.5 text-sm text-primary">{edu.school}</p>
                        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                          <span>{edu.period}</span>
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
                <Reveal delay={0.15}>
                  <div className="mt-6 rounded-3xl bg-navy p-6">
                    <p className="text-sm leading-relaxed text-primary-foreground/90">
                      Currently deepening applied ML and AI-driven business use
                      cases through IBM's AI &amp; Data Science certification.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 pb-20 sm:pb-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
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
                    className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-10px_oklch(0.53_0.2_258/0.6)]"
                  >
                    <Mail className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                    Email me
                  </a>
                  <a
                    href="https://linkedin.com/in/kirtiks"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
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
            </Reveal>
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
