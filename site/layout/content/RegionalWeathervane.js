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
    TabHost,
    ModulePartition,
    BigTabHost
} from '../../../src/index';
import CheckboxGroup from '../../component/CheckboxGroup';
import HotEvent from '../../component/HotEvent';
import Table from '../../component/wsTableCol4';
import LeftNavigation from '../../component/LeftNavigation';
import WsTable5 from '../../component/wsST4Area';
import WsTable9 from '../../component/wsT4app';
import '../../css/regionalWeathervane.less';
var RegionalWeathervane=React.createClass(
    {
        getInitialState: function () {
            var data1=[{proId:"111",proName:"全国"}, {proId:"036",proName:"浙江"}, {proId:"011",proName:"北京"},
                {proId:"031",proName:"上海"}, {proId:"013",proName:"天津"}, {proId:"083",proName:"重庆"},
                {proId:"097",proName:"黑龙江"}, {proId:"090",proName:"吉林"}, {proId:"091",proName:"辽宁"},
                {proId:"010",proName:"内蒙古"}, {proId:"089",proName:"新疆"}, {proId:"087",proName:"甘肃"},
                {proId:"070",proName:"青海"}, {proId:"088",proName:"宁夏"}, {proId:"084",proName:"陕西"},
                {proId:"019",proName:"山西"}, {proId:"017",proName:"山东"}, {proId:"018",proName:"河北"},
                {proId:"076",proName:"河南"}, {proId:"030",proName:"安徽"}, {proId:"034",proName:"江苏"},
                {proId:"071",proName:"湖北"}, {proId:"074",proName:"湖南"}, {proId:"075",proName:"江西"},
                {proId:"051",proName:"广东"}, {proId:"059",proName:"广西"}, {proId:"081",proName:"四川"},
                {proId:"086",proName:"云南"}, {proId:"085",proName:"贵州"}, {proId:"038",proName:"福建"},
                {proId:"050",proName:"海南"}, {proId:"079",proName:"西藏"}];
            return {
                data: data1
            };
        },
        onChildChanged: function (newState) {
            console.info("############");
            console.info(newState);

            this.setState({
                data: newState
            });
        },
        render() {
            return (
                <div className="Regional-Weather-vane">
                    <ModulePartition id="area_module" name="地域风向标" en_name="Regional  Weather-vane"/>
                    <DatePicker/>
                    <Selector initialState={this.state.data} callbackParent={this.onChildChanged}/>
                    <Title icon="regional-weather-vane" name="地域热搜"/>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-12 col-md-7"><Map/></div>
                            <div className="col-xs-12 col-md-5 regional-table"><WsTable5/></div>
                        </div>
                    </div>
                    <Title icon="regional-horizontal-benchmarking" name="地域横向对标"/>
                    <BigTabHost/>
                    <TabHost/>
                    <WsTable9/>
                </div>
            );
        }
    }
);
export default RegionalWeathervane;
