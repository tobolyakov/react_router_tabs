//Core
import React, { Component } from 'react';

// Instruments
import TabLinks from './TabLinks';
import TabContent from './TabContent';

const tabData = require('../../data/index.json');

class Tabs extends Component {

    render() {
        const dataSort = tabData.sort((a, b) => {
            return a.order - b.order;
        });

        return (
            <div className="tabs-wrap">
                <TabLinks dataSort = { dataSort } />
                <TabContent dataSort = { dataSort } />
            </div>
        );
    }
}

export default Tabs;
