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
 * @author luli
 * @date 2016/8/31
 */
import React from 'react';

class RecentAccess extends React.Component{
    rendHead(){
        return(
            <div className="ws-recentAccess-header">
                <img className="ws-recentAccess-img" src="/src/images/recentAccess/u558.png"/>
                <span className="ws-recentAccess-text">近期访问</span>
            </div>
        );
    }
    rendContent(){
        var access=[];
        access.push((
            <span className="ws-recentAccess-access">
                <img className="ws-recentAccess-contentImg" src="/src/images/recentAccess/u484.png">
                </img>
                <p>APP排行榜</p>
            </span>
        ));
        return(
            <div className="ws-recentAccess-content">
                {access}
            </div>
        );
    }
    render(){
        var t=this;
        return(
            <div className="ws-recentAccess">
                {t.rendHead()}
                {t.rendContent()}
            </div>
        );
    }
}

export default RecentAccess;