"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[441],{4453:function(n,e,t){t.d(e,{Z:function(){return c}});var r,o=t(168),i=(t(2791),t(6444)),u=t(184),a=i.ZP.button(r||(r=(0,o.Z)(["\n  width: ",";\n  height: ",";\n  padding: ",";\n  margin: ",";\n  background-color: ",";\n  color: ",";\n  font-size: ",";\n  border: ",";\n\n  :disabled {\n    background-color: ",";\n  }\n\n  :hover {\n    border: ",";\n    color: ",";\n  }\n"])),(function(n){return n.width||"auto"}),(function(n){return n.height||"auto"}),(function(n){return n.padding||"7px 15px"}),(function(n){return n.margin||0}),(function(n){return n.bgColor||"#6D94CC"}),(function(n){return n.color||"#595959"}),(function(n){return n.fontSize||"16px"}),(function(n){return n.border||"none"}),(function(n){return n.disabledBg||"#ccc"}),(function(n){return n.hoverBorder||"none"}),(function(n){return n.hoverColor||"none"}));function c(n){return(0,u.jsx)(a,{onClick:n.method,padding:n.padding,margin:n.margin,bgColor:n.bgColor,color:n.color,fontSize:n.fontSize,border:n.border,width:n.width,height:n.height,disabled:n.disabled,disabledBg:n.disabledBg,hoverBorder:n.hoverBorder,hoverColor:n.hoverColor,children:n.name})}},8086:function(n,e,t){t.d(e,{Z:function(){return c}});var r,o=t(168),i=(t(2791),t(6444)),u=t(184),a=i.ZP.input(r||(r=(0,o.Z)(["\n  width: ",";\n  height: ",";\n  padding: ",";\n  margin: ",";\n  background-color: ",";\n  color: ",";\n  font-size: ",";\n  border: ",";\n  border-bottom: ",";\n  border-radius: ",";\n\n  ::placeholder {\n    color: ",";\n  }\n\n  :focus {\n    border-bottom: ",";\n    outline: ",";\n  }\n"])),(function(n){return n.width||"auto"}),(function(n){return n.height||"auto"}),(function(n){return n.padding||"7px 15px"}),(function(n){return n.margin||0}),(function(n){return n.bgColor||"#FDFDFD"}),(function(n){return n.color||"#595959"}),(function(n){return n.fontSize||"16px"}),(function(n){return n.border||"none"}),(function(n){return n.borderBottom||"1px solid #7F7F7F"}),(function(n){return n.radius||"0px"}),(function(n){return n.color||"#595959"}),(function(n){return n.focus||"none"}),(function(n){return n.outline||"none"}));function c(n){return(0,u.jsx)(a,{onChange:n.method,type:n.type,placeholder:n.placeholder,value:n.value,padding:n.padding,margin:n.margin,bgColor:n.bgColor,color:n.color,fontSize:n.fontSize,border:n.border,width:n.width,height:n.height,outline:n.outline,focus:n.focus,radius:n.radius,borderBottom:n.borderBottom,required:!0})}},8441:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,o,i,u,a,c,d=t(168),s=t(2791),l=t(6444),h=t(1087),f=t(4165),p=t(5861),g=t(885),x=t(8086),b=t(4453),Z=t(2388),v=t(184),m=l.ZP.form(r||(r=(0,d.Z)(["\n  width: 100%;\n"]))),w=l.ZP.p(o||(o=(0,d.Z)(["\n  font-size: 12px;\n  line-height: 20px;\n  font-weight: 700;\n  color: #6d94cc;\n"]))),C=l.ZP.div(i||(i=(0,d.Z)(["\n  position: relative;\n  height: 60px;\n  margin: 0 0 10px 0;\n"])));function j(){var n=(0,s.useState)(""),e=(0,g.Z)(n,2),t=e[0],r=e[1],o=(0,s.useState)("password"),i=(0,g.Z)(o,2),u=i[0],a=i[1],c=(0,s.useState)("passwordConfirm"),d=(0,g.Z)(c,2),l=d[0],h=d[1],j=(0,s.useState)(""),k=(0,g.Z)(j,2),S=k[0],z=k[1],y=(0,s.useState)(""),B=(0,g.Z)(y,2),D=B[0],P=B[1],F=(0,s.useState)(""),E=(0,g.Z)(F,2),$=E[0],A=E[1],R=(0,s.useState)(!1),q=(0,g.Z)(R,2),U=q[0],G=q[1],H=(0,s.useState)(!1),I=(0,g.Z)(H,2),J=I[0],K=I[1],L=(0,s.useState)(!0),M=(0,g.Z)(L,2),N=M[0],O=M[1];(0,s.useEffect)((function(){Q()}),[t]),(0,s.useEffect)((function(){V()}),[U,J,u]);var Q=function(){var n=(0,p.Z)((0,f.Z)().mark((function n(){var e;return(0,f.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("/api/auth/duplicationCheck",!t){n.next=14;break}return n.prev=2,n.next=5,Z.Z.post("/api/auth/duplicationCheck",{val:t});case 5:e=n.sent,z(e.data.msg),G(!0),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(2),z(n.t0.response.data.msg),G(!1);case 14:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(){return n.apply(this,arguments)}}(),T=function(){var n=(0,p.Z)((0,f.Z)().mark((function n(e){var r,o;return(0,f.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),"/api/auth/signup",r=[t,u],n.prev=3,n.next=6,Z.Z.post("/api/auth/signup",{val:r});case 6:o=n.sent,console.log(o),alert(o.data.msg),window.location.href="/login",n.next=15;break;case 12:n.prev=12,n.t0=n.catch(3),alert(n.t0.response.data.msg);case 15:case"end":return n.stop()}}),n,null,[[3,12]])})));return function(e){return n.apply(this,arguments)}}(),V=function(){var n=(0,p.Z)((0,f.Z)().mark((function n(){return(0,f.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:O(!U||!J||l!==u);case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,v.jsxs)(m,{method:"post",onSubmit:T,children:[(0,v.jsxs)(C,{children:[(0,v.jsx)(x.Z,{method:function(n){var e=n.target.value;new RegExp(/([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/).test(e)?r(e):e.length<1?(z(""),G(!1)):(z("\uc62c\ubc14\ub978 \uc774\uba54\uc77c \ud615\uc2dd\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."),G(!1))},type:"email",width:"100%",height:"40px",border:"none",placeholder:"\uc774\uba54\uc77c",focus:"2px solid #6D94CC"}),(0,v.jsx)(w,{children:S})]}),(0,v.jsxs)(C,{children:[(0,v.jsx)(x.Z,{method:function(n){var e=n.target.value;new RegExp(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/).test(e)?(a(e),P("\uc548\uc804\ud55c \ube44\ubc00\ubc88\ud638 \uc785\ub2c8\ub2e4 :)")):e.length<1?P(""):u.length!==l.length?(a(""),P("\uc22b\uc790+\uc601\ubb38\uc790+\ud2b9\uc218\ubb38\uc790 \uc870\ud569\uc73c\ub85c 8\uc790\ub9ac \uc774\uc0c1 \uc785\ub825\ud574\uc8fc\uc138\uc694.")):P("\uc22b\uc790+\uc601\ubb38\uc790+\ud2b9\uc218\ubb38\uc790 \uc870\ud569\uc73c\ub85c 8\uc790\ub9ac \uc774\uc0c1 \uc785\ub825\ud574\uc8fc\uc138\uc694.")},type:"password",width:"100%",height:"40px",border:"none",placeholder:"\ube44\ubc00\ubc88\ud638",focus:"2px solid #6D94CC"}),(0,v.jsx)(w,{children:D})]}),(0,v.jsxs)(C,{children:[(0,v.jsx)(x.Z,{method:function(n){var e=n.target.value;u==e?(h(e),A("\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud569\ub2c8\ub2e4 :)"),K(!0)):e.length<1?(A(""),K(!1)):(A("\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0\uc54a\uc2b5\ub2c8\ub2e4."),K(!1))},type:"password",width:"100%",height:"40px",border:"none",focus:"2px solid #6D94CC",placeholder:"\ube44\ubc00\ubc88\ud638 \ud655\uc778"}),(0,v.jsx)(w,{children:$})]}),(0,v.jsx)(b.Z,{name:"\ud68c\uc6d0\uac00\uc785",color:"#fdfdfd",width:"100%",height:"40px",margin:"30px 0 0 0",disabled:N})]})}var k=l.ZP.div(u||(u=(0,d.Z)(["\n  position: absolute;\n  width: 350px;\n  height: 350px;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n"]))),S=l.ZP.div(a||(a=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin: 0 auto;\n  align-items: center;\n  justify-content: space-between;\n"]))),z=l.ZP.div(c||(c=(0,d.Z)(["\n  font-size: 36px;\n  font-weight: 700;\n  color: #6d94cc;\n"])));function y(){return(0,v.jsx)(k,{children:(0,v.jsxs)(S,{children:[(0,v.jsx)(h.rU,{to:"/",children:(0,v.jsx)(z,{children:"Dimple"})}),(0,v.jsx)(j,{})]})})}}}]);
//# sourceMappingURL=441.f0c936e2.chunk.js.map