import { ProjectCard } from "./ProjectCard";
import {
  Cpu,
  Activity,
  Volume2,
  Car,
  Gamepad2,
  Radio,
  Music,
  BarChart3,
} from "lucide-react";

const projects = [
  {
    title: "Custom 8-bit CPU (VHDL)",
    description:
      "Designed a complete CPU from scratch including ALU, program counter, register file, and instruction decoder. Verified the full instruction set using ModelSim simulation.",
    technologies: ["VHDL", "ModelSim", "RTL Design"],
    highlights: [
      "Built ALU with arithmetic and logic operations",
      "Implemented program counter and instruction decoder",
      "Full RTL simulation and timing verification",
    ],
    icon: Cpu,
  },
  {
    title: "ATxmega Gyro-Controlled DAC Sine Wave",
    description:
      "Used the ATxmega's built-in gyroscope to read orientation data via SPI and UART, driving the DAC to output different sine waves depending on tilt angle.",
    technologies: ["C", "SPI", "UART", "DAC", "DMA"],
    highlights: [
      "Real-time gyro data processing",
      "DMA-driven waveform generation",
      "Lookup table-based sine synthesis",
    ],
    icon: Activity,
  },
  {
    title: "Audio Amplifier PCB",
    description:
      "Designed a full amplifier circuit and custom PCB that filters a noisy input waveform and amplifies it to drive speakers clearly. Includes peak detection with LED indicators.",
    technologies: ["PCB Design", "Op-Amps", "Comparators"],
    highlights: [
      "Custom PCB layout and schematic capture",
      "Active filtering for noise reduction",
      "Peak detection using comparators",
    ],
    icon: Volume2,
  },
  {
    title: "Formula SAE Electrical Systems",
    description:
      "Worked on Gator Motorsports FSAE team integrating sensors and power distribution on the race car. Debugged noise, grounding issues, and wiring problems.",
    technologies: ["Sensors", "Power Distribution", "Wiring"],
    highlights: [
      "Sensor integration on race vehicle",
      "EMI/noise mitigation techniques",
      "Real-world hardware reliability",
    ],
    icon: Car,
  },
  {
    title: "GRiP Adaptive Controller Modifications",
    description:
      "Modified Xbox Adaptive Controllers by wiring custom switches for people with limited mobility. Hands-on electromechanical work focused on accessibility.",
    technologies: ["Soldering", "Switch Wiring", "Accessibility"],
    highlights: [
      "Custom switch integration",
      "Accessibility-focused design",
      "Electromechanical modifications",
    ],
    icon: Gamepad2,
  },
  {
    title: "IMU SPI Driver + USART Telemetry",
    description:
      "Wrote SPI drivers for the LSM6DS3TR IMU with integrated USART streaming to SerialPlot. Used interrupts to sample accelerometer data for real-time visualization.",
    technologies: ["SPI", "USART", "Interrupts", "C"],
    highlights: [
      "Custom SPI driver implementation",
      "Interrupt-driven data sampling",
      "Real-time data visualization",
    ],
    icon: Radio,
  },
  {
    title: "Sine Wave Synthesizer",
    description:
      "Created a microcontroller keyboard-controlled synthesizer using DAC with DMA and events to generate real-time sine waves with selectable envelopes and notes via UART keyboard.",
    technologies: ["DAC", "DMA", "UART", "Event System"],
    highlights: [
      "Real-time waveform synthesis",
      "UART keyboard input handling",
      "Selectable note envelopes",
    ],
    icon: Music,
  },
  {
    title: 'Regression AI Model ("Cammy")',
    description:
      "Trained an Auto AI regression model and built a comprehensive data dashboard in Looker Studio. Conducted thorough evaluation and documentation.",
    technologies: ["Auto AI", "Looker Studio", "Regression"],
    highlights: [
      "Model training and evaluation",
      "Interactive dashboard creation",
      "Comprehensive documentation",
    ],
    icon: BarChart3,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of hardware and software projects showcasing embedded systems,
            digital design, and PCB engineering work
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              highlights={project.highlights}
              icon={project.icon}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
