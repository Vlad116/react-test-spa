import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import useAuth from './hooks/useAuth'

interface IProtectedRoute extends RouteProps {
    component: React.ComponentType
}

const ProtectedRoute = ({
    component: Component,
    ...rest
}: IProtectedRoute): JSX.Element => {
    const isAuth = useAuth()

    return (
        <Route
            {...rest}
            render={(props) => {
                if (isAuth) {
                    return <Component />
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: '/',
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    )
                }
            }}
        />
    )
}

export default ProtectedRoute
