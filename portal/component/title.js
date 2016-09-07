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
        let icon = this.props.icon;
        let chart ="/portal/images/title/"+icon+".png";
        let name = this.props.name;
        console.log(name);
        return(
            <div className="title">
                <img className="chart" src={chart}/>
                <input disabled="disabled" className="titlename" value={name} ></input>
            </div>
        )
    }
});
export default Title;