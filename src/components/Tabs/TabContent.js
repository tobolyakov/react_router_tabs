//Core
import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

// Components
const Loading = () => <div>Loading...</div>;

const DummyTable = Loadable({
    loader: () => import('./tabs-items/dummyTable'),
    loading: Loading,
});

const DummyChart = Loadable({
    loader: () => import('./tabs-items/dummyChart'),
    loading: Loading,
});

const DummyList = Loadable({
    loader: () => import('./tabs-items/dummyList'),
    loading: Loading,
});

// Instruments

export default class TabContainers extends Component {

    render() {

        const { dataSort } = this.props;

        return (
            <Switch>
                <Route path="/dummyTable" exact component={ DummyTable } />

                <Route path="/dummyChart" component={ DummyChart } />

                <Route path="/dummyList" component={ DummyList } />

                <Redirect from='/' to={`/${ dataSort[0].id }`}/>
            </Switch>
        )
    }
}
