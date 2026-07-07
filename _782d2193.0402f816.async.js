(globalThis.utooChunk_antd||(globalThis.utooChunk_antd=[])).push(["object"==typeof document?document.currentScript:void 0,566826,e=>{"use strict";let t=e.i(191788).default.createContext(!1);e.s(["DarkContext",0,t])},827219,e=>{e.v(t=>Promise.all(["_3068956a.18fa400b.async.js","_c79b3f17.8a4eb6f2.async.js"].map(t=>e.l(t))).then(()=>t(46230)))},288570,e=>{e.v(t=>Promise.all(["_dumi_pages_index_components_DesignFramework_tsx_fd7f3760.e17bb09c.async.js"].map(t=>e.l(t))).then(()=>t(521249)))},171745,e=>{"use strict";var t=e.i(391398),r=e.i(191788),s=e.i(846205),i=e.i(181509),a=e.i(64247);e.s(["default",0,e=>{let{component:o,children:n,to:c,ref:l,...u}=e,{pathname:d}=(0,a.useLocation)(),{preloadRoute:f}=(0,i.useAppData)(),p=(0,a.useNavigate)(),m=(0,r.useMemo)(()=>"object"==typeof c?`${c.pathname||d}${c.search||""}${c.hash||""}`:c,[d,c]);return o?r.default.createElement(o,{...u,ref:l,href:m,onClick:e=>{u.onClick?.(e),m?.startsWith("http")||e.metaKey||e.ctrlKey||e.shiftKey||(e.preventDefault(),p(m))},onMouseEnter:()=>f?.(m)},n):(0,t.jsx)(s.Link,{ref:l,...u,to:m,prefetch:!0,children:n})}])},711412,475685,930634,e=>{"use strict";var t=e.i(391398);e.i(191788);var r=e.i(609813),r=r,s=e.i(183668),i=e.i(827830);let a=(e,t)=>"string"==typeof e?e:e[t]??e.en,o=(e,t)=>e[t]??e.en;e.s(["getSponsorDescription",0,o,"getSponsorUrl",0,a,"sponsors",0,[{name:"YouMind",logo:"https://mdn.alipayobjects.com/huamei_vmgq1x/afts/img/A*SXcuQYBZ6oQAAAAAQJAAAAgAeh6VAQ/original",url:{cn:"https://youmind.com/zh-CN?utm_source=ant-design",en:"https://youmind.com?utm_source=ant-design"},opencollective:"https://opencollective.com/youmind",description:{cn:"YouMind 是学习与创作交汇的地方。在 YouMind 中，你可以与 AI 智能体一起学习、思考和创作。一切自然流动，与你共同成长。",en:"The first AI creation studio where learning meets writing."}},{name:"TRACTIAN",logo:"https://mdn.alipayobjects.com/huamei_vmgq1x/afts/img/A*Z4-4Q67SG5UAAAAAQLAAAAgAeh6VAQ/original",url:"https://tractian.com?utm_source=ant-design",opencollective:"https://opencollective.com/tractian",description:{cn:"工业 AI 平台，专注于预测性维护与资产管理。",en:"Industrial AI platform for predictive maintenance and asset management."}},{name:"LobeHub",logo:"https://unpkg.com/@lobehub/icons-static-svg@1.79.0/icons/lobehub-color.svg",url:"https://lobehub.com?utm_source=ant-design",opencollective:"https://opencollective.com/lobehub",description:{cn:"LobeHub 是你工作与生活的终极空间：在这里发现、构建并与 Agent 团队一起无限进步。",en:"Agent teammates that grow with you."}},{name:"CodeRabbit",logo:"https://mdn.alipayobjects.com/huamei_vmgq1x/afts/img/A*yHnhRL4x1DEAAAAAQBAAAAgAeh6VAQ/original",url:"https://coderabbit.ai?utm_source=ant-design",opencollective:"https://opencollective.com/coderabbit",description:{cn:"AI 代码审查工具，逐行分析 Pull Request，将代码审查时间与缺陷减半。",en:"AI-powered code review that cuts review time and bugs in half."}}]],475685);let n=(0,i.createStyles)(({cssVar:e,token:t,css:r})=>({card:r`
    width: 320px;
    max-width: 320px;
  `,cardBody:r`
    display: flex;
    gap: 14px;
    margin-bottom: 12px;
  `,cardLogo:r`
    width: 64px;
    height: 64px;
    border-radius: 14px;
    object-fit: contain;
    background: ${e.colorFillQuaternary};
    border: 1px solid ${e.colorBorderSecondary};
    padding: 8px;
    box-sizing: border-box;
    flex-shrink: 0;
  `,cardInfo:r`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    min-width: 0;
  `,cardName:r`
    font-size: 15px;
    font-weight: 600;
    color: ${e.colorText};
    a& {
      text-decoration: none;
      &:hover {
        color: ${t.colorPrimary};
      }
    }
  `,cardDesc:r`
    font-size: 13px;
    color: ${e.colorTextSecondary};
  `,cardFooter:r`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,sponsorLabel:r`
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 12px;
    color: ${e.colorTextTertiary};
  `,heartIcon:r`
    color: #ff4d4f;
    font-size: 12px;
  `,visitBtn:r`
    font-size: 13px;
    height: 28px;
    padding-inline: 10px;
    color: ${t.colorPrimary} !important;
  `,becomeBtn:r`
    font-size: 13px;
    height: 28px;
    padding-inline: 10px;
    color: ${e.colorTextTertiary} !important;
  `}));e.s(["default",0,({sponsor:e,lang:i})=>{let{styles:c}=n(),l="cn"===i,u=a(e.url,i);return(0,t.jsxs)("div",{className:c.card,children:[(0,t.jsxs)("div",{className:c.cardBody,children:[(0,t.jsx)("img",{src:e.logo,alt:e.name,className:c.cardLogo,draggable:!1}),(0,t.jsxs)("div",{className:c.cardInfo,children:[(0,t.jsx)("a",{href:e.opencollective,target:"_blank",rel:"noopener noreferrer",className:c.cardName,children:e.name}),(0,t.jsx)("span",{className:c.cardDesc,children:o(e.description,i)})]})]}),(0,t.jsxs)("div",{className:c.cardFooter,children:[(0,t.jsxs)("span",{className:c.sponsorLabel,children:[(0,t.jsx)(r.default,{className:c.heartIcon}),l?"赞助商":"Sponsor"]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(s.Button,{type:"link",size:"small",href:"https://opencollective.com/ant-design/contribute/sponsors-218",target:"_blank",rel:"noopener noreferrer",className:c.becomeBtn,children:l?"成为赞助商":"Become a sponsor"}),(0,t.jsx)(s.Button,{type:"link",size:"small",href:u,target:"_blank",rel:"noopener noreferrer",className:c.visitBtn,children:l?"访问官网 →":"Visit website →"})]})]})]})}],711412);var c=e.i(174302);e.s(["XOutlined",()=>c.default],930634)},528147,e=>{"use strict";var t=e.i(940149);e.s(["Avatar",()=>t.default])},789795,e=>{"use strict";var t=e.i(983492);e.s(["BorderBeam",()=>t.default])},612518,e=>{"use strict";var t=e.i(409855);e.s(["Breadcrumb",()=>t.default])},122381,e=>{"use strict";var t=e.i(620775);e.s(["Card",()=>t.default])},624618,e=>{"use strict";var t=e.i(756477);e.s(["Carousel",()=>t.default])},373271,e=>{"use strict";var t=e.i(120235);e.s(["Checkbox",()=>t.default])},820244,e=>{"use strict";var t=e.i(993238);e.s(["ColorPicker",()=>t.default])},439363,e=>{"use strict";var t=e.i(996004);e.s(["DatePicker",()=>t.default])},360945,e=>{"use strict";var t=e.i(415052);e.s(["Divider",()=>t.default])},767372,e=>{"use strict";var t=e.i(199346);e.s(["Drawer",()=>t.default])},975278,e=>{"use strict";var t=e.i(897826);e.s(["Input",()=>t.default])},57170,e=>{"use strict";var t=e.i(149753);e.s(["Layout",()=>t.default])},329282,e=>{"use strict";var t=e.i(95108);e.s(["Menu",()=>t.default])},112914,e=>{"use strict";var t=e.i(453851);e.s(["Popconfirm",()=>t.default])},58795,e=>{"use strict";var t=e.i(54089);e.s(["Progress",()=>t.default])},469323,e=>{"use strict";var t=e.i(208490);e.s(["QRCode",()=>t.default])},606365,e=>{"use strict";var t=e.i(737989);e.s(["Radio",()=>t.default])},376752,e=>{"use strict";var t=e.i(88652);e.s(["Rate",()=>t.default])},747319,e=>{"use strict";var t=e.i(107162);e.s(["Segmented",()=>t.default])},183056,e=>{"use strict";var t=e.i(184229);e.s(["Select",()=>t.default])},530670,e=>{"use strict";var t=e.i(509753);e.s(["Slider",()=>t.default])},997643,e=>{"use strict";var t=e.i(640440);e.s(["Space",()=>t.default])},265119,e=>{"use strict";var t=e.i(138255);e.s(["Splitter",()=>t.default])},724296,e=>{"use strict";var t=e.i(891989);e.s(["Statistic",()=>t.default])},294997,e=>{"use strict";var t=e.i(105992);e.s(["Steps",()=>t.default])},706439,e=>{"use strict";var t=e.i(248158);e.s(["Switch",()=>t.default])},504595,e=>{"use strict";var t=e.i(833663);e.s(["Table",()=>t.default])},163952,e=>{"use strict";var t=e.i(549357);e.s(["ArrowDownOutlined",()=>t.default])},473657,e=>{"use strict";var t=e.i(654930);e.s(["ArrowUpOutlined",()=>t.default])},520996,e=>{"use strict";var t=e.i(362237);e.s(["AudioOutlined",()=>t.default])},342458,e=>{"use strict";var t=e.i(65949);e.s(["CalendarOutlined",()=>t.default])},717718,e=>{"use strict";var t=e.i(449995);e.s(["CloseOutlined",()=>t.default])},802240,e=>{"use strict";var t=e.i(636207);e.s(["CopyOutlined",()=>t.default])},371807,e=>{"use strict";var t=e.i(193973);e.s(["DeleteOutlined",()=>t.default])},954942,e=>{"use strict";var t=e.i(881428);e.s(["DownOutlined",()=>t.default])},770042,e=>{"use strict";var t=e.i(198968);e.s(["DownloadOutlined",()=>t.default])},854049,720836,e=>{"use strict";var t=e.i(904896);e.s(["FacebookOutlined",()=>t.default],854049);var r=e.i(451828);e.s(["YoutubeOutlined",()=>r.default],720836)},534825,e=>{"use strict";var t=e.i(962520);e.s(["HomeOutlined",()=>t.default])},622726,e=>{"use strict";var t=e.i(659765);e.s(["MailOutlined",()=>t.default])},739561,e=>{"use strict";var t=e.i(781467);e.s(["MessageOutlined",()=>t.default])},883376,e=>{"use strict";var t=e.i(513875);e.s(["QuestionCircleOutlined",()=>t.default])},177579,e=>{"use strict";var t=e.i(545029);e.s(["ReloadOutlined",()=>t.default])},231372,e=>{"use strict";var t=e.i(690417);e.s(["SearchOutlined",()=>t.default])},825310,e=>{"use strict";var t=e.i(364478);e.s(["UserOutlined",()=>t.default])},884956,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(){return!!("u">typeof window&&window.document&&window.document.createElement)}},825527,(e,t,r)=>{"use strict";e.i(495059),Object.defineProperty(r,"__esModule",{value:!0}),r.useLayoutUpdateEffect=r.default=void 0;var s,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a(void 0);if(t&&t.has(e))return t.get(e);var r={__proto__:null},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=s?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}(e.r(191788));function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}let o=(0,((s=e.r(884956))&&s.__esModule?s:{default:s}).default)()?i.useLayoutEffect:i.useEffect,n=(e,t)=>{let r=i.useRef(!0);o(()=>e(r.current),t),o(()=>(r.current=!1,()=>{r.current=!0}),[])};r.useLayoutUpdateEffect=(e,t)=>{n(t=>{if(!t)return e()},t)},r.default=n}]);