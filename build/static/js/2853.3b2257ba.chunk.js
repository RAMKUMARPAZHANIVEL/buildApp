"use strict";(self.webpackChunkfigma_react_boilerplate=self.webpackChunkfigma_react_boilerplate||[]).push([[2853],{6177:function(e,t,s){var a=s(4165),r=s(5861),n=s(885),c=s(2791),i=s(6871),l=s(9434),o=s(6915),d=s(5936),x=s(2122),m=s(5142),u=s(8344),p=s(8241),f=s(184);t.Z=function(e){var t=e.path,s=e.selected_backend,h=(0,i.s0)(),v=(0,c.useState)(s),g=(0,n.Z)(v,2),j=g[0],b=g[1],y=(0,c.useState)([]),N=(0,n.Z)(y,2),w=N[0],_=N[1],k=(0,l.I0)();(0,c.useEffect)((function(){!function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){var s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.P)("GET","/BETechnologies");case 2:s=e.sent,_(s.value),console.log(w);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()()}),[]);var T=(0,l.v9)((function(e){return e.basicInformation.projectType}));return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("div",{className:"flex flex-1 flex-col gap-[41px] items-center justify-start md:mt-[0] mt-[32px] md:px-[20px] w-[100%]",children:[(0,f.jsx)("div",{className:"flex flex-col items-center justify-start w-[100%]",children:(0,f.jsx)(d.Z,{techList:w,updateTech:function(e){console.log(e),j.TechName!=e.TechName&&((0,u.Gs)({}),(0,u.NZ)([])),b(e)},selectedTech:j,techType:"backend",title:"Select Back End",description:"Choose the tech stack you want your project to build in",rhsDescription:"Select a Tech Stack to see it\u2019s Features"})}),(0,f.jsxs)("div",{className:"flex flex-col gap-[16px] items-start justify-start w-[100%]",children:[(0,f.jsx)(m.x1,{className:"bg-gray_801 h-[1px] w-[100%]"}),(0,f.jsx)("div",{className:"flex items-start justify-end w-[100%]",children:(0,f.jsxs)("div",{className:"flex flex-row gap-[12px] items-center justify-center pr-2",children:[(0,f.jsx)(x.Z,{onClick:function(){return h(-1)},children:"Previous"}),(0,f.jsx)(x.Z,{isActive:Object.keys(j).length>0,onClick:function(){return Object.keys(j).length>0?(k("Back End"===T?(0,u.vp)(j):(0,o.Of)(j)),void h(t)):null},children:"Next",isSubmit:!0})]})})]})]})})}},2122:function(e,t,s){s(2791);var a=s(184),r=function(e){var t=e.children,s=e.onClick,r=e.isActive,n=e.isSubmit,c="cursor-pointer font-medium px-4 py-2 rounded-md text-sm w-40",i="".concat(c," bg-gradient"),l="".concat(c," bg-teal_900"),o="".concat(c," text-teal_400 !py-1.6 text-[#17FFA6] border-[2px] border-[#17FFA6] bg-gray_900");return(0,a.jsx)("button",{className:n?r?i:l:o,onClick:function(e){s()},children:t})};r.defaultProps={isActive:!1},t.Z=r},5936:function(e,t,s){s.d(t,{Z:function(){return o}});s(2791);var a=s(5142),r=s(184),n=function(e){var t=e.item,s=e.locked,n=e.addToList,c=e.removeFromList,i=e.updateTech,l=e.className,o=e.addedList,d=e.multipleSelection,x=(e.selectedTech,e.name),m=e.selectedName,u=function(e){(null===o||void 0===o?void 0:o.find((function(t){return t.Name===e.Name})))?(c(e),i("")):(n(e),i(e))};return(0,r.jsx)(r.Fragment,{children:s?(0,r.jsxs)("div",{className:"bg-gray_901".concat(" ",l),onClick:function(){d?u(t):i(t)},children:[(0,r.jsxs)("div",{className:"flex flex-row gap-[20px] items-start justify-between w-[50%]",children:[(0,r.jsx)(a.Ei,{src:t.src,className:"".concat(s?"grayscale":null," h-[70px] w-[70px]"),alt:"location"}),s?(0,r.jsx)(a.Ei,{src:"images/img_lock_gray_300.svg",className:"h-[24px] w-[24px]",alt:"lock"}):null]}),(0,r.jsx)(a.xv,{className:"".concat(s?"text-gray_801":"text-gray_50"," font-inter font-semibold text-center text-gray_50 w-[auto] mt-2"),as:"h6",variant:"h6",children:x})]}):(0,r.jsxs)("div",{className:"".concat(d?null!==o&&void 0!==o&&o.find((function(e){return e.Name===x}))?"bg-bluegray_906 border-[2px] border-solid border-teal_A400":"bg-gray_901":m===x?"bg-bluegray_906 border-[2px] border-solid border-teal_A400":"bg-gray_901"," ").concat(l,"}"),onClick:function(){d?u(t):i(t)},children:[(0,r.jsx)(a.Ei,{src:t.Icon,className:"h-[50px] w-[auto]",alt:"globe"}),(0,r.jsx)(a.xv,{className:"font-inter font-semibold text-gray_50 text-center w-[auto]",as:"h6",variant:"h6",children:x})]})})};n.defaultProps={defaultname:"React",src:"images/img_globe_light_blue_300.svg",locked:!1};var c=n,i=function(e){var t=e.selectedTech,s=e.rhsDescription,n=e.selectedName;return(0,r.jsx)(r.Fragment,{children:0===Object.keys(t).length?(0,r.jsx)("div",{className:"bg-gray_901 flex md:flex-1 items-center justify-start p-[128px] sm:px-[20px] md:px-[40px] md:w-[100%] w-[50%] mt-[24px] h-[480px]",children:(0,r.jsx)(a.xv,{className:"font-normal leading-[150.00%] my-[160px] not-italic text-center text-gray_501 w-[100%]",as:"h6",variant:"h6",children:s})}):(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"bg-gray_901 flex md:flex-1 flex-col items-start justify-start mt-[24px] p-[18px] sm:px-[20px] md:w-[100%] w-[50%] h-[480px] overflow-y-auto",children:[(0,r.jsx)(a.xv,{className:"font-semibold mt-[6px] text-gray_50 text-left w-[auto]",as:"h4",variant:"h4",children:n}),(0,r.jsx)(a.xv,{className:"font-normal leading-[150.00%] mt-[19px] not-italic text-gray_300 text-left",as:"h6",variant:"h6",children:(0,r.jsxs)(r.Fragment,{children:[null===t||void 0===t?void 0:t.Description,(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),null===t||void 0===t?void 0:t.description2,(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),null===t||void 0===t?void 0:t.description3]})}),(0,r.jsx)(a.xv,{className:"font-semibold mt-[6px] text-gray_50 text-left w-[auto]",as:"h4",variant:"h4",children:"Features"}),(0,r.jsx)(a.xv,{className:"font-normal leading-[150.00%] mt-[19px] not-italic text-gray_300 text-left",as:"h6",variant:"h6",children:(0,r.jsx)(r.Fragment,{children:null===t||void 0===t?void 0:t.Features})})]})})})},l=function(e){var t=e.title,s=e.description,n=e.rhsDescription,l=e.techList,o=e.updateTech,d=e.selectedTech,x=e.multipleSelection,m=e.addToList,u=e.addedList,p=e.removeFromList,f=e.techType;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"flex items-start justify-start w-[100%]",children:(0,r.jsxs)("div",{className:"flex flex-col gap-[20px] items-start justify-start w-[100%]",children:[(0,r.jsx)("div",{className:"flex items-start justify-start w-[100%]",children:(0,r.jsxs)("div",{className:"flex flex-col gap-[4px] items-start justify-start w-[100%]",children:[(0,r.jsx)(a.xv,{className:"font-medium text-gray_50 text-left w-[auto]",as:"h4",variant:"h4",children:t}),(0,r.jsx)(a.xv,{className:"font-normal not-italic text-gray_501 text-left w-[auto]",as:"h6",variant:"h6",children:s})]})}),(0,r.jsx)(a.x1,{className:"bg-gray_801 h-[1px] w-[100%]"})]})}),(0,r.jsxs)("div",{className:"flex md:flex-col flex-row gap-[17px] items-start justify-between w-[100%]",children:[(0,r.jsx)("div",{className:"flex md:flex-1 items-center justify-start md:mt-[0] pt-[24px] md:w-[100%] w-[48%]",children:(0,r.jsx)("div",{className:"sm:gap-[20px] gap-[24px] grid sm:grid-cols-1 grid-cols-2 justify-center w-[100%] h-[480px] overflow-y-auto px-[14px]",children:"backend"===f?null===l||void 0===l?void 0:l.map((function(e,t){return(0,r.jsx)(c,{className:"cursor-pointer flex flex-1 flex-col h-[140px] items-center justify-center p-[24px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[100%]",item:e,updateTech:o,selectedTech:d,locked:null===e||void 0===e?void 0:e.locked,addToList:m,removeFromList:p,multipleSelection:x,addedList:u,name:e.TechName,selectedName:d.TechName},t)})):"database"===f?null===l||void 0===l?void 0:l.map((function(e,t){return(0,r.jsx)(c,{className:"cursor-pointer flex flex-1 flex-col h-[140px] items-center justify-center p-[24px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[100%]",item:e,updateTech:o,selectedTech:d,locked:null===e||void 0===e?void 0:e.locked,addToList:m,removeFromList:p,multipleSelection:x,addedList:u,name:e.Dbname,selectedName:d.Dbname},t)})):null===l||void 0===l?void 0:l.map((function(e,t){return(0,r.jsx)(c,{className:"cursor-pointer flex flex-1 flex-col h-[140px] items-center justify-center p-[24px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[100%]",item:e,updateTech:o,selectedTech:d,locked:null===e||void 0===e?void 0:e.locked,addToList:m,removeFromList:p,multipleSelection:x,addedList:u,name:e.Name,selectedName:d.Name},t)}))})}),(0,r.jsx)(i,{selectedTech:d,rhsDescription:n,selectedName:"backend"===f?null===d||void 0===d?void 0:d.TechName:"database"===f?d.Dbname:d.Name})]})]})};l.defaultProps={multipleSelection:!1};var o=l},2853:function(e,t,s){s.r(t);s(2791);var a=s(9434),r=s(6177),n=s(184);t.default=function(){var e=(0,a.v9)((function(e){var t;return null===(t=e.fullstack.fullstack_details)||void 0===t?void 0:t.backend}));return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.Z,{path:"/both-select-db",selected_backend:e})})}},8241:function(e,t,s){s.d(t,{P:function(){return c}});var a=s(4165),r=s(5861),n=s(1243),c=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t,s){var r,c,i=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>2&&void 0!==i[2]?i[2]:null,e.prev=1,e.next=4,(0,n.Z)({method:t,headers:{"Content-Type":"application/json"},url:"".concat("https://code-wizard.in/generated_app").concat(s),data:r});case 4:return c=e.sent,e.abrupt("return",c.data);case 8:e.prev=8,e.t0=e.catch(1),console.error("API request error:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,s){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=2853.3b2257ba.chunk.js.map