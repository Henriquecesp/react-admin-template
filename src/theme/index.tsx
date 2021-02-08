import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#7984ee',
      main: '#6730EC ',
      dark: '#280B6F ',
      contrastText: '#fff'
    },
    success: {
      light: '#6FCF97',
      main: '#27AE60',
      dark: '#219653',
      contrastText: '#fff'
    },
    warning: {
      light: '#ffb74d',
      main: '#F2994A',
      dark: '#f57c00',
      contrastText: '#fff'
    }
  }
})

export default theme
