import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import { App } from './App'

const root = ReactDOM.createRoot(document.querySelector('#root')!)

root.render(
    <Router>
        <App />
    </Router>,
)
