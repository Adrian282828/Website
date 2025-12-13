import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { LucideIcon } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  icon: LucideIcon;
  image?: string;
  imageContain?: boolean;
  imageBgClass?: string;
  reversed?: boolean;
}

export function ProjectCard({
  title,
  description,
  technologies,
  highlights,
  icon: Icon,
  image,
  imageContain = false,
  imageBgClass,
  reversed = false,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate active-elevate-2">
      <CardContent className="p-0">
        <div
          className={`flex flex-col ${
            reversed ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <div className={`md:w-2/5 flex items-center justify-center ${imageBgClass || 'bg-muted/50'} ${
            reversed ? "md:rounded-r-lg" : "md:rounded-l-lg"
          }`}>
            {image ? (
              <img 
                src={image} 
                alt={title} 
                className={`w-full h-full min-h-[200px] md:min-h-[300px] ${imageContain ? 'object-contain p-4' : 'object-cover'}`}
              />
            ) : (
              <div className="p-6 flex items-center justify-center h-full">
                <div className="p-6 rounded-lg bg-primary/10">
                  <Icon className="h-16 w-16 text-primary" />
                </div>
              </div>
            )}
          </div>

          <div className="md:w-3/5 p-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-3">{title}</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {description}
            </p>

            <div className="mb-4">
              <h4 className="text-sm font-medium mb-2 text-muted-foreground">
                Key Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="font-mono text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2 text-muted-foreground">
                Technical Highlights
              </h4>
              <ul className="space-y-1">
                {highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="text-sm flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
