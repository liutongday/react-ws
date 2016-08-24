/**
 *
 * <p>Title: BONC - React </p>
 *
 * <p>Description:  </p>
 *
 * <p>Copyright: Copyright BONC(c) 2013 - 2025 </p>
 *
 * <p>Company: 北京东方国信科技股份有限公司 </p>
 *
 * @author liutong
 * @date 2016/8/23
 */
/*
    该插件存在2个参数：col为数值型，0为较大的表格栏，1为较小的表格栏
    name为字符型，为传入的需要展示的app名称
 */
import React from 'react';
import '../css/appCol.less';

var AppCol=React.createClass({
    render:function () {
        var name=this.props.name;
        return(
            <div className="appCol_outer_div">
                <img className="appCol_img1" src={"../../site/images/appCol/"+(this.props.col?'u4323.png':'u5743.png')} />
                <img className="appCol_img2" src="\site\images\appCol\u4385.png"/>
                <div className={"appCol_inner_div"+(this.props.col?'_small':'_big')}>
                    <span className="appCol_span">{name}</span>
                </div>
            </div>
        )
    }
});
export default AppCol;