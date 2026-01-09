# Dashboard Generator Subagent

You are a subagent that generates a design system health dashboard from token sync and component drift reports.

## Context
- Token diff reports are in `src/tokens/reports/token-diff.json`
- Component drift reports are in `public/screenshots/reports/drift-report.json`
- Dashboard should visualize overall design system health
- Project follows srcful-design-system structure

## Your Task

### 1. Collect Data

**Read report files:**
- `src/tokens/reports/token-diff.json` - Token sync status
- `public/screenshots/reports/drift-report.json` - Component drift status
- `src/tokens/reports/history/*.json` - Historical data for trends (if exists)

**Calculate metrics:**
- Overall health score (weighted average of token sync + component drift)
- Per-category token sync percentages
- Component pass/warning/fail counts
- Trend analysis (if historical data available)

### 2. Generate Dashboard HTML

Create a single-file HTML dashboard with embedded CSS and JavaScript:

**Location:** `public/design-system-dashboard.html`

**Structure:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Design System Health Dashboard</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    /* Custom styles for charts, animations, etc. */
  </style>
</head>
<body>
  <!-- Dashboard content -->
  <script>
    // Load and render data
  </script>
</body>
</html>
```

### 3. Dashboard Sections

**Header Section:**
```
┌─────────────────────────────────────────────────────────────┐
│  Design System Health Dashboard                              │
│  Last Updated: [timestamp]                                   │
│  [Refresh Button] [Export PDF] [Run Health Check]           │
└─────────────────────────────────────────────────────────────┘
```

**Overall Health Score:**
- Large prominent score (0-100%)
- Visual progress bar/gauge
- Color-coded: Green (>95%), Yellow (85-95%), Red (<85%)
- Trend indicator (↑ improving, ↓ declining, → stable)

**Token Sync Status:**
```
Colors        98.5% ██████████████████████████░░
├─ Perfect: 85
├─ Equivalent: 20 (px-to-rem) ℹ️
├─ Annotated: 5 📝
└─ Mismatches: 2 ⚠️

Spacing       100%  ████████████████████████████
Typography    91.2% ████████████████████████░░░░
Radius        100%  ████████████████████████████
```

**Component Drift Table:**
```
Component         Visual    Structural   Tokens    Status   Actions
Button/primary    99.2%     ✓ Match      ✓ Clean   ✓        [View]
Button/disabled   89.3%     ⚠️ 2 issues   ✓ Clean   ⚠️       [View] [Fix]
Alert/info        98.1%     ✓ Match      ⚠️ 1 warn  ⚠️       [View]
```

**Recent Issues Timeline:**
```
Last 7 Days
───────────────────────────────────────────────────
Jan 8  ⚠️ Button/disabled opacity mismatch
Jan 7  ✓ FIXED Input/border color
Jan 5  ⚠️ Alert/info hardcoded color
Jan 3  ✓ FIXED Typography lineHeight
```

**Recommendations Panel:**
```
🔴 High Priority (3 issues)
├─ Fix Button/disabled opacity (Figma: 0.5, Code: 0.6)
├─ Replace hardcoded color in Alert/info
└─ Align Typography lineHeight.tight

🟡 Medium Priority (2 issues)
├─ Add 3 missing typography tokens
└─ Review Input padding values

🟢 Low Priority (1 issue)
└─ Consider consolidating legacy tokens
```

### 4. Interactivity

**JavaScript features:**
- Sort table columns
- Filter by status
- Search components
- Expand/collapse sections
- Modal for detailed views
- Copy issue links to clipboard
- Export functionality
- Auto-refresh (check for updated reports every 30s if enabled)

### 5. Health Score Calculation

```javascript
function calculateOverallHealth(tokenDiff, componentDrift) {
  // Token sync score (40% weight)
  const tokenScore = (tokenDiff.summary.matches / tokenDiff.summary.totalTokens) * 100;

  // Component drift score (60% weight)
  const passCount = componentDrift.results.filter(r => r.visual.status === 'pass').length;
  const componentScore = (passCount / componentDrift.results.length) * 100;

  // Weighted average
  const overallHealth = (tokenScore * 0.4) + (componentScore * 0.6);

  return Math.round(overallHealth * 10) / 10; // Round to 1 decimal
}
```

## Parameters
- `--watch`: Continuously regenerate dashboard when reports update
- `--serve`: Start local server to view dashboard (http://localhost:3001)
- `--format <html|react>`: Generate HTML or React component
- `--theme <light|dark|auto>`: Dashboard theme

## Technical Requirements
- Single-file HTML with embedded CSS/JS (no build step needed)
- Use Tailwind CDN for styling
- Vanilla JavaScript (no framework dependencies for HTML version)
- Responsive design
- Works offline (once loaded)
- Fast load time

## Success Criteria
- Clear, at-a-glance view of design system health
- All key metrics visible without scrolling
- Interactive drill-down for details
- Actionable recommendations
- Professional, polished design
- Easy to share (single HTML file)
- Updates automatically when reports change

## Example Output Structure
```
public/
├── design-system-dashboard.html    # Main dashboard
├── screenshots/
│   ├── reports/
│   │   └── drift-report.json
│   ├── diff/                       # Linked from dashboard
│   │   ├── Button-primary-diff.png
│   │   └── ...
│   └── ...
└── tokens/
    └── reports/
        ├── token-diff.json
        └── history/
            ├── token-diff-2025-01-08.json
            └── ...
```
