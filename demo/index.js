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
    Selector,
    Weixin,
} from '../src/index';
import _ from 'underscore';
import Layout from './component/layout';
import Form from './component/form';
import Head from './component/head';
import LeftNavigation from './component/LeftNavigation';
import WsTable from './component/WsTableCol4';
import Apps from './component/apps';
import Chart from './component/chart';
import Map from './component/map';


window.Storage = Storage;

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

                        <Apps />
                    </div>

                </div>
            </div>


        );
    }

    componentDidMount() {
        //initNav();
    }
}

class Pages extends React.Component {
    render() {
        return (

            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Layout}></IndexRoute>
                    <Route path="form" component={Form}></Route>
                    <Route path="wstable" component={WsTable}></Route>
                    <Route path="map" component={Map}></Route>
                    <Route path="selector" component={Selector}></Route>
                    <Route path="apps" component={Apps}></Route>
                    <Route path="chart" component={Chart}></Route>
                </Route>
            </Router>

        );
    }
}

ReactDOM.render(<Pages/>, document.getElementById('appContainer'));
