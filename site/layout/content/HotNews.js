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
            data: null
        };
    },
    onChildChanged: function (newState) {
        console.info("############");
        console.info(newState);
        this.setState({
            data: newState
        });
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
                <DatePicker/>
                <Selector initialState={this.state.data} callbackParent={this.onChildChanged}/>
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