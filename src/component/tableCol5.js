/**
 *
 * <p>Title: BONC - React </p>
 *
 * <p>Description: 特殊表格 行列穿插</p>
 *
 * <p>Copyright: Copyright BONC(c) 2013 - 2025 </p>
 *
 * <p>Company: 北京东方国信科技股份有限公司 </p>
 *
 * @author Yelj
 * @version 1.0.0
 */
import React,{PropTypes} from 'react';
import Column from './column';

const propTypes = {
    className: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.object),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

const getDisplayName = (el) => (
    el && el.type && (el.type.displayName || el.type.name)
);

const hasNames = (columns) => {
    let result = false;

    for (let i = 0, len = columns.length; i < len; i++) {
        const col = columns[i];
        const { name } = col.props;

        if (name && name !== '') {
            result = true;
        }
    }

    return result;
};

const getStyle = ({ width, align }) => {
    const style = {};

    if (width) {
        style.width = width;
    }
    if (align) {
        style.textAlign = align;
    }

    return style;
};

const findAllByType = (children, type) => {
    const result = [];
    const targetType = type && (type.displayName || type.name);

    React.Children.forEach(children, child => {
        if (child && child.type && (child.type.displayName || child.type.name) === targetType) {
            result.push(child);
        }
    });

    return result;
};

const isObject = (value) => {
    const type = typeof value;

    return !!value && (type === 'object' || type === 'function');
};

const isFunction = (value) => {
    const tag = isObject(value) ? Object.prototype.toString.call(value) : '';

    return tag === '[object Function]' || tag === '[object GeneratorFunction]';
};

const renderThs = (columns) => (
    columns.map((col, index) => {
        if(index !=5){
            const { name, dataKey, th } = col.props;
            const props = { name, dataKey, colIndex: index };
            let content;
            let className;

            if (React.isValidElement(th)) {
                content = React.cloneElement(th, props);
                className = getDisplayName(th);
            } else if (isFunction(th)) {
                content = th(props);
                className = th.name;
            } else {
                content = name || '';
            }

            return (
                <th
                    key={`th-${index}`}
                    style={getStyle(col.props)}
                    className={`ws-table3-th col-${index} col-${dataKey} ${className || ''}`}
                >
                    {content}
                </th>
            );
        }

    })
);


const renderTds = (data, entry, columns, rowIndex) => (
    columns.map((col, index) => {
        if(index !=5){
        const { dataKey, td } = col.props;
        const value = entry[dataKey];
        const props = { data, rowData: entry, tdValue: value, dataKey, rowIndex, colIndex: index };

        let content;
        let className;
        let bgImage;
        let bgClass;

        if (React.isValidElement(td)) {
            content = React.cloneElement(td, props);
            className = getDisplayName(td);
        } else if (isFunction(td)) {
            content = td(props);
            className = td.name;
        } else {
            if(index==0){
                bgImage=true;
                content = value;
                if(content==1||content==2||content==3){
                    bgClass='bgRed';
                }else{bgClass='bgGrey';}

            }else{
                bgImage=false;
                content = value;
            }
        }
        return (
            <td
                key={`td-${index}`}
                style={getStyle(col.props)}
                className={`ws-table3-td col-${index} col-${dataKey} ${className || ''}`}
            >
                {bgImage?<span className={bgClass}> {content}</span>:content}
            </td>
        );}
    })
);
const renderRowTd = (data, entry, columns, rowIndex) => (
    columns.map((col, index) => {
        if(index==5){
            const { dataKey, td } = col.props;
            const value = entry[dataKey];
            const props = { data, rowData: entry, tdValue: value, dataKey, rowIndex, colIndex: index };

            let content;
            let className;

            if (React.isValidElement(td)) {
                content = React.cloneElement(td, props);
                className = getDisplayName(td);
            } else if (isFunction(td)) {
                content = td(props);
                className = td.name;
            } else {
                content = value;

            }
            return (
                <td
                    key={`td-${index}`}
                    style={getStyle(col.props)}
                    className={`ws-table3-td col-${index} col-${dataKey} ${className || ''}`}
                    colSpan="5"
                >
                   <span className="longtext"> </span>{content}
                </td>
            );}
    })
);

const renderRows = (data, columns) => {
    if (!data || !data.length) {return null;}

    return data.map((entry, index) => (
        (
            <tbody>
            <tr key={`tr-${index}`} className="ws-table3-tr">
                {renderTds(data, entry, columns, index)}
            </tr>
            <tr>
                {renderRowTd(data, entry, columns, index)}
            </tr>
            </tbody>
        )
    ));
};

function Table(props) {
    const { children, data, className } = props;
    const columns = findAllByType(children, Column);
    return (
        <div className={`ws-table3-container ${className || ''} `} >
            <table className="ws-table3">
                {hasNames(columns) && (
                    <thead className="ws-table3-thead">
                    <tr className="ws-table3-tr">
                        {renderThs(columns)}
                    </tr>
                    </thead>
                )}
                {renderRows(data, columns)}
            </table>
        </div>
    );
}

Table.propTypes = propTypes;

export default Table;
