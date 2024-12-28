"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[9148],{3400:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=s(4848),t=s(8453);const r={title:void 0},l="Extension",o={id:"pbx/pbx-menu/dialplan/components/extension",title:"Extension",description:"Purpose",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/pbx/3- pbx-menu/6-dialplan/2-components/6-extension.md",sourceDirName:"pbx/3- pbx-menu/6-dialplan/2-components",slug:"/pbx/pbx-menu/dialplan/components/extension",permalink:"/pbx/pbx-menu/dialplan/components/extension",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"Docs",previous:{title:"IVR API",permalink:"/pbx/pbx-menu/dialplan/components/ivr_api"},next:{title:"Extension API",permalink:"/pbx/pbx-menu/dialplan/components/extension_api"}},d={},c=[{value:"Purpose",id:"purpose",level:2},{value:"Component Parameters",id:"component-parameters",level:2},{value:"Skip and Prefix Parameters",id:"skip-and-prefix-parameters",level:2},{value:"Example to explain Skip and Prefix:",id:"example-to-explain-skip-and-prefix",level:3},{value:"Outputs",id:"outputs",level:2}];function a(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"extension",children:"Extension"})}),"\n",(0,i.jsx)(n.h2,{id:"purpose",children:"Purpose"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Extension"})," component is used to route calls to a specific extension within the system."]}),"\n",(0,i.jsx)(n.h2,{id:"component-parameters",children:"Component Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Extension"}),": Select the extension to receive the call. If no extension is selected, the call will be routed to the extension matching the entered number."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Say Busy"}),": If the user is busy, a message is played to notify the caller that the extension is busy (for call waiting purposes)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Timeout (sec)"}),": The time (in seconds) that the extension will ring before being considered unanswered."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Skip"}),": Defines the number of digits to remove from the beginning of the entered number. The remaining number is then used as the destination number."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Prefix"}),": Adds the number entered in this field before the dialed number. The final number is then considered as the destination number."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Call Limit (sec)"}),": Sets a time limit for the call."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Options"}),": Provides additional configuration settings for the call."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"skip-and-prefix-parameters",children:"Skip and Prefix Parameters"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Skip"})," takes priority over ",(0,i.jsx)(n.strong,{children:"Prefix"}),". This means that the ",(0,i.jsx)(n.strong,{children:"Skip"})," action is applied first, followed by ",(0,i.jsx)(n.strong,{children:"Prefix"})," if no extension is selected."]}),"\n",(0,i.jsx)(n.h3,{id:"example-to-explain-skip-and-prefix",children:"Example to explain Skip and Prefix:"}),"\n",(0,i.jsxs)(n.p,{children:["Let\u2019s say the user dials the number ",(0,i.jsx)(n.strong,{children:"955"}),", with ",(0,i.jsx)(n.strong,{children:"Skip = 1"})," and ",(0,i.jsx)(n.strong,{children:"Prefix = 20"}),". The steps will be as follows:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["The first digit (",(0,i.jsx)(n.strong,{children:"9"}),") is removed from ",(0,i.jsx)(n.strong,{children:"955"}),", leaving ",(0,i.jsx)(n.strong,{children:"55"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.strong,{children:"Prefix"})," (",(0,i.jsx)(n.strong,{children:"20"}),") is added to ",(0,i.jsx)(n.strong,{children:"55"}),", resulting in ",(0,i.jsx)(n.strong,{children:"2055"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The call will then be routed to extension ",(0,i.jsx)(n.strong,{children:"2055"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"outputs",children:"Outputs"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"S (Success)"}),": If the call is answered successfully by the extension."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"B (Busy)"}),": If the extension is busy."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"F (Fail)"}),": If the call is unsuccessful (for example, if the extension is unavailable)."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var i=s(6540);const t={},r=i.createContext(t);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);