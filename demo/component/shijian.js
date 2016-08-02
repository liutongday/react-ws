/**
 * Created by Administrator on 2016/8/2.
 */
import React from 'react';
var NavRight = React.createClass({
    handleClickBack: function(event) {
        this.className = "action2";
        console.log("返回");
    },
    handleClickOpen: function(event) {
        console.log("开通");
    },
    handleClickUpdate: function(event) {
        console.log("补办");
    },
    handleClickRecharge: function(event) {
        console.log("充值");
    },
    handleClickSearch: function(event) {
        console.log("查询");
    },
    render: function() {
        var action = 'action';
        return (
            <div>
                <ul id="nav_u">
                    <li id="back" onClick={this.handleClickBack} className={action}>返回</li>
                    <li id="open_card" onClick={this.handleClickOpen} className={action}>开通</li>
                    <li id="update_card" onClick={this.handleClickUpdate} className={action}>补办</li>
                    <li id="recharge_card" onClick={this.handleClickRecharge} className={action}>充值</li>
                    <li id="search_card" onClick={this.handleClickSearch} className={action}>查询</li>
                </ul>
            </div>
        )
    }
});
export default NavRight;