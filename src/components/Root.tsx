import React from 'react'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'
import { Provider } from 'mobx-react'
import App from './App'

const history = createBrowserHistory()

// и контектс стейта мб (провайдер)?
const Root = (): JSX.Element => {
    return (
        <Router history={history}>
            <Provider>
                <App />
            </Provider>
        </Router>
    )
}

export default Root
