import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Globe, BadgeCheck } from "lucide-react";

const coursework = [
  "Reconfigurable Computing",
  "Real-Time Operating Systems",
  "Autonomous Robotics",
  "Microprocessor Applications",
  "Digital Design",
  "Digital Logic",
  "Computer Organization",
  "Data Structures & Algorithms",
  "Circuits 1",
];

const certifications = [
  "SC-900: Security & Compliance",
  "AZ-900: Azure Fundamentals",
  "AI-900: Azure AI",
];

export function EducationSection() {
  return (
    <section id="education" className="py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Education</h2>
        </div>

        <Card>
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-md bg-primary/10 shrink-0">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">University of Florida</h3>
                  <p className="text-muted-foreground">
                    B.S. Computer Engineering | B.A. Economics
                  </p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground sm:text-right pl-12 sm:pl-0 shrink-0">
                <p className="font-medium text-foreground">Class of 2027</p>
                <p>GPA 3.6 / 4.0</p>
              </div>
            </div>

            <h4 className="text-sm font-medium mb-2 text-muted-foreground">
              Relevant Coursework
            </h4>
            <div className="flex flex-wrap gap-2 mb-8">
              {coursework.map((course) => (
                <Badge key={course} variant="secondary" className="text-xs">
                  {course}
                </Badge>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Globe className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Study Abroad</h4>
                  <p className="text-sm text-muted-foreground">
                    Nanyang Technological University, Singapore. Data Science & AI program,
                    June – July 2025
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BadgeCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Microsoft Certifications</h4>
                  <ul className="text-sm text-muted-foreground">
                    {certifications.map((cert) => (
                      <li key={cert}>{cert}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
