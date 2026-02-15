// EcoFootprint - Theme
// Earthy green for sustainability - nature, eco-friendly, organic

export const colors = {
  // Brand colors - Emerald Green (nature, sustainability)
  primary: "#10B981",
  primaryLight: "#34D399",
  primaryDark: "#059669",
  
  // Semantic
  success: "#34C759",
  warning: "#F59E0B",
  error: "#EF4444",
  info: "#3B82F6",
  
  // Neutrals
  background: "#FFFFFF",
  surface: "#F9FAFB",
  surfaceSecondary: "#F3F4F6",
  border: "#E5E7EB",
  
  // Text
  textPrimary: "#111827",
  textSecondary: "#4B5563",
  textTertiary: "#9CA3AF",
  textInverse: "#FFFFFF",
  
  // Dark mode
  dark: {
    background: "#111827",
    surface: "#1F2937",
    surfaceSecondary: "#374151",
    border: "#4B5563",
    textPrimary: "#FFFFFF",
    textSecondary: "#D1D5DB",
    textTertiary: "#9CA3AF",
  }
};

export const spacing = {
  xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 24, xxxl: 32,
};

export const radius = {
  sm: 6, md: 12, lg: 16, xl: 20, full: 9999,
};

export const fontSize = {
  caption: 13, body: 17, subtitle: 20, title: 22, header: 34,
};

export const fontWeight = {
  regular: "400" as const, medium: "500" as const, semibold: "600" as const, bold: "700" as const,
};
