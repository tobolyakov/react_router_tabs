//Core
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

// Instruments

export default class TabLinks extends Component {

    render() {
        const { dataSort } = this.props;

        const tabItems = dataSort.map(( tabItem ) => <Link to = { tabItem.id } className = "tab-item" key = { tabItem.order }>{ tabItem.title }</Link>);

        return (
            <div className = "tab">
                { tabItems }
            </div>
        )
    }
}