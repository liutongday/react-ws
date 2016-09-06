/**
 * Created by Administrator on 2016/8/21 0021.
 */
import React from 'react';

import Tab from './tab';
import TabContent from './tabcontent';
var TabHost = React.createClass({
    getInitialState:function () {
        return {data:[
            { title: '移动业务', content: {id:'01',module:'/portal/images/newtab/mobileService.png'}},
            { title: '终端合约', content: {id:'02',module:'/portal/images/newtab/teminalContract.png'}},
        ],
            contentData:{id:'01',module:'/portal/images/newtab/mobileService.png'}};
    },
    handleClick:function(index){
        this.getContentData(index);
    },
    getContentData:function (index) {

        this.setState({contentData:this.state.data[index].content});
    },
    render(){
        var data=this.state.data;
        return (
            <div>
                    <Tab onClick={this.handleClick} data={data}/>
                    <TabContent data={this.state.contentData}/>
            </div>
        );
    }
});
export default TabHost;