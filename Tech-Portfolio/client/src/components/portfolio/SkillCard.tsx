import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface SkillCardProps {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export function SkillCard({ title, icon: Icon, skills }: SkillCardProps) {
  return (
    <Card className="h-full hover-elevate active-elevate-2">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-3 text-lg">
          <div className="p-2 rounded-md bg-primary/10">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="text-sm text-muted-foreground flex items-start gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              {skill}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
