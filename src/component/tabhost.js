/**
 * Created by Administrator on 2016/8/21 0021.
 */
import React from 'react';

import Tab from './tab'
import TabContent from './tabcontent'
var TabHost = React.createClass({
    getInitialState:function () {
        return {data:[
            { title: '总排行', content: {name:'总排行内容' }},
            { title: '电视剧', content: {name:'电视剧内容' }},
            { title: '电影', content: {name:'电影内容' }},
            { title: '综艺', content: {name:'综艺内容' }},
            { title: '动漫', content: {name:'动漫内容' }},
            { title: '娱乐', content: {name:'娱乐内容' }},
            { title: '体育', content: {name:'体育内容' }},
            { title: '纪录片', content: {name:'纪录片内容' }},
            { title: '汽车', content: {name:'汽车内容' }},
            { title: '科技', content: {name:'科技内容' }},
            { title: '财经', content: {name:'财经内容' }},
            { title: '搞笑', content: {name:'搞笑内容' }},
        ],contentData:{name:'总排行内容' }};

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
                    <Tab onClick={this.handleClick} data={data}/>
                    <TabContent data={this.state.contentData} />

            </div>
        );
    }
});

export default TabHost;