// Small inline icon set — kept dependency-free so the bundle stays lean.
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
  'aria-hidden': true,
}

export const IconCar = (p) => (
  <svg {...base} {...p}>
    <path d="M3 13l1.6-4.8A2 2 0 0 1 6.5 7h11a2 2 0 0 1 1.9 1.2L21 13" />
    <path d="M3 13h18v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H6v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
    <circle cx="7.5" cy="17" r="1.4" />
    <circle cx="16.5" cy="17" r="1.4" />
  </svg>
)

export const IconBike = (p) => (
  <svg {...base} {...p}>
    <circle cx="5.5" cy="17.5" r="3.2" />
    <circle cx="18.5" cy="17.5" r="3.2" />
    <path d="M5.5 17.5 10 9h5l3.5 8.5" />
    <path d="M10 9 8 6h-2" />
    <path d="M13 9l1.5 3h4" />
  </svg>
)

export const IconScooty = (p) => (
  <svg {...base} {...p}>
    <circle cx="6" cy="17.5" r="2.6" />
    <circle cx="18" cy="17.5" r="2.6" />
    <path d="M6 17.5h5.5v-4h3.5" />
    <path d="M11.5 13.5 14 8h3" />
    <path d="M18 17.5h1.5a1.5 1.5 0 0 0 1.5-1.5v-1" />
    <path d="M5 8h3l1 2" />
  </svg>
)

export const IconLicence = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="5.5" width="18" height="13" rx="2" />
    <circle cx="8.5" cy="11" r="2" />
    <path d="M5.5 16c.6-1.6 1.8-2.4 3-2.4s2.4.8 3 2.4" />
    <path d="M14.5 9.5h4" />
    <path d="M14.5 12.5h4" />
    <path d="M14.5 15.5h2.5" />
  </svg>
)

export const IconInstructor = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="8" r="3.2" />
    <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" />
  </svg>
)

export const IconVehicle = (p) => (
  <svg {...base} {...p}>
    <path d="M3 12l1.4-4.2A2 2 0 0 1 6.3 6.5h11.4a2 2 0 0 1 1.9 1.3L21 12" />
    <path d="M3 12h18v3.5a1 1 0 0 1-1 1h-1.2a1 1 0 0 1-1-1V15H6.2v.5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
    <path d="m8 3 1.5 3.5" />
    <path d="m16 3-1.5 3.5" />
  </svg>
)

export const IconTag = (p) => (
  <svg {...base} {...p}>
    <path d="M11.5 4h6.5a1 1 0 0 1 1 1v6.5a1 1 0 0 1-.3.7l-8 8a1 1 0 0 1-1.4 0l-6.5-6.5a1 1 0 0 1 0-1.4l8-8a1 1 0 0 1 .7-.3Z" />
    <circle cx="15.5" cy="8.5" r="1.4" />
  </svg>
)

export const IconShield = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3.5 19 6v5.5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
    <path d="m9 12 2 2 4-4.5" />
  </svg>
)

export const IconThumb = (p) => (
  <svg {...base} {...p}>
    <path d="M7 11v9H4.5A1.5 1.5 0 0 1 3 18.5V12.5A1.5 1.5 0 0 1 4.5 11z" />
    <path d="M7 11l3.2-6.4a1.6 1.6 0 0 1 2.9.9V9h4.2a2 2 0 0 1 1.95 2.42l-1.2 6A2 2 0 0 1 16.1 19H9.5A2.5 2.5 0 0 1 7 16.5" />
  </svg>
)

export const IconCheck = (p) => (
  <svg {...base} {...p}>
    <path d="M4 12.5 9 17.5 20 6" />
  </svg>
)

export const IconPhone = (p) => (
  <svg {...base} {...p}>
    <path d="M5 4h3.2l1.4 4.2-2 1.6a12.5 12.5 0 0 0 5.6 5.6l1.6-2 4.2 1.4V18a2 2 0 0 1-2 2C10.3 20 4 13.7 4 6a2 2 0 0 1 1-2z" />
  </svg>
)

export const IconWhatsapp = (p) => (
  <svg {...base} {...p} fill="currentColor" stroke="none" viewBox="0 0 32 32">
    <path d="M16.02 3C9.4 3 4.05 8.35 4.05 14.97c0 2.22.6 4.3 1.65 6.09L4 29l8.13-1.66a12.9 12.9 0 0 0 3.9.6c6.63 0 11.98-5.35 11.98-11.97C27.99 8.35 22.64 3 16.02 3Zm7.03 17c-.3.85-1.5 1.55-2.46 1.75-.66.14-1.5.25-4.4-.94-3.7-1.53-6.08-5.3-6.27-5.55-.18-.25-1.5-2-1.5-3.8 0-1.8.94-2.68 1.28-3.05.3-.33.66-.4.88-.4.22 0 .44 0 .63.01.2.01.47-.08.74.56.3.7 1.02 2.4 1.1 2.58.09.18.15.39.03.63-.12.24-.18.39-.36.6-.18.2-.38.46-.54.62-.18.18-.37.37-.16.72.2.35.9 1.5 1.95 2.42 1.35 1.2 2.48 1.58 2.84 1.76.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.4.24-.36.48-.3.8-.18.33.12 2.1 1 2.46 1.17.36.18.6.27.68.42.09.15.09.88-.21 1.73Z" />
  </svg>
)

export const IconPin = (p) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.4" />
  </svg>
)

export const IconClock = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
)

export const IconMail = (p) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
    <path d="m4 6.5 8 6.2 8-6.2" />
  </svg>
)

export const IconMenu = (p) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)
