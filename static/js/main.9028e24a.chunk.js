(this["webpackJsonpelance-audit-checker"]=this["webpackJsonpelance-audit-checker"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),c=a.n(r),u=(a(12),a(3)),o=a(4),s=a(6),i=a(5),m=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleCashInChange=function(e){Number(e.target.value);n.setState({cashIn:e.target.value})},n.handleBonusChange=function(e){n.setState({bonus:e.target.value})},n.handleWinLoseChange=function(e){n.setState({winLose:e.target.value})},n.handleOutstandingChange=function(e){n.setState({outstanding:e.target.value})},n.handleCashOutChange=function(e){n.setState({cashOut:e.target.value})},n.handleNowBalanceChange=function(e){n.setState({nowBalance:e.target.value})},n.handleSubmit=function(e){e.preventDefault();var t=n.state,a=t.cashIn,l=t.bonus,r=t.winLose,c=t.outstanding,u=t.cashOut,o=t.nowBalance,s=Number(a)+Number(l)+Number(r)-Number(c)-Number(u),i=s-Number(o);n.setState({auditCheck:i.toFixed(2),validAmount:s.toFixed(2)}),0===i?n.setState({result:"Valid",textColor:"green"}):i<0?n.setState({result:"Invalid",textColor:"red"}):n.setState({result:"Excess",textColor:"Orange"})},n.state={cashIn:"",bonus:"",winLose:"",outstanding:"",cashOut:"",auditCheck:0,result:"",textColor:"gray",error:"",validAmount:0,nowBalance:""},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.nowBalance,a=e.textColor,n=e.validAmount,r=e.auditCheck,c=e.cashIn,u=e.bonus,o=e.winLose,s=e.outstanding,i=e.cashOut,m=e.result;return l.a.createElement("div",{className:"col-xs-12"},l.a.createElement("h1",null,"Audit Check"),l.a.createElement("table",{className:"table-bordered",onMouseEnter:!0},l.a.createElement("tr",null,l.a.createElement("th",{colspan:"2"},"Expected Amount"),l.a.createElement("th",null,"Current Balance")),l.a.createElement("tr",null,l.a.createElement("td",null,"Cash In Balance After:"),l.a.createElement("td",null,l.a.createElement("input",{type:"number",value:c,onChange:this.handleCashInChange,placeholder:"0"})),l.a.createElement("td",{rowSpan:"5",className:"text-center"},"Now Balance:",l.a.createElement("br",null),l.a.createElement("input",{className:"text-center",type:"number",value:t,onChange:this.handleNowBalanceChange,placeholder:"0"})),l.a.createElement("td",{rowSpan:"6"},l.a.createElement("h3",{className:"p-2",style:{color:this.state.textColor}},m))),l.a.createElement("tr",null,l.a.createElement("td",null,"Bonus:"),l.a.createElement("td",null,l.a.createElement("input",{type:"number",value:u,onChange:this.handleBonusChange,placeholder:"0"}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Win/Loss Amount:"),l.a.createElement("td",null,l.a.createElement("input",{type:"number",value:o,onChange:this.handleWinLoseChange,placeholder:"0"}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Outstanding Amount:"),l.a.createElement("td",null,l.a.createElement("input",{type:"number",value:s,onChange:this.handleOutstandingChange,placeholder:"0"}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Cash Out Amount:"),l.a.createElement("td",null,l.a.createElement("input",{type:"number",value:i,onChange:this.handleCashOutChange,placeholder:"0"}))),l.a.createElement("tr",{className:"text-right font-weight-bold"},l.a.createElement("td",null,"Valid Amount:"),l.a.createElement("td",{className:"text-success"},n)),l.a.createElement("tr",{className:"text-right font-weight-bold"},l.a.createElement("td",{colspan:"3"},"Audit Check:",l.a.createElement("span",{style:{color:"".concat(a)}},r))),l.a.createElement("tr",null,l.a.createElement("td",{colspan:"3"},l.a.createElement("button",{className:"btn btn-primary btn-block",onClick:this.handleSubmit},"Submit")))))}}]),a}(n.Component);var h=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement(m,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.9028e24a.chunk.js.map