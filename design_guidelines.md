# Design Guidelines: Embedded Systems Engineer Portfolio

## Design Approach
**Reference-Based Approach**: Drawing inspiration from Linear (clean typography, technical aesthetic), Stripe (minimal professionalism), and modern developer portfolios (Vercel, GitHub profiles) to create a sophisticated engineering portfolio that balances technical credibility with visual appeal.

## Core Design Principles
- Technical Precision: Clean, engineering-minded layouts that reflect the systematic nature of hardware work
- Project-First: Prioritize showcasing work over decorative elements
- Professional Authority: Establish credibility through polished, confident presentation
- Accessibility: Clear hierarchy and readable typography throughout

## Typography System
**Font Families**:
- Headings: Inter (600-700 weight) - modern, technical, highly legible
- Body: Inter (400-500 weight) - consistent family for cohesion
- Code/Technical: JetBrains Mono for any technical specifications

**Type Scale**:
- Hero Name: text-5xl md:text-7xl font-bold
- Section Headings: text-3xl md:text-4xl font-semibold
- Project Titles: text-xl md:text-2xl font-semibold
- Subheadings: text-lg md:text-xl font-medium
- Body Text: text-base leading-relaxed
- Technical Tags: text-sm font-medium

## Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm (e.g., p-8, gap-6, space-y-12)

**Container Strategy**:
- Page sections: max-w-6xl mx-auto px-6 md:px-8
- Text content: max-w-4xl for readability
- Full-width backgrounds with constrained content

**Grid Patterns**:
- Skills: 2-column grid on mobile, 4-column on desktop (grid-cols-2 md:grid-cols-4)
- Projects: Single column cards with internal flex layouts for image + content
- Technical tags: Flex wrap with gap-2

## Page Structure

**Hero Section** (h-screen or min-h-screen):
- Large professional headshot or workspace photo (engineering bench, oscilloscope, PCBs)
- Name in large, bold typography
- Title: "Embedded Systems Engineer" or "Hardware & Digital Design Engineer"
- Brief 2-sentence value statement
- Primary CTA: "View Projects" smooth scroll button
- Secondary: GitHub icon link
- Image: Professional photo showing you with hardware/tools, or workspace setup

**Skills Section** (py-20):
- "Technical Expertise" heading
- Four category cards in grid layout: Embedded Systems, Digital Design, Electronics & Hardware, Software & Tools
- Each card has category title + bulleted skill list
- Subtle card borders, clean hierarchy

**Projects Section** (py-24):
- "Featured Projects" heading
- 8 project cards in vertical stack with generous spacing (space-y-16)
- Each card: Left-aligned image (40% width on desktop, full-width mobile) + right-aligned content (60%)
- Alternate image position (left/right) for visual rhythm
- Content includes: Project title, 2-3 sentence description, "Key Technologies" tag group, "Technical Highlights" bulleted list
- Images: Photos of actual PCBs, oscilloscope screens, hardware prototypes, or technical diagrams
- Hover: Subtle elevation increase on cards

**Contact Section** (py-20):
- Simple centered layout
- "Let's Connect" heading
- Email and GitHub links as prominent buttons
- Brief closing statement

## Component Library

**Navigation** (fixed top):
- Clean horizontal nav with logo/name left, links right
- Links: Skills, Projects, Contact
- Backdrop blur on scroll for depth

**Project Cards**:
- White/light background with subtle shadow
- Rounded corners (rounded-lg)
- Image: aspect-video with object-cover, rounded corners
- Tech tags: Small pills with subtle background, inline-flex wrap
- Structured content hierarchy within card

**Buttons**:
- Primary: Solid fill with rounded-md, px-6 py-3
- Secondary: Outline style
- Blur background when over images per guidelines

**Skill Category Cards**:
- Grid layout with consistent card height
- Category name as card header
- Skill list with subtle bullet styling
- Clean borders, subtle hover state

## Images
**Required Images**:
1. **Hero**: Professional photo (headshot or workspace with hardware) - full-width background with overlay
2. **Custom CPU Project**: VHDL simulation screenshot or architecture diagram
3. **Gyro DAC**: Photo of ATxmega board with oscilloscope waveform
4. **Audio Amplifier**: PCB photo (populated board)
5. **FSAE**: Race car electrical system or team photo
6. **GRiP Controller**: Modified Xbox controller photo
7. **IMU Driver**: Sensor board or SerialPlot data visualization
8. **Synthesizer**: Microcontroller setup with waveform output
9. **Regression AI**: Looker Studio dashboard screenshot

**Image Treatment**: All project images should be crisp, well-lit technical photos. Use rounded-lg corners, subtle shadows for depth.

## Spacing & Rhythm
- Section vertical padding: py-20 md:py-24
- Inter-section spacing: mb-16 md:mb-24
- Card spacing: space-y-8 within sections
- Content padding: p-6 md:p-8 for cards

## Animations
Minimal, purposeful only:
- Smooth scroll behavior for navigation
- Subtle card hover elevation (translate-y-1)
- Nav backdrop blur on scroll
- NO complex scroll animations or parallax

This portfolio emphasizes technical credibility through clean design, clear project presentation, and professional polish befitting an embedded systems engineer.