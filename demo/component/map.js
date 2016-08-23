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
import echarts from 'echarts'
import '../css/map.less';
import 'echarts/map/js/china';

var Map = React.createClass({

    getInitialState: function() {
        var dataSet=[0,2, 1, 0, 3, 1, 0];
        return {
            data: dataSet
        };
    },
    componentDidMount:function(){
        //debugger
        //console.log(this.state.data);
        this.drawMap();
    },
    drawMap:function(){
        var myMap = echarts.init(document.getElementById('maps'));
        // 指定图表的配置项和数据
        function randomData() {
            return Math.round(Math.random()*1000);
        }

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
                {
                    name: 'iphone3',
                    type: 'map',
                    mapType: 'china',
                    roam: false,
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
                        {name: '重庆',value: randomData() },
                        {name: '河北',value: randomData() },
                        {name: '河南',value: randomData() },
                        {name: '云南',value: randomData() },
                        {name: '辽宁',value: randomData() },
                        {name: '黑龙江',value: randomData() },
                        {name: '湖南',value: randomData() },
                        {name: '安徽',value: randomData() },
                        {name: '山东',value: randomData() },
                        {name: '新疆',value: randomData() },
                        {name: '江苏',value: randomData() },
                        {name: '浙江',value: randomData() },
                        {name: '江西',value: randomData() },
                        {name: '湖北',value: randomData() },
                        {name: '广西',value: randomData() },
                        {name: '甘肃',value: randomData() },
                        {name: '山西',value: randomData() },
                        {name: '内蒙古',value: randomData() },
                        {name: '陕西',value: randomData() },
                        {name: '吉林',value: randomData() },
                        {name: '福建',value: randomData() },
                        {name: '贵州',value: randomData() },
                        {name: '广东',value: randomData() },
                        {name: '青海',value: randomData() },
                        {name: '西藏',value: randomData() },
                        {name: '四川',value: randomData() },
                        {name: '宁夏',value: randomData() },
                        {name: '海南',value: randomData() },
                        {name: '台湾',value: randomData() },
                        {name: '香港',value: randomData() },
                        {name: '澳门',value: randomData() }
                    ]
                },
                {
                    name: 'iphone4',
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
                            normal:{
                                label:{show:false}
                            }
                        },
                        data: [
                            {
                            name: '某个坐标',
                            coord: [100, 200]
                        }]
                    },
                    /!*markPoint: {
                        label:{
                            normal:{
                                show:true,
                            }
                        },
                        symbol:'circle',
                        data : [
                            {name:'电光组合',value:95},
                            {name:'陈皮组合',value:30},
                            {name:'大梦壮汉',value:20},
                            {name:'老肥将军',value:10},
                            {
                                name:"电光组合",
//                          symbol: 'image://demo/image/map.png',
                                x: 30,
                                y: 10
                            },
                            {
                                name:"老肥将军",
//                          symbol: 'image://demo/image/map.png',
                                x: 40,
                                y: 40
                            }
                        ]
                    },*!/

                },

            ]
        };*/

        // 使用刚指定的配置项和数据显示图表
        myMap.setOption(option);

    },

    /*注意return后面的js有自动加;的习惯*/
    render: function() {
        return(
            <div className="mainmap">
                <div id="maps"></div>
            </div>
        )
    }
});
export default Map;
