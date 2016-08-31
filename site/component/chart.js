/**
 * Created by zhangixnjing on 2016/8/15.
 *
 * descprition：事件热度趋势折线图
 */
import React from 'react';
//import echarts from 'echarts'
import echarts from 'echarts/src/echarts';
import 'echarts/src/chart/line';
import '../css/chart.less';
var Chart = React.createClass({
    getInitialState: function() {
        var dataSet=[0,2, 1, 0, 5, 1, 0];
        return {
            time:'20160517',
            data: dataSet
        };
    },

    componentDidMount:function(){
        //debugger
        console.log(this.state.data);
        this.drawCharts(this.state.data);
    },
    drawCharts:function(dataSet){
        var myChart = echarts.init(document.getElementById('charts'));

        // 指定图表的配置项和数据
        var option = {
            xAxis : [
                {
                   /* axisTick:{
                        show:false,
                    },*/
                    axisLine:{
                        show:false,
                    },
                    splitLine:{
                        show:false,
                    },
                    type : 'category',
                    boundaryGap : false,
                    data : ['20150514','20150515','20150514','20150516','20150517','20150518','20150519','20150520']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    show : false,
                    axisLabel : {
                        formatter: '{value}'//y轴数据格式
                    }
                }
            ],
            grid:{//设置echart边框
                borderWidth:0
            },
            calculable : true,
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
                                color:'#9e9e9e',
                            }
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
                        symbol:'circle',
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
        //echarts 随div 变化自适应
        window.onresize = myChart.resize;
    },
    /*注意return后面的js有自动加;的习惯*/
    render: function() {
        return(
        <div className="line">
            <div className="background0">
                <div id="charts"></div>
            </div>
            <div className="shownow">
                <input disabled="disabled" className="showtime"value={this.state.time}/>
            </div>
            <div className="x">
                <button className="left" ></button>
                <button className="right"></button>
            </div>
        </div>
            )
    }
});
export default Chart;

