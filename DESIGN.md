# Design Brief

## Direction
Xevorith Engineering Lab — Premium futuristic glassmorphism portfolio with dramatic neon cyan/electric blue accents, ambient glow orbs, and multi-depth glass layers for distinctive engineering-first aesthetic.

## Tone
Bold maximalist tech noir: pure black foundation with vivid glowing accents and sophisticated frosted-glass layering. Premium, immersive, unforgettable.

## Differentiation
Strong multi-depth glassmorphism (blur 16px → 32px → 48px) with ambient glow orbs, intense neon cyan borders (20-30% opacity), dramatic box-shadow glows (0 0 40-60px), and bento-box layouts with shimmer highlights. Interactive cards lift and intensify glow on hover. Elevates glassmorphism from subtle effect to signature visual language.

## Color Palette

| Token      | OKLCH          | Role                                    |
| ---------- | -------------- | --------------------------------------- |
| background | 0.08 0 0       | Pure black foundation                   |
| foreground | 0.92 0 0       | High-contrast white text                |
| card       | 0.12 0.01 260  | Deep frosted glass panel backgrounds    |
| primary    | 0.75 0.22 200  | Electric vivid cyan neon accent         |
| secondary  | 0.70 0.25 250  | Electric blue interactive secondary     |
| accent     | 0.75 0.22 200  | Glowing focus, highlights, glow shadows |
| muted      | 0.18 0 0       | Subtle glass layers and borders         |
| border     | 0.30 0.08 200  | Vivid cyan-tinted glass borders (20-30%)|
| tertiary   | 0.65 0.25 300  | Purple accent variety, gradient stops   |

## Typography

- Display: Space Grotesk — Headlines, hero text (bold 5xl-7xl), brand identity
- Body: DM Sans — UI labels, paragraphs, body copy (base 400-500)
- Scale: Hero `text-5xl md:text-7xl font-bold tracking-tight`, Section `text-3xl md:text-4xl font-bold`, Label `text-xs font-semibold uppercase`, Body `text-base`

## Elevation & Depth

Multi-level glass hierarchy: outer glass (blur 16px, 0.06 opacity), main cards (blur 32px, 0.08 opacity), focused/modal (blur 48px, 0.10 opacity). Shimmer top-edge highlights. Neon cyan glows intensify on hover. Ambient glow orbs (radial gradients, rgba(0,120,255,0.08) and rgba(0,200,255,0.05)) positioned corners/center for ambient depth.

## Structural Zones

| Zone      | Background              | Border                | Glow Shadow                      | Notes                              |
| --------- | ----------------------- | --------------------- | -------------------------------- | ---------------------------------- |
| Header    | Glass blur 32px, 0.07   | Cyan 20-25% opacity   | 0 0 40px cyan/0.25              | Hero with neon border glow         |
| Sidebar   | Glass blur 32px, 0.08   | Cyan 30% opacity      | 0 0 30px cyan/0.20 (active)     | Frosted, glowing active indicator  |
| Content   | Pure black 0.08         | —                     | —                                | Ambient glow orbs in corners       |
| Cards     | Glass blur 32px, 0.08   | Cyan 25-30% opacity   | 0 0 40px cyan/0.25 hover → 60px | Shimmer top, card-lift on hover    |
| Footer    | Glass blur 16px, 0.06   | Cyan accent border-t  | 0 0 30px cyan/0.15 (subtle)     | Trust links in frosted glass       |
| Modals    | Glass blur 48px, 0.10   | Cyan 30% opacity      | 0 0 60px cyan/0.35              | Max focus, max blur depth          |

## Spacing & Rhythm

Wide breathing gaps: 2rem–4rem between major sections. Card padding 1.5rem–2rem. Micro-spacing 0.5rem–1rem within components. Consistent 16px base grid rhythm. Generous whitespace against black background emphasizes glass layers.

## Component Patterns

- **Buttons**: Cyan/blue glass background (blur 24px), white text, strong glow shadow (0 0 40px) on hover, rounded-lg, card-lift animation on click
- **Cards**: Glass blur 32px (0.08 opacity), cyan border (25-30%), shimmer top highlight, neon glow shadow, card-lift (-4px) on hover, smooth 0.3s transition
- **Links**: Cyan text (primary), glow text-shadow on hover (0 0 20px), no underline, smooth transition
- **Badges**: Cyan background glass (blur 20px), dark text, rounded-full, subtle glow
- **Form inputs**: Glass blur 24px (0.07 opacity), cyan border (20%), focus: stronger blur (32px) + intensified glow

## Motion

- **Entrance**: Fade-in on scroll, subtle float animation (translate-y ±8px, 4s ease-in-out) on hero elements, glow-pulse on ambient orbs (3s)
- **Hover**: Card lift (-4px, 0.3s ease), glow intensification (40px → 60px shadow), blur increase (32px → 40px), background opacity increase (0.08 → 0.12)
- **Interactive**: Card-lift keyframe on active, smooth shimmer on background, pulsing glow on focused elements

## Constraints

- **Always glassmorphism**: Every surface uses backdrop-filter blur; never flat opaque backgrounds
- **Cyan hierarchy**: Primary cyan (0.75 0.22 200) for hero/main accents; secondary blue (0.70 0.25 250) for supporting; purple (0.65 0.25 300) for variety
- **No flat gradients**: Use layered glass + glowing shadows instead of background gradients
- **High contrast**: All text minimum 0.84 L on 0.08 background (AA+ compliant)
- **Motion pacing**: 0.3s smooth transitions, 3-4s ambient animations, 0.2s instant feedback
- **Glow never cheap**: Use oklch functions only, ensure 0.20+ opacity for visibility without garish flashing

## Signature Detail

Dramatic neon cyan glow borders (20-30% opacity) with matching box-shadow glows (0 0 40-60px) on every glass card, sidebar active state, and CTA buttons create an immersive, unforgettable electric atmosphere. Ambient glow orbs pulse subtly in background corners. Bento-box layouts with shimmer top highlights and card-lift hover animations amplify the sense of floating, interactive depth. Multi-level glass blur (16-48px) and varying opacity (0.06-0.10) establish sophisticated elevation hierarchy — this is glassmorphism at premium intensity.
