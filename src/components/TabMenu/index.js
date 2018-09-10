//Core
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

// Instruments
const tabData = require('../../data/index.json');

export default class TabMenu extends Component {

    render() {
        const dataSort = tabData.sort((a, b) => {
            return a.order - b.order;
        });

        const tabItems = dataSort.map(( tabItem ) => <li className="tab-item" key = { tabItem.order }><Link to={ tabItem.id }>{ tabItem.title }</Link></li>)

        return (
            <div className="tab-header">
                <nav className="nav-wrapper">
                    <ul className="tab-menu">
                        { tabItems }
                    </ul>
                </nav>
            </div>
        )
    }
}