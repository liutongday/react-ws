import React ,{PropTypes,Component} from 'react';
import Column from './column';
import '../css/twopagetable.less';
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
        let contentText;
        content = name || '';
        var tdstyle={
            'padding-left':'20px',
            'text-align':'left',
            'height': '50px',
            'font-weight': 'normal',
        }

        return (
            <th
                key={`th-${index}`}
                style={tdstyle}
                className={`-ws-th col-${index} col-${dataKey} ${className || ''} `}
            >
                <span > {contentText||content}</span>
            </th>
        );
    })
);
const renderTds = (data, entry, columns, rowIndex) => (
    columns.map((col, index) => {

        const { dataKey, td } = col.props;
        let value = entry[dataKey];
        const props = { data, rowData: entry, tdValue: value, dataKey, rowIndex, colIndex: index };
        let content;
        let className;
        content = value;

        if(col.props.dataKey=='指标名称'){
            className="twopage-table-one"
        }
        else {
            if(value.toString()=='null'){
                content='-';
            }
            if(rowIndex%2==0){
                //判断行数是奇数还是偶数，隔行显示不同的颜色
                if(col.props.dataKey=='当日值'||col.props.dataKey=='本月累计'){

                    //第二列和第三列宽度为90px
                    className="twopage-table-two-white"
                }
                else {
                    //第四列第五列宽度为75px
                    if(value.toString().substring(0,1)=='-'){
                        //判断百分比正负，正数显示红色，负数显示绿色
                        className="twopage-table-four-white-positive"
                    }
                    else {
                        className="twopage-table-four-white-negative"
                    }
                }
            }
            else {
                if(col.props.dataKey=='当日值'||col.props.dataKey=='本月累计'){
                    className="twopage-table-two-gray"
                }
                else {
                    if(value.toString().substring(0,1)=='-'){
                        className="twopage-table-four-gray-positive"
                    }
                    else {
                        className="twopage-table-four-gray-negative"
                    }
                }
            }
        }
        return (
            <td
                key={`td-${index}`}
                className={className}>
                {content}
            </td>
        );
    })
);
const renderRows = (data, columns) => {
    if (!data || !data.length) {return null;}

    return data.map((entry, index) => (
        (
            <tr key={`tr-${index}`} className="ws-table-twopagetable-tr">
                {renderTds(data, entry, columns, index)}
            </tr>
        )
    ));
};

function Twopagetable(props) {
    const { children, data, className } = props;
    const columns = findAllByType(children, Column);

    return (
        <div className="ws-table-twopagetable" >
            <table className="ws-table-twopagetable-main">
                {hasNames(columns) && (
                    <thead className="ws-table-twopagetable-thead">
                    <tr className="ws-table-twopagetable-tr">
                        {renderThs(columns)}
                    </tr>
                    </thead>
                )}
                <tbody className="ws-table-twopagetable-tbody">
                {renderRows(data, columns)}
                </tbody>
            </table>
        </div>
    );
}
Twopagetable.propTypes = propTypes;
export default Twopagetable;
