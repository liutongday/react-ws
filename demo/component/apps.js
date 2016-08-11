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
 * @author panxw
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
            fetch('http://10.0.94.48:8080/api/testredis',{
            credentials:'same-origin',
            method: 'POST',
            //method: 'GET',
            mode:'cors',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36"
            },
            body: JSON.stringify({
                name: 'Hubot',
                login: 'hubot',
            })
        })
            .then(function(res) {
                console.log("Response succeeded?", JSON.stringify(res.ok));
                //console.log(res.json());
                return res.json();
        })
            .then(function(dataSource) {
                console.log("********");
                console.log(dataSource);
                console.log(self);
                self.setState({
                    data: dataSource});
                //console.log(self.props.data);
            })
            .catch(function(e) {
                console.log("fetch fail",e.toString());
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
                    <div className="container">
                        <Flex ws-flex row wrap>
                            {rolesListDatainfo}
                        </Flex>
                        <span className="biaoshi">></span>
                        <p className="more">更多</p>
                    </div>
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
