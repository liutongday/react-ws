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
       return  index == this.state.currentIndex? 'td tab-onclick': 'td';
    },
    changeTabIndicate:function (index) {
        return index == this.state.currentIndex ? 'bottom-line-show' : 'bottom-line-none';
    },
    render(){
        var data=this.props.data;
        return (
            <div>
                <table>
                    <tr id="tr">
                        { data.map(function (i_data,index) {
                            var bound = this.handleClick.bind(this,index);
                            return (
                                <td className={this.changeTabStyle(index)}>
                                    <div id="tab-name-div">
                                        <span onClick={bound}>{i_data.title}</span>
                                        <img className="img" src="/src/images/tabs/line.png"/>
                                    </div>
                                    <img className={this.changeTabIndicate(index)} src="/src/images/tabs/u4243_line.png"/>
                                </td>);
                        },this)}
                    </tr>
                </table>
            </div>
        );
    }
});


export default Tab;