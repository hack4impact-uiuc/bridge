/* eslint-disable prefer-destructuring */

function fontStack(fonts) {
  return fonts.map((font) => (font.includes(' ') ? `"${font}"` : font)).join(', ');
}

const DEFAULT_SHADOW = '0 1px 6px 2px rgba(0,0,0,0.15)';

const baseColors = {
  blue: ['#B4D8FA', '#3E87CD', '#155DA1', '#0E4E8A', '#0D3F6E', '#031425'],
  indigo: ['#7D9CD2', '#415F94', '#2D4979', '#253E68', '#13294E', '#061734'],
  grey: ['#EBEEF2', '#8B9199', '#666B72', '#46494F', '#272A2D', '#4B4E52'],
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
  primary: baseColors.grey[2],
  dark: baseColors.grey[3],
  darker: baseColors.grey[4],
  text: baseColors.indigo[5],
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
    greyScale: {
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

const letterSpacings = {
  zero: '0',
  third: '0.3px',
  half: '0.5px',
  one: '1px',
  two: '2px',
  negFifteen: '-0.15px',
};

// for a little better clarity
// typography styles for table, forms, and alerts
const tableFormAlertStyle = {
  fontFamily: fonts.main,
  fontWeight: fontWeights.regular,
  fontSize: '18px',
  letterSpacing: letterSpacings.third, // 0.3[x]
  lineHeight: '20px',
};

const tableHeadStyle = {
  fontWeight: fontWeights.medium,
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

  // Texts
  subtitle: {
    fontFamily: fonts.main,
    fontWeight: fontWeights.regular,
    fontSize: '20px',
    letterSpacing: letterSpacings.one, // 0.5px
    lineHeight: '28px',
  },
  body: {
    fontFamily: fonts.main,
    fontWeight: fontWeights.regular,
    fontSize: '16px',
    letterSpacing: letterSpacings.third, // 0.3px
    lineHeight: '24px',
  },
  caption: {
    fontFamily: fonts.main,
    fontWeight: fontWeights.regular,
    fontSize: '14px',
    letterSpacing: letterSpacings.half, // 0.5px
    lineHeight: '20px',
    fontStyle: 'italic',
  },
  overline: {
    fontFamily: fonts.main,
    fontWeight: fontWeights.bold,
    fontSize: '12px',
    letterSpacing: letterSpacings.two, // 2px
    lineHeight: '16px',
    textTransform: 'uppercase',
  },
  button: {
    fontFamily: fonts.secondary, // Chivo
    fontWeight: fontWeights.bold,
    letterSpacing: letterSpacings.two, // 2px
    fontSize: '14px',
    lineHeight: '20px',
  },
  // for buttons that are small
  buttonSmall: {
    fontFamily: fonts.secondary, // Chivo
    fontWeight: fontWeights.bold,
    letterSpacing: letterSpacings.two, // 2px
    fontSize: '12px',
    lineHeight: '16px',
  },
  table: tableFormAlertStyle,
  tableHead: tableHeadStyle,
  forms: tableFormAlertStyle,
  alert: tableFormAlertStyle,
  quote: {
    fontFamily: fonts.main,
    fontWeight: fontWeights.light,
    fontSize: '22px',
    letterSpacing: letterSpacings.half, // 0.5px
    lineHeight: '33px',
  },
  tags: {
    fontFamily: fonts.main,
    fontWeight: fontWeights.regular,
    fontSize: '12px',
    letterSpacing: letterSpacings.third, // 0.3px
    lineHeight: '16px',
  },

};


const table = {
  primary: {
    borderBottom: `1px solid ${colors.greyPalette.lighter}`,
  },
  nthChild: {
    zebra: {
      background: `${colors.greyPalette.lighter}`,
    },
  },
};


// styling specific to the Button component
const buttons = {
  // padding is 2px smaller than defined in design system
  // because of 2px border
  sizingAndTypography: {
    small: {
      ...typography.buttonSmall,
      padding: '10px 14px',
    },
    medium: {
      ...typography.button,
      padding: '10px 14px',
    },
    large: {
      ...typography.button,
      padding: '12px 30px',
    },
  },
  // default values, based on the color palette
  default: (colorPalette) => ({
    bg: {
      default: colorPalette.primary,
      hover: colorPalette.dark,
      disabled: colorPalette.lighter,
    },
    border: {
      default: 'transparent',
      hover: 'transparent',
      disabled: 'transparent',
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
      disabled: greyPalette.lighter,
    },
    fontColor: {
      disabled: greyPalette.light,
    },
    outline: {
      bg: {
        disabled: colors.white,
      },
      border: {
        hover: bluePalette.darker,
        disabled: greyPalette.lighter,
      },
      fontColor: {
        disabled: greyPalette.lighter,
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
  alert: {
    success: {
      color: colors.greenPalette.text,
    },
    warning: {
      color: colors.yellowPalette.text,
    },
    error: {
      color: colors.redPalette.text,
    },
    information: {
      color: colors.indigoPalette.text,
    },
  },
};

const alert = {
  success: {
    background: colors.greenPalette.light,
    border: `1px solid ${colors.greenPalette.primary}`,
    color: colors.greenPalette.text,
  },
  warning: {
    background: colors.yellowPalette.lighter,
    border: `1px solid ${colors.yellowPalette.light}`,
    color: colors.yellowPalette.text,
  },
  error: {
    background: colors.redPalette.lighter,
    border: `1px solid ${colors.redPalette.light}`,
    color: colors.redPalette.text,
  },
  information: {
    background: colors.bluePalette.lighter,
    border: `1px solid ${colors.bluePalette.light}`,
    color: colors.indigoPalette.text,
  },
};

const textField = {
  default: {
    default: `1px solid ${colors.greyPalette.light}`,
    focus: `2px solid ${colors.bluePalette.primary}`,
  },
  success: {
    default: `1px solid ${colors.greenPalette.primary}`,
    focus: `2px solid ${colors.greenPalette.primary}`,
  },
  warning: {
    default: `1px solid ${colors.yellowPalette.primary}`,
    focus: `2px solid ${colors.yellowPalette.primary}`,
  },
  error: {
    default: `1px solid ${colors.redPalette.primary}`,
    focus: `2px solid ${colors.redPalette.primary}`,
  },
  disabled: {
    'background-color': `${colors.greyPalette.lighter}`,
    border: `1px solid ${colors.greyPalette.light}`,
    color: `${colors.greyPalette.light}`,
  },
};

const radio = {
  border: `1px solid ${colors.greyPalette.light}`,
  disabledFill: `${colors.greyPalette.primary}`, // fill of the button when disabled
  default: {
    background: `${colors.bluePalette.primary}`,
  },
  success: {
    background: `${colors.greenPalette.primary}`,
  },
  warning: {
    background: `${colors.yellowPalette.primary}`,
  },
  error: {
    background: `${colors.redPalette.primary}`,
  },
  disabled: {
    background: `${colors.greyPalette.lighter}`,
  },
};

const checkbox = {
  border: `1px solid ${colors.greyPalette.light}`,
  borderRadius: '3px',
  disabled: {
    background: `${colors.greyPalette.lighter}`,
    border: `1px solid ${colors.greyPalette.primary}`,
  },
  // error states
  checked: {
    default: {
      background: `${colors.bluePalette.primary}`,
      border: `1px solid ${colors.bluePalette.primary}`,
    },
    success: {
      background: `${colors.greenPalette.primary}`,
      border: `1px solid ${colors.greenPalette.primary}`,
    },
    warning: {
      background: `${colors.yellowPalette.primary}`,
      border: `1px solid ${colors.yellowPalette.primary}`,
    },
    error: {
      background: `${colors.redPalette.primary}`,
      border: `1px solid ${colors.redPalette.primary}`,
    },
  },
};

const dropdown = textField;

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
  alert,
  buttons,
  table,
  link,
  letterSpacings,
  DEFAULT_SHADOW,
  space,
  breakpoints,
  radio,
  textField,
  typography,
  checkbox,
  dropdown,
};


export default theme;
export { colors };
