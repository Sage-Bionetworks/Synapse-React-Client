import{r as a,j as i,F as d}from"./jsx-runtime.ed0bc2e8.js";import{I as c}from"./react-intersection-observer.esm.94964140.js";import"./iframe.1c77586e.js";class t extends a.exports.Component{constructor(o){super(o),this.getObserverChildren=e=>{const{renderInView:s,renderOutOfView:l}=this.props;return(e.inView||this.state.hasBeenInView)&&s?s():!e.inView&&l?l():null},this.onVisibilityChange=e=>{e?(this.setState({hasBeenInView:!0}),this.props.onEnterView&&this.props.onEnterView()):this.props.onLeaveView&&this.props.onLeaveView()},this.state={hasBeenInView:!1}}render(){const{rootMargin:o,tag:e}=this.props;return i(c,{as:e||"div",rootMargin:o,onChange:this.onVisibilityChange,children:this.getObserverChildren})}}try{t.displayName="VisibilityObserver",t.__docgenInfo={description:"VisibilityObserver uses the IntersectionObserver API to allow conditional child rendering and callbacks based\non viewport visibility. It will render the `renderOutOfView` prop until it is scrolled into view, then will\nalways render the `renderInView` prop instead. Callbacks will always be triggered on visibility changes.",displayName:"VisibilityObserver",props:{onEnterView:{defaultValue:null,description:"A callback which will be triggered when the component is scrolled into view.",name:"onEnterView",required:!1,type:{name:"(() => void)"}},onLeaveView:{defaultValue:null,description:"A callback which will be triggered when the component is scrolled out of view.",name:"onLeaveView",required:!1,type:{name:"(() => void)"}},renderInView:{defaultValue:null,description:`Render prop to return child content when the component is visible in the viewport. Once the component
has been in view it will always use this render prop, even when scrolled back out of view.`,name:"renderInView",required:!1,type:{name:"(() => ReactNode)"}},renderOutOfView:{defaultValue:null,description:"Render prop to return child content before the component becomes visible in the viewport.",name:"renderOutOfView",required:!1,type:{name:"(() => ReactNode)"}},tag:{defaultValue:{value:"'div'"},description:"Wrapper element tag name.",name:"tag",required:!1,type:{name:"string"}},rootMargin:{defaultValue:null,description:`A CSS margin string which pushes the intersection boundary further in or out of the viewport.
A positive value will expand the viewport threshold so your component is considered "in view" while it's
still offscreen, for example you could set thresholdOffset="200px" you want an image to start loading before
it scrolls into view. A negative value will move the boundary into the viewport, triggering "in view" after
it's already becoming visible.
"200px", "200px 0 50px 0", "-50px" are all valid values.`,name:"rootMargin",required:!1,type:{name:"string"}},className:{defaultValue:null,description:'One or more class names to be added to the root element of this component, i.e.\n`"class-one class-two"`.',name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/VisibilityObserver.tsx#VisibilityObserver"]={docgenInfo:t.__docgenInfo,name:"VisibilityObserver",path:"src/lib/containers/VisibilityObserver.tsx#VisibilityObserver"})}catch{}class n extends a.exports.Component{constructor(){super(...arguments),this.getChildren=()=>i(d,{children:this.props.children})}render(){return i(t,{renderInView:this.getChildren})}}try{n.displayName="RenderIfInView",n.__docgenInfo={description:"",displayName:"RenderIfInView",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/RenderIfInView.tsx#RenderIfInView"]={docgenInfo:n.__docgenInfo,name:"RenderIfInView",path:"src/lib/containers/RenderIfInView.tsx#RenderIfInView"})}catch{}const m={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import RenderIfInView from './RenderIfInView'

export default {
  title: 'Components/RenderIfInView',
  component: RenderIfInView,
} as ComponentMeta<typeof RenderIfInView>

const Template: ComponentStory<typeof RenderIfInView> = args => (
  <RenderIfInView>
    <div
      style={{ backgroundColor: '#adedba', transition: 'background-color 1s' }}
    >
      RenderIfInView uses the IntersectionObserver API to allow conditional
      child rendering and callbacks based on viewport visibility. It will render
      children when it's scrolled into view.
    </div>
  </RenderIfInView>
)

export const Demo = Template.bind({})
`,locationsMap:{demo:{startLoc:{col:56,line:10},endLoc:{col:1,line:20},startBody:{col:56,line:10},endBody:{col:1,line:20}}}}},title:"Components/RenderIfInView",component:n},p=r=>i(n,{children:i("div",{style:{backgroundColor:"#adedba",transition:"background-color 1s"},children:"RenderIfInView uses the IntersectionObserver API to allow conditional child rendering and callbacks based on viewport visibility. It will render children when it's scrolled into view."})}),I=p.bind({}),b=["Demo"];export{I as Demo,b as __namedExportsOrder,m as default};
