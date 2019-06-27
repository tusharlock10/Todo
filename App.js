import React, {Component} from 'react';
import { View, Text } from 'react-native';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import Header from './src/components/Header'
import TodoList from './src/components/TodoList'

class App extends Component{
    render(){
        const store = createStore(reducers, {})
        return (
            <Provider store = {store}>
                <Header/>
                <TodoList/>
            </Provider>
        )
    }
}

export default App;