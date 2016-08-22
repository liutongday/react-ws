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
        ];
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
        var option = {
            series : [
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
                    ],
                    //控制标签是否显示，也就是如果要显示标签必须有label如果不想要省名称可以将normal设为false
                    markPoint : {
                        symbol: 'roundRect',
                        symbolSize: [30,10],
                        label:{
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
