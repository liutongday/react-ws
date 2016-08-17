/**
 * Created by Administrator on 2016/7/26.
 */
import React from 'react';
import classNames from 'classnames';

var Flex = React.createClass({
    propTypes: {//属性校验器，表示改属性必须是bool，否则报错
        flex: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.bool]),
        auto: React.PropTypes.bool,
        none: React.PropTypes.bool,
        width: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
        height: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
        row: React.PropTypes.bool,
        column: React.PropTypes.bool,
        wrap: React.PropTypes.bool,
        nowrap: React.PropTypes.bool,
        justifyStart: React.PropTypes.bool,
        justifyEnd: React.PropTypes.bool,
        justifyCenter: React.PropTypes.bool,
        justifyBetween: React.PropTypes.bool,
        justifyAround: React.PropTypes.bool,
        alignStart: React.PropTypes.bool,
        alignEnd: React.PropTypes.bool,
        alignCenter: React.PropTypes.bool,
        alignBaseline: React.PropTypes.bool,
        alignStretch: React.PropTypes.bool
    },
    render() {
        const cn = classNames({
            'ws-flex': true,

            'ws-flex-auto': this.props.auto,
            'ws-flex-none': this.props.none || this.props.width || this.props.height,

            'ws-flex-row': this.props.row,
            'ws-flex-column': this.props.column,

            'ws-flex-wrap': this.props.wrap,
            'ws-flex-nowrap': this.props.nowrap,

            'ws-flex-justify-start': this.props.justifyStart,
            'ws-flex-justify-end': this.props.justifyEnd,
            'ws-flex-justify-center': this.props.justifyCenter,
            'ws-flex-justify-between': this.props.justifyBetween,
            'ws-flex-justify-around': this.props.justifyAround,

            'ws-flex-align-start': this.props.alignStart,
            'ws-flex-align-end': this.props.alignEnd,
            'ws-flex-align-center': this.props.alignCenter,
            'ws-flex-align-baseline': this.props.alignBaseline,
            'ws-flex-align-stretch': this.props.alignStretch
        }, this.props.className);

        let style = Object.assign({}, this.props.style);
        if (this.props.flex) {
            style.flex = (typeof this.props.flex === 'boolean') ? 1 : this.props.flex;
        }
        if (this.props.height) {
            style.height = this.props.height;
        }
        if (this.props.width) {
            style.width = this.props.width;
        }

        return <div {...this.props} className={cn} style={style}>{this.props.children}</div>;
    }
});

export default Flex;
