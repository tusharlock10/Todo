import React, {Component} from 'react';
import ReduxThunk from 'redux-thunk'
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import Header from './src/components/Header'
import TodoList from './src/components/TodoList'


class App extends Component{
    render(){
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
        return (
            <Provider store = {store}>
                <Header/>
                <TodoList/>
            </Provider>
        )
    }
}

export default App;