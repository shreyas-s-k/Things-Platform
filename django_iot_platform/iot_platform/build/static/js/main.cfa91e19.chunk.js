(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{222:function(e,t,n){},422:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),s=n.n(r),c=n(83),i=n.n(c),o=(n(222),n(23)),l=n(24),d=n(26),u=n(25),h=n(6),j=n(4),b=n(18),m=n(7),p=n(47),g=n.n(p),O=Object(m.b)(null,(function(e){return{userLogout:function(){return e((function(e,t){g()({method:"post",url:"https://things-platform.herokuapp.com/auth/token/logout/",data:null,headers:{Authorization:"Token "+localStorage.getItem("token")}}).then((function(t){localStorage.clear(),e({type:"LOGOUT_SUCCESS"})})).catch((function(e){console.log(e)}))}))}}}))((function(e){var t;return Object(a.jsxs)("ul",{className:"list-inline mt-1",children:[Object(a.jsx)("li",{className:"list-inline-item mx-2",children:Object(a.jsx)("button",{type:"button",className:"btn btn-outline-light",children:Object(a.jsx)(h.c,{className:"navigation",to:"/add-device",children:"Add Device"})})}),Object(a.jsx)("li",{className:"list-inline-item mx-2",children:Object(a.jsx)("button",{type:"button",className:"btn btn-outline-light",children:Object(a.jsx)("a",{className:"navigation",onClick:e.userLogout,children:"Logout"})})}),Object(a.jsx)("li",{className:"list-inline-item mx-2",children:Object(a.jsx)(h.c,(t={className:"navigation",to:"/"},Object(b.a)(t,"className","btn btn-floating btn-light"),Object(b.a)(t,"children","SK"),t))})]})})),x=function(){return Object(a.jsxs)("ul",{className:"list-inline",children:[Object(a.jsx)("li",{className:"list-inline-item mx-2",children:Object(a.jsx)("button",{type:"button",className:"btn btn-outline-light",children:Object(a.jsx)(h.c,{className:"navigation",to:"/signin",children:"Sign In"})})}),Object(a.jsx)("li",{className:"list-inline-item mx-2",children:Object(a.jsx)("button",{type:"button",className:"btn btn-outline-light",children:Object(a.jsx)(h.c,{className:"navigation",to:"/signup",children:"Sign Up"})})})]})},f=Object(m.b)((function(e){return{login_status:e.auth.login_status}}))((function(e){var t=localStorage.getItem("token")?Object(a.jsx)(O,{}):Object(a.jsx)(x,{});return t?Object(a.jsx)("nav",{className:"navbar bg-dark bg-gradient  ",children:Object(a.jsxs)("div",{className:"container-sm",children:[Object(a.jsxs)(h.b,{to:"/",className:"navbar-brand text-light",href:"#",children:[Object(a.jsx)("img",{className:"rounded d-inline-block align-top",width:"30",height:"30",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAATISURBVFhH5Vdbb1RVFOanAK1YUMEqViRyFSUYjTfQkGjUBB9EIBjkwYjogxgMBl98UEHachGwN6UKCBbkLgUhsYUoalAkGC3M/dKZdrr81u4+033OWefMOTMMmrCTL2fOZe/17bXWt9aeUaM3RsiGTx33fnB+6zfX611Ae26i1UYYRxi48UTLxE1KtMywesJYTyZaqcGg86XvPOaW51FzsUo3JUFYs/LQV5u0RjCiN4iMCG0vvEf/L0TH4MW4TRG6rTlKd26JUsO2GN37WWncgjn1W6PiuyK2C8+Ae7ZFqQbznVxMuIjWgGg9CM76PEaPfxmnF/YmafnBFL19PE0f/JChxt4sdVzop4OX8nTm7wE6d3WAevsGaPrOGLX/klP3vrimYTzr+iNPd2GTTi5FgFOg0Nfiw/FNUZq4OUp3Y/f3wTNMbE5bnBbsStDib5Pq/kqqQOWMnr7B8jxaJIVdTkboS4HT5JGOOA1qw2FHCyJk4wEOtnvARpTzc0JTRHlsXnucFn6VoJfhrdePpGltd5o++jFLO37qp70Xc3TiSp5OI/SM1w6laOWhtDYbYAzpqx6rkVYmDwm+oR8D1CIk4+GxScjbyTrsM5C/D7ZiI18naAVIzkUKbD7fr82GH08gfST7RZTKUYvoBKTCJKRCPYiysotXA3PbYzAYV5iH3+z9QdNz+nfbhRzNaY3RTGzWAqebZN+EP1EscAcITtsRUzn47J4ELelK0RtH07TudIY2gAzn136o9sjlEbyCbxrPuT3MxNd2Z5QDJHvF3DSJ69+jpMT1Au+8rjGqyLPQpiANpkHtD7TE6Ul4csmBJL17MkPzOxO0D+SdI5UfomUoddLaLjh4+RIdi3e3Nkbods5RkAsC3gQX8Z6rugYY4e/LFNQmJFsiLG64ukNvEB8Hktw1WDjzO+O0aF8S6k7ROyfT9OHZDG2FgDp/y9H+30fQjJCz2K5lHdLGuJQo0FSkkZ9zvOCboyZqgDqj6E+B11TRV5tIqJC+h/xbhfxdgPshN090oUElTml9BZ8N+BLl/s2K59DbID3TYCKrj8k1tQMtVrJTEmLoNVjxE1E7WSyPfhGn56D4pRDLmyDxPhS/sSdLrVD8rl9zNrCwdv4s1FR4mFNGshUEgUJvFX0Ouyr6Ouycu8+g6L/6XYrWncpQE/KTK0EvDhrSWLg7hJAc8CRqKZ7zsg4k1bUEWHyMnK3SD48CHvGxUa1/PcXEJBvgvYfaYvQ0xPESK/5witZ8P6z4LeeztB1938QqpMVT+FYarHjJTlDIRPWOuYNYgrJ6/VSr16O/cyj5QLIe51Q+rLyFwwWTlcaei3m3nRAYJuoIhdXja+FVdXXC4zmnS3OvfDhhAZo2woZf7ExjAe4yMyCYx6D456H4ZVA8H8fWw+An6PHc5zdA+eoKcDo8jKNh91+ykF78JumyEwaeOar+O8FzXBv5dNQApd+PrjKrZfiAwl2KiX8Mktyduv7Mq78t/NcimSvY8E+6QLNRtiQ7QeFJtOpwRrLEfeVEhdS5rtDr+xMth0TQOSHXHiEaZqLzW7+5Xu/KJlpthCTmxH8nppC4yYhWGFYXhPXsRCs1GHS+9F2JueE8ai5W6aYk+KxZfuirTdqGCP0LU9qCeEK0k+AAAAAASUVORK5CYII=",alt:""})," ","THINGS PLATFORM"]}),t]})}):Object(a.jsx)(j.a,{to:"/signin"})})),v=function(){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h4",{children:"Notifications"}),Object(a.jsx)("div",{className:"alert alert-primary",role:"alert",children:"A simple primary alert\u2014check it out!"}),Object(a.jsx)("div",{className:"alert alert-secondary",role:"alert",children:"A simple secondary alert\u2014check it out!"}),Object(a.jsx)("div",{className:"alert alert-success",role:"alert",children:"A simple success alert\u2014check it out!"}),Object(a.jsx)("div",{className:"alert alert-danger",role:"alert",children:"A simple danger alert\u2014check it out!"})]})},N=function(e){var t=e.device;return Object(a.jsxs)("div",{className:"card deviceInfo mt-2",children:[Object(a.jsx)("span",{className:"card-header bg-secondary text-light ",children:t.name}),Object(a.jsxs)("p",{className:"px-2",children:["Id : ",t.id,Object(a.jsx)("br",{}),"Loaction : ",t.location,Object(a.jsx)("br",{}),"Description : ",t.description]}),Object(a.jsx)("p",{className:"text-secondary px-2",children:"November 3 2020 , 1:00 pm"})]})},A=function(e){var t=e.devices;return Object(a.jsxs)("div",{className:"device-list section",children:[Object(a.jsx)("h4",{children:"Your Devices"}),t&&t.map((function(e){return Object(a.jsx)(N,{device:e},e.id)}))]})},S=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.devices;return localStorage.getItem("token")?Object(a.jsx)("div",{className:"dashboard container mt-3",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col s12 m6",children:Object(a.jsx)(A,{devices:e})}),Object(a.jsx)("div",{className:"col s12 m5 offset-m1",children:Object(a.jsx)(v,{})})]})}):Object(a.jsx)(j.a,{to:"/signin"})}}]),n}(s.a.Component),C=Object(m.b)((function(e){return{devices:e.device.devices,login_status:e.auth.login_status}}))(S);var y=Object(m.b)((function(e){return{login_status:e.auth.login_status}}))((function(e){var t=e.match.params.id;return console.log(t),localStorage.getItem("token")?Object(a.jsx)("div",{className:"container section device-details",children:Object(a.jsx)("div",{className:"card mt-2",children:Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsxs)("span",{className:"card-title",children:["Device Name - ",t]}),Object(a.jsx)("p",{className:"card-text",children:"Et Lorem Lorem nisi ex sit irure aute sit ex do enim ut ea. Labore laborum deserunt Lorem sint anim velit id voluptate. Do consequat irure id eiusmod est ea nisi consequat fugiat. In adipisicing cillum adipisicing veniam eiusmod commodo est consequat amet velit do exercitation. Excepteur magna magna dolore labore magna eu. In ullamco pariatur incididunt fugiat. Deserunt velit deserunt et aute proident elit in laborum cupidatat irure in."}),Object(a.jsx)("footer",{className:"card-footer",children:"Added on Nov 03 2020 , 1:00 pm"})]})})}):Object(a.jsx)(j.a,{to:"/signin"})})),E=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(b.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state),e.props.userLogin(e.state)},e}return Object(l.a)(n,[{key:"render",value:function(){return localStorage.getItem("token")?Object(a.jsx)(j.a,{to:"/"}):Object(a.jsx)("div",{className:"signin container form-rounded col-sm-3 ",children:Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:"form-control shadow",children:[Object(a.jsx)("h4",{className:"text-dark mt-2",children:"Sign In"}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:"input-control",children:[Object(a.jsx)("input",{className:"form-control textbox ",type:"email",id:"email",placeholder:"E-mail",onChange:this.handleChange,required:!0}),this.props.autherr?Object(a.jsx)("div",{className:"text-danger error",children:this.props.autherr.response.data.email}):null,Object(a.jsx)("input",{className:"form-control textbox ",type:"password",id:"password",placeholder:"Password",onChange:this.handleChange,required:!0}),this.props.autherr?Object(a.jsx)("div",{className:"text-danger error",children:this.props.autherr.response.data.password}):null,this.props.autherr?Object(a.jsx)("div",{className:"text-danger error mt-2",align:"center",children:this.props.autherr.response.data.non_field_errors}):null,Object(a.jsxs)("center",{children:[Object(a.jsx)("hr",{}),Object(a.jsx)("button",{type:"submit",className:"btn btn-outline-success btn-block authbtn  mt-3 mb-4",onClick:this.handleSubmit,children:"Login"})]})]})]})})}}]),n}(r.Component),T=Object(m.b)((function(e){return{autherr:e.auth.autherr,login_status:e.auth.login_status}}),(function(e){return{userLogin:function(t){return e(function(e){return function(t,n){g()({method:"post",url:"https://things-platform.herokuapp.com/auth/token/login/",data:e}).then((function(n){console.log(n),localStorage.setItem("token",n.data.auth_token),t({type:"AUTH_SUCCESS",user:e})})).catch((function(e){console.log(e.response.data.code),console.log(e.response.data),t({type:"AUTH_FAILED",err:e})}))}}(t))}}}))(E),k=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={username:"",first_name:"",last_name:"",email:"",password:"",re_password:""},e.handleChange=function(t){e.setState(Object(b.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state),e.props.userSignup(e.state)},e}return Object(l.a)(n,[{key:"render",value:function(){return localStorage.getItem("token")?Object(a.jsx)(j.a,{to:"/"}):Object(a.jsx)("div",{className:"container form-rounded col-sm-4",children:Object(a.jsxs)("form",{className:"form-control shadow",onSubmit:this.handleSubmit,children:[Object(a.jsx)("h4",{className:"text-dark mt-2",children:"Sign Up"}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:"row input-control",children:[Object(a.jsx)("div",{className:"col s12 m6 signup",children:Object(a.jsx)("input",{className:"form-control textbox ",type:"text",id:"first_name",placeholder:"First Name",onChange:this.handleChange,required:!0})}),Object(a.jsx)("div",{className:"col s12 m5 offset-m1",children:Object(a.jsx)("input",{className:"form-control textbox ",type:"text",id:"last_name",placeholder:"Last Name",onChange:this.handleChange})})]}),Object(a.jsx)("input",{className:"form-control textbox ",type:"text",id:"username",placeholder:"Username",onChange:this.handleChange,required:!0}),this.props.regerr?Object(a.jsx)("div",{className:"text-danger error",children:this.props.regerr.response.data.username}):null,Object(a.jsx)("input",{className:"form-control textbox ",type:"email",id:"email",placeholder:"Email",onChange:this.handleChange}),this.props.regerr?Object(a.jsx)("div",{className:"text-danger error",children:this.props.regerr.response.data.email}):null,Object(a.jsx)("input",{className:"form-control textbox ",type:"password",id:"password",placeholder:"Password",onChange:this.handleChange,required:!0}),this.props.regerr?Object(a.jsx)("div",{className:"text-danger error",children:this.props.regerr.response.data.password}):null,Object(a.jsx)("input",{className:"form-control textbox ",type:"password",id:"re_password",placeholder:"Confirm Password",onChange:this.handleChange,required:!0}),this.props.regerr?Object(a.jsx)("div",{className:"text-danger error",children:this.props.regerr.response.data.re_password}):null,this.props.regerr?Object(a.jsx)("div",{className:"text-danger error",align:"center",children:this.props.regerr.response.data.non_field_errors}):null,Object(a.jsxs)("center",{children:[Object(a.jsx)("hr",{}),Object(a.jsx)("button",{type:"submit",className:"btn btn-outline-success authbtn mt-3 mb-4 btn-block  ",onClick:this.handleSubmit,children:"Sign Up"})]})]})})}}]),n}(r.Component),D=Object(m.b)((function(e){return{regerr:e.auth.regerr,login_status:e.auth.login_status}}),(function(e){return{userSignup:function(t){return e(function(e){return function(t,n){g()({method:"post",url:"https://things-platform.herokuapp.com/auth/users/",data:e}).then((function(n){t({type:"REG_SUCCESS",user:e}),g()({method:"post",url:"https://things-platform.herokuapp.com/auth/token/login/",data:{email:e.email,password:e.password}}).then((function(n){console.log(n),localStorage.setItem("token",n.data.auth_token),t({type:"AUTH_SUCCESS",user:e})})).catch((function(e){console.log(e.response.data),console.log(e.response.data),t({type:"AUTH_FAILED",err:e})}))})).catch((function(e){t({type:"REG_FAILED",err:e})}))}}(t))}}}))(k),F=n(11),_=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={id:"",name:"",location:"",description:""},e.handleChange=function(t){e.setState(Object(b.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state),e.props.addDevice(e.state)},e}return Object(l.a)(n,[{key:"render",value:function(){return localStorage.getItem("token")?Object(a.jsx)("div",{className:"container col-sm-6",children:Object(a.jsxs)("form",{className:"form-control",onSubmit:this.handleSubmit,children:[Object(a.jsx)("h5",{children:"Add Device"}),Object(a.jsxs)("div",{className:"input-control",children:[Object(a.jsx)("label",{htmlFor:"id",className:"form-label",children:"Id"}),Object(a.jsx)("input",{className:"form-control",type:"text",id:"id",onChange:this.handleChange,required:!0}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{htmlFor:"name",className:"form-label",children:"Name"}),Object(a.jsx)("input",{className:"form-control",type:"text",id:"name",onChange:this.handleChange,required:!0}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{htmlFor:"location",className:"form-label",children:"Location"}),Object(a.jsx)("input",{className:"form-control",type:"text",id:"location",onChange:this.handleChange,required:!0}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{htmlFor:"description",className:"form-label",children:"Description"}),Object(a.jsx)("textarea",{className:"form-control",type:"textarea",id:"description",onChange:this.handleChange,required:!0}),Object(a.jsx)("br",{}),Object(a.jsx)("center",{children:Object(a.jsx)("button",{type:"submit",className:"btn btn-primary addbtn",onClick:this.handleSubmit,children:"Add"})})]})]})}):Object(a.jsx)(j.a,{to:"/signin"})}}]),n}(r.Component),w=Object(m.b)((function(e){return{login_status:e.auth.login_status}}),(function(e){return{addDevice:function(t){return e(function(e){return function(t,n,a){a.getFirebase,(0,a.getFirestore)().collection("devices").add(Object(F.a)(Object(F.a)({},e),{},{timestamp:new Date})).then((function(){t({type:"ADD_DEVICE",device:e})})).catch((function(e){t({type:"ADD_DEVICE_ERROR",err:e})}))}}(t))}}}))(_);var L=function(){return Object(a.jsx)("div",{className:"container col-sm-4 errorpg",children:Object(a.jsxs)("center",{className:"text-danger",children:[Object(a.jsx)("h1",{children:"Error 404"}),Object(a.jsx)("h3",{children:"Page Not Found !"})]})})};console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"https://things-platform.herokuapp.com"}));var U=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)(h.a,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(f,{}),Object(a.jsxs)(j.d,{children:[Object(a.jsx)(j.b,{exact:!0,path:"/",component:C}),Object(a.jsx)(j.b,{path:"/device/:id",component:y}),Object(a.jsx)(j.b,{path:"/signin",component:T}),Object(a.jsx)(j.b,{path:"/signup",component:D}),Object(a.jsx)(j.b,{path:"/add-device",component:w}),Object(a.jsx)(j.b,{component:L})]})]})})}}]),n}(s.a.Component),I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,423)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))},R=n(37),P={autherr:null,regerr:null,login_status:null},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_SUCCESS":return Object(F.a)(Object(F.a)({},e),{},{login_status:!0,autherr:null});case"AUTH_FAILED":return console.log("autherr"),Object(F.a)(Object(F.a)({},e),{},{autherr:t.err});case"REG_SUCCESS":return console.log("Sign up Success",t.user),Object(F.a)(Object(F.a)({},e),{},{regerr:null});case"LOGOUT_SUCCESS":return Object(F.a)(Object(F.a)({},e),{},{login_status:!1});case"REG_FAILED":return Object(F.a)(Object(F.a)({},e),{},{regerr:t.err});default:return e}},G={devices:[{id:1,name:"Temperature Sensor",location:"Garden",description:"To measure the temperature outside and water plants accordingly"},{id:2,name:"Fire Alarm",location:"Kitchen",description:"To determine accidents due to fire inside kitchen"},{id:3,name:"Temperature Sensor",location:"Bedroom",description:"To measure the temperature inside room and switch on/off AC"},{id:4,name:"Light Sensor",location:"Room",description:"To measure the light intensity inside room and automate lighting"},{id:5,name:"Motion Sensor",location:"Front Gate",description:"To identify motion outside"}]},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_DEVICE":return console.log("Added device",t.device),e;case"ADD_DEVICE_ERROR":return console.log("Error adding device",t.err),e;default:return e}},q=Object(R.c)({auth:Y,device:H}),J=n(214),K=n(215),M=n(216),z=Object(R.d)(q,Object(R.a)(J.a.withExtraArgument({getFirebase:M.getFirebase,getFirestore:K.getFirestore})));i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(m.a,{store:z,children:Object(a.jsx)(U,{})})}),document.getElementById("root")),I()}},[[422,1,2]]]);
//# sourceMappingURL=main.cfa91e19.chunk.js.map