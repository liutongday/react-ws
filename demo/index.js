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
    getInitialState: function () {
    return {
        data:null,
        pro:'111',
        date: moment()
    };
},
    getCommonListData: function(param){
        var self = this;
        console.info("33333");
        console.info(param);
        //缓存数据
        var rolesListData = [{id :'1',tupian:'u797.png',name:'微信',number:'222222',jiantou:'1'},
            {id :'2',tupian:'u825.png',name:'QQ',number:'33333',jiantou:'0'},
            {id :'3',tupian:'u715.png',name:'腾讯视频',number:'44444',jiantou:'-1'},
            {id :'4',tupian:'u915.png',name:'手机淘宝',number:'55555',jiantou:'1'},
            {id :'5',tupian:'u7950.png',name:'支付宝',number:'55555',jiantou:'1'},
            {id :'6',tupian:'u7954.png',name:'爱奇艺视频',number:'55555',jiantou:'1'},
            {id :'7',tupian:'u7958.png',name:'搜狗输入法',number:'55555',jiantou:'1'},
            {id :'8',tupian:'u7962.png',name:'手机百度',number:'55555',jiantou:'-1'},
            {id :'9',tupian:'u7966.png',name:'百度地图',number:'55555',jiantou:'1'},
            {id :'10',tupian:'u7970.png',name:'爱奇艺PPS影音',number:'55555',jiantou:'1'},
            {id :'11',tupian:'u7975.png',name:'QQ音乐',number:'55555',jiantou:'1'},
            {id :'12',tupian:'u7979.png',name:'酷狗音乐',number:'55555',jiantou:'0'},
            {id :'13',tupian:'u7983.png',name:'高德地图',number:'55555',jiantou:'1'},
            {id :'14',tupian:'u7987.png',name:'PPTV聚力',number:'55555',jiantou:'1'},
            {id :'15',tupian:'u7991.png',name:'新浪微博',number:'55555',jiantou:'1'},
            {id :'16',tupian:'u7995.png',name:'腾讯手机管家',number:'55555',jiantou:'0'},
            {id :'17',tupian:'u7999.png',name:'UC浏览器',number:'55555',jiantou:'1'},
            {id :'18',tupian:'u8003.png',name:'京东',number:'55555',jiantou:'1'},
            {id :'19',tupian:'u8007.png',name:'360手机卫士',number:'55555',jiantou:'1'},
            {id :'20',tupian:'u8011.png',name:'QQ空间',number:'55555',jiantou:'-1'},];
        //fectch请求
        fetch('http://10.0.94.103:8080/api/testredis',{
            credentials:'same-origin',
            method: 'POST',
            //method: 'GET',
            mode:'cors',//跨域请求
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                ///"User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36"
            },
            //body:param
            body:JSON.stringify(param)
            //body: JSON.parse(str)u
            //body: JSON.stringify(str)
            //body:"{name:'Hubot',login:'hubot'}"
        })
            .then(function(res) {
                console.log("Response succeeded?", JSON.stringify(res.ok));
                //console.log(res.json());
                return res.json();
            })
            .then(function(dataSource) {
                console.log(dataSource);
                console.log(self);//此时的this值已经改变（undefined）
                self.setState({
                    data: dataSource});
                self.props.callbackParent(dataSource);
                //console.log(self.props.data);
            })
            .catch(function(e) {
                console.log("fetch fail",e.toString());
                /*self.setState({
                    data: rolesListData});
                self.props.callbackParent(rolesListData);*/
            })

        /*fetch("http://blog.parryqiu.com", {
         method: 'GET',
         mode: 'no-cors',
         cache: 'default'
         }).then(function(response){console.log(response)})*/
    },
    onProChanged: function (pro) {
        console.info("11111");
        console.info(pro);
        this.setState({
            pro: pro.proId
        });
        this.getCommonListData(this.state);
},
    onDateChanged: function (date) {
        console.info("22222");
        console.info(date);
        this.setState({
            date: date
        });
        this.getCommonListData(this.state);
    },
    componentDidMount: function() {
        //debugger;
     this.getCommonListData(this.state);
     },
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
                        <EasyAccess/>
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

