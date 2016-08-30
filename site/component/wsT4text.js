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
const datas = [
    {regionalName:'京东', content: [ {排名: '1', 热搜词: '雀氏纸尿裤', 热度: 57639320,变化: '1'},
    {排名: '2', 热搜词: '宜家',   热度: 57639320,变化: '-1'},
    {排名: '3', 热搜词: '女装', 热度:57639320,变化: '0'},
    {排名: '4', 热搜词: '巧克力', 热度: 57639320,变化: '0'},
    {排名: '5', 热搜词: 'macbook', 热度: 57639320,变化: '0'},
    {排名: '6', 热搜词: '苹果', 热度: 57639320,变化: '1'},
    {排名: '7', 热搜词: '防晒霜',   热度: 57639320,变化: '-1'},
    {排名: '8', 热搜词: '凉鞋', 热度: 57639320,变化: '0'},
    {排名: '9', 热搜词: '汽车', 热度: 57639320,变化: '0'},
    {排名: '10', 热搜词: '小米', 热度: 57639320,变化: '0'}]},
    {regionalName:'淘宝',content:[{排名: '1', 热搜词: '雀氏纸尿裤', 热度: 57639320,变化: '1'},
    {排名: '2', 热搜词: '宜家',   热度: 57639320,变化: '-1'},
    {排名: '3', 热搜词: '女装', 热度:57639320,变化: '0'},
    {排名: '4', 热搜词: '巧克力', 热度: 57639320,变化: '0'},
    {排名: '5', 热搜词: 'macbook', 热度: 57639320,变化: '0'},
    {排名: '6', 热搜词: '苹果', 热度: 57639320,变化: '1'},
    {排名: '7', 热搜词: '防晒霜',   热度: 57639320,变化: '-1'},
    {排名: '8', 热搜词: '凉鞋', 热度: 57639320,变化: '0'},
    {排名: '9', 热搜词: '汽车', 热度: 57639320,变化: '0'},
    {排名: '10', 热搜词: '小米', 热度: 57639320,变化: '0'}]},
    {regionalName:'天猫',content:[{排名: '1', 热搜词: '雀氏纸尿裤', 热度: 57639320,变化: '1'},
    {排名: '2', 热搜词: '宜家',   热度: 57639320,变化: '-1'},
    {排名: '3', 热搜词: '女装', 热度:57639320,变化: '0'},
    {排名: '4', 热搜词: '巧克力', 热度: 57639320,变化: '0'},
    {排名: '5', 热搜词: 'macbook', 热度: 57639320,变化: '0'},
    {排名: '6', 热搜词: '苹果', 热度: 57639320,变化: '1'},
    {排名: '7', 热搜词: '防晒霜',   热度: 57639320,变化: '-1'},
    {排名: '8', 热搜词: '凉鞋', 热度: 57639320,变化: '0'},
    {排名: '9', 热搜词: '汽车', 热度: 57639320,变化: '0'},
    {排名: '10', 热搜词: '小米', 热度: 57639320,变化: '0'}]}
];

function WsTable6() {
    // const dataArr=[];
    // for(let i=0;i<data.length;i+=10){
    //     dataArr.push(data.slice(i,i+10));
    // }

    const talbleType2=datas.map(data=>{
        const keys = Object.keys(data.content[0]);
        return (
            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="wst4text-with-appcol">
                    <AppCol name={data.regionalName} col={0}/>
                    <div className="wst4text-div">
                        <Table1 data={data.content} className={'wsT4text'}>
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