import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, FileDown, Cpu, CircuitBoard } from "lucide-react";
import profilePhoto from "@assets/New_me_1765600259204.webp";

const highlights = [
  { value: "Lockheed Martin", label: "Software Engineering Intern, RMS" },
  { value: "1st Place", label: "LM Intern Project Competition" },
  { value: "3.6 GPA", label: "UF Computer Engineering + Economics" },
];

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />

      <div className="hidden lg:block absolute top-20 left-10 opacity-10">
        <Cpu className="h-32 w-32 text-primary" />
      </div>
      <div className="hidden lg:block absolute bottom-20 right-10 opacity-10">
        <CircuitBoard className="h-40 w-40 text-primary" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-muted border-4 border-primary/20 overflow-hidden shrink-0">
            <img
              src={profilePhoto}
              alt="Adrian Cortlandt"
              className="w-full h-full object-cover" style={{ objectPosition: "60% 20%" }}
            />
          </div>

          <div className="text-center md:text-left">
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Cpu className="h-4 w-4" />
                Embedded Systems & Firmware Engineer
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              Adrian Cortlandt
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mb-6 leading-relaxed">
              Computer Engineering and Economics student at the University of Florida. I write
              bare-metal firmware, design digital hardware in VHDL, and integrate sensors with the
              software that depends on them, with a growing focus on secure embedded systems and
              hardware security.
            </p>

            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mb-8">
              {highlights.map((item) => (
                <div
                  key={item.value}
                  className="rounded-lg border border-border bg-card/60 px-4 py-3 text-center md:text-left"
                >
                  <dt className="sr-only">{item.label}</dt>
                  <dd className="font-semibold">{item.value}</dd>
                  <dd className="text-xs text-muted-foreground leading-snug">{item.label}</dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <Button size="lg" onClick={scrollToProjects} data-testid="button-view-projects">
                View Projects
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" asChild data-testid="link-resume">
                <a href="/Adrian_Cortlandt_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileDown className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild data-testid="link-github">
                <a href="https://github.com/Adrian282828" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild data-testid="link-linkedin-hero">
                <a
                  href="https://www.linkedin.com/in/adrian-cortlandt/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
