/**
 * Created by Administrator on 2016/8/21 0021.
 */
import React from 'react';

import Tab from './tab'
import TabContent from './tabcontent'
var TabHost = React.createClass({
    getInitialState:function () {
        return {data:[
            { title: '选项卡', content: {name:'选项卡1内容' }},
            { title: '选项卡', content: {name:'选项卡2内容' }},
            { title: '选项卡', content: {name:'选项卡3内容' }},
            { title: '选项卡', content: {name:'选项卡4内容' }},
            { title: '选项卡', content: {name:'选项卡5内容' }},
            { title: '选项卡', content: {name:'选项卡6内容' }},
            { title: '选项卡', content: {name:'选项卡7内容' }},
            { title: '选项卡', content: {name:'选项卡8内容' }},

        ],contentData:{name:'选项卡1内容' }};

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