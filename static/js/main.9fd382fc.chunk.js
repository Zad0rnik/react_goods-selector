(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),n=c(5),o=c(6),l=c(8),r=c(7),d=c(1),i=(c(13),c(14),c(2)),u=c.n(i),h=c(0),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(e){Object(l.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(n.a)(this,c);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={selectedGood:"Jam"},e.handleClear=function(){e.setState({selectedGood:""})},e.handleClick=function(t){return e.state.selectedGood===t?e.setState({selectedGood:""}):e.setState({selectedGood:t})},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(h.jsxs)("main",{className:"section container",children:[t?Object(h.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(t," is selected"),Object(h.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:this.handleClear})]}):Object(h.jsx)("h1",{className:"title",children:"No goods selected"}),Object(h.jsx)("table",{className:"table",children:Object(h.jsx)("tbody",{children:b.map((function(c){var s=c===t;return Object(h.jsxs)("tr",{"data-cy":"Good",className:u()({"has-background-success-light":s}),children:[Object(h.jsx)("td",{children:Object(h.jsx)("button",{"data-cy":u()({AddButton:!s},{RemoveButton:s}),type:"button",className:u()("button",{"is-info":s}),onClick:function(){e.handleClick(c)},children:s?"-":"+"})}),Object(h.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]})}))})})]})}}]),c}(d.Component);a.a.render(Object(h.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.9fd382fc.chunk.js.map