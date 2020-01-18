(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{30:function(e,t,a){},31:function(e,t,a){},35:function(e,t,a){e.exports=a(67)},40:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},66:function(e,t,a){e.exports=a.p+"static/media/edit.2927f8de.svg"},67:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(32),c=a.n(l),o=(a(40),a(5)),r=a(11),s=a(7),u=a(6),m=a(8),d=a(10),h=a(13),p=a(12),v=a.n(p),E="http://localhost:8080/events/",f={CREATE:"".concat(E,"add/"),READ:E,UPDATE:"".concat(E,"update/"),DELETE:"".concat(E,"delete/")},g=(a(59),function(e){return i.a.createElement("div",{className:e.classname},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null))}),b=(a(60),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).deleteEvent=function(e){v.a.delete(f.DELETE+e).then((function(e){return console.log(e)})).catch((function(e){console.log(e)}));var t=a.state.events.filter((function(t){return t._id!==e}));a.setState({events:t})},a.state={events:[],spinner:!1},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({spinner:!0}),setTimeout((function(){v.a.get(f.READ).then((function(t){e.setState({events:t.data})})).catch((function(e){console.log(e)})),e.setState({spinner:!1})}),2e3)}},{key:"render",value:function(){var e=this,t=this.state,n=t.events,l=t.spinner;return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"events-list"},i.a.createElement(d.b,{to:"/add",style:{textDecoration:"none"}},i.a.createElement("input",{type:"button",value:"Add new event"})),l?i.a.createElement(g,{classname:"spinner"}):n.sort((function(e,t){return e.date.localeCompare(t.date)||e.time.localeCompare(t.time)})).map((function(t){var n=new Date(t.date),l=n.getFullYear(),c=n.toLocaleString("en-us",{month:"short"}),o=n.getDate();return i.a.createElement("div",{key:t._id,className:"event"},i.a.createElement("div",{className:"left"},i.a.createElement("div",{className:"day"},o),i.a.createElement("div",{className:"month-year"},c," ",l),i.a.createElement("div",{className:"time"},t.time)),i.a.createElement("div",{className:"right"},i.a.createElement("div",{className:"edit"},i.a.createElement(d.b,{to:"/edit/"+t._id},i.a.createElement("img",{className:"edit",src:a(66),alt:"edit"}))),i.a.createElement("img",{className:"delete",src:"https://image.flaticon.com/icons/svg/32/32178.svg",alt:"delete",onClick:function(){return e.deleteEvent(t._id)}}),i.a.createElement("div",{className:"content"},i.a.createElement("div",null,i.a.createElement("b",null,t.title)),i.a.createElement("div",null,i.a.createElement("i",null,t.location)),t.description?i.a.createElement("div",{className:"description"},t.description):null)))}))))}}]),t}(n.Component)),y=a(16),C=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state=void 0,a.handleInputChange=function(e){},a.handleSubmit=function(e){},a.success=function(){alert("Success")},a}return Object(m.a)(t,e),t}(n.Component),j=(a(30),a(31),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={title:"",date:"",time:"",location:"",description:""},a.handleInputChange=function(e){var t=e.target;a.setState(Object(y.a)({},t.name,t.value))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n={title:t.title,date:t.date,time:t.time,location:t.location,description:t.description};v.a.post(f.CREATE,n).then((function(e){console.log(e.data),a.success()})),a.setState({title:"",date:"",time:"",location:"",description:""})},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.date,n=e.time,l=e.location,c=e.description,o=t&&a&&n;return i.a.createElement("div",{className:"container"},i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("input",{type:"text",name:"title",placeholder:"Title","max-length":"15",value:t,onChange:this.handleInputChange}),i.a.createElement("input",{type:"date",name:"date",placeholder:"Date",value:a,onChange:this.handleInputChange}),i.a.createElement("input",{type:"time",name:"time",placeholder:"Time",value:n,onChange:this.handleInputChange}),i.a.createElement("input",{type:"text",name:"location",placeholder:"Location","max-length":"15",value:l,onChange:this.handleInputChange}),i.a.createElement("input",{type:"text",name:"description",placeholder:"Additional info","max-length":"15",value:c,onChange:this.handleInputChange}),i.a.createElement("input",{type:"submit",disabled:!o,value:"Add event"}),o?null:i.a.createElement("div",{className:"require"},"Title, date and time is required.")),i.a.createElement(d.b,{to:"/",style:{textDecoration:"none"}},i.a.createElement("input",{type:"button",value:"Back"})))}}]),t}(C)),O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={_id:"",title:"",date:"",time:"",location:"",description:""},a.handleInputChange=function(e){var t=e.target;a.setState(Object(y.a)({},t.name,t.value))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.title,i=t.date,l=t.time,c=t.location,o=t.description,r=a.props.match.params.id,s={title:n,date:i,time:l,location:c,description:o};v.a.post(f.UPDATE+r,s).then((function(e){console.log(e.data),a.success()}))},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;v.a.get(f.READ+t).then((function(t){var a=t.data,n=a._id,i=a.title,l=a.date,c=a.time,o=a.location,r=a.description;e.setState({_id:n,title:i,date:l,time:c,location:o,description:r})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.date,n=e.time,l=e.location,c=e.description,o=t&&a&&n;return i.a.createElement("div",{className:"container"},i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("input",{type:"text",name:"title",placeholder:"Title","max-length":"15",value:t,onChange:this.handleInputChange}),i.a.createElement("input",{type:"date",name:"date",placeholder:"Date",value:a,onChange:this.handleInputChange}),i.a.createElement("input",{type:"time",name:"time",placeholder:"Time",value:n,onChange:this.handleInputChange}),i.a.createElement("input",{type:"text",name:"location",placeholder:"Location","max-length":"15",value:l,onChange:this.handleInputChange}),i.a.createElement("input",{type:"text",name:"description",placeholder:"Additional info","max-length":"15",value:c,onChange:this.handleInputChange}),i.a.createElement("input",{type:"submit",disabled:!o,value:"Update event"}),o?null:i.a.createElement("div",{className:"require"},"Title, date and time is required.")),i.a.createElement(d.b,{to:"/",style:{textDecoration:"none"}},i.a.createElement("input",{type:"button",value:"Back"})))}}]),t}(C),x=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,null,i.a.createElement(h.a,{path:"/",exact:!0,component:b}),i.a.createElement(h.a,{path:"/add",component:j}),i.a.createElement(h.a,{path:"/edit/:id",component:O}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.0652cb0b.chunk.js.map