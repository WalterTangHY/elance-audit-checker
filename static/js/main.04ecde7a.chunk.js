(this["webpackJsonpelance-audit-checker"]=this["webpackJsonpelance-audit-checker"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(6),c=a.n(r),o=(a(13),a(7)),u=a(1),s=a(2),i=a(4),m=a(3),h=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleCashInChange=function(e){Number(e.target.value);n.setState({cashIn:e.target.value})},n.handleBonusChange=function(e){n.setState({bonus:e.target.value})},n.handleWinLoseChange=function(e){n.setState({winLose:e.target.value})},n.handleOutstandingChange=function(e){n.setState({outstanding:e.target.value})},n.handleCashOutChange=function(e){n.setState({cashOut:e.target.value})},n.handleNowBalanceChange=function(e){n.setState({nowBalance:e.target.value})},n.handleSubmit=function(e){e.preventDefault();var t=n.state,a=t.cashIn,l=t.bonus,r=t.winLose,c=t.outstanding,o=t.cashOut,u=t.nowBalance,s=Number(a)+Number(l)+Number(r)-Number(c)-Number(o),i=s-Number(u);n.setState({auditCheck:i.toFixed(2),validAmount:s.toFixed(2)}),0==i?n.setState({result:"Valid",textColor:"green"}):i<0?n.setState({result:"Invalid",textColor:"red"}):n.setState({result:"Excess",textColor:"Orange"})},n.state={cashIn:"",bonus:"",winLose:"",outstanding:"",cashOut:"",auditCheck:0,result:"",textColor:"gray",error:"",validAmount:0,nowBalance:""},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.nowBalance,a=e.textColor,n=e.validAmount,r=e.auditCheck,c=e.cashIn,o=e.bonus,u=e.winLose,s=e.outstanding,i=e.cashOut,m=e.result;return l.a.createElement("div",{className:"col-xs-12"},l.a.createElement("h1",null,"Audit Check"),l.a.createElement("table",{className:"table-bordered",onMouseEnter:!0},l.a.createElement("tr",null,l.a.createElement("th",{colspan:"2"},"Expected Amount"),l.a.createElement("th",null,"Current Balance")),l.a.createElement("tr",null,l.a.createElement("td",null,"Cash In Balance After:"),l.a.createElement("td",null,l.a.createElement("input",{type:"number",value:c,onChange:this.handleCashInChange,placeholder:"0"})),l.a.createElement("td",{rowSpan:"5",className:"text-center"},"Now Balance:",l.a.createElement("br",null),l.a.createElement("input",{className:"text-center",type:"number",value:t,onChange:this.handleNowBalanceChange,placeholder:"0"})),l.a.createElement("td",{rowSpan:"6"},l.a.createElement("h3",{className:"p-2",style:{color:this.state.textColor}},m))),l.a.createElement("tr",null,l.a.createElement("td",null,"Bonus:"),l.a.createElement("td",null,l.a.createElement("input",{type:"number",value:o,onChange:this.handleBonusChange,placeholder:"0"}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Win/Loss Amount:"),l.a.createElement("td",null,l.a.createElement("input",{type:"number",value:u,onChange:this.handleWinLoseChange,placeholder:"0"}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Outstanding Amount:"),l.a.createElement("td",null,l.a.createElement("input",{type:"number",value:s,onChange:this.handleOutstandingChange,placeholder:"0"}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Cash Out Amount:"),l.a.createElement("td",null,l.a.createElement("input",{type:"number",value:i,onChange:this.handleCashOutChange,placeholder:"0"}))),l.a.createElement("tr",{className:"text-right font-weight-bold"},l.a.createElement("td",null,"Valid Amount:"),l.a.createElement("td",{className:"text-success"},n)),l.a.createElement("tr",{className:"text-right font-weight-bold"},l.a.createElement("td",{colspan:"3"},"Audit Check:",l.a.createElement("span",{style:{color:"".concat(a)}},r))),l.a.createElement("tr",null,l.a.createElement("td",{colspan:"3"},l.a.createElement("button",{className:"btn btn-primary btn-block",onClick:this.handleSubmit},"Submit")))))}}]),a}(n.Component);n.Component;var d=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",Object(o.a)({className:"App"},"className","container-fluid"),l.a.createElement(h,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.04ecde7a.chunk.js.map