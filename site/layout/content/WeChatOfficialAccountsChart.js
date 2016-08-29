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
import Apps from '../../component/apps';
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
export default class WeChatOfficialAccountsChart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <div className="WeChat-Official-Accounts-Chart">
                <ModulePartition id="wechat_module" name="微信公众号排行榜" en_name="WeChat  Official  Accounts  Chart"/>
                <Title icon="wechart-official-account-chart" name="微信公众号关注度排行榜"/>
                <Apps />
                <Title icon="wechart-official-read" name="微信公众号文章阅读量排行榜"/>
                <Apps />
            </div>
        );
    }
}
