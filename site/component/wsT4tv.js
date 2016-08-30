/**
 *
 * <p>Title: BONC - React </p>
 *
 * <p>Description: 热门影视排行四列表格 </p>
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
const datas = [{tvName:'搜狐视频',content:[{排名: '1', 热门视频: '/demo/images/u4070.png,父亲的身份', 热度: 57639,变化: '1'},
    {排名: '2', 热门视频: '/demo/images/u4085.png,欢乐颂',   热度: 57639,变化: '-1'},
    {排名: '3', 热门视频: '/demo/images/u4183.png,太阳的后裔', 热度:57639,变化: '0'},
    {排名: '4', 热门视频: '/demo/images/u4113.png,绝命卦师', 热度: 57639,变化: '0'},
    {排名: '5', 热门视频: '/demo/images/u4099.png,金水桥边', 热度: 57639,变化: '0'},
    {排名: '6', 热门视频: '/demo/images/u4141.png,奇妙的时光之旅', 热度: 57639,变化: '1'},
    {排名: '7', 热门视频: '/demo/images/u4155.png,情迷睡美人',   热度: 57639,变化: '-1'},
    {排名: '8', 热门视频: '/demo/images/u4169.png,山海经', 热度: 57639,变化: '0'},
    {排名: '9', 热门视频: '/demo/images/u4127.png,柠檬初上', 热度: 57639,变化: '0'},
    {排名: '10', 热门视频: '/demo/images/u4197.png,最好的我们', 热度: 57639,变化: '0'}]},
    {tvName:'爱奇艺',content:[{排名: '1', 热门视频: '/demo/images/u4070.png,父亲的身份', 热度: 57639,变化: '1'},
        {排名: '2', 热门视频: '/demo/images/u4085.png,欢乐颂',   热度: 57639,变化: '-1'},
        {排名: '3', 热门视频: '/demo/images/u4183.png,太阳的后裔', 热度:57639,变化: '0'},
        {排名: '4', 热门视频: '/demo/images/u4113.png,绝命卦师', 热度: 57639,变化: '0'},
        {排名: '5', 热门视频: '/demo/images/u4099.png,金水桥边', 热度: 57639,变化: '0'},
        {排名: '6', 热门视频: '/demo/images/u4141.png,奇妙的时光之旅', 热度: 57639,变化: '1'},
        {排名: '7', 热门视频: '/demo/images/u4155.png,情迷睡美人',   热度: 57639,变化: '-1'},
        {排名: '8', 热门视频: '/demo/images/u4169.png,山海经', 热度: 57639,变化: '0'},
        {排名: '9', 热门视频: '/demo/images/u4127.png,柠檬初上', 热度: 57639,变化: '0'},
        {排名: '10', 热门视频: '/demo/images/u4197.png,最好的我们', 热度: 57639,变化: '0'}]},
    {tvName:'乐视视频',content:[{排名: '1', 热门视频: '/demo/images/u4070.png,父亲的身份', 热度: 57639,变化: '1'},
        {排名: '2', 热门视频: '/demo/images/u4085.png,欢乐颂',   热度: 57639,变化: '-1'},
        {排名: '3', 热门视频: '/demo/images/u4183.png,太阳的后裔', 热度:57639,变化: '0'},
        {排名: '4', 热门视频: '/demo/images/u4113.png,绝命卦师', 热度: 57639,变化: '0'},
        {排名: '5', 热门视频: '/demo/images/u4099.png,金水桥边', 热度: 57639,变化: '0'},
        {排名: '6', 热门视频: '/demo/images/u4141.png,奇妙的时光之旅', 热度: 57639,变化: '1'},
        {排名: '7', 热门视频: '/demo/images/u4155.png,情迷睡美人',   热度: 57639,变化: '-1'},
        {排名: '8', 热门视频: '/demo/images/u4169.png,山海经', 热度: 57639,变化: '0'},
        {排名: '9', 热门视频: '/demo/images/u4127.png,柠檬初上', 热度: 57639,变化: '0'},
        {排名: '10', 热门视频: '/demo/images/u4197.png,最好的我们', 热度: 57639,变化: '0'}]},
    {tvName:'腾讯视频',content:[{排名: '1', 热门视频: '/demo/images/u4070.png,父亲的身份', 热度: 57639,变化: '1'},
        {排名: '2', 热门视频: '/demo/images/u4085.png,欢乐颂',   热度: 57639,变化: '-1'},
        {排名: '3', 热门视频: '/demo/images/u4183.png,太阳的后裔', 热度:57639,变化: '0'},
        {排名: '4', 热门视频: '/demo/images/u4113.png,绝命卦师', 热度: 57639,变化: '0'},
        {排名: '5', 热门视频: '/demo/images/u4099.png,金水桥边', 热度: 57639,变化: '0'},
        {排名: '6', 热门视频: '/demo/images/u4141.png,奇妙的时光之旅', 热度: 57639,变化: '1'},
        {排名: '7', 热门视频: '/demo/images/u4155.png,情迷睡美人',   热度: 57639,变化: '-1'},
        {排名: '8', 热门视频: '/demo/images/u4169.png,山海经', 热度: 57639,变化: '0'},
        {排名: '9', 热门视频: '/demo/images/u4127.png,柠檬初上', 热度: 57639,变化: '0'},
        {排名: '10', 热门视频: '/demo/images/u4197.png,最好的我们', 热度: 57639,变化: '0'}]}
];

function WsTable7() {
    const dataArr=[];
    // for(let i=0;i<data.length;i+=10){
    //     dataArr.push(data.slice(i,i+10));
    // }

    const talbleType3=datas.map(data=>{
        const keys = Object.keys(data.content[0]);

        return (
            <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="wst4text-with-appcol">
                    <AppCol name={data.tvName} col={0}/>
                    <div className="wst4text-div">
                        <Table1 data={data.content} className={'wsT4text tv'}>
                            <Column dataKey={keys[0]} name={keys[0]} key={'col-{keys[0]}'} align='center'/>
                            <Column dataKey={keys[1]} name={keys[1]} key={'col-{keys[1]}'} />
                            <Column dataKey={keys[2]} name={keys[2]} key={'col-{keys[2]}'} />
                            <Column dataKey={keys[3]} name={keys[3]} key={'col-{keys[3]}'} align='center'/>
                        </Table1>
                    </div>
                </div>
            </div>
        );
    });
    return (

        <div className="container-fluid">
            <div className="row">{talbleType3}</div>
            {/*<Flex ws-flex row wrap>*/}
                {/*{talbleType3}*/}
            {/*</Flex>*/}
        </div>
    );

}


export default WsTable7;