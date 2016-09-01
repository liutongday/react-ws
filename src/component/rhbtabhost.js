/**
 * Created by Administrator on 2016/8/21 0021.
 */
import React from 'react';

import Tab from './tab'
import RHBTabContent from './rhbtabcontent'
var RHBTabHost = React.createClass({
    getInitialState:function () {
        return {data:[
            { title: '总排行', content: [{id :'01',tupian:'u4070.png',name:'总排行',number:'222222',jiantou:'1'},
                {id :'02',tupian:'u4085.png',name:'总排行',number:'33452',jiantou:'-1'},
                {id :'03',tupian:'u4099.png',name:'总排行',number:'543522',jiantou:'1'},
                {id :'04',tupian:'u4113.png',name:'总排行',number:'63754',jiantou:'-1'},
                {id :'05',tupian:'u4127.png',name:'总排行',number:'43545',jiantou:'1'},
                {id :'06',tupian:'u4141.png',name:'总排行',number:'45422434',jiantou:'1'},
                {id :'07',tupian:'u4155.png',name:'总排行',number:'876776',jiantou:'1'},
                {id :'08',tupian:'u4169.png',name:'总排行',number:'265452',jiantou:'-1'},
                {id :'09',tupian:'u4183.png',name:'总排行',number:'25768',jiantou:'-1'},
                {id :'10',tupian:'u4197.png',name:'总排行',number:'3454622',jiantou:'1'},]},
            { title: '电视剧', content: [{id :'01',tupian:'u4070.png',name:'电视剧',number:'222222',jiantou:'1'},
                {id :'02',tupian:'u4085.png',name:'电视剧',number:'33452',jiantou:'-1'},
                {id :'03',tupian:'u4099.png',name:'电视剧',number:'543522',jiantou:'1'},
                {id :'04',tupian:'u4113.png',name:'电视剧',number:'63754',jiantou:'-1'},
                {id :'05',tupian:'u4127.png',name:'电视剧',number:'43545',jiantou:'1'},
                {id :'06',tupian:'u4141.png',name:'电视剧',number:'45422434',jiantou:'1'},
                {id :'07',tupian:'u4155.png',name:'电视剧',number:'876776',jiantou:'1'},
                {id :'08',tupian:'u4169.png',name:'电视剧',number:'265452',jiantou:'-1'},
                {id :'09',tupian:'u4183.png',name:'电视剧',number:'25768',jiantou:'-1'},
                {id :'10',tupian:'u4197.png',name:'电视剧',number:'3454622',jiantou:'1'},]},
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
        ],contentData:[{id :'01',tupian:'u4070.png',name:'父亲的身份',number:'222222',jiantou:'1'},
            {id :'02',tupian:'u4085.png',name:'欢乐颂',number:'33452',jiantou:'-1'},
            {id :'03',tupian:'u4099.png',name:'金水桥边',number:'543522',jiantou:'1'},
            {id :'04',tupian:'u4113.png',name:'绝命卦师',number:'63754',jiantou:'-1'},
            {id :'05',tupian:'u4127.png',name:'柠檬初上',number:'43545',jiantou:'1'},
            {id :'06',tupian:'u4141.png',name:'奇妙的时光之旅',number:'45422434',jiantou:'1'},
            {id :'07',tupian:'u4155.png',name:'情迷睡美人',number:'876776',jiantou:'1'},
            {id :'08',tupian:'u4169.png',name:'山海经',number:'265452',jiantou:'-1'},
            {id :'09',tupian:'u4183.png',name:'太阳的后裔',number:'25768',jiantou:'-1'},
            {id :'10',tupian:'u4197.png',name:'最好的我们',number:'3454622',jiantou:'1'},]};

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
                    {/*<RHBTabContent data={this.state.contentData}/>*/}
            </div>
        );
    }
});
export default RHBTabHost;