(this["webpackJsonptreebank-template"]=this["webpackJsonptreebank-template"]||[]).push([[0],{139:function(e,t,a){},149:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(43),o=a.n(s),c=(a(54),a(55),a(56),a(11)),i=a(10),l=a(28),m=a(15),u=a(1);const p=Object(u.shape)({start:u.number,end:u.number,numbers:Object(u.arrayOf)(Object(u.oneOfType)([u.string]))}),h=Object(u.shape)({locus:u.string.isRequired,path:u.string.isRequired,xml:u.string.isRequired,link:u.string,notes:u.string,chunks:p.isRequired}),d=Object(u.shape)({path:u.string.isRequired,author:u.string.isRequired,work:u.string.isRequired,editors:Object(u.oneOfType)([u.string,Object(u.arrayOf)(u.string)]).isRequired,sections:Object(u.arrayOf)(h).isRequired}),g=Object(u.shape)({title:Object(u.oneOfType)([u.string,u.element]).isRequired,publications:Object(u.arrayOf)(d),text:u.string}),b=(Object(u.shape)({logo:u.string,link:u.string,title:Object(u.oneOfType)([u.string,u.element]).isRequired,subtitle:u.string.isRequired,copyright:u.string,report:u.string,github:u.string,twitter:u.string,collections:Object(u.arrayOf)(g).isRequired}),Object(u.shape)({search:u.string.isRequired}),Object(u.shape)({params:Object(u.shape)({chunk:u.string.isRequired}).isRequired}),Object(u.shape)({params:Object(u.shape)({publication:u.string.isRequired}).isRequired}),Object(u.shape)({w:u.string,config:u.string}),({logo:e,link:t,children:a})=>void 0!==t?r.a.createElement(m.PerseidsHeader,{logo:e,props:{href:t}},a):r.a.createElement(m.PerseidsHeader,{logo:e},a));b.defaultProps={logo:void 0,link:void 0};var E=b,k=a(44),v=a.n(k),f=a(29),w=a.n(f);const y=e=>Object(f.uriTransformer)("/"===e[0]?"".concat("/vg-treebank-display").concat(e):e);var x=e=>r.a.createElement(w.a,Object.assign({},e,{transformLinkUri:y}));var N=({title:e,subtitle:t})=>r.a.createElement("div",{className:"jumbotron jumbotron-fluid bg-dark ".concat(v.a.jumbotronSmall)},r.a.createElement("div",{className:"container text-light"},r.a.createElement("h1",{className:"display-4"},e),t&&(e=>r.a.createElement(x,{source:e}))(t)));const O=e=>{const t=e.path,a=e.author,s=e.work,o=e.editors,c=e.sections;return r.a.createElement("tr",{className:"d-flex",key:t},r.a.createElement("th",{className:"col-md-3 d-none d-md-block",scope:"row"},a),r.a.createElement("td",{className:"col-md-4 d-none d-md-block"},s),r.a.createElement("td",{className:"col-8 col-sm-7 d-block d-md-none"},r.a.createElement("strong",null,a),","," ",r.a.createElement("em",null,s)),r.a.createElement("td",{className:"col-md-3 col-lg-3 d-none d-md-block"},(e=>Array.isArray(e)?r.a.createElement("ul",{className:"pl-1"},e.map(e=>r.a.createElement("li",{key:e},e))):e)(o)),r.a.createElement("td",{className:"col-4 col-sm-5 col-md-2 col-lg-2 text-right"},c.map(e=>(e=>{const t=e.locus,a=e.path,s=(e=>{const t=e.start,a=e.numbers;return t||a[0]})(e.chunks);return r.a.createElement(n.Fragment,{key:a},r.a.createElement("a",{href:"".concat(a,"/").concat(s)},t),r.a.createElement("br",null))})(e))))},_=({title:e,publications:t,text:a})=>r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row pb-3"},r.a.createElement("div",{className:"col-12"},e&&r.a.createElement("h2",null,e),a&&r.a.createElement(x,{source:a}),r.a.createElement("table",{className:"table"},t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("thead",{className:"thead-light"},r.a.createElement("tr",{className:"d-flex"},r.a.createElement("th",{className:"col-md-3 d-none d-md-block",scope:"col"},"Author"),r.a.createElement("th",{className:"col-8 col-sm-7 col-md-4",scope:"col"},"Work"),r.a.createElement("th",{className:"col-md-3 col-lg-3 d-none d-md-block",scope:"col"},"Editors"),r.a.createElement("th",{className:"col-4 col-sm-5 col-md-2 col-lg-2",scope:"col"},"Locus"))),r.a.createElement("tbody",null,t.map(e=>O(e))))))));_.defaultProps={publications:void 0,text:void 0};var j=_;var S=({config:e})=>{const t=e.logo,a=e.link,n=e.title,s=e.subtitle,o=e.collections;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{logo:t,link:a},n),r.a.createElement(N,{title:n,subtitle:s}),o.map(e=>(e=>{const t=e.title,a=e.text,n=e.publications;return r.a.createElement(j,{key:t,title:t,text:a,publications:n})})(e)))},R=a(16),L=a.n(R);const C={main:{debug:!1,showKeys:!1,chunkParam:"chunk",auxConfPath:"".concat("/vg-treebank-display","/arethusa/configs"),retrievers:{TreebankRetriever:{resource:"Gardener",docIdentifier:"treebank",preselector:"w"}},plugins:["text","morph","relation","depTree"],layouts:[{name:"widget",template:"js/templates/widget.html"}]},notifier:{disable:!0},navigator:{chunkSize:1},navbar:!1,resources:{Gardener:{route:"".concat("/vg-treebank-display","/xml/:doc"),params:["doc"]},lexInvFusekiEndpoint:{route:"https://fuseki.perseids.org/fuseki/ds/query?format=json"},morphologyServiceLat:{route:"https://services.perseids.org/bsp/morphologyservice/analysis/word?lang=lat&engine=morpheuslat"},newMorphologyServiceLat:{route:"https://morph.perseids.org/analysis/word?lang=lat&engine=morpheuslat"},morphologyServiceGrc:{route:"https://services.perseids.org/bsp/morphologyservice/analysis/word?lang=grc&engine=morpheusgrc"},newMorphologyServiceGrc:{route:"https://morph.perseids.org/analysis/word?lang=grc&engine=morpheusgrc"},morphologyServicePer:{route:"https://localhost/extapi/morphologyservice/analysis/word?lang=per&engine=hazm"},citeMapper:{route:"https://services.perseids.org/cite_mapper/find_cite"},sgGrammar:{route:"https://services.perseids.org/sg/:doc.html"}},plugins:{text:{main:!0,template:"js/templates/text_with_context.html"},depTree:{main:!0,contextMenu:!1,contextMenuTemplate:"js/arethusa.dep_tree/templates/context_menu.html",template:"js/templates/dep_tree.html"},morph:{retrievers:{BspMorphRetriever:{resource:"morphologyServiceLat"}},template:"js/templates/morph3.html",contextMenu:!0,contextMenuTemplate:"js/arethusa.morph/templates/context_menu.html",lexicalInventory:{retriever:{LexicalInventoryRetriever:{resource:"lexInvFusekiEndpoint"}}},matchAll:!0,"@include":"js/arethusa.morph/configs/morph/lat_attributes.json"},relation:{advancedMode:!0,relations:{}}},keyCapture:{regex:{greek:{"\u03b1":"[\u03b1\u1f01\u1f05\u1f03\u1f07\u1f00\u1f04\u1f02\u1f06\u03ac\u1f70\u1fb6\u1f81\u1f85\u1f83\u1f87\u1f80\u1f84\u1f82\u1f86\u1fb4\u1fb2\u1fb7\u1fb3]","\u03b5":"[\u03b5\u03ad\u1f72\u1f10\u1f11\u1f14\u1f12\u1f15\u1f13]","\u03b7":"[\u03b7\u1f21\u1f25\u1f23\u1f27\u1f20\u1f24\u1f22\u1f26\u03ae\u1f74\u1fc6\u1f91\u1f95\u1f93\u1f97\u1f90\u1f94\u1f92\u1f96\u1fc4\u1fc2\u1fc7\u1fc3]","\u03b9":"[\u03b9\u1f31\u1f35\u1f33\u1f37\u1f30\u1f34\u1f32\u1f36\u03af\u1f76\u1fd6]","\u03bf":"[\u03bf\u03cc\u1f78\u1f40\u1f41\u1f44\u1f42\u1f45\u1f43]","\u03c5":"[\u03c5\u1f51\u1f55\u1f53\u1f57\u1f50\u1f54\u1f52\u1f56\u03cd\u1f7a\u1fe6]","\u03c9":"[\u03c9\u1f61\u1f65\u1f63\u1f67\u1f60\u1f64\u1f62\u1f66\u03ce\u1f7c\u1ff6\u1fa1\u1fa5\u1fa3\u1fa7\u1fa0\u1fa4\u1fa2\u1fa6\u1ff4\u1ff2\u1ff7\u1ff3]"}},keys:{}}},P=JSON.parse(JSON.stringify(C));P.main.layouts=[{name:"main_with_sidepanel",template:"js/templates/main_with_sidepanel.html"}];a(139);const A="".concat("/vg-treebank-display","/arethusa/");var I=class{constructor(){this.render=this.render.bind(this)}render(e,t,{config:a,w:n}){const r=window,s=r.Arethusa,o=r.$;this.widget?this.doc===e&&this.chunk!==t&&(this.gotoSentence(t),(e=>{e("#toast-container").remove()})(o)):(this.widget=new s,this.widget.on("treebank_container").from(A).with((e=>"sidepanel"===e?P:C)(a)).start({doc:e,chunk:t,w:n})),this.doc=e,this.chunk=t}gotoSentence(e){return this.widget.api().gotoSentence(e)}getSubdoc(){return this.widget.api().getSubdoc()}getMorph(e,t){return this.widget.api().getMorph(e,t)}refreshView(){return this.widget.api().refreshView()}},M=a(12),q=a.n(M),F=a(45),T=a.n(F),V=a(19),D=a(20),U=a(48),G=a(30),H=a(8),W=a.n(H);const Q=(e,t)=>e<t?e:t,B=(e,t)=>e>t?e:t,J=e=>{let t=e.to,a=e.children,n=Object(U.a)(e,["to","children"]);return r.a.createElement("a",Object.assign({href:t},n),a)};class z extends n.Component{constructor(e){super(e),this.state={refIsOpen:!1,settingsIsOpen:!1},this.getLines=this.getLines.bind(this),this.getFbcnl=this.getFbcnl.bind(this),this.createLink=this.createLink.bind(this),this.toggleRefOpen=this.toggleRefOpen.bind(this),this.toggleSettingsOpen=this.toggleSettingsOpen.bind(this),this.renderSettingsLinks=this.renderSettingsLinks.bind(this)}getLines(){const e=this.props.chunks,t=e.start,a=e.end,n=e.numbers;if(n)return n;const r=[];for(let s=t;s<=a;s+=1)r.push(s);return r}getFbcnl(){const e=this.props,t=e.chunks,a=t.start,n=t.end,r=t.numbers,s=e.match.params.chunk,o=Number(s);return r?((e,t)=>{const a=t.indexOf(e);return[t[0],t[B(0,a-1)],e,t[Q(t.length-1,a+1)],t[t.length-1]]})(s,r):[a,B(a,o-1),s,Q(n,o+1),n]}createLink(e){const t=this.props.linkQuery,a="./".concat(e);if(Object.entries(t).length>0){const e=q.a.stringify(t);return"".concat(a,"?").concat(e)}return a}toggleRefOpen(){this.setState(({refIsOpen:e})=>({refIsOpen:!e}))}toggleSettingsOpen(){this.setState(({settingsIsOpen:e})=>({settingsIsOpen:!e}))}renderSettingsLinks(){const e=this.props.fullQuery,t=e.config,a="sidepanel"===t?"default":"sidepanel",n="sidepanel"===t?"Hide morphology":"Show morphology";return r.a.createElement("a",{href:"?".concat(q.a.stringify(Object(D.a)({},e,{config:a}))),className:"dropdown-item"},n)}render(){const e=this.props.refresh,t=this.state,a=t.refIsOpen,n=t.settingsIsOpen,s=this.getFbcnl(),o=Object(V.a)(s,5),i=o[0],l=o[1],m=o[2],u=o[3],p=o[4],h=this.getLines(),d=e?J:c.b;return r.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-dark"},r.a.createElement("div",{className:"collapse navbar-collapse",id:"controlPanel"},r.a.createElement("ul",{className:"navbar-nav mr-auto ".concat(W.a.dummyIcon)}),r.a.createElement("ul",{className:"navbar-nav mx-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(d,{className:"nav-link text-light ".concat(W.a.link),to:this.createLink(i)},"\xab First")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d,{className:"nav-link text-light ".concat(W.a.link),to:this.createLink(l)},"\u2039 Back")),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("button",{className:"btn btn-link nav-link text-light dropdown-toggle ".concat(W.a.dropdownButton),type:"button","aria-haspopup":"true","aria-expanded":a,onClick:this.toggleRefOpen},m),r.a.createElement("div",{className:"dropdown-menu ".concat(W.a.dropdownScroll," ").concat(a?"show":"")},h.map(e=>r.a.createElement(d,{className:"dropdown-item",key:e,to:this.createLink(e),onClick:this.toggleRefOpen},e)))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d,{className:"nav-link text-light ".concat(W.a.link),to:this.createLink(u)},"Next \u203a")),r.a.createElement("li",null,r.a.createElement(d,{className:"nav-link text-light ".concat(W.a.link),to:this.createLink(p)},"Last \xbb"))),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item dropdown dropleft"},r.a.createElement("button",{className:"btn btn-link nav-link text-light",type:"button","aria-haspopup":"true","aria-expanded":n,onClick:this.toggleSettingsOpen},r.a.createElement(G.b,{icon:G.a})),r.a.createElement("div",{className:"dropdown-menu ".concat(W.a.dropdownScroll," ").concat(n?"show":"")},this.renderSettingsLinks())))))}}var K=z;class X extends n.Component{constructor(e){super(e),this.additionalArgs=this.additionalArgs.bind(this),this.refreshControlPanel=this.refreshControlPanel.bind(this),this.linkQuery=this.linkQuery.bind(this),this.renderArethusa=this.renderArethusa.bind(this)}componentDidMount(){this.renderArethusa()}componentDidUpdate(){this.renderArethusa()}additionalArgs(){const e=this.props.location.search,t=q.a.parse(e),a={};return["w","config"].forEach(e=>{Object.prototype.hasOwnProperty.call(t,e)&&(a[e]=t[e])}),a}refreshControlPanel(){const e=this.additionalArgs();let t=!1;return["w"].forEach(a=>{Object.prototype.hasOwnProperty.call(e,a)&&(t=!0)}),t}linkQuery(){const e=this.additionalArgs(),t={};return["config"].forEach(a=>{Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}),t}renderArethusa(){const e=this.props,t=e.xml,a=e.match.params.chunk;(0,e.arethusa.render)(t,a,this.additionalArgs())}render(){const e=this.props,t=e.chunks,a=e.match,n=this.refreshControlPanel(),s=this.linkQuery(),o=this.additionalArgs();return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,{match:a,chunks:t,refresh:n,fullQuery:o,linkQuery:s}),r.a.createElement("div",{className:"__artsa"},r.a.createElement("div",{id:"treebank_container",className:T.a.treebankContainer})))}}var Y=X;const $=(e,t)=>r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},e),r.a.createElement("td",{className:L.a.publicationRow},(e=>Array.isArray(e)?r.a.createElement("div",null,e.map(e=>r.a.createElement("span",{key:e},e,r.a.createElement("br",null)))):e)(t)));class Z extends n.Component{constructor(e){super(e),this.state={subDoc:""},this.setSubdoc=this.setSubdoc.bind(this),this.arethusa=new I}componentDidMount(){this.interval=window.setInterval(this.setSubdoc,100)}componentWillUnmount(){window.clearInterval(this.interval)}setSubdoc(){try{const e=this.arethusa.getSubdoc();this.setState({subDoc:e})}catch(e){}}render(){const e=this.props,t=e.logo,a=e.link,n=e.publicationPath,s=e.author,o=e.work,c=e.editors,i=e.locus,l=e.publicationLink,m=e.notes,u=e.xml,p=e.chunks,h=e.match,d=e.location,g=this.state.subDoc;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{logo:t,link:a},r.a.createElement("span",null,r.a.createElement("i",null,o)),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"".concat("/vg-treebank-display","/")},"Home")))),r.a.createElement("div",{className:"container pt-3"},r.a.createElement("h2",null,r.a.createElement("span",null,s,",",r.a.createElement("i",null," ",o," "),i)),r.a.createElement("table",{className:"table"},r.a.createElement("tbody",null,!!s&&$("Author",s),!!o&&$("Work",o),!!i&&((e,t,a)=>r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},e),r.a.createElement("td",{className:L.a.publicationRow},t," ",r.a.createElement("a",{href:"../".concat(a)},"(See all)"))))("Locus",i,n),!!g&&$("Reference",g),!!c&&$("Editors",c),!!l&&((e,t)=>r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},e),r.a.createElement("td",null,r.a.createElement("a",{href:t},t))))("Link",l),!!m&&(b="Notes",k=m,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},b),r.a.createElement("td",{className:L.a.publicationRow},r.a.createElement(x,{source:k})))))),r.a.createElement("div",{className:L.a.treebankWrapper},r.a.createElement(Y,{xml:u,chunks:p,location:d,match:h,arethusa:this.arethusa})),r.a.createElement("div",{className:"pt-1 pb-4 text-right"},r.a.createElement("a",{href:"".concat("/vg-treebank-display","/xml/").concat(u),target:"_blank",rel:"noopener noreferrer"},"View XML"))));var b,k}}Z.defaultProps={logo:void 0,link:void 0,publicationLink:void 0,notes:void 0};var ee=Z;var te=({config:{logo:e,link:t}})=>r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{logo:e,link:t},r.a.createElement("span",null,"Not Found"),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"".concat("/vg-treebank-display","/")},"Home")))),r.a.createElement("div",{className:"container pt-5"},r.a.createElement("div",{className:"row col-12 pt-5 pb-3"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("h1",null,"Error 404"))),r.a.createElement("div",{className:"row col-12 pb-3"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("h2",null,"Publication not found"))),r.a.createElement("div",{className:"row col-12 pb-3"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("h2",null,r.a.createElement("a",{href:"".concat("/vg-treebank-display","/")},"Return to homepage"))))));class ae extends n.Component{constructor(e){super(e);const t=e.config,a={},n=t.logo,r=t.link;t.collections.forEach(e=>{(e.publications||[]).forEach(e=>{const t=e.author,s=e.work,o=e.editors,c=e.path;e.sections.forEach(e=>{const i=e.path,l=e.locus,m=e.link,u=e.notes,p=e.xml,h=e.chunks;a[i]={logo:n,link:r,publicationPath:c,author:t,work:s,editors:o,locus:l,publicationLink:m,notes:u,xml:p,chunks:h}})})}),this.argsLookup=a}render(){const e=this.props,t=e.config,a=e.match,n=e.location,s=a.params.publication,o=this.argsLookup[s];return void 0===o?r.a.createElement(te,{config:t}):r.a.createElement(ee,Object.assign({},o,{match:a,location:n}))}}var ne=ae;var re=({config:{logo:e,link:t,title:a,subtitle:n,collections:s}})=>r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{logo:e,link:t},a,r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"".concat("/vg-treebank-display","/")},"Home")))),r.a.createElement(N,{title:a,subtitle:n}),s.map(e=>(e=>{const t=e.title,a=e.publications;return r.a.createElement(j,{key:t,title:t,publications:a})})(e)));class se extends n.Component{constructor(e){super(e);const t=e.config,a={},n=t.logo,s=t.link,o=t.title,c=t.subtitle,i=t.report,l=t.github,m=t.twitter;t.collections.forEach(e=>{(e.publications||[]).forEach(e=>{const t=e.path,u=e.author,p=e.work;a[t]={logo:n,link:s,title:o,subtitle:c,report:i,github:l,twitter:m,collections:[{title:r.a.createElement(r.a.Fragment,null,u,","," ",r.a.createElement("i",null,p)),publications:[e]}]}})}),this.argsLookup=a}render(){const e=this.props,t=e.config,a=e.match.params.publication,n=this.argsLookup[a];return void 0===n?r.a.createElement(te,{config:t}):r.a.createElement(re,{config:n})}}var oe=se;var ce=({config:e,config:{copyright:t,report:a,github:n,twitter:s}})=>r.a.createElement(r.a.Fragment,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",component:()=>r.a.createElement(S,{config:e})}),r.a.createElement(i.b,{exact:!0,path:"/:publication/",render:t=>r.a.createElement(oe,Object.assign({},t,{config:e}))}),r.a.createElement(i.b,{exact:!0,path:"/:publication/:chunk",render:t=>r.a.createElement(ne,Object.assign({},t,{config:e}))}),r.a.createElement(i.b,{path:"/",component:()=>r.a.createElement(te,{config:e})})),r.a.createElement(m.PerseidsFooter,{copyright:t,report:a,github:n,twitter:s})),ie=a(33),le=a.n(ie),me=a(9);const ue={name:"treebank",targetIframeID:"string-not-used",targetURL:"string-not-used",commModes:[me.WindowIframeDestination.commModes.RECEIVE]};class pe extends n.Component{constructor(e){super(e),this.state={redirectTo:null},this.messageHandler=this.messageHandler.bind(this)}componentDidMount(){this.service=new me.MessagingService("treebank-service",new me.WindowIframeDestination(Object(D.a)({},ue,{receiverCB:this.messageHandler})))}componentWillUnmount(){this.service.deregister()}messageHandler(e,t){const a=this.props.arethusa,n=e.body,r=Object.keys(n),s=Object(V.a)(r,1)[0];try{switch(s){case"gotoSentence":this.setState({redirectTo:n.gotoSentence.sentenceId}),t(me.ResponseMessage.Success(e,{status:"success"}));break;case"getMorph":t(me.ResponseMessage.Success(e,a.getMorph(n.getMorph.sentenceId,n.getMorph.wordId)));break;case"refreshView":t(me.ResponseMessage.Success(e,a.refreshView()));break;default:t(((e,t)=>me.ResponseMessage.Error(e,new Error(t)))("Unsupported request: ".concat(s)))}}catch(o){t(me.ResponseMessage.Error(e,o))}}render(){const e=this.state.redirectTo;return e&&r.a.createElement(i.a,{to:e})}}var he=pe;class de extends n.Component{constructor(e){super(e),this.additionalArgs=this.additionalArgs.bind(this)}componentDidMount(){this.renderArethusa()}componentDidUpdate(){this.renderArethusa()}additionalArgs(){const e=this.props.location.search,t=q.a.parse(e),a={};return["w"].forEach(e=>{Object.prototype.hasOwnProperty.call(t,e)&&(a[e]=t[e])}),a}renderArethusa(){const e=this.props,t=e.xml,a=e.match.params.chunk;(0,e.arethusa.render)(t,a,this.additionalArgs())}render(){const e=this.props,t=e.match,a=e.arethusa,n=t.params,s=n.publication,o=n.chunk;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"__artsa"},r.a.createElement("div",{id:"treebank_container",className:le.a.treebankContainer})),r.a.createElement("div",{className:le.a.links},r.a.createElement("a",{href:"".concat("/vg-treebank-display","/").concat(s,"/").concat(o),target:"_blank",rel:"noopener noreferrer"},"Credits and more information")),r.a.createElement(he,{arethusa:a}))}}var ge=de;class be extends n.Component{constructor(e){super(e),this.arethusa=new I}render(){const e=this.props,t=e.xml,a=e.match,n=e.location;return r.a.createElement("div",null,r.a.createElement(ge,{xml:t,location:n,match:a,arethusa:this.arethusa}))}}var Ee=be;var ke=()=>r.a.createElement("div",{className:"container pt-5"},r.a.createElement("div",{className:"row col-12 pt-5 pb-3"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("h1",null,"Error 404"))),r.a.createElement("div",{className:"row col-12 pb-3"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("h2",null,"Publication not found"))));class ve extends n.Component{constructor(e){super(e);const t=e.config,a={};t.collections.forEach(e=>{(e.publications||[]).forEach(e=>{e.sections.forEach(e=>{const t=e.path,n=e.xml;a[t]={xml:n}})})}),this.argsLookup=a}render(){const e=this.props,t=e.config,a=e.match,n=e.location,s=a.params.publication,o=this.argsLookup[s];if(void 0===o)return r.a.createElement(ke,{config:t});const c=o.xml;return r.a.createElement(Ee,{xml:c,match:a,location:n})}}var fe=ve;var we=({config:e})=>r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/embed/:publication/:chunk",render:t=>r.a.createElement(fe,Object.assign({},t,{config:e}))}),r.a.createElement(i.b,{path:"/",component:()=>r.a.createElement(ke,{config:e})}));var ye=()=>r.a.createElement(c.a,{basename:"/vg-treebank-display"},r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/embed/",component:()=>r.a.createElement(we,{config:l})}),r.a.createElement(i.b,{path:"/",component:()=>r.a.createElement(ce,{config:l})})));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ye,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})},16:function(e,t,a){e.exports={publicationRow:"Publication_publicationRow__3taiJ",treebankWrapper:"Publication_treebankWrapper__2KYz-"}},28:function(e){e.exports=JSON.parse('{"title":"VG Treebank Display","github":"https://github.com/perseids-publications/vg-treebank-display/","collections":[{"title":"Unit 2","publications":[{"path":"unit-2_2","author":"Unit 2.2","work":"Noun trees","editors":"Vanessa Gorman","sections":[{"locus":"view","path":"unit-2_2-nouns-trees","xml":"unit-2_2-nouns-trees.xml","chunks":{"start":1,"end":137}}]},{"path":"unit-2_3","author":"Unit 2.3","work":"Coordinating conjunction trees","editors":"Vanessa Gorman","sections":[{"locus":"view","path":"unit-2_3-coord-trees","xml":"unit-2_3-coord-trees.xml","chunks":{"start":1,"end":46}}]},{"path":"unit-2_4","author":"Unit 2.4","work":"Preposition trees","editors":"Vanessa Gorman","sections":[{"locus":"view","path":"unit-2_4-preposition-trees","xml":"unit-2_4-preposition-trees.xml","chunks":{"start":1,"end":137}}]},{"path":"unit-2_5","author":"Unit 2.5","work":"Adverb trees","editors":"Vanessa Gorman","sections":[{"locus":"view","path":"unit-2_5-sentence-adverb-trees","xml":"unit-2_5-sentence-adverb-trees.xml","chunks":{"start":1,"end":28}}]},{"path":"unit-2_6","author":"Unit 2.6","work":"Adjective trees","editors":"Vanessa Gorman","sections":[{"locus":"view","path":"unit-2_6-adjective-trees","xml":"unit-2_6-adjective-trees.xml","chunks":{"start":1,"end":267}}]}]}]}')},33:function(e,t,a){e.exports={treebankContainer:"EmbeddedTreebank_treebankContainer__2X6pS",links:"EmbeddedTreebank_links__1ndYN"}},44:function(e,t,a){e.exports={jumbotronSmall:"Hero_jumbotronSmall__IN8kP"}},45:function(e,t,a){e.exports={treebankContainer:"Treebank_treebankContainer__sQn_K"}},49:function(e,t,a){e.exports=a(149)},56:function(e,t,a){},8:function(e,t,a){e.exports={dropdownButton:"ControlPanel_dropdownButton__1o6TV",dropdownScroll:"ControlPanel_dropdownScroll__17rgQ",dummyIcon:"ControlPanel_dummyIcon__3Nk3N",link:"ControlPanel_link__OEqVs"}}},[[49,1,2]]]);
//# sourceMappingURL=main.2ad3e3bb.chunk.js.map