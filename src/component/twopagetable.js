import React ,{PropTypes,Component} from 'react';
import Column from './column';
import '../css/twopagetable.less';
import 'webpack-dev-server/client/web_modules/jquery/jquery-1.8.1'
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
const rightclick = (index,e)=>{
    //标记点击的哪一行
    id=index
    var btnNum = e.button;
    if (btnNum == 2) {
        //alert("您点击了鼠标右键！")
        var evt = e;
        var menu = document.getElementById('showrightclick');
        var container = document.getElementById(index);
        var tabletop = document.getElementById("ws-table-twopagetable").offsetTop


        /*获取当前鼠标右键按下后的位置，据此定义菜单显示的位置*/
        var rightedge = container.clientWidth - evt.clientX;
        var bottomedge = container.clientHeight - evt.clientY;
        console.info("*****")
        console.info(container.clientWidth)
        console.info(container.clientHeight)

        console.info(evt.clientY)
        console.info(menu.offsetHeight)
        console.info(container.scrollTop)
        //如果从鼠标位置到容器右边的空间小于菜单的宽度，就定位菜单的左坐标（Left）为当前鼠标位置向左一个菜单宽度
        if (rightedge < menu.offsetWidth)
            menu.style.left = container.scrollLeft + evt.clientX - menu.offsetWidth - 100 + "px";
        else
        /*否则，就定位菜单的左坐标为当前鼠标位置*/
            menu.style.left = container.scrollLeft + evt.clientX + "px";
        /*如果从鼠标位置到容器下边的空间小于菜单的高度，就定位菜单的上坐标（Top）为当前鼠标位置向上一个菜单高度*/
        //menu.style.marginTop = container.scrollTop  + evt.clientY + 35*(index-1)-560 + "px";
        var tabletop=0
        for(var i=0;i<index;i++){
            tabletop+=rownumber[i]
        }
        console.info(9*tabletop -70)
        menu.style.marginTop=-200+"px";
        menu.style.top = 35*tabletop +275+ "px";
        //menu.style.marginTop =  9*tabletop -260+ "px";

        menu.style.visibility = "visible";
        container.oncontextmenu = function ()
        {
            return false;
        }
    }
    e.preventDefault();
    e.stopPropagation();
    return false;
}
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
let id = 0
let rownumber = [];
const renderTds = (data, entry, columns, rowIndex) => (
    columns.map((col, index) => {
        const { dataKey, td } = col.props;
        let value = entry[dataKey];
        const props = { data, rowData: entry, tdValue: value, dataKey, rowIndex, colIndex: index };
        let content;
        let className;
        let rightclickdata = [
            {name:'4G业务用户'},
            {name:'合约类型'},
            {name:'终端类型'},
            {name:'增值类型'},
            {name:'渠道类型'}]
        content = value;
        if(col.props.dataKey=='指标名称'){
            className="twopage-table-one"
            //rightclick='this.rightclick(rightclickdata)'
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
        if(index==0){
            //标记每一行下面有几个子行
            rownumber[rowIndex] = 1;
            return (
                <td
                    key={`td-${index}`}
                    id={rowIndex}
                    className={className} onMouseDown={rightclick.bind(this,rowIndex)}>
                    {content}
                </td>
            );
        }
        else {
            return (
                <td
                    key={`td-${index}`}
                    className={className}>
                    {content}
                </td>
            );
        }

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
const insertrow = (index, e) => {
    var insertdata = [{指标名称 :'移动业务计费收入（含转售）（万元）',当日值:'5661,34',本月累计:'566100,45',同比:'-24%',环比:'31%'},
        {指标名称 :' 移动业务计费收入',当日值:'null',本月累计:'538,114.38',同比:'31%',环比:'31%'},
        {指标名称 :'  其中CBSS业务收入（万元）',当日值:'5157,49',本月累计:'538,114.38',同比:'31%',环比:'31%'},
        {指标名称 :' 转售业务计费收入',当日值:'null',本月累计:'538,114.38',同比:'31%',环比:'31%'},]

    var tab=document.getElementById("wstabletwopagetablemain"); //获得表格
    var colsNum=tab.rows.item(0).cells.length;   //表格的列数
    var num=document.getElementById("wstabletwopagetablemain").rows.length;//表格当前的行数
    //计算插入的行之前的行数
    var topinsertrow=0;
    for(var i=0;i<=id;i++){
        topinsertrow+=rownumber[i];
    }
    console.info(topinsertrow)
    topinsertrow=topinsertrow+1;
    for(var j = 0;j<insertdata.length;j++){
        var insertrow=topinsertrow+j;
        var row = tab.insertRow(insertrow);
        row.className = "tab_row_"+insertrow;
        row .style.backgroundColor="pink"//设置行的背景色
        row.style.width = '75px'//设置行宽
        row.style.height = '35px'//设置行高
        row.style.textAlign = 'center'
        row.style.fontSize = '2px'
        for(var i=0;i<colsNum; i++)
        {
            tab.rows[insertrow].insertCell(i);//插入列
            if(i==0){
                tab.rows[insertrow].cells[i].innerHTML=insertdata[j].指标名称;
            }else if(i==1){
                if(insertdata[j].当日值=='null'){
                    tab.rows[insertrow].cells[i].innerHTML='-';
                }
                else {
                    tab.rows[insertrow].cells[i].innerHTML = insertdata[j].当日值;
                }
            }else if(i==2){
                if(insertdata[j].本月累计=='null'){
                    tab.rows[insertrow].cells[i].innerHTML='-';
                }
                else {
                    tab.rows[insertrow].cells[i].innerHTML=insertdata[j].本月累计;
                }
            }else if(i==3){
                tab.rows[insertrow].cells[i].innerHTML=insertdata[j].同比;
            }else {
                tab.rows[insertrow].cells[i].innerHTML=insertdata[j].环比;
            }

        }
    }
    rownumber[id]+=insertdata.length
};
function Twopagetable(props) {
    const { children, data, className } = props;
    const columns = findAllByType(children, Column);
    let rightclickdata = [
        {name:'4G业务用户'},
        {name:'合约类型'},
        {name:'终端类型'},
        {name:'增值类型'},
        {name:'渠道类型'}]
    var innerhtml =rightclickdata.map(function (role, index) {
        console.info(index)
        var classname = "right-click-"+index
        return(
            <p className={classname}  style={{width:'85px',height:'20px','font-size': '3px','text-align': 'center',
                'background-color': '#F0F0F0','border': '0px','margin-bottom':'0px'}} onClick={insertrow.bind(this,index)}>{role.name}</p>
        )
    })
    return (
        <div className="ws-table-twopagetable" id="ws-table-twopagetable" >
            <div id="showrightclick">
                {innerhtml}
            </div>
            <table className="ws-table-twopagetable-main" id="wstabletwopagetablemain">
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
