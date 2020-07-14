import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import createStore from './redux/create';
import './styles.less';


function init(el, initialState) {
    const store = createStore(initialState);

    ReactDOM.render((
        <Provider store={store}>
            <div>Hello world</div>
        </Provider>
    ), el);
}

export {
    init,
};
