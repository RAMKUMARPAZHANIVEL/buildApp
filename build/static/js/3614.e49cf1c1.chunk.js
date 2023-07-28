"use strict";(self.webpackChunkfigma_react_boilerplate=self.webpackChunkfigma_react_boilerplate||[]).push([[3614],{2122:function(e,t,i){i(2791);var s=i(184),a=function(e){var t=e.children,i=e.onClick,a=e.isActive,r=e.isSubmit,n="cursor-pointer font-medium px-4 py-2 rounded-md text-sm w-40",c="".concat(n," bg-gradient"),l="".concat(n," bg-teal_900"),o="".concat(n," text-teal_400 !py-1.6 text-[#17FFA6] border-[2px] border-[#17FFA6] bg-gray_900");return(0,s.jsx)("button",{className:r?a?c:l:o,onClick:function(e){i()},children:t})};a.defaultProps={isActive:!1},t.Z=a},5936:function(e,t,i){i.d(t,{Z:function(){return o}});i(2791);var s=i(5142),a=i(184),r=function(e){var t=e.item,i=e.locked,r=e.addToList,n=e.removeFromList,c=e.updateTech,l=e.className,o=e.addedList,d=e.multipleSelection,m=(e.selectedTech,e.name),u=e.selectedName,p=function(e){(null===o||void 0===o?void 0:o.find((function(t){return t.Name===e.Name})))?(n(e),c("")):(r(e),c(e))};return(0,a.jsx)(a.Fragment,{children:i?(0,a.jsxs)("div",{className:"bg-gray_901".concat(" ",l),onClick:function(){d?p(t):c(t)},children:[(0,a.jsxs)("div",{className:"flex flex-row gap-[20px] items-start justify-between w-[50%]",children:[(0,a.jsx)(s.Ei,{src:t.src,className:"".concat(i?"grayscale":null," h-[70px] w-[70px]"),alt:"location"}),i?(0,a.jsx)(s.Ei,{src:"images/img_lock_gray_300.svg",className:"h-[24px] w-[24px]",alt:"lock"}):null]}),(0,a.jsx)(s.xv,{className:"".concat(i?"text-gray_801":"text-gray_50"," font-inter font-semibold text-center text-gray_50 w-[auto] mt-2"),as:"h6",variant:"h6",children:m})]}):(0,a.jsxs)("div",{className:"".concat(d?null!==o&&void 0!==o&&o.find((function(e){return e.Name===m}))?"bg-bluegray_906 border-[2px] border-solid border-teal_A400":"bg-gray_901":u===m?"bg-bluegray_906 border-[2px] border-solid border-teal_A400":"bg-gray_901"," ").concat(l,"}"),onClick:function(){d?p(t):c(t)},children:[(0,a.jsx)(s.Ei,{src:t.Icon,className:"h-[50px] w-[auto]",alt:"globe"}),(0,a.jsx)(s.xv,{className:"font-inter font-semibold text-gray_50 text-center w-[auto]",as:"h6",variant:"h6",children:m})]})})};r.defaultProps={defaultname:"React",src:"images/img_globe_light_blue_300.svg",locked:!1};var n=r,c=function(e){var t=e.selectedTech,i=e.rhsDescription,r=e.selectedName;return(0,a.jsx)(a.Fragment,{children:0===Object.keys(t).length?(0,a.jsx)("div",{className:"bg-gray_901 flex md:flex-1 items-center justify-start p-[128px] sm:px-[20px] md:px-[40px] md:w-[100%] w-[50%] mt-[24px] h-[480px]",children:(0,a.jsx)(s.xv,{className:"font-normal leading-[150.00%] my-[160px] not-italic text-center text-gray_501 w-[100%]",as:"h6",variant:"h6",children:i})}):(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"bg-gray_901 flex md:flex-1 flex-col items-start justify-start mt-[24px] p-[18px] sm:px-[20px] md:w-[100%] w-[50%] h-[480px] overflow-y-auto",children:[(0,a.jsx)(s.xv,{className:"font-semibold mt-[6px] text-gray_50 text-left w-[auto]",as:"h4",variant:"h4",children:r}),(0,a.jsx)(s.xv,{className:"font-normal leading-[150.00%] mt-[19px] not-italic text-gray_300 text-left",as:"h6",variant:"h6",children:(0,a.jsxs)(a.Fragment,{children:[null===t||void 0===t?void 0:t.Description,(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),null===t||void 0===t?void 0:t.description2,(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),null===t||void 0===t?void 0:t.description3]})}),(0,a.jsx)(s.xv,{className:"font-semibold mt-[6px] text-gray_50 text-left w-[auto]",as:"h4",variant:"h4",children:"Features"}),(0,a.jsx)(s.xv,{className:"font-normal leading-[150.00%] mt-[19px] not-italic text-gray_300 text-left",as:"h6",variant:"h6",children:(0,a.jsx)(a.Fragment,{children:null===t||void 0===t?void 0:t.Features})})]})})})},l=function(e){var t=e.title,i=e.description,r=e.rhsDescription,l=e.techList,o=e.updateTech,d=e.selectedTech,m=e.multipleSelection,u=e.addToList,p=e.addedList,x=e.removeFromList,g=e.techType;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"flex items-start justify-start w-[100%]",children:(0,a.jsxs)("div",{className:"flex flex-col gap-[20px] items-start justify-start w-[100%]",children:[(0,a.jsx)("div",{className:"flex items-start justify-start w-[100%]",children:(0,a.jsxs)("div",{className:"flex flex-col gap-[4px] items-start justify-start w-[100%]",children:[(0,a.jsx)(s.xv,{className:"font-medium text-gray_50 text-left w-[auto]",as:"h4",variant:"h4",children:t}),(0,a.jsx)(s.xv,{className:"font-normal not-italic text-gray_501 text-left w-[auto]",as:"h6",variant:"h6",children:i})]})}),(0,a.jsx)(s.x1,{className:"bg-gray_801 h-[1px] w-[100%]"})]})}),(0,a.jsxs)("div",{className:"flex md:flex-col flex-row gap-[17px] items-start justify-between w-[100%]",children:[(0,a.jsx)("div",{className:"flex md:flex-1 items-center justify-start md:mt-[0] pt-[24px] md:w-[100%] w-[48%]",children:(0,a.jsx)("div",{className:"sm:gap-[20px] gap-[24px] grid sm:grid-cols-1 grid-cols-2 justify-center w-[100%] h-[480px] overflow-y-auto px-[14px]",children:"backend"===g?null===l||void 0===l?void 0:l.map((function(e,t){return(0,a.jsx)(n,{className:"cursor-pointer flex flex-1 flex-col h-[140px] items-center justify-center p-[24px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[100%]",item:e,updateTech:o,selectedTech:d,locked:null===e||void 0===e?void 0:e.locked,addToList:u,removeFromList:x,multipleSelection:m,addedList:p,name:e.TechName,selectedName:d.TechName},t)})):"database"===g?null===l||void 0===l?void 0:l.map((function(e,t){return(0,a.jsx)(n,{className:"cursor-pointer flex flex-1 flex-col h-[140px] items-center justify-center p-[24px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[100%]",item:e,updateTech:o,selectedTech:d,locked:null===e||void 0===e?void 0:e.locked,addToList:u,removeFromList:x,multipleSelection:m,addedList:p,name:e.Dbname,selectedName:d.Dbname},t)})):null===l||void 0===l?void 0:l.map((function(e,t){return(0,a.jsx)(n,{className:"cursor-pointer flex flex-1 flex-col h-[140px] items-center justify-center p-[24px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[100%]",item:e,updateTech:o,selectedTech:d,locked:null===e||void 0===e?void 0:e.locked,addToList:u,removeFromList:x,multipleSelection:m,addedList:p,name:e.Name,selectedName:d.Name},t)}))})}),(0,a.jsx)(c,{selectedTech:d,rhsDescription:r,selectedName:"backend"===g?null===d||void 0===d?void 0:d.TechName:"database"===g?d.Dbname:d.Name})]})]})};l.defaultProps={multipleSelection:!1};var o=l},3614:function(e,t,i){i.r(t);var s=i(2982),a=i(885),r=i(2791),n=i(6871),c=i(9434),l=i(6915),o=i(5142),d=i(5936),m=i(2122),u=i(7292),p=i(8344),x=i(184);t.default=function(){var e=(0,c.v9)((function(e){var t;return null===(t=e.fullstack.fullstack_details)||void 0===t?void 0:t.capablities})),t=(0,r.useState)(""),i=(0,a.Z)(t,2),g=i[0],f=i[1],h=(0,r.useState)(e),v=(0,a.Z)(h,2),b=v[0],j=v[1],_=(0,n.s0)(),y=(0,c.I0)(),N=(0,c.v9)((function(e){return e.basicInformation.projectType}));return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{className:"flex flex-1 flex-col gap-[41px] items-center justify-start md:mt-[0] mt-[32px] md:px-[20px] w-[100%]",children:[(0,x.jsx)("div",{className:"flex flex-col items-center justify-start w-[100%]",children:(0,x.jsx)(d.Z,{techList:[{name:"User Management",src:"images/img_group52988.svg",description1:"Pharetra morbi libero id aliquam elit massa integer\n    tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar\n    ullamcorper sit dictumst ut eget a, elementum eu. Maecenas\n    est morbi mattis id in ac pellentesque ac.",description2:"Lectus id duis vitae porttitor enim gravida morbi.\n    Eu turpis posuere semper feugiat volutpat elit, ultrices\n    suspendisse. Auctor vel in vitae placerat.\n   \n    Suspendisse maecenas ac donec scelerisque diam sed est\n    duis purus.\n  \n    Elit nisi in eleifend sed nisi. Pulvinar at orci, proin\n    imperdiet commodo consectetur convallis risus. Sed\n    condimentum enim dignissim adipiscing faucibus consequat,\n    urna. Viverra purus et erat auctor aliquam.",description3:"Lectus id duis vitae porttitor enim gravida morbi.\n    Eu turpis posuere semper feugiat volutpat elit, ultrices\n    suspendisse. Auctor vel in vitae placerat.\n    Suspendisse maecenas ac donec scelerisque diam sed est\n    duis purus."},{name:"Authentication & Authorization [OAuth]",src:"images/img_location_black_900.svg",description1:"Pharetra morbi libero id aliquam elit massa integer\n    tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar\n    ullamcorper sit dictumst ut eget a, elementum eu. Maecenas\n    est morbi mattis id in ac pellentesque ac."},{name:"Authentication & Authorization [Spring]",src:"images/img_close_light_green_700.svg",description1:"spirng description"},{name:"Authentication & Authorization [Auth0]",src:"images/img_close_deep_orange_600.svg",description1:"Auth0 description"},{name:"Authentication & Authorization [Basic]",src:"images/img_settings_gray_50.svg",description1:"Basic description"},{name:"Hazelcast",src:"images/img_settings_cyan_a400.svg",description1:"Hazlecast description"},{name:"Redis",src:"images/img_location_red_903.svg",description1:"Redis description"},{name:"Docker Compose",src:"images/img_lightbulb.svg",description1:"Docker Compose description"},{name:"Dockerfile",src:"images/img_group_bluegray_801.svg",description1:"Dockerfile description"},{name:"IaC for AWS",src:"images/img_group52986.svg",description1:"Ias for AWS description"},{name:"Razorpay",src:"images/img_cursor.svg",description1:"RazorPay description"}],updateTech:function(e){f(e)},selectedTech:g,addedList:b,multipleSelection:!0,addToList:function(e){j((function(t){return[].concat((0,s.Z)(t),[e])}))},removeFromList:function(e){j((function(t){return t.filter((function(t){return t.name!==e.name}))}))},typeName:"capabilities",title:"Select Capabilities",description:"Choose the capabilities you want your project to have. You can choose multiple capabilities.",rhsDescription:"Select a Capability to see it\u2019s Features"})}),(0,x.jsxs)("div",{className:"flex flex-col gap-[16px] items-start justify-start w-[100%]",children:[(0,x.jsx)(o.x1,{className:"bg-gray_801 h-[1px] w-[100%]"}),(0,x.jsx)("div",{className:"flex items-start justify-end w-[100%]",children:(0,x.jsxs)("div",{className:"flex flex-row gap-[12px] items-center justify-center pr-2",children:[(0,x.jsx)(m.Z,{onClick:function(){return _(-1)},children:"Previous"}),(0,x.jsx)(m.Z,{isActive:b.length>0,onClick:function(){return b.length>0?(y("Front End"===N?(0,u.ly)(b):"Back End"===N?(0,p.NZ)(b):(0,l.I3)(b)),void _("/both-basic-details")):null},children:"Next",isSubmit:!0})]})})]})]})})}}}]);
//# sourceMappingURL=3614.e49cf1c1.chunk.js.map