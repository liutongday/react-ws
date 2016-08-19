/**
 *
 * <p>Title: BONC - React </p>
 *
 * <p>Description: 界面上四列table基本组件封装 wsTableCol4.js </p>
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
        let arr;
        let contentText;
        let contentImg;
        let showImg;

        if (React.isValidElement(th)) {
            content = React.cloneElement(th, props);
            className = getDisplayName(th);
        } else if (isFunction(th)) {
            content = th(props);
            className = th.name;
        } else {

            if (index!=1){
                content = name || '';
                showImg=false;
            }else {
                showImg=true;
                arr=name.split(",");
                contentImg=arr[0];
                contentText=arr[1];
            }
        }

        return (
            <th
                key={`th-${index}`}
                style={getStyle(col.props)}
                className={`-ws-th col-${index} col-${dataKey} ${className || ''} `}
            >
                {showImg?<img src={contentImg} width={50}/>:null}
                 {contentText||content}
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
        let arr;
        let contentText;
        let contentImg;
        let showImage;
        let showInput;
        let state;

        if (React.isValidElement(td)) {
            content = React.cloneElement(td, props);
            className = getDisplayName(td);
        } else if (isFunction(td)) {
            content = td(props);
            className = td.name;
        } else {
            if (index==1){
                arr=value.split(",");
                contentImg=arr[0];
                contentText=arr[1];
                showImage=true;
                showInput=false;
            }else if(index==3){
                showImage=false;
                showInput=true;
                switch (value) {
                    case '1':
                        state='/src/images/u108.png';
                        break;
                    case '0':
                       state='/src/images/u671.png';
                        break;
                    case '-1':
                        state='/src/images/u114.png';
                        break;
                }
            } else {
                content = value;
                showImage=false;
                showInput=false;

            }
        }

        return (
            <td
                key={`td-${index}`}
                style={getStyle(col.props)}
                className={`ws-td col-${index} col-${dataKey} ${className || ''}  `}
            >
                {showImage?<img src={contentImg} width={30}/>:null}
                {contentText||content}
                {showInput?<img src={state} width={16}/>:null}
            </td>
        );
    })
);

const renderRows = (data, columns) => {
    if (!data || !data.length) {return null;}

    return data.map((entry, index) => (
        (
            <tr key={`tr-${index}`} className="ws-table-tr">
                {renderTds(data, entry, columns, index)}
            </tr>
        )
    ));
};

function Table(props) {
    const { children, data, className } = props;
    const columns = findAllByType(children, Column);
    const aStyle={
        width:'380px',
        display:'block',
        textAlign:'right',
        color:'#999C9f',
        backgroundColor:'#fBfBfB',
        height:'26px',
        fontSize:'12px',
    };
    const pstyle={
        marginRight:'18px',
    };
    return (
        <div className={`ws-table-container ${className || ''} `} >
            <a style={aStyle}><span style={pstyle}>更多></span></a>
            <table className="ws-table">
                {hasNames(columns) && (
                    <thead className="ws-table-thead">
                    <tr className="ws-table-tr">
                        {renderThs(columns)}
                    </tr>
                    </thead>
                )}
                <tbody className="ws-table-tbody">
                {renderRows(data, columns)}
                </tbody>
            </table>
        </div>
    );
}

Table.propTypes = propTypes;

export default Table;
