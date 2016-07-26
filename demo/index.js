/**
 * Created by Administrator on 2016/7/26.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory, Link} from 'react-router';
import {
    Flex,
    Navigation
} from '../src/index';

var navData = [{
    key: '/',
    title: <Link to="/">首页</Link>
}, {
    key: 'zujian',
    title: '组件',
    open: true,
    sub: [{
        key: '/overlay',
        title: <Link to="/overlay">浮层</Link>
    }, {
        key: '/date',
        title: <Link to="/date">时间</Link>
    }, {
        key: '/layout',
        title: <Link to="/layout">布局</Link>
    }, {
        key: '/data',
        title: <Link to="/data">数据</Link>
    }, {
        key: '/select',
        title: <Link to="/select">表单-选择</Link>
    }, {
        key: '/form',
        title: <Link to="/form">表单</Link>
    }]
}];

var NavigationWrap = React.createClass({
    render(){
        return (
            <Navigation className="ws-whiteframe1" data={navData} select={this.props.location.pathname}/>
        );
    }
});

const Home = React.createClass({
    render(){
        return (
            <div className="b-home">
                <div>
                  Hello, World.
                </div>
                <div>react-ws 致力于像搭积木一样快速搭建项目</div>
                <hr/>
                <div>
                    <h4>Link</h4>
                    <a href="http://gmfe.github.io/gm-bootstrap/css/" target="_blank">gm-bootstrap</a>
                    <br/>
                    <a href="http://react-bootstrap.github.io/" target="_blank">react-bootstrap</a>
                </div>
            </div>
        );
    }
});

const App = React.createClass({
    getInitialState(){
        return {
            left: false
        };
    },
    render(){
        return (
            <Flex column height="100%" className="ws-app">
                <Flex className="ws-app-top ws-whiteframe1">
                    <div className="ws-app-top-navigation-btn" onClick={this.handleToggleLeft}>
                        <button className="btn btn-link"><span className="glyphicon glyphicon-menu-hamburger"></span>
                        </button>
                    </div>
                    <Flex flex></Flex>
                    <div>React-WS</div>
                </Flex>
                <Flex flex row>
                    <Flex width="200px" className={"ws-app-left " + (this.state.left && 'current')}>
                        <NavigationWrap {...this.props}></NavigationWrap>
                    </Flex>
                    <Flex column flex className="ws-app-content ws-padding10 ws-block">
                        {this.props.children}
                    </Flex>
                </Flex>
            </Flex>
        );
    },
    handleToggleLeft(){
        this.setState({
            left: !this.state.left
        });
    }
});

const Root = React.createClass({
    render(){
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}></IndexRoute>
                </Route>
            </Router>
        );
    }
});

ReactDOM.render(<Root></Root>, document.getElementById('appContainer'));
