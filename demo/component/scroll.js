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
 * @date 2016/9/1
 */

import React from 'react';
import '../css/scroll.less'
import 'webpack-dev-server/client/web_modules/jquery/jquery-1.8.1'
import echarts from 'echarts/src/echarts';
import 'echarts/src/chart/line';
import {
    Flex,
    Weixin,
    MoveScroll
} from '../../src/index';
window.Storage = Storage;
var Left=0;
var Scroll= React.createClass({

    getInitialState: function() {
        return {
            data: [0,2, 1, 0, 3, 1, 0]
        };
    },
    scrollmove:function() {
        var speed=30
        var MyMar=setInterval(Marquee,30)
        document.getElementById('demo2').innerHTML=document.getElementById('demo1').innerHTML
        document.getElementById('demo').onmouseover=function() {clearInterval(MyMar)}
        document.getElementById('demo').onmouseout=function() {MyMar=setInterval(Marquee,30)}
        function Marquee(){
            console.info("*****************");
            console.info(document.getElementById('demo2').offsetWidth);
            console.info(document.getElementById('demo').scrollLeft);
            console.info(document.getElementById('demo1').offsetWidth);
            if(document.getElementById('demo2').offsetWidth-document.getElementById('demo').scrollLeft<=0)
                document.getElementById('demo').scrollLeft-=document.getElementById('demo1').offsetWidth
            else{


                //document.getElementById('demo').scrollLeft+=1;
                $("#demo1").animate({left: '-=100'}, "slow");
                //$('#demo').stop(true).animate({'left':'-100px'},1000);
            }
        }
    },
    myanimate:function(){
        //$("#scroll-move").animate({left:'+=50px'});
       /* if($('#scroll-move').offset().left>=400){
            //$("#scroll-move").animate({'left':'0px','visibility':'hidden'},1000);
            $('#scroll-move').stop(true).animate({'left':'600px','visibility':'block'},1000);
            //$("#scroll-move").animate({'left':'0px','visibility':'hidden'},1000);
            $('#scroll-move').css('left','0px');
            //setInterval(this.hideDiv, 1000);
        }
        console.info(show);
        if($('#scroll-move').offset().left<=150&&show==false){
            $('#scroll-move').css('visibility','visible');
        }*/
    },
    componentDidMount: function() {
        //setInterval(this.myanimate,2000);
        this.scrollmove();
        this.scrollCharts(this.state.data);
    },

    scrollCharts:function(dataSet){
        var myChart = echarts.init(document.getElementById('scroll-chart'));
        // 指定图表的配置项和数据
        var option = {
            xAxis : [
                {
                    //坐标轴刻度文字样式设置
                    axisLabel:{
                        textStyle:{
                            color:'#E3EBE9'
                        },
                    },
                    splitLine:{
                        show:false,
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#E3EBE9',
                            //width:8,//这里是为了突出显示加上的，可以去掉
                        }
                    },
                    type : 'category',
                    boundaryGap : false,
                    data : ['20150514','20150515','20150514','20150516','20150517','20150518','20150519','20150520','20150521'],

                },

            ],
            yAxis : [
                {
                    //坐标轴刻度文字样式设置
                    axisLabel:{
                        textStyle:{
                            color:'#E3EBE9'
                        },
                    },
                    //坐标轴样式
                    axisLine:{
                        lineStyle:{
                            color:'#E3EBE9',
                            //width:8,//这里是为了突出显示加上的，可以去掉
                        }
                    },
                    splitLine:{
                        show:false,
                    },
                    type : 'value',
                    show : true,
                    axisLabel : {
                        formatter: '{value}'//y轴数据格式
                    }
                }
            ],
            calculable : true,
            grid:{borderWidth:'0px',},
            series : [
                {
                    symbol:'none',//折线上的圆点去掉
                    smooth:true,//光滑折线
                    name:'最低气温',
                    type:'line',

                    //折线的样式（颜色）
                    itemStyle:{
                        normal:{
                            lineStyle:{
                                color:'#95D2C6',
                            },
                            areaStyle: {type: 'default',
                            color:'#F1F9F7'}
                        }
                    },
                    //标记点的样式
                    markPoint: {
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false//设置标签文字不显示value（注意：必须在itemStyle中的label设置）
                                }
                            }
                        },
                        symbol:'image://images/scroll/scroll-echart-mark.png',
                        symbolSize:'30',
                        data: [
                            {type: 'max', name: '最大值'}
                        ]
                    },
                    data:dataSet,
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表
        myChart.setOption(option);
        window.onresize = myChart.resize;
    },
    changechart:function (index) {
        console.info("######################");
        console.info(index);
        /*this.setState({
         date: data,
         });*/
    },
    render() {
        var self=this;
        var data = [{chart :'money.png',movename:'移网日发展用户数',numone:'111',numtwo:'111',numpersent:'11%',jiantou:'money.png',bar:'money.png'},
            {chart :'money.png',movename:'移网日发展用户数',numone:'222',numtwo:'222',numpersent:'22%',jiantou:'money.png',bar:'money.png'},
            {chart :'money.png',movename:'移网日发展用户数',numone:'333',numtwo:'333',numpersent:'33%',jiantou:'money.png',bar:'money.png'},
            {chart :'money.png',movename:'移网日发展用户数',numone:'444',numtwo:'444',numpersent:'44%',jiantou:'money.png',bar:'money.png'}]
        var rolesListDatainfo = data.map(function (role, index) {
            var id="scroll-move"+index;
            var left=1*index
            return (
                <div id={id} className={index} style={{left: left,position:'relative'}} onClick={self.changechart.bind(this,index)}>
                    <MoveScroll role={role} key={index}/>
                </div>
            );
        })
        return (
            <div className="scroll-main">
                <div id="scroll-chart" ></div>
                <div id="demo" style={{overflow:'hidden',height:'100px',width:'710px'}}>
                    <table cellpadding="0" cellspace="0" border="0">
                        <tr>
                            <td id="demo1"><table width="710" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    {rolesListDatainfo}
                                </tr>
                            </table></td>
                            <td id="demo2"></td>
                        </tr>
                    </table>
                </div>
            </div>

        );
        /*var data1 = {chart :'money.png',movename:'移网日发展用户数',numone:'111',numtwo:'111',numpersent:'11%',jiantou:'money.png',bar:'money.png'};
        var data2 = {chart :'money.png',movename:'移网日发展用户数',numone:'222',numtwo:'222',numpersent:'22%',jiantou:'money.png',bar:'money.png'};
        var data3 = {chart :'money.png',movename:'移网日发展用户数',numone:'333',numtwo:'333',numpersent:'33%',jiantou:'money.png',bar:'money.png'};
        var data4 = {chart :'money.png',movename:'移网日发展用户数',numone:'444',numtwo:'444',numpersent:'44%',jiantou:'money.png',bar:'money.png'};
        return (
            <div classID="scroll-main" className="scroll-main">
                <div id="scroll-move-one" className="scroll-move-one">
                    <MoveScroll  data={data1}/>
                </div>
                <div id="scroll-move-two" className="scroll-move-two">
                    <MoveScroll  data={data2}/>
                </div>
                <div id="scroll-move-three" className="scroll-move-three">
                    <MoveScroll  data={data3}/>
                </div>
                <div id="scroll-move-four" className="scroll-move-four">
                    <MoveScroll  data={data4}/>
                </div>
            </div>
        );*/
    }
});
export default Scroll;
