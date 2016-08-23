/**
 *
 * <p>Title: BONC - React </p>
 *
 * <p>Description: 单页面应用的构建文件 index.js </p>
 *
 * <p>Copyright: Copyright BONC(c) 2013 - 2025 </p>
 *
 * <p>Company: 北京东方国信科技股份有限公司 </p>
 *
 * @author panxw
 * @version 1.0.0
 */
import './index.less';
import 'gm-bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory, Link} from 'react-router';
import {
    Storage,
    Calendar,
    DatePicker,
} from '../src/index';

import LeftNavigation from './component/LeftNavigation';
import Map from './component/map';
import Head from './component/head';
import Apps from './component/apps';
import Chart from './component/chart';
import Form from './component/form';
import WsTable1 from './component/wsTableCol4';
import CheckboxGroup from './component/CheckboxGroup';

window.Storage = Storage;

class App extends React.Component {
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
                        {this.props.children}

                        //下面也可以排列组件
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
