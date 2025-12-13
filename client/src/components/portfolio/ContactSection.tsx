import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <Card>
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Let's Connect
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Interested in discussing embedded systems, hardware projects, or
              potential collaboration? I'd love to hear from you.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild data-testid="link-email">
                <a href="mailto:adriancortlandt@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Me
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild data-testid="link-github-contact">
                <a
                  href="https://github.com/Adrian282828"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild data-testid="link-linkedin">
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
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
