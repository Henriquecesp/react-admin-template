import Keycloak from 'keycloak-js'

export const keycloakInitConfig: Keycloak.KeycloakInitOptions = {
  onLoad: 'check-sso'
}

export const keycloakEventLogger = (event: unknown, error: unknown): void => {
  console.log('onKeycloakEvent', event, error)
}

// keycloakTokenLogger(tokens: unknown)
export const keycloakTokenLogger = (tokens: unknown): void => {
  console.log('onKeycloakTokens', tokens)
}

// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloak = Keycloak({
  realm: process.env.REACT_APP_KEYCLOAK_REALM || '',
  url: process.env.REACT_APP_KEYCLOAK_URL,
  clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID || ''
})

export default keycloak
