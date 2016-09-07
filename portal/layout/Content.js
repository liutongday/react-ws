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
import './Content.less'
import LeftNavigation from '../component/LeftNavigation';
import {
    Selector,
    DatePicker,
    RecentAccess,
    EasyAccess

} from '../../src/index';
import Title from '../component/title';
import TabHost from '../component/tabhost';
import Scroll from '../component/scroll';
import {CustomizedButton,CustomizedPanel} from '../../src/index';
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
                    <div className="time-pro">
                        <DatePicker callbackParent={this.onDateChanged}/>
                        <Selector  callbackParent={this.onProChanged}/>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-12 col-md-9 col-lg-9">
                                <Title icon="core" name="核心指标"/>
                                <div >
                                    <CustomizedButton/>
                                </div>
                                <Scroll/>
                            </div>
                            <div id="right-recent" className="col-xs-12 col-md-3 col-lg-3">
                                <Title icon='date' name="近期访问"/>
                                <RecentAccess/>
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-xs-12 col-md-9 col-lg-9">
                                <Title icon="fire" name="热点关注"/>

                                <TabHost/>
                            </div>
                            <div id="right-easy" className="col-xs-12 col-md-3 col-lg-3">
                                <Title icon="rocket" name="便捷访问"/>
                                <EasyAccess/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}