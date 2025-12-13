import { SkillCard } from "../portfolio/SkillCard";
import { Cpu } from "lucide-react";

export default function SkillCardExample() {
  return (
    <div className="max-w-sm">
      <SkillCard
        title="Embedded Systems"
        icon={Cpu}
        skills={[
          "Low-level C for microcontrollers",
          "Assembly (ATxmega128A1U)",
          "SPI, UART, I2C protocols",
          "DAC, ADC, DMA configuration",
        ]}
      />
    </div>
  );
}
