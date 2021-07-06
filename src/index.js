import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import {ShoppingState} from './context/ShoppingContext'

ReactDOM.render(
    <Router>
     <ShoppingState>
    <App />
    </ShoppingState>
    </Router>
,document.getElementById('root'))