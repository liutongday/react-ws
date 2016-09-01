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
        months.push((
            <span key={0} className={0 === month ? className + " ws-calendar-active": className}
                  onClick={this.handleChangeMonth.bind(this, 0)}>JAN</span>
        ));
        months.push((
            <span key={1} className={1 === month ? className + " ws-calendar-active": className}
                  onClick={this.handleChangeMonth.bind(this, 1)}>FEB</span>
        ));
        months.push((
            <span key={2} className={2 === month ? className + " ws-calendar-active": className}
                  onClick={this.handleChangeMonth.bind(this, 2)}>MAR</span>
        ));
        months.push((
            <span key={3} className={3 === month ? className + " ws-calendar-active": className}
                  onClick={this.handleChangeMonth.bind(this, 3)}>APR</span>
        ));
        months.push((
            <span key={4} className={4 === month ? className + " ws-calendar-active": className}
                  onClick={this.handleChangeMonth.bind(this, 4)}>MAY</span>
        ));
        months.push((
            <span key={5} className={5 === month ? className + " ws-calendar-active": className}
                  onClick={this.handleChangeMonth.bind(this, 5)}>JUN</span>
        ));
        months.push((
            <span key={6} className={6 === month ? className + " ws-calendar-active": className}
                  onClick={this.handleChangeMonth.bind(this, 6)}>JUL</span>
        ));
        months.push((
            <span key={7} className={7 === month ? className + " ws-calendar-active": className}
                  onClick={this.handleChangeMonth.bind(this, 7)}>AUG</span>
        ));
        months.push((
            <span key={8} className={8 === month ? className + " ws-calendar-active": className}
                  onClick={this.handleChangeMonth.bind(this, 8)}>SEP</span>
        ));
        months.push((
            <span key={9} className={9 === month ? className + " ws-calendar-active": className}
                  onClick={this.handleChangeMonth.bind(this, 9)}>OCT</span>
        ));
        months.push((
            <span key={10} className={10 === month ? className + " ws-calendar-active": className}
                  onClick={this.handleChangeMonth.bind(this, 10)}>NOV</span>
        ));
        months.push((
            <span key={11} className={11 === month ? className + " ws-calendar-active": className}
                  onClick={this.handleChangeMonth.bind(this, 11)}>DEC</span>
        ));
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