import { ProjectCard } from "../portfolio/ProjectCard";
import { Cpu } from "lucide-react";

export default function ProjectCardExample() {
  return (
    <div className="max-w-4xl">
      <ProjectCard
        title="Custom 8-bit CPU (VHDL)"
        description="Designed a complete CPU from scratch including ALU, program counter, register file, and instruction decoder."
        technologies={["VHDL", "ModelSim", "RTL Design"]}
        highlights={[
          "Built ALU with arithmetic and logic operations",
          "Implemented program counter and instruction decoder",
          "Full RTL simulation and timing verification",
        ]}
        icon={Cpu}
      />
    </div>
  );
}
