# Design System Subagents

This directory contains specifications for specialized subagents that automate design system quality checks and maintain sync between Figma and code.

## Overview

These subagents work together to ensure your design system stays consistent across three critical dimensions:
1. **Design tokens** - Are Figma variables in sync with code tokens?
2. **Visual appearance** - Do components look the same in Figma and code?
3. **Documentation** - Are docs accurate and up-to-date?

## Available Subagents

### 1. Component Screenshot Generator
**File**: `01-component-screenshot-generator.md`
**Purpose**: Generate screenshots of all component variants for visual regression testing

```bash
# Generate screenshots for all components
claude --subagent component-screenshot-generator --all

# Generate for specific component
claude --subagent component-screenshot-generator --component Button
```

**Output**: `public/screenshots/code/`

---

### 2. Figma Drift Detection
**File**: `02-figma-drift-detection.md`
**Purpose**: Compare Figma designs against React implementations

```bash
# Check all components
claude --subagent figma-drift-check --all

# Check specific component
claude --subagent figma-drift-check --component Button

# Update Figma exports first
claude --subagent figma-drift-check --all --update-figma
```

**Output**:
- `public/screenshots/figma/` - Figma exports
- `public/screenshots/diff/` - Visual diff images
- `public/figma-json/` - Component JSON from Figma
- `public/screenshots/reports/drift-report.json`

---

### 3. Token Sync & Diff
**File**: `03-token-sync-diff.md`
**Purpose**: Extract and compare design tokens between Figma and code

```bash
# Compare tokens
claude --subagent token-sync --compare

# Extract from Figma only
claude --subagent token-sync --extract-figma

# Extract from code only
claude --subagent token-sync --extract-code

# Auto-sync (update code to match Figma)
claude --subagent token-sync --auto-sync --dry-run
```

**Output**:
- `src/tokens/figma/*.json` - Figma token exports
- `src/tokens/code/*.json` - Code token exports
- `src/tokens/reports/token-diff.json` - Comparison report

---

### 4. Dashboard Generator
**File**: `04-dashboard-generator.md`
**Purpose**: Generate interactive health dashboard from all reports

```bash
# Generate dashboard
claude --subagent dashboard-generator

# Watch mode - auto-regenerate on changes
claude --subagent dashboard-generator --watch

# Serve locally
claude --subagent dashboard-generator --serve
```

**Output**: `public/design-system-dashboard.html`

---

### 5. Documentation Validator
**File**: `05-documentation-validator.md`
**Purpose**: Validate component documentation against code and Figma

```bash
# Check all docs
claude --subagent doc-validator --all

# Check specific component
claude --subagent doc-validator --component Button

# Auto-update docs
claude --subagent doc-validator --all --auto-update --dry-run

# Strict mode for CI
claude --subagent doc-validator --strict
```

**Output**: `docs/reports/doc-validation.json`

---

## Workflows

### Daily Development
```bash
# Before committing changes
claude --subagent component-screenshot-generator --all
claude --subagent doc-validator --all --auto-update
```

### Weekly Figma Sync
```bash
# Full health check
claude --subagent token-sync --compare
claude --subagent figma-drift-check --all --update-figma
claude --subagent dashboard-generator

# Open dashboard to review
open public/design-system-dashboard.html
```

### CI/CD Pipeline
```bash
# Run in GitHub Actions
claude --subagent doc-validator --strict  # Fails if docs outdated
claude --subagent token-sync --compare    # Reports mismatches
```

---

## Integration

All subagents produce JSON reports that feed into the dashboard:

```
Token Sync Report → ┐
Component Drift  → ├→ Dashboard Generator → design-system-dashboard.html
Doc Validation   → ┘
```

The dashboard shows:
- Overall health score (0-100%)
- Token sync status per category
- Component drift details with visual diffs
- Documentation quality metrics
- Prioritized recommendations
- Trend analysis (if historical data available)

---

## Requirements

### For Screenshot Generation & Visual Diff:
```bash
npm install -D playwright pixelmatch pngjs
npx playwright install
```

### For Figma Integration:
- Figma API token (set in environment)
- Figma MCP configured
- Figma file ID

### For Token Extraction:
- Access to Figma API
- Tailwind config or CSS variables in code

---

## Tips

1. **Run screenshot generator before commits** to maintain visual history
2. **Use `--dry-run` with auto-sync** to preview changes first
3. **Check dashboard regularly** to catch drift early
4. **Set up CI to validate docs** on every PR
5. **Keep cache warm** - run health checks during business hours for better Figma API caching

---

## Future Enhancements

Potential additional subagents:
- **A11y Auditor**: Automated accessibility checking
- **Theme Validator**: Ensure components work in all themes
- **Playground AI**: AI-powered layout generation
- **Bundle Size Monitor**: Track component sizes over time
- **Migration Assistant**: Help migrate legacy code to design system

See the main conversation for detailed specifications of these.
