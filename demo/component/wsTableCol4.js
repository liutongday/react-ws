
/**
 *
 * <p>Title: BONC - React </p>
 *
 * <p>Description: 界面上第一种table组件封装 wsTableCol4.js </p>
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
import styles from '../css/table-ws.less';
import  _ from 'underscore';

const data = [
    {排名: '1', "/src/images/u8852.png,网银支付": '/src/images/weixin.png,微信', 活跃用户数: 57639,变化: '1'},
    {排名: '2', "/src/images/u8852.png,网银支付": '/src/images/qq.png,QQ',   活跃用户数: 53958,变化: '0'},
    {排名: '3', "/src/images/u8852.png,网银支付": '/src/images/weibo.png,新浪微博', 活跃用户数: 10184,变化: '0'},
    {排名: '4', "/src/images/u8852.png,网银支付": '/src/images/qqkj.png,QQ空间', 活跃用户数: 8643,变化: '0'},
    {排名: '5', "/src/images/u8852.png,网银支付": '/src/images/zhfb.png,支付宝', 活跃用户数: 6689,变化: '0'},

];

function WsTable1() {
    const dataArr=[];
    for(let i=0;i<1;i++){
        dataArr.push(data);
    }

    const talbleType1=dataArr.map(data=>{
        const keys = Object.keys(data[0]);
        return (
            <Table1 data={data} className={styles.container}>
                <Column dataKey={keys[0]} name={keys[0]} key={'col-{keys[0]}'} align='center'/>
                <Column dataKey={keys[1]} name={keys[1]} key={'col-{keys[1]}'} />
                <Column dataKey={keys[2]} name={keys[2]} key={'col-{keys[2]}'} align='center'/>
                <Column dataKey={keys[3]} name={keys[3]} key={'col-{keys[3]}'} align='center'/>
                {/* {
                 keys.map(entry => {
                 console.log(entry);
                 let alignTd='center';
                 if (entry=='网银支付'){
                 alignTd='left';
                 }

                 return( <Column dataKey={entry} name={entry} key={`col-${entry}`} align={alignTd}/>)
                 }
                 )
                 }*/}
            </Table1>
        );

    });




    return (
        <div >
        <Flex ws-flex row wrap>
            {talbleType1}
        </Flex>
        </div>
    );
}

export default WsTable1;
