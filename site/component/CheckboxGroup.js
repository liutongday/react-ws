/**
 * Created by Administrator on 2016/8/10 0010.
 *<p>Title: BONC - React </p>
 *
 * <p>Description:  </p>
 *
 * <p>Copyright: Copyright BONC(c) 2013 - 2025 </p>
 *
 * <p>Company: 北京东方国信科技股份有限公司 </p>
 *
 * @author zhaohl
 * @date 2016.8.16

 */
import React from 'react';
import classNames from 'classnames';
import * as ReactDOM from 'react-dom';
import "../css/CheckboxGroup.less";

// var MyContainer = React.createClass({
//     getInitialState: function () {
//         return {
//             checked: false
//         };
//     },
//     onChildChange: function (newState) {
//         console.info(newState);
//         this.setState({
//             checked: newState
//         });
//
//     },
//     render: function() {
//         var isChecked = this.state.checked ;
//         return (
//             <div>
//                 <div type="hidden">Are you checked: {isChecked}</div>
//                 <CheckboxGroup text="Toggle me" callbackParent={this.onChildChange}/>
//             </div>
//         );
//     }
// });
var CheckboxGroup = React.createClass({
    /*getInitialState: function () {
    return {
        checked: this.props.initialChecked
    };
},*/
    getInitialState: function () {
    return {
        checked: false
    };
},
    onTextChange1: function () {

   this.setState({checked: !this.state.checked});
        console.info("22222S");
        console.info(document.getElementById("layer1").value);
    this.props.callbackParent(document.getElementById("layer1").value);
},
    onTextChange2: function () {

        this.setState({checked: !this.state.checked});
        console.info(document.getElementById("layer2").value);
        this.props.callbackParent(document.getElementById("layer2").value);
    },
     selectAll() {
     var checklist = document.getElementsByName ("checkbox1");
     if(document.getElementById("controlAll").checked)
     {
         for(var i=0;i<checklist.length;i++)
         {
             checklist[i].checked = true;
         }
     }else{
         for(var j=0;j<checklist.length;j++)
         {
             checklist[j].checked = false;
         }
     }
 },
    // onTextChange() {
    //     var newState = document.getElementsByTagName("input");
    //     for(var i=0;i<inputs.length;i++){
    //         var obj = inputs[i];
    //         if(obj.type=='checkbox'){
    //             if(obj.checked==true){
    //                 sign=1;
    //
    //             }
    //         }
    //     }
    //     if(sign==0)//没有被选择项
    //     {
    //
    //     }
    // },
 render () {
     var text = this.props.text;
     // 组件自身的状态数据
     var checked = this.state.checked;
                return (
                    <div id="screen_down">
                        <table>
                                <tr>
                                        <td  rowSpan="3"  id="checkboxgroup-left"> 筛选分类：</td>
                                        <td>
                                            <input type="checkbox" id ="controlAll" value=" 全选"  onClick={this.selectAll}onChange={this.onTextChange} />
                                            <strong><span> <label htmlFor=" 全选"> 全选</label></span></strong>
                                        </td>
                                        <td>
                                            <input type="checkbox" name="checkbox1"value=" 社交" onClick={this.onTextChange1}id="layer1"/>
                                            <span> <label htmlFor=" 社交"> 社交</label></span>
                                        </td>
                                        <td>
                                            <input type="checkbox"   name="checkbox1" value=" 视频"onClick={this.onTextChange2}id="layer2"/>
                                            <span> <label htmlFor=" 视频"> 视频</label></span>
                                        </td>
                                        <td>
                                            <input type="checkbox" name="checkbox1"value=" 购物" onClick={this.onTextChange3} id="layer3"/>
                                            <span> <label htmlFor=" 购物"> 购物</label></span>
                                        </td>
                                        <td>
                                            <input type="checkbox" name="checkbox1" value= "音乐"onClick={this.onTextChange4} id="layer4"/>
                                            <span> <label htmlFor=" 音乐"> 音乐</label></span>
                                        </td>
                                        <td>
                                            <input type="checkbox" name="checkbox1" value="layer5"onClick={this.onTextChange5} id=" 地图导航"/>
                                            <span> <label htmlFor=" 地图导航"> 地图导航</label></span>
                                        </td>
                                        <td>
                                            <input type="checkbox" name="checkbox1" value="layer6"onClick={this.onTextChange6} id=" 浏览器"/>
                                            <span> <label htmlFor=" 浏览器"> 浏览器</label></span>
                                        </td>
                                        <td>
                                            <input type="checkbox" name="checkbox1" value="layer7"onClick={this.onTextChange7}id=" 新闻资讯"/>
                                            <span> <label htmlFor=" 新闻资讯"> 新闻资讯</label></span>
                                        </td>
                                        <td>
                                            <input type="checkbox" name="checkbox1" value="layer8"onClick={this.onTextChange8}id=" 输入法"/>
                                            <span> <label htmlFor=" 输入法"> 输入法</label></span>
                                        </td>
                                        <td>
                                            <input type="checkbox" name="checkbox1" value="layer9"onClick={this.onTextChange9} id=" 搜索引擎"/>
                                            <span> <label htmlFor=" 搜索引擎"> 搜索引擎</label></span>
                                        </td>
                                        <td>
                                            <input type="checkbox" name="checkbox1" value="layer10"onClick={this.onTextChange10} id=" 网银支付"/>
                                            <span> <label htmlFor=" 网银支付"> 网银支付</label></span>
                                        </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" name="checkbox1" value="layer11"onClick={this.onTextChange11} id=" 美食快餐"/>
                                        <span> <label htmlFor=" 美食快餐"> 美食快餐</label></span>
                                     </td>
                                    <td>
                                        <input type="checkbox" name="checkbox1" value="layer12"onClick={this.onTextChange12} id=" 团购"/>
                                        <span> <label htmlFor=" 团购"> 团购</label></span>
                                    </td>
                                     <td>
                                        <input type="checkbox" name="checkbox1" value="layer13"onClick={this.onTextChange13} id=" 摄影摄像"/>
                                         <span> <label htmlFor=" 摄影摄像"> 摄影摄像</label></span>
                                    </td>
                                    <td>
                                        <input type="checkbox" name="checkbox1" value="layer14"onClick={this.onTextChange14} id=" 阅读"/>
                                        <span> <label htmlFor=" 阅读"> 阅读</label></span>
                                    </td>
                                    <td>
                                        <input type="checkbox" name="checkbox1" value="layer15"onClick={this.onTextChange15} id=" 旅游出行"/>
                                        <span> <label htmlFor=" 旅游出行"> 旅游出行</label></span>
                                    </td>
                                    <td>
                                        <input type="checkbox" name="checkbox1" value="layer16"onClick={this.onTextChange16} id=" 手机游戏"/>
                                        <span> <label htmlFor=" 手机游戏"> 手机游戏</label></span>
                                    </td>
                                    <td>
                                        <input type="checkbox" name="checkbox1" value="layer17"onClick={this.onTextChange17} id=" 休闲娱乐"/>
                                        <span> <label htmlFor=" 休闲娱乐"> 休闲娱乐</label></span>
                                    </td>
                                    <td>
                                        <input type="checkbox" name="checkbox1" value="layer18"onClick={this.onTextChange18} id=" 生活服务"/>
                                        <span> <label htmlFor=" 生活服务"> 生活服务</label></span>
                                    </td>
                                    <td>
                                        <input type="checkbox" name="checkbox1" value="layer19"onClick={this.onTextChange19} id=" 应用商店"/>
                                        <span> <label htmlFor=" 应用商店"> 应用商店</label></span>
                                    </td>
                                    <td>
                                        <input type="checkbox" name="checkbox1" value="layer20"onClick={this.onTextChange20} id=" 云盘"/>
                                        <span> <label htmlFor=" 云盘"> 云盘</label></span>
                                    </td>
                                    <td>
                                        <input type="checkbox" name="checkbox1" value="layer21"onClick={this.onTextChange21} id=" 工具"/>
                                        <span> <label htmlFor=" 工具"> 工具</label></span>
                                    </td>
                              </tr>
                              <tr>
                                    <td>
                                        <input type="checkbox" name="checkbox1" value="layer22" onClick={this.onTextChange22}id=" 安全杀毒"/>
                                        <span> <label htmlFor=" 安全杀毒"> 安全杀毒</label></span>
                                    </td>

                                    <td>
                                        <input type="checkbox" name="checkbox1" value="layer23" onClick={this.onTextChange23} id=" 商务办公"/>
                                        <span> <label htmlFor=" 商务办公"> 商务办公</label></span>
                                    </td>
                                    <td>
                                        <input type="checkbox" name="checkbox1" value="layer24" onClick={this.onTextChange24} id=" 医疗健康"/>
                                        <span> <label htmlFor=" 医疗健康"> 医疗健康</label></span>
                                    </td>
                                    <td>
                                        <input type="checkbox" name="checkbox1" value="layer25" onClick={this.onTextChange25} id=" 教育学习"/>
                                        <span> <label htmlFor=" 教育学习"> 教育学习</label></span>
                                    </td>
                                    <td>
                                        <input type="checkbox" name="checkbox1" value="layer26" onClick={this.onTextChange26} id=" 求职招聘"/>
                                        <span> <label htmlFor=" 求职招聘"> 求职招聘</label></span>
                                    </td>
                                    <td>
                                        <input type="checkbox" name="checkbox1" value="layer27" onClick={this.onTextChange27} id=" 婚恋交友"/>
                                        <span> <label htmlFor=" 婚恋交友"> 婚恋交友</label></span>
                                    </td>
                                    <td>
                                        <input type="checkbox" name="checkbox1" value="layer28" onClick={this.onTextChange28} id=" 母婴"/>
                                        <span> <label htmlFor=" 母婴"> 母婴</label></span>
                                    </td>
                                    <td>
                                        <input type="checkbox" name="checkbox1" value="layer29" onClick={this.onTextChange29} id=" 买房租房"/>
                                        <span> <label htmlFor=" 买房租房"> 买房租房</label></span>
                                    </td>
                                    <td>
                                        <input type="checkbox" name="checkbox1" value="layer30" onClick={this.onTextChanget30} id="  投资理财"/>
                                        <span> <label htmlFor=" 投资理财"> 投资理财</label></span>
                                    </td>
                                    <td>
                                        <input type="checkbox" name="checkbox1" value="layer31" onClick={this.onTextChange31} id=" 用车软件"/>
                                        <span> <label htmlFor=" 用车软件"> 用车软件</label></span>
                                    </td>
                               </tr>
                        </table>
                    </div>

               )
           }
});
//class Component extends React.Component{
//                 render(){
//         return (
//             <div>
//               <CheckboxGroup/>
//             </div>
//         );
//     }
// }
export default CheckboxGroup;






