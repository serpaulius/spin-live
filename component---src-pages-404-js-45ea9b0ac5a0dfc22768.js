(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{137:function(M,t,e){"use strict";e.r(t);e(73);var n=e(0),N=e.n(n),a=e(145),T=e(22),i=e(149),g=e(164),u=e.n(g);t.default=function(){return N.a.createElement(N.a.Fragment,null,N.a.createElement(a.a,{title:T.globalHistory.location.pathname.substring(1,10)+"..."}),N.a.createElement(i.a,{image:u.a,text:(M=T.globalHistory.location.pathname.substring(1),t=T.globalHistory.location.search,decodeURI(M+t))}));var M,t}},143:function(M,t,e){"use strict";e.r(t),e.d(t,"graphql",function(){return z}),e.d(t,"StaticQueryContext",function(){return r}),e.d(t,"StaticQuery",function(){return c});var n=e(0),N=e.n(n),a=e(4),T=e.n(a),i=e(142),g=e.n(i);e.d(t,"Link",function(){return g.a}),e.d(t,"withPrefix",function(){return i.withPrefix}),e.d(t,"navigate",function(){return i.navigate}),e.d(t,"push",function(){return i.push}),e.d(t,"replace",function(){return i.replace}),e.d(t,"navigateTo",function(){return i.navigateTo});var u=e(144),D=e.n(u);e.d(t,"PageRenderer",function(){return D.a});var j=e(33);e.d(t,"parsePath",function(){return j.a});var r=N.a.createContext({}),c=function(M){return N.a.createElement(r.Consumer,null,function(t){return M.data||t[M.query]&&t[M.query].data?(M.render||M.children)(M.data?M.data.data:t[M.query].data):N.a.createElement("div",null,"Loading (StaticQuery)")})};function z(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}c.propTypes={data:T.a.object,query:T.a.string.isRequired,render:T.a.func,children:T.a.func}},144:function(M,t,e){var n;M.exports=(n=e(147))&&n.default||n},145:function(M,t,e){"use strict";var n=e(146),N=e(0),a=e.n(N),T=e(4),i=e.n(T),g=e(148),u=e.n(g),D=e(143);function j(M){var t=M.description,e=M.lang,N=M.meta,T=M.keywords,i=M.title;return a.a.createElement(D.StaticQuery,{query:r,render:function(M){var n=t||M.site.siteMetadata.description;return a.a.createElement(u.a,{htmlAttributes:{lang:e},title:i,titleTemplate:"%s | "+M.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:i},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:M.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:n}].concat(T.length>0?{name:"keywords",content:T.join(", ")}:[]).concat(N)})},data:n})}j.defaultProps={lang:"en",meta:[],keywords:[]},j.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=j;var r="1025518380"},146:function(M){M.exports={data:{site:{siteMetadata:{title:"Nesisuksi - Negyvensi",description:"The one who spins stays alive",author:"@serpaulius"}}}}},147:function(M,t,e){"use strict";e.r(t);e(32);var n=e(0),N=e.n(n),a=e(4),T=e.n(a),i=e(51),g=e(2),u=function(M){var t=M.location,e=g.default.getResourcesForPathnameSync(t.pathname);return N.a.createElement(i.a,Object.assign({location:t,pageResources:e},e.json))};u.propTypes={location:T.a.shape({pathname:T.a.string.isRequired}).isRequired},t.default=u},149:function(M,t,e){"use strict";e(32);var n=e(7),N=e.n(n),a=e(0),T=e.n(a),i=e(150),g=e.n(i),u=function(M){function t(t){var e;return(e=M.call(this,t)||this).state={showImage:!0,pause:!1,bigger:!1},e}N()(t,M);var e=t.prototype;return e.onClick=function(M){M.preventDefault(),console.log("Clicked"),this.setState(Object.assign({},this.state,{showImage:!this.state.showImage}))},e.onPointer=function(M){this.setState(Object.assign({},this.state,{pause:M}))},e.render=function(){var M=this;return T.a.createElement("div",{className:g.a.container+" "+g.a.center,onClick:function(t){return M.onClick(t)},onPointerDown:function(t){return M.onPointer(!0)},onPointerUp:function(t){return M.onPointer(!1)}},T.a.createElement("div",{className:g.a.center+" "+g.a.spinning+" "+(this.state.pause?g.a.pause:"")},this.state.showImage?T.a.createElement("img",{draggable:"false",onDragStart:function(M){M.preventDefault()},src:this.props.image,className:""+g.a.image,alt:""}):T.a.createElement("span",{className:g.a.text+" "+(this.props.bigger?g.a.bigger:"")},this.props.text)))},t}(T.a.Component);t.a=u},150:function(M,t,e){M.exports={container:"spinning-image-module--container--c4wsR",center:"spinning-image-module--center--3WAjM",spinning:"spinning-image-module--spinning--16IXI",rotation:"spinning-image-module--rotation--3oVcQ",pause:"spinning-image-module--pause--F_vxt",image:"spinning-image-module--image--sjrgL",text:"spinning-image-module--text--3jMA8",bigger:"spinning-image-module--bigger--3qlxz"}},164:function(M,t){M.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDcyIDQ3MiIgdHJhbnNmb3JtPSJzY2FsZSgxLjUsMS41KSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPCEtLSA8c3ZnIGhlaWdodD0iNDcycHQiIHZpZXdCb3g9IjAgLTQwIDQ3MiA0NzIiIHdpZHRoPSI0NzJwdCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gLS0+CiAgICA8IS0tIDxwYXRoIGQ9Im00NzIgOTIuMTk5MjE5di04NC42NTYyNWMwLTQuNDE3OTY5LTMuNTg1OTM4LTcuNTQyOTY5LTgtNy41NDI5NjloLTQ1NmMtNC40MTc5NjkgMC04IDMuMTI1LTggNy41NDI5Njl2Mzc2LjkxNDA2MmMwIDQuNDE3OTY5IDMuNTgyMDMxIDcuNTQyOTY5IDggNy41NDI5NjloNDU2YzQuNDE3OTY5IDAgOC0zLjEyNSA4LTcuNTQyOTY5di0yOTIuMTA1NDY5YzAtLjAyNzM0MyAwLS4wNTA3ODEgMC0uMDc4MTI0IDAtLjAyNzM0NCAwLS4wNTA3ODIgMC0uMDc0MjE5em0tMTYtNzYuMTk5MjE5djY4aC00NDB2LTY4em0tNDQwIDM2MHYtMjc2aDQ0MHYyNzZ6bTAgMCIvPgogICAgPHBhdGggZD0ibTEwMy4zMDg1OTQgNzUuMTQ0NTMxYzEzLjQwMjM0NCAwIDI0LjMwODU5NC0xMS4yNjE3MTkgMjQuMzA4NTk0LTI1LjEwNTQ2OXMtMTAuOTAyMzQ0LTI1LjEwMTU2Mi0yNC4zMDg1OTQtMjUuMTAxNTYyLTI0LjMwODU5NCAxMS4yNjE3MTktMjQuMzA4NTk0IDI1LjEwMTU2MmMwIDEzLjgzNTkzOCAxMC45MDYyNSAyNS4xMDU0NjkgMjQuMzA4NTk0IDI1LjEwNTQ2OXptMC0zNC4yMTA5MzdjNC41ODIwMzEgMCA4LjMwODU5NCA0LjA4MjAzMSA4LjMwODU5NCA5LjA5NzY1NiAwIDUuMDE5NTMxLTMuNzI2NTYzIDkuMTA5Mzc1LTguMzA4NTk0IDkuMTA5Mzc1LTQuNTc4MTI1IDAtOC4zMDg1OTQtNC4wODIwMzEtOC4zMDg1OTQtOS4xMDE1NjMgMC01LjAyMzQzNyAzLjczMDQ2OS05LjEwNTQ2OCA4LjMwODU5NC05LjEwNTQ2OHptMCAwIi8+CiAgICA8cGF0aCBkPSJtMTU2LjMwMDc4MSA3NS4xNDQ1MzFjMTMuMzk4NDM4IDAgMjQuMzA0Njg4LTExLjI2MTcxOSAyNC4zMDQ2ODgtMjUuMTA1NDY5cy0xMC44OTg0MzgtMjUuMTAxNTYyLTI0LjMwNDY4OC0yNS4xMDE1NjItMjQuMzAwNzgxIDExLjI2MTcxOS0yNC4zMDA3ODEgMjUuMTAxNTYyYzAgMTMuODM1OTM4IDEwLjg5ODQzOCAyNS4xMDU0NjkgMjQuMzAwNzgxIDI1LjEwNTQ2OXptMC0zNC4yMTA5MzdjNC41NzgxMjUgMCA4LjMwNDY4OCA0LjA4MjAzMSA4LjMwNDY4OCA5LjA5NzY1NiAwIDUuMDE5NTMxLTMuNzI2NTYzIDkuMTA5Mzc1LTguMzA0Njg4IDkuMTA5Mzc1LTQuNTgyMDMxIDAtOC4zMDA3ODEtNC4wODIwMzEtOC4zMDA3ODEtOS4xMDE1NjMgMC01LjAyMzQzNyAzLjcyMjY1Ni05LjEwNTQ2OCA4LjMwMDc4MS05LjEwNTQ2OHptMCAwIi8+CiAgICA8cGF0aCBkPSJtNTAuMzE2NDA2IDc1LjE0NDUzMWMxMy40MDIzNDQgMCAyNC4zMDQ2ODgtMTEuMjYxNzE5IDI0LjMwNDY4OC0yNS4xMDU0NjlzLTEwLjg5ODQzOC0yNS4xMDE1NjItMjQuMzA0Njg4LTI1LjEwMTU2Mi0yNC4zMDQ2ODcgMTEuMjYxNzE5LTI0LjMwNDY4NyAyNS4xMDE1NjJjMCAxMy44MzU5MzggMTAuOTAyMzQzIDI1LjEwNTQ2OSAyNC4zMDQ2ODcgMjUuMTA1NDY5em0wLTM0LjIxMDkzN2M0LjU4MjAzMiAwIDguMzA0Njg4IDQuMDgyMDMxIDguMzA0Njg4IDkuMDk3NjU2IDAgNS4wMTk1MzEtMy43MjI2NTYgOS4xMDkzNzUtOC4zMDQ2ODggOS4xMDkzNzUtNC41NzgxMjUgMC04LjMwNDY4Ny00LjA4NTkzNy04LjMwNDY4Ny05LjEwOTM3NSAwLTUuMDE5NTMxIDMuNzI2NTYyLTkuMDk3NjU2IDguMzA0Njg3LTkuMDk3NjU2em0wIDAiLz4gLS0+CiAgICA8cGF0aCBkPSJtMTkzLjE1MjM0NCAyMzRoLTQuMTUyMzQ0di03LjM3ODkwNmMwLTMuMjk2ODc1LTQuMTAxNTYyLTQuNjk5MjE5LTgtNC42OTkyMTlzLTggMS40MDIzNDQtOCA0LjY5OTIxOXY3LjM3ODkwNmgtOC4zNDc2NTZsMTcuNjk5MjE4LTM1LjY5MTQwNmMuMjk2ODc2LS42MjUuNDY0ODQ0LTEuMzA0Njg4LjUtMiAwLTMuNTk3NjU2LTUuMTAxNTYyLTUuOTQ1MzEzLTcuODAwNzgxLTUuOTQ1MzEzLTIuNzYxNzE5LS4wNzQyMTktNS4zMDg1OTMgMS40ODQzNzUtNi41IDMuOTc2NTYzbC0yMy4xMDE1NjIgNDUuMjkyOTY4Yy0uNTA3ODEzLjkxMDE1Ny0uNzgxMjUgMS45MzM1OTQtLjc5Njg3NSAyLjk4MDQ2OS0uMTIxMDk0IDEuNDI5Njg4LjM4MjgxMiAyLjgzOTg0NCAxLjM3ODkwNiAzLjg3MTA5NHMyLjM4NjcxOSAxLjU4MjAzMSAzLjgyMDMxMiAxLjUxMTcxOWgyMy4xNDg0Mzh2MTAuNjI1YzAgMy4xOTkyMTggNC4xMDE1NjIgNC44MDA3ODEgOCA0LjgwMDc4MXM4LTEuNjAxNTYzIDgtNC44MDA3ODF2LTEwLjYyMTA5NGg0LjE1MjM0NGMyLjM5ODQzNyAwIDQuODAwNzgxLTMuMzk4NDM4IDQuODAwNzgxLTdzLTEuNjAxNTYzLTctNC44MDA3ODEtN3ptMCAwIi8+CiAgICA8cGF0aCBkPSJtMjM2LjQ0OTIxOSAxOTAuMzIwMzEyYy0xMy44MDA3ODEgMC0yNC40NDkyMTkgNi4zOTg0MzgtMjQuNDQ5MjE5IDIzLjYwMTU2M3YyNi41YzAgMTcuMTk5MjE5IDEwLjY0ODQzOCAyMy41OTc2NTYgMjQuNDQ5MjE5IDIzLjU5NzY1NnMyNC41NTA3ODEtNi4zOTg0MzcgMjQuNTUwNzgxLTIzLjU5NzY1NnYtMjYuNWMwLTE3LjE5OTIxOS0xMC43NS0yMy42MDE1NjMtMjQuNTUwNzgxLTIzLjYwMTU2M3ptOC41NTA3ODEgNTAuMTAxNTYzYzAgNi44OTg0MzctMy40NDkyMTkgMTAtOS4wNTA3ODEgMTAtNS41OTc2NTcgMC04Ljk0OTIxOS0zLjEwMTU2My04Ljk0OTIxOS0xMHYtMjYuNWMwLTYuOTAyMzQ0IDMuMzUxNTYyLTEwIDguOTQ5MjE5LTEwIDUuNjAxNTYyIDAgOS4wNTA3ODEgMy4wOTc2NTYgOS4wNTA3ODEgMTB6bTAgMCIvPgogICAgPHBhdGggZD0ibTMyMi41NTA3ODEgMjM0aC00LjU1MDc4MXYtNy4zNzg5MDZjMC0zLjI5Njg3NS0zLjYwMTU2Mi00LjY5OTIxOS03LjUtNC42OTkyMTlzLTcuNSAxLjQwMjM0NC03LjUgNC42OTkyMTl2Ny4zNzg5MDZoLTguOTQ5MjE5bDE3LjY5OTIxOS0zNS42OTE0MDZjLjI5Mjk2OS0uNjI1LjQ2NDg0NC0xLjMwNDY4OC41LTIgMC0zLjU5NzY1Ni01LjEwMTU2Mi01Ljk0NTMxMy03LjgwMDc4MS01Ljk0NTMxMy0yLjc2MTcxOS0uMDc0MjE5LTUuMzA4NTk0IDEuNDg0Mzc1LTYuNSAzLjk3NjU2M2wtMjMuMTAxNTYzIDQ1LjI5Mjk2OGMtLjUwNzgxMi45MTAxNTctLjc4MTI1IDEuOTMzNTk0LS43OTY4NzUgMi45ODA0NjktLjEyMTA5MyAxLjQyOTY4OC4zODI4MTMgMi44Mzk4NDQgMS4zNzg5MDcgMy44NzEwOTQuOTk2MDkzIDEuMDMxMjUgMi4zODY3MTggMS41ODIwMzEgMy44MjAzMTIgMS41MTE3MTloMjMuNzV2MTAuNjI1YzAgMy4xOTkyMTggMy42MDE1NjIgNC44MDA3ODEgNy41IDQuODAwNzgxczcuNS0xLjYwMTU2MyA3LjUtNC44MDA3ODF2LTEwLjYyMTA5NGg0LjU1MDc4MWMyLjM5ODQzOCAwIDQuODAwNzgxLTMuMzk4NDM4IDQuODAwNzgxLTdzLTEuNjAxNTYyLTctNC44MDA3ODEtN3ptMCAwIi8+Cjwvc3ZnPg=="}}]);
//# sourceMappingURL=component---src-pages-404-js-45ea9b0ac5a0dfc22768.js.map