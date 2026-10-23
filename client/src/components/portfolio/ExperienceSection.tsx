import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Trophy } from "lucide-react";

interface Role {
  company: string;
  title: string;
  dates: string;
  location: string;
  bullets: string[];
  award?: {
    title: string;
    dates: string;
    bullets: string[];
  };
}

const roles: Role[] = [
  {
    company: "Lockheed Martin, Rotary and Mission Systems",
    title: "Software Engineering Intern",
    dates: "May 2026 – Present",
    location: "Orlando, FL",
    bullets: [
      "Developing an enterprise test-automation platform replacing legacy software used across Lockheed Martin.",
      "Built a C# serial terminal to capture and decode 12 SPI message types from the test station at 19200 baud over COM1.",
      "Migrated legacy COM communication to gRPC to modernize inter-service and software-to-hardware messaging.",
      "Extended the test-execution engine's API layer to support configurable test properties, serializing to and from a defined XML schema.",
    ],
    award: {
      title: "Integration Lead, Intern Project Competition (1st Place)",
      dates: "May 2026 – July 2026",
      bullets: [
        "Elected by a 20-person intern cohort to lead the integration team on a counter-drone training simulator.",
        "Owned the VN-100 IMU end to end and presented the winning system to Lockheed Martin executives.",
      ],
    },
  },
  {
    company: "DriCloud",
    title: "Software Engineering Intern",
    dates: "June 2025 – August 2025",
    location: "Virtual",
    bullets: [
      "Tested embedded software integrations on Microsoft Azure, validating third-party API connectivity.",
      "Collaborated with senior engineers to diagnose software synchronization issues, increasing system reliability.",
      "Automated data transfer scripts that reduced processing time by 20%.",
    ],
  },
  {
    company: "Gator Motorsports, Formula SAE",
    title: "Electrical Systems Team Member",
    dates: "August 2024 – May 2025",
    location: "Gainesville, FL",
    bullets: [
      "Prototyped and tested electrical subsystems for a Formula race car, improving sensor reliability and cutting system noise by 15%.",
      "Led analog sensor integration, working across software and mechanical subteams to keep data acquisition stable under racing conditions.",
      "Mentored newer members on circuit debugging and documentation practices.",
    ],
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="text-sm flex items-start gap-2 leading-relaxed">
          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Defense, industry, and motorsport work spanning test automation, hardware
            communication, and sensor integration
          </p>
        </div>

        <div className="space-y-6">
          {roles.map((role) => (
            <Card key={role.company}>
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-primary/10 shrink-0">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold">{role.company}</h3>
                      <p className="text-muted-foreground">{role.title}</p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground sm:text-right pl-12 sm:pl-0 shrink-0">
                    <p className="font-medium text-foreground">{role.dates}</p>
                    <p>{role.location}</p>
                  </div>
                </div>

                <BulletList items={role.bullets} />

                {role.award && (
                  <div className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-4 md:p-5">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <div className="flex items-start gap-2">
                        <Trophy className="h-4 w-4 text-primary shrink-0 mt-1" />
                        <h4 className="font-semibold">{role.award.title}</h4>
                      </div>
                      <Badge variant="secondary" className="w-fit font-mono text-xs">
                        {role.award.dates}
                      </Badge>
                    </div>
                    <BulletList items={role.award.bullets} />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
