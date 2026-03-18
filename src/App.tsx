import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import CareersPage from "./pages/CareersPage";
import CareerDetailPage from "./pages/CareerDetailPage";
import AIFinderPage from "./pages/AIFinderPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />

          {/* Dark Mode Toggle */}
          <div className="fixed top-4 right-4 z-50">
            <button
              onClick={() => setDark(!dark)}
              className="px-4 py-2 rounded bg-primary text-primary-foreground"
            >
              Toggle
            </button>
          </div>

          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/career/:id" element={<CareerDetailPage />} />
            <Route path="/ai-finder" element={<AIFinderPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
  
