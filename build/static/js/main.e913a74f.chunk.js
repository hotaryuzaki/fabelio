(this.webpackJsonpfabelio=this.webpackJsonpfabelio||[]).push([[0],{31:function(e,t,a){e.exports=a(58)},36:function(e,t,a){},37:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),l=a.n(c),o=(a(36),a(37),a(12)),i=a.n(o),u=a(22),s=a(7),m=a(23),d=a.n(m);var f=function(e){return!(Object.keys(e.data).length>0)||e.data.map((function(e,t){return r.a.createElement("div",{key:t,className:"productCont"},r.a.createElement("div",{className:"productBox"},r.a.createElement("div",{className:"product"},r.a.createElement("div",{className:"prodHead"},r.a.createElement("div",{className:"prodName"},e.name),r.a.createElement("div",{className:"prodPrice"},"Rp",e.price.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."))),r.a.createElement("div",{className:"prodDesc"},e.description.substr(0,114),"..."),r.a.createElement("div",{className:"prodFstyle"},e.furniture_style.join(", ")),r.a.createElement("div",{className:"prodDelivery"},"Delivery time : ",e.delivery_time," hari"))))}))},v=a(30),p=a(24),b=a(25),h=a(27),E=a(29),y=a(2),g=a(28),k=function(e){return r.a.createElement("div",null,r.a.createElement(y.z.Option,e,r.a.createElement("input",{type:"checkbox",checked:e.isSelected,onChange:function(){return null}})," ",r.a.createElement("label",null,e.label)))},O=function(e){return r.a.createElement(y.z.MultiValue,e,r.a.createElement("span",null,e.data.label))},j=function(e){Object(E.a)(a,e);var t=Object(h.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props,t=e.options,a=e.onChangeCallback,n=Object(v.a)(e,["options","onChangeCallback"]);return r.a.createElement(g.a,Object.assign({closeMenuOnSelect:!1,isMulti:!0,components:{Option:k,MultiValue:O},options:t,hideSelectedOptions:!1,backspaceRemovesValue:!1,onChange:function(e){return a(e)}},n))}}]),a}(n.Component);j.defaultProps={options:[]};var C=j;var N=function(e){if(Object.keys(e.options).length>0){var t=[];return e.options.map((function(e){return t.push({label:e,value:e})})),r.a.createElement(C,{placeholder:"Furniture Style",options:t,value:e.value,onChangeCallback:e.onChangeCallback})}return!0};var w=function(e){return r.a.createElement(C,{placeholder:"Furniture Delivery",options:e.options,value:e.value,onChangeCallback:e.onChangeCallback})};var D=function(e,t){return e.filter((function(e,a,n){var r;return e.name.toLowerCase().includes(t)&&(r=e),r}))};var S=function(e,t){return e.filter((function(e,a,n){return-1!==e.furniture_style.findIndex((function(e){return!t||(!(t.length>0)||-1!==t.findIndex((function(t){return e===t.value})))}))?e:""}))};var x=function(e,t){var a={};return e.filter((function(e,n,r){return t&&t.length>0?-1!==t.findIndex((function(t){switch(parseInt(t.value)){case 1:a={fromDay:1,toDay:7};break;case 2:a={fromDay:8,toDay:14};break;case 3:a={fromDay:22,toDay:30};break;case 4:a={fromDay:31,toDay:365};break;default:a={fromDay:1,toDay:365}}var n=parseInt(e.delivery_time);return n>=a.fromDay&&n<=a.toDay}))?e:"":e}))};var F=function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({}),o=Object(s.a)(l,2),m=o[0],v=o[1],p=Object(n.useState)({}),b=Object(s.a)(p,2),h=b[0],E=b[1],y=Object(n.useState)(""),g=Object(s.a)(y,2),k=g[0],O=g[1],j=Object(n.useState)([]),C=Object(s.a)(j,2),F=C[0],I=C[1],M=Object(n.useState)([]),_=Object(s.a)(M,2),B=_[0],A=_[1];return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d()("http://www.mocky.io/v2/5c9105cb330000112b649af8");case 2:t=e.sent,c(t.data),v(t.data.furniture_styles),E(t.data.products);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){if(Object.keys(a).length>0){var e=D(a.products,k),t=S(e,F),n=x(t,B);E(n)}}),[k,F,B]),r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("form",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col50"},r.a.createElement("div",{className:"filter"},r.a.createElement("input",{className:"search",type:"text",placeholder:"Search Furniture",value:k,onChange:function(e){return O(e.target.value.toLowerCase())}})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col50"},r.a.createElement("div",{className:"filter"},r.a.createElement(N,{options:m,value:F,onChangeCallback:function(e){return I(e)}}))),r.a.createElement("div",{className:"col50"},r.a.createElement("div",{className:"filter"},r.a.createElement(w,{options:[{value:"1",label:"1 week"},{value:"2",label:"2 weeks"},{value:"3",label:"1 month"},{value:"4",label:"more"}],value:B,onChangeCallback:function(e){return A(e)}})))))),r.a.createElement("div",{className:"content"},r.a.createElement(f,{data:h})))};var I=function(){var e=(new Date).getFullYear();return r.a.createElement("footer",null,r.a.createElement("p",null,"Copyrights \xa9 ",e," Ahmad Amri"))};var M=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(F,null),r.a.createElement(I,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.e913a74f.chunk.js.map