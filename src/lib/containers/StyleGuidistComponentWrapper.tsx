import * as React from 'react';
import { MemoryRouter } from 'react-router';
import RenderIfInView from './RenderIfInView';

export default class StyleGuidistComponentWrapper extends React.Component {
  public render() {
    return <MemoryRouter><RenderIfInView>{this.props.children}</RenderIfInView></MemoryRouter>
  }
}