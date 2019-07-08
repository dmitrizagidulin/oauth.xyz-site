(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return b}),n.d(t,"_frontmatter",function(){return f});n(56);var a=n(77),r=n.n(a),i=n(7),o=n.n(i),c=n(0),s=n.n(c),l=n(167),m=n(161),u=n(159),p=n(163),d=n(162),h=n(435),y=n(434),g={},b=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=m.a,n}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=r()(e,["components"]);return s.a.createElement(l.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},g,n),components:t},s.a.createElement(u.a,{title:"Keys",keywords:["oauth","authorization","security"]}),s.a.createElement(l.MDXTag,{name:"h1",components:t},"Keys"),s.a.createElement(l.MDXTag,{name:"p",components:t},"The client can present a key to the AS during the transaction process that it can use to bind itself to this and future requests. The AS can restrict access to certain keys, associated with particular clients and controlled through a registration process. The AS can also allow clients to dynamically present and prove a key at runtime, such as a key generated on a client device and bound to only that instance of the client software on that device. Each key type has a specific proofing mechanism associated with it."),s.a.createElement(l.MDXTag,{name:"blockquote",components:t},s.a.createElement(l.MDXTag,{name:"p",components:t,parentName:"blockquote"},"Open question: should we decouple the key type from the presentation mechanism? Having them strongly tied is simpler but this might be too tight of a binding.")),s.a.createElement(l.MDXTag,{name:"h2",components:t},"Detached JSON Web Signature"),s.a.createElement(l.MDXTag,{name:"p",components:t},"The key in this method is presented as a JSON Web Key Set by the client during the transaction request."),s.a.createElement(p.a,{from:"client",to:"as",code:{jwks:{keys:[{kty:"RSA",e:"AQAB",kid:"xyz-1",alg:"RS256",n:"kOB5rR4Jv0GMeLaY6_It_r3ORwdf8ci_JtffXyaSx8xYJCCNaOKNJn_Oz0YhdHbXTeWO5AoyspDWJbN5w_7bdWDxgpD-y6jnD1u9YhBOCWObNPFvpkTM8LC7SdXGRKx2k8Me2r_GssYlyRpqvpBlY5-ejCywKRBfctRcnhTTGNztbbDBUyDSWmFMVCHe5mXT4cL0BwrZC6S-uu-LAx06aKwQOPwYOGOslK8WPm1yGdkaA1uF_FpS6LS63WYPHi_Ap2B7_8Wbw4ttzbMS_doJvuDagW8A1Ip3fXFAHtRAcKw7rdI4_Xln66hJxFekpdfWdiPQddQ6Y1cK2U3obvUg7w"}]}}}),s.a.createElement(l.MDXTag,{name:"p",components:t},"This key presentation method uses a detached JWS to sign the request body, which is a JSON object. The body is taken as a byte stream, with no parsing or interpretation, and signed using the key. The header of the JWS must include the key ID, the algorithm (which must not be ",s.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"none"),"), and the ",s.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"b64")," attribute to indicate that it is detached. The calculated JWS is set as the ",s.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"Detached-JWS")," HTTP header."),s.a.createElement(d.a,{from:"client",to:"as"}),s.a.createElement(h.a,{language:"http",style:y.a},'POST /transaction HTTP/1.1\nHost: server.example.com\nContent-Type: application/json\nDetached-JWS: eyJiNjQiOmZhbHNlLCJhbGciOiJSUzI1NiIsImtpZCI6Inh5ei0xIn0..Y287HMtaY0EegEjoTd_04a4GC6qV48GgVbGKOhHdJnDtD0VuUlVjLfwne8AuUY3U7e89zUWwXLnAYK_BiS84M8EsrFvmv8yDLWzqveeIpcN5_ysveQnYt9Dqi32w6IOtAywkNUDZeJEdc3z5s9Ei8qrYFN2fxcu28YS4e8e_cHTK57003WJu-wFn2TJUmAbHuqvUsyTb-nzYOKxuCKlqQItJF7E-cwSb_xULu-3f77BEU_vGbNYo5ZBa2B7UHO-kWNMSgbW2yeNNLbLC18Kv80GF22Y7SbZt0e2TwnR2Aa2zksuUbntQ5c7a1-gxtnXzuIKa34OekrnyqE1hmVWpeQ\n \n{\n    "client": {\n        "name": "My Client Display Name",\n        "uri": "https://example.net/client"\n    },\n    "resources": [\n        "dolphin-metadata"\n    ],\n    "interact": {\n        "type": "redirect",\n        "callback": "https://client.example.net/return/123455",\n        "state": "LKLTI25DK82FX4T4QFZC"\n    },\n    "key": {\n        "jwks": {\n            "keys": [\n                {\n                    "kty": "RSA",\n                    "e": "AQAB",\n                    "kid": "xyz-1",\n                    "alg": "RS256",\n                    "n": "kOB5rR4Jv0GMeLaY6_It_r3ORwdf8ci_JtffXyaSx8xYJCCNaOKNJn_Oz0YhdHbXTeWO5AoyspDWJbN5w_7bdWDxgpD-y6jnD1u9YhBOCWObNPFvpkTM8LC7SdXGRKx2k8Me2r_GssYlyRpqvpBlY5-ejCywKRBfctRcnhTTGNztbbDBUyDSWmFMVCHe5mXT4cL0BwrZC6S-uu-LAx06aKwQOPwYOGOslK8WPm1yGdkaA1uF_FpS6LS63WYPHi_Ap2B7_8Wbw4ttzbMS_doJvuDagW8A1Ip3fXFAHtRAcKw7rdI4_Xln66hJxFekpdfWdiPQddQ6Y1cK2U3obvUg7w"\n                }\n            ]\n        }\n    }\n}\n'),s.a.createElement(l.MDXTag,{name:"blockquote",components:t},s.a.createElement(l.MDXTag,{name:"p",components:t,parentName:"blockquote"},"This is susceptible to any number of issues with data transformation, and it doesn't protect the request URL or header, only the body. However, the body is not transformed by the signature, which is a benefit for simplicity."),s.a.createElement(l.MDXTag,{name:"p",components:t,parentName:"blockquote"},"We could also do cavage-signatures or a number of other methods")),s.a.createElement(l.MDXTag,{name:"blockquote",components:t},s.a.createElement(l.MDXTag,{name:"p",components:t,parentName:"blockquote"},'Should we also have an "embedded JWS" method, for instance simply turning the request body into a JWS wrapped by the signature in compact format?')),s.a.createElement(l.MDXTag,{name:"h2",components:t},"Decentralized Identifier"),s.a.createElement(l.MDXTag,{name:"p",components:t},"The ",s.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"did")," key method uses a ",s.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"did")," URI to indicate the key. The client signs the HTTP request using a ZKP algorithm."),s.a.createElement(l.MDXTag,{name:"blockquote",components:t},s.a.createElement(l.MDXTag,{name:"p",components:t,parentName:"blockquote"},"I'm interested to see how we'd do this in a practical sense, but I haven't seen a lot of work on signing HTTP with ZKP algorithms, only highly specialized queries. The keys retrieved from a ",s.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"did")," could be in any number of formats, and could be presented and proofed in several different ways. ")),s.a.createElement(l.MDXTag,{name:"h2",components:t},"Mutual TLS"),s.a.createElement(l.MDXTag,{name:"p",components:t},"The ",s.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"mtls")," key method uses the client certificate presented at the TLS layer to authorize the transaction. The client indicates its certificate as either an encoded certificate string, or as a certificate thumbprint as in OAuth 2's certificate-bound access token methods."),s.a.createElement(d.a,{from:"client",to:"as"}),s.a.createElement(h.a,{language:"http",style:y.a},'POST /transaction HTTP/1.1\nHost: server.example.com\nContent-Type: application/json\n \n{\n    "client": {\n        "name": "My Client Display Name",\n        "uri": "https://example.net/client"\n    },\n    "resources": [\n        "dolphin-metadata"\n    ],\n    "interact": {\n        "type": "redirect",\n        "callback": "https://client.example.net/return/123455",\n        "state": "LKLTI25DK82FX4T4QFZC"\n    },\n    "key": {\n        "cert": "MIIEHDCCAwSgAwIBAgIBATANBgkqhkiG9w0BAQsFADCBmjE3MDUGA1UEAwwuQmVzcG9rZSBFbmdpbmVlcmluZyBSb290IENlcnRpZmljYXRlIEF1dGhvcml0eTELMAkGA1UECAwCTUExCzAJBgNVBAYTAlVTMRkwFwYJKoZIhvcNAQkBFgpjYUBic3BrLmlvMRwwGgYDVQQKDBNCZXNwb2tlIEVuZ2luZWVyaW5nMQwwCgYDVQQLDANNVEkwHhcNMTkwNDEwMjE0MDI5WhcNMjQwNDA4MjE0MDI5WjB8MRIwEAYDVQQDDAlsb2NhbGhvc3QxCzAJBgNVBAgMAk1BMQswCQYDVQQGEwJVUzEgMB4GCSqGSIb3DQEJARYRdGxzY2xpZW50QGJzcGsuaW8xHDAaBgNVBAoME0Jlc3Bva2UgRW5naW5lZXJpbmcxDDAKBgNVBAsMA01USTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMmaXQHbs/wc1RpsQ6Orzf6rN+q2ijaZbQxD8oi+XaaN0P/gnE13JqQduvdq77OmJ4bQLokqsd0BexnI07Njsl8nkDDYpe8rNve5TjyUDCfbwgS7U1CluYenXmNQbaYNDOmCdHwwUjV4kKREg6DGAx22Oq7+VHPTeeFgyw4kQgWRSfDENWY3KUXJlb/vKR6lQ+aOJytkvj8kVZQtWupPbvwoJe0na/ISNAOhL74w20DWWoDKoNltXsEtflNljVoi5nqsmZQcjfjt6LO0T7O1OX3Cwu2xWx8KZ3n/2ocuRqKEJHqUGfeDtuQNt6Jz79v/OTr8puLWaD+uyk6NbtGjoQsCAwEAAaOBiTCBhjAJBgNVHRMEAjAAMAsGA1UdDwQEAwIF4DBsBgNVHREEZTBjgglsb2NhbGhvc3SCD3Rsc2NsaWVudC5sb2NhbIcEwKgBBIERdGxzY2xpZW50QGJzcGsuaW+GF2h0dHA6Ly90bHNjbGllbnQubG9jYWwvhhNzc2g6dGxzY2xpZW50LmxvY2FsMA0GCSqGSIb3DQEBCwUAA4IBAQCKKv8WlLrT4Z5NazaUrYtlTF+2v0tvZBQ7qzJQjlOqAcvxry/d2zyhiRCRS/v318YCJBEv4Iq2W3I3JMMyAYEe2573HzT7rH3xQP12yZyRQnetdiVM1Z1KaXwfrPDLs72hUeELtxIcfZ0M085jLboXhufHI6kqm3NCyCCTihe2ck5RmCc5l2KBO/vAHF0ihhFOOOby1v6qbPHQcxAU6rEb907/p6BW/LV1NCgYB1QtFSfGxowqb9FRIMD2kvMSmO0EMxgwZ6k6spa+jk0IsI3klwLW9b+Tfn/daUbIDctxeJneq2anQyU2znBgQl6KILDSF4eaOqlBut/KNZHHazJh"\n    }\n}\n'))},t}(s.a.Component),f={}},155:function(e,t,n){"use strict";n.d(t,"b",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(35),s=n.n(c);n.d(t,"a",function(){return s.a});n(156);var l=r.a.createContext({}),m=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},156:function(e,t,n){var a;e.exports=(a=n(158))&&a.default||a},157:function(e){e.exports={data:{site:{siteMetadata:{title:"OAuth.xyz"}}}}},158:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n.n(a),i=n(0),o=n.n(i),c=n(4),s=n.n(c),l=n(57),m=n(2),u=function(e){var t=e.location,n=m.default.getResourcesForPathnameSync(t.pathname);return n?o.a.createElement(l.a,r()({location:t,pageResources:n},n.json)):null};u.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=u},159:function(e,t,n){"use strict";var a=n(160),r=n(0),i=n.n(r),o=n(4),c=n.n(o),s=n(172),l=n.n(s),m=n(155);function u(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(m.b,{query:p,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u;var p="1025518380"},160:function(e){e.exports={data:{site:{siteMetadata:{title:"OAuth.xyz",description:"A new authorization protocol based on concepts from OAuth2 and its extensions.",author:"@jricher"}}}}},161:function(e,t,n){"use strict";var a=n(157),r=n(0),i=n.n(r),o=n(4),c=n.n(o),s=n(155),l=(n(168),n(169),[{name:"Request",link:"/transactionrequest/"},{name:"Response",link:"/transactionresponse/"},{name:"Interaction",link:"/interaction/"},{name:"Keys",link:"/keys/"},{name:"Tokens",link:"/tokens/"},{name:"Examples",link:"/examples/"},{name:"About",link:"/about/"}]),m=function(e){var t=e.siteTitle;e.currentPage;return i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"wrapper"},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.a,{to:"/",style:{color:"white",textDecoration:"none"}},t)),i.a.createElement("nav",null,l.map(function(e){return i.a.createElement(s.a,{to:e.link},e.name)}))))};m.propTypes={siteTitle:c.a.string},m.defaultProps={siteTitle:""};var u=m,p=(n(170),n(171),function(e){var t=e.children;return i.a.createElement(s.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:a})});p.propTypes={children:c.a.node.isRequired};t.a=p},162:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(175),o=n.n(i),c=n(176),s=n.n(c),l=function(){return r.a.createElement(o.a,{pill:!0,variant:"info"},"Client")},m=function(){return r.a.createElement(o.a,{pill:!0,variant:"secondary"},"Browser")},u=function(){return r.a.createElement(o.a,{pill:!0,variant:"warning"},"AS")},p=function(){return r.a.createElement(o.a,{pull:!0,variant:"dark"},"RS")},d=function(e){return"client"==e?r.a.createElement(l,null):"browser"==e?r.a.createElement(m,null):"as"==e?r.a.createElement(u,null):"rs"==e?r.a.createElement(p,null):r.a.createElement(o.a,{pill:!0,variant:"danger"},"?")};t.a=function(e){var t=e.from,n=e.to,a=[d(t),"➡",d(n)];return r.a.createElement(s.a,{variant:"primary"},a)}},163:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(435),o=n(434),c=n(162);t.a=function(e){var t=e.code,n=e.codeString,a=e.from,s=e.to;n||(n=JSON.stringify(t,null,4));var l=[];return(a||s)&&l.push(r.a.createElement(c.a,{from:a,to:s})),l.push(r.a.createElement(i.a,{language:"javascript",style:o.a},n)),l}}}]);
//# sourceMappingURL=component---src-pages-keys-mdx-f2e8e051d9118f5b7c8c.js.map