# Embedded Systems Engineer Portfolio

## Overview

This is a personal portfolio website for an Embedded Systems Engineer, showcasing technical skills, projects, and professional experience in hardware and software development. The site features a modern, clean design inspired by Linear and Stripe aesthetics, with a focus on presenting embedded systems projects including custom CPU architectures, microcontroller development, PCB design, and digital signal processing work.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS variables for theming
- **Component Library**: Shadcn/ui (Radix UI primitives with custom styling)
- **Build Tool**: Vite for development and production builds

The frontend follows a component-based architecture with:
- Page components in `client/src/pages/`
- Reusable UI components in `client/src/components/ui/`
- Portfolio-specific components in `client/src/components/portfolio/`
- Custom hooks in `client/src/hooks/`

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Pattern**: RESTful endpoints prefixed with `/api`
- **Development**: Hot module replacement via Vite middleware

The server provides:
- Static file serving for production builds
- API route registration through `server/routes.ts`
- Storage abstraction layer in `server/storage.ts`

### Design System
- Light/dark theme support with CSS custom properties
- Typography: Inter for headings/body, JetBrains Mono for code
- Consistent spacing using Tailwind's spacing scale
- Responsive layouts with mobile-first approach

## External Dependencies

### Database
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts`
- **Migrations**: Managed via `drizzle-kit push`
- **Connection**: Requires `DATABASE_URL` environment variable

Note: The application currently uses in-memory storage (`MemStorage`) as the default implementation, with PostgreSQL support configured for when a database is provisioned.

### Third-Party Services
- **Google Fonts**: Inter and JetBrains Mono font families
- No external API integrations currently configured

### Key NPM Packages
- `@tanstack/react-query`: Server state management
- `@radix-ui/*`: Accessible UI primitives
- `class-variance-authority`: Component variant styling
- `lucide-react`: Icon library
- `zod`: Schema validation
- `drizzle-zod`: Drizzle-to-Zod schema generation