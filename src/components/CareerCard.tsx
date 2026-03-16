import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TrendingUp, IndianRupee } from "lucide-react";
import * as Icons from "lucide-react";
import type { Career } from "@/data/careers";

interface CareerCardProps {
  career: Career;
  index?: number;
}

const CareerCard = ({ career, index = 0 }: CareerCardProps) => {
  const IconComponent = (Icons as any)[career.icon] || Icons.Briefcase;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <Link
        to={`/career/${career.id}`}
        className="glass-card group block rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
      >
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <IconComponent className="h-6 w-6" />
        </div>
        <h3 className="font-display text-lg font-semibold">{career.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{career.shortDescription}</p>
        <div className="mt-4 flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1 text-muted-foreground">
            <IndianRupee className="h-3 w-3" />
            {career.averageSalary}
          </span>
          <span className={`flex items-center gap-1 font-medium ${career.demandColor}`}>
            <TrendingUp className="h-3 w-3" />
            {career.futureDemand} Demand
          </span>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {career.skills.slice(0, 3).map((skill) => (
            <span key={skill} className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">
              {skill}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
};

export default CareerCard;
