/**
 * Blog category colors for consistent theming
 */
export const CATEGORY_COLORS: Record<string, string> = {
  'tech': '#06b6d4',
  'personal': '#8b5cf6',
  'culture': '#6366f1',
  'politics': '#9898b0'
} as const;

/**
 * Get color for a blog category, with fallback
 */
export function getCategoryColor(category: string): string {
  return CATEGORY_COLORS[category] || CATEGORY_COLORS.politics;
}
