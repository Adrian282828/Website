import { ProjectCard } from "./ProjectCard";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Cpu,
  Volume2,
  Radio,
  MemoryStick,
  Crosshair,
  PlugZap,
  ScanFace,
  TreeDeciduous,
  Bomb,
  type LucideIcon,
} from "lucide-react";
import ebiImage from "@assets/Ebi_1765600059662.webp";
import cpuImage from "@assets/CPU_1765606942178.webp";
import amplifierImage from "@assets/image_1765607800003.webp";
import imuImage from "@assets/image_1765608588509.webp";
import internProjectImage from "@assets/intern_project.webp";

const projects = [
  {
    title: "Counter-Drone Training Simulator (Competition Winner)",
    description:
      "Won the intern project competition with a fully immersive counter-drone training simulator, delivered in 8 weeks from just a wooden post, an Xbox controller, a VectorNav VN-100 IMU, and a tripod. Our team designed a custom 3D printed gimbal and an Unreal Engine simulation that tracks the physical weapon's movement in real time and mirrors it in the virtual environment.",
    technologies: ["VectorNav VN-100", "Unreal Engine", "IMU", "3D Printing", "Xbox Controller"],
    highlights: [
      "Elected by a 20-person intern cohort to lead the integration team, based on prior embedded systems experience",
      "Owned the VN-100 end to end: capturing and decoding its output, calibrating it, and streaming its orientation data into Unreal",
      "Kept the hardware and software sides in constant communication as Integration Lead",
      "Presented the completed system and supporting business case to Lockheed Martin executives, VPs, and program management",
    ],
    icon: Crosshair,
    image: internProjectImage,
    imageBgClass: "bg-slate-800",
    stacked: true,
  },
  {
    title: "Embedded Peripheral Driver Suite (ATxmega128A1U)",
    description:
      "Wrote bare-metal drivers for the ATxmega128A1U's SPI, UART, ADC, DAC, DMA, timer, and event-system peripherals entirely through register configuration. Used them to sample an LSM6DS3TR IMU over SPI and stream accelerometer data over USART to SerialPlot in real time.",
    technologies: ["C", "ATxmega128A1U", "SPI", "UART", "DMA", "Interrupts"],
    highlights: [
      "Register-level drivers for seven peripheral families, no vendor HAL",
      "Interrupt-driven data acquisition and waveform generation at 32 MHz",
      "Real-time IMU telemetry streamed over USART and visualized in SerialPlot",
    ],
    icon: Radio,
    image: imuImage,
    imageContain: true,
    imageBgClass: "bg-slate-800",
  },
  {
    title: "EBI External Bus Interface System",
    description:
      "Designed and implemented an External Bus Interface to memory-map external SRAM and I/O devices into the microcontroller's address space. Developed address decoding logic and control timing to allow external hardware to be accessed like internal memory.",
    technologies: ["ATxmega128A1U", "EBI", "Assembly & C", "Digital Logic"],
    highlights: [
      "Implemented address decoding and chip select logic",
      "Configured read/write control and timing signals",
      "Mapped external SRAM and I/O into the MCU memory space",
      "Debugged bus timing and hardware-software integration",
    ],
    icon: MemoryStick,
    image: ebiImage,
    imageContain: true,
    imageBgClass: "bg-slate-800",
  },
  {
    title: "Custom 8-Bit CPU (VHDL)",
    description:
      "Designed and implemented an 8-bit microprocessor in VHDL with a custom ALU, operand registers, and a control FSM decoding a 7-instruction ISA. Validated timing and logical correctness through waveform analysis in ModelSim.",
    technologies: ["VHDL", "ModelSim", "Vivado", "RTL Design"],
    highlights: [
      "Custom ALU with arithmetic and logic operations",
      "Control FSM decoding a 7-instruction ISA",
      "Waveform-level verification of instruction decoding and hardware synchronization",
    ],
    icon: Cpu,
    image: cpuImage,
    imageContain: true,
    imageBgClass: "bg-slate-800",
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
    image: amplifierImage,
    imageContain: true,
    imageBgClass: "bg-slate-800",
  },
];

interface MoreProject {
  title: string;
  role?: string;
  description: string;
  technologies: string[];
  icon: LucideIcon;
}

const moreProjects: MoreProject[] = [
  {
    title: "Cisco Fault Managed Power (IPPD)",
    role: "Project Leader",
    description:
      "Designing a Class 4 Fault Managed Power architecture for Ben Hill Griffin Stadium with Cisco FMP engineers, mapping power distribution across networking, Wi-Fi, media, IoT, and security systems.",
    technologies: ["Power Distribution", "Cisco FMP", "Technical Writing"],
    icon: PlugZap,
  },
  {
    title: "Real-Time Face Detection Node",
    description:
      "Built a real-time ROS 2 facial recognition node in OpenCV using publish/subscribe to manage asynchronous sensor streams, bridging physical cameras into Ubuntu WSL2 via usbipd.",
    technologies: ["ROS 2", "OpenCV", "Python"],
    icon: ScanFace,
  },
  {
    title: "AVL Tree Implementation",
    description:
      "Self-balancing AVL tree in C++ with single and double rotations, maintaining O(log n) insertion, deletion, and search.",
    technologies: ["C++", "Data Structures"],
    icon: TreeDeciduous,
  },
  {
    title: "Minesweeper Game",
    description:
      "Full Minesweeper game in C++ with dynamic board generation, recursive reveal logic, and careful memory management.",
    technologies: ["C++", "Memory Management"],
    icon: Bomb,
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
            Hardware and firmware work, from register-level drivers and custom CPUs to
            sensor integration and PCB design
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
              image={project.image}
              imageContain={project.imageContain}
              imageBgClass={project.imageBgClass}
              stacked={"stacked" in project && project.stacked}
              reversed={index % 2 === 0}
            />
          ))}
        </div>

        <h3 className="text-2xl font-semibold mt-20 mb-8 text-center">More Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {moreProjects.map((project) => {
            const Icon = project.icon;
            return (
              <Card key={project.title} className="hover-elevate">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-md bg-primary/10 shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold leading-snug">{project.title}</h4>
                      {project.role && (
                        <p className="text-sm text-primary font-medium">{project.role}</p>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="font-mono text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
