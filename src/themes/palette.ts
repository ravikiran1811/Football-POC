import { alpha } from "@mui/material/styles";

function createGradient(color1: string, color2: string) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const PRIMARY = {
  lighter: "#C8FACD",
  light: "#5BE584",
  main: "#0162C4",
  dark: "#007B55",
  darker: "#005249",
};
const SECONDARY = {
  lighter: "#D6E4FF",
  light: "#84A9FF",
  main: "#3366FF",
  dark: "#1939B7",
  darker: "#091A7A",
};
const INFO = {
  lighter: "#D0F2FF",
  light: "#74CAFF",
  main: "#1890FF",
  dark: "#0C53B7",
  darker: "#04297A",
};
const SUCCESS = {
  lighter: "#E9FCD4",
  light: "#AAF27F",
  main: "#54D62C",
  dark: "#229A16",
  darker: "#08660D",
};
const WARNING = {
  lighter: "#FFF7CD",
  light: "#FFE16A",
  main: "#FFC107",
  dark: "#B78103",
  darker: "#7A4F01",
};
const ERROR = {
  lighter: "#FFE7D9",
  light: "#FFA48D",
  main: "#FF4842",
  dark: "#B72136",
  darker: "#7A0C2E",
};

const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
  500_8: alpha("#919EAB", 0.08),
  500_12: alpha("#919EAB", 0.12),
  500_16: alpha("#919EAB", 0.16),
  500_24: alpha("#919EAB", 0.24),
  500_32: alpha("#919EAB", 0.32),
  500_48: alpha("#919EAB", 0.48),
  500_56: alpha("#919EAB", 0.56),
  500_80: alpha("#919EAB", 0.8),
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

const palette = {
  primary: {
    lighter: PRIMARY.lighter,
    light: PRIMARY.light,
    main: PRIMARY.main,
    dark: PRIMARY.dark,
    darker: PRIMARY.darker,
    contrastText: "#fff",
  },
  secondary: {
    lighter: SECONDARY.lighter,
    light: SECONDARY.light,
    main: SECONDARY.main,
    dark: SECONDARY.dark,
    darker: SECONDARY.darker,
    contrastText: "#fff",
  },
  info: {
    lighter: INFO.lighter,
    light: INFO.light,
    main: INFO.main,
    dark: INFO.dark,
    darker: INFO.darker,
    contrastText: "#fff",
  },
  success: {
    lighter: SUCCESS.lighter,
    light: SUCCESS.light,
    main: SUCCESS.main,
    dark: SUCCESS.dark,
    darker: SUCCESS.darker,
    contrastText: GREY[800],
  },
  warning: {
    lighter: WARNING.lighter,
    light: WARNING.light,
    main: WARNING.main,
    dark: WARNING.dark,
    darker: WARNING.darker,
    contrastText: GREY[800],
  },
  error: {
    lighter: ERROR.lighter,
    light: ERROR.light,
    main: ERROR.main,
    dark: ERROR.dark,
    darker: ERROR.darker,
    contrastText: "#fff",
  },
  gradient: GRADIENTS,
};

export default palette;
