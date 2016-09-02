/**
 * Created by Administrator on 2016/9/1 0001.
 */
import React from 'react';
import '../css/customizedbutton.less';
import '../../node_modules/webpack-dev-server/client/web_modules/jquery/jquery-1.8.1';
import {CustomizedPanel} from '../../src/index';
var CustomizedButton=React.createClass({
    getInitialState:function () {
        return null;
    },
    handleClick:function () {
       // return alert('aaaaaaaaaaaaaaaaa');
        return  $('#customer-panel-box').animate({marginTop:"-300px"},1000);
    },
    componentDidMount:function () {
        var y=$('#customer-panel-box').offset().top+508;
        return $('#customer-panel-box').css('margin-top',-y);
    },
    render:function () {
        return(
            <div id="icon-div">
                <div id="customer-panel-box" className="customer-panel-box">
                    <h1>sssssssssssssssssss</h1>
                    <CustomizedPanel/>
                </div>
                <img onClick={this.handleClick} id="customized-icon" src="/src/images/customize/customized-button-bg.png"/>
            </div>
        );
    }
});
export default CustomizedButton;
