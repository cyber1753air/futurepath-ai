import { motion } from "framer-motion";
import type { RoadmapStep } from "@/data/careers";

interface TimelineProps {
  steps: RoadmapStep[];
}

const phaseColors = [
  "bg-blue-500",
  "bg-violet-500",
  "bg-amber-500",
  "bg-emerald-500",
  "bg-rose-500",
];

const Timeline = ({ steps }: TimelineProps) => (
  <div className="relative space-y-8 pl-8 before:absolute before:left-3.5 before:top-2 before:h-[calc(100%-2rem)] before:w-0.5 before:bg-border">
    {steps.map((step, i) => (
      <motion.div
        key={step.phase}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.15 }}
        className="relative"
      >
        <div className={`absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-background ${phaseColors[i % phaseColors.length]}`} />
        <div className="glass-card rounded-xl p-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">{step.phase}</span>
          <h4 className="mt-1 font-display text-lg font-semibold">{step.title}</h4>
          <p className="text-sm text-muted-foreground">{step.description}</p>
          <ul className="mt-3 space-y-1.5">
            {step.items.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/50" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    ))}
  </div>
);

export default Timeline;
