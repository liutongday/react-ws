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
 * @author panxw
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

                <footer id="footer">
                    <Flex row className="ws-footer-bg">
                        Footer
                        <div className="Grid-cell u-1of3">
                            <img alt="logo" className="ws-footer-logo" src="../site/images/footer-logo.png" />
                        </div>

                        <div className="Grid-cell u-1of2">
                            关于联通统一数据分析平台·运维联系方式·建议反馈
                        </div>
                    </Flex>
                </footer>


        );
    }
}
