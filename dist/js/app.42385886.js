(function(t){function e(e){for(var a,i,c=e[0],s=e[1],l=e[2],u=0,p=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],a=!0,c=1;c<o.length;c++){var s=o[c];0!==n[s]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=o[0]))}return t}var a={},n={app:0},r=[];function i(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=a,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(o,a,function(e){return t[e]}.bind(null,a));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=s;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"07f4":function(t,e,o){},"1eca":function(t,e,o){"use strict";o("8baa")},"379c":function(t,e,o){"use strict";o("b277")},"418a":function(t,e,o){},"44fd":function(t,e,o){},5547:function(t,e,o){"use strict";o("418a")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("7a23"),n=Object(a["f"])("div",{class:"app"},null,-1);function r(t,e,o,r,i,c){var s=Object(a["l"])("v-header"),l=Object(a["l"])("v-main"),d=Object(a["l"])("v-footer");return Object(a["g"])(),Object(a["c"])(a["a"],null,[n,Object(a["f"])(s,{"data-dark":i.mode,onTopDark:c.a},null,8,["data-dark","onTopDark"]),Object(a["f"])(l,{"data-dark":i.mode},null,8,["data-dark"]),Object(a["f"])(d)],64)}var i=o("cf05"),c=o.n(i),s=Object(a["s"])("data-v-3d833785");Object(a["i"])("data-v-3d833785");var l={class:"header"},d={class:"container"},u={class:"header-wrapper"},p=Object(a["f"])("a",{href:"#",class:"header-logo"},[Object(a["f"])("img",{src:c.a,alt:"logo"})],-1),f={class:"header-title"};Object(a["h"])();var b=s((function(t,e,o,n,r,i){var c=Object(a["l"])("v-dark");return Object(a["g"])(),Object(a["c"])("header",l,[Object(a["f"])("div",d,[Object(a["f"])("div",u,[p,Object(a["f"])("h1",f,Object(a["m"])(r.nameProject),1),Object(a["f"])(c,{onUpDark:e[1]||(e[1]=function(t){return i.toup()})})])])])})),h=Object(a["s"])("data-v-56c0695c");Object(a["i"])("data-v-56c0695c");var O={class:"dark"},m={class:"dark-checkbox"};Object(a["h"])();var v=h((function(t,e,o,n,r,i){return Object(a["g"])(),Object(a["c"])("div",O,[Object(a["f"])("label",m,[Object(a["q"])(Object(a["f"])("input",{type:"checkbox","onUpdate:modelValue":e[1]||(e[1]=function(t){return r.dark=t})},null,512),[[a["n"],r.dark]]),Object(a["f"])("span",{class:{dark:r.dark}},null,2)])])})),j={data:function(){return{dark:null}},mounted:function(){"false"!==localStorage.dark&&localStorage.dark?this.dark=!0:this.dark=!1},watch:{dark:function(t){localStorage.dark=t,this.$emit("upDark")}}};o("1eca");j.render=v,j.__scopeId="data-v-56c0695c";var g=j,k={data:function(){return{nameProject:"Название проекта",k:null}},components:{vDark:g},methods:{toup:function(){this.k=localStorage.dark,this.$emit("topDark")}}};o("6c9e");k.render=b,k.__scopeId="data-v-3d833785";var S=k,_=Object(a["s"])("data-v-1fed90f6");Object(a["i"])("data-v-1fed90f6");var y={class:"main"},T={class:"popup-form"},I=Object(a["f"])("label",{for:"description"},"Описание",-1),D=Object(a["f"])("label",{for:"lvl"},"Приоритет",-1),A=Object(a["f"])("option",{value:"1",class:"popup-select"},"1",-1),w=Object(a["f"])("option",{value:"2",class:"popup-select"},"2",-1),L=Object(a["f"])("option",{value:"3",class:"popup-select"},"3",-1),J={class:"container"},E={class:"main-wrapper"};Object(a["h"])();var N=_((function(t,e,o,n,r,i){var c=Object(a["l"])("v-popup"),s=Object(a["l"])("v-plan");return Object(a["g"])(),Object(a["c"])("main",y,[r.modal?(Object(a["g"])(),Object(a["c"])(c,{key:0,onClose:i.close},{default:_((function(){return[Object(a["f"])("div",T,[Object(a["f"])("button",{onClick:e[1]||(e[1]=function(){return i.close&&i.close.apply(i,arguments)}),class:"popup-close"}," x "),I,Object(a["q"])(Object(a["f"])("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=function(t){return r.modalTitle=t}),name:"description",class:"popup-field"},null,512),[[a["p"],r.modalTitle]]),D,Object(a["q"])(Object(a["f"])("select",{name:"lvl",class:"popup-field","onUpdate:modelValue":e[3]||(e[3]=function(t){return r.modalLvl=t})},[A,w,L],512),[[a["o"],r.modalLvl]]),r.editBool?(Object(a["g"])(),Object(a["c"])("button",{key:1,onClick:e[5]||(e[5]=function(){return i.saveEdit&&i.saveEdit.apply(i,arguments)}),class:"popup-save"}," Внести изменения ")):(Object(a["g"])(),Object(a["c"])("button",{key:0,onClick:e[4]||(e[4]=function(t){return i.save(r.tasks.plan.todo)}),class:"popup-save"}," Сохранить "))])]})),_:1},8,["onClose"])):Object(a["d"])("",!0),Object(a["f"])("div",J,[Object(a["f"])("button",{onClick:e[6]||(e[6]=function(t){r.modal=!0,r.modalTitle="",r.modalLvl=1}),class:"main-btn"}," Создать задачу "),Object(a["f"])("div",E,[(Object(a["g"])(!0),Object(a["c"])(a["a"],null,Object(a["j"])(r.tasks,(function(t,e){return Object(a["g"])(),Object(a["c"])(s,{key:e,todoArr:t,onInLeft:i.inLeft,onInRight:i.inRight,onEditTask:i.editTask,onOnDrop:i.onDrop},null,8,["todoArr","onInLeft","onInRight","onEditTask","onOnDrop"])})),128))])])])})),x=(o("a434"),o("159b"),o("a4d3"),o("e01a"),Object(a["s"])("data-v-5496d7d2"));Object(a["i"])("data-v-5496d7d2");var C={class:"plan-title"},P={class:"plan-card__title"},$={class:"plan-card__description"},R={class:"plan-card__data"},M={class:"plan-card__wrapper"};Object(a["h"])();var V=x((function(t,e,o,n,r,i){return Object(a["g"])(),Object(a["c"])("div",{class:"plan",onDrop:e[1]||(e[1]=function(t){return i.onDrop(t)}),onDragover:e[2]||(e[2]=Object(a["r"])((function(){}),["prevent"])),onDragenter:e[3]||(e[3]=Object(a["r"])((function(){}),["prevent"]))},[Object(a["f"])("h2",C,Object(a["m"])(o.todoArr.title)+" ("+Object(a["m"])(i.countArr())+") ",1),(Object(a["g"])(!0),Object(a["c"])(a["a"],null,Object(a["j"])(o.todoArr.todo,(function(e){return Object(a["g"])(),Object(a["c"])("div",{key:e.id,class:"plan-card",draggable:"true",onDragstart:function(t){return i.onDragStart(t,e)}},[Object(a["f"])("h3",P,[Object(a["e"])(" Задача №"+Object(a["m"])(e.id)+" ",1),Object(a["f"])("span",{class:{low:1==e.lvl,medium:2==e.lvl,height:3==e.lvl}},Object(a["m"])(e.lvl),3)]),Object(a["f"])("div",$,Object(a["m"])(e.description),1),Object(a["f"])("p",R,Object(a["m"])(e.date),1),Object(a["f"])("div",M,[Object(a["f"])("button",{class:"plan-card__btn plan-card__btn__min",disabled:i.disablePlan,onClick:function(t){return i.inLeft(o.todoArr,e.id)}}," <-",8,["disabled","onClick"]),Object(a["f"])("button",{class:"plan-card__btn",onClick:function(a){return t.$emit("editTask",{task:e,id:e.id,title:o.todoArr.title})}}," Редактировать",8,["onClick"]),"Готово"!==o.todoArr.title?(Object(a["g"])(),Object(a["c"])("button",{key:0,class:"plan-card__btn plan-card__btn__min",onClick:function(t){return i.inRight(o.todoArr,e.id)}}," -> ",8,["onClick"])):(Object(a["g"])(),Object(a["c"])("button",{key:1,class:"plan-card__btn plan-card__btn__min",onClick:function(t){return i.deletTask(e.id,o.todoArr)}}," x ",8,["onClick"]))])],40,["onDragstart"])})),128))],32)})),B=(o("d81d"),o("4de4"),{data:function(){return{modalEdit:!1,editLvl:null,editDesc:null}},props:{todoArr:Object},methods:{onDragStart:function(t,e){t.dataTransfer.dropEffect="move",t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("todoId",this.todoArr.todo.map((function(t){return t.id})).indexOf(e.id)),t.dataTransfer.setData("title","План"==this.todoArr.title?"plan":"Готово"==this.todoArr.title?"complited":"progress")},onDrop:function(t){this.$emit("onDrop",{from:t.dataTransfer.getData("title"),id:t.dataTransfer.getData("todoId"),where:"План"==this.todoArr.title?"plan":"Готово"==this.todoArr.title?"complited":"progress"})},saveEdit:function(t){for(var e=0;e<this.todoArr.todo.length;e++)this.todoArr.todo[e].id===t&&this.todoArr.todo[e]},inLeft:function(t,e){for(var o=0;o<t.todo.length;o++)t.todo[o].id==e&&this.$emit("inLeft",{title:t.title,id:o})},inRight:function(t,e){for(var o=0;o<t.todo.length;o++)t.todo[o].id==e&&this.$emit("inRight",{title:t.title,id:o})},countArr:function(){return this.todoArr.todo.length},deletTask:function(t,e){e.todo=e.todo.filter((function(e){return e.id!==t})),localStorage.setItem("complited",JSON.stringify(e.todo))},toLeft:function(){return"Готово"===this.todoArr.title}},computed:{disablePlan:function(){return"План"===this.todoArr.title}}});o("379c");B.render=V,B.__scopeId="data-v-5496d7d2";var U=B,q=Object(a["s"])("data-v-58f6a968");Object(a["i"])("data-v-58f6a968");var K={class:"popup",ref:"popup"},F={class:"popup-form"};Object(a["h"])();var H=q((function(t,e,o,n,r,i){return Object(a["g"])(),Object(a["c"])("div",K,[Object(a["f"])("div",F,[Object(a["k"])(t.$slots,"default",{},void 0,!0)])],512)})),z={mounted:function(){var t=this;document.addEventListener("click",(function(e){e.path[0]===t.$refs.popup&&t.$emit("close")}))}};o("fe1d");z.render=H,z.__scopeId="data-v-58f6a968";var G=z,Q={data:function(){return{modal:!1,modalid:null,modalTitle:"",editBool:!1,editTitle:null,left:null,modalLvl:1,countTasks:+localStorage.getItem("countTasks")||0,tasks:{plan:{title:"План",todo:JSON.parse(localStorage.getItem("plan")).todo||[]},progress:{title:"В работе",todo:JSON.parse(localStorage.getItem("progress")).todo||[]},complited:{title:"Готово",todo:JSON.parse(localStorage.getItem("complited")).todo||[]}}}},components:{vPlan:U,vPopup:G},methods:{onDrop:function(t){this.tasks[t.where].todo.push(this.tasks[t.from].todo[t.id]),this.tasks[t.from].todo.splice(t.id,1),localStorage.setItem("".concat(t.where),JSON.stringify(this.tasks[t.where])),localStorage.setItem("".concat(t.from),JSON.stringify(this.tasks[t.from]))},saveEdit:function(){var t=this;switch(this.editTitle){case"План":this.tasks.plan.todo.forEach((function(e){if(e.id===t.modalid)return e.description=t.modalTitle,void(e.lvl=t.modalLvl)})),this.modal=!1,localStorage.plan=JSON.stringify(this.tasks.plan);break;case"В работе":this.tasks.progress.todo.forEach((function(e){if(e.id===t.modalid)return e.description=t.modalTitle,void(e.lvl=t.modalLvl)})),this.modal=!1,localStorage.setItem("progress",JSON.stringify(this.tasks.progress));break;case"Готово":this.tasks.complited.todo.forEach((function(e){if(e.id===t.modalid)return e.description=t.modalTitle,void(e.lvl=t.modalLvl)})),this.modal=!1,localStorage.setItem("complited",JSON.stringify(this.tasks.complited));break}},onKeyEscape:function(t){"Escape"===t.key&&this.close()},editTask:function(t){this.modalLvl=t.task.lvl,this.modalTitle=t.task.description,this.editBool=!0,this.modal=!0,this.editTitle=t.title,this.modalid=t.id},inLeft:function(t){"Готово"===t.title?(this.tasks.progress.todo.push(this.tasks.complited.todo[t.id]),this.tasks.complited.todo.splice(t.id,1),localStorage.setItem("complited",JSON.stringify(this.tasks.complited))):(this.tasks.plan.todo.push(this.tasks.progress.todo[t.id]),this.tasks.progress.todo.splice(t.id,1),localStorage.plan=JSON.stringify(this.tasks.plan)),localStorage.setItem("progress",JSON.stringify(this.tasks.progress))},inRight:function(t){"План"===t.title?(this.tasks.progress.todo.push(this.tasks.plan.todo[t.id]),this.tasks.plan.todo.splice(t.id,1),localStorage.plan=JSON.stringify(this.tasks.plan)):(this.tasks.complited.todo.push(this.tasks.progress.todo[t.id]),this.tasks.progress.todo.splice(t.id,1),localStorage.setItem("complited",JSON.stringify(this.tasks.complited))),localStorage.setItem("progress",JSON.stringify(this.tasks.progress))},save:function(t){this.countTasks+=1;var e={id:this.countTasks,lvl:this.modalLvl,description:this.modalTitle,date:new Date};t.push(e),localStorage.setItem("plan",JSON.stringify({title:"План",todo:t})),this.modalLvl=1,this.modalTitle="",this.modal=!1},close:function(){this.modal=!1,this.editBool=!1,this.modalTitle="",this.modalLvl=1}},watch:{countTasks:function(){localStorage.setItem("countTasks",this.countTasks)}},created:function(){document.addEventListener("keydown",this.onKeyEscape)}};o("b8e2");Q.render=N,Q.__scopeId="data-v-1fed90f6";var W=Q,X=Object(a["s"])("data-v-2e6b8bc7");Object(a["i"])("data-v-2e6b8bc7");var Y={class:"footer"},Z=Object(a["f"])("div",{class:"container"},[Object(a["f"])("p",{class:"footer-text"},"Полякова Полина Богдановна 201-322")],-1);Object(a["h"])();var tt=X((function(t,e,o,n,r,i){return Object(a["g"])(),Object(a["c"])("footer",Y,[Z])})),et={};o("5547");et.render=tt,et.__scopeId="data-v-2e6b8bc7";var ot=et,at={name:"App",data:function(){return{mode:localStorage.dark}},methods:{a:function(){this.mode=localStorage.dark}},components:{VHeader:S,vMain:W,vFooter:ot}};at.render=r;var nt=at;o("44fd");Object(a["b"])(nt).mount("#app")},"6c9e":function(t,e,o){"use strict";o("07f4")},"8baa":function(t,e,o){},b277:function(t,e,o){},b8e2:function(t,e,o){"use strict";o("eb8a")},cf05:function(t,e,o){t.exports=o.p+"img/logo.82b9c7a5.png"},dce0:function(t,e,o){},eb8a:function(t,e,o){},fe1d:function(t,e,o){"use strict";o("dce0")}});
//# sourceMappingURL=app.42385886.js.map