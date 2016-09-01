/**
 *
 * <p>Title: BONC - React </p>
 *
 * <p>Description: 页面的第一个模块 </p>
 *
 * <p>Copyright: Copyright BONC(c) 2013 - 2025 </p>
 *
 * <p>Company: 北京东方国信科技股份有限公司 </p>
 *
 * @author zhangxinjing
 * @date 2016/8/25
 */
import React from 'react';
import Wechartconcern from '../../component/wechartconcern';
import {
    Selector,
    DatePicker,
    Title,
    ModulePartition,
} from '../../../src/index';
import moment from 'moment';
import CheckboxGroup from '../../component/CheckboxGroup';
import HotEvent from '../../component/HotEvent';
import Table from '../../component/wsTableCol4';
import LeftNavigation from '../../component/LeftNavigation';

var AppRankingList =React.createClass({

    getInitialState: function () {
        return {
            returendata: [{id :'1',tupian:'u797.png',name:'微信',number:'222222',jiantou:'1'},
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
                {id :'20',tupian:'u8011.png',name:'QQ空间',number:'55555',jiantou:'-1'},],
            pro:'111',
            date:moment(),
        };
    },
    getCommonListData: function(proId,date){
        var rolesListData =[{id :'1',tupian:'u797.png',name:'微信',number:'222222',jiantou:'1'},
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
        var param={
            proId:proId,
            date:date
        };
        var self = this;
        console.info("33333");
        console.info(param);
        //缓存数据
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
                //self.props.callbackParent(dataSource);
                //console.log(self.props.data);
            })
            .catch(function(e) {
                console.log("fetch fail",e.toString());
                self.setState({
                    data: rolesListData});
                 //self.props.callbackParent(rolesListData);
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
        var tabledata= [
            {排名: '1', "/site/images/table/sociality.png,社交": '/site/images/table/weixin.png,微信', 活跃用户数: 57639,变化: '0'},
            {排名: '2', "/site/images/table/sociality.png,社交": '/site/images/table/qq.png,QQ',   活跃用户数: 53958,变化: '0'},
            {排名: '3', "/site/images/table/sociality.png,社交": '/site/images/table/weibo.png,新浪微博', 活跃用户数: 10184,变化: '0'},
            {排名: '4', "/site/images/table/sociality.png,社交": '/site/images/table/qqkj.png,QQ空间', 活跃用户数: 8643,变化: '0'},
            {排名: '5', "/site/images/table/sociality.png,社交": '/site/images/table/zhfb.png,旺信', 活跃用户数: 6689,变化: '0'},

            {排名: '1', "/site/images/table/video.png,视频": '/site/images/table/u7942.png,腾讯视频', 活跃用户数: 23399,变化: '1'},
            {排名: '2', "/site/images/table/video.png,视频": '/site/images/table/u7954.png,爱奇艺视频',   活跃用户数: 19246,变化: '-1'},
            {排名: '3', "/site/images/table/video.png,视频": '/site/images/table/u7970.png,爱奇艺PPS影音', 活跃用户数: 16172,变化: '0'},
            {排名: '4', "/site/images/table/video.png,视频": '/site/images/table/u735.png,PPTV', 活跃用户数: 11294,变化: '0'},
            {排名: '5', "/site/images/table/video.png,视频": '/site/images/table/u905.png,优酷', 活跃用户数: 3932,变化: '0'},

            {排名: '1', "/site/images/table/shopping.png,购物": '/site/images/table/u7946.png,手机淘宝', 活跃用户数: 21949,变化: '0'},
            {排名: '2', "/site/images/table/shopping.png,购物": '/site/images/table/u8003.png,京东',   活跃用户数: 19246,变化: '0'},
            {排名: '3', "/site/images/table/shopping.png,购物": '/site/images/table/u777.png,唯品会', 活跃用户数: 16172,变化: '0'},
            {排名: '4', "/site/images/table/shopping.png,购物": '/site/images/table/u937.png,天猫', 活跃用户数: 11294,变化: '0'},
            {排名: '5', "/site/images/table/shopping.png,购物": '/site/images/table/u785.png,蘑菇街', 活跃用户数: 3932,变化: '0'},

            {排名: '1', "/site/images/table/music.png,音乐": '/site/images/table/weixin.png,微信', 活跃用户数: 57639,变化: '0'},
            {排名: '2', "/site/images/table/music.png,音乐": '/site/images/table/qq.png,QQ',   活跃用户数: 53958,变化: '0'},
            {排名: '3', "/site/images/table/music.png,音乐": '/site/images/table/weibo.png,新浪微博', 活跃用户数: 10184,变化: '0'},
            {排名: '4', "/site/images/table/music.png,音乐": '/site/images/table/qqkj.png,QQ空间', 活跃用户数: 8643,变化: '0'},
            {排名: '5', "/site/images/table/music.png,音乐": '/site/images/table/zhfb.png,旺信', 活跃用户数: 6689,变化: '0'},

            {排名: '1', "/site/images/table/map.png,地图导航": '/site/images/table/u7942.png,腾讯视频', 活跃用户数: 23399,变化: '1'},
            {排名: '2', "/site/images/table/map.png,地图导航": '/site/images/table/u7954.png,爱奇艺视频',   活跃用户数: 19246,变化: '-1'},
            {排名: '3', "/site/images/table/map.png,地图导航": '/site/images/table/u7970.png,爱奇艺PPS影音', 活跃用户数: 16172,变化: '0'},
            {排名: '4', "/site/images/table/map.png,地图导航": '/site/images/table/u735.png,PPTV', 活跃用户数: 11294,变化: '0'},
            {排名: '5', "/site/images/table/map.png,地图导航": '/site/images/table/u905.png,优酷', 活跃用户数: 3932,变化: '0'},

            {排名: '1', "/site/images/table/browser.png,浏览器": '/site/images/table/u7946.png,手机淘宝', 活跃用户数: 21949,变化: '0'},
            {排名: '2', "/site/images/table/browser.png,浏览器": '/site/images/table/u8003.png,京东',   活跃用户数: 19246,变化: '0'},
            {排名: '3', "/site/images/table/browser.png,浏览器": '/site/images/table/u777.png,唯品会', 活跃用户数: 16172,变化: '0'},
            {排名: '4', "/site/images/table/browser.png,浏览器": '/site/images/table/u937.png,天猫', 活跃用户数: 11294,变化: '0'},
            {排名: '5', "/site/images/table/browser.png,浏览器": '/site/images/table/u785.png,蘑菇街', 活跃用户数: 3932,变化: '0'},

            {排名: '1', "/site/images/table/news.png,新闻资讯": '/site/images/table/weixin.png,微信', 活跃用户数: 57639,变化: '0'},
            {排名: '2', "/site/images/table/news.png,新闻资讯": '/site/images/table/qq.png,QQ',   活跃用户数: 53958,变化: '0'},
            {排名: '3', "/site/images/table/news.png,新闻资讯": '/site/images/table/weibo.png,新浪微博', 活跃用户数: 10184,变化: '0'},
            {排名: '4', "/site/images/table/news.png,新闻资讯": '/site/images/table/qqkj.png,QQ空间', 活跃用户数: 8643,变化: '0'},
            {排名: '5', "/site/images/table/news.png,新闻资讯": '/site/images/table/zhfb.png,旺信', 活跃用户数: 6689,变化: '0'},

            {排名: '1', "/site/images/table/print.png,输入法": '/site/images/table/u7942.png,腾讯视频', 活跃用户数: 23399,变化: '1'},
            {排名: '2', "/site/images/table/print.png,输入法": '/site/images/table/u7954.png,爱奇艺视频',   活跃用户数: 19246,变化: '-1'},
            {排名: '3', "/site/images/table/print.png,输入法": '/site/images/table/u7970.png,爱奇艺PPS影音', 活跃用户数: 16172,变化: '0'},
            {排名: '4', "/site/images/table/print.png,输入法": '/site/images/table/u735.png,PPTV', 活跃用户数: 11294,变化: '0'},
            {排名: '5', "/site/images/table/print.png,输入法": '/site/images/table/u905.png,优酷', 活跃用户数: 3932,变化: '0'},

            {排名: '1', "/site/images/table/searcher.png,搜索引擎": '/site/images/table/u7946.png,手机淘宝', 活跃用户数: 21949,变化: '0'},
            {排名: '2', "/site/images/table/searcher.png,搜索引擎": '/site/images/table/u8003.png,京东',   活跃用户数: 19246,变化: '0'},
            {排名: '3', "/site/images/table/searcher.png,搜索引擎": '/site/images/table/u777.png,唯品会', 活跃用户数: 16172,变化: '0'},
            {排名: '4', "/site/images/table/searcher.png,搜索引擎": '/site/images/table/u937.png,天猫', 活跃用户数: 11294,变化: '0'},
            {排名: '5', "/site/images/table/searcher.png,搜索引擎": '/site/images/table/u785.png,蘑菇街', 活跃用户数: 3932,变化: '0'},

            {排名: '1', "/site/images/table/payment.png,网银支付": '/site/images/table/weixin.png,微信', 活跃用户数: 57639,变化: '0'},
            {排名: '2', "/site/images/table/payment.png,网银支付": '/site/images/table/qq.png,QQ',   活跃用户数: 53958,变化: '0'},
            {排名: '3', "/site/images/table/payment.png,网银支付": '/site/images/table/weibo.png,新浪微博', 活跃用户数: 10184,变化: '0'},
            {排名: '4', "/site/images/table/payment.png,网银支付": '/site/images/table/qqkj.png,QQ空间', 活跃用户数: 8643,变化: '0'},
            {排名: '5', "/site/images/table/payment.png,网银支付": '/site/images/table/zhfb.png,旺信', 活跃用户数: 6689,变化: '0'},

            {排名: '1', "/site/images/table/food.png,美食快餐": '/site/images/table/u7942.png,腾讯视频', 活跃用户数: 23399,变化: '1'},
            {排名: '2', "/site/images/table/food.png,美食快餐": '/site/images/table/u7954.png,爱奇艺视频',   活跃用户数: 19246,变化: '-1'},
            {排名: '3', "/site/images/table/food.png,美食快餐": '/site/images/table/u7970.png,爱奇艺PPS影音', 活跃用户数: 16172,变化: '0'},
            {排名: '4', "/site/images/table/food.png,美食快餐": '/site/images/table/u735.png,PPTV', 活跃用户数: 11294,变化: '0'},
            {排名: '5', "/site/images/table/food.png,美食快餐": '/site/images/table/u905.png,优酷', 活跃用户数: 3932,变化: '0'},

            {排名: '1', "/site/images/table/groupbuy.png,团购": '/site/images/table/u7946.png,手机淘宝', 活跃用户数: 21949,变化: '0'},
            {排名: '2', "/site/images/table/groupbuy.png,团购": '/site/images/table/u8003.png,京东',   活跃用户数: 19246,变化: '0'},
            {排名: '3', "/site/images/table/groupbuy.png,团购": '/site/images/table/u777.png,唯品会', 活跃用户数: 16172,变化: '0'},
            {排名: '4', "/site/images/table/groupbuy.png,团购": '/site/images/table/u937.png,天猫', 活跃用户数: 11294,变化: '0'},
            {排名: '5', "/site/images/table/groupbuy.png,团购": '/site/images/table/u785.png,蘑菇街', 活跃用户数: 3932,变化: '0'},

            {排名: '1', "/site/images/table/photography.png,摄影摄像": '/site/images/table/weixin.png,微信', 活跃用户数: 57639,变化: '0'},
            {排名: '2', "/site/images/table/photography.png,摄影摄像": '/site/images/table/qq.png,QQ',   活跃用户数: 53958,变化: '0'},
            {排名: '3', "/site/images/table/photography.png,摄影摄像": '/site/images/table/weibo.png,新浪微博', 活跃用户数: 10184,变化: '0'},
            {排名: '4', "/site/images/table/photography.png,摄影摄像": '/site/images/table/qqkj.png,QQ空间', 活跃用户数: 8643,变化: '0'},
            {排名: '5', "/site/images/table/photography.png,摄影摄像": '/site/images/table/zhfb.png,旺信', 活跃用户数: 6689,变化: '0'},

            {排名: '1', "/site/images/table/reading.png,阅读": '/site/images/table/u7942.png,腾讯视频', 活跃用户数: 23399,变化: '1'},
            {排名: '2', "/site/images/table/reading.png,阅读": '/site/images/table/u7954.png,爱奇艺视频',   活跃用户数: 19246,变化: '-1'},
            {排名: '3', "/site/images/table/reading.png,阅读": '/site/images/table/u7970.png,爱奇艺PPS影音', 活跃用户数: 16172,变化: '0'},
            {排名: '4', "/site/images/table/reading.png,阅读": '/site/images/table/u735.png,PPTV', 活跃用户数: 11294,变化: '0'},
            {排名: '5', "/site/images/table/reading.png,阅读": '/site/images/table/u905.png,优酷', 活跃用户数: 3932,变化: '0'},

            {排名: '1', "/site/images/table/tour.png,旅游出行": '/site/images/table/u7946.png,手机淘宝', 活跃用户数: 21949,变化: '0'},
            {排名: '2', "/site/images/table/tour.png,旅游出行": '/site/images/table/u8003.png,京东',   活跃用户数: 19246,变化: '0'},
            {排名: '3', "/site/images/table/tour.png,旅游出行": '/site/images/table/u777.png,唯品会', 活跃用户数: 16172,变化: '0'},
            {排名: '4', "/site/images/table/tour.png,旅游出行": '/site/images/table/u937.png,天猫', 活跃用户数: 11294,变化: '0'},
            {排名: '5', "/site/images/table/tour.png,旅游出行": '/site/images/table/u785.png,蘑菇街', 活跃用户数: 3932,变化: '0'},

            {排名: '1', "/site/images/table/game.png,手机游戏": '/site/images/table/weixin.png,微信', 活跃用户数: 57639,变化: '0'},
            {排名: '2', "/site/images/table/game.png,手机游戏": '/site/images/table/qq.png,QQ',   活跃用户数: 53958,变化: '0'},
            {排名: '3', "/site/images/table/game.png,手机游戏": '/site/images/table/weibo.png,新浪微博', 活跃用户数: 10184,变化: '0'},
            {排名: '4', "/site/images/table/game.png,手机游戏": '/site/images/table/qqkj.png,QQ空间', 活跃用户数: 8643,变化: '0'},
            {排名: '5', "/site/images/table/game.png,手机游戏": '/site/images/table/zhfb.png,旺信', 活跃用户数: 6689,变化: '0'},

            {排名: '1', "/site/images/table/entertainment.png,休闲娱乐": '/site/images/table/u7942.png,腾讯视频', 活跃用户数: 23399,变化: '1'},
            {排名: '2', "/site/images/table/entertainment.png,休闲娱乐": '/site/images/table/u7954.png,爱奇艺视频',   活跃用户数: 19246,变化: '-1'},
            {排名: '3', "/site/images/table/entertainment.png,休闲娱乐": '/site/images/table/u7970.png,爱奇艺PPS影音', 活跃用户数: 16172,变化: '0'},
            {排名: '4', "/site/images/table/entertainment.png,休闲娱乐": '/site/images/table/u735.png,PPTV', 活跃用户数: 11294,变化: '0'},
            {排名: '5', "/site/images/table/entertainment.png,休闲娱乐": '/site/images/table/u905.png,优酷', 活跃用户数: 3932,变化: '0'},

            {排名: '1', "/site/images/table/service.png,生活服务": '/site/images/table/u7946.png,手机淘宝', 活跃用户数: 21949,变化: '0'},
            {排名: '2', "/site/images/table/service.png,生活服务": '/site/images/table/u8003.png,京东',   活跃用户数: 19246,变化: '0'},
            {排名: '3', "/site/images/table/service.png,生活服务": '/site/images/table/u777.png,唯品会', 活跃用户数: 16172,变化: '0'},
            {排名: '4', "/site/images/table/service.png,生活服务": '/site/images/table/u937.png,天猫', 活跃用户数: 11294,变化: '0'},
            {排名: '5', "/site/images/table/service.png,生活服务": '/site/images/table/u785.png,蘑菇街', 活跃用户数: 3932,变化: '0'},

            {排名: '1', "/site/images/table/shop.png,应用商店": '/site/images/table/weixin.png,微信', 活跃用户数: 57639,变化: '0'},
            {排名: '2', "/site/images/table/shop.png,应用商店": '/site/images/table/qq.png,QQ',   活跃用户数: 53958,变化: '0'},
            {排名: '3', "/site/images/table/shop.png,应用商店": '/site/images/table/weibo.png,新浪微博', 活跃用户数: 10184,变化: '0'},
            {排名: '4', "/site/images/table/shop.png,应用商店": '/site/images/table/qqkj.png,QQ空间', 活跃用户数: 8643,变化: '0'},
            {排名: '5', "/site/images/table/shop.png,应用商店": '/site/images/table/zhfb.png,旺信', 活跃用户数: 6689,变化: '0'},

            {排名: '1', "/site/images/table/yun.png,云盘": '/site/images/table/u7942.png,腾讯视频', 活跃用户数: 23399,变化: '1'},
            {排名: '2', "/site/images/table/yun.png,云盘": '/site/images/table/u7954.png,爱奇艺视频',   活跃用户数: 19246,变化: '-1'},
            {排名: '3', "/site/images/table/yun.png,云盘": '/site/images/table/u7970.png,爱奇艺PPS影音', 活跃用户数: 16172,变化: '0'},
            {排名: '4', "/site/images/table/yun.png,云盘": '/site/images/table/u735.png,PPTV', 活跃用户数: 11294,变化: '0'},
            {排名: '5', "/site/images/table/yun.png,云盘": '/site/images/table/u905.png,优酷', 活跃用户数: 3932,变化: '0'},

            {排名: '1', "/site/images/table/tools.png,工具": '/site/images/table/u7946.png,手机淘宝', 活跃用户数: 21949,变化: '0'},
            {排名: '2', "/site/images/table/tools.png,工具": '/site/images/table/u8003.png,京东',   活跃用户数: 19246,变化: '0'},
            {排名: '3', "/site/images/table/tools.png,工具": '/site/images/table/u777.png,唯品会', 活跃用户数: 16172,变化: '0'},
            {排名: '4', "/site/images/table/tools.png,工具": '/site/images/table/u937.png,天猫', 活跃用户数: 11294,变化: '0'},
            {排名: '5', "/site/images/table/tools.png,工具": '/site/images/table/u785.png,蘑菇街', 活跃用户数: 3932,变化: '0'},

            {排名: '1', "/site/images/table/safety.png,安全杀毒": '/site/images/table/weixin.png,微信', 活跃用户数: 57639,变化: '0'},
            {排名: '2', "/site/images/table/safety.png,安全杀毒": '/site/images/table/qq.png,QQ',   活跃用户数: 53958,变化: '0'},
            {排名: '3', "/site/images/table/safety.png,安全杀毒": '/site/images/table/weibo.png,新浪微博', 活跃用户数: 10184,变化: '0'},
            {排名: '4', "/site/images/table/safety.png,安全杀毒": '/site/images/table/qqkj.png,QQ空间', 活跃用户数: 8643,变化: '0'},
            {排名: '5', "/site/images/table/safety.png,安全杀毒": '/site/images/table/zhfb.png,旺信', 活跃用户数: 6689,变化: '0'},

            {排名: '1', "/site/images/table/office.png,商务办公": '/site/images/table/u7942.png,腾讯视频', 活跃用户数: 23399,变化: '1'},
            {排名: '2', "/site/images/table/office.png,商务办公": '/site/images/table/u7954.png,爱奇艺视频',   活跃用户数: 19246,变化: '-1'},
            {排名: '3', "/site/images/table/office.png,商务办公": '/site/images/table/u7970.png,爱奇艺PPS影音', 活跃用户数: 16172,变化: '0'},
            {排名: '4', "/site/images/table/office.png,商务办公": '/site/images/table/u735.png,PPTV', 活跃用户数: 11294,变化: '0'},
            {排名: '5', "/site/images/table/office.png,商务办公": '/site/images/table/u905.png,优酷', 活跃用户数: 3932,变化: '0'},

            {排名: '1', "/site/images/table/health.png,医疗健康": '/site/images/table/u7946.png,手机淘宝', 活跃用户数: 21949,变化: '0'},
            {排名: '2', "/site/images/table/health.png,医疗健康": '/site/images/table/u8003.png,京东',   活跃用户数: 19246,变化: '0'},
            {排名: '3', "/site/images/table/health.png,医疗健康": '/site/images/table/u777.png,唯品会', 活跃用户数: 16172,变化: '0'},
            {排名: '4', "/site/images/table/health.png,医疗健康": '/site/images/table/u937.png,天猫', 活跃用户数: 11294,变化: '0'},
            {排名: '5', "/site/images/table/health.png,医疗健康": '/site/images/table/u785.png,蘑菇街', 活跃用户数: 3932,变化: '0'},

            {排名: '1', "/site/images/table/education.png,教育学习": '/site/images/table/weixin.png,微信', 活跃用户数: 57639,变化: '0'},
            {排名: '2', "/site/images/table/education.png,教育学习": '/site/images/table/qq.png,QQ',   活跃用户数: 53958,变化: '0'},
            {排名: '3', "/site/images/table/education.png,教育学习": '/site/images/table/weibo.png,新浪微博', 活跃用户数: 10184,变化: '0'},
            {排名: '4', "/site/images/table/education.png,教育学习": '/site/images/table/qqkj.png,QQ空间', 活跃用户数: 8643,变化: '0'},
            {排名: '5', "/site/images/table/education.png,教育学习": '/site/images/table/zhfb.png,旺信', 活跃用户数: 6689,变化: '0'},

            {排名: '1', "/site/images/table/employment.png,求职招聘": '/site/images/table/u7942.png,腾讯视频', 活跃用户数: 23399,变化: '1'},
            {排名: '2', "/site/images/table/employment.png,求职招聘": '/site/images/table/u7954.png,爱奇艺视频',   活跃用户数: 19246,变化: '-1'},
            {排名: '3', "/site/images/table/employment.png,求职招聘": '/site/images/table/u7970.png,爱奇艺PPS影音', 活跃用户数: 16172,变化: '0'},
            {排名: '4', "/site/images/table/employment.png,求职招聘": '/site/images/table/u735.png,PPTV', 活跃用户数: 11294,变化: '0'},
            {排名: '5', "/site/images/table/employment.png,求职招聘": '/site/images/table/u905.png,优酷', 活跃用户数: 3932,变化: '0'},

            {排名: '1', "/site/images/table/marrige.png,婚恋交友": '/site/images/table/u7946.png,手机淘宝', 活跃用户数: 21949,变化: '0'},
            {排名: '2', "/site/images/table/marrige.png,婚恋交友": '/site/images/table/u8003.png,京东',   活跃用户数: 19246,变化: '0'},
            {排名: '3', "/site/images/table/marrige.png,婚恋交友": '/site/images/table/u777.png,唯品会', 活跃用户数: 16172,变化: '0'},
            {排名: '4', "/site/images/table/marrige.png,婚恋交友": '/site/images/table/u937.png,天猫', 活跃用户数: 11294,变化: '0'},
            {排名: '5', "/site/images/table/marrige.png,婚恋交友": '/site/images/table/u785.png,蘑菇街', 活跃用户数: 3932,变化: '0'},

            {排名: '1', "/site/images/table/mother.png,母婴": '/site/images/table/weixin.png,微信', 活跃用户数: 57639,变化: '0'},
            {排名: '2', "/site/images/table/mother.png,母婴": '/site/images/table/qq.png,QQ',   活跃用户数: 53958,变化: '0'},
            {排名: '3', "/site/images/table/mother.png,母婴": '/site/images/table/weibo.png,新浪微博', 活跃用户数: 10184,变化: '0'},
            {排名: '4', "/site/images/table/mother.png,母婴": '/site/images/table/qqkj.png,QQ空间', 活跃用户数: 8643,变化: '0'},
            {排名: '5', "/site/images/table/mother.png,母婴": '/site/images/table/zhfb.png,旺信', 活跃用户数: 6689,变化: '0'},

            {排名: '1', "/site/images/table/house.png,买房租房": '/site/images/table/u7942.png,腾讯视频', 活跃用户数: 23399,变化: '1'},
            {排名: '2', "/site/images/table/house.png,买房租房": '/site/images/table/u7954.png,爱奇艺视频',   活跃用户数: 19246,变化: '-1'},
            {排名: '3', "/site/images/table/house.png,买房租房": '/site/images/table/u7970.png,爱奇艺PPS影音', 活跃用户数: 16172,变化: '0'},
            {排名: '4', "/site/images/table/house.png,买房租房": '/site/images/table/u735.png,PPTV', 活跃用户数: 11294,变化: '0'},
            {排名: '5', "/site/images/table/house.png,买房租房": '/site/images/table/u905.png,优酷', 活跃用户数: 3932,变化: '0'},

            {排名: '1', "/site/images/table/fund.png,投资理财": '/site/images/table/u7946.png,手机淘宝', 活跃用户数: 21949,变化: '0'},
            {排名: '2', "/site/images/table/fund.png,投资理财": '/site/images/table/u8003.png,京东',   活跃用户数: 19246,变化: '0'},
            {排名: '3', "/site/images/table/fund.png,投资理财": '/site/images/table/u777.png,唯品会', 活跃用户数: 16172,变化: '0'},
            {排名: '4', "/site/images/table/fund.png,投资理财": '/site/images/table/u937.png,天猫', 活跃用户数: 11294,变化: '0'},
            {排名: '5', "/site/images/table/fund.png,投资理财": '/site/images/table/u785.png,蘑菇街', 活跃用户数: 3932,变化: '0'},

        ];
        return (
            <div className="App-Ranking-List">
                <ModulePartition id="content_app_module" name="App排行榜" en_name="App Ranking List"/>
                <DatePicker callbackParent={this.onDateChanged}/>
                <Selector  callbackParent={this.onProChanged}/>
                <Title icon="app-user" name="APP活跃用户总排行"/>
                <Wechartconcern returendata={this.state.returendata}/>
                <Title icon="app-part" name="APP分类排行"/>
                <CheckboxGroup />
                <Table data={tabledata}/>
            </div>
        );
    }
});
export default AppRankingList;