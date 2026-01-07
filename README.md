# Ramp Design System (RDS)

Design system, components, and brand guidelines.

**Live site:** [ramp-ds.vercel.app/docs](https://ramp-ds.vercel.app/docs)

## What's included

- **50+ React Components** - Built on Radix UI and styled with Tailwind CSS
- **Design Tokens** - Colors, typography, spacing, shadows as CSS variables
- **Brand Guidelines** - Logo, colors, typography, voice & tone
- **Dark Mode** - Full dark mode support across all components
- **Accessibility** - WCAG 2.1 AA compliant, keyboard navigation, screen reader support

## Quick Start

```bash
npm install @ramp-ds/ui
```

```tsx
import { Button, Card, Input } from "@ramp-ds/ui"
import "@ramp-ds/ui/styles.css"

function App() {
  return (
    <Card>
      <Button>Click me</Button>
    </Card>
  )
}
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## For Claude Code Users

This design system is optimized for AI-assisted development. To use it in your projects:

### 1. Copy the template

Copy [`CLAUDE.project-template.md`](./CLAUDE.project-template.md) to your project root as `CLAUDE.md`:

```bash
curl -o CLAUDE.md https://raw.githubusercontent.com/alastairdriver-git/ramp-ds/main/CLAUDE.project-template.md
```

### 2. Install the package

```bash
npm install @ramp-ds/ui
```

### 3. Start building

Claude Code will automatically read your `CLAUDE.md` and use the design system for all UI work.

See the [Claude Code setup guide](https://ramp-ds.vercel.app/docs/claude-code) for more details.

## Structure

```
├── app/                    # Next.js documentation site
│   ├── docs/              # Getting started, tokens
│   ├── components/        # Component documentation
│   └── brand/             # Brand guidelines
├── components/
│   └── ui/                # React components
├── lib/                   # Utilities
└── registry/              # Component schemas (JSON)
```

## License

MIT © Ramp
