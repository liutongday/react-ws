/**
 * Created by zhangixnjing on 2016/8/15.
 *
 * descprition：事件热度趋势折线图
 */
import React from 'react';
import echarts from 'echarts'
import '../css/chart.less';
var Chart = React.createClass({
    getInitialState: function() {
        var dataSet=[0,2, 1, 0, 3, 1, 0];
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
           /* title : {
                text: '未来一周气温变化',
                subtext: '纯属虚构'
            },*/
            tooltip : {
                trigger: 'axis'
            },
            /*legend: {
                data:['最高气温','最低气温']
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },*/
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['20150514','20150515','20150514','20150516','20150517','20150518','20150519','20150520','20150521']
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
            axisLine:{show: false},
            series : [
                {
                    symbol:'none',//折线上的圆点去掉
                    smooth:true,//光滑折线
                    name:'最低气温',
                    type:'line',
                    data:dataSet,
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
                        label:{
                            normal:{
                                show:false,
                            }
                        },
                        symbol:'circle',
                        symbolSize:'20',
                        data: [
                            {type: 'max', name: '最大值'}
                        ]
                    },
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表
        myChart.setOption(option);
    },
    /*注意return后面的js有自动加;的习惯*/
    render: function() {
        return(
        <div className="line">
            <div className="background0">
                <div className="whit"></div>
                <div className="background1">
                    <div className="background2">
                        <div id="charts" >

                        </div>
                    </div>
                </div>
            </div>
            <button className="left" ></button>
            <button className="right"></button>
            <div className="shownow">
                <input disabled="disabled" className="showtime"value={this.state.time}/>
            </div>
            <div className="x">

            </div>

        </div>


            )
    }
});
export default Chart;

