import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, GraduationCap, BookOpen, Award, Building2, Telescope, IndianRupee, TrendingUp } from "lucide-react";
import * as Icons from "lucide-react";
import { getCareerById } from "@/data/careers";
import Timeline from "@/components/Timeline";

const CareerDetailPage = () => {
  const { id } = useParams();
  const career = getCareerById(id || "");

  if (!career) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 pt-16">
        <h1 className="font-display text-2xl font-bold">Career not found</h1>
        <Link to="/careers" className="text-primary hover:underline">Browse all careers</Link>
      </div>
    );
  }

  const IconComponent = (Icons as any)[career.icon] || Icons.Briefcase;

  const sections = [
    { icon: BookOpen, title: "Required Subjects", items: career.subjects },
    { icon: Award, title: "Key Skills", items: career.skills },
    { icon: Building2, title: "Top Colleges", items: career.topColleges },
    { icon: GraduationCap, title: "Entrance Exams", items: career.entranceExams },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto max-w-4xl px-4">
        <Link to="/careers" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Careers
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <IconComponent className="h-7 w-7" />
            </div>
            <div>
              <h1 className="font-display text-3xl font-bold">{career.title}</h1>
              <p className="mt-1 text-muted-foreground">{career.description}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="flex items-center gap-1.5 rounded-full bg-muted px-4 py-1.5 text-sm">
              <IndianRupee className="h-3.5 w-3.5" /> {career.averageSalary}
            </span>
            <span className={`flex items-center gap-1.5 rounded-full bg-muted px-4 py-1.5 text-sm font-medium ${career.demandColor}`}>
              <TrendingUp className="h-3.5 w-3.5" /> {career.futureDemand} Demand
            </span>
          </div>
        </motion.div>

        {/* Overview */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-10 glass-card rounded-2xl p-6">
          <h2 className="font-display text-xl font-semibold">Overview</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{career.overview}</p>
        </motion.div>

        {/* Sections Grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {sections.map((section, i) => (
            <motion.div key={section.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl p-6">
              <div className="mb-3 flex items-center gap-2">
                <section.icon className="h-5 w-5 text-primary" />
                <h3 className="font-display font-semibold">{section.title}</h3>
              </div>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Future Scope */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-8 glass-card rounded-2xl p-6">
          <div className="mb-3 flex items-center gap-2">
            <Telescope className="h-5 w-5 text-primary" />
            <h3 className="font-display text-xl font-semibold">Future Scope</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">{career.futureScope}</p>
        </motion.div>

        {/* Career Roadmap Timeline */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-12">
          <h2 className="mb-8 font-display text-2xl font-bold">Career Roadmap</h2>
          <Timeline steps={career.roadmap} />
        </motion.div>
      </div>
    </div>
  );
};

export default CareerDetailPage;
