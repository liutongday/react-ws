/**
 * Created by Administrator on 2016/8/13.
 */
import React from 'react';
import '../css/title.less';
var Title = React.createClass({
    getInitialState(){
        return {
            stateValue:'APP活跃用户总排行',
        };
    },
   /* componentDidMount: function() {
        var item = this.props.role;
        var name = item.name;
        this.changeHandle(name);
    },*/
    render:function () {
        var data = this.props.role;
        //var data = {tupian:'u797.png',name:'微信'};
        var chart ="/src/images/"+data.tupian;
        var name = data.name;
        //var chart ="/demo/images/u797.png";
        return(
            <div className="main">
                <div className="xuhao">
                    <input disabled="disabled" className={this.state.tupian} change={this.changeTupian}></input>
                    <p className="shuzi">{data.id}</p>
                    <img className="weixin" src={chart}/>
                    <input disabled="disabled" className="name" value={name} ></input>
                    <input disabled="disabled" className="usenumber" value={data.number}/>
                    <input className={this.state.arrow} change={this.changeHandle}/>
                </div>
            </div>
        )
    }
});
export default Title;