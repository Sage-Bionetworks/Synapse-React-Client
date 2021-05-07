import * as React from 'react'
import DownloadDetails, {
  DownloadDetailsProps,
} from '../../../../lib/containers/download_list/DownloadDetails'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'

describe('it performs all functionality ', () => {
  let container: HTMLDivElement
  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })
  afterEach(() => {
    document.body.removeChild(container!)
    // @ts-ignore
    container = null
  })

  const fn = require('../../../../lib/utils/functions/testDownloadSpeed')
  const SynapseClient = require('../../../../lib/utils/SynapseClient')
  fn.testDownloadSpeed = jest.fn().mockResolvedValue(20)
  SynapseClient.isSignedIn = jest.fn().mockReturnValue(true)
  const props: DownloadDetailsProps = {
    numFiles: 3,
    numBytes: 10,
  }
  it('renders without crashing', async () => {
    await act(async () => {
      ReactDOM.render(<DownloadDetails {...props} />, container)
    })
    const wrapper = container.querySelector<HTMLDivElement>('span')
    expect(wrapper).toBeDefined()
  })
  it('renders with all the values set', async () => {
    await act(async () => {
      ReactDOM.render(<DownloadDetails {...props} />, container)
    })
    expect(
      container.querySelectorAll('svg.SRC-primary-text-color'),
    ).toHaveLength(3)
  })
  it('renders with all the fields nulled out', async () => {
    await act(async () => {
      ReactDOM.render(
        <DownloadDetails {...{ ...props, numFiles: 0 }} />,
        container,
      )
    })
    expect(container.querySelectorAll('svg.SRC-inactive')).toHaveLength(3)
  })
})
