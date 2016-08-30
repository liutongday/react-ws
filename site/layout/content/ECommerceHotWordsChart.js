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
import moment from 'moment';
import HotWord from '../../component/hotword';
import {
    Selector,
    DatePicker,
    DatePickerMonth,
    Title,
    ModulePartition,
    AppCol
} from '../../../src/index';
import WsTable6 from '../../component/wsT4text';
import WsTable4 from '../../component/wsSimpleT4';
import '../css/ECommerceHotWordsChart.less';
var ECommerceHotWordsChart=React.createClass({
    getInitialState: function () {
        return {
            echotword:null,
            ectable:null,
            pro:'111',
            date: moment()
        };
    },
    getCommonListData: function(proId,date){
        var param={
            proId:proId,
            date:date
        }
        var self = this;
        console.info("33333");
        console.info(param);
        //缓存数据
        var rolesListData = [{id :'1',tupian:'u797.png',name:'微信',number:'222222',jiantou:'1'},
            {id :'2',tupian:'u825.png',name:'QQ',number:'33333',jiantou:'0'},
            {id :'3',tupian:'u715.png',name:'腾讯视频',number:'44444',jiantou:'-1'},
            {id :'4',tupian:'u915.png',name:'手机淘宝',number:'55555',jiantou:'1'},
            {id :'5',tupian:'u7950.png',name:'支付宝',number:'55555',jiantou:'1'},
            {id :'6',tupian:'u7954.png',name:'爱奇艺视频',number:'55555',jiantou:'1'},
            {id :'7',tupian:'u7958.png',name:'搜狗输入法',number:'55555',jiantou:'1'},
            {id :'8',tupian:'u7962.png',name:'手机百度',number:'55555',jiantou:'-1'},
            {id :'9',tupian:'u7966.png',name:'百度地图',number:'55555',jiantou:'1'},
            {id :'10',tupian:'u7970.png',name:'爱奇艺PPS影音',number:'55555',jiantou:'1'},
            {id :'11',tupian:'u7975.png',name:'QQ音乐',number:'55555',jiantou:'1'},
            {id :'12',tupian:'u7979.png',name:'酷狗音乐',number:'55555',jiantou:'0'},
            {id :'13',tupian:'u7983.png',name:'高德地图',number:'55555',jiantou:'1'},
            {id :'14',tupian:'u7987.png',name:'PPTV聚力',number:'55555',jiantou:'1'},
            {id :'15',tupian:'u7991.png',name:'新浪微博',number:'55555',jiantou:'1'},
            {id :'16',tupian:'u7995.png',name:'腾讯手机管家',number:'55555',jiantou:'0'},
            {id :'17',tupian:'u7999.png',name:'UC浏览器',number:'55555',jiantou:'1'},
            {id :'18',tupian:'u8003.png',name:'京东',number:'55555',jiantou:'1'},
            {id :'19',tupian:'u8007.png',name:'360手机卫士',number:'55555',jiantou:'1'},
            {id :'20',tupian:'u8011.png',name:'QQ空间',number:'55555',jiantou:'-1'},];
        //fectch请求
        fetch('http://10.0.94.103:8080/api/testredis',{
            credentials:'same-origin',
            method: 'POST',
            //method: 'GET',
            mode:'cors',//跨域请求
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                ///"User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36"
            },
            //body:param
            body:JSON.stringify(param)
            //body: JSON.parse(str)u
            //body: JSON.stringify(str)
            //body:"{name:'Hubot',login:'hubot'}"
        })
            .then(function(res) {
                console.log("Response succeeded?", JSON.stringify(res.ok));
                //console.log(res.json());
                return res.json();
            })
            .then(function(dataSource) {
                console.log(dataSource);
                //console.log(self);//此时的this值已经改变（undefined）
                self.setState({
                    data: dataSource});
                //self.props.callbackParent(dataSource);
                //console.log(self.props.data);
            })
            .catch(function(e) {
                console.log("fetch fail",e.toString());
                /*self.setState({
                 data: rolesListData});
                 self.props.callbackParent(rolesListData);*/
            })

        /*fetch("http://blog.parryqiu.com", {
         method: 'GET',
         mode: 'no-cors',
         cache: 'default'
         }).then(function(response){console.log(response)})*/
    },
    onProChanged: function (proId) {
        console.info("11111");
        console.info(proId);
        this.setState({
            pro:proId
        });
        this.getCommonListData(proId,this.state.date);
    },
    onDateChanged: function (date) {
        console.info("22222");
        console.info(date);
        this.setState({
            date: date
        });
        this.getCommonListData(this.state.pro,date);
    },
    componentDidMount: function() {
        this.getCommonListData(this.state);
    },
    render(){
        return (
            <div className="ECommerce-Hot-Words-Chart">
                <ModulePartition id="busi_module" name="电商热词风云榜" en_name="E-Commerce Hot Words Chart"/>
                <DatePicker callbackParent={this.onDateChanged}/>
                <Selector  callbackParent={this.onProChanged}/>
                <Title icon="e-commerce-hot-word" name="电商热词"/>
                <div className="ec-word-table">
                    <div className="ec-hotword">
                        <HotWord echotword={this.state.echotword}/>
                    </div>
                    <div className="ec-wsTable4">
                        <WsTable4 ectable={this.state.ectable}/>
                    </div>
                </div>
                <Title icon="vs" name="电商热词横向对标"/>
               <div className="ec-col-table">
                    <div className="ec-col-tabl1">
                        <AppCol name="京东" col={0}/>
                        <div className="ec-col-table-WsTable6" >
                            <WsTable6/>
                        </div>
                    </div>
                    <div className="ec-col-table2">
                        <AppCol name="天猫" col={0}/>
                        <div className="ec-col-table-WsTable6">
                            <WsTable6/>
                        </div>
                    </div>
                   <div className="ec-col-table3">
                       <AppCol name="淘宝" col={0}/>
                       <div className="ec-col-table-WsTable6">
                           <WsTable6/>
                       </div>
                   </div>
                </div>
                <Title icon="hot-commodity" name="热门商品"/>
                <div className="ec-col-table">
                    <div className="ec-col-tabl1">
                        <AppCol name="京东" col={0}/>
                        <div className="ec-col-table-WsTable6" >
                            <WsTable6/>
                        </div>
                    </div>
                    <div className="ec-col-table2">
                        <AppCol name="天猫" col={0}/>
                        <div className="ec-col-table-WsTable6">
                            <WsTable6/>
                        </div>
                    </div>
                    <div className="ec-col-table3">
                        <AppCol name="淘宝" col={0}/>
                        <div className="ec-col-table-WsTable6">
                            <WsTable6/>
                        </div>
                    </div>
                </div>
                <Title icon="hot-class" name="热门品类"/>
                <div className="ec-col-table">
                    <div className="ec-col-tabl1">
                        <AppCol name="京东" col={0}/>
                        <div className="ec-col-table-WsTable6" >
                            <WsTable6/>
                        </div>
                    </div>
                    <div className="ec-col-table2">
                        <AppCol name="天猫" col={0}/>
                        <div className="ec-col-table-WsTable6">
                            <WsTable6/>
                        </div>
                    </div>
                    <div className="ec-col-table3">
                        <AppCol name="淘宝" col={0}/>
                        <div className="ec-col-table-WsTable6">
                            <WsTable6/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
export default ECommerceHotWordsChart;
