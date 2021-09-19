import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Container } from "./features/candidates/components/container.jsx"; 
import createStore from './redux/create';
import './styles.less';


function init(el, initialState) {
    const store = createStore(initialState);

    ReactDOM.render((
        <Provider store={store}>
            <Container />
        </Provider>
    ), el);
}

export {
    init,
};
