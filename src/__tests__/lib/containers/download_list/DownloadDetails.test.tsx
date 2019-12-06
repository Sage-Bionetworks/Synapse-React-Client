import * as React from 'react'
import { shallow } from 'enzyme'
import DownloadDetails, {
  DownloadDetailsProps,
} from 'lib/containers/download_list/DownloadDetails'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

describe('it performs all functionality ', () => {
  const fn = require('../../../../lib/utils/functions/testDownloadSpeed')
  fn.testDownloadSpeed = jest.fn().mockReturnValue(20)
  const props: DownloadDetailsProps = {
    numFiles: 3,
    numBytes: 10,
    token: 'token',
  }
  it('renders without crashing', () => {
    const wrapper = shallow(<DownloadDetails {...props} />)
    expect(wrapper).toBeDefined()
  })
  it('renders with all the values set', () => {
    const wrapper = shallow(<DownloadDetails {...props} />)
    expect(
      wrapper
        .find(FontAwesomeIcon)
        .at(0)
        .props().className,
    ).toEqual('SRC-primary-text-color')
  })
  it('renders with all the fields nulled out', () => {
    const wrapper = shallow(<DownloadDetails {...{ ...props, numFiles: 0 }} />)
    expect(
      wrapper
        .find(FontAwesomeIcon)
        .at(0)
        .props().className,
    ).toEqual('SRC-inactive')
  })
})
