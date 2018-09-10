//Core
import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import { DummyTable, DummyChart, DummyList } from './tabs/';

// Instruments
const tabData = require('../../data/index.json');

export default class TabContainers extends Component {

    render() {

        const dataSort = tabData.sort((a, b) => {
            return a.order - b.order;
        });

        return (
            <div className="tab-content">
                <Switch>
                    <Route path="/dummyTable" exact component={ DummyTable } />

                    <Route path="/dummyChart" component={ DummyChart } />

                    <Route path="/dummyList" component={ DummyList } />

                    <Redirect from='/' to={`/${ dataSort[0].id }`}/>
                </Switch>
            </div>
        )

    }
}
