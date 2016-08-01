/**
 *
 * <p>Title: BONC - React </p>
 *
 * <p>Description: 单页面应用 form 表单组件 index.js </p>
 *
 * <p>Copyright: Copyright BONC(c) 2013 - 2025 </p>
 *
 * <p>Company: 北京东方国信科技股份有限公司 </p>
 *
 * @author panxw
 * @version 1.0.0
 */
import React from 'react';
import {
    Validate,
    ValidateMixin,
    Switch,
} from '../../src/index';

var FormerDom = React.createClass({
    mixins: [ValidateMixin()],
    onChange: function () {
        console.log(arguments);
    },
    render: function () {
        return (
            <div style={{width: 300}}>
                <form ref="myForm" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>email</label>
                        <input type="text" className="form-control" name="email" onChange={this.validate('e')}/>

                        <div className="text-danger">{this.validateTip('email')}</div>
                    </div>

                    <div className="form-group">
                        <label>三到5位任意字符</label>
                        <input type="text" className="form-control" name="height" onChange={this.validate('s3-5')}/>

                        <div className="text-danger">{this.validateTip('height')}</div>
                    </div>

                    <div className="form-group">
                        <button className="btn btn-default" type="submit">submit</button>
                    </div>
                </form>

                <div>
                    {this.validateTip()}
                </div>
            </div>
        );
    },
    onSubmit: function (event) {
        event.preventDefault();
        console.log(this.validateAll(this.refs.myForm));
    }
});

const Component = React.createClass({
    getInitialState(){
        return {
            checked: false
        };
    },
    render(){
        return (
            <div>
                <h1 id="form">表单</h1>
                <h2 id="former">Form</h2>
                <FormerDom/>
                <h2 id="switch">Switch</h2>
                <div>
                    <div>目前Switch的长度有限，所以checkedChildren unCheckedChildren 不能太多字</div>
                    <Switch
                        defaultChecked={true}
                        checkedChildren={"是"}
                        unCheckedChildren={"否"}/>
                    <Switch
                        checked={this.state.checked}
                        checkedChildren={"是"}
                        unCheckedChildren={"否"}
                        onChange={this.handleChange}/>
                    <Switch
                        disabled
                        checkedChildren={"YES"}
                        unCheckedChildren={"NO"}/>
                </div>
            </div>
        );
    },
    handleChange(){
        this.setState({
            checked: !this.state.checked
        });
    }
});

console.log(Validate('*', 'a', true));
console.log(Validate('*3', 'aaaa', true));
console.log(Validate('*3-', 'aa', true));
console.log(Validate('*3-5', 'a', true));

export default Component;