/**
 * Created by Administrator on 2016/9/1 0001.
 */
import React from 'react';
import '../css/customizedbutton.less';
import '../../node_modules/webpack-dev-server/client/web_modules/jquery/jquery-1.8.1';
import CustomizedPanel from '../component/customizedpanel'
var CustomizedButton=React.createClass({
    getInitialState:function () {
        return {
            data:[{listTitle:'aaaaaaaa'},{listTitle:'App排行榜'},
                {listTitle:'电商热词'}, {listTitle:'视频热词'},
                {listTitle:'地域风向标'},{listTitle:'bbbbbbb'},
                {listTitle:'微信公众号'}, {listTitle:'报表1'},
                {listTitle:'报表2'}],leftPanelTitle:'核心指标'
        };
    },
    handleClick:function () {
        return  $('#customer-panel-box').animate({marginTop:"0px"},500);
    },
    componentDidMount:function () {
        var y=$('#customer-panel-box').offset().top+508;
        return $('#customer-panel-box').css('margin-top',-y);
    },

    render:function () {
        return(
            <div id="customized-div">
                <div id="customer-panel-box">
                    <CustomizedPanel leftData={this.state.data} leftPanelTitle={this.state.leftPanelTitle}/>
                </div>
                <img onClick={this.handleClick} id="customized-icon" src="/src/images/customize/customized-button-bg.png"/>
            </div>
        );
    }
});
export default CustomizedButton;
