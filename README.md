# Portfolio 3D

A modern, interactive 3D portfolio website built with React, Three.js, and Framer Motion.

## Features

- Interactive 3D elements with React Three Fiber
- Smooth animations with Framer Motion
- Responsive design with Tailwind CSS
- Modern UI components with Radix UI
- Fast development with Vite
- Custom cursor and loading animations

## Tech Stack

- **Frontend**: React 18, JSX
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS, PostCSS
- **UI Components**: Radix UI, Lucide React
- **Build Tool**: Vite
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

- Clone the repository

```bash
git clone <repository-url>
cd <project-directory>
```

- Install dependencies

```bash
pnpm install
```

- Start the development server

```bash
pnpm run dev
```

- Open [http://localhost:5173](http://localhost:5173) in your browser

## Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run preview` - Preview production build

## Project Structure

```text
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Projects.jsx    # Projects showcase
│   ├── Skills.jsx      # Skills section
│   ├── Contact.jsx     # Contact form
│   └── ...
├── lib/                # Utility functions
├── App.jsx             # Main app component
├── main.jsx            # App entry point
└── index.css           # Global styles
```

## Sections

- **Hero** - Landing section with 3D elements
- **About** - Personal introduction
- **Projects** - Portfolio showcase
- **Skills** - Technical skills display
- **Contact** - Contact form
