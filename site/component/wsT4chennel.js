/**
 *
 * <p>Title: BONC - React </p>
 *
 * <p>Description:热门频道排行四列表格 </p>
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
    {排名: '1', 热门频道: '电视剧', 热度: 57639320,变化: '1'},
    {排名: '2', 热门频道: '电影',   热度: 57639320,变化: '-1'},
    {排名: '3', 热门频道: '综艺', 热度:57639320,变化: '0'},
    {排名: '4', 热门频道: '娱乐', 热度: 57639320,变化: '0'},
    {排名: '5', 热门频道: '体育', 热度: 57639320,变化: '0'},
    {排名: '6', 热门频道: '动漫', 热度: 57639320,变化: '1'},
    {排名: '7', 热门频道: '游戏',   热度: 57639320,变化: '-1'},
    {排名: '8', 热门频道: '汽车', 热度: 57639320,变化: '0'},
    {排名: '9', 热门频道: '财经', 热度: 57639320,变化: '0'},
    {排名: '10', 热门频道: '纪录片', 热度: 57639320,变化: '0'},
    {排名: '1', 热门频道: '电视剧', 热度: 57639320,变化: '1'},
    {排名: '2', 热门频道: '电影',   热度: 57639320,变化: '-1'},
    {排名: '3', 热门频道: '综艺', 热度:57639320,变化: '0'},
    {排名: '4', 热门频道: '娱乐', 热度: 57639320,变化: '0'},
    {排名: '5', 热门频道: '体育', 热度: 57639320,变化: '0'},
    {排名: '6', 热门频道: '动漫', 热度: 57639320,变化: '1'},
    {排名: '7', 热门频道: '游戏',   热度: 57639320,变化: '-1'},
    {排名: '8', 热门频道: '汽车', 热度: 57639320,变化: '0'},
    {排名: '9', 热门频道: '财经', 热度: 57639320,变化: '0'},
    {排名: '10', 热门频道: '记录片', 热度: 57639320,变化: '0'},

];

function WsTable8() {
    const dataArr=[];
    for(let i=0;i<data.length;i+=10){
        dataArr.push(data.slice(i,i+10));
    }

    const talbleType3=dataArr.map(data=>{
        const keys = Object.keys(data[0]);

        return (

            <Table1 data={data} className={'wsT4text tv che'}>
                <Column dataKey={keys[0]} name={keys[0]} key={'col-{keys[0]}'} align='center'/>
                <Column dataKey={keys[1]} name={keys[1]} key={'col-{keys[1]}'} align='center'/>
                <Column dataKey={keys[2]} name={keys[2]} key={'col-{keys[2]}'} align='center'/>
                <Column dataKey={keys[3]} name={keys[3]} key={'col-{keys[3]}'} align='center'/>

            </Table1>

        );
    });
    return (
        <div >
            <Flex ws-flex row wrap>
                {talbleType3}
            </Flex>
        </div>
    );

}
export default WsTable8;

