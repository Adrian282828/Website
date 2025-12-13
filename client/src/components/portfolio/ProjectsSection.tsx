import { ProjectCard } from "./ProjectCard";
import {
  Cpu,
  Volume2,
  Radio,
  BarChart3,
  MemoryStick,
  TreeDeciduous,
  Bomb,
} from "lucide-react";
import ebiImage from "@assets/Ebi_1765600059662.jpg";
import cpuImage from "@assets/CPU_1765606942178.png";
import regressionImage from "@assets/image_1765606804334.png";
import amplifierImage from "@assets/image_1765607800003.png";
import imuImage from "@assets/image_1765608588509.png";
import minesweeperImage from "@assets/image_1765608966486.png";
import avlImage from "@assets/image_1765609061594.png";

const projects = [
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
    title: "Custom 4-bit CPU (VHDL)",
    description:
      "Designed a complete CPU from scratch including ALU, program counter, register file, and instruction decoder. Verified the full instruction set using ModelSim simulation.",
    technologies: ["VHDL", "ModelSim", "RTL Design"],
    highlights: [
      "Built ALU with arithmetic and logic operations",
      "Implemented program counter and instruction decoder",
      "Full RTL simulation and timing verification",
    ],
    icon: Cpu,
    image: cpuImage,
    imageContain: true,
    imageBgClass: "bg-slate-800",
  },
  {
    title: "AVL Tree Implementation (C++)",
    description:
      "Implemented a self-balancing AVL tree from scratch in C++, focusing on efficient insertion, deletion, and search operations. Emphasized correctness, performance, and maintaining balance through rotations.",
    technologies: ["C++", "Data Structures", "Algorithms"],
    highlights: [
      "Implemented single and double tree rotations",
      "Maintained balance factors and height updates",
      "Ensured O(log n) performance for core operations",
    ],
    icon: TreeDeciduous,
    image: avlImage,
    imageContain: true,
    imageBgClass: "bg-slate-800",
  },
  {
    title: "Minesweeper Game (C++)",
    description:
      "Developed a full Minesweeper game in C++ with dynamic board generation, user interaction, and game logic. Focused on clean design, memory management, and edge-case handling.",
    technologies: ["C++", "Game Logic", "Memory Management"],
    highlights: [
      "Dynamic grid and mine placement",
      "Recursive reveal logic for empty cells",
      "Robust win/loss condition handling",
    ],
    icon: Bomb,
    image: minesweeperImage,
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
    image: imuImage,
    imageContain: true,
    imageBgClass: "bg-slate-800",
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
    image: regressionImage,
    imageContain: true,
    imageBgClass: "bg-slate-700",
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
              image={project.image}
              imageContain={project.imageContain}
              imageBgClass={project.imageBgClass}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
