"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{681:function(e,t,i){var n=i(243),o="https://api.themoviedb.org/3/",_="803e7bed91e4ee56e6b2c367f47ca8e8",a={trending:function(){return(0,n.Z)("".concat("https://api.themoviedb.org/3/trending/all/week","?api_key=").concat(_))},details:function(e){return(0,n.Z)("".concat(o,"movie/").concat(e,"?api_key=").concat(_,"&language=en-US"))},credits:function(e){return(0,n.Z)("".concat(o,"movie/").concat(e,"/credits?api_key=").concat(_,"&language=en-US"))},reviews:function(e){return(0,n.Z)("".concat(o,"movie/").concat(e,"/reviews?api_key=").concat(_,"&language=en-US&page=1"))},searching:function(e){return(0,n.Z)("".concat(o,"search/movie?api_key=").concat(_,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"))}};t.ZP=a},415:function(e,t,i){i.r(t);var n=i(439),o=i(791),_=i(689),a=i(87),c=i(681),r=i(966),s=i(184);t.default=function(){var e=(0,_.TH)(),t=(0,o.useState)([]),i=(0,n.Z)(t,2),u=i[0],m=i[1];return(0,o.useEffect)((function(){c.ZP.trending().then((function(e){return e.data})).then((function(e){m(e.results)}))}),[]),(0,s.jsx)("div",{children:(0,s.jsx)("ul",{className:r.Z.home_items,children:u.map((function(t){var i=t.id,n=t.title,o=t.name;return(0,s.jsx)("li",{children:(0,s.jsx)(a.rU,{to:"".concat(i),state:{from:e},className:r.Z.home_link,children:n||o})},i)}))})})}},966:function(e,t){t.Z={home_link:"Movie_home_link__UHiAR",movie_info:"Movie_movie_info__YXTj3",movies_input:"Movie_movies_input__55jJo",poster:"Movie_poster__YH0bx",items_info:"Movie_items_info__5Mu9j",item_text:"Movie_item_text__YOGoN",genres_text:"Movie_genres_text__wG0Rz",item_title:"Movie_item_title__PbWvt",aditional:"Movie_aditional__m6LR8",aditional_items:"Movie_aditional_items__On7Sv",aditional_item:"Movie_aditional_item__4PVI5",home_items:"Movie_home_items__+Kfaq"}}}]);
//# sourceMappingURL=415.e7eb2cbc.chunk.js.map