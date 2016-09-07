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
            data:[{listTitle:'aaaaaaaa',listDetails:[{detailTitle:'aaab'},{detailTitle:'aaab'},{detailTitle:'aaab'}]},
                {listTitle:'App排行榜',listDetails:[{detailTitle:'aaab'},{detailTitle:'aaab'},{detailTitle:'aaab'}]},
                {listTitle:'电商热词',listDetails:[{detailTitle:'aaab'},{detailTitle:'aaab'},{detailTitle:'aaab'}]},
                {listTitle:'视频热词',listDetails:[{detailTitle:'aaab'},{detailTitle:'aaab'},{detailTitle:'aaab'}]},
                {listTitle:'地域风向标',listDetails:[{detailTitle:'aaab'},{detailTitle:'aaab'},{detailTitle:'aaab'}]},
                {listTitle:'bbbbbbb',listDetails:[{detailTitle:'aaab'},{detailTitle:'aaab'},{detailTitle:'aaab'}]},
                {listTitle:'微信公众号',listDetails:[{detailTitle:'aaab'},{detailTitle:'aaab'},{detailTitle:'aaab'}]},
                {listTitle:'报表1',listDetails:[{detailTitle:'aaab'},{detailTitle:'aaab'},{detailTitle:'aaab'}]},
                {listTitle:'报表2',listDetails:[{detailTitle:'aaab'},{detailTitle:'aaab'},{detailTitle:'aaab'}]}]
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
                    {/*<h1>sssssssssssssssssss</h1>*/}
                    <CustomizedPanel leftData={this.state.data}/>
                </div>
                <img onClick={this.handleClick} id="customized-icon" src="/src/images/customize/customized-button-bg.png"/>
            </div>
        );
    }
});
export default CustomizedButton;
