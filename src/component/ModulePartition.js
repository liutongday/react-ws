/**
 *
 * <p>Title: BONC - React </p>
 *
 * <p>Description: 页面中每个模块的分割组件ModulePartition.js </p>
 *
 * <p>Copyright: Copyright BONC(c) 2013 - 2025 </p>
 *
 * <p>Company: 北京东方国信科技股份有限公司 </p>
 *
 * @author wangpei
 * @version 1.0.0
 */
import React from 'react';
import '../css/ModulePartition.less';
var ModulePartition=React.createClass(
    {
        // getInitialState:function () {
        //     return {
        //         chinese:"APP排行榜",
        //         english:"App Ranking List"
        //     };

        // },
        render:function () {
            let id = this.props.id;
            let chinese_module_title=this.props.name;
            let english_module_title=this.props.en_name;
            return (
                <div id={id}>
                    <div id="module_partition">
                        <div id="partition_line">
                            <div id="line">
                                <img id="line_img" src="/src/images/module_partition/line.png"/>
                            </div>
                            <div  id="picture">
                                <img id="top_shape"  src="/src/images/module_partition/top_shape.png"/>
                                <img id="bottom_shape" src="/src/images/module_partition/bottom_shape.png"/>
                                <img id="center_line" src="/src/images/module_partition/center_line.png"/>
                            </div>
                        </div>
                        <div id="module_title">
                            <div id="chinese_title"><p>{chinese_module_title}</p></div>
                            <div id="english_title">{english_module_title}</div>
                        </div>
                    </div>
                </div>
            );
        }
    }
);
export default ModulePartition;