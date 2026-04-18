import type { ThemeInput } from "./types";

/**
 * Built-in ThemeInputs. Every theme — built-in or user-built — is a
 * ThemeInput. Built-ins are just curated ones we ship as starting points.
 *
 * To add a new built-in: define a ThemeInput here, import it in index.ts,
 * and add it to the registry.
 */

/**
 * Ramp — the canonical Ramp Design System look.
 *
 * Single-hue teal (neutral, primary, accent all at 175°). Neutral gets a
 * whisper of chroma (0.08× default curve) so grays look warm against the
 * teal rather than clinical.
 */
export const rampInput: ThemeInput = {
  id: "ramp",
  name: "Ramp",
  description: "Canonical teal — single-hue brand, modern sans.",
  tagline: "Signature",
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

/**
 * Paper — warm editorial counterpoint to Ramp.
 *
 * Warm neutral tint (~40° amber), terracotta primary (~20°), amber accent.
 * Serif display (Instrument Serif) with a sans body, roomier spacing,
 * rounder corners, pill buttons, outlined cards, subtle shadows, slower
 * motion. Intentionally reads very differently from Ramp so theme
 * switching demonstrates the full range of the generator.
 */
export const paperInput: ThemeInput = {
  id: "paper",
  name: "Paper",
  description: "Quiet editorial — warm mono, serif headings, roomy feel.",
  tagline: "Editorial",
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
    display: "instrumentSerif",
    body: "plusJakarta",
    mono: "jetbrainsMono",
    scale: "default",
    headingWeight: 400,
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

export const BUILT_IN_INPUTS: ThemeInput[] = [rampInput, paperInput];
