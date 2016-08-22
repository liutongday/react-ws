/**
 * Created by Administrator on 2016/7/29.
 */
import React from 'react';
//import imgSrc from "./../../demo/images/u797.png"
//import { Steps } from 'antd';
var Hello = React.createClass({
    /*getInitialState(){
        return {
            inputValue: 'input value',
            selectValue: 'A'
        };
    },*/
   /* handleInput:function(e){
        this.setState({
            inputValue:this.target.value
        })
    },
    //添加onchange事件可以改变输入框中的值
    handleSelect:function (e) {
        this.setState({
            selectValue:this.target.value
        })
    },*/
    /*handleSubmit(e){
        e.preventDefault();
        var formData = {
            input :this.refs.inputvalue.getDOMNode().value,
            select:this.refs.selectvalue.getDOMNode().value
        }
        console.log("default value");
        console.log(React.findDOMNode(this.refs['inputvalue']).value());
    },*/
    getInitialState: function() {
        return {liked:false};
    },
    handleClick: function(event) {
        this.setState({liked:!this.state.liked});
    },
    render:function () {
            /*<form>
                <input type="text" value={this.state.inputValue} onChange={this.handleInput}/><br/>
                <select value={this.state.selectValue} onChange={this.handleSelect}>
                    <option value={'A'}>A</option>
                    <option value={'B'}>B</option>
                    <option value={'C'}>C</option>
                </select><br/>
                <button type="submit">提交</button>
            </form>*/
              /* <div style={{marginLeft:10,marginTop:10}}>
                   <img src={imgSrc} />

                </div>*/
                var text = this.state.liked?'like':'haven\'t liked';
                return (
                <p onClick={this.handleClick}>
                    You {text} this.click to toggle.
                </p>

                );
    }
})
export default Hello;