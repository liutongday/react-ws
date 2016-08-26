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
import AppRankingList from './AppRankingList'
import HotNews from './HotNews'
import ECommerceHotWordsChart from './ECommerceHotWordsChart'
import VideoHotWordsChart from './VideoHotWordsChart'
import WeChatOfficialAccountsChart from './WeChatOfficialAccountsChart'
import Apps from '../component/apps';
import {
    TabHost,
    Title,
    ModulePartition
} from '../../src/index';
import CheckboxGroup from '../../demo/component/CheckboxGroup';import CheckboxGroup from '../component/CheckboxGroup';
import HotEvent from '../component/HotEvent';
import Table1 from '../component/wsTableCol4';
import Table2 from '../component/wsTableCol3';
import WsTable3 from '../component/wsTableCol5';
import WsTable4 from '../component/wsSimpleT4';
import WsTable5 from '../component/wsST4Area';
import WsTable6 from '../component/wsT4text';
import WsTable7 from '../component/wsT4tv';
import WsTable8 from '../component/wsT4chennel';
import WsTable9 from '../component/wsT4app';
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
                  {/* <AppRankingList/>*/}
                    <HotNews/>
                    <ECommerceHotWordsChart/>
                    <VideoHotWordsChart/>
                    <WeChatOfficialAccountsChart/>

                    <ModulePartition id="app_module" name="App排行榜" en_name="App Ranking List"/>
                    <Title icon="app-user" name="APP活跃用户总排行"/>
                    <Apps />
                    <TabHost/>
                    <Title icon="app-part" name="APP分类排行"/>
                    <CheckboxGroup />
                     <Table1 />
                    <ModulePartition id="new_module" name="热点新闻" en_name="Hot News"/>
                    <Title icon="new-hot-event" name="事件热度趋势"/>
                    <HotEvent />
                    <Table2 />
                    <WsTable3/>
                    <WsTable4/>
                    <WsTable5/>
                    <WsTable6/>
                    <WsTable7/>
                    <WsTable8/>
                    <WsTable9/>

                </div>


                
            </div>
        );
    }
}