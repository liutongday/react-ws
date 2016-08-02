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
import {
    Flex,
    Storage,
} from '../src/index';
import _ from 'underscore';
import NavRight from './component/shijian';
import Hello from './component/hell';
import Weixin from './component/weixin';
import Layout from './component/layout';
import Form from './component/form';

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

class App extends React.Component {
    render() {
        return (
            <div className="container">

			    <Layout />
			    <Form />
                <Hello/>
                <NavRight/>
                <Weixin/>
            </div>
        );
    }

    componentDidMount() {
        initNav();
    }
}

ReactDOM.render(<App/>, document.getElementById('appContainer'));