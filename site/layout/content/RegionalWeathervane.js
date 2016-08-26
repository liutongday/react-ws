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
import Map from '../../component/map';
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
export default class RegionalWeathervane extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Regional-Weather-vane">
                <ModulePartition id="new_module" name="地域风向标" en_name="Regional  Weather-vane"/>
                <Title icon="regional-weather-vane" name="地域热搜"/>
                <Map/>
            </div>
        );
    }
}
