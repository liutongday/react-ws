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
 * @date 2016/8/16
 */
import React from 'react';
//import echarts from 'echarts'
import '../css/map.less';
import 'echarts/src/chart/map';
import echarts from 'echarts/src/echarts';
//import 'echarts/src/chart/wordCloud';
var Map = React.createClass({

getInitialState: function() {
        var dataSet=[
            {name : '天津', value : 234},
            {name : '爱奇艺', value : 234,x: 180, y: 310},
            {name : '淘宝', value : 103},
            {
                name : '我的奇妙男友',
                symbol: 'image://images/u250.png',     // 自定义标签图形的样式
                symbolSize: 21,
                value:111,
                x: 250,
                y: 260
            }
        ];<<<<<<< .mine
        var dataSet=[
            {name : '天津', value : 234},
            {name : '爱奇艺', value : 234,x: 180, y: 310},
            {name : '淘宝', value : 103},
            {
                name : '我的奇妙男友',
                symbol: 'image://images/u250.png',     // 自定义标签图形的样式
                symbolSize: 21,
                value:111,
                x: 250,
                y: 260
            }
        ];
=======
        var dataSet=[0,2, 1, 0, 3, 1, 0];












>>>>>>> .theirs
        return {
            data: dataSet
        };
    },
    componentDidMount:function(){
        //debugger
        //console.log(this.state.data);
        this.drawMap(this.state.data);
    },
    drawMap:function(dataSet){
        var myMap = echarts.init(document.getElementById('maps'));
        // 指定图表的配置项和数据
        function randomData() {
            return Math.round(Math.random()*1000);
        }
<<<<<<< .mine
        var option = {
            series : [

































=======

        var option = {
            title: {
                text: 'iphone销量',
                subtext: '纯属虚构',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data:['iphone3','iphone4','iphone5']
            },
            visualMap: {
                min: 0,
                max: 2500,
                left: 'left',
                top: 'bottom',
                text: ['高','低'],           // 文本，默认为数值文本
                calculable: true
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: {readOnly: false},
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
>>>>>>> .theirs
                {
                    name: 'Map',
                    type: 'map',
                    mapType: 'china',
                    mapLocation: {
                        x : 'left',
                        y : 'top',
                        height : 500
                    },
                    selectedMode: 'multiple',
                    //控制地图背景颜色
                    itemStyle: {
                        normal: {
                            borderWidth:2,
                            borderColor:'white',
                            color: '#D3E0EE',//地图背景颜色
                            label: {
                                show: false
                            }
                        },
                        emphasis: {                 // 也是选中样式
                            borderWidth:2,
                            borderColor:'#fff',
                            color: '#32cd32',
                            label: {
                                show: true,
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        }
                    },
                    data:[
<<<<<<< .mine
                    ],
                    //控制标签是否显示，也就是如果要显示标签必须有label如果不想要省名称可以将normal设为false
                    markPoint : {
                        symbol: 'roundRect',
                        symbolSize: [30,10],
                        label:{













































































=======
                        {name: '北京',value: randomData() },
                        {name: '天津',value: randomData() },
                        {name: '上海',value: randomData() },
                        {name: '重庆',value: randomData() },
                        {name: '河北',value: randomData() },
                        {name: '安徽',value: randomData() },
                        {name: '新疆',value: randomData() },
                        {name: '浙江',value: randomData() },
                        {name: '江西',value: randomData() },
                        {name: '山西',value: randomData() },
                        {name: '内蒙古',value: randomData() },
                        {name: '吉林',value: randomData() },
                        {name: '福建',value: randomData() },
                        {name: '广东',value: randomData() },
                        {name: '西藏',value: randomData() },
                        {name: '四川',value: randomData() },
                        {name: '宁夏',value: randomData() },
                        {name: '香港',value: randomData() },
                        {name: '澳门',value: randomData() }
                    ]
                },
                {
                    name: 'iphone5',
                    type: 'map',
                    mapType: 'china',
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data:[
                        {name: '北京',value: randomData() },
                        {name: '天津',value: randomData() },
                        {name: '上海',value: randomData() },
                        {name: '广东',value: randomData() },
                        {name: '台湾',value: randomData() },
                        {name: '香港',value: randomData() },
                        {name: '澳门',value: randomData() }
                    ]
                }
            ]
        };
        /*var option = {
            tooltip: {
                trigger: 'item',
                formatter: '{b}'
            },
            series: [
                {
                    type: 'map',
                    mapType: 'china',
                    //selectedMode : 'multiple',
                    color:'white',
                    //geoCoord: source,
                    itemStyle:{
                        normal:{
                            areaStyle:{color:'red'}
                        }
                    },
                    /!*label: {
                        normal:{
                            label:{show:true}
                            ,areaStyle:{color:'green'}   //设置地图背景色的颜色设置
                            ,color:'rgba(255,0,255,0.8)' //刚才说的图例颜色设置
                        },
                        emphasis: {
                            show: true
                        }
                    },*!/
                    markPoint: {//动态标记
                       // large: true,//这个选项，悬浮自动失效
                        symbolSize: 60,
                        symbol:'star',
                        effect : {
                            show: true,
                            color:'red',
                            shadowColor:'red',
                            shadowBlur : 0
                        },
                        itemStyle:{
>>>>>>> .theirs
                            normal:{
                                show:true,
                                textStyle: {
                                    fontFamily: 'sans-serif'
                                },
                            }
                        },
                        itemStyle : {
                            normal:{
                                textStyle: {
                                    color: 'black'
                                },
                                color:'#F8FAFB',//标签颜色
                                label:{
                                    textStyle: {//标签内字体设置
                                        color: 'black'//标签字体颜色
                                    },
                                    formatter: function (data,name) {    //n name   v->value
                                        //debugger;
                                        return data.name;
                                    },
                                }
                            }
                        },
                        data :dataSet,
                    },
                    geoCoord: {
                        '淘宝': [121.4648,31.2891],
                        '天津': [117.4219,39.4189]
                    }
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表
        myMap.setOption(option);
    },
    /*注意return后面的js有自动加;的习惯*/
    render: function() {
        return(
            <div className="mainmap">
                <div id="maps"></div>
                {/*<div className="label1"/>*/}
            </div>
        )
    }
});

export default Map;
