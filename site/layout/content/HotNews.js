/**
 *
 * <p>Title: BONC - React </p>
 *
 * <p>Description:  </p>
 *
 * <p>Copyright: Copyright BONC(c) 2013 - 2025 </p>
 *
 * <p>Company: 北京东方国信科技股份有限公司 </p>
 *
 * @author zhangxinjing
 * @date 2016/8/25
 */
import React from 'react';
import moment from 'moment';
import Chart from '../../component/chart';
import {
    Selector,
    DatePicker,
    Calendar,
    CalenarMonth,
    Title,
    CalendarMonth,
    ModulePartition
} from '../../../src/index';
import WsTable2 from '../../component/wsTableCol3';
import WsTable3 from '../../component/wsTableCol5';
import '../css/hotnews.less';
var HotNews = React.createClass({
    getInitialState: function () {
        return {
            tabledata:null,
            hotdata:null,
            relativedata:null,
            pro:'111',
            date: moment()
        };
    },
    getCommonListData: function(proId,date){
        var param={
            proId:proId,
            date:date
        }
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
                //console.log(self);//此时的this值已经改变（undefined）
                self.setState({
                    data: dataSource});
                //self.props.callbackParent(dataSource);
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
    onProChanged: function (proId) {
        console.info("11111");
        console.info(proId);
        this.setState({
            pro:proId
        });
        this.getCommonListData(proId,this.state.date);
    },
    onDateChanged: function (date) {
        console.info("22222");
        console.info(date);
        this.setState({
            date: date
        });
        this.getCommonListData(this.state.pro,date);
    },
    componentDidMount: function() {
        this.getCommonListData(this.state);
    },
    render() {



       var eventData = [
            {排名: '1', 热点新闻事件标题: '教育儿子被认虐童!,1', 热度: '539958,1'},
            {排名: '2', 热点新闻事件标题: '陈德容长成照曝光...,1', 热度: '53958,1'},
            {排名: '3', 热点新闻事件标题: '委内瑞拉政府向中...,1', 热度: '10184,1'},
            {排名: '4', 热点新闻事件标题: '马云白宫会见美国总...,1',  热度: '8643,-1'},
            {排名: '5', 热点新闻事件标题: '男子驾铲车装向无辜...,1',  热度: '6689,0'},
            {排名: '6', 热点新闻事件标题: '韩国豪门婚变 ,1',  热度: '5632,1'},
            {排名: '7', 热点新闻事件标题: '俄真人版长发公主...,1',  热度: '4532,1'},
            {排名: '8', 热点新闻事件标题: '辽舰航母训练曝光,1',  热度: '3672,-1'},
            {排名: '9', 热点新闻事件标题: '男子驾铲车装向无辜...,1',  热度: '2742,1'},
            {排名: '10', 热点新闻事件标题: '男子驾铲车装向无辜...,1',  热度: '1738,-1'},

        ];
        var newsData = [
            {排名: '1', 热点新闻事件标题: '教育儿子被认虐童', 媒体:'腾讯新闻',发表时间:"2016/05/18",热度: '39888',brief:'日前，家住河南省某县城的张先生向本台记者透露，昨日下午由于儿子放学未及时回家处于担心张先生在大街上找到儿子，并教育了一顿，没想到，被路人拍摄下来并发到了网上，还有醒目的标题“父亲虐待儿子”。张先生很是无奈，本来是一件小事...'},
            {排名: '2', 热点新闻事件标题: '教育儿子被认虐童', 媒体:'腾讯新闻',发表时间:"2016/05/18",热度: '39888',brief:'日前，家住河南省某县城的张先生向本台记者透露，昨日下午由于儿子放学未及时回家处于担心张先生在大街上找到儿子，并教育了一顿，没想到，被路人拍摄下来并发到了网上，还有醒目的标题“父亲虐待儿子”。张先生很是无奈，本来是一件小事...'},
            {排名: '3', 热点新闻事件标题: '教育儿子被认虐童', 媒体:'腾讯新闻',发表时间:"2016/05/18",热度: '39888',brief:'日前，家住河南省某县城的张先生向本台记者透露，昨日下午由于儿子放学未及时回家处于担心张先生在大街上找到儿子，并教育了一顿，没想到，被路人拍摄下来并发到了网上，还有醒目的标题“父亲虐待儿子”。张先生很是无奈，本来是一件小事...'},
            {排名: '4', 热点新闻事件标题: '教育儿子被认虐童', 媒体:'腾讯新闻',发表时间:"2016/05/18",热度: '39888',brief:'日前，家住河南省某县城的张先生向本台记者透露，昨日下午由于儿子放学未及时回家处于担心张先生在大街上找到儿子，并教育了一顿，没想到，被路人拍摄下来并发到了网上，还有醒目的标题“父亲虐待儿子”。张先生很是无奈，本来是一件小事...'},
            {排名: '5', 热点新闻事件标题: '教育儿子被认虐童', 媒体:'腾讯新闻',发表时间:"2016/05/18",热度: '39888',brief:'日前，家住河南省某县城的张先生向本台记者透露，昨日下午由于儿子放学未及时回家处于担心张先生在大街上找到儿子，并教育了一顿，没想到，被路人拍摄下来并发到了网上，还有醒目的标题“父亲虐待儿子”。张先生很是无奈，本来是一件小事...'},

        ];

        return (
            <div className="Hot-News">
                <ModulePartition id="new_module" name="热点新闻" en_name="Hot News"/>
                <DatePicker callbackParent={this.onDateChanged}/>
                <Selector  callbackParent={this.onProChanged}/>
                <div     id="new-fluid"    className="container-fluid">
                    <div  className="row">
                        <div className=" col-xs-12 col-md-4 col-lg-4">
                            <Title icon="new-hot-event" name="热点新闻事件"/>
                            <WsTable2 data={eventData}/>

                        </div>
                        <div className=" col-xs-12 col-md-8 col-lg-8">
                            <Title icon="new-relative-event" name="相关新闻"/>
                            <WsTable3 data={newsData}/>

                        </div>
                    </div>
                </div>


               <Title icon="title-hot-event" name="事件热度趋势"/>
                <Chart/>

            </div>
        );
    }
});
export default HotNews;