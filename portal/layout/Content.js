/**
 *
 * <p>Title: BONC - React </p>
 *
 * <p>Description: 定义网站包含内容 Content.js </p>
 *
 * <p>Copyright: Copyright BONC(c) 2013 - 2025 </p>
 *
 * <p>Company: 北京东方国信科技股份有限公司 </p>
 *
 * @author panxw
 * @version 1.0.0
 */

import React from 'react';
import LeftNavigation from '../component/LeftNavigation';
import Scroll from '../component/scroll';
export default class Content extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="HolyGrail-body">
                <nav className="HolyGrail-nav">
                    <LeftNavigation />
                </nav>
                <div className="HolyGrail-content">
                    <Scroll/>
                </div>
            </div>
        )
    }
}