import React, { Component, Fragment } from 'react';
import Footer from './Layout/Footer/Footer';
import Header from './Layout/Header/Header';
import WordsDashboard from './Content/Words/WordsDashboard';
import store from '../store';
import { Provider } from "react-redux";
import sty from './App.css';
import ErrorBoundary from './Layout/ErrorBoundary/ErrorBoundary';

export class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ErrorBoundary>
                    <Fragment>
                        <Header />
                        <WordsDashboard />
                        <Footer />
                    </Fragment>
                </ErrorBoundary>
            </Provider>
        )
    }
}

export default App;