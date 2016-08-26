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
import Videoes from '../../component/videoes';
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
export default class VideoHotWordsChart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Video-Hot-Words-Chart">
                <ModulePartition id="new_module" name="视频热词风云榜" en_name="Video Hot Words  Chart"/>
                <Title icon="video-hot-word" name="热门视频"/>
                <Videoes/>
            </div>
        );
    }
}
