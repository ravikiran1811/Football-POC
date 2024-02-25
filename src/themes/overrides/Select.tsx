import { Theme } from "@mui/material/styles";

export default function Select(theme: Theme) {
  return {
    MuiSelect: {
      styleOverrides: {
        root: {},
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {},
      },
    },
  };
}
