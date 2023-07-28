"use strict";(self.webpackChunkfigma_react_boilerplate=self.webpackChunkfigma_react_boilerplate||[]).push([[2469],{2122:function(e,t,a){a(2791);var l=a(184),s=function(e){var t=e.children,a=e.onClick,s=e.isActive,i=e.isSubmit,n="cursor-pointer font-medium px-4 py-2 rounded-md text-sm w-40",r="".concat(n," bg-gradient"),o="".concat(n," bg-teal_900"),c="".concat(n," text-teal_400 !py-1.6 text-[#17FFA6] border-[2px] border-[#17FFA6] bg-gray_900");return(0,l.jsx)("button",{className:i?s?r:o:c,onClick:function(e){a()},children:t})};s.defaultProps={isActive:!1},t.Z=s},7273:function(e,t,a){a(2791);var l=a(6499),s=a(6747),i=a(5142),n=a(6871),r=a(9434),o=a(7292),c=a(8344),d=a(6915),x=a(184),m={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"35%",height:"30%",bgcolor:"blur",boxShadow:24};t.Z=function(e){var t=(0,n.s0)(),a=(0,r.I0)(),u=(0,r.v9)((function(e){return e.basicInformation.projectType}));return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(l.Z,{open:null===e||void 0===e?void 0:e.projectCreatedAlertModal,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,x.jsx)(s.Z,{sx:m,className:"sm:!w-[100%] md:!w-[100%]",children:(0,x.jsx)("div",{className:"sm:w-[100%] md:w-[100%]",children:(0,x.jsx)("div",{className:"bg-gray_901 flex items-center justify-start p-[30px] md:px-[20px] rounded-[4px] w-[100%]",children:(0,x.jsxs)("div",{className:"flex flex-col items-start justify-start mb-[8px] mt-[20px] w-[100%]",children:[(0,x.jsx)(i.xv,{className:"font-semibold text-gray_50 text-left w-[auto]",as:"h3",variant:"h3",children:"Project created successfully!"}),(0,x.jsxs)("div",{className:"flex flex-row gap-[16px] items-center justify-center md:ml-[0] mt-[60px] md:w-[100%] w-[100%]",children:[(0,x.jsx)(i.zx,{onClick:function(){return null===e||void 0===e?void 0:e.updateProjectCreatedAlertModal(!1)},className:"border-[1px] border-solid border-teal_A400 cursor-pointer font-medium sm:px-[20px] md:px-[40px] px-[64px] py-[10px] rounded-[4px] text-[14px] text-center text-teal_A400 w-[161px]",children:"Cancel"}),(0,x.jsx)(i.zx,{onClick:function(){a("Front End"===u?(0,o.yc)():"Back End"===u?(0,c.jj)():(0,d.Ki)()),t("/our-home")},className:"bg-gradient cursor-pointer font-medium px-[12px] py-[10px] rounded-[4px] text-[14px] text-center text-gray_900 w-[161px]",children:"Finish"})]})]})})})})})})}},2469:function(e,t,a){a.r(t);var l=a(4165),s=a(5861),i=a(885),n=a(2791),r=a(6871),o=a(9434),c=a(2122),d=a(5142),x=a(8241),m=a(9209),u=a(7273),v=a(184);t.default=function(){var e,t,a,f,p,j,h,y,b,w,g,N,_,D,A=(0,n.useState)(!1),k=(0,i.Z)(A,2),P=k[0],C=k[1],B=(0,r.s0)(),T=(0,m.D3)().user;console.log(T);var Z=(0,o.v9)((function(e){var t;return null===(t=e.backend)||void 0===t?void 0:t.backend_details}));console.log(Z);var S=(0,o.v9)((function(e){var t;return null===(t=e.basicInformation)||void 0===t?void 0:t.projectBasicDetail}));console.log(S);var M=function(){var e=(0,s.Z)((0,l.Z)().mark((function e(){var t,a,s,i,n,r,o,c,d,m,u,v,f,p,j,h,y,b,w,g,N,_;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h={DbSchemaName:null===Z||void 0===Z||null===(t=Z.basicDetail)||void 0===t?void 0:t.DatabaseName,ProjectDetails:{AppName:null===Z||void 0===Z||null===(a=Z.basicDetail)||void 0===a?void 0:a.ApplicationName,AppDescription:null===Z||void 0===Z||null===(s=Z.basicDetail)||void 0===s?void 0:s.ApplicationDescription,Namespace:null===Z||void 0===Z||null===(i=Z.basicDetail)||void 0===i?void 0:i.Namespace,PackageManagement:null===Z||void 0===Z||null===(n=Z.basicDetail)||void 0===n||null===(r=n.PackageManagement)||void 0===r?void 0:r.value,BuildTool:null===Z||void 0===Z||null===(o=Z.basicDetail)||void 0===o||null===(c=o.BuildTool)||void 0===c?void 0:c.value,Server:null===Z||void 0===Z||null===(d=Z.basicDetail)||void 0===d||null===(m=d.Server)||void 0===m?void 0:m.value,Architecture:null===Z||void 0===Z||null===(u=Z.basicDetail)||void 0===u||null===(v=u.Architecture)||void 0===v?void 0:v.value},BackendAppModel:null===Z||void 0===Z||null===(f=Z.modelType)||void 0===f?void 0:f.ModelId,BackendAppTechnology:null===Z||void 0===Z||null===(p=Z.backend)||void 0===p?void 0:p.BeTechId,BackendAppDatabase:null===Z||void 0===Z||null===(j=Z.database)||void 0===j?void 0:j.DbId,BECapabilities:null===Z||void 0===Z?void 0:Z.capablities},console.log(h),e.next=4,(0,x.P)("POST","/BackendApps",h);case 4:return y=e.sent,console.log(y),e.next=8,(0,x.P)("GET","/BackendApps(".concat(null===y||void 0===y?void 0:y.AppId,")?$expand=BECapabilities"));case 8:return b=e.sent,console.log(b),w=["AppId","Advanced","@odata.context"],g=Object.keys(b).filter((function(e){return!w.includes(e)})).reduce((function(e,t){return e[t]=b[t],e}),{}),console.log(g),N={ProjectGitHubCred:null,ProjectName:null===S||void 0===S?void 0:S.ProjectName,Description:null===S||void 0===S?void 0:S.Description,CustomerName:null===T||void 0===T?void 0:T.name,ProjectLogo:"images/img_frame529821_40x32",UserName:null===T||void 0===T?void 0:T.email,ProjectType:2,BackendApps:[g]},console.log(N),e.next=17,(0,x.P)("POST","/Projects",N);case 17:_=e.sent,console.log(_),C(!0);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(u.Z,{projectCreatedAlertModal:P,updateProjectCreatedAlertModal:function(e){C(e)}}),(0,v.jsxs)("div",{className:"flex flex-1 flex-col items-start justify-start w-[100%] pt-[32px]",children:[(0,v.jsx)("div",{className:"flex items-start justify-start max-w-[982px] w-[100%]",children:(0,v.jsxs)("div",{className:"flex flex-col gap-[20px] items-start justify-start w-[100%]",children:[(0,v.jsx)("div",{className:"flex items-start justify-start w-[100%]",children:(0,v.jsx)("div",{className:"flex items-start justify-start w-[100%]",children:(0,v.jsx)(d.xv,{className:"font-medium text-gray_50 text-left w-[auto]",as:"h4",variant:"h4",children:"Review"})})}),(0,v.jsx)(d.x1,{className:"bg-gray_801 h-[1px] w-[100%]"})]})}),(0,v.jsx)(d.xv,{className:"font-medium mt-[24px] text-gray_50 text-left w-[auto]",as:"h4",variant:"h4",children:"Tech Stack Details"}),(0,v.jsxs)(d.aV,{className:"flex-col gap-[20px] grid items-center mt-[15px] w-[98%]",orientation:"vertical",children:[(0,v.jsx)("div",{className:"flex md:flex-col flex-row md:gap-[48px] items-center justify-between w-[100%]",children:(0,v.jsxs)("div",{className:"flex sm:flex-1 flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]",children:[(0,v.jsx)(d.xv,{className:"font-semibold text-gray_300 text-left w-[auto]",variant:"body2",children:"Back End Tech Stack"}),(0,v.jsx)("div",{className:"flex items-center justify-start w-[100%]",children:(0,v.jsx)(d.xv,{className:"font-normal not-italic text-gray_501 text-left w-[auto]",variant:"body3",children:null===Z||void 0===Z||null===(e=Z.backend)||void 0===e?void 0:e.TechName})})]})}),(0,v.jsxs)("div",{className:"flex md:flex-col flex-row md:gap-[48px] items-center justify-between w-[67%]",children:[(0,v.jsxs)("div",{className:"flex sm:flex-1 flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]",children:[(0,v.jsx)(d.xv,{className:"font-semibold text-gray_300 text-left w-[auto]",variant:"body2",children:"Capabilities"}),(0,v.jsx)("div",{className:"flex items-center justify-start w-[100%]",children:(0,v.jsx)(d.xv,{className:"font-normal not-italic text-gray_501 text-left w-[auto]",variant:"body3",children:null===Z||void 0===Z?void 0:Z.capablities.map((function(e,t){return(0,v.jsxs)("span",{children:[null===e||void 0===e?void 0:e.Name,1===(null===Z||void 0===Z?void 0:Z.capablities.length)?"":t===(null===Z||void 0===Z?void 0:Z.capablities.length)-1?".":", "]},t)}))})})]}),(0,v.jsxs)("div",{className:"flex sm:flex-1 flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]",children:[(0,v.jsx)("div",{className:"flex items-center justify-start self-stretch w-[auto]",children:(0,v.jsx)(d.xv,{className:"font-semibold text-gray_300 text-left w-[auto]",variant:"body2",children:"Database"})}),(0,v.jsx)("div",{className:"flex items-center justify-start w-[100%]",children:(0,v.jsx)(d.xv,{className:"font-normal not-italic text-gray_501 text-left w-[auto]",variant:"body3",children:null===Z||void 0===Z||null===(t=Z.database)||void 0===t?void 0:t.Dbname})})]})]})]}),(0,v.jsx)(d.xv,{className:"font-medium mt-[32px] text-gray_50 text-left w-[auto]",as:"h4",variant:"h4",children:"Basic Details"}),(0,v.jsxs)("div",{className:"flex md:flex-col flex-row md:gap-[48px] items-center justify-between mt-[15px] md:w-[100%] w-[98%]",children:[(0,v.jsxs)("div",{className:"flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]",children:[(0,v.jsx)(d.xv,{className:"font-semibold text-gray_300 text-left w-[auto]",variant:"body2",children:"Application Name"}),(0,v.jsx)("div",{className:"flex items-center justify-start w-[100%]",children:(0,v.jsx)(d.xv,{className:"font-normal not-italic text-gray_501 text-left w-[auto]",variant:"body3",children:null===Z||void 0===Z||null===(a=Z.basicDetail)||void 0===a?void 0:a.ApplicationName})})]}),(0,v.jsxs)("div",{className:"flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[40%]",children:[(0,v.jsx)(d.xv,{className:"font-semibold text-gray_300 text-left w-[auto]",variant:"body2",children:"Namespace"}),(0,v.jsx)("div",{className:"flex items-center justify-start w-[100%]",children:(0,v.jsx)(d.xv,{className:"font-normal not-italic text-gray_501 text-left w-[auto]",variant:"body3",children:null===Z||void 0===Z||null===(f=Z.basicDetail)||void 0===f?void 0:f.Namespace})})]})]}),(0,v.jsxs)("div",{className:"flex flex-col gap-[8px] items-start justify-start max-w-[958px] mt-[20px] w-[100%]",children:[(0,v.jsx)(d.xv,{className:"font-semibold text-gray_300 text-left w-[auto]",variant:"body2",children:"Application Description"}),(0,v.jsx)("div",{className:"flex items-center justify-start w-[100%]",children:(0,v.jsx)(d.xv,{className:"font-normal not-italic text-gray_501 text-left w-[auto]",variant:"body3",children:null===Z||void 0===Z||null===(p=Z.basicDetail)||void 0===p?void 0:p.ApplicationDescription})})]}),(0,v.jsxs)("div",{className:"flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between mt-[20px] md:w-[100%] w-[98%]",children:[(0,v.jsxs)("div",{className:"flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]",children:[(0,v.jsx)("div",{className:"flex items-center justify-start self-stretch w-[auto]",children:(0,v.jsx)(d.xv,{className:"font-semibold text-gray_300 text-left w-[auto]",variant:"body2",children:"Architecture"})}),(0,v.jsx)("div",{className:"flex items-center justify-start w-[100%]",children:(0,v.jsx)(d.xv,{className:"font-normal not-italic text-gray_501 text-left w-[auto]",variant:"body3",children:null===Z||void 0===Z||null===(j=Z.basicDetail)||void 0===j||null===(h=j.Architecture)||void 0===h?void 0:h.label})})]}),(0,v.jsxs)("div",{className:"flex flex-col gap-[8px] items-start justify-start sm:w-[100%] w-[40%]",children:[(0,v.jsx)(d.xv,{className:"font-semibold text-gray_300 text-left w-[auto]",variant:"body2",children:"Database Name"}),(0,v.jsx)("div",{className:"flex items-center justify-start w-[100%]",children:(0,v.jsx)(d.xv,{className:"font-normal not-italic text-gray_501 text-left w-[auto]",variant:"body3",children:null===Z||void 0===Z||null===(y=Z.basicDetail)||void 0===y?void 0:y.DatabaseName})})]})]}),(0,v.jsxs)("div",{className:"flex flex-col gap-[20px] items-start justify-start mt-[20px] md:w-[100%] w-[71%]",children:[(0,v.jsxs)(d.aV,{className:"sm:flex-col flex-row md:gap-[40px] gap-[456px] grid sm:grid-cols-1 grid-cols-2 justify-center w-[100%]",orientation:"horizontal",children:[(0,v.jsxs)("div",{className:"flex flex-1 flex-col gap-[8px] items-start justify-start sm:ml-[0] w-[100%]",children:[(0,v.jsx)("div",{className:"flex items-center justify-start self-stretch w-[auto]",children:(0,v.jsx)(d.xv,{className:"font-semibold text-gray_300 text-left w-[auto]",variant:"body2",children:"Server"})}),(0,v.jsx)("div",{className:"flex items-center justify-start w-[100%]",children:(0,v.jsx)(d.xv,{className:"font-normal not-italic text-gray_501 text-left w-[auto]",variant:"body3",children:null===Z||void 0===Z||null===(b=Z.basicDetail)||void 0===b||null===(w=b.Server)||void 0===w?void 0:w.label})})]}),(0,v.jsxs)("div",{className:"flex flex-col gap-[8px] items-start justify-start sm:ml-[0] self-stretch w-[auto]",children:[(0,v.jsx)("div",{className:"flex items-center justify-start self-stretch w-[125%]",children:(0,v.jsx)(d.xv,{className:"font-semibold text-gray_300 text-left w-[auto]",variant:"body2",children:"Build Tool"})}),(0,v.jsx)("div",{className:"flex items-center justify-start w-[100%]",children:(0,v.jsx)(d.xv,{className:"font-normal not-italic text-gray_501 text-left w-[auto]",variant:"body3",children:null===Z||void 0===Z||null===(g=Z.basicDetail)||void 0===g||null===(N=g.BuildTool)||void 0===N?void 0:N.label})})]})]}),(0,v.jsxs)("div",{className:"flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]",children:[(0,v.jsx)("div",{className:"flex items-center justify-start self-stretch w-[auto]",children:(0,v.jsx)(d.xv,{className:"font-semibold text-gray_300 text-left w-[auto]",variant:"body2",children:"Package Management"})}),(0,v.jsx)("div",{className:"flex items-center justify-start w-[100%]",children:(0,v.jsx)(d.xv,{className:"font-normal not-italic text-gray_501 text-left w-[auto]",variant:"body3",children:null===Z||void 0===Z||null===(_=Z.basicDetail)||void 0===_||null===(D=_.PackageManagement)||void 0===D?void 0:D.label})})]})]}),(0,v.jsxs)("div",{className:"flex flex-col gap-[16px] items-start justify-start mt-[50px] w-[100%]",children:[(0,v.jsx)(d.x1,{className:"bg-gray_801 h-[1px] w-[100%]"}),(0,v.jsx)("div",{className:"flex items-start justify-end w-[100%]",children:(0,v.jsxs)("div",{className:"flex flex-row gap-[12px] items-center justify-center pr-2",children:[(0,v.jsx)(c.Z,{onClick:function(){return B(-1)},children:"Previous"}),(0,v.jsx)(c.Z,{isActive:!0,onClick:M,children:"Next",isSubmit:!0})]})})]})]})]})}},8241:function(e,t,a){a.d(t,{P:function(){return n}});var l=a(4165),s=a(5861),i=a(1243),n=function(){var e=(0,s.Z)((0,l.Z)().mark((function e(t,a){var s,n,r=arguments;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=r.length>2&&void 0!==r[2]?r[2]:null,e.prev=1,e.next=4,(0,i.Z)({method:t,headers:{"Content-Type":"application/json"},url:"".concat("https://code-wizard.in/generated_app").concat(a),data:s});case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(1),console.error("API request error:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=2469.b27a55b9.chunk.js.map