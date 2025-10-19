// UI Constants
export const SCROLL_THRESHOLDS = {
  NAVBAR_SCROLL: 50,
  SECTION_DETECTION: 100,
  SECTION_OFFSET: 80,
  BACK_TO_TOP: 0.8, // 80% of viewport height
};

// Animation Constants
export const ANIMATION_TIMING = {
  LOADING_SCREEN: 2000,
  HERO_ROTATION_SPEED: 0.05,
  HERO_ROTATION_X_SPEED: 0.02,
  FLOAT_SPEED_BASE: 1.5,
  FLOAT_SPEED_RANDOM: 2,
  ROTATION_INTENSITY_BASE: 1,
  FLOAT_INTENSITY_BASE: 1.5,
};

// 3D Scene Constants
export const SCENE_CONFIG = {
  ICON_SPREAD: 15,
  CENTRAL_OBJECT_SCALE: 3.5,
  ICON_SIZE: 0.6,
  CAMERA_POSITION: [0, 0, 10],
  CAMERA_FOV: 50,
  FOG_NEAR: 10,
  FOG_FAR: 30,
};

// Layout Constants
export const LAYOUT = {
  NAVBAR_HEIGHT_MOBILE: 16, // h-16 in Tailwind (64px)
  NAVBAR_HEIGHT_DESKTOP: 20, // h-20 in Tailwind (80px)
  SECTION_PADDING: 20, // py-20 in Tailwind
  ABOUT_SECTION_PADDING_TOP: 40, // pt-40 in Tailwind
};

// Responsive Breakpoints (Tailwind CSS defaults)
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Grid System
export const GRID = {
  PROJECTS_COLS: {
    mobile: 'grid-cols-1',
    tablet: 'md:grid-cols-2', 
    desktop: 'lg:grid-cols-3'
  },
  SKILLS_COLS: {
    mobile: 'grid-cols-1',
    tablet: 'md:grid-cols-2',
    desktop: 'lg:grid-cols-3'
  }
};