(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return u}),n.d(t,"_frontmatter",function(){return f});n(56);var a=n(77),o=n.n(a),i=n(7),r=n.n(i),s=n(0),c=n.n(s),l=n(165),m=n(161),h=n(155),d=(n(162),n(159)),p={},u=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=m.a,n}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=o()(e,["components"]);return c.a.createElement(l.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,n),components:t},c.a.createElement(d.a,{title:"Interaction",keywords:["oauth","authorization","security"]}),c.a.createElement(l.MDXTag,{name:"h1",components:t},"Examples"),c.a.createElement(l.MDXTag,{name:"p",components:t},"The XYZ protocol is an attempt to pull together functionality from many different extensions and deployments of OAuth 2. Here, we'll try to map specific concepts from these different protocols into the XYZ system. "),c.a.createElement(l.MDXTag,{name:"h2",components:t},"Auth Code"),c.a.createElement(l.MDXTag,{name:"p",components:t},"The ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"redirect")," ",c.a.createElement(h.a,{to:"/interaction"},"interaction mechanism")," allows a client to send a user to interact using HTTP redirects, and for the most part this should be indistinguishable from the authorization code flow in OAuth 2. The key difference is what gets sent in the front channel. In OAuth 2, the client has to send a lot of sensitive information through the browser, including the scopes it's asking for and its own identity. In XYZ, the client simply goes to an opaque URL that it is given in direct response to its transaction request. The interaction handle returned is equivalent to the authorizaiton code itself, and this handle is useful only in the context of a current transaction. "),c.a.createElement(l.MDXTag,{name:"p",components:t},"This type of interaction can be used for web servers, SPA's, and native applications without modification. In fact, most of the differences between these types of clients are in the ways that they can manage keys and secrets. Since the binding of keys and the mode of interaction are separated in XYZ, they can be combined in ways that make the most sense for the client at hand."),c.a.createElement(l.MDXTag,{name:"h2",components:t},"Device Flow"),c.a.createElement(l.MDXTag,{name:"p",components:t},"Similarly to the authorization code grant, the device grant simply makes use of the ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"device")," ",c.a.createElement(h.a,{to:"/interaction"},"interaction mechanism"),". The only real difference from the authorization code grant is the means of interacting with the user. "),c.a.createElement(l.MDXTag,{name:"h2",components:t},"Client Credentials"),c.a.createElement(l.MDXTag,{name:"p",components:t},"The client credentials grant in XYZ is simply one that does not require user interaction, nor does it require any information about the user. In other words, neither a ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"user")," nor ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"interaction")," section are included in the ",c.a.createElement(h.a,{to:"/transactionrequest"},"transaction request"),". "),c.a.createElement(l.MDXTag,{name:"h2",components:t},"Resource Owner and Assertion"),c.a.createElement(l.MDXTag,{name:"p",components:t},"The resource owner grant could be replicated in XYZ by presenting the user's credentials as part of the ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"user")," section of the transaction request. However, even more powerfully, the client can present a wide variety of verifiable assertions in this section for the AS to validate and interpret as it sees fit. Chained authorization and authentication are possible in this way, as are forms of linked delegation for cases where the client already knows who the user is and has the authority to do something on their behalf, but needs to translate the authentication to something that can be used further downstream. "),c.a.createElement(l.MDXTag,{name:"h2",components:t},"Dynamic Registration"),c.a.createElement(l.MDXTag,{name:"p",components:t},"OAuth 2 makes the assumption that all clients have been registered with the authorization server ahead of time, and that this registration includes a wide swath of information about the client software, including its capabilities, its keys, its identity, and other items. This assumption lead to the development of the dynamic registration protocol to allow client instances to be managed at runtime, but at the cost of an additional round trip."),c.a.createElement(l.MDXTag,{name:"p",components:t},"In XYZ, the client has the choice of presenting all of this information during the transaction request. This dynamic request can be bound to keys during the transaction itself, and these keys can be created by the client instance (as would be likely in a native application) or supplied during the transaction response (as would potentially be the case with an SPA). These keys identify the instance, and the AS can return a client handle that the client can use to identify itself in future transactions. "),c.a.createElement(l.MDXTag,{name:"p",components:t},"Static registration is of course still possible, with the client or developer being issued a client handle out of band and the client presenting that handle during its transaction request. Similarly, this handle can be pre-bound to keys and interaction methods, effectively locking down a client's runtime behavior when such a lock is desired. "),c.a.createElement(l.MDXTag,{name:"h2",components:t},"UMA"),c.a.createElement(l.MDXTag,{name:"p",components:t},"UMA's pattern of giving the client a ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"ticket")," to present claims for, either proactively or interactively, closely matches XYZ's transactional model. UMA's more complex resource description can be incorporated into XYZ's ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"resources")," section. If the client wants to represent the same user over time, the AS can issue a user handle much like UMA's PCT. "),c.a.createElement(l.MDXTag,{name:"p",components:t},"The main component that's missing would be to allow an RS to start a transaction and hand that transaction handle to the client, and this could potentially be built up using the resource handle. "),c.a.createElement(l.MDXTag,{name:"h2",components:t},"Identity and OpenID Connect"),c.a.createElement(l.MDXTag,{name:"p",components:t},"The main addition that OpenID Connect brings is the ability to pass identity information to the client. An XYZ-based OpenID Connect style protocol could be as simple as returning an identity assertion alongside the access token, much in the same way the ID Token is returned in OpenID Connect today. Similarly, the UserInfo Endpoint remains a standardized resource server that behaves the same as it does today."),c.a.createElement(l.MDXTag,{name:"p",components:t},"Many of the additional mechanisms in OpenID Connect can be incorporated into the transaction request instead of being passed through the browser, including any ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"prompt"),", ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"login_hint"),", or vectors of trust parameters. Additionally, the ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"claims")," mechanism can be readily incorporated into the ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"resources")," portion of the request. "),c.a.createElement(l.MDXTag,{name:"p",components:t},"Other mechanisms in OpenID Connect become unnecessary additions, including the request object and hybrid signed response modes. Many of these components were intend to overcome shortcomings in the OAuth 2 protocol that XYZ does not share. "),c.a.createElement(l.MDXTag,{name:"h2",components:t},"CIBA"),c.a.createElement(l.MDXTag,{name:"p",components:t},"CIBA maps to XYZ's ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"device")," style interaction method, since the user is going to interact with the AS using a secondary application. User information and hints about the intended account can be pushed in the ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"user")," section of the transaction request. "),c.a.createElement(l.MDXTag,{name:"h2",components:t},"FAPI Request Object Endpoint and JARM"),c.a.createElement(l.MDXTag,{name:"p",components:t},"OpenID Connect's Request Object was born of a need to protect a client's request through the browser, and the hybrid flow (later generalized into JARM) provided a means to protect the authorization server's response through the browser. Both of these methods additionally allow a more rich data request through the use of a JSON object instead of plain request parameters. XYZ's transaction model protects this same information by not sending it through the browser redirects in the first place. "),c.a.createElement(l.MDXTag,{name:"p",components:t},"FAPI's request object endpoint allows a client to pre-register the request object and pass a reference instead. This type of intent registration is much the same as the transactional model and transaction handle. "),c.a.createElement(l.MDXTag,{name:"h2",components:t},"PKCE"),c.a.createElement(l.MDXTag,{name:"p",components:t},"PKCE effectively creates an ephemeral key that the client can prove possession of at a later part of the process. With XYZ, the same results are an automatic side effect of the transactional process. The transaction handle is something known only to the client and is never passed through the front channel, and any interaction handle returned from the interaction endpoint makes sense only in the context of a specific transaction. Furthermore, the client's own keys can be bound to the transaction, making it even more difficult for an attacker to make use of a stolen interaction handle. "),c.a.createElement(l.MDXTag,{name:"h2",components:t},"PoP"),c.a.createElement(l.MDXTag,{name:"p",components:t},"The main goal of of OAuth 2's Proof of Possession extension work is to bind a set of runtime keys that the client can prove possession of to the token issued to the client. XYZ allows a client to bind keys during its transacton request, and these keys can be further bound to the access token. "))},t}(c.a.Component),f={}},155:function(e,t,n){"use strict";n.d(t,"b",function(){return m});var a=n(0),o=n.n(a),i=n(4),r=n.n(i),s=n(35),c=n.n(s);n.d(t,"a",function(){return c.a});n(156);var l=o.a.createContext({}),m=function(e){return o.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},156:function(e,t,n){var a;e.exports=(a=n(158))&&a.default||a},157:function(e){e.exports={data:{site:{siteMetadata:{title:"OAuth.xyz"}}}}},158:function(e,t,n){"use strict";n.r(t);var a=n(11),o=n.n(a),i=n(0),r=n.n(i),s=n(4),c=n.n(s),l=n(57),m=n(2),h=function(e){var t=e.location,n=m.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(l.a,o()({location:t,pageResources:n},n.json)):null};h.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=h},159:function(e,t,n){"use strict";var a=n(160),o=n(0),i=n.n(o),r=n(4),s=n.n(r),c=n(170),l=n.n(c),m=n(155);function h(e){var t=e.description,n=e.lang,o=e.meta,r=e.keywords,s=e.title;return i.a.createElement(m.b,{query:d,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:s},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:a}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(o)})},data:a})}h.defaultProps={lang:"en",meta:[],keywords:[]},h.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=h;var d="1025518380"},160:function(e){e.exports={data:{site:{siteMetadata:{title:"OAuth.xyz",description:"A new authorization protocol based on concepts from OAuth2 and its extensions.",author:"@jricher"}}}}},161:function(e,t,n){"use strict";var a=n(157),o=n(0),i=n.n(o),r=n(4),s=n.n(r),c=n(155),l=(n(166),n(167),[{name:"Request",link:"/transactionrequest/"},{name:"Response",link:"/transactionresponse/"},{name:"Interaction",link:"/interaction/"},{name:"Keys",link:"/keys/"},{name:"Tokens",link:"/tokens/"},{name:"Examples",link:"/examples/"},{name:"About",link:"/about/"}]),m=function(e){var t=e.siteTitle;e.currentPage;return i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"wrapper"},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},t)),i.a.createElement("nav",null,l.map(function(e){return i.a.createElement(c.a,{to:e.link},e.name)}))))};m.propTypes={siteTitle:s.a.string},m.defaultProps={siteTitle:""};var h=m,d=(n(168),n(169),function(e){var t=e.children;return i.a.createElement(c.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(h,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:a})});d.propTypes={children:s.a.node.isRequired};t.a=d},162:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(412),r=n(411);t.a=function(e){var t=e.code,n=e.codeString;return n||(n=JSON.stringify(t,null,4)),o.a.createElement(i.a,{language:"javascript",style:r.a},n)}}}]);
//# sourceMappingURL=component---src-pages-examples-mdx-ad8cec214d705382f9c3.js.map