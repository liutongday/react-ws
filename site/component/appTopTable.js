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
import {Table1,Column,Flex,RegionalSelector} from '../../src/index';
import '../css/table-ws.less';

function WsTable9(appTableData) {
     const items=appTableData.data;
     const dataArr=[];
     for(let i=0;i<items.length;i+=10){
         dataArr.push(items.slice(i,i+10));
     }

     const talbleType4=dataArr.map(data=>{
         const keys = Object.keys(data[0]);
         return (

             <div className="col-md-4 col-customer-3">
                 <div className="app-table-with-selector">
                     <Table1 data={data} className={'wsT4text app'}>
                         <Column dataKey={keys[0]} name={keys[0]} key={'col-{keys[0]}'} align='center'/>
                         <Column dataKey={keys[1]} name={keys[1]} key={'col-{keys[1]}'} />
                         <Column dataKey={keys[2]} name={keys[2]} key={'col-{keys[2]}'} align='center'/>
                         <Column dataKey={keys[3]} name={keys[3]} key={'col-{keys[3]}'} align='center'/>
                   </Table1>
                </div>
             </div>
        );
     });
     return (
        <div className="container-fluid" >

             <div className="row">
                 {talbleType4}
             </div>
        </div>
    );

 }


export default WsTable9;