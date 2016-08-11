
import React from 'react';
import ReactDOM from 'react-dom';
     var data=[
        {proId:"001",proName:"全国"},
        {proId:"002",proName:"北京"},
         {proId:"003",proName:"上海"},
         {proId:"004",proName:"广州"}
    ];
var ProList = React.createClass({
    render:function () {
        var ProNodes = this.props.data.map(function (option) {
            return(
                <option className="sel-opt" value={option.proId}>
                    {option.proName}
                </option>
            );
        });
        return(
            <select className="sel-main">
                {ProNodes}
            </select>

        );
    }
});
var Selector = React.createClass({
    render() {
        return (
            <div className="sel-div">
                <ProList data={data}/>
            </div>

                );
    }

});

export default Selector;