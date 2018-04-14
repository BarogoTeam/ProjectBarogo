import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainView from "./MainView/MainView";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MainView />, document.getElementById('root'));
registerServiceWorker();
