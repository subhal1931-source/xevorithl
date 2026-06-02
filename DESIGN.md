# Design Brief

## Direction

Xevorith Engineering Lab — Futuristic portfolio with glassmorphism, neon accents, and premium tech aesthetic for engineering services.

## Tone

Retro-futuristic meets high-tech minimalism: bold, distinctive, dark background with intentional electric cyan and blue glowing accents for engineering-forward energy.

## Differentiation

Glassmorphism backbone with signature glowing accent highlights on cards and interactive elements against pure black, creating a premium, distinctive engineering hub aesthetic.

## Color Palette

| Token      | OKLCH          | Role                                |
| ---------- | -------------- | ----------------------------------- |
| background | 0.12 0 0       | Pure black page background          |
| foreground | 0.92 0 0       | High-contrast white text            |
| card       | 0.16 0 0       | Frosted glass card backgrounds      |
| primary    | 0.65 0.24 260  | Electric cyan accent highlights     |
| secondary  | 0.65 0.23 280  | Electric blue accent secondary      |
| accent     | 0.65 0.24 260  | Interactive glow and focus states   |
| muted      | 0.22 0 0       | Subtle glass layers and borders     |
| border     | 0.25 0.02 260  | Subtle cyan-tinted glass borders    |

## Typography

- Display: Space Grotesk — Headlines, hero text, brand identity
- Body: DM Sans — UI labels, paragraphs, body copy
- Scale: Hero `text-5xl md:text-7xl font-bold tracking-tight`, Section `text-3xl md:text-4xl font-bold`, Label `text-xs font-semibold uppercase tracking-widest`, Body `text-base`

## Elevation & Depth

Surface hierarchy through glassmorphism: backdrop-filter blur + semi-transparent card backgrounds create floating depth. Glass effect (0.6 opacity backdrop) on cards, lighter glass (0.4 opacity) on nested elements. Cyan/blue glows add luminosity on interactive elements.

## Structural Zones

| Zone      | Background          | Border                           | Notes                                              |
| --------- | ------------------- | -------------------------------- | -------------------------------------------------- |
| Header    | Glass effect 0.6    | Cyan tint (0.25 0.02 260)        | Translucent hero area with glow accents           |
| Sidebar   | Glass effect 0.4    | Cyan border (0.22 0.02 260)      | Collapsible on mobile, active state glows         |
| Content   | Pure background     | —                                | Cards with glass effect, alternate subtle opacity |
| Cards     | Glass effect 0.5    | None or subtle cyan tint         | Service cards, tutorial cards with glow on hover  |
| Footer    | Glass effect 0.4    | Cyan accent border-t             | Trust links with subtle glass styling             |

## Spacing & Rhythm

Wide gaps between major sections (2rem–4rem) for breathing room; cards use consistent 1.5rem padding; micro-spacing 0.5rem–1rem within components. Consistent grid rhythm with 16px base unit.

## Component Patterns

- Buttons: Cyan/blue background with glass effect, white text, glow shadow on hover, rounded-lg
- Cards: Glass effect (0.5–0.6 opacity), subtle cyan border, glow shadow on hover, rounded-lg
- Links: Cyan text color (primary), glow text-shadow on hover, no underline
- Badges: Cyan background (0.65 0.24 260), dark text, rounded-full, glass effect

## Motion

- Entrance: Fade-in on scroll with subtle float animation (translate-y, 6s ease-in-out)
- Hover: Color/glow intensification on cards and buttons, shadow/blur increase, 0.3s ease transition
- Decorative: Gentle pulse glow on accent elements (3s ease-in-out), floating animation on hero cards

## Constraints

- Always use glassmorphism backdrop-filter; never flat opaque backgrounds
- Cyan (0.65 0.24 260) reserved for highlights, interactive focus; blue (0.65 0.23 280) for secondary interactive
- No gradients on page backgrounds; use color layers instead
- High contrast on all text (minimum 0.7 L difference) for accessibility
- No animations faster than 0.3s or slower than 6s

## Signature Detail

Cyan glowing accent highlights on service cards and navigation elements create an unmistakable futuristic energy while maintaining premium minimalism — the glow is subtle but intentional, electric without being garish.
