(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{47:function(t,e,a){},48:function(t,e,a){},49:function(t,e,a){},50:function(t,e,a){},51:function(t,e,a){"use strict";a.r(e);var i=a(1),s=a.n(i),c=a(32),n=a.n(c),r=a(53),l=a(7),o=a(2),d=function(){var t={hover:{transform:["rotate(0deg)","rotate(-50deg)","rotate(50deg)"],cursor:"pointer",transition:{duration:.5,yoyo:1/0}}};return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark",style:{background:"transparent",zIndex:"3",color:"white",position:"absolute",width:"100vw",padding:"3% 5%"},children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)(l.b,{to:"/shopping-cart",className:"navbar-brand navbar-brand-1",children:"Logo"}),Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0 shopping-cart-block",style:{width:"100%",justifyContent:"flex-end",alignItems:"center"},children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(l.b,{to:"/shopping-cart",className:"navbar-brand navbar-brand-2",children:"Logo"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(l.b,{to:"/products",style:{color:"white"},children:"Shop"})}),Object(o.jsx)("li",{className:"nav-item",style:{fontSize:30},children:Object(o.jsx)(r.a.i,{className:"fas fa-shopping-cart cart",variants:t,whileHover:"hover","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasRight","aria-controls":"offcanvasRight"})})]}),Object(o.jsxs)(r.a.form,{className:"d-flex",style:{display:"flex!important",position:"absolute",left:"0",right:"0",marginRight:"auto",marginLeft:"auto",width:"550px"},variants:{initial:{opacity:0},animate:{opacity:1,transition:{delay:.6,duration:.5}},exit:{x:"-100vw",transition:{ease:"easeInOut",duration:.6}}},initial:"initial",animate:"animate",exit:"exit",children:[Object(o.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(o.jsx)("button",{className:"btn btn-outline-light",type:"submit",children:"Search"})]})]})})},j=a(54),b=(a(47),a.p+"static/media/spider.cc799f18.png"),m={initial:{opacity:0},animate:{opacity:1,transition:{delay:.2,duration:.3}},exit:{x:"-100vw",transition:{ease:"easeInOut",duration:.6}}},h=function(){var t={animate:{y:-50,transition:{duration:.9,yoyo:1/0}}};return Object(o.jsxs)(r.a.div,{className:"home-page-content",variants:m,initial:"initial",animate:"animate",exit:"exit",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"home-h1",children:"Buy Clothes & Toys"}),Object(o.jsx)("h4",{className:"home-text",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}),Object(o.jsx)(l.b,{to:"/products",children:Object(o.jsx)("button",{className:"buy-btn",children:"Buy Now"})})]}),Object(o.jsx)("div",{children:Object(o.jsx)(j.a,{children:Object(o.jsx)(r.a.img,{className:"spider-man",src:b,alt:"Spiderman",variants:t,animate:"animate",exit:"exit"})})})]})},x=(a(48),function(){return Object(o.jsx)("div",{className:"shopping-page-content product-category",children:Object(o.jsxs)("ul",{className:"filter-products",children:[Object(o.jsx)(l.b,{className:"product-links",to:"/products",children:Object(o.jsx)("li",{children:"All"})}),Object(o.jsx)(l.b,{className:"product-links",to:"/products/shirts",children:Object(o.jsx)("li",{children:"Shirts"})}),Object(o.jsx)(l.b,{className:"product-links",to:"/products/pants",children:Object(o.jsx)("li",{children:"Pants"})}),Object(o.jsx)(l.b,{className:"product-links",to:"/products/suits",children:Object(o.jsx)("li",{children:"Suits"})}),Object(o.jsx)(l.b,{className:"product-links",to:"/products/toys",children:Object(o.jsx)("li",{children:"Toys"})})]})})}),u={initial:{opacity:0},animate:{opacity:1,transition:{delay:.2,duration:.3}},exit:{x:"100vw",transition:{ease:"easeInOut",duration:.6}}},p=function(){return Object(o.jsxs)(r.a.div,{className:"products-container all-products",variants:u,initial:"initial",animate:"animate",exit:"exit",children:[Object(o.jsxs)("h4",{className:"h4",children:["All ",Object(o.jsx)("br",{})," Products"]}),Object(o.jsx)(x,{})]})},O=a(18),g=a.p+"static/media/shirt-1-1.56f48853.png",v=a.p+"static/media/shirt-1-2.e441624f.png",f=a.p+"static/media/shirt-1-3.206d1623.png",N=a.p+"static/media/shirt-1-4.d8dc9394.png",y=a.p+"static/media/shirt-2-1.a088a883.png",S=a.p+"static/media/shirt-3-1.264b2176.png",w=a.p+"static/media/shirt-4-1.df1be9d2.png",k=a.p+"static/media/shirt-5-1.0e26d1fc.png",I=[{img:g,name:"Japanese Shirt",price:20,allImages:[{src:g},{src:v},{src:f},{src:N}]},{img:y,name:"Tie Dye Tee",price:15,allImages:[{src:y}]},{img:S,name:"Astronaut Graphic Tee",price:10,allImages:[{src:S}]},{img:w,name:"Dragon Graphic Round Neck Tee",price:40,allImages:[{src:w}]},{img:k,name:"Japanese Letter & Wave Print Tee",price:30,allImages:[{src:k}]}],C=function(){var t=Object(i.useState)(I),e=Object(O.a)(t,1)[0],a=e.map((function(t){return Object(o.jsxs)("div",{className:"product-card hovereffect",children:[Object(o.jsx)("img",{className:"product-image img-responsive",src:t.img,alt:t.name}),Object(o.jsxs)("div",{className:"overlay",children:[Object(o.jsx)("h2",{children:t.name}),Object(o.jsx)(l.b,{to:"/shirts/".concat(t.name.toLowerCase().split(" ").join("-")),children:Object(o.jsx)("button",{className:"info",children:"More Info"})})]}),Object(o.jsx)("h1",{style:{color:"white"},children:t.name})]},e.indexOf(t))}));return Object(o.jsxs)(r.a.div,{className:"products-container shirts-container",variants:u,initial:"initial",animate:"animate",exit:"exit",children:[Object(o.jsxs)("div",{children:[Object(o.jsxs)("h1",{className:"h4",children:["Products/",Object(o.jsx)("br",{}),"Shirts"]}),Object(o.jsx)(x,{})]}),Object(o.jsx)("div",{className:"show-shirts col-lg-3 col-md-4 col-sm-6 col-xs-12",style:{overflowX:"hidden"},children:a})]})},L=function(){return Object(o.jsxs)(r.a.div,{className:"products-container pants-container",variants:u,initial:"initial",animate:"animate",exit:"exit",children:[Object(o.jsxs)("h1",{className:"h4",children:["Products/",Object(o.jsx)("br",{}),"Pants"]}),Object(o.jsx)(x,{})]})},T=function(){return Object(o.jsxs)(r.a.div,{className:"products-container suits-container",variants:u,initial:"initial",animate:"animate",exit:"exit",children:[Object(o.jsxs)("h1",{className:"h4",children:["Products/",Object(o.jsx)("br",{}),"Suits"]}),Object(o.jsx)(x,{})]})},R=function(){return Object(o.jsxs)(r.a.div,{className:"products-container toys-container",variants:u,initial:"initial",animate:"animate",exit:"exit",children:[Object(o.jsxs)("h1",{className:"h4",children:["Products/",Object(o.jsx)("br",{}),"Toys"]}),Object(o.jsx)(x,{})]})},P=a(26),E=(a(49),function(t){return Object(o.jsxs)("div",{className:"cart-item-layout",children:[Object(o.jsx)("img",{className:"item-img",src:t.img,alt:"img"}),Object(o.jsxs)("div",{className:"cart-item-info",children:[Object(o.jsx)("h4",{children:"Shirt"}),Object(o.jsx)("h5",{children:t.name}),Object(o.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"},className:"cart-item-amount",children:[Object(o.jsx)("h1",{style:{display:"inline-block",marginRight:10},children:"-"}),Object(o.jsx)("input",{style:{width:"60px",outline:"none"},type:"number"}),Object(o.jsx)("h2",{style:{display:"inline-block",marginLeft:10,cursor:"pointer"},children:"+"})]})]}),Object(o.jsx)("div",{className:"cart-item-price",children:Object(o.jsxs)("h6",{style:{alignSelf:"start"},children:["$",t.price]})})]})}),A=function(t){var e=Object(i.useState)(Object(P.a)(t.addedToCart)),a=Object(O.a)(e,2),s=a[0],c=a[1],n=s.map((function(t){return Object(o.jsx)(E,{price:t.price,name:t.name,img:t.img},s.indexOf(t))}));return Object(i.useEffect)((function(){var e=document.querySelector(".add-to-cart");e&&e.addEventListener("click",(function(){c(Object(P.a)(t.addedToCart))}))})),Object(o.jsx)("div",{className:"cart-div",children:Object(o.jsxs)("div",{className:"offcanvas offcanvas-end",tabIndex:"-1",id:"offcanvasRight","aria-labelledby":"offcanvasRightLabel",children:[Object(o.jsxs)("div",{className:"offcanvas-header",children:[Object(o.jsx)("h2",{id:"offcanvasRightLabel",children:"Your Shopping Cart"}),Object(o.jsx)("button",{type:"button",style:{color:"white"},className:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})]}),Object(o.jsx)("div",{className:"offcanvas-body",children:n})]})})},B=(a(50),[]),J=function(t){var e=t.match,a=I.filter((function(t){return t.name.toLowerCase().split(" ").join("-")===e.params.id?t.img:null})),s=Object(i.useState)(a[0].allImages[0].src),c=Object(O.a)(s,2),n=c[0],l=c[1],d=Object(i.useState)(a[0].name),j=Object(O.a)(d,1)[0],b=Object(i.useState)(a[0].price),m=Object(O.a)(b,1)[0],h=Object(P.a)(a[0].allImages),x=function(t){l(t.target.src)},p=h.map((function(t){return Object(o.jsx)("div",{className:"img-container",children:Object(o.jsx)("img",{onClick:x,src:t.src,alt:"img"})},t.src)}));return Object(i.useEffect)((function(){document.querySelector(".add-to-cart").addEventListener("click",(function(){B.push({name:j,img:n,price:m}),console.log(B)}))})),Object(o.jsxs)(r.a.div,{variants:u,animate:"animate",initial:"initial",exit:"exit",children:[Object(o.jsxs)("div",{className:"product-img-div",children:[Object(o.jsx)("h1",{className:"product-h1",children:j}),Object(o.jsx)("img",{className:"product-img",src:n,alt:"img"})]}),Object(o.jsx)("div",{className:"all-images",children:p}),Object(o.jsxs)("div",{className:"product-detail",children:[Object(o.jsx)("div",{className:"previous"}),Object(o.jsx)("div",{className:"next"}),Object(o.jsx)("div",{className:"add-to-bag",children:Object(o.jsx)("button",{className:"buy-btn add-to-cart","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasRight","aria-controls":"offcanvasRight",children:"Add to Cart"})})]}),1===B.length&&Object(o.jsx)(A,{})]})},q=a(4);var z=function(){var t=Object(q.f)();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(d,{}),Object(o.jsx)(A,{addedToCart:B}),Object(o.jsx)(j.a,{exitBeforeEnter:!0,children:Object(o.jsxs)(q.c,{location:t,children:[Object(o.jsx)(q.a,{exact:!0,path:"/shopping-cart",children:Object(o.jsx)(h,{})}),Object(o.jsx)(q.a,{exact:!0,path:"/products",children:Object(o.jsx)(p,{})}),Object(o.jsx)(q.a,{exact:!0,path:"/products/shirts",children:Object(o.jsx)(C,{})}),Object(o.jsx)(q.a,{exact:!0,path:"/products/pants",children:Object(o.jsx)(L,{})}),Object(o.jsx)(q.a,{exact:!0,path:"/products/suits",children:Object(o.jsx)(T,{})}),Object(o.jsx)(q.a,{exact:!0,path:"/products/toys",children:Object(o.jsx)(R,{})}),Object(o.jsx)(q.a,{path:"/shirts/:id",component:J})]},t.key)})]})};n.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(l.a,{children:Object(o.jsx)(z,{})})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.2627b138.chunk.js.map