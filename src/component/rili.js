import React from 'react';
import moment from 'moment';

var Day=React.createClass({

});
var Rili = React.createClass({
    propTypes:{
        selected:React.PropTypes.object,
        onSelect:React.PropTypes.func
    },

    getDefaultProps:function () {
        return{
            onSelect:function () {

            }
        };
    },

    getInitialState:function () {
        return{
            selected:this.props.selected?this.props.selected:null,
            moment:this.props.selected?moment(this.props.selected):moment(),
            isSelectMonth:false,
            weekDays:['日','一','二','三','四','五','六']
        }  ;
    },


    handleChangeMonth:function (month) {
      this.setState({
          momont:this.state.moment.month(month),
          isSelectMonth:false
      });
    },


    renderHead: function () {
        var m = moment(this.state.moment);
        var month=m.month();
        return(
            <div>
                <a href="javascript:;"
                   onClick={this.handleChangeMonth.bind(this,month-1)}>
                    <i>前</i>
                </a>
                <span>
                    <span>{month+1}月</span>
                    <span>{m.year()}</span>
                </span>
                <a href="javascript:;"
                   onClick={this.handleChangeMonth.bind(this,month+1)}>
                    <i>后</i>
                </a>
            </div>
        );
    },

    rederWeek:function () {
        return(
            <div>
                {this.state.weekDays.map(function (v,i) {
                    return(<span key={i}>{v}</span>)
                })}
            </div>
        );
    },

    renderContent:function () {
        var m= moment(this.state.moment).startOf('month').day(0).add(-1,'day');
        var days = [];

    },

    render:function(){
        var t=this;
        return(
            <div>
                {t.renderHead()}
                {t.rederWeek()}
            </div>
        ) ;
    }
});

module.exports=Rili;