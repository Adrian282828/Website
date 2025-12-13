import { SkillCard } from "./SkillCard";
import { Cpu, CircuitBoard, Wrench, Code, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Coding Languages",
    icon: Terminal,
    skills: [
      "C",
      "C++",
      "Assembly",
      "VHDL",
      "Python",
      "MATLAB",
      "SQL",
    ],
  },
  {
    title: "Embedded Systems",
    icon: Cpu,
    skills: [
      "Low-level C for microcontrollers",
      "Assembly (ATxmega128A1U)",
      "SPI, UART, I2C protocols",
      "DAC, ADC, DMA configuration",
      "Real-time signal processing",
      "Hardware timers & interrupts",
      "RTOS-style task structuring",
    ],
  },
  {
    title: "Digital Design",
    icon: CircuitBoard,
    skills: [
      "VHDL and Verilog",
      "Custom CPU architecture design",
      "RTL simulation (ModelSim)",
      "State machines & control logic",
      "ALU, PC, decoder design",
      "Timing analysis",
    ],
  },
  {
    title: "Electronics & Hardware",
    icon: Wrench,
    skills: [
      "PCB design & schematic capture",
      "Op-amp filters & amplifiers",
      "Audio signal conditioning",
      "Sensor integration (IMU, gyro)",
      "Power distribution design",
      "Soldering & prototyping",
    ],
  },
  {
    title: "Software & Tools",
    icon: Code,
    skills: [
      "Atmel Studio, AVR toolchain",
      "Git & GitHub",
      "Python automation",
      "MATLAB basics",
      "Looker Studio dashboards",
      "Oscilloscope & logic analyzer",
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From low-level firmware to custom digital hardware design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <SkillCard
              key={category.title}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
