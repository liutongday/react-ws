/**
 * Created by tongliu on 2016/8/11.
 */
import React from 'react';
    var data1=[
        {proId:"001",proName:"全国"},
        {proId:"002",proName:"北京"},
        {proId:"003",proName:"上海"},
        {proId:"004",proName:"广州"}];

var ProList = React.createClass({
    render:function () {
        var ProNodes = this.props.data.map(function (pro) {
            return(
                    <a className="sel_a"  value={pro.proId}>
                        {pro.proName}
                    </a>
            );
        });
        return(
            <div className="sel_div3" >
                {ProNodes}
            </div>
        );
    }
});



var Selector = React.createClass({
    getInitialState:function () {
      return{active:true};
    },
   div_change:function(){
        this.setState({active:!this.state.active});
       console.log("*************");
   },
    render() {
        return (
            <div>
              <span className="sel_title">地域</span>
                <input type="text" readOnly="true" className="sel_input" id="sel_input" value='全国' onClick={this.div_change} />
                <div className={(this.state.active?'active_':'sel_')+"select"}>
                        <ProList data={data1}/>
                </div>
            </div>







        );
    }

});
export default Selector;