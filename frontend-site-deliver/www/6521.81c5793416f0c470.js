"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6521],{6521:(P,c,i)=>{i.r(c),i.d(c,{ion_input_password_toggle:()=>n});var r=i(4261),a=i(4929),u=i(333),d=i(3992),p=i(9483);const n=(()=>{let l=class{constructor(e){(0,r.r)(this,e),this.togglePasswordVisibility=()=>{const{inputElRef:s}=this;s&&(s.type="text"===s.type?"password":"text")},this.color=void 0,this.showIcon=void 0,this.hideIcon=void 0,this.type="password"}onTypeChange(e){"text"===e||"password"===e||(0,a.p)(`ion-input-password-toggle only supports inputs of type "text" or "password". Input of type "${e}" is not compatible.`,this.el)}connectedCallback(){const{el:e}=this,s=this.inputElRef=e.closest("ion-input");s?this.type=s.type:(0,a.p)("No ancestor ion-input found for ion-input-password-toggle. This component must be slotted inside of an ion-input.",e)}disconnectedCallback(){this.inputElRef=null}render(){var e,s;const{color:h,type:E}=this,g=(0,p.b)(this),I=null!==(e=this.showIcon)&&void 0!==e?e:d.x,b=null!==(s=this.hideIcon)&&void 0!==s?s:d.y,y="text"===E;return(0,r.h)(r.f,{key:"ed1c29726ce0c91548f0e2ada61e3f8b5c813d2d",class:(0,u.c)(h,{[g]:!0})},(0,r.h)("ion-button",{key:"9698eccdaedb86cf12d20acc53660371b3af3c55",mode:g,color:h,fill:"clear",shape:"round","aria-checked":y?"true":"false","aria-label":"show password",role:"switch",type:"button",onPointerDown:m=>{m.preventDefault()},onClick:this.togglePasswordVisibility},(0,r.h)("ion-icon",{key:"1f2119c30b56c800d9af44e6499445a0ebb466cf",slot:"icon-only","aria-hidden":"true",icon:y?b:I})))}get el(){return(0,r.i)(this)}static get watchers(){return{type:["onTypeChange"]}}};return l.style={ios:"",md:""},l})()},333:(P,c,i)=>{i.d(c,{c:()=>u,g:()=>p,h:()=>a,o:()=>_});var r=i(467);const a=(o,t)=>null!==t.closest(o),u=(o,t)=>"string"==typeof o&&o.length>0?Object.assign({"ion-color":!0,[`ion-color-${o}`]:!0},t):t,p=o=>{const t={};return(o=>void 0!==o?(Array.isArray(o)?o:o.split(" ")).filter(n=>null!=n).map(n=>n.trim()).filter(n=>""!==n):[])(o).forEach(n=>t[n]=!0),t},f=/^[a-z][a-z0-9+\-.]*:/,_=function(){var o=(0,r.A)(function*(t,n,l,e){if(null!=t&&"#"!==t[0]&&!f.test(t)){const s=document.querySelector("ion-router");if(s)return null!=n&&n.preventDefault(),s.push(t,l,e)}return!1});return function(n,l,e,s){return o.apply(this,arguments)}}()}}]);