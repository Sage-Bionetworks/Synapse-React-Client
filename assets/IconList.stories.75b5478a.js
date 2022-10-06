import{I as n}from"./IconList.e44c22b6.js";import{j as i}from"./jsx-runtime.0547954a.js";import"./IconSvg.b92ea12f.js";import"./SvgIcon.20c60b09.js";import"./withStyles.5f371c18.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.d59517ea.js";import"./createSvgIcon.13c982df.js";import"./slicedToArray.e72f11da.js";import"./index.9a22ba50.js";import"./iframe.bc1355ce.js";import"./useTheme.f4071482.js";import"./Transition.c74a9bc3.js";import"./makeStyles.68b76b6a.js";import"./InfoOutlined.5164ccbb.js";const L={parameters:{storySource:{source:`import React from 'react'
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
    genomicVariants: { icon: 'gene1' },
    geneExpression: { icon: 'gene2' },
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
    genomicVariants: { icon: 'gene1', color: '#ff0000' },
    geneExpression: { icon: 'gene2', color: 'orange' },
    image: { icon: 'imaging', color: 'yellow' },
    drugCombinationScreen: { icon: 'rat', color: '#00FF00' },
    reload: { icon: 'reload', color: 'blue' },
    check: { icon: 'check', color: '#2E2B5F' },
    kinomics: { icon: 'kinomics', color: '#8B00FF' },
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
`,locationsMap:{"no-color-set":{startLoc:{col:50,line:10},endLoc:{col:80,line:10},startBody:{col:50,line:10},endBody:{col:80,line:10}},"custom-colors":{startLoc:{col:50,line:10},endLoc:{col:80,line:10},startBody:{col:50,line:10},endBody:{col:80,line:10}},"theme-color":{startLoc:{col:50,line:10},endLoc:{col:80,line:10},startBody:{col:50,line:10},endBody:{col:80,line:10}},"theme-color-with-circle-background":{startLoc:{col:50,line:10},endLoc:{col:80,line:10},startBody:{col:50,line:10},endBody:{col:80,line:10}},tooltip:{startLoc:{col:50,line:10},endLoc:{col:80,line:10},startBody:{col:50,line:10},endBody:{col:80,line:10}}}}},title:"UI/IconList",component:n},o=e=>i(n,{...e}),c=o.bind({});c.args={iconConfigs:{genomicVariants:{icon:"gene1"},geneExpression:{icon:"gene2"},image:{icon:"imaging"},drugCombinationScreen:{icon:"rat"},reload:{icon:"reload"},check:{icon:"check"},proteomics:{icon:"proteomics"},kinomics:{icon:"kinomics"}},iconNames:["reload","drugCombinationScreen","proteomics","check"]};const r=o.bind({});r.args={iconConfigs:{genomicVariants:{icon:"gene1",color:"#ff0000"},geneExpression:{icon:"gene2",color:"orange"},image:{icon:"imaging",color:"yellow"},drugCombinationScreen:{icon:"rat",color:"#00FF00"},reload:{icon:"reload",color:"blue"},check:{icon:"check",color:"#2E2B5F"},kinomics:{icon:"kinomics",color:"#8B00FF"}},iconNames:["image","genomicVariants","geneExpression","drugCombinationScreen","reload","check","kinomics"]};const t=o.bind({});t.args={iconConfigs:{drugCombinationScreen:{icon:"rat"},geneExpression:{icon:"geneExpression"}},useTheme:!0,iconNames:["drugCombinationScreen","geneExpression"]};const s=o.bind({});s.args={iconConfigs:{drugCombinationScreen:{icon:"rat"},geneVariants:{icon:"geneVariants"}},useTheme:!0,useBackground:!0,iconNames:["drugCombinationScreen","geneVariants"]};const a=o.bind({});a.args={iconConfigs:{drugCombinationScreen:{icon:"rat",label:"I am a mouse!"},geneExpression:{icon:"geneExpression",label:":-D"}},iconNames:["drugCombinationScreen","geneExpression"]};const y=["NoColorSet","CustomColors","ThemeColor","ThemeColorWithCircleBackground","Tooltip"];export{r as CustomColors,c as NoColorSet,t as ThemeColor,s as ThemeColorWithCircleBackground,a as Tooltip,y as __namedExportsOrder,L as default};
