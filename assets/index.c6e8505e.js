import{c as P,f as F,j as e,F as h,a as u,r as a,b as M,R as E,d as A,P as z}from"./vendor.4df0ba86.js";const O=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function l(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=l(t);fetch(t.href,s)}};O();const R=(r,n,l)=>{const c=(n-1)*l,t=c+l;return r.slice(c,t)},q="https://dog.ceo/api",m=P({reducerpath:"api",baseQuery:F({baseUrl:q}),endpoints(r){return{fetchDogBreeds:r.query({query:()=>"/breeds/list"}),fetchDogBreedsSelected:r.query({query:n=>`https://dog.ceo/api/breed/${n}/images`})}}}),{useFetchDogBreedsSelectedQuery:Q}=m,{useFetchDogBreedsQuery:$}=m,T=({collection:r,pageSize:n,onPageChange:l,currentPage:c})=>{const t=Math.ceil(r/n);if(!t||t===1)return null;const s=[...Array(t+1).keys()].slice(1);return e("nav",{className:"px-10 ",children:e("ul",{className:"flex justify-cenfter py-6 rounded-md overflow-auto scrollbar-thin scrollbar-thumb-cyan-900 scrollbar-track-cyan-100",children:s==null?void 0:s.map((o,g)=>e("li",{className:o===c?"bg-cyan-500  ":"",children:e("a",{className:" cursor-pointer bg-cyan-50 border-cyan-500 text-cyan-600 mx-1 h-8 w-10 inline-flex items-center justify-center py-2d border text-sm font-medium",onClick:()=>l(o),children:o})},g))})})};function G({imgSrc:r,enlargeImg:n,setEnlargeImg:l,handleImgClick:c}){return e("div",{onClick:t=>{l(!n),c(t)},className:" xl:w-96 xl:h-72 2xl:w-[23rem] ",children:e("img",{className:" cursor-pointer object-fit w-full h-full rounded-xl border-2 border-cyan-200",alt:"image of a dog breed",src:r})})}function K({toggleModal:r,setToggleModal:n,breedsSelectedImg:l}){return e(h,{children:r&&u(h,{children:[e("div",{onClick:()=>n(!r),className:"z-[200] fixed inset-0"}),e("div",{className:"fixed inset-0 bg-black opacity-90"}),e("div",{className:"justify-center items-center reladtive",children:e("figure",{className:"pointer-events-none absolute left-[50%] ml-[-11rem] mx-auto top-[50%] mt-[-7.5rem] z-[300]",children:e("img",{className:"pointer-events-none rounded-lg object-cover h-[15rem] w-[22rem] sm:h-72 sm:w-96",src:l,alt:"image of a dog breed"})})}),e("div",{className:"text-white fixed bottom-10 border-2 rounded-full p-5 ",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})})]})})}function y({imgSrcs:r}){const[n,l]=a.exports.useState(!1),[c,t]=a.exports.useState("null"),s=o=>{t(o.target.src)};return e(h,{children:e("main",{className:"",children:u("section",{className:"px-5 mt-20 flex flex-wrap justify-center gap-4 xl:grid xl:grid-cols-3 mde:grid-cols-2 2xl:grid-cols-4   xl:justify-items-center ",children:[r==null?void 0:r.map((o,g)=>e(G,{handleImgClick:s,enlargeImg:n,setEnlargeImg:l,imgSrc:o},g)),e(K,{setToggleModal:l,toggleModal:n,breedsSelectedImg:c})]})})})}function U({setPageSize:r,imgSrcs:n}){const l=[6,7,8,9,10,11,12,13,14,15,16],c=o=>{r(Number(o.target.innerText))},[t,s]=a.exports.useState(!1);return e(h,{children:e("section",{className:`${n.length>0?"block ml-20 mt-5":"hidden"} `,children:u("article",{className:"relative w-4d0  inline-block group",children:[u("button",{onClick:()=>s(!t),className:"flex  bg-blue-400 px-4 py-1 rounded-tl-3xl rounded-br-3xl text-cyan-50 font-mono font-semibold italic  inline-block",disabled:!0,children:[e("span",{className:"pr-2",children:"Specify range per page"}),e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z",clipRule:"evenodd"})})]}),e("ul",{className:` absolute group-hover:block rounded-lg pt-1 w-full  hidden cursor-pointer h-48 ... overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-900 scrollbar-track-cyan-100 ${t?"group-hover:block":""}`,children:l.map(o=>e("li",{className:"text-center block py-2 pl-2 pr-5 text-cyan-900 bg-blue-300 hover:bg-cyan-700 hover:text-white",onClick:c,children:o}))})]})})})}function V(){const[r,n]=a.exports.useState(""),[l,c]=a.exports.useState(void 0),[t,s]=a.exports.useState(!0),{data:o,isLoading:g,isSuccess:H,isError:v,isFetching:N}=$(),{data:i,isLoading:k,isSuccess:J,isError:C,isFetching:S}=Q(r,{skip:t}),[f,B]=a.exports.useState(1),[p,L]=a.exports.useState(9),[b,j]=a.exports.useState(null),I=d=>B(d),D=d=>{s(!t),n(d.target.dataset.selectedBreed)};return a.exports.useEffect(()=>{var d;if(!k){c((d=i==null?void 0:i.message)==null?void 0:d.length);const x=R((i==null?void 0:i.message)||[],f,p);j(x)}},[i==null?void 0:i.message,f,p]),N||S?e("h3",{className:"pl-2",children:"loading..."}):v||C?e("h3",{className:"pl-2",children:"something unusal has occured..."}):u(h,{children:[u("header",{className:"mt-8 mx-20 flex flex-col justify-betweeny space-y-3",children:[e("h2",{className:"text-3xl  text-cyan-600 font-bold ",children:"Choose a dog breed"}),e("ul",{className:"cursor-pointer w-[70%] h-24   space-x-4 space-y-2  overflow-x-hidden scrollbar-thin scrollbar-thumb-cyan-900 scrollbar-track-cyan-100",children:Array.isArray(o.message)&&o.message.map((d,x)=>e("li",{className:" text-white flex-shrink-0 inline-block px-2 py-1 rounded-full text-secondary bg-cyan-700  font-semibold text-sm  align-center",onClick:D,"data-selected-breed":d,children:d},x))})]}),e(U,{imgSrcs:b,setPageSize:L}),e(T,{collection:l,pageSize:p,onPageChange:I,currentPage:f}),e(y,{imgSrcs:b})]})}function W(){return u("div",{className:" h-screen",children:[e(V,{}),e(y,{})]})}const w=M({reducer:{[m.reducerPath]:m.reducer},middleware:r=>r().concat(m.middleware)});console.log("store: ",w.getState());E.render(e(A.StrictMode,{children:e(z,{store:w,children:e(W,{})})}),document.getElementById("root"));
