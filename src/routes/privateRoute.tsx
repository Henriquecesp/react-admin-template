/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Route, Redirect, RouteComponentProps } from 'react-router-dom'
import type { RouteProps } from 'react-router-dom'
import { useKeycloak } from '@react-keycloak/web'

interface PrivateRouteParams extends RouteProps {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>
}
interface PrivateRouteParams extends RouteProps {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>
}

export function PrivateRoute({
  component: Component,
  ...rest
}: PrivateRouteParams): any {
  const { keycloak } = useKeycloak()

  return (
    <Route
      {...rest}
      render={props =>
        // eslint-disable-next-line multiline-ternary
        keycloak.authenticated || process.env.NODE_ENV !== 'production' ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
}
