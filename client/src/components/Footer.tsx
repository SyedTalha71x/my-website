import { Terminal } from "lucide-react";

const Footer = () => (
  <footer className="relative z-10 border-t border-border py-8 px-4">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Terminal className="w-4 h-4 text-primary" />
        <span className="font-mono text-xs text-muted-foreground">
          {"<DevOps />"} © {new Date().getFullYear()}
        </span>
      </div>
      <p className="text-xs text-muted-foreground font-mono">
        Built with React + Tailwind • Deployed with ❤️
      </p>
    </div>
  </footer>
);

export default Footer;
