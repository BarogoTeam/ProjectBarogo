import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainView from "./View/MainView/MainView";
import registerServiceWorker from './registerServiceWorker';
import {store} from "./Redux/Store";
import {Provider} from "react-redux";

ReactDOM.render(
    <Provider store = {store}>
        <MainView />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
