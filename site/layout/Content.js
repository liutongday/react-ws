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
import Apps from '../component/apps';
import {
    Selector,
    DatePicker,
    Title,
    ModulePartition
} from '../../src/index';
import CheckboxGroup from '../../demo/component/CheckboxGroup';
import HotEvent from '../component/HotEvent';
import Table from '../component/wsTableCol4';
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

                    <ModulePartition id="app_module" name="App排行榜" en_name="App Ranking List"/>
                    <Title icon="app-user" name="APP活跃用户总排行"/>
                    <Apps />
                    <Title icon="app-part" name="APP分类排行"/>
                    <CheckboxGroup />
                     <Table />

                    <ModulePartition id="new_module" name="热点新闻" en_name="Hot News"/>
                    <Title icon="new-hot-event" name="事件热度趋势"/>
                    <HotEvent />


                </div>

            </div>
        );
    }
}
