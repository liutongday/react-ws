/**
 *
 * <p>Title: BONC - React </p>
 *
 * <p>Description: 定义网站头部元素 Header.js </p>
 *
 * <p>Copyright: Copyright BONC(c) 2013 - 2025 </p>
 *
 * <p>Company: 北京东方国信科技股份有限公司 </p>
 *
 * @author panxw
 * @version 1.0.0
 */
import React from 'react';
import { Link } from 'react-router';
import {
    Flex,
    Storage,
    NowTime
} from '../../src/index';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <header className="ws-header-color">
                <Flex row >
                    <Flex column>
                            <div id="head"  >
                                <div id="head_top" className="" >
                                    <NowTime  />
                                    <div id="head_top_left">
                                        <img  src="/site/images/head/head_top_left.png"      />
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
                                    </div>
                                    <div id="head_top_right">
                                        <span >|</span>
                                        <img src="/site/images/head/head_top_right2.png" />
                                        <span id="head_top_right2">退出</span>
                                    </div>
                                </div>
                                <div id="head_down">
                                    <div id="head_down_left">
                                        <img src="/site/images/head/head_down_left.png" />
                                        <span>统一数据分析系统</span>
                                    </div>
                                    <div id="head_down_right">
                                        <ul>
                                            <li class="active"><a href="#">基础业务分析</a></li>
                                            <li><a href="#">创新业务分析</a></li>
                                            <li><a href="#">成本效益分析</a></li>
                                            <li><a href="#">重点区域分析</a></li>
                                            <li><a href="#">数据查询</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                    </Flex>
                </Flex>
            </header>
        );
    }
}
