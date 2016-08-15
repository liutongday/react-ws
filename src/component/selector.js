/**
 * Created by tongliu on 2016/8/11.
 */
import React from 'react';
import ReactDOM from 'react-dom';
    var data1=[
        {proId:"001",proName:"全国"},
        {proId:"002",proName:"北京"},
        {proId:"003",proName:"上海"},
        {proId:"004",proName:"广州"},
        {proId:"004",proName:"广州"},
        {proId:"004",proName:"广州"}];
var ProList;
ProList = React.createClass({
    getInitialState: function () {
        return {active: true};
    },
    test: function () {
        this.setState({active:!this.state.active});
        console.log('**************');
    },

    render() {

        var ProNodes = this.props.data.map(function (pro) {
            return (
                <a className="sel_a" value={pro.proId} onClick={this.test()}>
                    {pro.proName}
                </a>
            );
        });
        return (
            <div className="sel_div3">
                {ProNodes}
            </div>
        );
    }
});

var Selector = React.createClass({
    getInitialState:function () {
      return{active:true,
            pro:{proId:'001',proName:'全国'}
      };
    },
   div_change:function(){
        this.setState({active:!this.state.active});
        this.setState({pro:{proId:'003',proName:'上海'}});
       console.log(this.active);

       console.log(this.state.pro.proName);

   },
    selected:function () {
        this.setState({active:!this.state.active});
        console.log(ReactDOM.findDOMNode(this.refs.aa).t);
        console.log('*********');
        /*this.setState({pro:{proId:this.proId,proName:this.proName}});*/
    },

    render() {
        var {value,...other}=this.props;
        return (
            <div>
                <span className="sel_title">地域</span>
                <input type="text" readOnly="true"
                       className="sel_input"
                       onClick={this.div_change}
                       value= {this.state.pro.proName}/>
                <div className={(this.state.active?'active_':'sel_')+"select"}>
                       {/* <ProList data={data1} />*/}
                       <a className="sel_a" ref="aa" value='002' onClick={this.selected}>北京
                 </a>
                </div>
            </div>
        );
    }
});
export default Selector;