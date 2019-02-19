import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import './assets/css/base.css';
import './library/iconfont.css';
import './library/font';

import {Provider} from 'react-redux';

import store from './store';

import {BrowserRouter,Route} from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route component={App}  />
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);

// ReactDOM.render(
//     <Provider  store={store}>
//
//         <ToDoList/>
//     </Provider>
//     ,
//     document.getElementById('root')
// );



