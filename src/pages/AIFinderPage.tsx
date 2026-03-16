import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Send, Loader2 } from "lucide-react";
import CareerCard from "@/components/CareerCard";
import { findCareersByInterests, type Career } from "@/data/careers";

const suggestions = [
  "I like physics and space",
  "I love coding and technology",
  "I enjoy drawing and design",
  "I want to help people with their problems",
  "I like math and data analysis",
  "I want to start my own business",
];

const AIFinderPage = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<Career[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (query: string) => {
    const q = query || input;
    if (!q.trim()) return;
    setInput(q);
    setLoading(true);
    setSearched(true);
    // Simulate AI processing
    await new Promise((r) => setTimeout(r, 800));
    setResults(findCareersByInterests(q));
    setLoading(false);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto max-w-3xl px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl" style={{ background: "var(--gradient-hero)" }}>
            <Sparkles className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="font-display text-3xl font-bold">AI Career Finder</h1>
          <p className="mt-2 text-muted-foreground">Tell us your interests, and our AI will suggest the best careers for you.</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={(e) => { e.preventDefault(); handleSearch(""); }}
          className="mt-8"
        >
          <div className="relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Describe your interests... e.g., 'I like physics, math, and building things'"
              className="w-full resize-none rounded-2xl border border-border bg-card p-5 pr-14 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              rows={3}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-all hover:opacity-90 disabled:opacity-50"
            >
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            </button>
          </div>
        </motion.form>

        {!searched && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-6">
            <p className="mb-3 text-sm text-muted-foreground">Try these:</p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => handleSearch(s)}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm transition-all hover:bg-muted hover:border-primary/30"
                >
                  {s}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          {loading && (
            <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-12 flex flex-col items-center gap-3">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="text-muted-foreground">Analyzing your interests...</p>
            </motion.div>
          )}

          {!loading && searched && results.length > 0 && (
            <motion.div key="results" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-10">
              <h2 className="mb-6 font-display text-xl font-semibold">
                We found {results.length} career{results.length !== 1 ? "s" : ""} for you ✨
              </h2>
              <div className="grid gap-5 sm:grid-cols-2">
                {results.map((career, i) => (
                  <CareerCard key={career.id} career={career} index={i} />
                ))}
              </div>
            </motion.div>
          )}

          {!loading && searched && results.length === 0 && (
            <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-12 text-center text-muted-foreground">
              No exact matches found. Try describing your interests differently!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AIFinderPage;
