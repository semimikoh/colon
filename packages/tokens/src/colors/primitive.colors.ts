import { colorValues } from './value.colors';

export const primitiveColors = {
  grey: {
    50: colorValues.grey50,
    100: colorValues.grey100,
    200: colorValues.grey200,
    300: colorValues.grey300,
    400: colorValues.grey400,
    500: colorValues.grey500,
    600: colorValues.grey600,
    700: colorValues.grey700,
    800: colorValues.grey800,
    900: colorValues.grey900,
  },

  inverseGrey: {
    50: colorValues.inverseGrey50,
    100: colorValues.inverseGrey100,
    200: colorValues.inverseGrey200,
    300: colorValues.inverseGrey300,
    400: colorValues.inverseGrey400,
    500: colorValues.inverseGrey500,
    600: colorValues.inverseGrey600,
    700: colorValues.inverseGrey700,
    800: colorValues.inverseGrey800,
    900: colorValues.inverseGrey900,
  },

  greyOpacity: {
    50: colorValues.greyOpacity50,
    100: colorValues.greyOpacity100,
    200: colorValues.greyOpacity200,
    300: colorValues.greyOpacity300,
    400: colorValues.greyOpacity400,
    500: colorValues.greyOpacity500,
    600: colorValues.greyOpacity600,
    700: colorValues.greyOpacity700,
    800: colorValues.greyOpacity800,
    900: colorValues.greyOpacity900,
  },

  whiteOpacity: {
    50: colorValues.whiteOpacity50,
    100: colorValues.whiteOpacity100,
    200: colorValues.whiteOpacity200,
    300: colorValues.whiteOpacity300,
    400: colorValues.whiteOpacity400,
    500: colorValues.whiteOpacity500,
    600: colorValues.whiteOpacity600,
    700: colorValues.whiteOpacity700,
    800: colorValues.whiteOpacity800,
    900: colorValues.whiteOpacity900,
  },

  blue: {
    50: colorValues.blue50,
    100: colorValues.blue100,
    200: colorValues.blue200,
    300: colorValues.blue300,
    400: colorValues.blue400,
    500: colorValues.blue500,
    600: colorValues.blue600,
    700: colorValues.blue700,
    800: colorValues.blue800,
    900: colorValues.blue900,
  },

  red: {
    50: colorValues.red50,
    100: colorValues.red100,
    200: colorValues.red200,
    300: colorValues.red300,
    400: colorValues.red400,
    500: colorValues.red500,
    600: colorValues.red600,
    700: colorValues.red700,
    800: colorValues.red800,
    900: colorValues.red900,
  },

  orange: {
    50: colorValues.orange50,
    100: colorValues.orange100,
    200: colorValues.orange200,
    300: colorValues.orange300,
    400: colorValues.orange400,
    500: colorValues.orange500,
    600: colorValues.orange600,
    700: colorValues.orange700,
    800: colorValues.orange800,
    900: colorValues.orange900,
  },

  yellow: {
    50: colorValues.yellow50,
    100: colorValues.yellow100,
    200: colorValues.yellow200,
    300: colorValues.yellow300,
    400: colorValues.yellow400,
    500: colorValues.yellow500,
    600: colorValues.yellow600,
    700: colorValues.yellow700,
    800: colorValues.yellow800,
    900: colorValues.yellow900,
  },

  green: {
    50: colorValues.green50,
    100: colorValues.green100,
    200: colorValues.green200,
    300: colorValues.green300,
    400: colorValues.green400,
    500: colorValues.green500,
    600: colorValues.green600,
    700: colorValues.green700,
    800: colorValues.green800,
    900: colorValues.green900,
  },

  teal: {
    50: colorValues.teal50,
    100: colorValues.teal100,
    200: colorValues.teal200,
    300: colorValues.teal300,
    400: colorValues.teal400,
    500: colorValues.teal500,
    600: colorValues.teal600,
    700: colorValues.teal700,
    800: colorValues.teal800,
    900: colorValues.teal900,
  },

  brandPurple: {
    50: colorValues.purple50,
    100: colorValues.purple100,
    200: colorValues.purple200,
    300: colorValues.purple300,
    400: colorValues.purple400,
    500: colorValues.purple500,
    600: colorValues.purple600,
    700: colorValues.purple700,
    800: colorValues.purple800,
    900: colorValues.purple900,
  },

  background: {
    base: colorValues.background,
    darkBase: colorValues.darkBackground,
    grey: colorValues.greyBackground,
    darkGrey: colorValues.darkGreyBackground,
    layered: colorValues.layeredBackground,
    darkLayered: colorValues.darkLayeredBackground,
    float: colorValues.floatBackground,
    darkFloat: colorValues.darkFloatBackground,
  },

  border: {
    lightHairline: colorValues.lightThemeHairlineBorder,
    darkHairline: colorValues.darkThemeHairlineBorder,
  },

  overlay: {
    light: colorValues.lightThemeBackgroundDimmed,
    dark: colorValues.darkThemeBackgroundDimmed,
  },
} as const;

export type PrimitiveColorKey = keyof typeof primitiveColors;
