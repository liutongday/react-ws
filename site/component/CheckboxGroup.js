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
        console.info(document.getElementById("layer1").value);
        this.props.callbackParent(document.getElementById("layer1").value);
},
    onTextChange2: function () {
        this.setState({checked: !this.state.checked});
        console.info(document.getElementById("layer2").value);
        this.props.callbackParent(document.getElementById("layer2").value);
    },
    onTextChange3: function () {
        this.setState({checked: !this.state.checked});
        console.info(document.getElementById("layer3").value);
        this.props.callbackParent(document.getElementById("layer3").value);
    },
    onTextChange4: function () {
        this.setState({checked: !this.state.checked});
        console.info(document.getElementById("layer4").value);
        this.props.callbackParent(document.getElementById("layer4").value);
    },
    onTextChange5: function () {
        this.setState({checked: !this.state.checked});
        console.info(document.getElementById("layer5").value);
        this.props.callbackParent(document.getElementById("layer5").value);
    },
    onTextChange6: function () {
        this.setState({checked: !this.state.checked});
        console.info(document.getElementById("layer6").value);
        this.props.callbackParent(document.getElementById("layer6").value);
    },
    onTextChange7: function () {
        this.setState({checked: !this.state.checked});
        console.info(document.getElementById("layer7").value);
        this.props.callbackParent(document.getElementById("layer7").value);
    },
    onTextChange8: function () {
        this.setState({checked: !this.state.checked});
        console.info(document.getElementById("layer8").value);
        this.props.callbackParent(document.getElementById("layer8").value);
    },
    onTextChange9: function () {
        this.setState({checked: !this.state.checked});
        console.info(document.getElementById("layer9").value);
        this.props.callbackParent(document.getElementById("layer9").value);
    },
    onTextChange10: function () {
        this.setState({checked: !this.state.checked});
        console.info(document.getElementById("layer10").value);
        this.props.callbackParent(document.getElementById("layer10").value);
    },
    onTextChange11: function () {
        this.setState({checked: !this.state.checked});
        console.info(document.getElementById("layer11").value);
        this.props.callbackParent(document.getElementById("layer11").value);
    },
    onTextChange12: function () {
        this.setState({checked: !this.state.checked});
        console.info(document.getElementById("layer12").value);
        this.props.callbackParent(document.getElementById("layer12").value);
    },
    onTextChange13: function () {
        this.setState({checked: !this.state.checked});
        console.info(document.getElementById("layer13").value);
        this.props.callbackParent(document.getElementById("layer13").value);
    },
    onTextChange14: function () {
        this.setState({checked: !this.state.checked});
        console.info(document.getElementById("layer14").value);
        this.props.callbackParent(document.getElementById("layer14").value);
    },
    onTextChange15: function () {
        this.setState({checked: !this.state.checked});
        console.info(document.getElementById("layer15").value);
        this.props.callbackParent(document.getElementById("layer15").value);
    },
    onTextChange16: function () {
        this.setState({checked: !this.state.checked});
        console.info(document.getElementById("layer16").value);
        this.props.callbackParent(document.getElementById("layer16").value);
    },
    onTextChange17: function () {
        this.setState({checked: !this.state.checked});
        console.info(document.getElementById("layer17").value);
        this.props.callbackParent(document.getElementById("layer17").value);
    },
    onTextChange18: function () {
        this.setState({checked: !this.state.checked});
        console.info(document.getElementById("layer18").value);
        this.props.callbackParent(document.getElementById("layer18").value);
    },
    onTextChange19: function () {
        this.setState({checked: !this.state.checked});
        console.info(document.getElementById("layer19").value);
        this.props.callbackParent(document.getElementById("layer19").value);
    },
    onTextChange20: function () {
        this.setState({checked: !this.state.checked});
        console.info(document.getElementById("layer20").value);
        this.props.callbackParent(document.getElementById("layer20").value);
    },
    onTextChange21: function () {
        this.setState({checked: !this.state.checked});
        console.info(document.getElementById("layer21").value);
        this.props.callbackParent(document.getElementById("layer21").value);
    },
    onTextChange22: function () {
        this.setState({checked: !this.state.checked});
        console.info(document.getElementById("layer22").value);
        this.props.callbackParent(document.getElementById("layer22").value);
    },
    onTextChange23: function () {
        this.setState({checked: !this.state.checked});
        console.info(document.getElementById("layer23").value);
        this.props.callbackParent(document.getElementById("layer23").value);
    },
    onTextChange24: function () {
        this.setState({checked: !this.state.checked});
        console.info(document.getElementById("layer24").value);
        this.props.callbackParent(document.getElementById("layer24").value);
    },
    onTextChange25: function () {
        this.setState({checked: !this.state.checked});
        console.info(document.getElementById("layer25").value);
        this.props.callbackParent(document.getElementById("layer25").value);
    },
    onTextChange26: function () {
        this.setState({checked: !this.state.checked});
        console.info(document.getElementById("layer26").value);
        this.props.callbackParent(document.getElementById("layer26").value);
    },
    onTextChange27: function () {
        this.setState({checked: !this.state.checked});
        console.info(document.getElementById("layer27").value);
        this.props.callbackParent(document.getElementById("layer27").value);
    },
    onTextChange28: function () {
        this.setState({checked: !this.state.checked});
        console.info(document.getElementById("layer28").value);
        this.props.callbackParent(document.getElementById("layer28").value);
    }, onTextChange29: function () {
        this.setState({checked: !this.state.checked});
        console.info(document.getElementById("layer29").value);
        this.props.callbackParent(document.getElementById("layer29").value);
    }, onTextChange30: function () {
        this.setState({checked: !this.state.checked});
        console.info(document.getElementById("layer30").value);
        this.props.callbackParent(document.getElementById("layer30").value);
    }, onTextChange31: function () {
        this.setState({checked: !this.state.checked});
        console.info(document.getElementById("layer31").value);
        this.props.callbackParent(document.getElementById("layer31").value);
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
                                            <input type="checkbox" id ="controlAll" value=" 全选"  onClick={this.selectAll}/>
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
                                            <input type="checkbox" name="checkbox1" value="地图导航"onClick={this.onTextChange5} id="layer5"/>
                                            <span> <label htmlFor=" 地图导航"> 地图导航</label></span>
                                        </td>
                                        <td>
                                            <input type="checkbox" name="checkbox1" value="浏览器"onClick={this.onTextChange6} id="layer6"/>
                                            <span> <label htmlFor=" 浏览器"> 浏览器</label></span>
                                        </td>
                                        <td>
                                            <input type="checkbox" name="checkbox1" value="新闻资讯"onClick={this.onTextChange7}id="layer7"/>
                                            <span> <label htmlFor=" 新闻资讯"> 新闻资讯</label></span>
                                        </td>
                                        <td>
                                            <input type="checkbox" name="checkbox1" value="输入法"onClick={this.onTextChange8}id="layer8"/>
                                            <span> <label htmlFor=" 输入法"> 输入法</label></span>
                                        </td>
                                        <td>
                                            <input type="checkbox" name="checkbox1" value="搜索引擎"onClick={this.onTextChange9} id="layer9"/>
                                            <span> <label htmlFor=" 搜索引擎"> 搜索引擎</label></span>
                                        </td>
                                        <td>
                                            <input type="checkbox" name="checkbox1" value="网银支付"onClick={this.onTextChange10} id="layer10"/>
                                            <span> <label htmlFor=" 网银支付"> 网银支付</label></span>
                                        </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" name="checkbox1" value="美食快餐"onClick={this.onTextChange11} id="layer11"/>
                                        <span> <label htmlFor=" 美食快餐"> 美食快餐</label></span>
                                     </td>
                                    <td>
                                        <input type="checkbox" name="checkbox1" value="团购"onClick={this.onTextChange12} id="layer12"/>
                                        <span> <label htmlFor=" 团购"> 团购</label></span>
                                    </td>
                                     <td>
                                        <input type="checkbox" name="checkbox1" value="摄影摄像"onClick={this.onTextChange13} id="layer13"/>
                                         <span> <label htmlFor=" 摄影摄像"> 摄影摄像</label></span>
                                    </td>
                                    <td>
                                        <input type="checkbox" name="checkbox1" value="阅读"onClick={this.onTextChange14} id="layer14"/>
                                        <span> <label htmlFor=" 阅读"> 阅读</label></span>
                                    </td>
                                    <td>
                                        <input type="checkbox" name="checkbox1" value="旅游出行"onClick={this.onTextChange15} id="layer15"/>
                                        <span> <label htmlFor=" 旅游出行"> 旅游出行</label></span>
                                    </td>
                                    <td>
                                        <input type="checkbox" name="checkbox1" value="手机游戏"onClick={this.onTextChange16} id="layer16"/>
                                        <span> <label htmlFor=" 手机游戏"> 手机游戏</label></span>
                                    </td>
                                    <td>
                                        <input type="checkbox" name="checkbox1" value="休闲娱乐"onClick={this.onTextChange17} id="layer17"/>
                                        <span> <label htmlFor=" 休闲娱乐"> 休闲娱乐</label></span>
                                    </td>
                                    <td>
                                        <input type="checkbox" name="checkbox1" value="生活服务"onClick={this.onTextChange18} id="layer18"/>
                                        <span> <label htmlFor=" 生活服务"> 生活服务</label></span>
                                    </td>
                                    <td>
                                        <input type="checkbox" name="checkbox1" value="应用商店"onClick={this.onTextChange19} id="layer19"/>
                                        <span> <label htmlFor=" 应用商店"> 应用商店</label></span>
                                    </td>
                                    <td>
                                        <input type="checkbox" name="checkbox1" value="云盘"onClick={this.onTextChange20} id="layer20"/>
                                        <span> <label htmlFor=" 云盘"> 云盘</label></span>
                                    </td>
                                    <td>
                                        <input type="checkbox" name="checkbox1" value="工具"onClick={this.onTextChange21} id="layer21"/>
                                        <span> <label htmlFor=" 工具"> 工具</label></span>
                                    </td>
                              </tr>
                              <tr>
                                    <td>
                                        <input type="checkbox" name="checkbox1" value="安全杀毒" onClick={this.onTextChange22}id="layer22"/>
                                        <span> <label htmlFor=" 安全杀毒"> 安全杀毒</label></span>
                                    </td>

                                    <td>
                                        <input type="checkbox" name="checkbox1" value="商务办公" onClick={this.onTextChange23} id="layer23"/>
                                        <span> <label htmlFor=" 商务办公"> 商务办公</label></span>
                                    </td>
                                    <td>
                                        <input type="checkbox" name="checkbox1" value="医疗健康" onClick={this.onTextChange24} id="layer24"/>
                                        <span> <label htmlFor=" 医疗健康"> 医疗健康</label></span>
                                    </td>
                                    <td>
                                        <input type="checkbox" name="checkbox1" value="教育学习" onClick={this.onTextChange25} id="layer25"/>
                                        <span> <label htmlFor=" 教育学习"> 教育学习</label></span>
                                    </td>
                                    <td>
                                        <input type="checkbox" name="checkbox1" value="求职招聘" onClick={this.onTextChange26} id="layer26"/>
                                        <span> <label htmlFor=" 求职招聘"> 求职招聘</label></span>
                                    </td>
                                    <td>
                                        <input type="checkbox" name="checkbox1" value="婚恋交友" onClick={this.onTextChange27} id="layer27"/>
                                        <span> <label htmlFor=" 婚恋交友"> 婚恋交友</label></span>
                                    </td>
                                    <td>
                                        <input type="checkbox" name="checkbox1" value="母婴" onClick={this.onTextChange28} id="layer28"/>
                                        <span> <label htmlFor=" 母婴"> 母婴</label></span>
                                    </td>
                                    <td>
                                        <input type="checkbox" name="checkbox1" value="买房租房" onClick={this.onTextChange29} id="layer29"/>
                                        <span> <label htmlFor=" 买房租房"> 买房租房</label></span>
                                    </td>
                                    <td>
                                        <input type="checkbox" name="checkbox1" value="投资理财" onClick={this.onTextChanget30} id="layer30"/>
                                        <span> <label htmlFor=" 投资理财"> 投资理财</label></span>
                                    </td>
                                    <td>
                                        <input type="checkbox" name="checkbox1" value="用车软件" onClick={this.onTextChange31} id="layer31"/>
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






