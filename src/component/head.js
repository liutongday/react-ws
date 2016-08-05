/**
 * Created by zhan on 2016/8/5.
 */
import React from 'react';
import classNames from 'classnames';
import * as ReactDOM from 'react-dom';
import {NowTime} from '../index';

class Head extends  React.Component {


    //渲染DOM
    render() {
        return (
            <div id="head">
                <img src="/demo/images/head/head_bg_main.png" />
                        <div id="head_top">
                            <Nowtime />
                                <div id="head_top_left">
                                 <img  src="/demo/images/head/head_top_left.png"      />
                                <span>张三</span>
                                <span>[中国联通集团公司]</span>
                                </div>
                                <div id="head_top_mid">
                                <img  src="/demo/images/head/head_top_mid1.gif"        />
                                <select>
                                    <option value="1"  >我的自助</option>
                                    <option value="2"  >我的22</option>
                                    <option value="3"  >我的33</option>

                                </select>
                                <img src="/demo/images/head/head_top_mid2.png"    />
                                </div>
                                <div id="head_top_right">
                                <img src="/demo/images/head/head_top_right1.gif" />
                                <img src="/demo/images/head/head_top_right2.png" />
                                 <span>退出</span>

                                </div>
                        </div>
                        <div id="head_down">
                                <div id="head_down_left">
                                <img src="/demo/images/head/head_down_left.png" />
                                <span>统一数据分析系统</span>
                                </div>
                                <div id="head_down_right">
                                    <ul>
                                        <li class="active"><a href="blog-index.do">基础业务分析</a></li>
                                        <li><a href="my-blog.do">创新业务分析</a></li>
                                        <li><a href="#">成本效益分析</a></li>
                                        <li><a href="#">重点区域分析</a></li>
                                        <li><a href="#">数据查询</a></li>
                                    </ul>

                                </div>

                        </div>
            </div>
        )
    }
}
export default Head;