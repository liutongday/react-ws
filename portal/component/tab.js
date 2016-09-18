/**
 * Created by Administrator on 2016/8/21 0021.
 */
import React from 'react';
import '../css/tab.less';
var Tab = React.createClass({
    getInitialState:function () {
        return {
            currentIndex:0,
            data:this.props.data,
            value:'aaaa',
        };
    },
    handleClick:function(index){
        console.log("aaaaaaaa"+index);
        this.props.onClick(index);
        this.setState({currentIndex: index});
    },
    changeTabStyle:function (index) {
        return  index == this.state.currentIndex? 'col-xs-3 col-sm-2 col-md-1 col-lg-1': 'col-xs-3 col-sm-2 col-md-1 col-lg-1';
    },
    changeTabIndicate:function (index) {
        return index == this.state.currentIndex ? 'bottom-line-show' : 'bottom-line-none';
    },
    addMiddle:function () {
        var addData=this.state.data.slice();
        addData.push({ title: 'abc', content: {id:'03',module:'/portal/images/newtab/mobileService.png'}},);
        this.setState({
            data:addData,
        });

        this.props.callbackParent(addData);
    },

    handleChange(e) {
        let value=e.target.value;
        var dataUpdate=this.state.data.slice();
        var i=e.target.id;
        dataUpdate[i].title=value;
        this.setState({
            data:dataUpdate
        });
        this.props.callbackParent(dataUpdate);
    },




    setImgDividerVisibility:function (index) {
        return index==(this.props.data.length-1)? 'img-line' : '';
    },
    render(){
        const row_bg={
            backgroundColor:'#F7F7F7'
        };
        return (
            <div className="container-fluid tab_container">
                <div className="row">
                    <div className="up-line">
                    </div>
                    { this.state.data.map(function (i_data,index) {
                        var bound = this.handleClick.bind(this,index);
                        return (
                            <div className={'col-xs-3 col-sm-2 col-md-1 col-lg-1'}>
                                <div className={this.changeTabIndicate(index)}>
                                    <img className="img" src="/portal/images/newtab/red-arrow.png"/>
                                </div>
                                <div className="tab-name-div">
                                    <input className="span-middle ws-tab-input" id={index} onChange={this.handleChange} onClick={bound} value={i_data.title}/>
                                </div>
                            </div>);
                    },this)}
                    <div className={'col-xs-3 col-sm-2 col-md-1 col-lg-1'}>
                        <div className="tab-name-div">
                            <span className="span-middle" onClick={this.addMiddle.bind(this)}><img src="/portal/images/newtab/addButton.png"/></span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
export default Tab;