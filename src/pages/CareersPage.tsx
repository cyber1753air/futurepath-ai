import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import { motion } from "framer-motion";
import SearchBar from "@/components/SearchBar";
import CareerCard from "@/components/CareerCard";
import { careers, searchCareers } from "@/data/careers";

const CareersPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search") || "";

  const filteredCareers = useMemo(
    () => (query ? searchCareers(query) : careers),
    [query]
  );

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 text-center">
          <h1 className="font-display text-3xl font-bold">
            {query ? `Results for "${query}"` : "All Careers"}
          </h1>
          <p className="mt-2 text-muted-foreground">
            {filteredCareers.length} career{filteredCareers.length !== 1 ? "s" : ""} found
          </p>
        </motion.div>

        <div className="mx-auto mb-10 max-w-xl">
          <SearchBar />
        </div>

        {filteredCareers.length === 0 ? (
          <div className="py-20 text-center text-muted-foreground">
            No careers found. Try a different search term.
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredCareers.map((career, i) => (
              <CareerCard key={career.id} career={career} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CareersPage;
