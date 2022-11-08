import{I as o}from"./IconList.447b5f75.js";import{j as i}from"./jsx-runtime.e755df9d.js";import"./IconSvg.0451ffde.js";import"./SvgIcon.26fd4209.js";import"./styled.134e90bd.js";import"./Tooltip.68fb53f0.js";import"./createSvgIcon.4e7dae8f.js";import"./utils.61686747.js";import"./index.46e2a3d6.js";import"./iframe.2151c0e3.js";import"./InfoOutlined.f6c28811.js";const S={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import IconList from './IconList'

export default {
  title: 'UI/IconList',
  component: IconList,
} as ComponentMeta<typeof IconList>

const Template: ComponentStory<typeof IconList> = args => <IconList {...args} />

export const NoColorSet = Template.bind({})
NoColorSet.args = {
  iconConfigs: {
    genomicVariants: { icon: 'geneVariants' },
    geneExpression: { icon: 'geneExpression' },
    image: { icon: 'imaging' },
    drugCombinationScreen: { icon: 'rat' },
    reload: { icon: 'reload' },
    check: { icon: 'check' },
    proteomics: { icon: 'proteomics' },
    kinomics: { icon: 'kinomics' },
  },
  iconNames: ['reload', 'drugCombinationScreen', 'proteomics', 'check'],
}

export const CustomColors = Template.bind({})
CustomColors.args = {
  iconConfigs: {
    genomicVariants: {
      icon: 'geneVariants',
      sx: {
        color: '#ff0000',
      },
    },
    geneExpression: {
      icon: 'geneExpression',
      sx: {
        color: 'orange',
      },
    },
    image: { icon: 'imaging', sx: { color: 'yellow' } },
    drugCombinationScreen: { icon: 'rat', sx: { color: '#00FF00' } },
    reload: { icon: 'reload', sx: { color: 'blue' } },
    check: { icon: 'check', sx: { color: '#2E2B5F' } },
    kinomics: { icon: 'kinomics', sx: { color: '#8B00FF' } },
  },
  iconNames: [
    'image',
    'genomicVariants',
    'geneExpression',
    'drugCombinationScreen',
    'reload',
    'check',
    'kinomics',
  ],
}

export const ThemeColor = Template.bind({})
ThemeColor.args = {
  iconConfigs: {
    drugCombinationScreen: { icon: 'rat' },
    geneExpression: { icon: 'geneExpression' },
  },
  useTheme: true,
  iconNames: ['drugCombinationScreen', 'geneExpression'],
}

export const ThemeColorWithCircleBackground = Template.bind({})
ThemeColorWithCircleBackground.args = {
  iconConfigs: {
    drugCombinationScreen: { icon: 'rat' },
    geneVariants: { icon: 'geneVariants' },
  },
  useTheme: true,
  useBackground: true,
  iconNames: ['drugCombinationScreen', 'geneVariants'],
}

export const Tooltip = Template.bind({})
Tooltip.args = {
  iconConfigs: {
    drugCombinationScreen: { icon: 'rat', label: 'I am a mouse!' },
    geneExpression: { icon: 'geneExpression', label: ':-D' },
  },
  iconNames: ['drugCombinationScreen', 'geneExpression'],
}
`,locationsMap:{"no-color-set":{startLoc:{col:50,line:10},endLoc:{col:80,line:10},startBody:{col:50,line:10},endBody:{col:80,line:10}},"custom-colors":{startLoc:{col:50,line:10},endLoc:{col:80,line:10},startBody:{col:50,line:10},endBody:{col:80,line:10}},"theme-color":{startLoc:{col:50,line:10},endLoc:{col:80,line:10},startBody:{col:50,line:10},endBody:{col:80,line:10}},"theme-color-with-circle-background":{startLoc:{col:50,line:10},endLoc:{col:80,line:10},startBody:{col:50,line:10},endBody:{col:80,line:10}},tooltip:{startLoc:{col:50,line:10},endLoc:{col:80,line:10},startBody:{col:50,line:10},endBody:{col:80,line:10}}}}},title:"UI/IconList",component:o},n=e=>i(o,{...e}),c=n.bind({});c.args={iconConfigs:{genomicVariants:{icon:"geneVariants"},geneExpression:{icon:"geneExpression"},image:{icon:"imaging"},drugCombinationScreen:{icon:"rat"},reload:{icon:"reload"},check:{icon:"check"},proteomics:{icon:"proteomics"},kinomics:{icon:"kinomics"}},iconNames:["reload","drugCombinationScreen","proteomics","check"]};const r=n.bind({});r.args={iconConfigs:{genomicVariants:{icon:"geneVariants",sx:{color:"#ff0000"}},geneExpression:{icon:"geneExpression",sx:{color:"orange"}},image:{icon:"imaging",sx:{color:"yellow"}},drugCombinationScreen:{icon:"rat",sx:{color:"#00FF00"}},reload:{icon:"reload",sx:{color:"blue"}},check:{icon:"check",sx:{color:"#2E2B5F"}},kinomics:{icon:"kinomics",sx:{color:"#8B00FF"}}},iconNames:["image","genomicVariants","geneExpression","drugCombinationScreen","reload","check","kinomics"]};const s=n.bind({});s.args={iconConfigs:{drugCombinationScreen:{icon:"rat"},geneExpression:{icon:"geneExpression"}},useTheme:!0,iconNames:["drugCombinationScreen","geneExpression"]};const t=n.bind({});t.args={iconConfigs:{drugCombinationScreen:{icon:"rat"},geneVariants:{icon:"geneVariants"}},useTheme:!0,useBackground:!0,iconNames:["drugCombinationScreen","geneVariants"]};const a=n.bind({});a.args={iconConfigs:{drugCombinationScreen:{icon:"rat",label:"I am a mouse!"},geneExpression:{icon:"geneExpression",label:":-D"}},iconNames:["drugCombinationScreen","geneExpression"]};const E=["NoColorSet","CustomColors","ThemeColor","ThemeColorWithCircleBackground","Tooltip"];export{r as CustomColors,c as NoColorSet,s as ThemeColor,t as ThemeColorWithCircleBackground,a as Tooltip,E as __namedExportsOrder,S as default};
