(this.webpackJsonpprimerproyecto=this.webpackJsonpprimerproyecto||[]).push([[0],{71:function(e,t,c){},80:function(e,t,c){},88:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(26),s=c.n(a),i=(c(80),c(7)),o=c(20),j=c.n(o),l=c(34),d=c(32),b=c(6),x=c(33),u=c(13),h=c(15),O=c(12),m=(c(71),c(1)),p=function(e){return Object(m.jsx)("div",{children:Object(m.jsxs)(x.a,{style:{width:"200px",marginTop:"25px",backgroundColor:"#6c757d",border:"2px solid #ced4da",color:"#ced4da"},children:[Object(m.jsx)("div",{className:"imgdisplay",children:Object(m.jsx)(x.a.Img,{variant:"top",src:e.img,className:"imagen"})}),Object(m.jsxs)(x.a.Body,{children:[Object(m.jsx)(x.a.Title,{children:e.name}),Object(m.jsx)(x.a.Text,{children:Object(m.jsxs)("strong",{children:["$",e.price]})}),Object(m.jsxs)(h.a,{children:[Object(m.jsx)(O.a,{children:Object(m.jsx)(u.a,{variant:"outline-dark",style:{color:"#ced4da",borderColor:"#ced4da"},onClick:function(){e.agregar({name:e.name,price:e.price,img:e.img,qty:1})},children:"Buy"})}),Object(m.jsx)(O.a,{children:Object(m.jsx)(u.a,{variant:"outline-dark",style:{color:"#ced4da",borderColor:"#ced4da"},onClick:function(){var t=e.name.split(" ").join("%");console.log(t),e.details("https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(t))},children:"Details"})})]})]})]})})},f=c(52),g=c(35),v=c(43),y=c(49),k=function(e){return Object(m.jsx)(f.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(m.jsxs)(y.a,{children:[Object(m.jsx)(f.a.Brand,{href:"#home",children:"My ecommerce "}),Object(m.jsx)(f.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(m.jsxs)(f.a.Collapse,{id:"responsive-navbar-nav",children:[Object(m.jsxs)(v.a,{className:"me-auto",children:[Object(m.jsx)(v.a.Link,{href:"#features",children:"Home"}),Object(m.jsx)(v.a.Link,{href:"#pricing",children:"About us"}),Object(m.jsxs)(g.a,{title:"Productos",id:"collasible-nav-dropdown",children:[Object(m.jsx)(g.a.Item,{href:"#action/3.1",children:"Food"}),Object(m.jsx)(g.a.Item,{href:"#action/3.2",children:"More food"}),Object(m.jsx)(g.a.Item,{href:"#action/3.3",children:"Even more food"}),Object(m.jsx)(g.a.Divider,{}),Object(m.jsx)(g.a.Item,{href:"#action/3.4",children:"Separated link"})]})]}),Object(m.jsx)(v.a,{children:Object(m.jsx)(v.a.Link,{children:e.cart})})]})]})})},w=c(11),C=function(e){var t=function(){return e.items.map((function(e){return Object(m.jsxs)(w.a.Item,{children:[" ",e.name," ",e.price," ",Object(m.jsx)("img",{src:e.img,style:{width:"50px"},alt:e.name}),"x",e.qty]})}))};return Object(m.jsx)("div",{children:Object(m.jsxs)(w.a,{autoClose:!1,children:[Object(m.jsxs)(w.a.Toggle,{variant:"secondary",id:"dropdown-basic",children:[Object(m.jsx)("i",{className:"fas fa-shopping-cart",style:{fontSize:"1.5em"}}),Object(m.jsx)("i",{style:{backgroundColor:"red",borderRadius:"50%",border:"2px solid black",paddingLeft:"5px",paddingRight:"5px",fontStyle:"normal"},children:e.counter.quantity})]}),Object(m.jsxs)(w.a.Menu,{children:[Object(m.jsx)(t,{}),Object(m.jsx)(w.a.Item,{children:Object(m.jsxs)("strong",{children:["Total: $",e.counter.price]})})]})]})})},S=c(28),I=function(e){var t=e.products,c=e.filteredItems,n=function(){return{min:parseInt(document.querySelector(".min").value),max:parseInt(document.querySelector(".max").value),name:document.querySelector(".name").value}};return Object(m.jsx)("div",{children:Object(m.jsx)("div",{children:Object(m.jsxs)(w.a,{autoClose:!1,children:[Object(m.jsx)(w.a.Toggle,{variant:"outline-light",id:"dropdown-basic",children:"FILTROS"}),Object(m.jsx)(w.a.Menu,{children:Object(m.jsxs)(S.a,{style:{padding:"15px"},children:[Object(m.jsxs)(S.a.Group,{className:"mb-3",children:[Object(m.jsxs)(h.a,{children:[Object(m.jsxs)(O.a,{children:[Object(m.jsx)(S.a.Label,{children:"Precio minimo"}),Object(m.jsx)(S.a.Control,{className:"min",type:"number"})]}),Object(m.jsxs)(O.a,{children:[Object(m.jsx)(S.a.Label,{children:"Precio maximo"}),Object(m.jsx)(S.a.Control,{className:"max",type:"number"})]})]}),Object(m.jsx)(h.a,{children:Object(m.jsxs)(O.a,{children:[Object(m.jsx)(S.a.Label,{children:"Nombre"}),Object(m.jsx)(S.a.Control,{className:"name",type:"input"})]})})]}),Object(m.jsx)(u.a,{variant:"outline-dark",onClick:function(){!function(){var e=t;""!==n().min&&(e=t.filter((function(e){return e.price>=n().min}))),""!==n().max&&(e=t.filter((function(e){return e.price<=n().max}))),c(e)}()},children:"Filtrar"})]})})]})})})},N=c(69),T=c(73),M=function(e){var t=function(){return Object(m.jsxs)(N.a,{children:[Object(m.jsx)(N.a.Header,{className:"toastheader",children:Object(m.jsx)("strong",{className:"me-auto",children:"Notificacion"})}),Object(m.jsxs)(N.a.Body,{children:[Object(m.jsx)("i",{class:"fas fa-exclamation-circle",style:{color:"green"}})," ",e.name," fue a\xf1adido al carro."]})]})};return Object(m.jsx)("div",{children:Object(m.jsx)(T.a,{position:"bottom-end",className:"p-3",children:Object(m.jsx)(t,{})})})},q=c(42),L=c(64),B=c(74),F=function(e){var t=e.ingredients;console.log(t);var c=Object(n.useState)(!1),r=Object(b.a)(c,2),a=r[0],s=r[1];return Object(m.jsxs)("div",{style:{position:"absolute"},children:[Object(m.jsx)("p",{children:"See ingredients"}),Object(m.jsx)(u.a,{onClick:function(){return s(!a)},"aria-controls":"example-collapse-text","aria-expanded":a,children:Object(m.jsx)("i",{className:"fas fa-angle-double-right"})}),Object(m.jsx)("div",{style:{minHeight:"150px",position:"absolute"},children:Object(m.jsx)(L.a,{in:a,dimension:"width",children:Object(m.jsx)("div",{id:"example-collapse-text",children:Object(m.jsx)(x.a,{body:!0,style:{width:"400px"},children:Object(m.jsxs)(B.a,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Ingredient"}),Object(m.jsx)("th",{children:"Measure"})]})}),Object(m.jsx)("tbody",{children:t.map((function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:Object.keys(e)}),Object(m.jsx)("td",{children:Object.values(e)})]})}))})]})})})})})]})},H=function(e){var t=e.info,c=e.description;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(q.a,{show:!0,onHide:t,children:[Object(m.jsx)(q.a.Header,{closeButton:!0,children:Object(m.jsx)(q.a.Title,{children:c.name})}),Object(m.jsxs)(q.a.Body,{children:[Object(m.jsxs)(h.a,{children:[Object(m.jsx)(O.a,{children:Object(m.jsx)("img",{src:c.img,style:{maxWidth:"300px",maxHeight:"300px"},alt:"",srcset:""})}),Object(m.jsx)(O.a,{xs:3,children:Object(m.jsx)(F,{ingredients:c.recipe})})]}),Object(m.jsx)("h2",{style:{textAlign:"left"},children:"Recipe:"}),Object(m.jsx)("p",{style:{textAlign:"left"},children:c.desc})]}),Object(m.jsxs)(q.a.Footer,{children:[Object(m.jsx)(u.a,{variant:"secondary",onClick:t,children:"Close"}),Object(m.jsx)(u.a,{variant:"primary",onClick:t,children:"Save Changes"})]})]})})},P=function(e){var t=e.selectCategory,c=Object(n.useState)([]),r=Object(b.a)(c,2),a=r[0],s=r[1];Object(n.useEffect)((function(){i()}),[]);var i=function(){var e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.themealdb.com/api/json/v1/1/categories.php");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,s(c.categories);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{style:{color:"#e2e2e2"},children:Object(m.jsxs)(h.a,{children:[Object(m.jsx)("p",{children:"Categories:"}),a.map((function(e){return Object(m.jsx)(u.a,{variant:"outline-light",size:"sm",style:{marginTop:"5px",marginBottom:"5px"},onClick:function(){t("https://www.themealdb.com/api/json/v1/1/filter.php?c=".concat(e.strCategory))},children:e.strCategory})}))]})})},z=function(){var e=Object(l.a)(j.a.mark((function e(t){var c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return c=e.sent,e.next=6,c.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.error("err",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),E={quantity:0,price:0};var R=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),s=Object(b.a)(a,2),o=s[0],x=s[1],u=Object(n.useState)({name:null,state:!1}),f=Object(b.a)(u,2),g=f[0],v=f[1],w=Object(n.useState)(!1),S=Object(b.a)(w,2),N=S[0],T=S[1],q=Object(n.useState)({}),L=Object(b.a)(q,2),B=L[0],F=L[1],R=function(e){e.price=parseInt(e.price),v({name:e.name,state:!0}),setTimeout((function(){v({name:null,state:!1})}),1e3);var t=c.find((function(t){return t.name===e.name}));E.quantity++,console.log(E.price+=e.price),void 0!==t?(c.splice(c.indexOf(t),1),e.qty=t.qty+1,r([].concat(Object(d.a)(c),[e]))):(console.log(e),r([].concat(Object(d.a)(c),[e])))};console.log(o.length);var A=function(){var e=Object(l.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=[],e.next=3,z(t);case 3:e.sent.meals.forEach((function(e){c.push({name:e.strMeal,price:Math.floor(1e3*Math.random())+10,img:e.strMealThumb})})),x(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(l.a)(j.a.mark((function e(t){var c,n,r,a,s,o,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(t);case 2:return c=e.sent,e.next=5,c.meals[0];case 5:for(n=e.sent,console.log(n),r=Object.keys(n).filter((function(e){return e.includes("strIngredient")})),a=Object.keys(n).filter((function(e){return e.includes("strMeasure")})),s=[],o=0;o<r.length;o++)""!==n[r[o]]&&null!=n[r[o]]&&s.push(Object(i.a)({},n[r[o]],n[a[o]]));l={name:n.strMeal,img:n.strMealThumb,desc:n.strInstructions,recipe:s},F(l),J();case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){T(!N)},$=function(){return o.map((function(e){return Object(m.jsx)(O.a,{children:Object(m.jsx)(p,{agregar:R,details:D,name:e.name,price:e.price,img:e.img})})}))};return Object(m.jsxs)("div",{children:[Object(m.jsxs)(y.a,{className:"container",children:[N?Object(m.jsx)(H,{description:B,info:J}):Object(m.jsx)("div",{}),Object(m.jsx)("h1",{children:"Mi ecommerce"}),Object(m.jsxs)(h.a,{children:[Object(m.jsx)(O.a,{xs:12,children:Object(m.jsx)(k,{cart:Object(m.jsx)(C,{items:c,counter:E})})}),Object(m.jsx)(h.a,{children:Object(m.jsx)(O.a,{className:"justify-content-md-center",children:Object(m.jsx)("br",{})})})]}),g.state?Object(m.jsx)(M,{name:g.name}):Object(m.jsx)("div",{}),Object(m.jsx)(h.a,{children:0===o.length?Object(m.jsxs)("div",{children:[Object(m.jsx)("i",{style:{fontSize:"5em"},class:"fas fa-exclamation-triangle"}),Object(m.jsx)("h1",{children:"Nothing to show here :("}),Object(m.jsx)("h2",{children:"Choose a category to start displaying items"})]}):Object(m.jsx)($,{})})]}),Object(m.jsx)(y.a,{children:Object(m.jsxs)(O.a,{xs:!0,lg:"1",fluid:!0,style:{position:"fixed",top:"20%",left:"5%"},children:[Object(m.jsx)(I,{products:o,filteredItems:function(e){x(e)}}),Object(m.jsx)(P,{selectCategory:A})]})})]})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,94)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(R,{})}),document.getElementById("root")),A()}},[[88,1,2]]]);
//# sourceMappingURL=main.25fb24b3.chunk.js.map