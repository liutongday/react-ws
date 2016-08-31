/**
 *
 * <p>Title: BONC - React </p>
 *
 * <p>Description: 定义网站底部元素 Footer.js </p>
 *
 * <p>Copyright: Copyright BONC(c) 2013 - 2025 </p>
 *
 * <p>Company: 北京东方国信科技股份有限公司 </p>
 *
 * @author zhan
 * @version 1.0.0
 */
import React from 'react';
import {
    Flex
} from '../../src/index';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer >
                <div className="container-fluid">
                    <div id="footer" className="row">
                        <div id="foot_left" className="col-xs-12 col-md-2 col-lg-2">
                            <img alt="logo" src="../site/images/footer-logo.png"/>
                        </div>
                        <div id="foot_mid" className="col-xs-12 col-md-3 col-lg-3">
                            <img className="ws-footer-mid" src="../site/images/foot-mid.png"/>
                            <p className="ws-footer-mid-p">当前在线人数：37人</p>
                            <p>累积访问数量：22801次</p>
                        </div>
                        <div id="foot_right" className="col-xs-12 col-md-4 col-lg-4">
                            <p >关于联通统一数据分析平台·运维联系方式·建议反馈</p>
                            <p className="ws-footer-right-p">&copy;2012-2014 中国联合网络通信有限公司&nbsp;&nbsp;&nbsp;版权所有</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}




