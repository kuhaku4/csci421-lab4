(()=>{"use strict";var e={699:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.$j=t.$i=void 0;const i=r(496),o=r(571);t.$i=class{constructor(e){this.a=e}pickRemoteSource(e){return(0,o.$g)(this.a,e)}getRemoteSourceActions(e){return(0,o.$f)(this.a,e)}registerRemoteSourceProvider(e){return this.a.registerRemoteSourceProvider(e)}},t.$j=function(e){const t=[];return t.push(i.commands.registerCommand("git-base.api.getRemoteSources",(t=>{if(e.model)return(0,o.$g)(e.model,t)}))),i.Disposable.from(...t)}},413:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.$h=void 0;const i=r(496),o=r(699);t.$h=class{set model(e){this.b=e;const t=!!e;this.enabled!==t&&(this.enabled=t,this.a.fire(this.enabled))}get model(){return this.b}constructor(e){this.enabled=!1,this.a=new i.EventEmitter,this.onDidChangeEnablement=this.a.event,this.b=void 0,e&&(this.enabled=!0,this.b=e)}getAPI(e){if(!this.b)throw new Error("Git model not found");if(1!==e)throw new Error(`No API version ${e} found.`);return new o.$i(this.b)}}},874:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.$d=t.$c=void 0;const i=r(575);function o(e){return(t,r,i)=>{let o=null,s=null;if("function"==typeof i.value?(o="value",s=i.value):"function"==typeof i.get&&(o="get",s=i.get),!s||!o)throw new Error("not supported");i[o]=e(s,r)}}t.$c=function(e){return o(((t,r)=>{const i=`$debounce$${r}`;return function(...r){clearTimeout(this[i]),this[i]=setTimeout((()=>t.apply(this,r)),e)}}))},t.$d=o((function(e,t){const r=`$throttle$current$${t}`,o=`$throttle$next$${t}`,s=function(...t){if(this[o])return this[o];if(this[r])return this[o]=(0,i.$b)(this[r]).then((()=>(this[o]=void 0,s.apply(this,t)))),this[o];this[r]=e.apply(this,t);const n=()=>this[r]=void 0;return(0,i.$b)(this[r]).then(n,n),this[r]};return s}))},74:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.$e=void 0;const i=r(496),o=r(575);t.$e=class{constructor(){this.a=new Set,this.b=new i.EventEmitter,this.onDidAddRemoteSourceProvider=this.b.event,this.c=new i.EventEmitter,this.onDidRemoveRemoteSourceProvider=this.c.event}registerRemoteSourceProvider(e){return this.a.add(e),this.b.fire(e),(0,o.$a)((()=>{this.a.delete(e),this.c.fire(e)}))}getRemoteProviders(){return[...this.a.values()]}}},571:function(e,t,r){var i=this&&this.__decorate||function(e,t,r,i){var o,s=arguments.length,n=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(s<3?o(n):s>3?o(t,r,n):o(t,r))||n);return s>3&&n&&Object.defineProperty(t,r,n),n};Object.defineProperty(t,"__esModule",{value:!0}),t.$g=t.$f=void 0;const o=r(496),s=r(874);async function n(e){const t=[],r=await new Promise((r=>{t.push(e.onDidAccept((()=>r(e.selectedItems[0]))),e.onDidHide((()=>r(void 0)))),e.show()}));return e.hide(),t.forEach((e=>e.dispose())),r}class a{constructor(e){this.h=e,this.e=[],this.f=!1}dispose(){this.e.forEach((e=>e.dispose())),this.e=[],this.g=void 0,this.f=!0}i(){this.g||(this.g=o.window.createQuickPick(),this.e.push(this.g),this.g.ignoreFocusOut=!0,this.e.push(this.g.onDidHide((()=>this.dispose()))),this.h.supportsQuery?(this.g.placeholder=this.h.placeholder??o.l10n.t("Repository name (type to search)"),this.e.push(this.g.onDidChangeValue(this.j,this))):this.g.placeholder=this.h.placeholder??o.l10n.t("Repository name"))}j(){this.k()}async k(){try{if(this.f)return;this.i(),this.g.busy=!0,this.g.show();const e=await this.h.getRemoteSources(this.g?.value)||[];if(this.f)return;0===e.length?this.g.items=[{label:o.l10n.t("No remote repositories found."),alwaysShow:!0}]:this.g.items=e.map((e=>({label:e.icon?`$(${e.icon}) ${e.name}`:e.name,description:e.description||("string"==typeof e.url?e.url:e.url[0]),detail:e.detail,remoteSource:e,alwaysShow:!0})))}catch(e){this.g.items=[{label:o.l10n.t("{0} Error: {1}","$(error)",e.message),alwaysShow:!0}],console.error(e)}finally{this.f||(this.g.busy=!1)}}async pick(){if(await this.k(),!this.f)return(await n(this.g))?.remoteSource}}async function c(e,t={}){const r=new a(e),i=await r.pick();let s;if(r.dispose(),i&&("string"==typeof i.url?s=i.url:i.url.length>0&&(s=await o.window.showQuickPick(i.url,{ignoreFocusOut:!0,placeHolder:o.l10n.t("Choose a URL to clone from.")}))),!s||!t.branch)return s;if(!e.getBranches)return{url:s};const n=await e.getBranches(s);if(!n)return{url:s};const c=await o.window.showQuickPick(n,{placeHolder:o.l10n.t("Branch name")});return c?{url:s,branch:c}:{url:s}}i([(0,s.$c)(300)],a.prototype,"j",null),i([s.$d],a.prototype,"k",null),t.$f=async function(e,t){const r=e.getRemoteProviders(),i=[];for(const e of r){const r=await(e.getRemoteSourceActions?.(t));r?.length&&i.push(...r)}return i},t.$g=async function(e,t={}){const r=o.window.createQuickPick();if(r.title=t.title,t.providerName){const r=e.getRemoteProviders().filter((e=>e.name===t.providerName))[0];if(r)return await c(r,t)}const i=e.getRemoteProviders().map((e=>({label:(e.icon?`$(${e.icon}) `:"")+(t.providerLabel?t.providerLabel(e):e.name),alwaysShow:!0,provider:e}))),s=[];if(t.showRecentSources)for(const{provider:e}of i){const t=(await(e.getRecentRemoteSources?.())??[]).map((e=>({...e,label:(e.icon?`$(${e.icon}) `:"")+e.name,url:"string"==typeof e.url?e.url:e.url[0]})));s.push(...t)}const a=[{kind:o.QuickPickItemKind.Separator,label:o.l10n.t("remote sources")},...i,{kind:o.QuickPickItemKind.Separator,label:o.l10n.t("recently opened")},...s.sort(((e,t)=>t.timestamp-e.timestamp))];r.placeholder=t.placeholder??(0===i.length?o.l10n.t("Provide repository URL"):o.l10n.t("Provide repository URL or pick a repository source."));const u=e=>{if(e){const i=("string"==typeof t.urlLabel?t.urlLabel:t.urlLabel?.(e))??o.l10n.t("URL");r.items=[{label:i,description:e,alwaysShow:!0,url:e},...a]}else r.items=a};r.onDidChangeValue(u),u();const l=await n(r);if(l){if(l.url)return l.url;if(l.provider)return await c(l.provider,t)}}},575:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),t.Versions=t.$b=t.$a=void 0,t.$a=function(e){return{dispose:e}},t.$b=function(e){return e.then((()=>{}))},function(e){function t(e,t,r,i){return{major:"string"==typeof e?parseInt(e,10):e,minor:"string"==typeof t?parseInt(t,10):t,patch:null==r?0:"string"==typeof r?parseInt(r,10):r,pre:i}}function r(e){const[r,i]=e.split("-"),[o,s,n]=r.split(".");return t(o,s,n,i)}e.compare=function(e,t){return"string"==typeof e&&(e=r(e)),"string"==typeof t&&(t=r(t)),e.major>t.major?1:e.major<t.major?-1:e.minor>t.minor?1:e.minor<t.minor?-1:e.patch>t.patch?1:e.patch<t.patch?-1:void 0===e.pre&&void 0!==t.pre?1:void 0!==e.pre&&void 0===t.pre?-1:void 0!==e.pre&&void 0!==t.pre?e.pre.localeCompare(t.pre):0},e.from=t,e.fromString=r}(r||(t.Versions=r={}))},496:e=>{e.exports=require("vscode")}},t={};function r(i){var o=t[i];if(void 0!==o)return o.exports;var s=t[i]={exports:{}};return e[i].call(s.exports,s,s.exports,r),s.exports}var i={};(()=>{var e=i;Object.defineProperty(e,"__esModule",{value:!0}),e.activate=void 0;const t=r(699),o=r(413),s=r(74);e.activate=function(e){const r=new o.$h(new s.$e);return e.subscriptions.push((0,t.$j)(r)),r}})();var o=exports;for(var s in i)o[s]=i[s];i.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/31c37ee8f63491495ac49e43b8544550fbae4533/extensions/git-base/dist/extension.js.map