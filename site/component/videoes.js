/**
 *
 * <p>Title: BONC - React </p>
 *
 * <p>Description: 热度视频列表 </p>
 *
 * <p>Copyright: Copyright BONC(c) 2013 - 2025 </p>
 *
 * <p>Company: 北京东方国信科技股份有限公司 </p>
 *
 * @author zhangxinjing
 * @date 2016/8/24
 */
import '../css/videoes.less';
import 'gm-bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {
    Flex,
    Video,
} from '../../src/index';
import _ from 'underscore';
window.Storage = Storage;

var Videoes= React.createClass({
    getInitialState: function() {
        return {
            data: null
        };
    },
    getCommonListData: function(){
        var self = this;
        //传送数据
        var param = {
            name:"Hubot",
            login:"hubot"
        }
        //缓存数据
        var rolesListData = [{id :'01',tupian:'u4070.png',name:'父亲的身份',number:'222222',jiantou:'1'},
            {id :'02',tupian:'u4085.png',name:'欢乐颂',number:'33452',jiantou:'-1'},
            {id :'03',tupian:'u4099.png',name:'金水桥边',number:'543522',jiantou:'1'},
            {id :'04',tupian:'u4113.png',name:'绝命卦师',number:'63754',jiantou:'-1'},
            {id :'05',tupian:'u4127.png',name:'柠檬初上',number:'43545',jiantou:'1'},
            {id :'06',tupian:'u4141.png',name:'奇妙的时光之旅',number:'45422434',jiantou:'1'},
            {id :'07',tupian:'u4155.png',name:'情迷睡美人',number:'876776',jiantou:'1'},
            {id :'08',tupian:'u4169.png',name:'山海经',number:'265452',jiantou:'-1'},
            {id :'09',tupian:'u4183.png',name:'太阳的后裔',number:'25768',jiantou:'-1'},
            {id :'10',tupian:'u4197.png',name:'最好的我们',number:'3454622',jiantou:'1'},];
        //fectch请求
        fetch('http://10.0.94.34:8080/api/testredis',{
            credentials:'same-origin',
            method: 'POST',
            //method: 'GET',
            mode:'cors',//跨域请求
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36"
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
            //debugger
            var rolesListDatainfo = reciveData.map(function (role, index) {
                return (
                    <Video role={role} key={index}/>
                );
            })

            return (
                <div className="video-total">
                    <div className="app container-fluid">
                            <div className="videos">
                                <Flex ws-flex row wrap>
                                    {rolesListDatainfo}
                                </Flex>
                            </div>
                     </div>
                </div>

            );
        } else {
            return(
                <div className="video-total"/>
            )
        }

    }
});
export default Videoes;