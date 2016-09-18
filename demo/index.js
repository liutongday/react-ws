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
    Calendar,
    DatePicker,
    Title,
    Video,
    AppCol,
    DatePickerCS,
    RecentAccess,
    EasyAccess,
} from '../src/index';
import _ from 'underscore';
import Layout from './component/layout';
import Form from './component/form';
import LeftNavigation from './component/LeftNavigation';
import WsTable1 from './component/wsTableCol4';
import WsTable2 from './component/wsTableCol3';
import WsTable3 from './component/wsTableCol5';
import WsTable4 from './component/wsSimpleT4';
import WsTable5 from './component/wsST4Area';
import Map from './component/map';
import Head from './component/head';
import WsTable6 from './component/wsT4text';
import WsTable7 from './component/wsT4tv';
import WsTable8 from './component/wsT4chennel';
import WsTable9 from './component/wsT4app';
import Apps from './component/apps';
import Videoes from './component/videoes';
import Chart from './component/chart';
import HotWord from './component/hotword';
import Day from './component/calendar';
//import DatePicker from './component/datepicker';
import CheckboxGroup from './component/CheckboxGroup';
import moment from 'moment';
import Scroll from './component/scroll'
import Twopagetab from './component/twopagetab'
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
var App=React.createClass({

    render() {
        var scrolldata = [{chart :'money.png',movename:'移网日发展用户数',numone:'111',numtwo:'111',numpersent:'11%',jiantou:'money.png',bar:'money.png'},
            {chart :'money.png',movename:'移网日发展用户数',numone:'222',numtwo:'222',numpersent:'22%',jiantou:'money.png',bar:'money.png'},
            {chart :'money.png',movename:'移网日发展用户数',numone:'333',numtwo:'333',numpersent:'33%',jiantou:'money.png',bar:'money.png'},
            {chart :'money.png',movename:'移网日发展用户数',numone:'444',numtwo:'444',numpersent:'44%',jiantou:'money.png',bar:'money.png'}]
        return (
            <div className="HolyGrail">
                <header>Unicom Test</header>
                <Head />
                <div className="HolyGrail-body">
                   <nav className="HolyGrail-nav">
                        <LeftNavigation />
                    </nav>
                    <div className="HolyGrail-content">
                        <Scroll data={scrolldata}/>
                        <Twopagetab/>
                    </div>
                    </div>
                </div>

        );
    },
});
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
        )

    }
}
ReactDOM.render(<Pages></Pages>, document.getElementById('appContainer'));

