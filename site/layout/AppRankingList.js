/**
 *
 * <p>Title: BONC - React </p>
 *
 * <p>Description:  </p>
 *
 * <p>Copyright: Copyright BONC(c) 2013 - 2025 </p>
 *
 * <p>Company: 北京东方国信科技股份有限公司 </p>
 *
 * @author zhangxinjing
 * @date 2016/8/25
 */
import React from 'react';
import Apps from '../component/apps';
import Selector from '../component/selector';
import {
    DatePicker,
    Title,
    ModulePartition
} from '../../src/index';
import CheckboxGroup from '../../demo/component/CheckboxGroup';
import HotEvent from '../component/HotEvent';
import Table from '../component/wsTableCol4';
import LeftNavigation from '../component/LeftNavigation';

var AppRankingList=React.createClass({

    getInitialState: function () {
        return {
            data: null
        };
    },
    onChildChanged: function (newState) {
        console.info("############");
        console.info(newState);
        //debugger;
        this.setState({
            data: newState
        });
    },
    render() {
        return (
            <div className="App-Ranking-List">
                <ModulePartition id="app_module" name="App排行榜" en_name="App Ranking List"/>
                <Selector/>
                <Title icon="app-user" name="APP活跃用户总排行"/>
                <Apps />
                <Title icon="app-part" name="APP分类排行"/>
                <CheckboxGroup />
                <Table />
            </div>
        );
    }
});
