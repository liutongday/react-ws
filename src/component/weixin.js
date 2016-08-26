/**
 * Created by zhangxinjing on 2016/7/30.
 * /**
 *
 * descprition：app单个组件
 */
import React from 'react';
//
import '../css/weixin.less';
var Weixin = React.createClass({
    getInitialState(){
        return {
            stateValue:'1',
            tubiaoValue:'',
            inputValue: '57639',
            arrow:'red',
            tupian:'hou'
        };
    },
    componentDidMount: function() {
        // this.getCommonListData();
        var item = this.props.role;
        var id = item.id;
        var jiantou = item.jiantou;
        this.changeHandle(jiantou);
        this.changeTupian(id);
    },
    //右下角箭头切换
    changeHandle:function (index) {
        //var index = '0';
        switch (index) {
            case '1':
                this.setState({arrow:"red"});
                break;
            case '0':
                this.setState({arrow:"ping"});
                break;
            case '-1':
                this.setState({arrow:"green"});
                break;
        }
    },
    //左上角序号背景
    changeTupian:function (index) {
        //var index = 2;
        if(index>3){
            this.setState({tupian:"hou"});
        }
        else {
            this.setState({tupian:"qian"});
        }
    },
    render:function () {
        var data = this.props.role;
        /*var item = this.porps.role:
        var id = item.id;
        var tupian = item.tupian;
        var name = item.name;
        var number = item.number;
        var jiantou = item.jiantou;*/
        //var data = {id :'1',tupian:'u797.png',name:'微信',number:'222222',jiantou:'1'};
        var chart ="/src/images/"+data.tupian;
        var name = data.name;
        //var chart ="/demo/images/u797.png";
        return(
            <div className="main">
                <div className="xuhao">
                    <input disabled="disabled" className={this.state.tupian} change={this.changeTupian}/>
                    <p className="shuzi">{data.id}</p>
                    <img className="weixin" src={chart}/>
                    <input disabled="disabled" className="name" value={name} />
                    <input disabled="disabled" className="usenumber" value={data.number}/>
                    <input disabled="disabled" className={this.state.arrow} change={this.changeHandle}/>
                </div>
            </div>
        )
    }
});
export default Weixin;
