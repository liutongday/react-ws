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
import Map from '../../component/map';
import {
    Selector,
    DatePicker,
    Title,
    TabHost,
    ModulePartition,
    BigTabHost
} from '../../../src/index';
import CheckboxGroup from '../../component/CheckboxGroup';
import HotEvent from '../../component/HotEvent';
import Table from '../../component/wsTableCol4';
import LeftNavigation from '../../component/LeftNavigation';
import WsTable5 from '../../component/wsST4Area';
import WsTable9 from '../../component/wsT4app';
import '../../css/regionalWeathervane.less';
var RegionalWeathervane=React.createClass(
    {
        getInitialState: function () {
            var data1=[{proId:"111",proName:"全国"}, {proId:"036",proName:"浙江"}, {proId:"011",proName:"北京"},
                {proId:"031",proName:"上海"}, {proId:"013",proName:"天津"}, {proId:"083",proName:"重庆"},
                {proId:"097",proName:"黑龙江"}, {proId:"090",proName:"吉林"}, {proId:"091",proName:"辽宁"},
                {proId:"010",proName:"内蒙古"}, {proId:"089",proName:"新疆"}, {proId:"087",proName:"甘肃"},
                {proId:"070",proName:"青海"}, {proId:"088",proName:"宁夏"}, {proId:"084",proName:"陕西"},
                {proId:"019",proName:"山西"}, {proId:"017",proName:"山东"}, {proId:"018",proName:"河北"},
                {proId:"076",proName:"河南"}, {proId:"030",proName:"安徽"}, {proId:"034",proName:"江苏"},
                {proId:"071",proName:"湖北"}, {proId:"074",proName:"湖南"}, {proId:"075",proName:"江西"},
                {proId:"051",proName:"广东"}, {proId:"059",proName:"广西"}, {proId:"081",proName:"四川"},
                {proId:"086",proName:"云南"}, {proId:"085",proName:"贵州"}, {proId:"038",proName:"福建"},
                {proId:"050",proName:"海南"}, {proId:"079",proName:"西藏"}];
            return {
                data: data1,
                tabledata:null,
                data:null,
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
        render() {
            var areaTableData=[
                {排名: '1', 热搜词: '微信网页版', 热度: 9394748,变化: '1'},
                {排名: '2', 热搜词: '京东',   热度: 9394748,变化: '-1'},
                {排名: '3', 热搜词: '淘宝', 热度: 9394748,变化: '0'},
                {排名: '4', 热搜词: '爱奇艺', 热度: 9394748,变化: '0'},
                {排名: '5', 热搜词: '斗鱼TV', 热度: 9394748,变化: '0'},
                {排名: '6', 热搜词: '鹿晗退出跑男录制', 热度: 9394748,变化: '1'},
                {排名: '7', 热搜词: '优酷',   热度: 9394748,变化: '-1'},
                {排名: '8', 热搜词: '熊猫TV', 热度: 9394748,变化: '0'},
                {排名: '9', 热搜词: '亲爱的翻译官', 热度: 9394748,变化: '0'},
                {排名: '10', 热搜词: '腾讯视频', 热度: 9394748,变化: '0'},

            ];
            var appTableData=[
                {排名: '1', APP名称: '/site/images/table/weixin.png,微信', 活跃用户数: 57639,变化: '1'},
                {排名: '2', APP名称: '/site/images/table/qq.png,QQ',   活跃用户数: 53958,变化: '-1'},
                {排名: '3', APP名称: '/site/images/table/weibo.png,新浪微博', 活跃用户数:10184,变化: '0'},
                {排名: '4', APP名称: '/site/images/table/u7942.png,腾讯视频', 活跃用户数: 8643,变化: '0'},
                {排名: '5', APP名称: '/site/images/table/u7954.png,爱奇艺', 活跃用户数: 6689,变化: '0'},
                {排名: '6', APP名称: '/site/images/table/u785.png,蘑菇街', 活跃用户数: 5763,变化: '1'},
                {排名: '7', APP名称: '/site/images/table/u777.png,唯品会',   活跃用户数: 5395,变化: '-1'},
                {排名: '8', APP名称: '/site/images/table/u735.png,PPTV聚力', 活跃用户数:1018 ,变化: '0'},
                {排名: '9', APP名称: '/site/images/table/qqkj.png,QQ空间', 活跃用户数: 864,变化: '0'},
                {排名: '10', APP名称: '/site/images/table/zhfb.png,旺信', 活跃用户数:668 ,变化: '0'},

                {排名: '1', APP名称: '/site/images/table/weixin.png,微信', 活跃用户数: 57639,变化: '1'},
                {排名: '2', APP名称: '/site/images/table/qq.png,QQ',   活跃用户数: 53958,变化: '-1'},
                {排名: '3', APP名称: '/site/images/table/weibo.png,新浪微博', 活跃用户数:10184,变化: '0'},
                {排名: '4', APP名称: '/site/images/table/u7942.png,腾讯视频', 活跃用户数: 8643,变化: '0'},
                {排名: '5', APP名称: '/site/images/table/u7954.png,爱奇艺', 活跃用户数: 6689,变化: '0'},
                {排名: '6', APP名称: '/site/images/table/u785.png,蘑菇街', 活跃用户数: 5763,变化: '1'},
                {排名: '7', APP名称: '/site/images/table/u777.png,唯品会',   活跃用户数: 5395,变化: '-1'},
                {排名: '8', APP名称: '/site/images/table/u735.png,PPTV聚力', 活跃用户数:1018 ,变化: '0'},
                {排名: '9', APP名称: '/site/images/table/qqkj.png,QQ空间', 活跃用户数: 864,变化: '0'},
                {排名: '10', APP名称: '/site/images/table/zhfb.png,旺信', 活跃用户数:668 ,变化: '0'},

                {排名: '1', APP名称: '/site/images/table/weixin.png,微信', 活跃用户数: 57639,变化: '1'},
                {排名: '2', APP名称: '/site/images/table/qq.png,QQ',   活跃用户数: 53958,变化: '-1'},
                {排名: '3', APP名称: '/site/images/table/weibo.png,新浪微博', 活跃用户数:10184,变化: '0'},
                {排名: '4', APP名称: '/site/images/table/u7942.png,腾讯视频', 活跃用户数: 8643,变化: '0'},
                {排名: '5', APP名称: '/site/images/table/u7954.png,爱奇艺', 活跃用户数: 6689,变化: '0'},
                {排名: '6', APP名称: '/site/images/table/u785.png,蘑菇街', 活跃用户数: 5763,变化: '1'},
                {排名: '7', APP名称: '/site/images/table/u777.png,唯品会',   活跃用户数: 5395,变化: '-1'},
                {排名: '8', APP名称: '/site/images/table/u735.png,PPTV聚力', 活跃用户数:1018 ,变化: '0'},
                {排名: '9', APP名称: '/site/images/table/qqkj.png,QQ空间', 活跃用户数: 864,变化: '0'},
                {排名: '10', APP名称: '/site/images/table/zhfb.png,旺信', 活跃用户数:668 ,变化: '0'},

                {排名: '1', APP名称: '/site/images/table/weixin.png,微信', 活跃用户数: 57639,变化: '1'},
                {排名: '2', APP名称: '/site/images/table/qq.png,QQ',   活跃用户数: 53958,变化: '-1'},
                {排名: '3', APP名称: '/site/images/table/weibo.png,新浪微博', 活跃用户数:10184,变化: '0'},
                {排名: '4', APP名称: '/site/images/table/u7942.png,腾讯视频', 活跃用户数: 8643,变化: '0'},
                {排名: '5', APP名称: '/site/images/table/u7954.png,爱奇艺', 活跃用户数: 6689,变化: '0'},
                {排名: '6', APP名称: '/site/images/table/u785.png,蘑菇街', 活跃用户数: 5763,变化: '1'},
                {排名: '7', APP名称: '/site/images/table/u777.png,唯品会',   活跃用户数: 5395,变化: '-1'},
                {排名: '8', APP名称: '/site/images/table/u735.png,PPTV聚力', 活跃用户数:1018 ,变化: '0'},
                {排名: '9', APP名称: '/site/images/table/qqkj.png,QQ空间', 活跃用户数: 864,变化: '0'},
                {排名: '10', APP名称: '/site/images/table/zhfb.png,旺信', 活跃用户数:668 ,变化: '0'},
            ];
            return (
                <div className="Regional-Weather-vane">
                    <ModulePartition id="area_module" name="地域风向标" en_name="Regional  Weather-vane"/>
                    <DatePicker callbackParent={this.onDateChanged}/>
                    <Selector  callbackParent={this.onProChanged}/>
                    <Title icon="regional-weather-vane" name="地域热搜"/>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-12 col-md-7"><Map/></div>
                            <div className="col-xs-12 col-md-5 regional-table"><WsTable5 data={areaTableData}/></div>
{/*=======
                            <div className="col-xs-12 col-md-7">
                                <Map/>
                            </div>
                            <div className="col-xs-12 col-md-5 regional-table">
                                <WsTable5/>
                            </div>
>>>>>>> origin/zhangxinjing*/}
                        </div>
                    </div>
                    <Title icon="regional-horizontal-benchmarking" name="地域横向对标"/>
                    <BigTabHost/>
                    <TabHost/>
                    <WsTable9 data={appTableData}/>
                </div>
            );
        }
    }
);
export default RegionalWeathervane;
