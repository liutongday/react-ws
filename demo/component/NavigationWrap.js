/**
 *
 * <p>Title: BONC - React </p>
 *
 * <p>Description: 左侧固定菜单选项组件 </p>
 *
 * <p>Copyright: Copyright BONC(c) 2013 - 2025 </p>
 *
 * <p>Company: 北京东方国信科技股份有限公司 </p>
 *
 * @author panxw
 * @version 1.0.0
 */
import * as React from 'react';
import {Router, Route, IndexRoute, hashHistory, Link} from 'react-router';
import {
    Flex,
    Navigation,
    Affix
} from '../../src/index';

var navData = [{
    key: '/',
    title: <Link to="/">首页</Link>
}, {
    key: 'zujian',
    title: '组件',
    open: true,
    sub: [{
        key: '/overlay',
        title: <Link to="/overlay">浮层</Link>
    }, {
        key: '/date',
        title: <Link to="/date">时间</Link>
    }, {
        key: '/layout',
        title: <Link to="/layout">布局</Link>
    }, {
        key: '/data',
        title: <Link to="/data">数据</Link>
    }, {
        key: '/select',
        title: <Link to="/select">表单</Link>
    }, {
        key: '/form',
        title: <Link to="/form">表单</Link>
    }]
}];

export default class NavigationWrap extends React.Component{
    render(){
        return (
          <Affix offsetTop={25}>
            <Navigation className="ws-whiteframe1" data={navData} select={this.props.location.pathname}/>
          </Affix>  
        );
    }
}




