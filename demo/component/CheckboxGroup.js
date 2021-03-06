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
    render() {
                return (
                    <div id="screen">

                        <div id="screen_down">
                            <table>
                            <td> 筛选分类：</td>
                                <td>
                                    <input type="checkbox" name="app" id=" 全选"/>
                                    <strong><span> <label htmlFor=" 全选"> 全选</label></span></strong>
                                </td>
                                <td>
                                    <input type="checkbox" name="app" id=" 社交"/>
                                    <span> <label htmlFor=" 社交"> 社交</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="app" id=" 视频"/>
                                    <span> <label htmlFor=" 视频"><span> 视频</span></label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="app" id=" 购物"/>
                                    <span> <label htmlFor=" 购物"> 购物</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="app" id=" 音乐"/>
                                    <span> <label htmlFor=" 音乐"> 音乐</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="app" id=" 地图导航"/>
                                    <span> <label htmlFor=" 地图导航"> 地图导航</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="app" id=" 浏览器"/>
                                    <span> <label htmlFor=" 浏览器"> 浏览器</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="app" id=" 新闻资讯"/>
                                    <span> <label htmlFor=" 新闻资讯"> 新闻资讯</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="app" id=" 输入法"/>
                                    <span> <label htmlFor=" 输入法"> 输入法</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="app" id=" 搜索引擎"/>
                                    <span> <label htmlFor=" 搜索引擎"> 搜索引擎</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="app" id=" 网银支付"/>
                                    <span> <label htmlFor=" 网银支付"> 网银支付</label></span>
                                </td>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="checkbox" name="app" id=" 美食快餐"/>
                                    <span> <label htmlFor=" 美食快餐"> 美食快餐</label></span>
                                 </td>
                                <td>
                                    <input type="checkbox" name="app" id=" 团购"/>
                                    <span> <label htmlFor=" 团购"> 团购</label></span>
                                </td>
                                 <td>
                                    <input type="checkbox" name="app" id=" 摄影影像"/>
                                     <span> <label htmlFor=" 摄影影像"> 摄影影像</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="app" id=" 阅读"/>
                                    <span> <label htmlFor=" 阅读"> 阅读</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="app" id=" 旅游出行"/>
                                    <span> <label htmlFor=" 旅游出行"> 旅游出行</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="app" id=" 手机游戏"/>
                                    <span> <label htmlFor=" 手机游戏"> 手机游戏</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="app" id=" 娱乐休闲"/>
                                    <span> <label htmlFor=" 休闲娱乐"> 休闲娱乐</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="app" id=" 生活服务"/>
                                    <span> <label htmlFor=" 生活服务"> 生活服务</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="app" id=" 应用商店"/>
                                    <span> <label htmlFor=" 应用商店"> 应用商店</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="app" id=" 云盘"/>
                                    <span> <label htmlFor=" 云盘"> 云盘</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="app" id=" 工具"/>
                                    <span> <label htmlFor=" 工具"> 工具</label></span>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="checkbox" name="app" id=" 安全杀毒"/>
                                    <span> <label htmlFor=" 安全杀毒"> 安全杀毒</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="app" id=" 商务办公"/>
                                    <span> <label htmlFor=" 商务办公"> 商务办公</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="app" id=" 医疗健康"/>
                                    <span> <label htmlFor=" 医疗健康"> 医疗健康</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="app" id=" 教育学习"/>
                                    <span> <label htmlFor=" 教育学习"> 教育学习</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="app" id=" 求职招聘"/>
                                    <span> <label htmlFor=" 求职招聘"> 求职招聘</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="app" id=" 婚恋交友"/>
                                    <span> <label htmlFor=" 婚恋交友"> 婚恋交友</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="app" id=" 母婴"/>
                                    <span> <label htmlFor=" 母婴"> 母婴</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="app" id=" 买房租房"/>
                                    <span> <label htmlFor=" 买房租房"> 买房租房</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="app" id="  投资理财"/>
                                    <span> <label htmlFor=" 投资理财"> 投资理财</label></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="app" id=" 用车软件"/>
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
