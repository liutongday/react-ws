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
    Calendar,
    DatePicker,
} from '../src/index';
import _ from 'underscore';
import Layout from './component/layout';
import Form from './component/form';
import Head from './component/head';
import LeftNavigation from './component/LeftNavigation';
import WsTable1 from './component/wsTableCol4';
import WsTable2 from './component/wsTableCol3';
import Apps from './component/apps';
import Chart from './component/chart';
import Map from './component/map';
import CheckboxGroup from './component/CheckboxGroup';



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
                        <Layout/>
                        <Calendar />
                        <DatePicker />
                        <Form />
                    </div>

                </div>

            </div>

        );
    }

    componentDidMount() {
        //initNav();
    }
}

ReactDOM.render(<App/>, document.getElementById('appContainer'));
