(this["webpackJsonpvg-treebank-display-copy"]=this["webpackJsonpvg-treebank-display-copy"]||[]).push([[0],{147:function(e,t,n){},15:function(e,t,n){e.exports={dropdownButton:"ControlPanel_dropdownButton__1o6TV",dropdownScroll:"ControlPanel_dropdownScroll__17rgQ",dummyIcon:"ControlPanel_dummyIcon__3Nk3N",link:"ControlPanel_link__OEqVs"}},170:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(52),c=n.n(o),i=(n(62),n(63),n(64),n(12)),s=n(16),l=n(34),u=n(20),m=n(1),d=Object(m.shape)({start:m.number,end:m.number,numbers:Object(m.arrayOf)(Object(m.oneOfType)([m.string]))}),p=Object(m.shape)({locus:m.string.isRequired,path:m.string.isRequired,xml:m.string.isRequired,link:m.string,notes:m.string,chunks:d.isRequired}),h=Object(m.shape)({path:m.string.isRequired,author:m.string.isRequired,work:m.string.isRequired,editors:Object(m.oneOfType)([m.string,Object(m.arrayOf)(m.string)]).isRequired,sections:Object(m.arrayOf)(p).isRequired}),b=Object(m.shape)({title:Object(m.oneOfType)([m.string,m.element]).isRequired,publications:Object(m.arrayOf)(h),text:m.string}),g=(Object(m.shape)({logo:m.string,link:m.string,title:Object(m.oneOfType)([m.string,m.element]).isRequired,subtitle:m.string.isRequired,copyright:m.string,doi:m.string,report:m.string,github:m.string,twitter:m.string,collections:Object(m.arrayOf)(b).isRequired}),Object(m.shape)({search:m.string.isRequired}),Object(m.shape)({params:Object(m.shape)({chunk:m.string.isRequired}).isRequired}),Object(m.shape)({params:Object(m.shape)({publication:m.string.isRequired}).isRequired}),Object(m.shape)({w:Object(m.arrayOf)(m.string),config:m.string}),function(e){var t=e.logo,n=e.link,a=e.children;return void 0!==n?r.a.createElement(u.PerseidsHeader,{logo:t,props:{href:n}},a):r.a.createElement(u.PerseidsHeader,{logo:t},a)});g.defaultProps={logo:void 0,link:void 0};var f=g,v=n(53),k=n.n(v),E=n(35),y=n.n(E),O=function(e){return Object(E.uriTransformer)("/"===e[0]?"".concat("/vg-treebank-display-copy").concat(e):e)},w=function(e){return r.a.createElement(y.a,Object.assign({},e,{transformLinkUri:O}))},j=function(e){var t=e.title,n=e.subtitle;return r.a.createElement("div",{className:"jumbotron jumbotron-fluid bg-dark ".concat(k.a.jumbotronSmall)},r.a.createElement("div",{className:"container text-light"},r.a.createElement("h1",{className:"display-4"},t),n&&function(e){return r.a.createElement(w,{source:e})}(n)))},N=function(e){var t=e.path,n=e.author,o=e.work,c=e.editors,i=e.sections;return r.a.createElement("tr",{className:"d-flex",key:t},r.a.createElement("th",{className:"col-md-3 d-none d-md-block",scope:"row"},n),r.a.createElement("td",{className:"col-md-4 d-none d-md-block"},o),r.a.createElement("td",{className:"col-8 col-sm-7 d-block d-md-none"},r.a.createElement("strong",null,n),","," ",r.a.createElement("em",null,o)),r.a.createElement("td",{className:"col-md-3 col-lg-3 d-none d-md-block"},function(e){return Array.isArray(e)?r.a.createElement("ul",{className:"pl-1"},e.map((function(e){return r.a.createElement("li",{key:e},e)}))):e}(c)),r.a.createElement("td",{className:"col-4 col-sm-5 col-md-2 col-lg-2 text-right"},i.map((function(e){return function(e){var t=e.locus,n=e.path,o=function(e){var t=e.start,n=e.numbers;return t||n[0]}(e.chunks);return r.a.createElement(a.Fragment,{key:n},r.a.createElement("a",{href:"".concat(n,"/").concat(o)},t),r.a.createElement("br",null))}(e)}))))},x=function(e){var t=e.title,n=e.publications,a=e.text;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row pb-3"},r.a.createElement("div",{className:"col-12"},t&&r.a.createElement("h2",null,t),a&&r.a.createElement(w,{source:a}),r.a.createElement("table",{className:"table"},n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("thead",{className:"thead-light"},r.a.createElement("tr",{className:"d-flex"},r.a.createElement("th",{className:"col-md-3 d-none d-md-block",scope:"col"},"Author"),r.a.createElement("th",{className:"col-8 col-sm-7 col-md-4",scope:"col"},"Work"),r.a.createElement("th",{className:"col-md-3 col-lg-3 d-none d-md-block",scope:"col"},"Editors"),r.a.createElement("th",{className:"col-4 col-sm-5 col-md-2 col-lg-2",scope:"col"},"Locus"))),r.a.createElement("tbody",null,n.map((function(e){return N(e)}))))))))};x.defaultProps={publications:void 0,text:void 0};var _=x,L=function(e){var t=e.config,n=t.logo,a=t.link,o=t.title,c=t.subtitle,i=t.collections;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{logo:n,link:a},o),r.a.createElement(j,{title:o,subtitle:c}),i.map((function(e){return function(e){var t=e.title,n=e.text,a=e.publications;return r.a.createElement(_,{key:t,title:t,text:n,publications:a})}(e)})))},S=n(2),R=n(3),A=n(6),I=n(5),C=n(7),M=n(21),P=n.n(M),q={main:{debug:!1,showKeys:!1,chunkParam:"chunk",auxConfPath:"".concat("/vg-treebank-display-copy","/arethusa/configs"),retrievers:{TreebankRetriever:{resource:"Gardener",docIdentifier:"treebank",preselector:"w"}},plugins:["text","morph","relation","depTree","search"],layouts:[{name:"widget",template:"js/templates/widget.html"}]},notifier:{disable:!0},navigator:{chunkSize:1},navbar:!1,resources:{Gardener:{route:"".concat("/vg-treebank-display-copy","/xml/:doc"),params:["doc"]},lexInvFusekiEndpoint:{route:"https://fuseki.perseids.org/fuseki/ds/query?format=json"},morphologyServiceLat:{route:"https://services.perseids.org/bsp/morphologyservice/analysis/word?lang=lat&engine=morpheuslat"},newMorphologyServiceLat:{route:"https://morph.perseids.org/analysis/word?lang=lat&engine=morpheuslat"},morphologyServiceGrc:{route:"https://services.perseids.org/bsp/morphologyservice/analysis/word?lang=grc&engine=morpheusgrc"},newMorphologyServiceGrc:{route:"https://morph.perseids.org/analysis/word?lang=grc&engine=morpheusgrc"},morphologyServicePer:{route:"https://localhost/extapi/morphologyservice/analysis/word?lang=per&engine=hazm"},citeMapper:{route:"https://services.perseids.org/cite_mapper/find_cite"},sgGrammar:{route:"https://services.perseids.org/sg/:doc.html"}},plugins:{text:{main:!0,template:"js/templates/text_with_context.html"},depTree:{main:!0,contextMenu:!1,contextMenuTemplate:"js/arethusa.dep_tree/templates/context_menu.html",template:"js/templates/dep_tree.html"},morph:{retrievers:{BspMorphRetriever:{resource:"morphologyServiceLat"}},template:"js/templates/morph3.html",contextMenu:!0,contextMenuTemplate:"js/arethusa.morph/templates/context_menu.html",lexicalInventory:{retriever:{LexicalInventoryRetriever:{resource:"lexInvFusekiEndpoint"}}},matchAll:!0,"@include":"js/arethusa.morph/configs/morph/lat_attributes.json",noRetrieval:"online"},search:{template:"js/templates/search.html",regex:!0},relation:{advancedMode:!0,relations:{}}},keyCapture:{regex:{greek:{\u03b1:"[\u03b1\u1f01\u1f05\u1f03\u1f07\u1f00\u1f04\u1f02\u1f06\u03ac\u1f70\u1fb6\u1f81\u1f85\u1f83\u1f87\u1f80\u1f84\u1f82\u1f86\u1fb4\u1fb2\u1fb7\u1fb3]",\u03b5:"[\u03b5\u03ad\u1f72\u1f10\u1f11\u1f14\u1f12\u1f15\u1f13]",\u03b7:"[\u03b7\u1f21\u1f25\u1f23\u1f27\u1f20\u1f24\u1f22\u1f26\u03ae\u1f74\u1fc6\u1f91\u1f95\u1f93\u1f97\u1f90\u1f94\u1f92\u1f96\u1fc4\u1fc2\u1fc7\u1fc3]",\u03b9:"[\u03b9\u1f31\u1f35\u1f33\u1f37\u1f30\u1f34\u1f32\u1f36\u03af\u1f76\u1fd6]",\u03bf:"[\u03bf\u03cc\u1f78\u1f40\u1f41\u1f44\u1f42\u1f45\u1f43]",\u03c5:"[\u03c5\u1f51\u1f55\u1f53\u1f57\u1f50\u1f54\u1f52\u1f56\u03cd\u1f7a\u1fe6]",\u03c9:"[\u03c9\u1f61\u1f65\u1f63\u1f67\u1f60\u1f64\u1f62\u1f66\u03ce\u1f7c\u1ff6\u1fa1\u1fa5\u1fa3\u1fa7\u1fa0\u1fa4\u1fa2\u1fa6\u1ff4\u1ff2\u1ff7\u1ff3]"}},keys:{}}},F=JSON.parse(JSON.stringify(q));F.main.layouts=[{name:"main_with_sidepanel",template:"js/templates/main_with_sidepanel.html"}];n(147);var T="".concat("/vg-treebank-display-copy","/arethusa"),W=function(){function e(){Object(S.a)(this,e),this.render=this.render.bind(this)}return Object(R.a)(e,[{key:"render",value:function(e,t,n){var a,r,o=n.config,c=n.w,i=window,s=i.Arethusa,l=i.$;this.widget?this.doc!==e||this.chunk===t&&(a=this.w,r=c,(a||[]).sort().join(",")===(r||[]).sort().join(","))||(this.gotoSentence(t,c),function(e){e("#toast-container").remove()}(l)):(this.widget=new s,this.widget.on("treebank_container").from(T).with(function(e){return"sidepanel"===e?F:q}(o)).start({doc:e,chunk:t,w:c}),this.api=this.widget.api()),this.doc=e,this.chunk=t,this.w=c}},{key:"gotoSentence",value:function(e,t){return this.api.gotoSentence(e,t)}},{key:"getSubdoc",value:function(){return this.api.getSubdoc()}},{key:"getMorph",value:function(e,t){return this.api.getMorph(e,t)}},{key:"refreshView",value:function(){return this.api.refreshView()}},{key:"findWord",value:function(e,t,n,a){return this.api.findWord(e,t,n,a)}}]),e}(),U=n(54),D=n.n(U),V=n(24),G=n(25),H=n(36),Q=n(19),B=n.n(Q),J=n(15),K=n.n(J),z=function(e,t){return e<t?e:t},X=function(e,t){return e>t?e:t},Y=function(e){Object(A.a)(n,e);var t=Object(I.a)(n);function n(e){var a;return Object(S.a)(this,n),(a=t.call(this,e)).state={refIsOpen:!1,settingsIsOpen:!1},a.getLines=a.getLines.bind(Object(C.a)(a)),a.getFbcnl=a.getFbcnl.bind(Object(C.a)(a)),a.createLink=a.createLink.bind(Object(C.a)(a)),a.toggleRefOpen=a.toggleRefOpen.bind(Object(C.a)(a)),a.toggleSettingsOpen=a.toggleSettingsOpen.bind(Object(C.a)(a)),a.renderSettingsLinks=a.renderSettingsLinks.bind(Object(C.a)(a)),a}return Object(R.a)(n,[{key:"getLines",value:function(){var e=this.props.chunks,t=e.start,n=e.end,a=e.numbers;if(a)return a;for(var r=[],o=t;o<=n;o+=1)r.push(o);return r}},{key:"getFbcnl",value:function(){var e=this.props,t=e.chunks,n=t.start,a=t.end,r=t.numbers,o=e.match.params.chunk,c=Number(o);return r?function(e,t){var n=t.indexOf(e);return[t[0],t[X(0,n-1)],e,t[z(t.length-1,n+1)],t[t.length-1]]}(o,r):[n,X(n,c-1),o,z(a,c+1),a]}},{key:"createLink",value:function(e){var t=this.props.linkQuery,n="./".concat(e);if(Object.entries(t).length>0){var a=B.a.stringify(t);return"".concat(n,"?").concat(a)}return n}},{key:"toggleRefOpen",value:function(){this.setState((function(e){return{refIsOpen:!e.refIsOpen}}))}},{key:"toggleSettingsOpen",value:function(){this.setState((function(e){return{settingsIsOpen:!e.settingsIsOpen}}))}},{key:"renderSettingsLinks",value:function(){var e=this.props.fullQuery,t=e.config,n="sidepanel"===t?"default":"sidepanel",a="sidepanel"===t?"Hide morphology":"Show morphology";return r.a.createElement("a",{href:"?".concat(B.a.stringify(Object(G.a)({},e,{config:n}))),className:"dropdown-item"},a)}},{key:"render",value:function(){var e=this,t=this.state,n=t.refIsOpen,a=t.settingsIsOpen,o=this.getFbcnl(),c=Object(V.a)(o,5),s=c[0],l=c[1],u=c[2],m=c[3],d=c[4],p=this.getLines();return r.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-dark"},r.a.createElement("div",{className:"collapse navbar-collapse",id:"controlPanel"},r.a.createElement("ul",{className:"navbar-nav mr-auto ".concat(K.a.dummyIcon)}),r.a.createElement("ul",{className:"navbar-nav mx-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link text-light ".concat(K.a.link),to:this.createLink(s)},"\xab First")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link text-light ".concat(K.a.link),to:this.createLink(l)},"\u2039 Back")),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("button",{className:"btn btn-link nav-link text-light dropdown-toggle ".concat(K.a.dropdownButton),type:"button","aria-haspopup":"true","aria-expanded":n,onClick:this.toggleRefOpen},u),r.a.createElement("div",{className:"dropdown-menu ".concat(K.a.dropdownScroll," ").concat(n?"show":"")},p.map((function(t){return r.a.createElement(i.b,{className:"dropdown-item",key:t,to:e.createLink(t),onClick:e.toggleRefOpen},t)})))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link text-light ".concat(K.a.link),to:this.createLink(m)},"Next \u203a")),r.a.createElement("li",null,r.a.createElement(i.b,{className:"nav-link text-light ".concat(K.a.link),to:this.createLink(d)},"Last \xbb"))),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item dropdown dropleft"},r.a.createElement("button",{className:"btn btn-link nav-link text-light",type:"button","aria-haspopup":"true","aria-expanded":a,onClick:this.toggleSettingsOpen},r.a.createElement(H.b,{icon:H.a})),r.a.createElement("div",{className:"dropdown-menu ".concat(K.a.dropdownScroll," ").concat(a?"show":"")},this.renderSettingsLinks())))))}}]),n}(a.Component),$=[{name:"w",type:"array"},{name:"config",type:"string",link:!0}],Z=function(e,t){return"array"!==t||Array.isArray(e)?e:[e]},ee=function(e){var t=B.a.parse(e,{arrayFormat:"comma"}),n={};return $.forEach((function(e){var a=e.name,r=e.type;Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=Z(t[a],r))})),n},te=function(e){Object(A.a)(n,e);var t=Object(I.a)(n);function n(e){var a;return Object(S.a)(this,n),(a=t.call(this,e)).additionalArgs=a.additionalArgs.bind(Object(C.a)(a)),a.linkQuery=a.linkQuery.bind(Object(C.a)(a)),a.renderArethusa=a.renderArethusa.bind(Object(C.a)(a)),a}return Object(R.a)(n,[{key:"componentDidMount",value:function(){this.renderArethusa()}},{key:"componentDidUpdate",value:function(){this.renderArethusa()}},{key:"additionalArgs",value:function(){var e=this.props.location.search;return ee(e)}},{key:"linkQuery",value:function(){return function(e){var t=ee(e),n={};return $.forEach((function(e){var a=e.name,r=e.type;e.link&&Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=Z(t[a],r))})),n}(this.props.location.search)}},{key:"renderArethusa",value:function(){var e=this.props,t=e.xml,n=e.match.params.chunk;(0,e.arethusa.render)(t,n,this.additionalArgs())}},{key:"render",value:function(){var e=this.props,t=e.chunks,n=e.match,a=this.linkQuery(),o=this.additionalArgs();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y,{match:n,chunks:t,fullQuery:o,linkQuery:a}),r.a.createElement("div",{className:"__artsa"},r.a.createElement("div",{id:"treebank_container",className:D.a.treebankContainer})))}}]),n}(a.Component),ne=function(e,t){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},e),r.a.createElement("td",{className:P.a.publicationRow},function(e){return Array.isArray(e)?r.a.createElement("div",null,e.map((function(e){return r.a.createElement("span",{key:e},e,r.a.createElement("br",null))}))):e}(t)))},ae=function(e){Object(A.a)(n,e);var t=Object(I.a)(n);function n(e){var a;return Object(S.a)(this,n),(a=t.call(this,e)).state={arethusaLoaded:!1,subDoc:""},a.setSubdoc=a.setSubdoc.bind(Object(C.a)(a)),a.arethusa=new W,a}return Object(R.a)(n,[{key:"componentDidMount",value:function(){window.document.body.addEventListener("ArethusaLoaded",this.setSubdoc)}},{key:"componentDidUpdate",value:function(e){var t=this.state.arethusaLoaded,n=this.props.location,a=e.location;t&&n!==a&&this.setSubdoc()}},{key:"componentWillUnmount",value:function(){window.document.body.removeEventListener("ArethusaLoaded",this.setSubdoc)}},{key:"setSubdoc",value:function(){var e=this.arethusa.getSubdoc();this.setState({subDoc:e,arethusaLoaded:!0})}},{key:"render",value:function(){var e,t,n=this.props,a=n.logo,o=n.link,c=n.publicationPath,i=n.author,s=n.work,l=n.editors,u=n.locus,m=n.publicationLink,d=n.notes,p=n.xml,h=n.chunks,b=n.match,g=n.location,v=this.state.subDoc;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{logo:a,link:o},r.a.createElement("span",null,r.a.createElement("i",null,s)),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"".concat("/vg-treebank-display-copy","/")},"Home")))),r.a.createElement("div",{className:"container pt-3"},r.a.createElement("h2",null,r.a.createElement("span",null,i,",",r.a.createElement("i",null," ",s," "),u)),r.a.createElement("table",{className:"table"},r.a.createElement("tbody",null,!!i&&ne("Author",i),!!s&&ne("Work",s),!!u&&function(e,t,n){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},e),r.a.createElement("td",{className:P.a.publicationRow},t," ",r.a.createElement("a",{href:"../".concat(n)},"(See all)")))}("Locus",u,c),!!v&&ne("Reference",v),!!l&&ne("Editors",l),!!m&&function(e,t){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},e),r.a.createElement("td",null,r.a.createElement("a",{href:t},t)))}("Link",m),!!d&&(e="Notes",t=d,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},e),r.a.createElement("td",{className:P.a.publicationRow},r.a.createElement(w,{source:t})))))),r.a.createElement("div",{className:P.a.treebankWrapper},r.a.createElement(te,{xml:p,chunks:h,location:g,match:b,arethusa:this.arethusa})),r.a.createElement("div",{className:"pt-1 pb-4 text-right"},r.a.createElement("a",{href:"".concat("/vg-treebank-display-copy","/xml/").concat(p),target:"_blank",rel:"noopener noreferrer"},"View XML"))))}}]),n}(a.Component);ae.defaultProps={logo:void 0,link:void 0,publicationLink:void 0,notes:void 0};var re=ae,oe=function(e){var t=e.config,n=t.logo,a=t.link;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{logo:n,link:a},r.a.createElement("span",null,"Not Found"),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"".concat("/vg-treebank-display-copy","/")},"Home")))),r.a.createElement("div",{className:"container pt-5"},r.a.createElement("div",{className:"row col-12 pt-5 pb-3"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("h1",null,"Error 404"))),r.a.createElement("div",{className:"row col-12 pb-3"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("h2",null,"Publication not found"))),r.a.createElement("div",{className:"row col-12 pb-3"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("h2",null,r.a.createElement("a",{href:"".concat("/vg-treebank-display-copy","/")},"Return to homepage"))))))},ce=function(e){Object(A.a)(n,e);var t=Object(I.a)(n);function n(e){var a;Object(S.a)(this,n),a=t.call(this,e);var r=e.config,o={},c=r.logo,i=r.link;return r.collections.forEach((function(e){(e.publications||[]).forEach((function(e){var t=e.author,n=e.work,a=e.editors,r=e.path;e.sections.forEach((function(e){var s=e.path,l=e.locus,u=e.link,m=e.notes,d=e.xml,p=e.chunks;o[s]={logo:c,link:i,publicationPath:r,author:t,work:n,editors:a,locus:l,publicationLink:u,notes:m,xml:d,chunks:p}}))}))})),a.argsLookup=o,a}return Object(R.a)(n,[{key:"render",value:function(){var e=this.props,t=e.config,n=e.match,a=e.location,o=n.params.publication,c=this.argsLookup[o];return void 0===c?r.a.createElement(oe,{config:t}):r.a.createElement(re,Object.assign({},c,{match:n,location:a}))}}]),n}(a.Component),ie=function(e){var t=e.config,n=t.logo,a=t.link,o=t.title,c=t.subtitle,i=t.collections;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{logo:n,link:a},o,r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"".concat("/vg-treebank-display-copy","/")},"Home")))),r.a.createElement(j,{title:o,subtitle:c}),i.map((function(e){return function(e){var t=e.title,n=e.publications;return r.a.createElement(_,{key:t,title:t,publications:n})}(e)})))},se=function(e){Object(A.a)(n,e);var t=Object(I.a)(n);function n(e){var a;Object(S.a)(this,n),a=t.call(this,e);var o=e.config,c={},i=o.logo,s=o.link,l=o.title,u=o.subtitle;return o.collections.forEach((function(e){(e.publications||[]).forEach((function(e){var t=e.path,n=e.author,a=e.work;c[t]={logo:i,link:s,title:l,subtitle:u,collections:[{title:r.a.createElement(r.a.Fragment,null,n,","," ",r.a.createElement("i",null,a)),publications:[e]}]}}))})),a.argsLookup=c,a}return Object(R.a)(n,[{key:"render",value:function(){var e=this.props,t=e.config,n=e.match.params.publication,a=this.argsLookup[n];return void 0===a?r.a.createElement(oe,{config:t}):r.a.createElement(ie,{config:a})}}]),n}(a.Component),le=function(e){var t=e.config,n=e.config,a=n.copyright,o=n.doi,c=n.report,i=n.github,l=n.twitter;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",component:function(){return r.a.createElement(L,{config:t})}}),r.a.createElement(s.b,{exact:!0,path:"/:publication/",render:function(e){return r.a.createElement(se,Object.assign({},e,{config:t}))}}),r.a.createElement(s.b,{exact:!0,path:"/:publication/:chunk",render:function(e){return r.a.createElement(ce,Object.assign({},e,{config:t}))}}),r.a.createElement(s.b,{path:"/",component:function(){return r.a.createElement(oe,{config:t})}})),r.a.createElement(u.PerseidsFooter,{copyright:a,doi:o,report:c,github:i,twitter:l}))},ue=n(39),me=n.n(ue),de=n(9),pe={name:"treebank",targetIframeID:"string-not-used",targetURL:"string-not-used",commModes:[de.WindowIframeDestination.commModes.RECEIVE]},he=function(e,t,n){return de.ResponseMessage.Error(e,new Error(t),n)},be=function(e){var t,n=e.wordIds,a=e.config,r=e.sentenceId,o=(t={w:n,config:a},B.a.stringify(t,{arrayFormat:"comma"}));return""===o?r:"".concat(r,"?").concat(o)},ge=function(e){Object(A.a)(n,e);var t=Object(I.a)(n);function n(e){var a;return Object(S.a)(this,n),(a=t.call(this,e)).state={arethusaLoaded:!1,redirectTo:null},a.messageHandler=a.messageHandler.bind(Object(C.a)(a)),a.setArethusaLoaded=a.setArethusaLoaded.bind(Object(C.a)(a)),a}return Object(R.a)(n,[{key:"componentDidMount",value:function(){this.destination=new de.WindowIframeDestination(Object(G.a)({},pe,{receiverCB:this.messageHandler})),this.service=new de.MessagingService("treebank-service",this.destination),window.document.body.addEventListener("ArethusaLoaded",this.setArethusaLoaded)}},{key:"componentWillUnmount",value:function(){this.destination.deregister(),window.document.body.removeEventListener("ArethusaLoaded",this.setArethusaLoaded)}},{key:"setArethusaLoaded",value:function(){this.setState({arethusaLoaded:!0})}},{key:"messageHandler",value:function(e,t){var n=this.props.arethusa,a=this.state.arethusaLoaded,r=e.body,o=Object.keys(r),c=Object(V.a)(o,1)[0];if(a)try{switch(c){case"gotoSentence":this.setState({redirectTo:be(r.gotoSentence)}),t(de.ResponseMessage.Success(e,{status:"success"}));break;case"getMorph":t(de.ResponseMessage.Success(e,n.getMorph(r.getMorph.sentenceId,r.getMorph.wordId)));break;case"refreshView":t(de.ResponseMessage.Success(e,n.refreshView()));break;case"findWord":t(de.ResponseMessage.Success(e,n.findWord(r.findWord.sentenceId,r.findWord.word,r.findWord.prefix,r.findWord.suffix)));break;default:t(he(e,"Unsupported request: ".concat(c),de.ResponseMessage.errorCodes.UNKNOWN_REQUEST))}}catch(i){t(de.ResponseMessage.Error(e,i,de.ResponseMessage.errorCodes.INTERNAL_ERROR))}else t(he(e,"Arethusa is Not Loaded",de.ResponseMessage.errorCodes.SERVICE_UNINITIALIZED))}},{key:"render",value:function(){var e=this.state.redirectTo;return e&&r.a.createElement(s.a,{to:e})}}]),n}(a.Component),fe=function(e){Object(A.a)(n,e);var t=Object(I.a)(n);function n(){return Object(S.a)(this,n),t.apply(this,arguments)}return Object(R.a)(n,[{key:"componentDidMount",value:function(){this.renderArethusa()}},{key:"componentDidUpdate",value:function(){this.renderArethusa()}},{key:"renderArethusa",value:function(){var e=this.props,t=e.xml,n=e.match.params.chunk,a=e.arethusa.render,r=e.location.search;a(t,n,ee(r))}},{key:"render",value:function(){var e=this.props,t=e.match,n=e.arethusa,a=t.params,o=a.publication,c=a.chunk;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"__artsa"},r.a.createElement("div",{id:"treebank_container",className:me.a.treebankContainer})),r.a.createElement("div",{className:me.a.links},r.a.createElement("a",{href:"".concat("/vg-treebank-display-copy","/").concat(o,"/").concat(c),target:"_blank",rel:"noopener noreferrer"},"Credits and more information")),r.a.createElement(ge,{arethusa:n}))}}]),n}(a.Component),ve=function(e){Object(A.a)(n,e);var t=Object(I.a)(n);function n(e){var a;return Object(S.a)(this,n),(a=t.call(this,e)).arethusa=new W,a}return Object(R.a)(n,[{key:"render",value:function(){var e=this.props,t=e.xml,n=e.match,a=e.location;return r.a.createElement("div",null,r.a.createElement(fe,{xml:t,location:a,match:n,arethusa:this.arethusa}))}}]),n}(a.Component),ke=function(){return r.a.createElement("div",{className:"container pt-5"},r.a.createElement("div",{className:"row col-12 pt-5 pb-3"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("h1",null,"Error 404"))),r.a.createElement("div",{className:"row col-12 pb-3"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("h2",null,"Publication not found"))))},Ee=function(e){Object(A.a)(n,e);var t=Object(I.a)(n);function n(e){var a;Object(S.a)(this,n),a=t.call(this,e);var r=e.config,o={};return r.collections.forEach((function(e){(e.publications||[]).forEach((function(e){e.sections.forEach((function(e){var t=e.path,n=e.xml;o[t]={xml:n}}))}))})),a.argsLookup=o,a}return Object(R.a)(n,[{key:"render",value:function(){var e=this.props,t=e.config,n=e.match,a=e.location,o=n.params.publication,c=this.argsLookup[o];if(void 0===c)return r.a.createElement(ke,{config:t});var i=c.xml;return r.a.createElement(ve,{xml:i,match:n,location:a})}}]),n}(a.Component),ye=function(e){var t=e.config;return r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/embed/:publication/:chunk",render:function(e){return r.a.createElement(Ee,Object.assign({},e,{config:t}))}}),r.a.createElement(s.b,{path:"/",component:function(){return r.a.createElement(ke,{config:t})}}))},Oe=function(){return r.a.createElement(i.a,{basename:"/vg-treebank-display-copy"},r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/embed/",component:function(){return r.a.createElement(ye,{config:l})}}),r.a.createElement(s.b,{path:"/",component:function(){return r.a.createElement(le,{config:l})}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},21:function(e,t,n){e.exports={publicationRow:"Publication_publicationRow__3taiJ",treebankWrapper:"Publication_treebankWrapper__2KYz-"}},34:function(e){e.exports=JSON.parse('{"title":"VG Treebank Display","github":"https://github.com/perseids-publications/vg-treebank-display/","collections":[{"title":"Unit 2","publications":[{"path":"unit-2_2","author":"Unit 2.2","work":"Noun trees","editors":"Vanessa Gorman","sections":[{"locus":"view","path":"unit-2_2-nouns-trees","xml":"unit-2_2-nouns-trees.xml","chunks":{"start":1,"end":137}}]},{"path":"unit-2_3","author":"Unit 2.3","work":"Coordinating conjunction trees","editors":"Vanessa Gorman","sections":[{"locus":"view","path":"unit-2_3-coord-trees","xml":"unit-2_3-coord-trees.xml","chunks":{"start":1,"end":46}}]},{"path":"unit-2_4","author":"Unit 2.4","work":"Preposition trees","editors":"Vanessa Gorman","sections":[{"locus":"view","path":"unit-2_4-preposition-trees","xml":"unit-2_4-preposition-trees.xml","chunks":{"start":1,"end":137}}]},{"path":"unit-2_5","author":"Unit 2.5","work":"Adverb trees","editors":"Vanessa Gorman","sections":[{"locus":"view","path":"unit-2_5-sentence-adverb-trees","xml":"unit-2_5-sentence-adverb-trees.xml","chunks":{"start":1,"end":28}}]},{"path":"unit-2_6","author":"Unit 2.6","work":"Adjective trees","editors":"Vanessa Gorman","sections":[{"locus":"view","path":"unit-2_6-adjective-trees","xml":"unit-2_6-adjective-trees.xml","chunks":{"start":1,"end":267}}]}]}]}')},39:function(e,t,n){e.exports={treebankContainer:"EmbeddedTreebank_treebankContainer__2X6pS",links:"EmbeddedTreebank_links__1ndYN"}},53:function(e,t,n){e.exports={jumbotronSmall:"Hero_jumbotronSmall__IN8kP"}},54:function(e,t,n){e.exports={treebankContainer:"Treebank_treebankContainer__sQn_K"}},57:function(e,t,n){e.exports=n(170)},64:function(e,t,n){}},[[57,1,2]]]);
//# sourceMappingURL=main.d9fc8810.chunk.js.map