/**
 * Created by Administrator on 2016/8/21 0021.
 */
import React from 'react';
import '../css/tab.less';
var Tab = React.createClass({
    getInitialState:function () {
        return {
            currentIndex:0
        };
    },
    handleClick:function(index){
        this.props.onClick(index);
        this.setState({currentIndex: index});
    },
    changeTabStyle:function (index) {
        return  index == this.state.currentIndex? 'col-xs-3 col-sm-2 col-md-1 col-lg-1': 'col-xs-3 col-sm-2 col-md-1 col-lg-1';
    },
    changeTabIndicate:function (index) {
        return index == this.state.currentIndex ? 'bottom-line-show' : 'bottom-line-none';
    },




    setImgDividerVisibility:function (index) {
        return index==(this.props.data.length-1)? 'img-line' : '';
    },
    render(){
        const row_bg={
            backgroundColor:'#F7F7F7'
        };
        var data=this.props.data;
        return (
            <div className="container-fluid tab_container">
                <div className="row">
                    <div className="up-line">
                    </div>
                    { data.map(function (i_data,index) {
                        var bound = this.handleClick.bind(this,index);
                        return (
                            <div className={'col-xs-3 col-sm-2 col-md-1 col-lg-1'}>
                                <div className={this.changeTabIndicate(index)}>
                                    <img className="img" src="/portal/images/newtab/red-arrow.png"/>
                                </div>
                                <div className="tab-name-div">
                                    <span className="span-middle" onClick={bound}>{i_data.title}</span>
                                </div>
                            </div>);
                    },this)}
                </div>
            </div>
        );
    }
});
export default Tab;