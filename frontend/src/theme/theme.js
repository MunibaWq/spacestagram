import { createTheme } from '@material-ui/core';

export const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          margin: '0'
        }
      }
    }
  }
});
