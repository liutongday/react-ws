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


class CheckboxGroup extends  React.Component {

 selectAll(check_v, checkname) {
    var el = document.getElementsByName('input');
    var len = el.length;
    for(var i=0; i<len; i++) {
        if((el[i].type=="checkbox") && (el[i].name==name)) {
            el[i].checked = true;
        }
    }
}

 singleSelectparent(check_v, checkname) {
    var el = document.getElementsByName('input');
    var len = el.length;
    for(var i=0; i<len; i++) {
        if((el[i].type=="checkbox") && (el[i].name==name)) {
            el[i].checked = false;
        }
    }
}


    render() {
                return (
                    <div id="screen">
                        <div id="screen_down">
                            <table>
                            <td> 筛选分类：</td>
                                <td>
                                    <input type="checkbox" name="select" value=" 全选" onclick="selectAll()"id=" 全选"/>
                                    <strong><span> <label htmlFor=" 全选"> 全选</label></span></strong>
                                </td>

                                <td>
                                    <input type="checkbox" name="checkbox1"value="layer1" onclick="singleSelectparent('checkbox_v1', 'checkbox1')"id=" 社交"/>
                                    <span> <label htmlFor=" 社交"> 社交</label></span>
                                </td>
                                <td>
                                    <input type="checkbox"   name="checkbox1" value="layer2"onclick="singleSelectparent('checkbox_v1', 'checkbox1')"id=" 视频"/>
                                    <span> <label htmlFor=" 视频"><span> 视频</span></label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="checkbox1"value="layer3" onclick="singleSelectparent('checkbox_v1', 'checkbox1')" id=" 购物"/>
                                    <span> <label htmlFor=" 购物"> 购物</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="checkbox1" value="layer4"onclick="singleSelectparent('checkbox_v1', 'checkbox1')" id=" 音乐"/>
                                    <span> <label htmlFor=" 音乐"> 音乐</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="checkbox1" value="layer5"onclick="singleSelectparent('checkbox_v1', 'checkbox1')" id=" 地图导航"/>
                                    <span> <label htmlFor=" 地图导航"> 地图导航</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="checkbox1" value="layer6"onclick="singleSelectparent('checkbox_v1', 'checkbox1')" id=" 浏览器"/>
                                    <span> <label htmlFor=" 浏览器"> 浏览器</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="checkbox1" value="layer7"onclick="singleSelectparent('checkbox_v1', 'checkbox1')" id=" 新闻资讯"/>
                                    <span> <label htmlFor=" 新闻资讯"> 新闻资讯</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="checkbox1" value="layer8"onclick="singleSelectparent('checkbox_v1', 'checkbox1')" id=" 输入法"/>
                                    <span> <label htmlFor=" 输入法"> 输入法</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="checkbox1" value="layer9"onclick="singleSelectparent('checkbox_v1', 'checkbox1')" id=" 搜索引擎"/>
                                    <span> <label htmlFor=" 搜索引擎"> 搜索引擎</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="checkbox1" value="layer10"onclick="singleSelectparent('checkbox_v1', 'checkbox1')" id=" 网银支付"/>
                                    <span> <label htmlFor=" 网银支付"> 网银支付</label></span>
                                </td>
                             <tr>
                                <td></td>
                                <td>
                                    <input type="checkbox" name="checkbox1" value="layer11"onclick="singleSelectparent('checkbox_v1', 'checkbox1')" id=" 美食快餐"/>
                                    <span> <label htmlFor=" 美食快餐"> 美食快餐</label></span>
                                 </td>
                                <td>
                                    <input type="checkbox" name="checkbox1" value="layer12"onclick="singleSelectparent('checkbox_v1', 'checkbox1')" id=" 团购"/>
                                    <span> <label htmlFor=" 团购"> 团购</label></span>
                                </td>
                                 <td>
                                    <input type="checkbox" name="checkbox1" value="layer13"onclick="singleSelectparent('checkbox_v1', 'checkbox1')" id=" 摄影摄像"/>
                                     <span> <label htmlFor=" 摄影摄像"> 摄影摄像</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="checkbox1" value="layer14"onclick="singleSelectparent('checkbox_v1', 'checkbox1')" id=" 阅读"/>
                                    <span> <label htmlFor=" 阅读"> 阅读</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="checkbox1" value="layer15"onclick="singleSelectparent('checkbox_v1', 'checkbox1')" id=" 旅游出行"/>
                                    <span> <label htmlFor=" 旅游出行"> 旅游出行</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="checkbox1" value="layer16"onclick="singleSelectparent('checkbox_v1', 'checkbox1')" id=" 手机游戏"/>
                                    <span> <label htmlFor=" 手机游戏"> 手机游戏</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="checkbox1" value="layer17"onclick="singleSelectparent('checkbox_v1', 'checkbox1')" id=" 休闲娱乐"/>
                                    <span> <label htmlFor=" 休闲娱乐"> 休闲娱乐</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="checkbox1" value="layer18"onclick="singleSelectparent('checkbox_v1', 'checkbox1')" id=" 生活服务"/>
                                    <span> <label htmlFor=" 生活服务"> 生活服务</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="checkbox1" value="layer19"onclick="singleSelectparent('checkbox_v1', 'checkbox1')" id=" 应用商店"/>
                                    <span> <label htmlFor=" 应用商店"> 应用商店</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="checkbox1" value="layer20"onclick="singleSelectparent('checkbox_v1', 'checkbox1')" id=" 云盘"/>
                                    <span> <label htmlFor=" 云盘"> 云盘</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="checkbox1" value="layer21"onclick="singleSelectparent('checkbox_v1', 'checkbox1')" id=" 工具"/>
                                    <span> <label htmlFor=" 工具"> 工具</label></span>
                                </td>
                              </tr>

                            <tr>
                                <td></td>
                                <td>
                                    <input type="checkbox" name="checkbox1" value="layer22" onclick="singleSelectparent('checkbox_v1', 'checkbox1')"id=" 安全杀毒"/>
                                    <span> <label htmlFor=" 安全杀毒"> 安全杀毒</label></span>
                                </td>

                                <td>
                                    <input type="checkbox" name="checkbox1" value="layer23" onclick="singleSelectparent('checkbox_v1', 'checkbox1')" id=" 商务办公"/>
                                    <span> <label htmlFor=" 商务办公"> 商务办公</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="checkbox1" value="layer24" onclick="singleSelectparent('checkbox_v1', 'checkbox1')" id=" 医疗健康"/>
                                    <span> <label htmlFor=" 医疗健康"> 医疗健康</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="checkbox1" value="layer25" onclick="singleSelectparent('checkbox_v1', 'checkbox1')" id=" 教育学习"/>
                                    <span> <label htmlFor=" 教育学习"> 教育学习</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="checkbox1" value="layer26" onclick="singleSelectparent('checkbox_v1', 'checkbox1')" id=" 求职招聘"/>
                                    <span> <label htmlFor=" 求职招聘"> 求职招聘</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="checkbox1" value="layer27" onclick="singleSelectparent('checkbox_v1', 'checkbox1')" id=" 婚恋交友"/>
                                    <span> <label htmlFor=" 婚恋交友"> 婚恋交友</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="checkbox1" value="layer28" onclick="singleSelectparent('checkbox_v1', 'checkbox1')" id=" 母婴"/>
                                    <span> <label htmlFor=" 母婴"> 母婴</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="checkbox1" value="layer29" onclick="singleSelectparent('checkbox_v1', 'checkbox1')" id=" 买房租房"/>
                                    <span> <label htmlFor=" 买房租房"> 买房租房</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="checkbox1" value="layer30" onclick="singleSelectparent('checkbox_v1', 'checkbox1')" id="  投资理财"/>
                                    <span> <label htmlFor=" 投资理财"> 投资理财</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="checkbox1" value="layer31" onclick="singleSelectparent('checkbox_v1', 'checkbox1')" id=" 用车软件"/>
                                    <span> <label htmlFor=" 用车软件"> 用车软件</label></span>
                                </td>
                            </tr>

                            </table>

                        </div>
                    </div>
               )
           }

}
class Component extends React.Component{
    render(){
        return (
            <div>
              <CheckboxGroup/>
            </div>
        );
    }
}

export default Component;
