import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { useKeycloak } from '@react-keycloak/web'
import { PrivateRoute } from './privateRoute'
import { createBrowserHistory } from 'history'
import { Dashboard } from '../components/Layout'

import { ReactComponent as LoadingSvg } from '../components/Assets/loading.svg'
import theme from '../theme'

export const history = createBrowserHistory()

const Routes: React.FC = () => {
  const { initialized, keycloak } = useKeycloak()

  if (!initialized && process.env.NODE_ENV === 'production') {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          backgroundColor: theme.palette.primary.main
        }}
      >
        <LoadingSvg />
      </div>
    )
  }

  const Private: React.FC = () => {
    return <h1>Private</h1>
  }

  const Public: React.FC = () => {
    if (!keycloak.authenticated) {
      keycloak.login()
    } else {
      history.push('/dashboard')
    }
    return <h1>Public</h1>
  }

  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/dashboard" />
        <Dashboard>
          <PrivateRoute path="/dashboard" component={Private} />
        </Dashboard>
        <Route exact path="/login" component={Public} />
        <Route path="*" component={() => <h1>Page Not Found - 404</h1>} />
      </Switch>
    </Router>
  )
}

export default Routes
