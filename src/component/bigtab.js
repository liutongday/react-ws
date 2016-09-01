/**
 * Created by Administrator on 2016/8/21 0021.
 */
import React from 'react';
import '../css/bigtab.less';

var BigTab = React.createClass({
    getInitialState:function () {
        return {
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
        return  index == this.state.currentIndex? 'col-xs-3 col-sm-2 col-md-1 col-lg-1 big-tab-onclick': 'col-xs-3 col-sm-2 col-md-1 col-lg-1';
    },
    changeTabIndicate:function (index) {
        return index == this.state.currentIndex ? 'big-bottom-line-show' : 'big-bottom-line-none';
    },
    render(){
        var data=this.props.data;
        return (
            <div className="container-fluid big-tab_container">
                <div className="row">
                    { data.map(function (i_data,index) {
                        var bound = this.handleClick.bind(this,index);
                        return (
                            <div className={this.changeTabStyle(index)}>
                                <div className="big-tab-name-div">
                                    <span className="big-span-middle" onClick={bound}>{i_data.title}</span>
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
export default BigTab;