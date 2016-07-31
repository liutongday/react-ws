import React, {PropTypes} from 'react';
import classNames from 'classnames';

function noop() {
}

class Switch extends React.Component {
    constructor(props) {
        super(props);

        let checked = false;
        if ('checked' in props) {
            checked = !!props.checked;
        } else {
            checked = !!props.defaultChecked;
        }
        this.state = {
            checked
        };

        this.handleToggle = ::this.handleToggle;
        this.handleMouseUp = ::this.handleMouseUp;
    }

    componentWillReceiveProps(nextProps) {
        if ('checked' in nextProps) {
            this.setState({
                checked: !!nextProps.checked
            });
        }
    }

    setChecked(checked) {
        if (!('checked' in this.props)) {
            this.setState({
                checked
            });
        }
        this.props.onChange(checked);
    }

    handleToggle() {
        if (this.props.disabled) {
            return;
        }
        const checked = !this.state.checked;
        this.setChecked(checked);
    }

    handleMouseUp() {
        if (this.refs.node) {
            this.refs.node.blur();
        }
    }

    render() {
        const {
            className, checked, defaultChecked, onChange, // eslint-disable-line
            disabled, checkedChildren, unCheckedChildren,
            ...rest
        } = this.props;
        const cn = classNames('ws-switch', this.props.className, {
            'ws-switch-checked': this.state.checked,
            'ws-switch-disabled': disabled
        });
        return (
            <span {...rest}
                  className={cn}
                  tabIndex="0"
                  ref="node"
                  onClick={this.handleToggle}
                  onMouseUp={this.handleMouseUp}>
                <span className="ws-switch-inner">{this.state.checked ? checkedChildren : unCheckedChildren}</span>
            </span>
        );
    }
}

Switch.propTypes = {
    className: PropTypes.string,
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    checkedChildren: PropTypes.any,
    unCheckedChildren: PropTypes.any,
    onChange: PropTypes.func
};
Switch.defaultProps = {
    checkedChildren: null,
    unCheckedChildren: null,
    defaultChecked: false,
    onChange: noop
};

module.exports = Switch;
