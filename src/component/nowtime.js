/**
 * Created by zhan on 2016/8/4.
 */
import React from 'react';
import classNames from 'classnames';
import * as ReactDOM from 'react-dom';

class Nowtime extends  React.Component {
    //初始化状态机
    constructor(props) {
        super(props);
        //状态机赋初始值
        this.state = {
          date: '',
        };


    }
    //执行日期格式化
    fmtDate () {
        let date = new Date();
        // date = {this.props.date};
        let year = date.getFullYear();
        if (month < 10) {
            month = "0" + month;
        }
        let month = date.getMonth() + 1;
        let day = date.getDate();
        if (day < 10) {
            day = "0" + day;
        }
        let hour = date.getHours();
        if (hour < 10) {
            hour = "0" + hour;
        }
        let minute = date.getMinutes();
        if (minute < 10) {
            minute = "0" + minute;
        }
        let second = date.getSeconds();
        if (second < 10) {
            second = "0" + second;
        }
       // console.log(year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second);
        let dateStr = year + "年" + month + "月" + day + "日  " + hour + ":" + minute + ":" + second;
       // console.log(dateStr)
        //把格式化的日期装载状态机
        this.setState({
            date: dateStr,
        });
    }
    //事件绑定，使函数每秒刷新一次
    timer = ()=>{
        let that = this;
        setInterval(function () {
            that.fmtDate();
        }, 1000);
    }
    //挂载dom，在初始化渲染之后立刻调用函数
    componentDidMount() {
        this.timer();
    }
    //关闭页面的时候清除定时器
    componentWillUnmount() {
        this.timer && clearInterval(this.timer);
    }
    //渲染DOM
    render() {
        return (
            <div id="nowtime">
                <span>{this.state.date}</span>
            </div>
        )
    }
}
export default Nowtime;
