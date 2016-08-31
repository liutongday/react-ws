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
    Calendar,
    CalenarMonth,
    Title,
    CalendarMonth,
    ModulePartition
} from '../../../src/index';
import CheckboxGroup from '../../component/CheckboxGroup';
import HotEvent from '../../component/HotEvent';
import WsTable2 from '../../component/wsTableCol3';
import WsTable3 from '../../component/wsTableCol5';
import LeftNavigation from '../../component/LeftNavigation';
import '../css/hotnews.less';
var HotNews = React.createClass({



    getInitialState: function () {


        return {
            data: null
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
            <div className="Hot-News">
                <ModulePartition id="new_module" name="热点新闻" en_name="Hot News"/>
                <DatePicker/>
                <Selector initialState={this.state.data} callbackParent={this.onChildChanged}/>
                <div     id="new-fluid"    className="container-fluid">
                    <div  className="row">
                        <div className=" col-xs-12 col-md-4 col-lg-4">
                            <Title icon="new-hot-event" name="热点新闻事件"/>
                            <WsTable2/>

                        </div>
                        <div className=" col-xs-12 col-md-8 col-lg-8">
                            <Title icon="new-relative-event" name="相关新闻"/>
                            <WsTable3/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
export default HotNews;