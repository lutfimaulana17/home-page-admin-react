import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Sidebar } from '../../components'
import Home from '../Home'
import './mainApp.scss'

const MainApp = () => {
    return (
        <div className="main-app-wrapper">
            <Sidebar />
            <div className="content-wrapper">
                <Router>
                    <Switch>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </div>
    )
}

export default MainApp
