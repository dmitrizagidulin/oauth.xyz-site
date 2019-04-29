(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{154:function(e,t,n){"use strict";n.r(t);n(56);var a=n(77),r=n.n(a),o=n(7),i=n.n(o),s=n(0),c=n.n(s),l=n(165),u=n(161),m=n(155),d=n(11),p=n.n(d),h=(n(79),n(58),n(36),n(175),n(162)),f=n(182),g=n(185),y=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).interactionValues={label:"Next Step",redirect:{interaction_url:"https://server.example.com/interact/4CF492MLVMSW9MKMXKHQ"},device:{interaction_url:"https://server.example.com/interact/device",user_code:"A1BC-3DFF"},wait:{wait:30},access_token:{access_token:{value:"OS9M2PMHKUR64TB8N6BW7OZB8CDFONP219RP1LT0",type:"bearer"}}},t.codeValues={handle:{label:"Transaction Handle",on:{value:"80UPRY5NM33OMUKMKSKU",type:"bearer"}},client_handle:{label:"Client Handle",on:{value:"VBUEOIQA82PBY2ZDJW7Q",type:"bearer"}},interact_handle:{label:"Interact Handle",on:{value:"JMMLJ6393FI7ST9B1SRS",type:"bearer"}},user_handle:{label:"User Handle",on:{value:"XUT2MFM1XBIKJKSDU8QM",type:"bearer"}},resources_handle:{label:"Resources Handle",on:{value:"KLKP36N7GPOKRF3KGH5N",type:"bearer"}},key_handle:{label:"Key Handle",on:{value:"7C7C4AZ9KHRS6X63AJAO",type:"bearer"}}},t.state={selected:{handle:"on",client_handle:"on",resources_handle:"off",interact_handle:"off",key_handle:"on",user_handle:"off",interaction:"redirect"}},t.change=function(e){return function(n){var a=t.state.selected;a[e]=n,"handle"===e&&"off"===n&&(a.interaction="access_token"),"interaction"===e&&"access_token"!==n&&(a.handle="on"),t.setState({selected:a})}},t.render=function(){var e=Object.keys(t.codeValues).reduce(function(e,n){return e[n]=t.codeValues[n][t.state.selected[n]],e},{}),n=t.interactionValues[t.state.selected.interaction],a=p()({},n,e),r=[c.a.createElement(f.a,{onChange:t.change("interaction"),label:t.interactionValues.label,selected:t.state.selected.interaction,options:{redirect:"Redirect",device:"Device",wait:"Wait",access_token:"Token"}})].concat(Object.keys(t.codeValues).map(function(e){return c.a.createElement(f.a,{onChange:t.change(e),label:t.codeValues[e].label,selected:t.state.selected[e]})}));return c.a.createElement("div",null,c.a.createElement(g.a,null,r),c.a.createElement(h.a,{code:a}))},t}return i()(t,e),t}(c.a.Component),E=n(159);n.d(t,"default",function(){return T}),n.d(t,"_frontmatter",function(){return b});var v={},T=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=u.a,n}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=r()(e,["components"]);return c.a.createElement(l.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},v,n),components:t},c.a.createElement(E.a,{title:"Transaction Response",keywords:["oauth","authorization","security"]}),c.a.createElement(l.MDXTag,{name:"h1",components:t},"Transaction Response"),c.a.createElement(l.MDXTag,{name:"p",components:t},"The response from the transaction endpoint tells the client what it needs to do next, including if it needs to ",c.a.createElement(m.a,{to:"/interaction"},"interact with the user")," and any ",c.a.createElement(m.a,{to:"/tokens"},"tokens that have been issued"),". "),c.a.createElement(l.MDXTag,{name:"p",components:t},"If the transaction can be continued by the client, the AS includes a transaction handle in the response as well. This handle is used by the client for any subsequent references to this transaction. "),c.a.createElement(l.MDXTag,{name:"p",components:t},"The response can also include handles that the client can use in future transactions in lieu of any of the request sections."),c.a.createElement(y,null),c.a.createElement(l.MDXTag,{name:"p",components:t},"Each of these sections is detailed below."),c.a.createElement(l.MDXTag,{name:"h2",components:t},"Next action"),c.a.createElement(l.MDXTag,{name:"p",components:t},"Foremost, the AS needs to tell the client what to do next. This may be getting the user to ",c.a.createElement(m.a,{to:"/interaction"},"interact with the AS directly"),", waiting until polling again, or heading to the resource server to ",c.a.createElement(m.a,{to:"/tokens"},"use the token"),". "),c.a.createElement(l.MDXTag,{name:"p",components:t},"Both the interaction and poll-wait style responses require the transaction handle, below. If a transaction handle is included with the access token response, the client can use this handle to get a new access token in the event the first one expires or is revoked, so long as the trnasaction handle is still valid. "),c.a.createElement(l.MDXTag,{name:"h2",components:t},"Transaction Handle"),c.a.createElement(l.MDXTag,{name:"p",components:t},"This ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"handle")," is used by the client to continue the transaction from its previous state. The value returned by the AS is unique, random, and not reused by the AS. That is to say, an ongoing transaction will be represented by a single handle at a given time, and that handle will change over time. "),c.a.createElement(l.MDXTag,{name:"h2",components:t},"Client Handle"),c.a.createElement(l.MDXTag,{name:"p",components:t},"If a ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"client_handle")," is returned by the AS, the client can use this handle in lieu of the information sent in the ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"client")," block in the request for future transactions. "),c.a.createElement(l.MDXTag,{name:"h2",components:t},"Interact Handle"),c.a.createElement(l.MDXTag,{name:"p",components:t},"If an ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"interact_handle")," is returned by the AS, the client can use this handle in lieu of the ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"interact")," portion of the transaction request in future transactions. However, for a redirect based interaction, as this section includes the ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"state")," value which is supposed to be unguessable and unique per transaction, this response doesn't make sense in such cases."),c.a.createElement(l.MDXTag,{name:"h2",components:t},"User Handle"),c.a.createElement(l.MDXTag,{name:"p",components:t},"If a ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"user_handle")," is returned by the AS, the client can use this handle in lieu of the ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"user")," portion of the transaction request to represent the same user in future requests, akin to UMA 2's PCT."),c.a.createElement(l.MDXTag,{name:"h2",components:t},"Resource Handle"),c.a.createElement(l.MDXTag,{name:"p",components:t},"If a ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"resource_handle")," is returned by the AS, the client can use this handle in lieu of the ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"resource")," portions of the transaction request to request the same set of resources in a future transaction. "),c.a.createElement(l.MDXTag,{name:"h2",components:t},"Key Handle"),c.a.createElement(l.MDXTag,{name:"p",components:t},"If a ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"key_handle")," is returned by the AS, the client can use this handle in lieu of the ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"key")," section of the transaction request to reference the same key presented and proved by the client in this transaction. When presenting such key handles in a future request, the client must still ",c.a.createElement(m.a,{to:"/keys"},"bind the request to the referenced key"),"."))},t}(c.a.Component),b={}},155:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(35),c=n.n(s);n.d(t,"a",function(){return c.a});n(156);var l=r.a.createContext({}),u=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},156:function(e,t,n){var a;e.exports=(a=n(158))&&a.default||a},157:function(e){e.exports={data:{site:{siteMetadata:{title:"OAuth.xyz"}}}}},158:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n.n(a),o=n(0),i=n.n(o),s=n(4),c=n.n(s),l=n(57),u=n(2),m=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return n?i.a.createElement(l.a,r()({location:t,pageResources:n},n.json)):null};m.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=m},159:function(e,t,n){"use strict";var a=n(160),r=n(0),o=n.n(r),i=n(4),s=n.n(i),c=n(170),l=n.n(c),u=n(155);function m(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,s=e.title;return o.a.createElement(u.b,{query:d,render:function(e){var a=t||e.site.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:s},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:a}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:a})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=m;var d="1025518380"},160:function(e){e.exports={data:{site:{siteMetadata:{title:"OAuth.xyz",description:"A new authorization protocol based on concepts from OAuth2 and its extensions.",author:"@jricher"}}}}},161:function(e,t,n){"use strict";var a=n(157),r=n(0),o=n.n(r),i=n(4),s=n.n(i),c=n(155),l=(n(166),n(167),[{name:"Request",link:"/transactionrequest/"},{name:"Response",link:"/transactionresponse/"},{name:"Interaction",link:"/interaction/"},{name:"Keys",link:"/keys/"},{name:"Tokens",link:"/tokens/"},{name:"Examples",link:"/examples/"},{name:"About",link:"/about/"}]),u=function(e){var t=e.siteTitle;e.currentPage;return o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"wrapper"},o.a.createElement("h1",{style:{margin:0}},o.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},t)),o.a.createElement("nav",null,l.map(function(e){return o.a.createElement(c.a,{to:e.link},e.name)}))))};u.propTypes={siteTitle:s.a.string},u.defaultProps={siteTitle:""};var m=u,d=(n(168),n(169),function(e){var t=e.children;return o.a.createElement(c.b,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:a})});d.propTypes={children:s.a.node.isRequired};t.a=d},162:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(412),i=n(411);t.a=function(e){var t=e.code,n=e.codeString;return n||(n=JSON.stringify(t,null,4)),r.a.createElement(o.a,{language:"javascript",style:i.a},n)}},182:function(e,t,n){"use strict";n(79),n(58),n(36),n(175);var a=n(0),r=n.n(a),o=n(183),i=n.n(o),s=n(202),c=n.n(s);t.a=function(e){var t=e.onChange,n=e.label,a=e.selected,o=e.all,s=e.options;s||(s={on:"On",off:"Off"});var l=[r.a.createElement(i.a,{variant:"link",disabled:!0,value:"label"},n,": ")].concat(Object.keys(s).map(function(e){return r.a.createElement(i.a,{variant:o?"warning":"primary",value:e},s[e])}));return r.a.createElement(c.a,{name:n,value:o?"":a,onChange:t,size:"sm",className:"selector"},l)}},185:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children.map(function(e,t){return r.a.createElement("li",{key:t},e)});return r.a.createElement("ul",{className:"selectorList"},t)}}}]);
//# sourceMappingURL=component---src-pages-transactionresponse-mdx-4893c5fe2c1055c623f2.js.map