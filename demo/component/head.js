/**
 * Created by zhan on 2016/8/5.
 */
import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import * as ReactDOM from 'react-dom';

import {

    NowTime,


} from '../../src/index';

class Head extends  React.Component {







    //渲染DOM
    render() {
        return (
            <div id="head">
                {/*<img src="/demo/images/head/head_bg_main.png" />*/}
                        <div id="head_top" className="">
                            <NowTime  />
                                <div id="head_top_left">
                                    <img  src="/demo/images/head/head_top_left.png"      />
                                <span id="head_top_left_span1">张三</span>
                                <span>[中国联通集团公司]</span>
                                </div>

                                <div id="head_top_mid">
                                    <span>|</span>

                                    <select>
                                        <option value="1"  >我的自助</option>
                                        <option value="2"  >我的22</option>
                                        <option value="3"  >我的33</option>

                                    </select>

                                {/*<img  id="head_top_mid_img2" src="/demo/images/head/head_top_mid2.png"    />*/}
                                </div>

                                <div id="head_top_right">
                                    <span >|</span>
                                    <img src="/demo/images/head/head_top_right2.png" />
                                    <span id="head_top_right2">退出</span>

                                </div>
                        </div>
                        <div id="head_down">
                                <div id="head_down_left">
                                    <Link to="/">
                                        <img src="/demo/images/head/head_down_left.png" />
                                    </Link>
                                    <span>统一数据分析系统</span>
                                </div>
                                <div id="head_down_right">
                                   
                                    <ul>
                                        <li class="active">
                                            <Link to="/apps" id="logo">
                                                <span>基础业务分析</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/calendar" >
                                                <span>创新业务分析</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/form" >
                                                <span>成本效益分析</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/table" >
                                                <span>重点区域分析</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/chart" >
                                                <span>数据查询</span>
                                            </Link>
                                        </li>
                                    </ul>

                                </div>

                        </div>
            </div>
        )
    }
}

class Component extends React.Component{
    render(){
        return (
            <div>
              <Head/>
            </div>
        );
    }
}


export default Component;