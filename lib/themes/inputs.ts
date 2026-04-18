import type { ThemeInput } from "./types";

/**
 * Built-in ThemeInputs. Every theme — built-in or user-built — is a
 * ThemeInput. Built-ins are just curated ones we ship as starting points.
 *
 * "Calm" is the canonical Ramp DS look: warm neutrals, terracotta primary,
 * serif display + body, roomier spacing, rounded corners, pill buttons,
 * subtle shadows. "Energy" is a bolder alternate — teal primary, Geist
 * sans, tighter feel.
 *
 * To add a new built-in: define a ThemeInput here, import it in index.ts,
 * and add it to the registry.
 */

/**
 * Calm — the canonical Ramp DS theme.
 *
 * Warm neutral tint (~40° amber), terracotta primary (~20°), amber accent.
 * Serif display and body (Fraunces with its full variable weight range),
 * roomier spacing, rounder corners, pill buttons, outlined cards, subtle
 * shadows, slower motion.
 */
export const calmInput: ThemeInput = {
  id: "calm",
  name: "Calm",
  description: "Warm neutrals, terracotta primary, serif typography.",
  tagline: "Signature",
  hues: {
    neutral: 40,
    primary: 20,
    accent: 40,
  },
  chroma: {
    neutral: 0.15,
    primary: 0.75,
    accent: 0.8,
  },
  typography: {
    // Fraunces has proper variable weights, so bold headings look like serif
    // bold (Instrument Serif only ships in 400 and synthesizes awkwardly when
    // something like `font-bold` on an h1 forces 700).
    display: "fraunces",
    body: "fraunces",
    mono: "jetbrainsMono",
    scale: "default",
    headingWeight: 600,
    headingTracking: "-0.02em",
  },
  spacing: { density: "roomy" },
  radius: { style: "round" },
  effects: {
    shadows: "subtle",
    motionIntensity: 1.25,
  },
  components: {
    buttonShape: "pill",
    inputStyle: "outlined",
    cardStyle: "outlined",
  },
};

/**
 * Energy — bolder alternate theme.
 *
 * Single-hue teal (neutral, primary, accent all at 175°). Neutral gets a
 * whisper of chroma (0.08× default curve) so grays look cool against the
 * teal rather than clinical. Modern sans (Geist) with tighter spacing and
 * standard corners.
 */
export const energyInput: ThemeInput = {
  id: "energy",
  name: "Energy",
  description: "Bold teal — single-hue brand, modern sans, punchy feel.",
  tagline: "Alternate",
  hues: {
    neutral: 175,
    primary: 175,
    accent: 175,
  },
  chroma: {
    neutral: 0.08,
    primary: 1.0,
    accent: 1.0,
  },
  typography: {
    display: "geist",
    body: "geist",
    mono: "geistMono",
    scale: "default",
    headingWeight: 600,
  },
  spacing: { density: "default" },
  radius: { style: "soft" },
  effects: {
    shadows: "default",
    motionIntensity: 1,
  },
  components: {
    buttonShape: "default",
    inputStyle: "outlined",
    cardStyle: "flat",
  },
};

export const BUILT_IN_INPUTS: ThemeInput[] = [calmInput, energyInput];
