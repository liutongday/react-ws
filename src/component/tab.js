/**
 * Created by Administrator on 2016/8/21 0021.
 */
import React from 'react';
import '../css/tab.less';


var Tab = React.createClass({
    getInitialState:function () {
        return {tabStyle:'td',
            currentIndex:0
        };
    },
    // getDefaultProps(){
    //     return {defIndex:0};
    // },
    handleClick:function(index){
        this.props.onClick(index);
        this.setState({currentIndex: index});
    },
    changeTabStyle:function (index) {
        return  index == this.state.currentIndex? 'col-xs-3 col-sm-2 col-md-1 col-lg-1 tab-onclick': 'col-xs-3 col-sm-2 col-md-1 col-lg-1';
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
                <div className="row" style={row_bg}>
                    { data.map(function (i_data,index) {
                        var bound = this.handleClick.bind(this,index);
                        return (
                            <div className={this.changeTabStyle(index)}>
                                <div className="tab-name-div">
                                    <span className="span-middle" onClick={bound}>{i_data.title}</span>
                                    <img className={this.setImgDividerVisibility(index)} src="../src/images/tabs/line.png"/>
                                </div>
                                <div className={this.changeTabIndicate(index)}>
                                </div>
                            </div>);
                    },this)}
                </div>
            </div>
        );
    }
});
export default Tab;