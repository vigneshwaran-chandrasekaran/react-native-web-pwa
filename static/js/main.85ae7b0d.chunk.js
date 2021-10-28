(this["webpackJsonpreact-native-web-pwa"]=this["webpackJsonpreact-native-web-pwa"]||[]).push([[0],{56:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),r=n(25),a=n.n(r),s=n(9),c=n(69),l=n(70),d=n(73),u=n(71),h=n(72),j=n(48),b=n(51),f=n(4),v=(n(56),n(1)),p=function(){return Object(v.jsx)(s.a,{style:x.separator})};var x=f.a.create({container:{flex:1,justifyContent:"center",marginHorizontal:16},title:{textAlign:"center",marginVertical:8},fixToText:{flexDirection:"row",justifyContent:"space-between"},separator:{marginVertical:8,borderBottomColor:"#737373",borderBottomWidth:f.a.hairlineWidth}}),g=function(){var e,t;return Object(v.jsxs)(l.a,{style:x.container,children:[Object(v.jsxs)("div",{style:{textAlign:"center"},children:[Object(v.jsx)("h1",{children:"Div tag with p Tag"}),Object(v.jsx)(s.a,{style:x.buttonBox,children:Object(v.jsx)(d.a,{onPress:function(){var e=c.a.setString("This text was copied to the clipboard by React Native");console.log("Clipboard.setString success? ".concat(e))},title:"Copy to clipboard"})}),Object(v.jsx)(u.a,{multiline:!0,placeholder:"Try pasting here afterwards",style:x.textInput})]}),Object(v.jsxs)(h.a,{contentContainerStyle:x.container,children:[Object(v.jsxs)(j.a,{style:x.value,children:["OS = ",null===b.a||void 0===b.a?void 0:b.a.OS]}),Object(v.jsxs)(j.a,{style:x.value,children:["OS Version = ",null===b.a||void 0===b.a?void 0:b.a.Version]}),Object(v.jsxs)(j.a,{style:x.value,children:["isTV = ",null===b.a||void 0===b.a||null===(e=b.a.isTV)||void 0===e?void 0:e.toString()]}),"ios"===b.a.OS&&Object(v.jsxs)(j.a,{style:x.value,children:["isPad = ",null===b.a||void 0===b.a||null===(t=b.a.isPad)||void 0===t?void 0:t.toString()]}),Object(v.jsx)(j.a,{children:"Constants"}),Object(v.jsx)(j.a,{style:x.value,children:JSON.stringify(null===b.a||void 0===b.a?void 0:b.a.constants,null,2)})]}),Object(v.jsxs)(s.a,{children:[Object(v.jsx)(j.a,{style:x.title,children:"The title and onPress handler are required. It is recommended to set accessibilityLabel to help make your app usable by everyone."}),Object(v.jsx)(d.a,{title:"Press me",onPress:function(){return alert("Simple Button pressed")}})]}),Object(v.jsx)(p,{}),Object(v.jsxs)(s.a,{children:[Object(v.jsx)(j.a,{style:x.title,children:"Adjust the color in a way that looks standard on each platform. On iOS, the color prop controls the color of the text. On Android, the color adjusts the background color of the button."}),Object(v.jsx)(d.a,{title:"Press me",color:"#f194ff",onPress:function(){return alert("Button with adjusted color pressed")}})]}),Object(v.jsx)(p,{}),Object(v.jsxs)(s.a,{children:[Object(v.jsx)(j.a,{style:x.title,children:"All interaction for the component are disabled."}),Object(v.jsx)(d.a,{title:"Press me",disabled:!0,onPress:function(){return alert("Cannot press this one")}})]}),Object(v.jsx)(p,{}),Object(v.jsxs)(s.a,{children:[Object(v.jsx)(j.a,{style:x.title,children:"This layout strategy lets the title define the width of the button."}),Object(v.jsxs)(s.a,{style:x.fixToText,children:[Object(v.jsx)(d.a,{title:"Left button",onPress:function(){return alert("Left button pressed")}}),Object(v.jsx)(d.a,{title:"Right button",onPress:function(){return alert("Right button pressed")}})]})]})]})},O=(n(65),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),o(e),i(e),r(e),a(e)}))}),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(g,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-native-web-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/react-native-web-pwa","/service-worker.js");w?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):y(t,e)}))}}(),O()}},[[66,1,2]]]);
//# sourceMappingURL=main.85ae7b0d.chunk.js.map