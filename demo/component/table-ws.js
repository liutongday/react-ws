import React, { PropTypes } from 'react';
import {Table,Column} from '../../src/index';
import styles from '../css/table-ws.less';



const data = [
    {排名: '1', 网银支付: '微信', 活跃用户数: 57639,变化: '---'},
    {排名: '2', 网银支付: 'QQ',   活跃用户数: 53958,变化: '---'},
    {排名: '3', 网银支付: '新浪微博', 活跃用户数: 10184,变化: '---'},
    {排名: '4', 网银支付: 'QQ空间', 活跃用户数: 8643,变化: '---'},
    {排名: '5', 网银支付: '旺信', 活跃用户数: 6689,变化: '---'},

];

function WsTable() {
    const keys = Object.keys(data[0]);

    return (
        <Table data={data} className={styles.container}>
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
        </Table>
    );
}

export default WsTable;
