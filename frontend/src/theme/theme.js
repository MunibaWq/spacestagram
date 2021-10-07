import { createTheme } from '@material-ui/core';
let theme = createTheme();
theme = createTheme(theme, {
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          margin: '0'
        }
      }
    }
  },
  palette: {
    main: '#f5f5f5'
  },
  typography: {
    h1: {
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: '2.25rem'
      }
    }
  }
});

export default theme;
