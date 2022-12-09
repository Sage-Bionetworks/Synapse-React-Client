import{I as i}from"./IconSvg.710ae2ef.js";import{D as l}from"./DropdownMenu.7937d352.js";import{a as s,j as o}from"./jsx-runtime.43a8fcf9.js";import{B as m}from"./Box.2b787467.js";import{a as u}from"./Tooltip.9e1c2716.js";import{I as d}from"./IconButton.f195eccf.js";function n(r){const{iconButtons:t=[],dropdownMenus:p=[]}=r;return s(m,{sx:{display:"flex",alignItems:"center",gap:"10px"},children:[t.map(e=>o(u,{title:e.tooltipText,placement:"top",children:o("span",{children:o(d,{color:"primary",disabled:e.disabled,onClick:e.onClick,children:o(i,{icon:e.icon,wrap:!1})})})},e.tooltipText)),p.map((e,a)=>o(l,{...e},a))]})}try{n.displayName="ComplexMenu",n.__docgenInfo={description:`The ComplexMenu component allows you to create a generic menu with
icon buttons and multiple dropdown menus that contain groups of items.`,displayName:"ComplexMenu",props:{iconButtons:{defaultValue:null,description:"",name:"iconButtons",required:!1,type:{name:"IconButtonConfiguration[]"}},dropdownMenus:{defaultValue:null,description:"",name:"dropdownMenus",required:!1,type:{name:"DropdownMenuProps[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/menu/ComplexMenu.tsx#ComplexMenu"]={docgenInfo:n.__docgenInfo,name:"ComplexMenu",path:"src/lib/containers/menu/ComplexMenu.tsx#ComplexMenu"})}catch{}export{n as C};
