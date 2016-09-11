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

function WsTable5(areaTableData) {
    const data=areaTableData.data;
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
