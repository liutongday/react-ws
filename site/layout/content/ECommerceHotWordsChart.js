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
import HotWord from '../../component/hotword';
import {
    Selector,
    DatePicker,
    DatePickerMonth,
    Title,
    ModulePartition,
    AppCol
} from '../../../src/index';
import WsTable6 from '../../component/wsT4text';
import WsTable4 from '../../component/wsSimpleT4';
export default class ECommerceHotWordsChart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="E-Commerce-Hot-Words-Chart">

                <ModulePartition id="new_module" name="电商热词风云榜" en_name="E-Commerce Hot Words Chart"/>
                <Selector className="ec-sel"/>
                <Title icon="e-commerce-hot-word" name="电商热词"/>
                <WsTable4 className="ec-wsTable4"/>
                <HotWord className="ec-hotword"/>
                <Title icon="vs" name="电商热词横向对标"/>
                <AppCol name="京东" col={0}/>
                <AppCol name="天猫" col={0}/>
                <AppCol name="淘宝" col={0}/>
                <WsTable6/>





            </div>
        );
    }
}