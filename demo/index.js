/**
 *
 * Title: BONC - React
 *
 * Description:  </p>
 *
 * Copyright: Copyright BONC(c) 2013 - 2025
 *
 * Company: 北京东方国信科技股份有限公司
 *
 * @author luli
 * @date 2016/8/16
 */
import './index.less';
import 'gm-bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory, Link} from 'react-router';
import {
    Storage,
    Selector,
    Weixin,
    Calendar,
    DatePicker,
    AppCol,
    Title,
    Video
} from '../src/index';

import LeftNavigation from './component/LeftNavigation';
import WsTable1 from './component/wsTableCol4';
import WsTable2 from './component/wsTableCol3';
import WsTable3 from './component/wsTableCol5';
import WsTable4 from './component/wsSimpleT4';
import WsTable5 from './component/wsST4Area';
import Map from './component/map';
import Head from './component/head';
import Apps from './component/apps';
import Titles from './component/titles';
import Videoes from './component/videoes';
import Chart from './component/chart';
import HotWord from './component/hotword';
import Form from './component/form';
import CheckboxGroup from '../site/component/CheckboxGroup';

window.Storage = Storage;

class App extends React.Component {
/*=======
function initNav() {
    let div = document.createElement('div');
    div.className = 'doc-nav';

    let html = '';
    _.each(document.getElementsByTagName('h1'), ele => {
        html += '<a class="doc-nav-title" href="#' + ele.id + '">' + ele.innerHTML + '</a>';
        _.each(ele.parentNode.getElementsByTagName('h2'), e => {
            html += '<a href="#' + e.id + '">' + e.innerHTML + '</a>';
        });
    });

    div.innerHTML = html;
    document.body.appendChild(div);
}

var App=React.createClass({
    getInitialState: function () {
    return {
        data: null
    };
},
    onChildChanged: function (newState) {
        console.info("############");
        console.info(newState);
        //debugger;
        this.setState({
            data: newState
        });
},
>>>>>>> origin/zhangxinjing*/
    render() {
        return (
            <div className="HolyGrail">
                <header>Unicom Test</header>
                <Head />
                <div className="HolyGrail-body">
                   <nav className="HolyGrail-nav">
                        <LeftNavigation />
                    </nav>
                    <div className="HolyGrail-content">
                        <Selector />
                        <Titles/>
                        {/*<CheckboxGroup/>*/}
                        <Apps />
                        <AppCol name="搜狐视频" col={1}/>
                        <Calendar />
                        <DatePicker />
                        {this.props.children}
                        
                        //下面也可以排列组件
                        <Form />
                     {/*   <Selector initialState={this.state.data} callbackParent={this.onChildChanged}/>*/}
                        <Title icon="u10340.png" name="APP分类排行"/>
                       {/* <Apps returendata={this.state.data}/>*/}
                        <Chart/>
                        <Map/>
                        <HotWord/>
                        <Videoes/>
                    </div>
                    </div>
                </div>
        );
    }
    componentDidMount() {
    }
}
class Pages extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={CheckboxGroup}></IndexRoute>
                    <Route path="apps" component={Apps}></Route>
                    <Route path="chart" component={Chart}></Route>
                    <Route path="form" component={Form}></Route>
                    <Route path="table" component={WsTable1}></Route>
                    <Route path="calendar" component={Calendar}></Route>
                </Route>
            </Router>
        );
    }
}

ReactDOM.render(<Pages></Pages>, document.getElementById('appContainer'));