/**
 * Created by tongliu on 2016/8/11.
 */
import React from 'react';

var Selector = React.createClass({
    moveon:function (obj,objtext,objin) {
        obj.style.color=" #00CC00";
        obj.style.border=1;
        document.getElementsByClassName(objin).onblur="";

    },
    out:function (obj,objtext,objin) {
        obj.background="";
        obj.style.color="";
        document.getElementById(objin).focus();
        document.getElementById(objin).onblur=function anonymous() {leave(objtext);
        }
    },
    divmoveon:function (objtext,objin) {
        document.getElementById(objin).onblur="";

    },
    divout:function (objtext,objin) {
      document.getElementById(objin).focus();
        document.getElementById(objin).onblur=function anonymous() {leave(objtext);
        }
    },
    selected:function (textobj,obj,divobj) {
      document.getElementById(textobj).value=obj.firstChild.nodeValue;
        document.getElementById(divobj).style.display="none";
    },
   /* showdiv_here:function (listid,obj,num,width) {*/
   showdiv_here:function(obj){
    /*    if(num>15){
            document.getElementById(listid).style={height:'22'};
        }else {
            document.getElementById(obj).style={overflowY:hidden};

            document.getElementById(listid).style={height:num*22};

        }
        if(width<30){
            document.getElementById(listid).style.width="200";

        }*/
        document.getElementById(obj).style={display:""};
    },
    leave:function (divobj) {
        document.getElementById(divobj).style.display="none";
    },
    render() {
        return (
            <table>
                <tr>
                    <td>地域：</td>
                    <td>
                        <input type="text" readOnly="true" id="sel_input" value='全国'  />
                        <div className="sel_div1">
                            <div id="showlist1" className="sel_div2">
                                <table className="sel_tab1" cellSpacing="0" cellPadding="1">
                                    <tr>
                                        <td> </td>
                                        <td>
                                            <table className="sel_tab1" cellSpacing="0" cellPadding="0"  >
                                                <tr>
                                                    <td>
                                                        <div id="listdiv" className="sel_div3">
                                                            <table className="sel_tab2">
                                                                <tr className="sel_tr1">
                                                                    <td>全国</td>
                                                                    <td>北京</td>
                                                                    <td>上海</td>
                                                                    <td>广东</td>
                                                                </tr>

                                                            </table>


                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>

                                        </td>
                                    </tr>

                                </table>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>

        );
    }

});
export default Selector;