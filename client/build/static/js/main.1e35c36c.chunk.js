(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,n,t){},101:function(e,n,t){},102:function(e,n,t){},125:function(e,n){},128:function(e,n,t){},129:function(e,n,t){},135:function(e,n,t){"use strict";t.r(n);var a=t(2),c=t(0),o=t.n(c),s=t(10),i=t.n(s),r=(t(100),t(84)),l=t(11),j=(t(101),t(59)),d=t(18);t(102);function m(e){return Object(a.jsx)("div",{className:"container",children:e.children})}function u(e){return Object(a.jsx)("div",{className:"card",children:e.children})}function h(e){return Object(a.jsx)("h1",{children:"Sign Up"})}function b(e){return Object(a.jsx)("div",{className:"row",children:e.children})}function p(e){return Object(a.jsx)("form",{className:"col s12",children:e.children})}function x(e){return Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("input",{name:e.name,onChange:e.onChange,placeholder:"First Name",id:"first_name",type:"text"}),e.children]})}function g(e){return Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("input",{name:e.name,onChange:e.onChange,placeholder:"Last Name",id:"last_name",type:"text"}),e.children]})}function O(e){return Object(a.jsxs)("div",{className:"input-field col s12",children:[Object(a.jsx)("input",{name:e.name,onChange:e.onChange,placeholder:"Email Address",id:"email",type:"email"}),e.children]})}function f(e){return Object(a.jsxs)("div",{className:"input-field col s12",children:[Object(a.jsx)("input",{name:e.name,onChange:e.onChange,placeholder:"password",id:"password",type:"password"}),e.children]})}function v(e){return Object(a.jsxs)("div",{className:"input-field col s12",children:[Object(a.jsx)("button",{onClick:e.onClick,type:"submit",className:"btn",children:"Sign Up"}),e.children]})}var N=t(75),w=t.n(N),C=t(76),k=t.n(C),y=t(22),_=t.n(y),S=function(e){return console.log(e),_.a.post("/api/user/signup",e)},I=function(e){return _.a.post("/api/user/login",e)},D=function(){return _.a.get("/api/posts/all")},B=function(e){return _.a.post("/api/posts/create",e)},L=function(e){return _.a.post("/api/posts/updateLike",{id:e})},R=function(e){return _.a.post("/api/comments/create",e)},F=function(e){return _.a.get("/api/posts/"+e)},P=function(e){return _.a.post("/api/user/googlelogin",e)},T=function(e){return _.a.post("/api/user/facebooklogin",e)};var U=function(){const e=Object(c.useState)({}),n=Object(d.a)(e,2),t=n[0],o=n[1];function s(e){const n=e.target,a=n.name,c=n.value;console.log("handleInputChange - name, value",a,c),o(Object(j.a)(Object(j.a)({},t),{},{[a]:c}))}return Object(a.jsx)("div",{children:Object(a.jsx)(m,{children:Object(a.jsx)(u,{children:Object(a.jsx)(b,{children:Object(a.jsxs)(p,{children:[Object(a.jsx)(h,{}),Object(a.jsxs)(b,{children:[Object(a.jsx)(x,{onChange:s,name:"first_name"}),Object(a.jsx)(g,{onChange:s,name:"last_name"})]}),Object(a.jsx)(b,{children:Object(a.jsx)(O,{onChange:s,name:"email"})}),Object(a.jsx)(b,{children:Object(a.jsx)(f,{onChange:s,name:"password"})}),Object(a.jsx)(b,{children:Object(a.jsx)(v,{onClick:function(e){e.preventDefault(),console.log("handleFormSubmit - FormData: ",t),t.first_name&&t.last_name&&t.email&&t.password&&S({first_name:t.first_name,last_name:t.last_name,email:t.email,password:t.password}).then((e=>{console.log("api.signup - res: ",e),window.location.href="/home"})).catch((e=>console.log("api.signup error: ",e)))}})}),Object(a.jsx)(b,{children:Object(a.jsx)(w.a,{clientId:"1082885186579-00j5a8kbt4tt0q3h6mua0b1ei0fgu9n1.apps.googleusercontent.com",buttonText:"Continue with Google",onSuccess:e=>{console.log("Google Success: ",e),P({tokenId:e.tokenId}).then((e=>{console.log("api.googlelogin -res: ",e),window.location.href="/home"})).catch((e=>console.log("api.googlelogin error: ",e)))},onFailure:e=>{console.log("Google Login Error: ",e)},cookiePolicy:"single_host_origin"})}),Object(a.jsx)(b,{children:Object(a.jsx)(k.a,{appId:"3217579161677338",autoLoad:!1,callback:e=>{console.log("Facebook Login: ",e),T({accessToken:e.accessToken,userID:e.userID}).then((e=>{console.log("api.facebooklogin - res: ",e),window.location.href="/home"})).catch((e=>console.log("api.facebooklogin error: ",e)))}})})]})})})})})},E=t(187),G=t(185);var A=function(e){return Object(a.jsx)("div",{children:Object(a.jsx)(G.a,{component:"fieldset",mb:3,borderColor:"transparent",children:Object(a.jsx)(E.a,{name:"read-only",value:e.ratingValue,readOnly:!0})})})},J=t(171),M=t(51),V=t(172),q=t(173),z=t(186),H=t(174),W=t(175),K=t(176),Q=t(177),X=t(184),Y=t(178),Z=t(50),$=t(80),ee=t.n($),ne=t(82),te=t.n(ne),ae=t(81),ce=t.n(ae);t(125);const oe=Object(J.a)((e=>({root:{margin:"0 25%",marginBottom:"20px"},media:{height:0,paddingTop:"56.25%"},avatar:{backgroundColor:Z.a[300]},caption:{paddingTop:"10px",paddingBottom:"0px"},comments:{paddingTop:"0px",paddingBottom:"10px"},addComment:{padding:"1px",width:"88%"},sendButton:{width:"10%",margin:"6px",float:"right"},actionButtons:{paddingTop:"0px",paddingBottom:"0px"}})));function se({children:e}){return Object(a.jsxs)("div",{className:"postCard",children:[" ",e," "]})}function ie({id:e,username:n,image:t,restaurant_name:o,rating:s,caption:i,number_of_likes:r,comments:l}){const j=oe(),m=Object(c.useRef)(null),u=Object(c.useState)(r),h=Object(d.a)(u,2),b=h[0],p=h[1],x=Object(c.useState)(""),g=Object(d.a)(x,2),O=g[0],f=g[1],v=Object(c.useState)([...l]),N=Object(d.a)(v,2),w=N[0],C=N[1],k=Object(c.useMemo)((()=>w.map((e=>Object(a.jsx)(M.a,{className:j.comments,variant:"body2",color:"textSecondary",component:"p",children:e.comment})))),[w]);return Object(a.jsxs)(V.a,{className:j.root,children:[Object(a.jsx)(q.a,{avatar:Object(a.jsx)(z.a,{"aria-label":"recipe",className:j.avatar,children:n[0]}),action:Object(a.jsx)(A,{ratingValue:s}),title:n,subheader:o}),Object(a.jsx)(H.a,{className:j.media,image:t,title:i}),Object(a.jsx)(W.a,{className:j.caption,children:Object(a.jsx)(M.a,{variant:"body3",color:"textSecondary",component:"h6",children:i})}),Object(a.jsxs)(K.a,{className:j.actionButtons,disableSpacing:!0,children:[Object(a.jsx)(Q.a,{"aria-label":"add to favorites",children:Object(a.jsx)(ee.a,{onClick:n=>{n.preventDefault(),L(e).then((e=>{console.log("liked"),p(b+1)})).catch((e=>console.log(e)))}})}),Object(a.jsxs)(M.a,{variant:"body3",color:"textSecondary",component:"h6",children:[b," likes"]}),Object(a.jsx)(Q.a,{"aria-label":"comment",children:Object(a.jsx)(ce.a,{onClick:e=>{e.preventDefault(),m.current.focus()}})}),Object(a.jsx)(Q.a,{"aria-label":"share",children:Object(a.jsx)(te.a,{})})]}),Object(a.jsxs)(W.a,{className:j.comments,children:[k,Object(a.jsx)(X.a,{className:j.addComment,id:"filled-textarea",placeholder:"Add Comment",multiline:!0,variant:"outlined",inputRef:m,value:O,onChange:e=>f(e.target.value)}),Object(a.jsx)(Y.a,{variant:"outlined",size:"large",color:"primary",className:j.sendButton,onClick:t=>{t.preventDefault(),O.length>0&&R({id:e,comment:O,username:n}).then((n=>{console.log("load all comments",l),f(""),F(e).then((e=>{console.log("comments",e.data.comments),C([...w,e.data.comments[e.data.comments.length-1]])})).catch((e=>console.log(e)))})).catch((e=>console.log(e)))},children:"Send"})]})]})}t(55),t(128);var re=t(179),le=t(83),je=t.n(le);const de=Object(J.a)((e=>({root:{"& > *":{margin:e.spacing(1),marginRight:e.spacing(5),float:"right"}},extendedIcon:{marginRight:e.spacing(1)}})));var me=function(){const e=de();return Object(a.jsx)("div",{className:e.root,children:Object(a.jsxs)(re.a,{variant:"add",href:"/newpost",children:[Object(a.jsx)(je.a,{className:e.extendedIcon}),"New Post"]})})};var ue=function(){const e=Object(c.useState)([]),n=Object(d.a)(e,2),t=n[0],o=n[1];return Object(c.useEffect)((()=>{D().then((e=>{console.log("posts",e.data),o(e.data)})).catch((e=>console.log(e)))}),[]),Object(a.jsxs)("div",{children:[Object(a.jsx)(me,{}),t.length?Object(a.jsx)(se,{children:t.map((e=>Object(a.jsx)(ie,{id:e._id,image:e.image,restaurant_name:e.restaurant_name,rating:e.rating,caption:e.caption,number_of_likes:e.number_of_likes,username:e.username,comments:e.comments},e.username)))}):Object(a.jsx)("h1",{className:"text-center",children:"No Posts to Display"})]})};t(129);var he=function(e){return Object(a.jsx)("main",{className:"wrapper",children:e.children})};var be=function(){const e=Object(c.useState)(),n=Object(d.a)(e,2),t=n[0],o=n[1],s=Object(c.useState)(),i=Object(d.a)(s,2),r=i[0],l=i[1];return Object(a.jsx)("card",{children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"mt-4",children:Object(a.jsx)("h2",{children:"Sign In"})}),Object(a.jsx)("form",{onSubmit:e=>{e.preventDefault(),console.log("email is "+t),console.log("password is "+r),I({email:t,password:r}).then((e=>{console.log("login response ",e),window.location.href="/home"})).catch((e=>console.log(e)))},children:Object(a.jsxs)(m,{className:"mt-3 px-5",children:[Object(a.jsx)(b,{className:"form-group",children:Object(a.jsx)("input",{className:"form-control",type:"text",placeholder:"Email",name:"email",onChange:e=>o(e.target.value)})}),Object(a.jsx)(b,{className:"form-group row",children:Object(a.jsx)("input",{className:"form-control",type:"password",placeholder:"Password",name:"password",onChange:e=>l(e.target.value)})}),Object(a.jsx)("button",{className:"btn btn-success",type:"submit",children:"Submit"})]})})]})})};var pe=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"mt-4",children:Object(a.jsx)("h2",{children:"Profile Page"})})})},xe=t(180),ge=t(181);var Oe=function(e){return Object(a.jsx)("div",{id:"upload-box",children:Object(a.jsx)("input",{type:"file",accept:"image/*",onChange:function(n){e.onUpload(n)}})})};var fe=function(){const e=o.a.useState(""),n=Object(d.a)(e,2),t=n[0],c=n[1];return Object(a.jsxs)(o.a.Fragment,{children:[Object(a.jsx)(xe.a,{}),Object(a.jsx)(ge.a,{maxWidth:"sm",children:Object(a.jsxs)("div",{children:[Object(a.jsx)(Y.a,{variant:"contained",color:"primary",onClick:e=>{e.preventDefault();let n=new FileReader;n.readAsDataURL(t),n.onload=()=>{console.log("reader ",n.result),B({image:n.result,restaurant_name:"Mexican",rating:3,caption:"Tasty!!",number_of_likes:0,username:"Anji"}).then((e=>{console.log("post created ",e),window.location.href="/home"})).catch((e=>console.log(e)))}},children:"Upload Image"}),t&&Object(a.jsx)("img",{src:URL.createObjectURL(t),alt:t.name}),Object(a.jsx)(Oe,{onUpload:e=>{c(e.target.files[0])}})]})})]})},ve=t(182),Ne=t(183);const we=Object(J.a)((e=>({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}})));function Ce(){const e=we();return Object(a.jsx)("div",{className:e.root,children:Object(a.jsx)(ve.a,{position:"static",children:Object(a.jsxs)(Ne.a,{children:[Object(a.jsx)(M.a,{variant:"h6",className:e.title,children:"Phone Eats First"}),Object(a.jsx)(Y.a,{variant:"contained",color:"primary",href:"/home",children:"Home"}),Object(a.jsx)(Y.a,{variant:"contained",color:"primary",href:"/profile",children:"Profile"}),Object(a.jsx)(Y.a,{variant:"contained",color:"primary",href:"/signin",children:"Log Out"})]})})})}var ke=function(){return Object(a.jsx)(r.a,{children:Object(a.jsxs)("div",{children:[Object(a.jsx)(Ce,{}),Object(a.jsx)(he,{children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:["/","/signin"],component:be}),Object(a.jsx)(l.a,{exact:!0,path:"/signup",component:U}),Object(a.jsx)(l.a,{exact:!0,path:"/home",component:ue}),Object(a.jsx)(l.a,{exact:!0,path:"/newpost",component:fe}),Object(a.jsx)(l.a,{exact:!0,path:"/profile",component:pe})]})})]})})};t(134);i.a.render(Object(a.jsx)(ke,{}),document.getElementById("root"))},55:function(e,n,t){}},[[135,1,2]]]);
//# sourceMappingURL=main.1e35c36c.chunk.js.map