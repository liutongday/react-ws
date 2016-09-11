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
        var tableData=[
            {排名: '1', "/src/images/u8852.png,网银支付": '/src/images/weixin.png,微信', 活跃用户数: 57639,变化: '1'},
            {排名: '2', "/src/images/u8852.png,网银支付": '/src/images/qq.png,QQ',   活跃用户数: 53958,变化: '0'},
            {排名: '3', "/src/images/u8852.png,网银支付": '/src/images/weibo.png,新浪微博', 活跃用户数: 10184,变化: '0'},
            {排名: '4', "/src/images/u8852.png,网银支付": '/src/images/qqkj.png,QQ空间', 活跃用户数: 8643,变化: '0'},
            {排名: '5', "/src/images/u8852.png,网银支付": '/src/images/zhfb.png,支付宝', 活跃用户数: 6689,变化: '0'},

        ];
        return (
            <div className="HolyGrail">
                <header>Unicom Test</header>
                <Head />
                <div className="HolyGrail-body">
                   <nav className="HolyGrail-nav">
                        <LeftNavigation />
                    </nav>
                    <div className="HolyGrail-content">
                        <Scroll/>
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

