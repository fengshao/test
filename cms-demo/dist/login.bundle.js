webpackJsonp([16],{0:function(e,t,n){n(237),e.exports=n(429)},250:function(e,t,n){t=e.exports=n(71)(),t.push([e.id,"body{background:transparent url("+n(550)+") no-repeat center 100px;background-size:15%}.loginform{position:absolute;top:300px;left:50%;margin-left:-250px}.loginform button{background:blue}",""])},429:function(e,t,n){(function(e,t,a){try{(function(){"use strict";n(549),n(236);var o=n(457);n(7);e.render(t.createElement(o,null),a("#main")[0])}).call(this)}finally{}}).call(t,n(66),n(2),n(4))},457:function(e,t,n){(function(t){try{(function(){"use strict";var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=n(3),i=o.Form.Item,r=t.createClass({displayName:"Demo",handleSubmit:function(e){var t=this;e.preventDefault(),this.props.form.validateFields(function(e,n){e||t.loginFnc(n)})},loginFnc:function(e){var t=window.location.href.split("#")[0],n="//topics-cms.intra.wesai.com/api/login";t.indexOf("devel")!=-1?n="//topics-cms.devel.wesai.com/api/login":t.indexOf("test")!=-1?n="//topics-cms.test.wesai.com/api/login":t.indexOf("127.0.0.1")!=-1&&(n="//periphery.devel.wesai.com/api/login"),window.sessionStorage.setItem("username",e.name),window.sessionStorage.setItem("user_role",1);var a=o.message.loading("登录成功，正在跳转...",0);setTimeout(function(){a(),window.location.href="./local_home.html"},2500)},render:function(){var e=this.props.form,n=e.getFieldProps,r=e.getFieldError,l=e.isFieldValidating,s=n("name",{rules:[{required:!0,message:"用户名不能为空"}]}),c=n("password",{rules:[{required:!0,message:"密码不能为空"}]});return t.createElement(o.Form,{inline:!0,onSubmit:this.handleSubmit,className:"loginform"},t.createElement(i,{label:"用户名",hasFeedback:!0,help:l("name")?"校验中...":(r("name")||[]).join(", ")},t.createElement(o.Input,a({placeholder:"请输入用户名",defaultValue:"admin"},s))),t.createElement(i,{label:"密码",hasFeedback:!0,help:l("password")?"校验中...":(r("password")||[]).join(", ")},t.createElement(o.Input,a({type:"password",placeholder:"请输入密码",defaultValue:"admin"},c))),t.createElement(o.Button,{type:"primary",htmlType:"submit"},"登录"))}});r=o.Form.create()(r),e.exports=r}).call(this)}finally{}}).call(t,n(2))},549:function(e,t,n){var a=n(250);"string"==typeof a&&(a=[[e.id,a,""]]);n(93)(a,{});a.locals&&(e.exports=a.locals)},550:function(e,t,n){e.exports=n.p+"b3d1c2bb608d17757ad39aaf6bd865fb.png"}});
//# sourceMappingURL=login.bundle.js.map