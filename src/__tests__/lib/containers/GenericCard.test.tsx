import * as React from 'react'
import { mount } from 'enzyme'
import CardContainer from '../../../lib/containers/CardContainer'
import GenericCard, {
  GenericCardProps,
  GenericCardSchema,
  CARD_SHORT_DESCRIPTION_CSS,
} from '../../../lib/containers/GenericCard'
import * as Utils from '../../../lib/containers/row_renderers/utils'
import {
  CardLink,
  LabelLinkConfig,
} from '../../../lib/containers/CardContainerLogic'
import MarkdownSynapse from 'lib/containers/MarkdownSynapse'

const createShallowComponent = (props: GenericCardProps) => {
  const wrapper = mount(<GenericCard {...props} />)
  const instance = wrapper.instance() as CardContainer
  return { wrapper, instance }
}

describe('it renders the UI correctly', () => {
  const iconOptions = {
    'AMP-AD': 'MOCKED_IMG_SVG_STRING',
  }

  const commonProps = {
    type: 'PROGRAM',
    title: 'title',
    subTitle: 'subtitle',
    description: 'description',
    icon: 'icon',
    link: 'link',
  }
  const genericCardSchema: GenericCardSchema = {
    ...commonProps,
    secondaryLabels: ['labelOne', 'labelTwo', 'labelThree'],
  }
  const genericCardSchemaHeader: GenericCardSchema = {
    ...commonProps,
  }
  const schema = {
    title: 0,
    subTitle: 1,
    description: 2,
    icon: 3,
    labelOne: 4,
    labelTwo: 5,
    link: 6,
    labelThree: 7,
  }

  const MOCKED_TITLE = 'MOCKED TITLE'
  const MOCKED_SUBTITLE = 'MOCKED SUBTITLE'
  const MOCKED_DESCRIPTION = 'MOCKED DESCRIPTION'
  const MOCKED_ICON = 'AMP-AD'
  const MOCKED_LABELONE = 'MOCKED_LABELONE'
  const MOCKED_LABELTWO = 'MOCKED_LABELONE'
  const MOCKED_LINK = 'MOCKED_LINK'

  const data = [
    MOCKED_TITLE,
    MOCKED_SUBTITLE,
    MOCKED_DESCRIPTION,
    MOCKED_ICON,
    MOCKED_LABELONE,
    MOCKED_LABELTWO,
    MOCKED_LINK,
  ]

  const propsForNonHeaderMode: GenericCardProps = {
    data,
    genericCardSchema,
    schema,
    secondaryLabelLimit: 3,
  }

  const propsForHeaderMode: GenericCardProps = {
    data,
    iconOptions,
    schema,
    genericCardSchema: genericCardSchemaHeader,
    backgroundColor: 'purple',
    isHeader: true,
  }

  it('renders without crashing in non header mode', () => {
    const { wrapper } = createShallowComponent(propsForNonHeaderMode)
    expect(wrapper).toBeDefined()
  })

  it('renders the correct UI in non header mode', () => {
    const { wrapper } = createShallowComponent(propsForNonHeaderMode)
    expect(wrapper.find('img')).toBeDefined()
    expect(wrapper.find('div.SRC-type').text()).toEqual(commonProps.type)
    expect(wrapper.find('a.SRC-primary-text-color').text()).toEqual(data[0])
    expect(wrapper.find(`.${CARD_SHORT_DESCRIPTION_CSS}`).text()).toEqual(
      MOCKED_DESCRIPTION,
    )
    expect(wrapper.find(Utils.CardFooter)).toBeDefined()
  })

  it('renders as a Header without crashing', () => {
    const { wrapper } = createShallowComponent(propsForHeaderMode)
    expect(wrapper).toBeDefined()
    expect(wrapper.find('img').prop('src')).toEqual(iconOptions['AMP-AD'])
    expect(wrapper.find('div.SRC-type').text()).toEqual(commonProps.type)
    expect(wrapper.find('h3').text()).toEqual(data[0])
    expect(wrapper.find(Utils.ShowMore)).toHaveLength(0)
    expect(wrapper.find('.SRC-font-size-base').text()).toEqual(data[2])
    expect(wrapper.find(Utils.CardFooter)).toHaveLength(1)
  })

  it.skip('renders the query handles corretly', () => {
    const { wrapper } = createShallowComponent(propsForHeaderMode)
    expect(wrapper.find(`[data-search-handle]`).text()).toEqual(
      commonProps.title,
    )
  })
})

describe('it makes the correct URL for the title', () => {
  const createTitleLink = GenericCard.prototype.renderTitleLink
  const SELF = '_self'
  const BLANK = '_blank'

  it('creates a link to synapse', () => {
    const synId = 'syn12345678'
    const synLink = `https://www.synapse.org/#!Synapse:${synId}`
    const { linkDisplay, target } = createTitleLink(synId)
    expect(linkDisplay).toEqual(synLink)
    expect(target).toEqual(SELF)
  })

  it('creates a DOI link ', () => {
    const doi = '10.1093/neuonc/noy046'
    const doiLink = `https://dx.doi.org/${doi}`
    const { linkDisplay, target } = createTitleLink(doi)
    expect(linkDisplay).toEqual(doiLink)
    expect(target).toEqual(BLANK)
  })

  it('creates an internal parameterized link', () => {
    const value = '1234'
    const data = [value]
    const URLColumnName = 'Grant Number'
    const matchColumnName = 'Funder'
    const schema = {
      [matchColumnName]: 0,
    }
    const titleLinkConfig: CardLink = {
      isMarkdown: false,
      baseURL: 'Explore/Projects',
      matchColumnName,
      URLColumnName,
    }
    const expectedLink = `/${titleLinkConfig.baseURL}?${URLColumnName}=${value}`
    const { linkDisplay, target } = createTitleLink(
      '',
      titleLinkConfig,
      data,
      schema,
    )
    expect(linkDisplay).toEqual(expectedLink)
    expect(target).toEqual(SELF)
  })
})

describe('it makes the correct URL for the secondary labels', () => {
  const renderLabel = GenericCard.prototype.renderLabel
  const DATASETS = 'datasets'
  const datasetBaseURL = 'Explore/Datasets'
  const labelLinkConfig: LabelLinkConfig = [
    {
      isMarkdown: false,
      baseURL: datasetBaseURL,
      URLColumnName: DATASETS,
      matchColumnName: 'dataset',
    },
    {
      isMarkdown: true,
      matchColumnName: 'dataset',
    },
  ]

  it('works with a single value', () => {
    const value = 'syn1234567'
    const wrapper = mount(<>{renderLabel(value, labelLinkConfig[0], false)} </>)
    const link = wrapper.find('a')
    expect(link).toHaveLength(1)
    expect(link.props().href).toEqual(
      `/${datasetBaseURL}?${DATASETS}=${value}`,
    )
    // double check the style
    expect(link.hasClass(`SRC-primary-text-color`)).toBeTruthy()
  })

  it('works with a header', () => {
    const value = 'syn1234567'
    const wrapper = mount(<>{renderLabel(value, labelLinkConfig[0], true)} </>)
    const link = wrapper.find('a')
    expect(link).toHaveLength(1)
    expect(link.hasClass(`SRC-lightLink`)).toBeTruthy()
  })

  it('works with a comma seperated value', () => {
    const val1 = 'syn1234567'
    const val2 = 'syn1234568'
    const val3 = 'syn1234569'
    const value = `${val1},${val2},${val3}`
    const wrapper = mount(<>{renderLabel(value, labelLinkConfig[0], false)} </>)
    const links = wrapper.find('a')
    expect(links).toHaveLength(3)
    expect(links.at(0).props().href).toEqual(
      `/${datasetBaseURL}?${DATASETS}=${val1}`,
    )
    expect(links.at(1).props().href).toEqual(
      `/${datasetBaseURL}?${DATASETS}=${val2}`,
    )
    expect(links.at(2).props().href).toEqual(
      `/${datasetBaseURL}?${DATASETS}=${val3}`,
    )
  })

  it('works with a markdown link ', async () => {
    const value = '[link](www.synapse.org)'
    const wrapper = await mount(
      <>{renderLabel(value, labelLinkConfig[1], false)} </>,
    )
    const markdown = wrapper.find(MarkdownSynapse)
    expect(markdown).toHaveLength(1)
    // double check the html elements show up correctly from the markdown component
    expect(markdown.html().includes('<p>')).toBeFalsy()
    expect(markdown.html().includes('<a href=')).toBeTruthy()
  })
})
