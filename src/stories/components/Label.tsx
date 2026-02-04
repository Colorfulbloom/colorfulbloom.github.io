export const LABEL_COLORS = [
  'azure-bolt',
  'deep-azure',
  'obsidian',
  'charcoal',
  'quicksilver',
  'amber',
  'emerald',
  'rose',
] as const;

export type LabelColor = typeof LABEL_COLORS[number];

/** Pre-mapped tech labels — each picks a colour that suits the brand. */
export const TECH_LABELS: Record<string, LabelColor> = {
  'AI':          'emerald',
  'HTML':        'rose',
  'CSS':         'azure-bolt',
  'JavaScript':  'amber',
  'TypeScript':  'deep-azure',
  'React':       'azure-bolt',
  'Node.js':     'emerald',
  'PHP':         'charcoal',
  'Drupal':      'deep-azure',
  'Unity3D':     'obsidian',
  'Unreal Engine': 'charcoal',
  'Python':      'amber',
  'Docker':      'azure-bolt',
  'Git':         'obsidian',
  'Sass':        'rose',
  'Bootstrap':   'quicksilver',
};

export interface LabelProps {
  /** Label colour variant */
  color?: LabelColor;
  /** Text displayed inside the label */
  text: string;
  /** Additional CSS classes merged onto the label root */
  className?: string;
}

/** A small inline tag / badge. When `color` is omitted it auto-maps from
 *  `TECH_LABELS` if the text matches a known tech; otherwise falls back
 *  to azure-bolt. */
export const Label = ({ color, text, className }: LabelProps) => {
  const resolved = color ?? TECH_LABELS[text] ?? 'azure-bolt';

  return (
    <span className={`label label--${resolved}${className ? ` ${className}` : ''}`}>
      {text}
    </span>
  );
};
