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
    ModulePartition,
    TabHost,
    AppCol
} from '../../../src/index';
import WsTable7 from '../../component/wsT4tv';
import '../css/VideoHotWordsChart.less';
var VideoHotWordsChart=React.createClass({
    getInitialState: function () {

        return {
            data: null
        };
    },
    onChildChanged: function (newState) {
        console.info(newState);
        this.setState({
            data: newState
        });
    },
    render(){
        return (
            <div className="Video-Hot-Words-Chart">
                <ModulePartition id="video_module" name="视频热词风云榜" en_name="Video Hot Words  Chart"/>
                <DatePicker/>
                <Selector initialState={this.state.data} callbackParent={this.onChildChanged}/>
                <Title icon="video-hot-word" name="热门视频"/>
                <TabHost/>
                <Title icon="vs" name="热门视频横向对标"/>
                <WsTable7/>
                <Title icon="hot-video" name="热门频道"/>
                <WsTable7/>
            </div>
        );
    }
});
export default VideoHotWordsChart;
