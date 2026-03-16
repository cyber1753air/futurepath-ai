import { motion } from "framer-motion";
import { Sparkles, Target, Rocket, Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SearchBar from "@/components/SearchBar";
import CareerCard from "@/components/CareerCard";
import { careers } from "@/data/careers";

const steps = [
  { icon: Search, title: "Tell Us Your Interests", description: "Share what subjects and activities excite you the most." },
  { icon: Target, title: "AI Matches Careers", description: "Our AI analyzes your interests and finds the best career fits." },
  { icon: Rocket, title: "Simulate Your Future", description: "See the complete roadmap from school to career success." },
];

const Index = () => (
  <div className="min-h-screen">
    {/* Hero */}
    <section className="relative flex flex-col items-center justify-center overflow-hidden px-4 pb-20 pt-32 text-center">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]" style={{ background: "var(--gradient-hero)" }} />
      </div>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
          <Sparkles className="h-4 w-4 text-accent" />
          AI-Powered Career Guidance for Students
        </div>
        <h1 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Find Your Future Career{" "}
          <span className="gradient-text">with AI</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
          Discover careers that match your interests, simulate your future path, and get step-by-step guidance from school to success.
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="relative z-10 mt-8 w-full max-w-xl">
        <SearchBar large placeholder="Search careers like 'Pilot', 'AI Engineer'..." />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }} className="relative z-10 mt-6 flex gap-3">
        <Link to="/ai-finder" className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:opacity-90 hover:shadow-lg">
          <Sparkles className="h-4 w-4" />
          AI Career Finder
        </Link>
        <Link to="/careers" className="flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 font-medium transition-all hover:bg-muted">
          Browse Careers
          <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </section>

    {/* Popular Careers */}
    <section className="container mx-auto px-4 pb-20">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-10 text-center">
        <h2 className="font-display text-3xl font-bold">Popular Careers</h2>
        <p className="mt-2 text-muted-foreground">Explore trending career paths chosen by thousands of students</p>
      </motion.div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {careers.slice(0, 8).map((career, i) => (
          <CareerCard key={career.id} career={career} index={i} />
        ))}
      </div>
    </section>

    {/* How it Works */}
    <section className="border-t border-border bg-card py-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold">How It Works</h2>
          <p className="mt-2 text-muted-foreground">Three simple steps to find your perfect career</p>
        </motion.div>
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <step.icon className="h-7 w-7" />
              </div>
              <span className="text-xs font-bold text-primary">Step {i + 1}</span>
              <h3 className="mt-1 font-display text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl rounded-3xl p-10"
          style={{ background: "var(--gradient-hero)" }}
        >
          <h2 className="font-display text-3xl font-bold text-primary-foreground">Ready to Discover Your Future?</h2>
          <p className="mt-3 text-primary-foreground/80">Join thousands of students who found their dream career using FuturePath AI.</p>
          <Link to="/ai-finder" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-background px-8 py-3 font-semibold text-foreground transition-all hover:opacity-90">
            <Sparkles className="h-4 w-4" />
            Start Exploring
          </Link>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Index;
