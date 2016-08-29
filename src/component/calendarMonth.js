import React,{PropTypes} from 'react';
import moment from 'moment';

var CalendarMonth = React.createClass({

    propTypes: {
        selected: React.PropTypes.object,
        onSelect: React.PropTypes.func
    },
    getInitialState:function () {
        return{
            moment:this.props.selected?moment(this.props.selected):moment(),
        };
    },

    handleChangeYear:function (year) {
        this.setState({
            moment:this.state.moment.year(year),
        });
    },

    handleChangeMonth: function (month) {
        var m=this.state.moment;
        this.setState({
            moment: this.state.moment.month(month)
        });
        this.props.onSelect(m.toDate());
    },

    renderHead:function () {
        var m=moment(this.state.moment);
        var month=m.month();
        var year=m.year();
        return(
            <div className="ws-calendar-head text-center clearfix">
                <div className="ws-calendar-head-top">
                    <a href="javascript:;" className="ws-calendar-head-pre pull-left"
                       onClick={this.handleChangeYear.bind(this, year - 1)}>
                        <i className="glyphicon glyphicon-chevron-left"></i>
                    </a>
                        <span className="ws-calendar-head-title">
                            <span>{month + 1}月</span>
                            <span>&nbsp;&nbsp;{m.year()}</span>
                        </span>
                    <a href="javascript:;" className="ws-calendar-head-next pull-right"
                       onClick={this.handleChangeYear.bind(this, year + 1)}>
                        <i className="glyphicon glyphicon-chevron-right"></i>
                    </a>
                </div>
            </div>
        );
    },

    renderMonth:function () {
        var month=this.state.moment.month();
        var months=[];
        var className='ws-calendar-month';
        for (var i=0;i<12;i++){
            months.push(
                <span key={i} className={i === month ? className + " ws-calendar-active": className}
                    onClick={this.handleChangeMonth.bind(this, i)}>
                    {i+1}月
                </span>
            );
        }
        return(
            <div className="ws-calendarMonth-months">
                {months}
            </div>
        );
    },

    render: function () {
        var t = this;
        return (
            <div className="ws-calendar" id="ws-calendar-div">
                {t.renderHead()}
                {t.renderMonth()}
            </div>
        );
    }
});

export default CalendarMonth;