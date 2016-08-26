/**
 *
 * <p>Title: BONC - React </p>
 *
 * <p>Description: 页面上第二个简单四列表格 </p>
 *
 * <p>Copyright: Copyright BONC(c) 2013 - 2025 </p>
 *
 * <p>Company: 北京东方国信科技股份有限公司 </p>
 *
 * @author Yelj
 * @version 1.0.0
 */
import React, { PropTypes } from 'react';
import {Table1,Column,Flex} from '../../src/index';
import '../css/table-ws.less';
const data = [
    {排名: '1', 热搜词: '微信网页版', 热度: 9394748,变化: '1'},
    {排名: '2', 热搜词: '京东',   热度: 9394748,变化: '-1'},
    {排名: '3', 热搜词: '淘宝', 热度: 9394748,变化: '0'},
    {排名: '4', 热搜词: '爱奇艺', 热度: 9394748,变化: '0'},
    {排名: '5', 热搜词: '斗鱼TV', 热度: 9394748,变化: '0'},
    {排名: '6', 热搜词: '鹿晗退出跑男录制', 热度: 9394748,变化: '1'},
    {排名: '7', 热搜词: '优酷',   热度: 9394748,变化: '-1'},
    {排名: '8', 热搜词: '熊猫TV', 热度: 9394748,变化: '0'},
    {排名: '9', 热搜词: '亲爱的翻译官', 热度: 9394748,变化: '0'},
    {排名: '10', 热搜词: '腾讯视频', 热度: 9394748,变化: '0'},

];

function WsTable5() {

    const keys = Object.keys(data[0]);

    return (

        <Table1 data={data} className={'wsSimpleT4'}>
            <Column dataKey={keys[0]} name={keys[0]} key={'col-{keys[0]}'} align='center'/>
            <Column dataKey={keys[1]} name={keys[1]} key={'col-{keys[1]}'} />
            <Column dataKey={keys[2]} name={keys[2]} key={'col-{keys[2]}'} align='center'/>
            <Column dataKey={keys[3]} name={keys[3]} key={'col-{keys[3]}'} align='center'/>

        </Table1>

    );

}

export default WsTable5;
