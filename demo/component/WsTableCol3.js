
/**
 *
 * <p>Title: BONC - React </p>
 *
 * <p>Description: 单页面应用的构建文件 index.js </p>
 *
 * <p>Copyright: Copyright BONC(c) 2013 - 2025 </p>
 *
 * <p>Company: 北京东方国信科技股份有限公司 </p>
 *
 * @author Yelj
 * @version 1.0.0
 */

 import React, { PropTypes } from 'react';
 import {Table,Column,Flex} from '../../src/index';
 import styles from '../css/table-ws.less';
 import  _ from 'underscore';

 const data = [
     {排名: '1',  活跃用户数: 57639,变化: '1'},
     {排名: '2',  活跃用户数: 53958,变化: '0'},
     {排名: '3',  活跃用户数: 10184,变化: '0'},
     {排名: '4',  活跃用户数: 8643,变化: '0'},
     {排名: '5',  活跃用户数: 6689,变化: '0'},

 ];

 function WsTable2() {
     const dataArr=[];
     for(let i=0;i<1;i++){
         dataArr.push(data);
     }

     const talbleType1=dataArr.map(data=>{
         const keys = Object.keys(data[0]);
         return (
             <Table data={data} className={styles.container}>
                 <Column dataKey={keys[0]} name={keys[0]} key={'col-{keys[0]}'} align='center'/>
                 <Column dataKey={keys[1]} name={keys[1]} key={'col-{keys[1]}'} align='center'/>
                 <Column dataKey={keys[2]} name={keys[2]} key={'col-{keys[2]}'} align='center'/>

             </Table>
         );

     });




     return (
         <div id="scroll-1">
        {/* <Flex ws-flex row wrap>*/}
             {talbleType1}
       {/*  </Flex>*/}
         </div>
     );
 }

 export default WsTable2;
