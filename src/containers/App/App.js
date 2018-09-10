//Core
import React, { Component } from 'react';
import {BrowserRouter} from "react-router-dom";

// Instruments
import TabContainers from '../../components/TabContainers/index';
import TabMenu from '../../components/TabMenu/index';
import logo from '../../logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter basename="/">
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <main className="">
                        <div className="g-container">
                            <div className="tab-wrap">
                                <TabMenu />
                                <TabContainers />
                            </div>
                        </div>
                    </main>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
