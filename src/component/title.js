/**
 * Created by zhangixnjing on 2016/8/13.
 * descprition：标题组件
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
            <div className="title">
                <img className="chart" src={chart}/>
                <input disabled="disabled" className="titlename" value={name} ></input>
            </div>
        )
    }
});
export default Title;