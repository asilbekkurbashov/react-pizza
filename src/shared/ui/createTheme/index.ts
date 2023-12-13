import { createTheme } from '@mui/material/styles';
declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}
export const dark = createTheme({
  palette: {
    neutral: {
      main: '#212121',
      contrastText: '#fff',
    },
  },
});
export const grey = createTheme({
  palette: {
    neutral: {
      main: '#F9F9F9',
      contrastText: '#212121',
    },
  },
});