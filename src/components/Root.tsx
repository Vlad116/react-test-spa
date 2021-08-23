import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'mobx-react'
import App from './App'

// и контектс стейта мб (провайдер)?
const Root = (): JSX.Element => {
    return (
        <Router>
            <Provider>
                <App />
            </Provider>
        </Router>
    )
}

export default Root
