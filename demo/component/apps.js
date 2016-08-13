/**
 * Created by Administrator on 2016/8/4.
 */
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
 * @author zhangxj
 * @version 1.0.0
 */
import '../css/apps.less';
import 'gm-bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {
    Flex,
    Weixin
} from '../../src/index';
import _ from 'underscore';
window.Storage = Storage;

var Apps= React.createClass({
    getInitialState: function() {
        return {
            data: null
        };
    },
    getCommonListData: function(){
        var self = this;
        //var str = {name:'huangxiaojian',age:'23'};
        var param = {
            name:"Hubot",
            login:"hubot"
        }
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
       //console.log(str);
            fetch('http://10.0.94.34:8080/api/testredis',{
            credentials:'same-origin',
            method: 'POST',
            //method: 'GET',
            mode:'cors',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36"
            },
                //body:param
                body:JSON.stringify(param)
                //body: JSON.parse(str)
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
                //console.log(self.props.data);
            })
            .catch(function(e) {
                console.log("fetch fail",e.toString());
                self.setState({
                    data: rolesListData});
            })
        /*fetch("http://blog.parryqiu.com", {
         method: 'GET',
         mode: 'no-cors',
         cache: 'default'
         }).then(function(response){console.log(response)})*/
    },
    componentDidMount: function() {
        this.getCommonListData();
    },
    render() {
        //debugger
        if (this.state.data) {
            var self = this;
            var reciveData = self.state.data;
            console.log(reciveData);
            //debugger

            var rolesListDatainfo = reciveData.map(function (role, index) {
                console.log(role);
                return (
                    <Weixin role={role} key={index}/>
                );
            })

            return (
                <div className="app">
                    <Flex ws-flex row wrap>
                        {rolesListDatainfo}
                    </Flex>
                    <p className="biaoshi">></p>
                    <p className="more">更多</p>
                </div>
            );
        } else {
            return(
            <div className="app"/>
            )
        }

    }
});
export default Apps;
