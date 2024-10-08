import{j as l}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const n=({label:e="Button",size:t="default",type:s="solid",color:r="primary",iconLeft:a,iconRight:u,disabled:c=!1,onClick:f})=>{const m=`button ${t} ${s} ${r} ${c?"disabled":""}`;return l.jsxs("button",{className:m,onClick:f,disabled:c,children:[a&&l.jsx("span",{className:"icon-left",children:a}),e&&l.jsx("span",{className:"label",children:e}),u&&l.jsx("span",{className:"icon-right",children:u})]})};n.__docgenInfo={description:"",methods:[],displayName:"Button",props:{label:{defaultValue:{value:"'Button'",computed:!1},required:!1},size:{defaultValue:{value:"'default'",computed:!1},required:!1},type:{defaultValue:{value:"'solid'",computed:!1},required:!1},color:{defaultValue:{value:"'primary'",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const h={title:"Components/Button",component:n,argTypes:{label:{control:"text",defaultValue:"Button"},size:{control:"select",options:["xlarge","large","default","small","xsmall"],defaultValue:"default"},type:{control:"select",options:["solid","outline","text-only"],defaultValue:"solid"},color:{control:"select",options:["primary","grey","success","danger","warning"],defaultValue:"primary"},disabled:{control:"boolean",defaultValue:!1},iconLeft:{control:"text",defaultValue:""},iconRight:{control:"text",defaultValue:""}}},y=e=>l.jsx(n,{...e}),g=["xlarge","large","default","small","xsmall"],x=["solid","outline","text-only"],b=["primary","grey","success","danger","warning"],o=g.flatMap(e=>x.flatMap(t=>b.map(s=>{const r=`${e} ${t} ${s}`.replace(/ /g,"_"),a=y.bind({});return a.args={label:"Button",size:e,type:t,color:s,iconLeft:"👈",iconRight:"👉",disabled:!1},{[r]:a}}))).reduce((e,t)=>({...e,...t}),{});var d,i,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`sizes.flatMap(size => types.flatMap(type => colors.map(color => {
  const storyName = \`\${size} \${type} \${color}\`.replace(/ /g, '_');
  const story = Template.bind({});
  story.args = {
    label: 'Button',
    size,
    type,
    color,
    iconLeft: '👈',
    iconRight: '👉',
    disabled: false
  };
  return {
    [storyName]: story
  };
}))).reduce((acc, cur) => ({
  ...acc,
  ...cur
}), {})`,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const B=["Playground"];export{o as Playground,B as __namedExportsOrder,h as default};
