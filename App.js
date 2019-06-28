import React, {Component} from 'react';
import ReduxThunk from 'redux-thunk'
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import Header from './src/components/Header'
import TodoList from './src/components/TodoList'
import {ScreenOrientation} from 'expo'


class App extends Component{

    setOrientation = async () =>{
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.ALL);
    }
    render(){
        this.setOrientation();

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