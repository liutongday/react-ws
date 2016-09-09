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
 * @author zhangxinjing
 * @date 2016/9/7
 */

import React, { PropTypes } from 'react';
import {Twopageta,Column,Flex,RegionalSelector} from '../../src/index';
import '../css/twopagetab.less';

function Twopagetab(appTableData) {
    var data = [{指标名称 :'移动业务计费收入（含转售）（万元）',当日值:'5661,34',本月累计:'566100,45',同比:'-24%',环比:'31%'},
        {指标名称 :' 移动业务计费收入',当日值:'null',本月累计:'538,114.38',同比:'31%',环比:'31%'},
        {指标名称 :'  其中CBSS业务收入（万元）',当日值:'5157,49',本月累计:'538,114.38',同比:'31%',环比:'31%'},
        {指标名称 :' 转售业务计费收入',当日值:'null',本月累计:'538,114.38',同比:'31%',环比:'31%'},
        {指标名称 :'移动业务发展用户（万户）',当日值:'5157,49',本月累计:'538,114.38',同比:'31%',环比:'31%'},
        {指标名称 :'  其中CBSS发展用户（万户）',当日值:'5157,49',本月累计:'538,114.38',同比:'31%',环比:'31%'},
        {指标名称 :'    终端合约发展（万户）',当日值:'5157,49',本月累计:'538,114.38',同比:'31%',环比:'31%'},
        {指标名称 :'  移动业务计费收入',当日值:'5157,49',本月累计:'538,114.38',同比:'31%',环比:'31%'},]
    const keys = Object.keys(data[0]);

    return (
        <div className="twopage-table">
            <div className="twopage-table-main">
                <Twopageta data={data} className={'wsT4text app'}>
                    {keys.map(entry => {
                        console.info(entry)
                    let alignTd='center';
                    return( <Column dataKey={entry} name={entry} key={`col-${entry}`} align={alignTd}/>)
                })}
                </Twopageta>
            </div>
        </div>
    );
}
export default Twopagetab;
