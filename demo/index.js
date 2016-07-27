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
                <div>基于react 致力于像搭积木一样快速搭建前端项目</div>
                <hr/>
                <div>
                    <h4>Link</h4>
                    <a href="http://www.material-ui.com/#/" target="_blank">Material UI</a>
                    <br/>
                    <a href="http://ant.design/" target="_blank">AntDesign</a>
                    <br/>
                    <a href="https://github.com/ant-design/ant-design" target="_blank">AntDesign源码分享</a>
                    <br/>
                    <a href="hmttp://v3.bootcss.com/" target="_blank">Bootstrap3</a>
                    <br/>
                    <a href="https://www.npmjs.co/package/babel" target="_blank">NPM</a>
                    <br/>
                    <h4>如果你自己也想构建一个</h4>
                    <a href="https://segmentfault.com/a/1190000002767365" target="_blank">example1</a>
                    <br/>
                    <a href="http://www.csdn.net/article/2015-05-24/2824757-building-modular-javascript-applications-in-es6-with-react-webpack-and-babel?reload=1" target="_blank">example2</a>
                    <br/>

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
