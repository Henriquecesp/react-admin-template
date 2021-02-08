import React from 'react'
import { ReactKeycloakProvider } from '@react-keycloak/web'
import keycloak, { keycloakInitConfig } from './providers/keycloak'
import Routes from './routes'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import theme from './theme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ReactKeycloakProvider
        authClient={keycloak}
        initOptions={keycloakInitConfig}
      >
        <CssBaseline />
        <Routes />
      </ReactKeycloakProvider>
    </ThemeProvider>
  )
}

export default App
