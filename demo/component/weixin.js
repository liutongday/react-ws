/**
 * Created by Administrator on 2016/7/30.
 */
import React from 'react';
//
import '../css/weixin.less';
var Weixin = React.createClass({
    getInitialState(){
        return {
            inputValue: '57639',
        };
    },
    handleInput:function(e){
        this.setState({
            inputValue:this.target.value
        })
    },
    render:function () {
        return(
            <div className="main">
                <div className="xuhao">
                    <div className="paixu">
                        <img src="/demo/images/u2822.png" />
                    </div>
                    <div className="weixin">
                        <img src="/demo/images/u797.png" />
                    </div>
                    <input type="text" className="usenumber" value={this.state.inputValue} onChange={this.handleInput}/>
                </div>
            </div>
        )
    }
});
export default Weixin;
