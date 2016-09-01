/**
 * Created by Administrator on 2016/8/21 0021.
 */
import React from 'react';

import BigTab from './bigtab'
import BigTabContent from './bigtabcontent'
var BigTabHost = React.createClass({
    getInitialState:function () {
        return {data:[
            { title: 'APP排行榜', content: {name:'1' }},
            { title: '热点新闻', content: {name:'2' }},
            { title: '电商热词', content: {name:'3' }},
            { title: '视频热词', content: {name:'4' }},
            { title: '微信公众号', content: {name:'5' }},
        ],contentData:{name:'1' }};

    },
    handleClick:function(index){
       // return  console.log(index +"  tabhost#######################");
        this.getContentData(index);
    },
    getContentData:function (index) {
        this.setState({contentData:this.state.data[index].content});
    },
    render(){
        var data=this.state.data;
        return (
            <div>
                    <BigTab onClick={this.handleClick} data={data}/>
                    <BigTabContent data={this.state.contentData} />

            </div>
        );
    }
});

export default BigTabHost;