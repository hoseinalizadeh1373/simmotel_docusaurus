"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[2305],{6328:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(4848),s=t(8453);const o={sidebar_position:1,sidebar_label:"Contact Center",title:void 0},r="Contact Center",a={id:"pbx/system-intro/pbxsettingintro",title:"Contact Center",description:"A contact center is a telecommunication network used within an organization or company. Users of the contact center (extensions) communicate with each other internally (within the organization) or externally (to the outside world) using various communication methods (including VoIP, ISDN network, and analog). Additionally, a contact center allows you to have more telephone lines than physical lines (PSTN).",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/pbx/2-system-intro/1-pbxsettingintro.md",sourceDirName:"pbx/2-system-intro",slug:"/pbx/system-intro/pbxsettingintro",permalink:"/pbx/system-intro/pbxsettingintro",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Contact Center"},sidebar:"Docs",previous:{title:"Introduction",permalink:"/pbx"},next:{title:"Dial Plan Intro",permalink:"/pbx/system-intro/dialplanintro"}},l={},c=[{value:"PBX",id:"pbx",level:2},{value:"Users",id:"users",level:2},{value:"Trunks",id:"trunks",level:2},{value:"Practical Examples of Using Trunks",id:"practical-examples-of-using-trunks",level:2},{value:"Queues",id:"queues",level:2},{value:"Some Queue Features",id:"some-queue-features",level:3},{value:"Music On Hold",id:"music-on-hold",level:3},{value:"Announcements",id:"announcements",level:3},{value:"Examples of Announcements Usage",id:"examples-of-announcements-usage",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"contact-center",children:"Contact Center"})}),"\n",(0,i.jsx)(n.p,{children:"A contact center is a telecommunication network used within an organization or company. Users of the contact center (extensions) communicate with each other internally (within the organization) or externally (to the outside world) using various communication methods (including VoIP, ISDN network, and analog). Additionally, a contact center allows you to have more telephone lines than physical lines (PSTN)."}),"\n",(0,i.jsx)(n.h2,{id:"pbx",children:"PBX"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"PBX"})," section is the foundational part of the system where, after defining values such as users (extensions), queues, and trunks, they are used in the ",(0,i.jsx)(n.code,{children:"DialPlan"})," editor to implement the desired scenario. In this section, we will review the essential items needed for the initial setup of the contact center."]}),"\n",(0,i.jsx)(n.h2,{id:"users",children:"Users"}),"\n",(0,i.jsxs)(n.p,{children:["To use the contact center, you first need to define users. Once users are defined in the contact center, they can be registered on your VoIP phone or softphone. These users are referred to as ",(0,i.jsx)(n.strong,{children:"extensions"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"After registering the extensions on the phones, internal calls between users can be made."}),"\n",(0,i.jsx)(n.admonition,{title:"Warning",type:"caution",children:(0,i.jsx)(n.p,{children:"The contact center section only includes basic information. To enable internal-to-internal calls, configurations in the DialPlan editor must also be completed."})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.code,{children:"DialPlan"})," section, a standard scenario is implemented, and if you define your extensions as three-digit numbers ",(0,i.jsx)(n.code,{children:"XXX"}),", internal-to-internal calls will be enabled by default."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For more information about extensions, please refer to ",(0,i.jsx)(n.a,{href:"/pbx/pbx-menu/pbx/users",children:(0,i.jsx)(n.code,{children:"this section"})})]}),"\n",(0,i.jsx)(n.h2,{id:"trunks",children:"Trunks"}),"\n",(0,i.jsx)(n.p,{children:"Trunks are used to establish connections between the VoIP system and other systems."}),"\n",(0,i.jsx)(n.h2,{id:"practical-examples-of-using-trunks",children:"Practical Examples of Using Trunks"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Example"})," : When you acquire a contact center, the system provides you with all its features. However, to establish a connection between the telecommunication network and the VoIP system, you need to create a trunk between these systems. Specifically, when you purchase a landline number from a provider, this number needs to be defined in your system. A connection must be established between you and the provider so that when a call is made to the destination number, the provider directs the call to your contact center using a Route. Ultimately, based on the configured call scenario, the call is connected to one of the employees in your organization."]}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Example"})," : Imagine a company with several branches in different provinces, each having its own independent contact center. Given that these systems are not interconnected, how can a call received by the company's headquarters in Tehran be transferred to the production department supervisor at the Mashhad branch ",(0,i.jsx)(n.code,{children:"Transfer"}),"? Or how can internal calls be made between two branches of the company without incurring telecommunication costs? In this case, using trunks allows for logical connections between independent VoIP systems, enabling you to easily take advantage of the services mentioned above."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For more information about trunks, please refer to ",(0,i.jsx)(n.a,{href:"/pbx/pbx-menu/pbx/trunks",children:(0,i.jsx)(n.code,{children:"this section"})})]}),"\n",(0,i.jsx)(n.h2,{id:"queues",children:"Queues"}),"\n",(0,i.jsx)(n.p,{children:"In organizations, there are various departments, each specializing in providing specific services to customers. For example, you can mention technical support and sales departments. In these departments, many individuals are working, so the best way to distribute tasks among the staff is to create a queue of operators. This way, customer calls are connected to the available individuals in the queue based on a fair pattern."}),"\n",(0,i.jsx)(n.h3,{id:"some-queue-features",children:"Some Queue Features"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Define an unlimited number of queues"}),"\n",(0,i.jsx)(n.li,{children:"Define eight different call distribution algorithms for the queue (e.g., ring all when a call enters the queue, sequentially based on priority, etc.)"}),"\n",(0,i.jsx)(n.li,{children:"Set priorities for queue Agents (e.g., technical support agents ring first, and if all are busy, the supervisor\u2019s phone rings last)"}),"\n",(0,i.jsx)(n.li,{children:"Define hold music (e.g., when all agents are busy and the customer needs to wait, hold music is played)"}),"\n",(0,i.jsx)(n.li,{children:"Queue entry and exit using special codes (e.g., an agent can enter the technical support queue by dialing code 91 and exit the queue at the end of the workday by dialing code 92)"}),"\n",(0,i.jsx)(n.li,{children:"Record conversations of queue agents"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For more information about queues, please refer to ",(0,i.jsx)(n.a,{href:"/pbx/pbx-menu/pbx/queues",children:(0,i.jsx)(n.code,{children:"this section"})})]}),"\n",(0,i.jsx)(n.h3,{id:"music-on-hold",children:"Music On Hold"}),"\n",(0,i.jsx)(n.p,{children:'To use the Music On Hold feature for a queue, you first need to create a class and upload the Music On Hold files related to your queue into that class. After uploading the audio files, go to the "Queue" section and, under "Queue Settings," select your uploaded Music On Hold class.'}),"\n",(0,i.jsxs)(n.p,{children:["For more information about music on hold, please refer to ",(0,i.jsx)(n.a,{href:"/pbx/pbx-menu/pbx/music_on_hold",children:(0,i.jsx)(n.code,{children:"this section"})})]}),"\n",(0,i.jsx)(n.h3,{id:"announcements",children:"Announcements"}),"\n",(0,i.jsx)(n.p,{children:'Often, it is necessary to provide an introduction about the organization\u2019s departments in an audio file before connecting the caller to the organization\'s staff. The caller is then asked to press a specific number if they want to speak with a particular department. This capability is known as Interactive Voice Response (IVR), which will be fully explained in the future. Nevertheless, different organizations have their own specific audio files, so the audio file needs to be uploaded initially in the "Announcements" section and then assigned to the corresponding IVR.'}),"\n",(0,i.jsx)(n.h3,{id:"examples-of-announcements-usage",children:"Examples of Announcements Usage"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Announcement for calls outside of business hours and days"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Announcement for call recording"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Announcement for end-of-call surveys"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Note",type:"tip",children:(0,i.jsx)(n.p,{children:'In the Simotel contact center, a number of commonly used audio files are pre-uploaded by default. To view and play them, please refer to the "Announcements" section.'})}),"\n",(0,i.jsxs)(n.p,{children:["For more information about announcements, please refer to ",(0,i.jsx)(n.a,{href:"/pbx/pbx-menu/pbx/announcements",children:(0,i.jsx)(n.code,{children:"this section"})})]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(6540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);