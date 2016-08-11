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
                        <Link to="/" id="logo">
                            <img alt="logo" className="ws-header-logo" src="../site/images/unicom-logo.png" />
                            <span>DW3.0</span>
                        </Link>
                    </Flex>
                </Flex>
            </header>
        );
    }
}
