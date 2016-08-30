
/**
 *
 * <p>Title: BONC - React </p>
 *
 * <p>Description: 界面上第一种table组件封装 wsTableCol4.js </p>
 *
 * <p>Copyright: Copyright BONC(c) 2013 - 2025 </p>
 *
 * <p>Company: 北京东方国信科技股份有限公司 </p>
 *
 * @author Yelj
 * @version 1.0.0
 */


import React, { PropTypes } from 'react';
import {Table1,Column,Flex} from '../../src/index';
import '../css/table-ws.less';

const data = [
    {排名: '1', "/site/images/table/sociality.png,社交": '/site/images/table/weixin.png,微信', 活跃用户数: 57639,变化: '0'},
    {排名: '2', "/site/images/table/sociality.png,社交": '/site/images/table/qq.png,QQ',   活跃用户数: 53958,变化: '0'},
    {排名: '3', "/site/images/table/sociality.png,社交": '/site/images/table/weibo.png,新浪微博', 活跃用户数: 10184,变化: '0'},
    {排名: '4', "/site/images/table/sociality.png,社交": '/site/images/table/qqkj.png,QQ空间', 活跃用户数: 8643,变化: '0'},
    {排名: '5', "/site/images/table/sociality.png,社交": '/site/images/table/zhfb.png,旺信', 活跃用户数: 6689,变化: '0'},

    {排名: '1', "/site/images/table/video.png,视频": '/site/images/table/u7942.png,腾讯视频', 活跃用户数: 23399,变化: '1'},
    {排名: '2', "/site/images/table/video.png,视频": '/site/images/table/u7954.png,爱奇艺视频',   活跃用户数: 19246,变化: '-1'},
    {排名: '3', "/site/images/table/video.png,视频": '/site/images/table/u7970.png,爱奇艺PPS影音', 活跃用户数: 16172,变化: '0'},
    {排名: '4', "/site/images/table/video.png,视频": '/site/images/table/u735.png,PPTV', 活跃用户数: 11294,变化: '0'},
    {排名: '5', "/site/images/table/video.png,视频": '/site/images/table/u905.png,优酷', 活跃用户数: 3932,变化: '0'},

    {排名: '1', "/site/images/table/shopping.png,购物": '/site/images/table/u7946.png,手机淘宝', 活跃用户数: 21949,变化: '0'},
    {排名: '2', "/site/images/table/shopping.png,购物": '/site/images/table/u8003.png,京东',   活跃用户数: 19246,变化: '0'},
    {排名: '3', "/site/images/table/shopping.png,购物": '/site/images/table/u777.png,唯品会', 活跃用户数: 16172,变化: '0'},
    {排名: '4', "/site/images/table/shopping.png,购物": '/site/images/table/u937.png,天猫', 活跃用户数: 11294,变化: '0'},
    {排名: '5', "/site/images/table/shopping.png,购物": '/site/images/table/u785.png,蘑菇街', 活跃用户数: 3932,变化: '0'},

    {排名: '1', "/site/images/table/music.png,音乐": '/site/images/table/weixin.png,微信', 活跃用户数: 57639,变化: '0'},
    {排名: '2', "/site/images/table/music.png,音乐": '/site/images/table/qq.png,QQ',   活跃用户数: 53958,变化: '0'},
    {排名: '3', "/site/images/table/music.png,音乐": '/site/images/table/weibo.png,新浪微博', 活跃用户数: 10184,变化: '0'},
    {排名: '4', "/site/images/table/music.png,音乐": '/site/images/table/qqkj.png,QQ空间', 活跃用户数: 8643,变化: '0'},
    {排名: '5', "/site/images/table/music.png,音乐": '/site/images/table/zhfb.png,旺信', 活跃用户数: 6689,变化: '0'},

    {排名: '1', "/site/images/table/map.png,地图导航": '/site/images/table/u7942.png,腾讯视频', 活跃用户数: 23399,变化: '1'},
    {排名: '2', "/site/images/table/map.png,地图导航": '/site/images/table/u7954.png,爱奇艺视频',   活跃用户数: 19246,变化: '-1'},
    {排名: '3', "/site/images/table/map.png,地图导航": '/site/images/table/u7970.png,爱奇艺PPS影音', 活跃用户数: 16172,变化: '0'},
    {排名: '4', "/site/images/table/map.png,地图导航": '/site/images/table/u735.png,PPTV', 活跃用户数: 11294,变化: '0'},
    {排名: '5', "/site/images/table/map.png,地图导航": '/site/images/table/u905.png,优酷', 活跃用户数: 3932,变化: '0'},

    {排名: '1', "/site/images/table/browser.png,浏览器": '/site/images/table/u7946.png,手机淘宝', 活跃用户数: 21949,变化: '0'},
    {排名: '2', "/site/images/table/browser.png,浏览器": '/site/images/table/u8003.png,京东',   活跃用户数: 19246,变化: '0'},
    {排名: '3', "/site/images/table/browser.png,浏览器": '/site/images/table/u777.png,唯品会', 活跃用户数: 16172,变化: '0'},
    {排名: '4', "/site/images/table/browser.png,浏览器": '/site/images/table/u937.png,天猫', 活跃用户数: 11294,变化: '0'},
    {排名: '5', "/site/images/table/browser.png,浏览器": '/site/images/table/u785.png,蘑菇街', 活跃用户数: 3932,变化: '0'},

    {排名: '1', "/site/images/table/news.png,新闻资讯": '/site/images/table/weixin.png,微信', 活跃用户数: 57639,变化: '0'},
    {排名: '2', "/site/images/table/news.png,新闻资讯": '/site/images/table/qq.png,QQ',   活跃用户数: 53958,变化: '0'},
    {排名: '3', "/site/images/table/news.png,新闻资讯": '/site/images/table/weibo.png,新浪微博', 活跃用户数: 10184,变化: '0'},
    {排名: '4', "/site/images/table/news.png,新闻资讯": '/site/images/table/qqkj.png,QQ空间', 活跃用户数: 8643,变化: '0'},
    {排名: '5', "/site/images/table/news.png,新闻资讯": '/site/images/table/zhfb.png,旺信', 活跃用户数: 6689,变化: '0'},

    {排名: '1', "/site/images/table/print.png,输入法": '/site/images/table/u7942.png,腾讯视频', 活跃用户数: 23399,变化: '1'},
    {排名: '2', "/site/images/table/print.png,输入法": '/site/images/table/u7954.png,爱奇艺视频',   活跃用户数: 19246,变化: '-1'},
    {排名: '3', "/site/images/table/print.png,输入法": '/site/images/table/u7970.png,爱奇艺PPS影音', 活跃用户数: 16172,变化: '0'},
    {排名: '4', "/site/images/table/print.png,输入法": '/site/images/table/u735.png,PPTV', 活跃用户数: 11294,变化: '0'},
    {排名: '5', "/site/images/table/print.png,输入法": '/site/images/table/u905.png,优酷', 活跃用户数: 3932,变化: '0'},

    {排名: '1', "/site/images/table/searcher.png,搜索引擎": '/site/images/table/u7946.png,手机淘宝', 活跃用户数: 21949,变化: '0'},
    {排名: '2', "/site/images/table/searcher.png,搜索引擎": '/site/images/table/u8003.png,京东',   活跃用户数: 19246,变化: '0'},
    {排名: '3', "/site/images/table/searcher.png,搜索引擎": '/site/images/table/u777.png,唯品会', 活跃用户数: 16172,变化: '0'},
    {排名: '4', "/site/images/table/searcher.png,搜索引擎": '/site/images/table/u937.png,天猫', 活跃用户数: 11294,变化: '0'},
    {排名: '5', "/site/images/table/searcher.png,搜索引擎": '/site/images/table/u785.png,蘑菇街', 活跃用户数: 3932,变化: '0'},

    {排名: '1', "/site/images/table/payment.png,网银支付": '/site/images/table/weixin.png,微信', 活跃用户数: 57639,变化: '0'},
    {排名: '2', "/site/images/table/payment.png,网银支付": '/site/images/table/qq.png,QQ',   活跃用户数: 53958,变化: '0'},
    {排名: '3', "/site/images/table/payment.png,网银支付": '/site/images/table/weibo.png,新浪微博', 活跃用户数: 10184,变化: '0'},
    {排名: '4', "/site/images/table/payment.png,网银支付": '/site/images/table/qqkj.png,QQ空间', 活跃用户数: 8643,变化: '0'},
    {排名: '5', "/site/images/table/payment.png,网银支付": '/site/images/table/zhfb.png,旺信', 活跃用户数: 6689,变化: '0'},

    {排名: '1', "/site/images/table/food.png,美食快餐": '/site/images/table/u7942.png,腾讯视频', 活跃用户数: 23399,变化: '1'},
    {排名: '2', "/site/images/table/food.png,美食快餐": '/site/images/table/u7954.png,爱奇艺视频',   活跃用户数: 19246,变化: '-1'},
    {排名: '3', "/site/images/table/food.png,美食快餐": '/site/images/table/u7970.png,爱奇艺PPS影音', 活跃用户数: 16172,变化: '0'},
    {排名: '4', "/site/images/table/food.png,美食快餐": '/site/images/table/u735.png,PPTV', 活跃用户数: 11294,变化: '0'},
    {排名: '5', "/site/images/table/food.png,美食快餐": '/site/images/table/u905.png,优酷', 活跃用户数: 3932,变化: '0'},

    {排名: '1', "/site/images/table/groupbuy.png,团购": '/site/images/table/u7946.png,手机淘宝', 活跃用户数: 21949,变化: '0'},
    {排名: '2', "/site/images/table/groupbuy.png,团购": '/site/images/table/u8003.png,京东',   活跃用户数: 19246,变化: '0'},
    {排名: '3', "/site/images/table/groupbuy.png,团购": '/site/images/table/u777.png,唯品会', 活跃用户数: 16172,变化: '0'},
    {排名: '4', "/site/images/table/groupbuy.png,团购": '/site/images/table/u937.png,天猫', 活跃用户数: 11294,变化: '0'},
    {排名: '5', "/site/images/table/groupbuy.png,团购": '/site/images/table/u785.png,蘑菇街', 活跃用户数: 3932,变化: '0'},

    {排名: '1', "/site/images/table/photography.png,摄影摄像": '/site/images/table/weixin.png,微信', 活跃用户数: 57639,变化: '0'},
    {排名: '2', "/site/images/table/photography.png,摄影摄像": '/site/images/table/qq.png,QQ',   活跃用户数: 53958,变化: '0'},
    {排名: '3', "/site/images/table/photography.png,摄影摄像": '/site/images/table/weibo.png,新浪微博', 活跃用户数: 10184,变化: '0'},
    {排名: '4', "/site/images/table/photography.png,摄影摄像": '/site/images/table/qqkj.png,QQ空间', 活跃用户数: 8643,变化: '0'},
    {排名: '5', "/site/images/table/photography.png,摄影摄像": '/site/images/table/zhfb.png,旺信', 活跃用户数: 6689,变化: '0'},

    {排名: '1', "/site/images/table/reading.png,阅读": '/site/images/table/u7942.png,腾讯视频', 活跃用户数: 23399,变化: '1'},
    {排名: '2', "/site/images/table/reading.png,阅读": '/site/images/table/u7954.png,爱奇艺视频',   活跃用户数: 19246,变化: '-1'},
    {排名: '3', "/site/images/table/reading.png,阅读": '/site/images/table/u7970.png,爱奇艺PPS影音', 活跃用户数: 16172,变化: '0'},
    {排名: '4', "/site/images/table/reading.png,阅读": '/site/images/table/u735.png,PPTV', 活跃用户数: 11294,变化: '0'},
    {排名: '5', "/site/images/table/reading.png,阅读": '/site/images/table/u905.png,优酷', 活跃用户数: 3932,变化: '0'},

    {排名: '1', "/site/images/table/tour.png,旅游出行": '/site/images/table/u7946.png,手机淘宝', 活跃用户数: 21949,变化: '0'},
    {排名: '2', "/site/images/table/tour.png,旅游出行": '/site/images/table/u8003.png,京东',   活跃用户数: 19246,变化: '0'},
    {排名: '3', "/site/images/table/tour.png,旅游出行": '/site/images/table/u777.png,唯品会', 活跃用户数: 16172,变化: '0'},
    {排名: '4', "/site/images/table/tour.png,旅游出行": '/site/images/table/u937.png,天猫', 活跃用户数: 11294,变化: '0'},
    {排名: '5', "/site/images/table/tour.png,旅游出行": '/site/images/table/u785.png,蘑菇街', 活跃用户数: 3932,变化: '0'},

    {排名: '1', "/site/images/table/game.png,手机游戏": '/site/images/table/weixin.png,微信', 活跃用户数: 57639,变化: '0'},
    {排名: '2', "/site/images/table/game.png,手机游戏": '/site/images/table/qq.png,QQ',   活跃用户数: 53958,变化: '0'},
    {排名: '3', "/site/images/table/game.png,手机游戏": '/site/images/table/weibo.png,新浪微博', 活跃用户数: 10184,变化: '0'},
    {排名: '4', "/site/images/table/game.png,手机游戏": '/site/images/table/qqkj.png,QQ空间', 活跃用户数: 8643,变化: '0'},
    {排名: '5', "/site/images/table/game.png,手机游戏": '/site/images/table/zhfb.png,旺信', 活跃用户数: 6689,变化: '0'},

    {排名: '1', "/site/images/table/entertainment.png,休闲娱乐": '/site/images/table/u7942.png,腾讯视频', 活跃用户数: 23399,变化: '1'},
    {排名: '2', "/site/images/table/entertainment.png,休闲娱乐": '/site/images/table/u7954.png,爱奇艺视频',   活跃用户数: 19246,变化: '-1'},
    {排名: '3', "/site/images/table/entertainment.png,休闲娱乐": '/site/images/table/u7970.png,爱奇艺PPS影音', 活跃用户数: 16172,变化: '0'},
    {排名: '4', "/site/images/table/entertainment.png,休闲娱乐": '/site/images/table/u735.png,PPTV', 活跃用户数: 11294,变化: '0'},
    {排名: '5', "/site/images/table/entertainment.png,休闲娱乐": '/site/images/table/u905.png,优酷', 活跃用户数: 3932,变化: '0'},

    {排名: '1', "/site/images/table/service.png,生活服务": '/site/images/table/u7946.png,手机淘宝', 活跃用户数: 21949,变化: '0'},
    {排名: '2', "/site/images/table/service.png,生活服务": '/site/images/table/u8003.png,京东',   活跃用户数: 19246,变化: '0'},
    {排名: '3', "/site/images/table/service.png,生活服务": '/site/images/table/u777.png,唯品会', 活跃用户数: 16172,变化: '0'},
    {排名: '4', "/site/images/table/service.png,生活服务": '/site/images/table/u937.png,天猫', 活跃用户数: 11294,变化: '0'},
    {排名: '5', "/site/images/table/service.png,生活服务": '/site/images/table/u785.png,蘑菇街', 活跃用户数: 3932,变化: '0'},

    {排名: '1', "/site/images/table/shop.png,应用商店": '/site/images/table/weixin.png,微信', 活跃用户数: 57639,变化: '0'},
    {排名: '2', "/site/images/table/shop.png,应用商店": '/site/images/table/qq.png,QQ',   活跃用户数: 53958,变化: '0'},
    {排名: '3', "/site/images/table/shop.png,应用商店": '/site/images/table/weibo.png,新浪微博', 活跃用户数: 10184,变化: '0'},
    {排名: '4', "/site/images/table/shop.png,应用商店": '/site/images/table/qqkj.png,QQ空间', 活跃用户数: 8643,变化: '0'},
    {排名: '5', "/site/images/table/shop.png,应用商店": '/site/images/table/zhfb.png,旺信', 活跃用户数: 6689,变化: '0'},

    {排名: '1', "/site/images/table/yun.png,云盘": '/site/images/table/u7942.png,腾讯视频', 活跃用户数: 23399,变化: '1'},
    {排名: '2', "/site/images/table/yun.png,云盘": '/site/images/table/u7954.png,爱奇艺视频',   活跃用户数: 19246,变化: '-1'},
    {排名: '3', "/site/images/table/yun.png,云盘": '/site/images/table/u7970.png,爱奇艺PPS影音', 活跃用户数: 16172,变化: '0'},
    {排名: '4', "/site/images/table/yun.png,云盘": '/site/images/table/u735.png,PPTV', 活跃用户数: 11294,变化: '0'},
    {排名: '5', "/site/images/table/yun.png,云盘": '/site/images/table/u905.png,优酷', 活跃用户数: 3932,变化: '0'},

    {排名: '1', "/site/images/table/tools.png,工具": '/site/images/table/u7946.png,手机淘宝', 活跃用户数: 21949,变化: '0'},
    {排名: '2', "/site/images/table/tools.png,工具": '/site/images/table/u8003.png,京东',   活跃用户数: 19246,变化: '0'},
    {排名: '3', "/site/images/table/tools.png,工具": '/site/images/table/u777.png,唯品会', 活跃用户数: 16172,变化: '0'},
    {排名: '4', "/site/images/table/tools.png,工具": '/site/images/table/u937.png,天猫', 活跃用户数: 11294,变化: '0'},
    {排名: '5', "/site/images/table/tools.png,工具": '/site/images/table/u785.png,蘑菇街', 活跃用户数: 3932,变化: '0'},

    {排名: '1', "/site/images/table/safety.png,安全杀毒": '/site/images/table/weixin.png,微信', 活跃用户数: 57639,变化: '0'},
    {排名: '2', "/site/images/table/safety.png,安全杀毒": '/site/images/table/qq.png,QQ',   活跃用户数: 53958,变化: '0'},
    {排名: '3', "/site/images/table/safety.png,安全杀毒": '/site/images/table/weibo.png,新浪微博', 活跃用户数: 10184,变化: '0'},
    {排名: '4', "/site/images/table/safety.png,安全杀毒": '/site/images/table/qqkj.png,QQ空间', 活跃用户数: 8643,变化: '0'},
    {排名: '5', "/site/images/table/safety.png,安全杀毒": '/site/images/table/zhfb.png,旺信', 活跃用户数: 6689,变化: '0'},

    {排名: '1', "/site/images/table/office.png,商务办公": '/site/images/table/u7942.png,腾讯视频', 活跃用户数: 23399,变化: '1'},
    {排名: '2', "/site/images/table/office.png,商务办公": '/site/images/table/u7954.png,爱奇艺视频',   活跃用户数: 19246,变化: '-1'},
    {排名: '3', "/site/images/table/office.png,商务办公": '/site/images/table/u7970.png,爱奇艺PPS影音', 活跃用户数: 16172,变化: '0'},
    {排名: '4', "/site/images/table/office.png,商务办公": '/site/images/table/u735.png,PPTV', 活跃用户数: 11294,变化: '0'},
    {排名: '5', "/site/images/table/office.png,商务办公": '/site/images/table/u905.png,优酷', 活跃用户数: 3932,变化: '0'},

    {排名: '1', "/site/images/table/health.png,医疗健康": '/site/images/table/u7946.png,手机淘宝', 活跃用户数: 21949,变化: '0'},
    {排名: '2', "/site/images/table/health.png,医疗健康": '/site/images/table/u8003.png,京东',   活跃用户数: 19246,变化: '0'},
    {排名: '3', "/site/images/table/health.png,医疗健康": '/site/images/table/u777.png,唯品会', 活跃用户数: 16172,变化: '0'},
    {排名: '4', "/site/images/table/health.png,医疗健康": '/site/images/table/u937.png,天猫', 活跃用户数: 11294,变化: '0'},
    {排名: '5', "/site/images/table/health.png,医疗健康": '/site/images/table/u785.png,蘑菇街', 活跃用户数: 3932,变化: '0'},

    {排名: '1', "/site/images/table/education.png,教育学习": '/site/images/table/weixin.png,微信', 活跃用户数: 57639,变化: '0'},
    {排名: '2', "/site/images/table/education.png,教育学习": '/site/images/table/qq.png,QQ',   活跃用户数: 53958,变化: '0'},
    {排名: '3', "/site/images/table/education.png,教育学习": '/site/images/table/weibo.png,新浪微博', 活跃用户数: 10184,变化: '0'},
    {排名: '4', "/site/images/table/education.png,教育学习": '/site/images/table/qqkj.png,QQ空间', 活跃用户数: 8643,变化: '0'},
    {排名: '5', "/site/images/table/education.png,教育学习": '/site/images/table/zhfb.png,旺信', 活跃用户数: 6689,变化: '0'},

    {排名: '1', "/site/images/table/employment.png,求职招聘": '/site/images/table/u7942.png,腾讯视频', 活跃用户数: 23399,变化: '1'},
    {排名: '2', "/site/images/table/employment.png,求职招聘": '/site/images/table/u7954.png,爱奇艺视频',   活跃用户数: 19246,变化: '-1'},
    {排名: '3', "/site/images/table/employment.png,求职招聘": '/site/images/table/u7970.png,爱奇艺PPS影音', 活跃用户数: 16172,变化: '0'},
    {排名: '4', "/site/images/table/employment.png,求职招聘": '/site/images/table/u735.png,PPTV', 活跃用户数: 11294,变化: '0'},
    {排名: '5', "/site/images/table/employment.png,求职招聘": '/site/images/table/u905.png,优酷', 活跃用户数: 3932,变化: '0'},

    {排名: '1', "/site/images/table/marrige.png,婚恋交友": '/site/images/table/u7946.png,手机淘宝', 活跃用户数: 21949,变化: '0'},
    {排名: '2', "/site/images/table/marrige.png,婚恋交友": '/site/images/table/u8003.png,京东',   活跃用户数: 19246,变化: '0'},
    {排名: '3', "/site/images/table/marrige.png,婚恋交友": '/site/images/table/u777.png,唯品会', 活跃用户数: 16172,变化: '0'},
    {排名: '4', "/site/images/table/marrige.png,婚恋交友": '/site/images/table/u937.png,天猫', 活跃用户数: 11294,变化: '0'},
    {排名: '5', "/site/images/table/marrige.png,婚恋交友": '/site/images/table/u785.png,蘑菇街', 活跃用户数: 3932,变化: '0'},

    {排名: '1', "/site/images/table/mother.png,母婴": '/site/images/table/weixin.png,微信', 活跃用户数: 57639,变化: '0'},
    {排名: '2', "/site/images/table/mother.png,母婴": '/site/images/table/qq.png,QQ',   活跃用户数: 53958,变化: '0'},
    {排名: '3', "/site/images/table/mother.png,母婴": '/site/images/table/weibo.png,新浪微博', 活跃用户数: 10184,变化: '0'},
    {排名: '4', "/site/images/table/mother.png,母婴": '/site/images/table/qqkj.png,QQ空间', 活跃用户数: 8643,变化: '0'},
    {排名: '5', "/site/images/table/mother.png,母婴": '/site/images/table/zhfb.png,旺信', 活跃用户数: 6689,变化: '0'},

    {排名: '1', "/site/images/table/house.png,买房租房": '/site/images/table/u7942.png,腾讯视频', 活跃用户数: 23399,变化: '1'},
    {排名: '2', "/site/images/table/house.png,买房租房": '/site/images/table/u7954.png,爱奇艺视频',   活跃用户数: 19246,变化: '-1'},
    {排名: '3', "/site/images/table/house.png,买房租房": '/site/images/table/u7970.png,爱奇艺PPS影音', 活跃用户数: 16172,变化: '0'},
    {排名: '4', "/site/images/table/house.png,买房租房": '/site/images/table/u735.png,PPTV', 活跃用户数: 11294,变化: '0'},
    {排名: '5', "/site/images/table/house.png,买房租房": '/site/images/table/u905.png,优酷', 活跃用户数: 3932,变化: '0'},

    {排名: '1', "/site/images/table/fund.png,投资理财": '/site/images/table/u7946.png,手机淘宝', 活跃用户数: 21949,变化: '0'},
    {排名: '2', "/site/images/table/fund.png,投资理财": '/site/images/table/u8003.png,京东',   活跃用户数: 19246,变化: '0'},
    {排名: '3', "/site/images/table/fund.png,投资理财": '/site/images/table/u777.png,唯品会', 活跃用户数: 16172,变化: '0'},
    {排名: '4', "/site/images/table/fund.png,投资理财": '/site/images/table/u937.png,天猫', 活跃用户数: 11294,变化: '0'},
    {排名: '5', "/site/images/table/fund.png,投资理财": '/site/images/table/u785.png,蘑菇街', 活跃用户数: 3932,变化: '0'},

];

function WsTable1() {
    const dataArr=[];
    for(let i=0;i<data.length;i+=5){
        dataArr.push(data.slice(i,i+5));
    }

    const talbleType1=dataArr.map(data=>{
        const keys = Object.keys(data[0]);
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
            <div>
            <a style={aStyle}><span style={pstyle}>更多></span></a>
            <Table1 data={data} className={'basic'}>
                <Column dataKey={keys[0]} name={keys[0]} key={'col-{keys[0]}'} align='center'/>
                <Column dataKey={keys[1]} name={keys[1]} key={'col-{keys[1]}'} />
                <Column dataKey={keys[2]} name={keys[2]} key={'col-{keys[2]}'} align='center'/>
                <Column dataKey={keys[3]} name={keys[3]} key={'col-{keys[3]}'} align='center'/>
            </Table1>
            </div>
        );
    });
    return (
        <div >
        <Flex ws-flex row wrap>
            {talbleType1}
        </Flex>
        </div>
    );
}

export default WsTable1;
