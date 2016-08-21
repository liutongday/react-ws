import React ,{PropTypes,Component} from 'react';
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
                className={`react-ws-th col-${index} col-${dataKey} ${className || ''} `}
            >
                {content}
            </th>
        );
    })
);

const renderTds = (data, entry, columns, rowIndex) => (
    columns.map((col, index) => {
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
                className={`react-ws-td col-${index} col-${dataKey} ${className || ''}  `}
            >
                {content}
            </td>
        );
    })
);

const renderRows = (data, columns) => {
    if (!data || !data.length) {return null;}

    return data.map((entry, index) => (
        (
            <tr key={`tr-${index}`} className="react-ws-table-tr">
                {renderTds(data, entry, columns, index)}
            </tr>
        )
    ));
};

function Table(props) {
    const { children, data, className } = props;
    const columns = findAllByType(children, Column);
    const aStyle={
        display:'block',
        textAlign:'right',
        color:'#999C9f',
        backgroundColor:'#fBfBfB',
        height:'27px',
        fontSize:'12px',
    };
    const pstyle={
        marginRight:'18px',
    };
    return (
        <div className={`react-ws-table-container ${className || ''} `} >
            <a style={aStyle}><span style={pstyle}>更多></span></a>
            <table className="react-ws-table ">
                {hasNames(columns) && (
                    <thead className="react-ws-table-thead">
                    <tr className="react-ws-table-tr">
                        {renderThs(columns)}
                    </tr>
                    </thead>
                )}
                <tbody className="react-ws-table-tbody">
                {renderRows(data, columns)}
                </tbody>
            </table>
        </div>
    );
}

Table.propTypes = propTypes;

export default Table;
