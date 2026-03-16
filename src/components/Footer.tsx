import { Compass, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card py-12">
    <div className="container mx-auto px-4">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
            <Compass className="h-5 w-5 text-primary" />
            FuturePath <span className="gradient-text">AI</span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">
            Helping students discover their ideal career path using AI-powered guidance.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold">Quick Links</h4>
          <div className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/careers" className="hover:text-foreground transition-colors">All Careers</Link>
            <Link to="/ai-finder" className="hover:text-foreground transition-colors">AI Career Finder</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold">About</h4>
          <p className="mt-3 text-sm text-muted-foreground">
            Built for students from class 9 to college who want clarity on their future career.
          </p>
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center gap-1 border-t border-border pt-6 text-sm text-muted-foreground">
        Made with <Heart className="h-3.5 w-3.5 text-destructive" /> by FuturePath AI
      </div>
    </div>
  </footer>
);

export default Footer;
