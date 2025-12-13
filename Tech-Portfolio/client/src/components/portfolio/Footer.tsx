import { Cpu } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Cpu className="h-4 w-4" />
            <span className="text-sm">
              {currentYear} Embedded Systems Engineer Portfolio
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Built with passion for hardware and software
          </p>
        </div>
      </div>
    </footer>
  );
}
