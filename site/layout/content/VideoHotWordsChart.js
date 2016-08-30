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
        var tvTableData=[
            {排名: '1', 热门视频: '/demo/images/u4070.png,父亲的身份', 热度: 57639,变化: '1'},
            {排名: '2', 热门视频: '/demo/images/u4085.png,欢乐颂',   热度: 57639,变化: '-1'},
            {排名: '3', 热门视频: '/demo/images/u4183.png,太阳的后裔', 热度:57639,变化: '0'},
            {排名: '4', 热门视频: '/demo/images/u4113.png,绝命卦师', 热度: 57639,变化: '0'},
            {排名: '5', 热门视频: '/demo/images/u4099.png,金水桥边', 热度: 57639,变化: '0'},
            {排名: '6', 热门视频: '/demo/images/u4141.png,奇妙的时光之旅', 热度: 57639,变化: '1'},
            {排名: '7', 热门视频: '/demo/images/u4155.png,情迷睡美人',   热度: 57639,变化: '-1'},
            {排名: '8', 热门视频: '/demo/images/u4169.png,山海经', 热度: 57639,变化: '0'},
            {排名: '9', 热门视频: '/demo/images/u4127.png,柠檬初上', 热度: 57639,变化: '0'},
            {排名: '10', 热门视频: '/demo/images/u4197.png,最好的我们', 热度: 57639,变化: '0'},

        ];
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
