import React ,{ PropTypes , Component } from 'react';

const propTypes = {
    name: PropTypes.string,
    dataKey: PropTypes.string.isRequired,
    align: PropTypes.oneOf(['left', 'center', 'right']),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    th: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    td: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};

const defaultProps = {
   /* align: 'center',*/

};

function Column() {
    return null;
}

Column.propTypes = propTypes;
Column.defaultProps = defaultProps;

export default Column;