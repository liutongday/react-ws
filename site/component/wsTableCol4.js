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


import React, {PropTypes} from 'react';
import {Table1, Column, Flex} from '../../src/index';
import '../css/table-ws.less';

function WsTable1(tabledata) {
    const items=tabledata.data;
    const dataArr=[];
    for(let i=0;i<items.length;i+=5){
        dataArr.push(items.slice(i,i+5));
    }
    const talbleType1 = dataArr.map(data=> {
        const keys = Object.keys(data[0]);
        const aStyle = {
            width: '380px',
            display: 'block',
            textAlign: 'right',
            color: '#999C9f',
            backgroundColor: '#fBfBfB',
            height: '26px',
            fontSize: '12px',
        };



        const pstyle = {
            marginRight: '18px',
            marginTop:'4px',
        };
        return (
            <div className="col-xs-12 col-sm-6 col-md-4 col-customer-3">
                    <a style={aStyle}><span style={pstyle}>更多></span></a>
                    <Table1 data={data} className={'basic'}>
                        <Column dataKey={keys[0]} name={keys[0]} key={'col-{keys[0]}'} align='center'/>
                        <Column dataKey={keys[1]} name={keys[1]} key={'col-{keys[1]}'}/>
                        <Column dataKey={keys[2]} name={keys[2]} key={'col-{keys[2]}'} align='center'/>
                        <Column dataKey={keys[3]} name={keys[3]} key={'col-{keys[3]}'} align='center'/>
                    </Table1>
            </div>
        );
    });
    return (
        <div className="container-fluid">
          
            <div className="row">
                {talbleType1}
            </div>
        </div>
    );
}

export default WsTable1;
