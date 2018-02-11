/**
 * created by dtolife on 2018/2/10
 * 路由组件
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../components/App';
import EntList from '../components/EntList';
import MenuBar from '../components/MenuBar';
class Root extends React.Component {
    render() {
        return (
            <div>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/entList" component={EntList} />
            </Switch>
            <MenuBar />
            </div>
        )
    }
}

export default Root;