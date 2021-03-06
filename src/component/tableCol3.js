/**
 *
 * <p>Title: BONC - React </p>
 *
 * <p>Description: 三列表格table基本组件 tableCol3.js </p>
 *
 * <p>Copyright: Copyright BONC(c) 2013 - 2025 </p>
 *
 * <p>Company: 北京东方国信科技股份有限公司 </p>
 *
 * @author Yelj
 * @version 1.0.0
 */
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
                className={`ws-table2-th col-${index} col-${dataKey} ${className || ''}`}
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
        let showInput;
        let arr;
        let contentText;
        let contentImg;
        let state;
        let ifNew;

        if (React.isValidElement(td)) {
            content = React.cloneElement(td, props);
            className = getDisplayName(td);
        } else if (isFunction(td)) {
            content = td(props);
            className = td.name;
        } else {
            if(index==1){
                arr=value.split(",");
                contentText=arr[0];
                contentImg=arr[1];
                switch (contentImg) {
                    case '1':
                        ifNew=true;
                        break;
                    case '0':
                        ifNew=false;
                        break;
                }
            }else if(index==2){
            arr=value.split(",");
            contentText=arr[0];
            contentImg=arr[1];
            showInput=true;

            switch (contentImg) {
                case '1':
                    state='/src/images/u108.png';
                    break;
                case '0':
                    state='/src/images/u671.png';
                    break;
                case '-1':
                    state='/src/images/u114.png';
                    break;}
            }else{
                content = value;
                if(content==1||content==2||content==3){
                    className='top3';
                }

            }

        }
        var spanDisplay={
            marginRight:'10px',
        };
        var newStyle={
            color:'#CA5149',
            fontSize:'5px',
        };
        return (
            <td
                key={`td-${index}`}
                style={getStyle(col.props)}
                className={`ws-table2-td col-${index} col-${dataKey} ${className || ''}`}
            >
                {contentText||content}  {showInput?<img src={state} width={8}/>:null}
                {showInput?<span style={spanDisplay }> </span>:null}
                {ifNew?<span style={newStyle}>新！</span>:null}
            </td>
        );
    })
);

const renderRows = (data, columns) => {
    if (!data || !data.length) {return null;}

    return data.map((entry, index) => (
        (
            <tr key={`tr-${index}`} className="ws-table2-tr">
                {renderTds(data, entry, columns, index)}
            </tr>
        )
    ));
};

function Table(props) {
    const { children, data, className } = props;
    const columns = findAllByType(children, Column);
    return (
        <div className={`ws-table2-container ${className || ''} `} >
            <table className="ws-table2">
                {hasNames(columns) && (
                    <thead className="ws-table2-thead">
                    <tr className="ws-table2-tr">
                        {renderThs(columns)}
                    </tr>
                    </thead>
                )}
                <tbody className="ws-table2-tbody">
                {renderRows(data, columns)}
                <tr style={{height:'50px'}}><td colSpan="3"> <button style={{marginLeft:'30px'}} className="button btn btn-default">前10条</button>
                    <button style={{marginLeft:'90px'}} className="button btn btn-default">后10条</button> </td></tr>
                </tbody>
            </table>

        </div>
    );
}

Table.propTypes = propTypes;

export default Table;
