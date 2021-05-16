import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#16dfb5',
    },
    secondary: {
      main: '#582fe2',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#121212',
    },
  },
})

export default theme
