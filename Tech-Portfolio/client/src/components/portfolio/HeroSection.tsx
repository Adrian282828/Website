import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Cpu, CircuitBoard, Zap } from "lucide-react";

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
      
      <div className="absolute top-20 left-10 opacity-10">
        <Cpu className="h-32 w-32 text-primary" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <CircuitBoard className="h-40 w-40 text-primary" />
      </div>
      <div className="absolute top-1/3 right-1/4 opacity-10">
        <Zap className="h-24 w-24 text-primary" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center relative z-10">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Cpu className="h-4 w-4" />
            Embedded Systems Engineer
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Building Hardware
          <br />
          <span className="text-primary">From the Ground Up</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Specializing in microcontroller development, digital design, and PCB engineering.
          From custom CPU architectures to real-time signal processing systems.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" onClick={scrollToProjects} data-testid="button-view-projects">
            View Projects
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            data-testid="link-github"
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
