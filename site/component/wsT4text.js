/**
 *
 * <p>Title: BONC - React </p>
 *
 * <p>Description:无图片带滚动条四列表格</p>
 *
 * <p>Copyright: Copyright BONC(c) 2013 - 2025 </p>
 *
 * <p>Company: 北京东方国信科技股份有限公司 </p>
 *
 * @author Yelj
 * @version 1.0.0
 */
import React, { PropTypes } from 'react';
import {Table1,Column,Flex,AppCol} from '../../src/index';
import '../css/table-ws.less';

function WsTable6(itemHotData) {
    const itemData=itemHotData.data;
    const dataArr=[];
    for(let i=0;i<itemData.length;i++){
        dataArr.push(itemData[i]);
    }
    const talbleType2=dataArr.map(data=>{
        const regionalName=data.regionalName;
        const contentData=data.content;
        const keys = Object.keys(contentData[0]);

        return (
            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="wst4text-with-appcol">
                    <AppCol name={regionalName} col={0}/>
                    <div className="wst4text-div">
                        <Table1 data={contentData} className={'wsT4text'}>
                            <Column dataKey={keys[0]} name={keys[0]} key={'col-{keys[0]}'} align='center'/>
                            <Column dataKey={keys[1]} name={keys[1]} key={'col-{keys[1]}'} align='center'/>
                            <Column dataKey={keys[2]} name={keys[2]} key={'col-{keys[2]}'} align='center'/>
                            <Column dataKey={keys[3]} name={keys[3]} key={'col-{keys[3]}'} align='center'/>
                        </Table1>
                    </div>
                </div>
            </div>
        );
    });
    return (
        <div className="container-fluid" >
            {/*<Flex ws-flex row wrap>*/}
                {/*{talbleType2}*/}
            {/*</Flex>*/}
            <div className="row">{talbleType2}</div>
        </div>
    );


}


export default WsTable6;