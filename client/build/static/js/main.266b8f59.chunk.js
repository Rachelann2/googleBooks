(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(45)},22:function(e,t,a){},23:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),c=a.n(r),o=a(48),u=a(49),s=a(50),m=a(5);a(22);var i=function(){return l.a.createElement("div",{className:"jumbotron text-center"},l.a.createElement("h1",null,"Google Books"),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.recipepuppy.com/about/api/"},"Powered by Google Books"))};a(23);var E=function(){return l.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"Google Books"),l.a.createElement("a",{className:"navbar-brand",href:"/saved"},"Saved"))};var v=function(e){return l.a.createElement("div",{className:"input-group input-group-lg"},l.a.createElement("input",Object.assign({value:e.value,className:"form-control",type:"text"},e)))};var d=function(e){var t=e.type,a=void 0===t?"default":t,n=e.className,r=e.children,c=e.onClick;return l.a.createElement("button",{onClick:c,className:["btn btn-lg","btn-".concat(a),n].join(" ")},r)},f=a(15),b=a.n(f),p={getBooks:function(e){return b.a.get("/api/books/"+e)}};function h(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function g(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function k(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}var j=function(e){return l.a.createElement("div",{class:"card"},l.a.createElement("div",{class:"card-header"},e.bookObj.title),l.a.createElement("div",{class:"card-body"},l.a.createElement("blockquote",{class:"blockquote mb-0"},l.a.createElement("p",null,e.bookObj.description),l.a.createElement("footer",{class:"blockquote-footer"},e.bookObj.authors)),l.a.createElement("a",{href:"#",class:"btn btn-primary"},"Save")))};var N,O=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),o=Object(m.a)(c,2),u=o[0],s=o[1];return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(i,null),l.a.createElement(h,null,l.a.createElement(g,null,l.a.createElement(k,{size:"md-12"},l.a.createElement("form",null,l.a.createElement(h,null,l.a.createElement(g,null,l.a.createElement(k,{size:"xs-9 sm-10"},l.a.createElement(v,{onChange:function(e){console.log(e.target.value),s(e.target.value)},value:u,placeholder:"Search For a Book"})),l.a.createElement(k,{size:"xs-3 sm-2"},l.a.createElement(d,{onClick:function(e){e.preventDefault(),p.getBooks(u).then(function(e){console.log(e.data),r(e.data),s("")})},type:"success",className:"input-lg"},"Search"))))))),l.a.createElement(g,null,l.a.createElement(k,{size:"xs-12"}))),l.a.createElement("br",null),a.map(function(e){var t={title:e.volumeInfo.title,authors:e.volumeInfo.authors?e.volumeInfo.authors.toString():"",description:e.volumeInfo.description};if(t.title&&t.authors&&t.description)return console.log(t),l.a.createElement(j,{bookObj:t})}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",null))};function w(e){var t=e.title,a=e.author;e.description;return l.a.createElement("li",{className:"list-group-item"},l.a.createElement(h,null,l.a.createElement(g,null,l.a.createElement(k,{size:"xs-8 sm-9"},l.a.createElement("h3",null,t),l.a.createElement("p",null,"Author: ",a)))))}console.log(N),l.a.createElement("p",null,N);var x=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=(t[1],Object(n.useState)("")),c=Object(m.a)(r,2);return c[0],c[1],l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(i,null),l.a.createElement(h,null,l.a.createElement(g,null,l.a.createElement(k,{size:"xs-12"},a.length?l.a.createElement(w,null,l.a.createElement(j,null,a.map(function(e){var t={title:e.volumeInfo.title,authors:e.volumeInfo.authors?e.volumeInfo.authors.toString():"",description:e.volumeInfo.description};if(t.title&&t.authors&&t.description)return console.log(t),l.a.createElement(j,{bookObj:t})}))):l.a.createElement("h1",{className:"text-center"},"Saved Books")))))};c.a.render(l.a.createElement(function(){return l.a.createElement(o.a,null,l.a.createElement(u.a,null,l.a.createElement(s.a,{exact:!0,path:"/",component:O}),l.a.createElement(s.a,{exact:!0,path:"/saved",component:x})))},null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.266b8f59.chunk.js.map