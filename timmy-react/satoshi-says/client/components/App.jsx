import React from 'react';
import StartPage from './StartPage.jsx';
import FaqPage from './FaqPage.jsx';
import '../css/master.css'

import SatoshiOldPage from './SatoshiOldPage.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact={ true } path='/' component={StartPage}/>
                    <Route exact={ true } path='/faq' component={FaqPage}/>
                    <Route exact={ true } path='/satoshiold' component={ FaqPage } />
                </div>
            </Router>
        )
    }
}