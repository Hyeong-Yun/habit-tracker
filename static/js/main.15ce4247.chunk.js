(this["webpackJsonphabit-tracker"]=this["webpackJsonphabit-tracker"]||[]).push([[0],{14:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(9),s=n.n(r),i=(n(14),n(6)),o=n(2),l=n(3),h=n(5),u=n(4),b=(n(15),n(0)),d=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleIncrement=function(){e.props.onIncrement(e.props.habit)},e.handleDecrement=function(){e.props.onDecrement(e.props.habit)},e.handleDelete=function(){e.props.onDelete(e.props.habit)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.habit,t=e.name,n=e.count;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("li",{className:"habit",children:[Object(b.jsx)("span",{classNmme:"habit-name",children:t}),Object(b.jsx)("span",{className:"habit-count",children:n}),Object(b.jsx)("button",{className:"habit-button habit-increase",onClick:this.handleIncrement,children:Object(b.jsx)("i",{className:"fas fa-plus-square"})}),Object(b.jsx)("button",{className:"habit-button habit-decrease",onClick:this.handleDecrement,children:Object(b.jsx)("i",{className:"fas fa-minus-square"})}),Object(b.jsx)("button",{className:"habit-button habit-delete",onClick:this.handleDelete,children:Object(b.jsx)("i",{className:"fas fa-trash"})})]})})}}]),n}(a.Component),j=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).inputRef=c.a.createRef(),e.onSubmit=function(t){t.preventDefault();var n=e.inputRef.current.value;n&&e.props.onAdd(n),e.inputRef.current.value=""},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("form",{className:"add-form",onSubmit:this.onSubmit,children:[Object(b.jsx)("input",{ref:this.inputRef,type:"text",className:"add-input",placeholder:"Habit"}),Object(b.jsx)("button",{className:"add-button",children:"Add"})]})}}]),n}(a.PureComponent),p=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleIncrement=function(t){e.props.onIncrement(t)},e.handleDecrement=function(t){e.props.onDecrement(t)},e.handleDelete=function(t){e.props.onDelete(t)},e.handleAdd=function(t){e.props.onAdd(t)},e.handleReset=function(){e.props.onReset()},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j,{onAdd:this.handleAdd}),Object(b.jsx)("ul",{children:this.props.habits.map((function(t){return Object(b.jsx)(d,{onIncrement:e.handleIncrement,onDecrement:e.handleDecrement,onDelete:e.handleDelete,habit:t},t.id)}))}),Object(b.jsx)("button",{onClick:this.handleReset,className:"rest-btn",children:"Reset All"})]})}}]),n}(a.Component),f=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("nav",{className:"navbar",children:[Object(b.jsx)("i",{className:"navbar-logo fas fa-leaf"}),Object(b.jsx)("span",{children:"Habit Tracker"}),Object(b.jsx)("span",{className:"navbar-count",children:this.props.totalCount})]})})}}]),n}(a.Component),m=(n(20),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={habits:[{id:1,name:"Reading",count:0},{id:2,name:"Running",count:0},{id:3,name:"Coding",count:0}]},e.handleIncrement=function(t){var n=Object(i.a)(e.state.habits),a=n.indexOf(t);n[a].count++,e.setState({habits:n})},e.handleDecrement=function(t){var n=Object(i.a)(e.state.habits),a=n.indexOf(t),c=n[a].count-1;n[a].count=c<0?0:c,e.setState({habits:n})},e.handleDelete=function(t){var n=e.state.habits.filter((function(e){return e.id!==t.id}));e.setState({habits:n})},e.handleAdd=function(t){var n=[].concat(Object(i.a)(e.state.habits),[{id:Date.now(),name:t,count:0}]);e.setState({habits:n})},e.handleReset=function(){var t=e.state.habits.map((function(e){return e.count=0,e}));e.setState({habits:t})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f,{totalCount:this.state.habits.filter((function(e){return e.count>0})).length}),Object(b.jsx)(p,{onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.handleDelete,habits:this.state.habits,onAdd:this.handleAdd,onReset:this.handleReset})]})}}]),n}(a.Component));s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.15ce4247.chunk.js.map