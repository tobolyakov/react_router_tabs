//Core
import React, { Component } from 'react';
import {BrowserRouter} from "react-router-dom";

// Instruments
import Tabs from '../../components/Tabs';
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
                    <main className="App-content">
                        <div className="g-container">
                            <Tabs/>
                        </div>
                    </main>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
