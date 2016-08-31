/**
 *
 * <p>Title: BONC - React </p>
 *
 * <p>Description: 三列表格组件 wsTableCol3.js </p>
 *
 * <p>Copyright: Copyright BONC(c) 2013 - 2025 </p>
 *
 * <p>Company: 北京东方国信科技股份有限公司 </p>
 *
 * @author Yelj
 * @version 1.0.0
 */
import React, { PropTypes } from 'react';
import {Table2,Column,Flex} from '../../src/index';
import styles from '../css/table-ws.less';

/*
const data = [
    {排名: '1', 热点新闻事件标题: '教育儿子被认虐童!,1', 热度: '539958,1'},
    {排名: '2', 热点新闻事件标题: '陈德容长成照曝光...,1', 热度: '53958,1'},
    {排名: '3', 热点新闻事件标题: '委内瑞拉政府向中...,1', 热度: '10184,1'},
    {排名: '4', 热点新闻事件标题: '马云白宫会见美国总...,1',  热度: '8643,-1'},
    {排名: '5', 热点新闻事件标题: '男子驾铲车装向无辜...,1',  热度: '6689,0'},
    {排名: '6', 热点新闻事件标题: '韩国豪门婚变 ,1',  热度: '5632,1'},
    {排名: '7', 热点新闻事件标题: '俄真人版长发公主...,1',  热度: '4532,1'},
    {排名: '8', 热点新闻事件标题: '辽舰航母训练曝光,1',  热度: '3672,-1'},
    {排名: '9', 热点新闻事件标题: '男子驾铲车装向无辜...,1',  热度: '2742,1'},
    {排名: '10', 热点新闻事件标题: '男子驾铲车装向无辜...,1',  热度: '1738,-1'},

];*/

function WsTable2(eventData) {
        const data=eventData.data;
        const keys = Object.keys(data[0]);
        return (
            <Table2 data={data} className={styles.container}>
                <Column dataKey={keys[0]} name={keys[0]} key={'col-{keys[0]}'} align='center'/>
                <Column dataKey={keys[1]} name={keys[1]} key={'col-{keys[1]}'} align='center'/>
                <Column dataKey={keys[2]} name={keys[2]} key={'col-{keys[2]}'} />
            </Table2>
        );
}

export default WsTable2;