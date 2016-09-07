/**
 * Created by Administrator on 2016/9/2 0002.
 */
import React from 'react';
import '../css/customizedpanel.less';
var CustomizedPanel=React.createClass({
    getInitialState:function () {
       return{
           leftData:this.props.leftData,
           rightData:[]
       };
    },
    handleSearch:function () {
        const all_data=this.props.leftData;
        var input_value=document.getElementById("search-input").value;
        var searchData=[];
        for(var i=0;i<all_data.length;i++){
            if(all_data[i].listTitle.indexOf(input_value)!=-1){
                searchData.push(all_data[i]);
                console.log(searchData);
            }
        }
        this.setState({leftData:searchData});
    },
    handleItemClick:function (index) {
        var to_right_data=this.state.rightData;
        console.log(index+"#############################");
        var left_can_to_right=this.state.leftData;
        to_right_data.push(left_can_to_right[index]);
        var realRightData=this.unique(to_right_data);
        this.setState({rightData:realRightData});
    },
    unique:function (array){
        var n = [array[0]]; //结果数组
        //从第二项开始遍历
        for(var i = 1; i < array.length; i++) {
            //如果当前数组的第i项在当前数组中第一次出现的位置不是i，
            //那么表示第i项是重复的，忽略掉。否则存入结果数组
            if (array.indexOf(array[i]) == i) n.push(array[i]);
        }
        return n;
    },
    handleCancel:function () {
        var y=$('#customer-panel-box').offset().top+508;
        $('#customer-panel-box').animate({marginTop:-y},500);
    },
    handleConfirm:function () {
        var y=$('#customer-panel-box').offset().top+508;
        $('#customer-panel-box').animate({marginTop:-y},500);
    },
    handleDelete:function (index) {
        debugger
        var all_right_data=this.state.rightData;
        all_right_data.splice(index,1);
        this.setState({rightData:all_right_data});
    },
    render:function () {
       /* const leftData=[{listTitle:'aaaaaaaa',listDetails:[{detailTitle:'aaab'},{detailTitle:'aaab'},{detailTitle:'aaab'}]},
            {listTitle:'aaaaaaaa',listDetails:[{detailTitle:'aaab'},{detailTitle:'aaab'},{detailTitle:'aaab'}]},
            {listTitle:'aaaaaaaa',listDetails:[{detailTitle:'aaab'},{detailTitle:'aaab'},{detailTitle:'aaab'}]},
            {listTitle:'aaaaaaaa',listDetails:[{detailTitle:'aaab'},{detailTitle:'aaab'},{detailTitle:'aaab'}]},
            {listTitle:'aaaaaaaa',listDetails:[{detailTitle:'aaab'},{detailTitle:'aaab'},{detailTitle:'aaab'}]},
            {listTitle:'aaaaaaaa',listDetails:[{detailTitle:'aaab'},{detailTitle:'aaab'},{detailTitle:'aaab'}]},
            {listTitle:'aaaaaaaa',listDetails:[{detailTitle:'aaab'},{detailTitle:'aaab'},{detailTitle:'aaab'}]},
            {listTitle:'aaaaaaaa',listDetails:[{detailTitle:'aaab'},{detailTitle:'aaab'},{detailTitle:'aaab'}]},
            {listTitle:'aaaaaaaa',listDetails:[{detailTitle:'aaab'},{detailTitle:'aaab'},{detailTitle:'aaab'}]}];*/
        var self = this;
        var leftData=this.state.leftData;
        var leftList=leftData.map(function (data,index) {
            var list_title=data.listTitle;
            var list_details=data.listDetails;
            return (
                <div id="left-list">
                    <details onClick={self.handleItemClick.bind(this,index)}>
                    <summary>{list_title}</summary>
                        <ul id="ul-detail-list">
                            {list_details.map(function (d_data,key) {
                                return(
                                <li>{d_data.detailTitle}</li>
                                );
                            })}
                        </ul>
                </details>
                </div>
            );
        });
        var rightData=this.state.rightData;
        if(rightData!=null){
            var rightList=rightData.map(function (data,index) {
                var list_title=data.listTitle;
                var list_details=data.listDetails;
                return (
                    <div id="left-list">
                        <details>
                            <summary>{list_title}</summary>
                            <ul id="ul-detail-list">
                                {list_details.map(function (d_data,key) {
                                    return(
                                        <li>{d_data.detailTitle}</li>
                                    );
                                })}
                            </ul>
                        </details>
                        <img id="delete" src="/src/images/customize/close.png" onClick={self.handleDelete.bind(this,index)}></img>
                    </div>
                );
            });
        }
        return(
            <div className="customized-panel">
                <div id="search-div">
                    <input type="text" id="search-input" placeholder="  请输入搜索关键字"/>
                    <img id="search-icon" src="/src/images/customize/search-icon.png"></img>
                    <div id="search-button" onClick={this.handleSearch}>
                        <span>搜索</span>
                    </div>
                    <p id="index-selection">指标选择</p>
                    <img id="panel-close" src="/src/images/customize/close.png" onClick={this.handleCancel}></img>
                </div>
                <div id="bottom-content">
                    <div id="left-area">
                        {leftList}
                    </div>
                    <img id="center-arrow" src="/src/images/customize/center-arrow.png"></img>
                    <div id="right-area">
                        {rightList}
                    </div>
                    <div id="bottom-button">
                        <div id="cancel-button" onClick={this.handleCancel}>取消</div>
                        <div id="confirm-button" onClick={this.handleConfirm}>确定</div>
                    </div>
                </div>
            </div>
        );
    }
});
export default CustomizedPanel;