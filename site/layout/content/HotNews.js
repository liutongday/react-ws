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
import Chart from '../../component/chart';
import {
    Selector,
    DatePicker,
    Title,
    ModulePartition
} from '../../../src/index';
import CheckboxGroup from '../../component/CheckboxGroup';
import HotEvent from '../../component/HotEvent';
import Table from '../../component/wsTableCol4';
import LeftNavigation from '../../component/LeftNavigation';

export default class HotNews extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Hot-News">

                <ModulePartition id="new_module" name="热点新闻" en_name="Hot News"/>
                <Title icon="new-hot-event" name="事件热度趋势"/>

                <Chart/>
            </div>
        );
    }
}