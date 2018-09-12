import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import Store from "./redux/Store";
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const store = Store();
render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
