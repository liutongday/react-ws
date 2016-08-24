/**
 *
 * <p>Title: BONC - React </p>
 *
 * <p>Description:列组件</p>
 *
 * <p>Copyright: Copyright BONC(c) 2013 - 2025 </p>
 *
 * <p>Company: 北京东方国信科技股份有限公司 </p>
 *
 * @author Yelj
 * @version 1.0.0
 */

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