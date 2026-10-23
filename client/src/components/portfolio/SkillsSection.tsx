import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, CircuitBoard, Gauge, Code, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Terminal,
    skills: ["C", "C++", "C#", "Python", "VHDL", "SystemVerilog", "ARM Assembly", "AVR Assembly", "R"],
  },
  {
    title: "Embedded Systems",
    icon: Cpu,
    skills: [
      "ARM & AVR microcontrollers",
      "Bare-metal firmware",
      "Device drivers",
      "Board bring-up",
      "RTOS development",
      "ROS 2 (Jazzy)",
      "UART / SPI / I2C / RS232",
      "ADC / DAC",
      "DMA",
      "Interrupts & timers",
    ],
  },
  {
    title: "FPGA & Hardware",
    icon: CircuitBoard,
    skills: [
      "FPGA design",
      "RTL design",
      "Questa / ModelSim",
      "Quartus",
      "Vivado",
      "Timing analysis",
      "PCB design",
      "Op-amp circuits",
      "LTspice",
    ],
  },
  {
    title: "Test & Instrumentation",
    icon: Gauge,
    skills: [
      "Oscilloscope",
      "Logic analyzer",
      "Function generator",
      "Multimeter",
      "Digilent Analog Discovery",
      "Waveform debugging",
      "Unit testing",
    ],
  },
  {
    title: "Tools & Frameworks",
    icon: Code,
    skills: [
      "Git / GitHub / GitLab",
      "Jira",
      "Unreal Engine",
      "Linux CLI",
      "WSL",
      "Visual Studio",
      "Atmel Studio",
      "MATLAB",
      "gRPC",
      "XML",
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From register-level firmware to RTL design and bench-level debugging
          </p>
        </div>

        <Card>
          <CardContent className="p-6 md:p-8 divide-y divide-border">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className="grid md:grid-cols-[13rem_1fr] gap-3 md:gap-6 py-5 first:pt-0 last:pb-0"
                >
                  <div className="flex items-center gap-3 md:items-start">
                    <div className="p-2 rounded-md bg-primary/10 shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold md:pt-1.5">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 md:pt-1">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="font-mono text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
