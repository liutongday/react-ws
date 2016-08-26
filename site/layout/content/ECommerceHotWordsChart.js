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
    Title,
    ModulePartition
} from '../../../src/index';
import CheckboxGroup from '../../component/CheckboxGroup';
import HotEvent from '../../component/HotEvent';
import Table from '../../component/wsTableCol4';
import LeftNavigation from '../../component/LeftNavigation';
export default class ECommerceHotWordsChart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="E-Commerce-Hot-Words-Chart">
                <ModulePartition id="e-commerce_module" name="电商热词风云榜" en_name="E-Commerce  Hot  Words  Chart"/>
                <Title icon="e-commerce-hot-word" name="电商热词"/>
                <HotWord/>

            </div>
        );
    }
}