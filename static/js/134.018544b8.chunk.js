"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[134],{681:function(e,t,n){var i=n(243),o="https://api.themoviedb.org/3/",a="803e7bed91e4ee56e6b2c367f47ca8e8",c={trending:function(){return(0,i.Z)("".concat("https://api.themoviedb.org/3/trending/all/week","?api_key=").concat(a))},details:function(e){return(0,i.Z)("".concat(o,"movie/").concat(e,"?api_key=").concat(a,"&language=en-US"))},credits:function(e){return(0,i.Z)("".concat(o,"movie/").concat(e,"/credits?api_key=").concat(a,"&language=en-US"))},reviews:function(e){return(0,i.Z)("".concat(o,"movie/").concat(e,"/reviews?api_key=").concat(a,"&language=en-US&page=1"))},searching:function(e){return(0,i.Z)("".concat(o,"search/movie?api_key=").concat(a,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"))}};t.ZP=c},134:function(e,t,n){n.r(t);var i=n(439),o=n(791),a=n(87),c=n(689),s=n(681),_=n(966),r=n(184),u="";t.default=function(){var e,t=(0,a.lr)(""),n=(0,i.Z)(t,2),l=n[0],m=n[1],v=(0,c.TH)(),h=(0,o.useState)(!1),f=(0,i.Z)(h,2),g=f[0],d=f[1],p=(0,o.useState)([]),Z=(0,i.Z)(p,2),x=Z[0],k=Z[1],M=null!==(e=l.get("searchWord"))&&void 0!==e?e:"";(0,o.useEffect)((function(){v.search.slice(12)===u&&s.ZP.searching(u).then((function(e){return e.data})).then((function(e){k(e.results)})).catch((function(e){return console.log(e.message)}))}),[v.search]),(0,o.useEffect)((function(){g&&(s.ZP.searching(M).then((function(e){return e.data}),(function(e){return console.log(e.message)})).then((function(e){k(e.results)}),(function(e){return console.log(e.message)})).catch((function(e){return console.log(e.message)})),u=M),d(!1)}),[g,M]);return(0,r.jsxs)("div",{children:[(0,r.jsx)("input",{type:"text",value:M,id:"movie",className:_.Z.movies_input,onChange:function(e){if(""===e.target.value)return m({});m({searchWord:e.target.value})}}),(0,r.jsx)("button",{type:"submit",onClick:function(){d(!0)},children:"SEARCH"}),x.length>0?(0,r.jsx)("ul",{className:_.Z.home_items,children:x.map((function(e){var t=e.id,n=e.title,i=e.name;return(0,r.jsx)("li",{children:(0,r.jsx)(a.rU,{to:"".concat(t),state:{from:v},className:_.Z.home_link,children:n||i})},t)}))}):(0,r.jsx)("div",{children:(0,r.jsxs)("h3",{className:_.Z.item_text,children:['\u0421\u043f\u0456\u0432\u043f\u0430\u0434\u0456\u043d\u044c \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e \u043f\u043e \u0441\u043b\u043e\u0432\u0443 "',M,'"']})})]})}},966:function(e,t){t.Z={home_link:"Movie_home_link__UHiAR",movie_info:"Movie_movie_info__YXTj3",movies_input:"Movie_movies_input__55jJo",poster:"Movie_poster__YH0bx",items_info:"Movie_items_info__5Mu9j",item_text:"Movie_item_text__YOGoN",genres_text:"Movie_genres_text__wG0Rz",item_title:"Movie_item_title__PbWvt",aditional:"Movie_aditional__m6LR8",aditional_items:"Movie_aditional_items__On7Sv",aditional_item:"Movie_aditional_item__4PVI5",home_items:"Movie_home_items__+Kfaq"}}}]);
//# sourceMappingURL=134.018544b8.chunk.js.map