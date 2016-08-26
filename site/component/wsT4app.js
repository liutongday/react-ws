/**
 *
 * <p>Title: BONC - React </p>
 *
 * <p>Description: app排行四列表格 </p>
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
    {排名: '1', APP名称: '/site/images/table/weixin.png,微信', 活跃用户数: 57639,变化: '1'},
    {排名: '2', APP名称: '/site/images/table/qq.png,QQ',   活跃用户数: 53958,变化: '-1'},
    {排名: '3', APP名称: '/site/images/table/weibo.png,新浪微博', 活跃用户数:10184,变化: '0'},
    {排名: '4', APP名称: '/site/images/table/u7942.png,腾讯视频', 活跃用户数: 8643,变化: '0'},
    {排名: '5', APP名称: '/site/images/table/u7954.png,爱奇艺', 活跃用户数: 6689,变化: '0'},
    {排名: '6', APP名称: '/site/images/table/u785.png,蘑菇街', 活跃用户数: 5763,变化: '1'},
    {排名: '7', APP名称: '/site/images/table/u777.png,唯品会',   活跃用户数: 5395,变化: '-1'},
    {排名: '8', APP名称: '/site/images/table/u735.png,PPTV聚力', 活跃用户数:1018 ,变化: '0'},
    {排名: '9', APP名称: '/site/images/table/qqkj.png,QQ空间', 活跃用户数: 864,变化: '0'},
    {排名: '10', APP名称: '/site/images/table/zhfb.png,旺信', 活跃用户数:668 ,变化: '0'},

    {排名: '1', APP名称: '/site/images/table/weixin.png,微信', 活跃用户数: 57639,变化: '1'},
    {排名: '2', APP名称: '/site/images/table/qq.png,QQ',   活跃用户数: 53958,变化: '-1'},
    {排名: '3', APP名称: '/site/images/table/weibo.png,新浪微博', 活跃用户数:10184,变化: '0'},
    {排名: '4', APP名称: '/site/images/table/u7942.png,腾讯视频', 活跃用户数: 8643,变化: '0'},
    {排名: '5', APP名称: '/site/images/table/u7954.png,爱奇艺', 活跃用户数: 6689,变化: '0'},
    {排名: '6', APP名称: '/site/images/table/u785.png,蘑菇街', 活跃用户数: 5763,变化: '1'},
    {排名: '7', APP名称: '/site/images/table/u777.png,唯品会',   活跃用户数: 5395,变化: '-1'},
    {排名: '8', APP名称: '/site/images/table/u735.png,PPTV聚力', 活跃用户数:1018 ,变化: '0'},
    {排名: '9', APP名称: '/site/images/table/qqkj.png,QQ空间', 活跃用户数: 864,变化: '0'},
    {排名: '10', APP名称: '/site/images/table/zhfb.png,旺信', 活跃用户数:668 ,变化: '0'},


];

function WsTable9() {
    const dataArr=[];
    for(let i=0;i<data.length;i+=10){
        dataArr.push(data.slice(i,i+10));
    }

    const talbleType4=dataArr.map(data=>{
        const keys = Object.keys(data[0]);

        return (

            <Table1 data={data} className={'wsT4text app'}>
                <Column dataKey={keys[0]} name={keys[0]} key={'col-{keys[0]}'} align='center'/>
                <Column dataKey={keys[1]} name={keys[1]} key={'col-{keys[1]}'} />
                <Column dataKey={keys[2]} name={keys[2]} key={'col-{keys[2]}'} align='center'/>
                <Column dataKey={keys[3]} name={keys[3]} key={'col-{keys[3]}'} align='center'/>

            </Table1>

        );
    });
    return (
        <div >
            <Flex ws-flex row wrap>
                {talbleType4}
            </Flex>
        </div>
    );

}


export default WsTable9;