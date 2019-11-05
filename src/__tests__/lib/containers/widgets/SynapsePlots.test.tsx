import * as React from 'react'
import { mount } from 'enzyme'
import MarkdownSynapse from '../../../../lib/containers/MarkdownSynapse'
import SynapsePlot from '../../../../lib/containers/widgets/SynapsePlot'

describe('renders without crashing', () => {
  it('renders', async () => {
    const tree = await mount(
      <MarkdownSynapse
        markdown={
          '${plot?query=select "Age"%2C "Insol" from syn9872596&title=&type=BAR&barmode=GROUP&horizontal=false&showlegend=true}'
        }
      />,
    )
    expect(tree.find(SynapsePlot)).toBeDefined()
  })
})
