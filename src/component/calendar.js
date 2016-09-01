import React,{PropTypes} from 'react';
import moment from 'moment';

var Day = React.createClass({
        render: function () {
        var now = this.props.nowMoment;
        var m = this.props.moment;
        var selected = this.props.selected;

        var className = ['ws-calendar-day'];
        if (now.month() > m.month()) {
            className.push('ws-calendar-day-old');
        } else if (now.month() < m.month()) {
            className.push('ws-calendar-day-new');
        }

        if (+selected.startOf('day') === +m.startOf('day')) {
            className.push('ws-calendar-active');
        }

        return (<span className={className.join(' ')} onClick={this.handleClick}>{m.date()}</span>);
    },
    handleClick: function () {
        this.props.onClick(this.props.moment);
    }
});

var Calendar = React.createClass({
    propTypes: {
        selected: React.PropTypes.object,
        onSelect: React.PropTypes.func
    },
    getDefaultProps: function () {
        return {
            onSelect: function () {
            }
        };
    },
    getInitialState: function () {
        // 规避  moment(undefined) 有效  moment(null) 无效的场景，统一成null 处理
        return {
            selected: this.props.selected ? this.props.selected : null, // 调用方的时间
            moment: this.props.selected ? moment(this.props.selected) : moment(), // 日历内的时间
            isSelectMonth: false,
            weekDays: ['日', '一', '二', '三', '四', '五', '六']
        };
    },
    componentWillReceiveProps: function (nextProps) {
        if (nextProps.selected) {
            this.setState({
                selected: nextProps.selected
            });
        }
    },
    handleChangeMonth: function (month) {
        this.setState({
            moment: this.state.moment.month(month),
            isSelectMonth: false
        });
    },
    handleSelectMonth: function () {
        this.setState({
            isSelectMonth: !this.state.isSelectMonth
        });
    },
    handleSelectDay: function (m) {
        this.props.onSelect(m.toDate());
    },
    renderHead: function () {
        var m = moment(this.state.moment);
        var month = m.month();
        var monthEn="";
        if(month==0){
            monthEn="JAN";
        }else if(month==1){
            monthEn="FEB";
        }else if(month==2){
            monthEn="MAR";
        }else if(month==3){
            monthEn="APR";
        }else if(month==4){
            monthEn="MAY";
        }else if(month==5){
            monthEn="JUN";
        }else if(month==6){
            monthEn="JUL";
        }else if(month==7){
            monthEn="AUG";
        }else if(month==8){
            monthEn="SEP";
        }else if(month==9){
            monthEn="OCT";
        }else if(month==10){
            monthEn="NOV";
        }else if(month==11){
            monthEn="DEC";
        }

        return (
            <div className="ws-calendar-head text-center clearfix">
                <div className="ws-calendar-head-top">
                    <a href="javascript:;" className="ws-calendar-head-pre pull-left"
                       onClick={this.handleChangeMonth.bind(this, month - 1)}>
                        <i className="glyphicon glyphicon-chevron-left"></i>
                    </a>
                        <span className="ws-calendar-head-title">
                            <span className="ws-calendar-head-month"
                                  onClick={this.handleSelectMonth}>{monthEn}</span>
                            <span>&nbsp;&nbsp;{m.year()}</span>
                        </span>
                    <a href="javascript:;" className="ws-calendar-head-next pull-right"
                       onClick={this.handleChangeMonth.bind(this, month + 1)}>
                        <i className="glyphicon glyphicon-chevron-right"></i>
                    </a>
                </div>
            </div>
        );
    },
    renderWeek: function () {
        return (
            <div className="ws-calendar-week">
                {this.state.weekDays.map(function (v, i) {
                    return (<span key={i} className="ws-calendar-day-name">{v}</span>);
                })}
            </div>
        );
    },
    renderMonth: function () {
        var month = this.state.moment.month();
        var months = [];
        var className = 'ws-calendar-month';
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

        return (
            <div className="ws-calendar-months">
                {months}
            </div>
        );
    },
    renderContent: function () {
        var m = moment(this.state.moment).startOf('month').day(0).add(-1, 'day');
        var days = [];

        for (var i = 0; i < 42; i++) {
            days.push(<Day key={i} selected={moment(this.state.selected)} nowMoment={this.state.moment}
                           moment={moment(m.add(1, 'day'))} onClick={this.handleSelectDay}></Day>);
        }

        return (
            <div className="ws-calendar-content">
                {days}
            </div>
        );
    },
    render: function () {
        var t = this;
        return (
            <div className="ws-calendar" id="ws-calendar-div">
                {t.renderHead()}
                {t.renderWeek()}
                {t.renderContent()}
                {t.state.isSelectMonth ? t.renderMonth() : undefined}
            </div>
        );
    }
});

export default Calendar;