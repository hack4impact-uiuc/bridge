/* eslint-disable prefer-destructuring */

function fontStack(fonts) {
  return fonts.map((font) => (font.includes(' ') ? `"${font}"` : font)).join(', ');
}

const DEFAULT_SHADOW = '0 1px 6px 2px rgba(0,0,0,0.15)';

const baseColors = {
  blue: ['#B4D8FA', '#3E87CD', '#155DA1', '#0E4E8A', '#0D3F6E', '#031425'],
  indigo: ['#BCD0F3', '#415F94', '#2D4979', '#253E68', '#13294E', '#061734'],
  grey: ['#FAFBFC', '#EBEEF2', '#8B9199', '#666B72', '#46494F'],
};

const bluePalette = {
  lighter: baseColors.blue[0],
  light: baseColors.blue[1],
  primary: baseColors.blue[2],
  dark: baseColors.blue[3],
  darker: baseColors.blue[4],
  text: baseColors.blue[5],
};

const indigoPalette = {
  lighter: baseColors.indigo[0],
  light: baseColors.indigo[1],
  primary: baseColors.indigo[2],
  dark: baseColors.indigo[3],
  darker: baseColors.indigo[4],
  text: baseColors.indigo[5],
};

const greyPalette = {
  lighter: baseColors.grey[0],
  light: baseColors.grey[1],
  midtone: baseColors.grey[2],
  primary: baseColors.grey[3],
  darker: baseColors.grey[4],
};

const secondaryColors = {
  green: ['#BDF3C6', '#90E19E', '#4C9859', '#256830', '#154C1E', '#031D07'],
  red: ['#FFBCBF', '#D1595F', '#A62B31', '#8A1A1F', '#6B1014', '#35080A'],
  yellow: ['#FFECBD', '#FFD15F', '#FDBE21', '#DA9C03', '#A77700', '#201803'],
};

const greenPalette = {
  lighter: secondaryColors.green[0],
  light: secondaryColors.green[1],
  primary: secondaryColors.green[2],
  dark: secondaryColors.green[3],
  darker: secondaryColors.green[4],
  text: secondaryColors.green[5],
};

const redPalette = {
  lighter: secondaryColors.red[0],
  light: secondaryColors.red[1],
  primary: secondaryColors.red[2],
  dark: secondaryColors.red[3],
  darker: secondaryColors.red[4],
  text: secondaryColors.red[5],
};

const yellowPalette = {
  lighter: secondaryColors.yellow[0],
  light: secondaryColors.yellow[1],
  primary: secondaryColors.yellow[2],
  dark: secondaryColors.yellow[3],
  darker: secondaryColors.yellow[4],
  text: secondaryColors.yellow[5],
};

const typographyColors = {
  charcoal: '#272A2D',
  iron: '#4B4E52',
  ink: '#0A162A',
  slate: '#363949',
};

const colors = {
  black: '#000000',
  white: '#FFFFFF',
  ...baseColors,
  ...secondaryColors,
  ...typographyColors,
  bluePalette,
  indigoPalette,
  greyPalette,
  greenPalette,
  redPalette,
  yellowPalette,
  text: {
    grayScale: {
      main: typographyColors.charcoal,
      support: typographyColors.iron,
    },
    coolTone: {
      main: typographyColors.ink,
      support: typographyColors.slate,
    },
  },
  // states or in other words color variants
  variants: {
    primary: bluePalette,
    success: greenPalette,
    error: redPalette,
    warning: yellowPalette,
    secondary: bluePalette,
    white: {
      primary: '#FFFFFF',
      dark: '#FFFFFF',
      lighter: indigoPalette.light,
    },
  },
};

const fontSizes = ['12px', '14px', '16px', '18px', '20px', '22px', '25px', '28px', '32px', '45px', '60px'];

const fonts = {
  main: fontStack(['HKGrotesk']),
  secondary: fontStack(['Chivo']),
};

const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
};

const letterSpacings = ['0', '0.3px', '0.5px', '2px', '-0.15px'];
letterSpacings.zero = letterSpacings[0]; // 0
letterSpacings.third = letterSpacings[1]; // 0.3px
letterSpacings.half = letterSpacings[2]; // 0.5px
letterSpacings.two = letterSpacings[3]; // 22px
letterSpacings.negFifteen = letterSpacings[4]; // -0.15px

// for a little better clarity
// typography styles for table, forms, and alerts
const tableFormAlertStyle = {
  fontFamily: fonts.main,
  fontWeight: fontWeights.regular,
  fontSize: '18px',
  letterSpacing: letterSpacings.third, // 0.3[x]
  lineHeight: '24px',
};

const typography = {
  h1: {
    fontFamily: fonts.secondary, // Chivo
    fontWeight: fontWeights.regular,
    fontSize: '60px',
    letterSpacing: letterSpacings.third, // 0.3px
    lineHeight: '88px',
  },
  h2: {
    fontFamily: fonts.secondary,
    fontWeight: fontWeights.regular,
    fontSize: '44px',
    letterSpacing: letterSpacings.half, // 0.5px
    lineHeight: '64px',
  },
  h3: {
    fontFamily: fonts.secondary,
    fontWeight: fontWeights.regular,
    fontSize: '32px',
    letterSpacing: letterSpacings.zero, // 0
    lineHeight: '48px',
  },
  h4: {
    fontFamily: fonts.secondary,
    fontWeight: fontWeights.regular,
    fontSize: '24px',
    letterSpacing: letterSpacings.negFifteen, // -0.15
    lineHeight: '36px',
  },
  subtitle: {
    fontFamily: fonts.main,
    fontWeight: fontWeights.regular,
    fontSize: '20px',
    letterSpacing: letterSpacings.half, // 0.5px
    lineHeight: '28px',
  },

  // Texts
  body: {
    fontFamily: fonts.main,
    fontWeight: fontWeights.regular,
    fontSize: '16px',
    letterSpacing: letterSpacings.third, // 0.3px
    lineHeight: '24px',
  },
  hero: {
    fontFamily: fonts.main,
    fontWeight: fontWeights.regular,
    fontSize: '22px',
    letterSpacing: letterSpacings.half, // 0.5px
    lineHeight: '32px',
  },
  overline: {
    fontFamily: fonts.main,
    fontWeight: fontWeights.bold,
    fontSize: '12px',
    letterSpacing: letterSpacings.two, // 2px
    lineHeight: '16px',
    textTransform: 'uppercase',
  },
  caption: {
    fontFamily: fonts.main,
    fontWeight: fontWeights.regular,
    fontSize: '14px',
    letterSpacing: letterSpacings.half, // 0.5px
    lineHeight: '20px',
    fontStyle: 'italic',
  },
  button: {
    fontFamily: fonts.secondary, // Chivo
    fontWeight: fontWeights.bold,
    fontSize: '14px',
    letterSpacing: letterSpacings.two, // 2px
    lineHeight: '20px',
    textTransform: 'uppercase',
  },
  table: tableFormAlertStyle,
  forms: tableFormAlertStyle,
  alerts: tableFormAlertStyle,
  quote: {
    fontFamily: fonts.main,
    fontWeight: fontWeights.light,
    fontSize: '28px',
    letterSpacing: letterSpacings.half, // 0.5px
    lineHeight: '40px',
  },
};


// styling specific to the Button component
const buttons = {
  font: fonts.secondary,
  fontWeight: fontWeights.bold,
  fontSize: '14px',
  letterSpacing: '2px',
  // default values, based on the color palette
  default: (colorPalette) => ({
    bg: {
      default: colorPalette.primary,
      hover: colorPalette.dark,
      disabled: colorPalette.lighter,
    },
    border: {
      default: 'none',
      hover: 'none',
      disabled: 'none',
    },
    fontColor: {
      default: colors.white,
      hover: colors.white,
      disabled: colorPalette.light,
    },
    shadow: {
      default: 'none',
      hover: 'none',
      disabled: 'none',
    },
    outline: {
      bg: {
        default: colors.white,
        hover: colors.white,
        disabled: colors.white,
      },
      border: {
        default: colorPalette.primary,
        hover: colorPalette.dark,
        disabled: colorPalette.lighter,
      },
      fontColor: {
        default: colorPalette.primary,
        hover: colorPalette.dark,
        disabled: colorPalette.lighter,
      },
      shadow: {
        default: 'none',
        hover: 'none',
        disabled: 'none',
      },
    },
  }),

  // everything below overrides the default values
  primary: {
    fontColor: {
      default: colors.white,
      hover: colors.white,
      disabled: colors.white,
    },
  },
  white: {
    fontColor: {
      default: indigoPalette.primary,
      hover: indigoPalette.primary,
      disabled: indigoPalette.lighter,
    },
    shadow: {
      hover: DEFAULT_SHADOW,
    },
    outline: {
      bg: {
        default: indigoPalette.primary,
        hover: indigoPalette.primary,
        disabled: indigoPalette.primary,
      },
      border: {
        disabled: indigoPalette.light,
      },
      fontColor: {
        default: colors.white,
        hover: colors.white,
        disabled: indigoPalette.lighter,
      },
      shadow: {
        hover: DEFAULT_SHADOW,
      },
    },
  },
  secondary: {
    bg: {
      hover: bluePalette.darker,
      disabled: greyPalette.light,
    },
    fontColor: {
      disabled: greyPalette.midtone,
    },
    outline: {
      bg: {
        disabled: colors.white,
      },
      border: {
        hover: bluePalette.darker,
        disabled: greyPalette.light,
      },
      fontColor: {
        disabled: indigoPalette.lighter,
      },
    },
  },
};


const link = {
  default: (colorPalette) => ({
    color: {
      default: colorPalette.primary,
      hover: colorPalette.dark,
    },
  }),
  secondary: {
    default: bluePalette.primary,
    hover: bluePalette.darker,
  },
};

const breakpoints = ['544px', '768px', '992px', '1280px'];
breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];

const space = ['0px', '4px', '8px', '16px', '32px', '64px', '128px'];
space.none = space[0];
space.xxs = space[1];
space.xs = space[2];
space.sm = space[3];
space.md = space[4];
space.lg = space[5];
space.xl = space[6];

const theme = {
  // General
  colors,
  fonts,
  fontWeights,
  fontSizes,
  buttons,
  link,
  DEFAULT_SHADOW,
  space,
  breakpoints,
  typography,
};


export default theme;
export { colors };
