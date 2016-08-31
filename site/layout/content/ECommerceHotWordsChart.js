/**
 *
 * <p>Title: BONC - React </p>
 *
 * <p>Description:  </p>
 *
 * <p>Copyright: Copyright BONC(c) 2013 - 2025 </p>
 *
 * <p>Company: 北京东方国信科技股份有限公司 </p>
 *
 * @author zhangxinjing
 * @date 2016/8/25
 */
import React from 'react';
import HotWord from '../../component/hotword';
import {
    Selector,
    DatePicker,
    DatePickerMonth,
    Title,
    ModulePartition,
    AppCol
} from '../../../src/index';
import WsTable6 from '../../component/baseTextTable';
import WsTable4 from '../../component/wsSimpleT4';
import '../css/ECommerceHotWordsChart.less';
var ECommerceHotWordsChart=React.createClass({
    getInitialState: function () {

        return {
            data: null
        };
    },
    onChildChanged: function (newState) {
        console.info("############");
        console.info(newState);
        this.setState({
            data: newState
        });
    },
    render(){
        var bigHotData= [
            {排名: '1', 热搜词: '雀氏纸尿裤', 热度: 9394748,变化: '1'},
            {排名: '2', 热搜词: '宜家',   热度: 9394748,变化: '-1'},
            {排名: '3', 热搜词: '女装', 热度: 9394748,变化: '0'},
            {排名: '4', 热搜词: '巧克力', 热度: 9394748,变化: '0'},
            {排名: '5', 热搜词: 'macbook', 热度: 9394748,变化: '0'},
            {排名: '6', 热搜词: '苹果', 热度: 9394748,变化: '1'},
            {排名: '7', 热搜词: '防晒霜',   热度: 9394748,变化: '-1'},
            {排名: '8', 热搜词: '凉鞋', 热度: 9394748,变化: '0'},
            {排名: '9', 热搜词: '汽车', 热度: 9394748,变化: '0'},
            {排名: '10', 热搜词: '小米', 热度: 9394748,变化: '0'},

        ];
        var itemHotData=[
            {排名: '1', 热搜词: '雀氏纸尿裤', 热度: 57639320,变化: '1'},
            {排名: '2', 热搜词: '宜家',   热度: 57639320,变化: '-1'},
            {排名: '3', 热搜词: '女装', 热度:57639320,变化: '0'},
            {排名: '4', 热搜词: '巧克力', 热度: 57639320,变化: '0'},
            {排名: '5', 热搜词: 'macbook', 热度: 57639320,变化: '0'},
            {排名: '6', 热搜词: '苹果', 热度: 57639320,变化: '1'},
            {排名: '7', 热搜词: '防晒霜',   热度: 57639320,变化: '-1'},
            {排名: '8', 热搜词: '凉鞋', 热度: 57639320,变化: '0'},
            {排名: '9', 热搜词: '汽车', 热度: 57639320,变化: '0'},
            {排名: '10', 热搜词: '小米', 热度: 57639320,变化: '0'},];
        return (
            <div className="ECommerce-Hot-Words-Chart">
                <ModulePartition id="busi_module" name="电商热词风云榜" en_name="E-Commerce Hot Words Chart"/>
                <DatePicker/>
                <Selector initialState={this.state.data} callbackParent={this.onChildChanged}/>
                <Title icon="e-commerce-hot-word" name="电商热词"/>
                <div className="ec-word-table">
                    <div className="ec-hotword">
                        <HotWord/>
                    </div>
                    <div className="ec-wsTable4">
                        <WsTable4 data={bigHotData}/>
                    </div>

                </div>
                <Title icon="vs" name="电商热词横向对标"/>
               <div className="ec-col-table">
                    <div className="ec-col-tabl1">
                        <AppCol name="京东" col={0}/>
                        <div className="ec-col-table-WsTable6" >
                            <WsTable6 data={itemHotData}/>
                        </div>
                    </div>
                    <div className="ec-col-table2">
                        <AppCol name="天猫" col={0}/>
                        <div className="ec-col-table-WsTable6">
                            <WsTable6 data={itemHotData}/>
                        </div>
                    </div>
                   <div className="ec-col-table3">
                       <AppCol name="淘宝" col={0}/>
                       <div className="ec-col-table-WsTable6">
                           <WsTable6 data={itemHotData}/>
                       </div>
                   </div>
                </div>
                <Title icon="hot-commodity" name="热门商品"/>
                <div className="ec-col-table">
                    <div className="ec-col-tabl1">
                        <AppCol name="京东" col={0}/>
                        <div className="ec-col-table-WsTable6" >
                            <WsTable6 data={itemHotData}/>
                        </div>
                    </div>
                    <div className="ec-col-table2">
                        <AppCol name="天猫" col={0}/>
                        <div className="ec-col-table-WsTable6">
                            <WsTable6 data={itemHotData}/>
                        </div>
                    </div>
                    <div className="ec-col-table3">
                        <AppCol name="淘宝" col={0}/>
                        <div className="ec-col-table-WsTable6">
                            <WsTable6 data={itemHotData}/>
                        </div>
                    </div>
                </div>
                <Title icon="hot-class" name="热门品类"/>
                <div className="ec-col-table">
                    <div className="ec-col-tabl1">
                        <AppCol name="京东" col={0}/>
                        <div className="ec-col-table-WsTable6" >
                            <WsTable6 data={itemHotData}/>
                        </div>
                    </div>
                    <div className="ec-col-table2">
                        <AppCol name="天猫" col={0}/>
                        <div className="ec-col-table-WsTable6">
                            <WsTable6 data={itemHotData}/>
                        </div>
                    </div>
                    <div className="ec-col-table3">
                        <AppCol name="淘宝" col={0}/>
                        <div className="ec-col-table-WsTable6">
                            <WsTable6 data={itemHotData}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
export default ECommerceHotWordsChart;
