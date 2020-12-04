(this["webpackJsonpday-9-generate-bank-check"]=this["webpackJsonpday-9-generate-bank-check"]||[]).push([[0],{15:function(e,c,s){},16:function(e,c,s){"use strict";s.r(c);var a=s(0),t=s(1),n=s.n(t),i=s(8),l=s.n(i),j=(s(15),s(9)),d=s(2),r=s(3),b=s(4),h=s(6),o=s(5);var m=function(){return Object(a.jsxs)("div",{className:"header-container",children:[Object(a.jsxs)("h1",{className:"header-text",children:["React Check Entry UI ",Object(a.jsx)("i",{className:"fa fa-credit-card"})]}),Object(a.jsx)("p",{className:"header-subtitle",children:"The best way to send checks online."})]})},x=function(e){Object(h.a)(s,e);var c=Object(o.a)(s);function s(){return Object(d.a)(this,s),c.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(e){var c=this.props,s=c.data,t=c.handleChange;return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{children:[Object(a.jsx)("p",{children:"Please fill in all fields below to complete registration."}),Object(a.jsxs)("div",{className:"fields-container",children:[Object(a.jsxs)("div",{className:"field-row",children:[Object(a.jsx)("div",{className:"col-25",children:Object(a.jsx)("label",{children:"Check Date"})}),Object(a.jsx)("div",{className:"col-75",children:Object(a.jsx)("input",{type:"date",name:"checkDate",onChange:t,value:s.checkDate})})]}),Object(a.jsxs)("div",{className:"field-row",children:[Object(a.jsx)("div",{className:"col-25",children:Object(a.jsx)("label",{children:"Sender Name"})}),Object(a.jsx)("div",{className:"col-75",children:Object(a.jsx)("input",{type:"text",name:"senderName",onChange:t,value:s.senderName})})]}),Object(a.jsxs)("div",{className:"field-row",children:[Object(a.jsx)("div",{className:"col-25",children:Object(a.jsx)("label",{children:"Sender Bank"})}),Object(a.jsx)("div",{className:"col-75",children:Object(a.jsx)("input",{type:"text",name:"bankName",onChange:t,value:s.bankName})})]}),Object(a.jsxs)("div",{className:"field-row",children:[Object(a.jsx)("div",{className:"col-25",children:Object(a.jsx)("label",{children:"Account Type"})}),Object(a.jsx)("div",{className:"col-75",children:Object(a.jsxs)("select",{name:"accountType",onChange:t,value:s.accountType,children:[Object(a.jsx)("option",{value:"Savings",children:"Savings"}),Object(a.jsx)("option",{value:"Checking",children:"Checking"}),Object(a.jsx)("option",{value:"BusinessSavings",children:"Business Savings"}),Object(a.jsx)("option",{value:"BusinessChecking",children:"Business Checking"})]})})]}),Object(a.jsxs)("div",{className:"field-row",children:[Object(a.jsx)("div",{className:"col-25",children:Object(a.jsx)("label",{children:"Account Number"})}),Object(a.jsx)("div",{className:"col-75",children:Object(a.jsx)("input",{type:"number",name:"accountNumber",onChange:t,value:s.accountNumber})})]}),Object(a.jsxs)("div",{className:"field-row",children:[Object(a.jsx)("div",{className:"col-25",children:Object(a.jsx)("label",{children:"Transit Number"})}),Object(a.jsx)("div",{className:"col-75",children:Object(a.jsx)("input",{type:"number",name:"transitNumber",onChange:t,value:s.transitNumber})})]}),Object(a.jsxs)("div",{className:"field-row",children:[Object(a.jsx)("div",{className:"col-25",children:Object(a.jsx)("label",{children:"Sender Address"})}),Object(a.jsx)("div",{className:"col-75",children:Object(a.jsx)("input",{type:"text",name:"address",onChange:t,value:s.address})})]}),Object(a.jsxs)("div",{className:"field-row",children:[Object(a.jsx)("div",{className:"col-25",children:Object(a.jsx)("label",{children:"City"})}),Object(a.jsx)("div",{className:"col-75",children:Object(a.jsx)("input",{type:"text",name:"city",onChange:t,value:s.city})})]}),Object(a.jsxs)("div",{className:"field-row",children:[Object(a.jsx)("div",{className:"col-25",children:Object(a.jsx)("label",{children:"State"})}),Object(a.jsx)("div",{className:"col-75",children:Object(a.jsx)("input",{type:"text",name:"senderState",maxLength:"2",onChange:t,value:s.senderState})})]}),Object(a.jsxs)("div",{className:"field-row",children:[Object(a.jsx)("div",{className:"col-25",children:Object(a.jsx)("label",{children:"Zip Code"})}),Object(a.jsx)("div",{className:"col-75",children:Object(a.jsx)("input",{type:"number",name:"zip",onChange:t,value:s.zip})})]}),Object(a.jsxs)("div",{className:"field-row",children:[Object(a.jsx)("div",{className:"col-25",children:Object(a.jsx)("label",{children:"Recipient Name"})}),Object(a.jsx)("div",{className:"col-75",children:Object(a.jsx)("input",{type:"text",name:"recipientName",onChange:t,value:s.recipientName})})]}),Object(a.jsxs)("div",{className:"field-row",children:[Object(a.jsx)("div",{className:"col-25",children:Object(a.jsx)("label",{children:"Total Amount"})}),Object(a.jsx)("div",{className:"col-75",children:Object(a.jsx)("input",{type:"number",name:"amount",onChange:t,value:s.amount})})]}),Object(a.jsxs)("div",{className:"field-row",children:[Object(a.jsx)("div",{className:"col-25",children:Object(a.jsx)("label",{children:"Memo"})}),Object(a.jsx)("div",{className:"col-75",children:Object(a.jsx)("input",{type:"text",name:"memo",maxLength:"50",onChange:t,value:s.memo})})]}),Object(a.jsx)("div",{className:"field-row",children:Object(a.jsx)("div",{className:"buttons-container",children:Object(a.jsx)("button",{children:"Submit Check"})})})]})]})})}}]),s}(t.Component);var O=function(e){var c=e.data;return console.log("State data received by props: ".concat(JSON.stringify(c))),Object(a.jsxs)("div",{className:"check-container",children:[Object(a.jsx)("div",{className:"bank-name-container",children:Object(a.jsx)("strong",{children:c.bankName})}),Object(a.jsxs)("div",{className:"sender-container",children:[Object(a.jsx)("p",{children:c.senderName}),Object(a.jsx)("p",{children:c.address}),Object(a.jsxs)("p",{children:[c.city," ",c.senderState.toUpperCase()," ",c.zip]})]}),Object(a.jsxs)("div",{className:"date-container",children:["DATE: ",c.checkDate]}),Object(a.jsxs)("div",{className:"recipient-container",children:[Object(a.jsx)("span",{children:"Pay to the Order Of:"}),Object(a.jsx)("div",{className:"recipient-text",children:c.recipientName})]}),Object(a.jsxs)("div",{className:"amount-container",children:["$",Object(a.jsx)("div",{className:"dollars-container",children:c.amount})]}),Object(a.jsxs)("div",{className:"account-type-container",children:["From:",Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"checkbox",checked:"Checking"===c.accountType,disabled:!0}),"Checking"]}),Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"checkbox",checked:"Savings"===c.accountType,disabled:!0}),"Savings"]}),Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"checkbox",checked:"BusinessChecking"===c.accountType,disabled:!0}),"Business Checking"]}),Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"checkbox",checked:"BusinessSavings"===c.accountType,disabled:!0}),"Business Savings"]})]}),Object(a.jsxs)("div",{className:"memo-container",children:[Object(a.jsx)("span",{children:"Memo:"}),c.memo]}),Object(a.jsx)("div",{className:"account-number-container",children:c.accountNumber}),Object(a.jsx)("div",{className:"transit-number-container",children:c.transitNumber})]})},u=function(e){Object(h.a)(s,e);var c=Object(o.a)(s);function s(){var e;return Object(d.a)(this,s),(e=c.call(this)).state={checkDate:"",senderName:"",bankName:"",accountType:"",accountNumber:"",transitNumber:"",address:"",city:"",senderState:"",zip:"",recipientName:"",amount:"",memo:""},e.handleCheckInput=e.handleCheckInput.bind(Object(b.a)(e)),e}return Object(r.a)(s,[{key:"handleCheckInput",value:function(e){var c=e.target,s=c.name,a=c.value;this.setState(Object(j.a)({},s,a))}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(m,{}),Object(a.jsx)(x,{handleChange:this.handleCheckInput,data:this.state}),Object(a.jsx)(O,{data:this.state})]})}}]),s}(n.a.Component);l.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(u,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.cdf4a8fb.chunk.js.map