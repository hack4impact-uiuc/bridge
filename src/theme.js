/* eslint-disable prefer-destructuring */

function fontStack(fonts) {
  return fonts.map((font) => (font.includes(' ') ? `"${font}"` : font)).join(', ');
}

const DEFAULT_SHADOW = '0 1px 6px 2px rgba(0,0,0,0.15)';

const baseColors = {
  hackBlue: ['#B4D8FA', '#3E87CD', '#155DA1', '#0E4E8A', '#0D3F6E', '#031425'],
  indigoBlue: ['#BCD0F3', '#415F94', '#2D4979', '#253E68', '#13294E', '#061734'],
  impactGrey: ['#FAFBFC', '#EBEEF2', '#8B9199', '#666B72', '#46494F'],
};

const hackBluePalette = {
  lighter: baseColors.hackBlue[0],
  light: baseColors.hackBlue[1],
  primary: baseColors.hackBlue[2],
  dark: baseColors.hackBlue[3],
  darker: baseColors.hackBlue[4],
  text: baseColors.hackBlue[5],
};

const indigoPalette = {
  lighter: baseColors.indigoBlue[0],
  light: baseColors.indigoBlue[1],
  primary: baseColors.indigoBlue[2],
  dark: baseColors.indigoBlue[3],
  darker: baseColors.indigoBlue[4],
  text: baseColors.indigoBlue[5],
};

const impactGreyPalette = {
  lighter: baseColors.impactGrey[0],
  light: baseColors.impactGrey[1],
  midtone: baseColors.impactGrey[2],
  primary: baseColors.impactGrey[3],
  darker: baseColors.impactGrey[4],
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
  hackBluePalette,
  indigoPalette,
  impactGreyPalette,
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
  colorVariants: {
    primary: hackBluePalette,
    success: greenPalette,
    error: redPalette,
    warning: yellowPalette,
    secondary: hackBluePalette,
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
  normal: 400,
  medium: 500,
  bold: 700,
};

// styling specific to the Button component
const button = {
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
      hover: hackBluePalette.darker,
      disabled: impactGreyPalette.light,
    },
    fontColor: {
      disabled: impactGreyPalette.midtone,
    },
    outline: {
      bg: {
        disabled: colors.white,
      },
      border: {
        hover: hackBluePalette.darker,
        disabled: impactGreyPalette.light,
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
    default: hackBluePalette.primary,
    hover: hackBluePalette.darker,
  },
};


const spacing = ['0px', '4px', '8px', '16px', '32px', '64px', '128px'];
spacing.none = spacing[0];
spacing.xxs = spacing[1];
spacing.xs = spacing[2];
spacing.sm = spacing[3];
spacing.md = spacing[4];
spacing.lg = spacing[5];
spacing.xl = spacing[6];

const theme = {
  // General
  colors,
  fonts,
  fontWeights,
  fontSizes,
  button,
  link,
  DEFAULT_SHADOW,
};


export default theme;
export { colors };
