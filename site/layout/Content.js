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

import AppRankingList from './content/AppRankingList'
import HotNews from './content/HotNews'
import ECommerceHotWordsChart from './content/ECommerceHotWordsChart'
import VideoHotWordsChart from './content/VideoHotWordsChart'
import WeChatOfficialAccountsChart from './content/WeChatOfficialAccountsChart'
import RegionalWeathervane from './content/RegionalWeathervane'
import LeftNavigation from '../component/LeftNavigation';
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
                    <AppRankingList/>
                    <HotNews/>
                    <ECommerceHotWordsChart/>
                    <VideoHotWordsChart/>
                    <WeChatOfficialAccountsChart/>
                    <RegionalWeathervane/>
                </div>
            </div>
        )
    }
}