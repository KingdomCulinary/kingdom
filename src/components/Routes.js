import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Email from '../pages/Email'
import Chart from '../pages/Chart'
import Profile from '../pages/Profile'
import Settings from '../pages/Settings'

const routes = () => {
    return (
        <Routes>
            <Route exact path='/' component={Dashboard} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/Email' component={Email} />
            <Route path='/Chart' component={Chart} />
            <Route path='/Profile' component={Profile} />
            <Route path='/Settings' component={Settings} />
        </Routes>
    );
}

export default Routes