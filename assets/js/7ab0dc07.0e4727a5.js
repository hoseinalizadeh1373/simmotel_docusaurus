"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[8813],{8219:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var r=n(4848),s=n(8453);const l={title:void 0},i="Survey",d={id:"developers/SimotelWebhooks/Events/survey",title:"Survey",description:"When a participant submits their feedback in the poll component, the Survey event is triggered.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/developers/3-SimotelWebhooks/2-Events/13-survey.md",sourceDirName:"developers/3-SimotelWebhooks/2-Events",slug:"/developers/SimotelWebhooks/Events/survey",permalink:"/developers/SimotelWebhooks/Events/survey",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{},sidebar:"docs",previous:{title:"VoiceMail Email",permalink:"/developers/SimotelWebhooks/Events/voicemail_email"},next:{title:"CDR",permalink:"/developers/SimotelWebhooks/Events/cdr"}},c={},o=[{value:"Event Parameters",id:"event-parameters",level:2},{value:"Sample Output of Survey Event",id:"sample-output-of-survey-event",level:2}];function x(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"survey",children:"Survey"})}),"\n",(0,r.jsxs)(t.p,{children:["When a participant submits their feedback in the poll component, the ",(0,r.jsx)(t.strong,{children:"Survey"})," event is triggered."]}),"\n",(0,r.jsx)(t.h2,{id:"event-parameters",children:"Event Parameters"}),"\n",(0,r.jsx)("div",{class:"custom-table",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Description"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Defined Data"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Sample Data"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Parameters"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Event Name"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Survey"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"event"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Unique Call ID"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"1610178448.217"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"cuid"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Source Number"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"991"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"src"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Destination Number"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"993"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"dst"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Queue Number"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"902"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"queue"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Survey Date"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"2021-01-09 07:47:45.483185"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"date"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Rating Given"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"5"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"point"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Survey Label"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"MySurvey"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"label"})})]})]})]})}),"\n",(0,r.jsx)(t.h2,{id:"sample-output-of-survey-event",children:"Sample Output of Survey Event"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"{\n    'event': 'Survey',\n    'unique_id': '1610178448.217',\n    'src': '991',\n    'dst': '993',\n    'queue': '902',\n    'date': '2021-01-09 07:47:45.483185',\n    'point': 5,\n    'label': 'MySurvey'\n}\n\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var r=n(6540);const s={},l=r.createContext(s);function i(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);