import * as React from 'react'
import { mount } from 'enzyme'
import * as GenericCardPackage from '../../../lib/containers/GenericCard'
import GenericCard, {
  GenericCardProps,
  GenericCardSchema,
  CARD_SHORT_DESCRIPTION_CSS,
} from '../../../lib/containers/GenericCard'
import * as Utils from '../../../lib/containers/row_renderers/utils'
import {
  CardLink,
  LabelLinkConfig,
  MarkdownValue,
} from '../../../lib/containers/CardContainerLogic'
import MarkdownSynapse from 'lib/containers/MarkdownSynapse'
import {
  SelectColumn,
  EntityColumnType,
  FileHandleAssociateType,
  ColumnType,
} from 'lib/utils/synapseTypes'

const createShallowComponent = (props: GenericCardProps) => {
  const wrapper = mount(<GenericCard {...props} />)
  const instance = wrapper.instance()
  return { wrapper, instance }
}

describe('it renders the UI correctly', () => {
  const iconOptions = {
    'AMP-AD': 'MOCKED_IMG_SVG_STRING',
  }

  const subTitleColumnName = 'subTitle'
  const labelOneColumnName = 'labelOne'

  const commonProps = {
    type: 'PROGRAM',
    title: 'title',
    subTitle: subTitleColumnName,
    description: 'description',
    icon: 'icon',
    link: 'link',
  }
  const genericCardSchema: GenericCardSchema = {
    ...commonProps,
    secondaryLabels: [labelOneColumnName, 'labelTwo', 'labelThree'],
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
    selectColumns: [],
    columnModels: [],
    tableEntityType: '',
    tableId: '',
  }

  const propsForHeaderMode: GenericCardProps = {
    data,
    iconOptions,
    schema,
    genericCardSchema: genericCardSchemaHeader,
    backgroundColor: 'purple',
    isHeader: true,
    selectColumns: [],
    columnModels: [],
    tableEntityType: '',
    tableId: '',
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
  const getTitleParams = GenericCard.prototype.getTitleParams
  const SELF = '_self'
  const BLANK = '_blank'

  it('creates a link to synapse', () => {
    const synId = 'syn12345678'
    const synLink = `https://www.synapse.org/#!Synapse:${synId}`
    const { href, target } = getTitleParams(
      synId,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    )
    expect(href).toEqual(synLink)
    expect(target).toEqual(SELF)
  })

  it('creates a DOI link ', () => {
    const doi = '10.1093/neuonc/noy046'
    const doiLink = `https://dx.doi.org/${doi}`
    const { href, target } = getTitleParams(
      doi,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    )
    expect(href).toEqual(doiLink)
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
    const { href, target } = getTitleParams(
      '',
      titleLinkConfig,
      data,
      schema,
      undefined,
      undefined,
      undefined,
      undefined,
    )
    expect(href).toEqual(expectedLink)
    expect(target).toEqual(SELF)
  })

  describe.only('creates a link for a file handle ', () => {
    const FILE_HANDLE_COLUMN_TYPE = ColumnType.FILEHANDLEID
    it('creates a link for a file handle inside a file view', () => {
      const id = '123'
      const schema = {
        id: 0,
      }
      const data = [id]
      const value = 'link'
      const token = 'token'
      const { titleOnClick } = getTitleParams(
        value,
        undefined,
        data,
        schema,
        FILE_HANDLE_COLUMN_TYPE,
        'EntityView',
        id,
        token,
      )
      expect(titleOnClick).toBeDefined()

      // mock function call
      const mockEntityCall = jest.fn()
      const SynapseClient = require('../../../lib/utils/SynapseClient')
      SynapseClient.getActualFileHandleByIdURL = mockEntityCall

      titleOnClick!()
      expect(mockEntityCall).toHaveBeenCalledWith(
        value,
        token,
        FileHandleAssociateType.FileEntity,
        id,
        false,
      )
    })

    it.only('creates a link for a file handle inside a table', () => {
      const id = '123'
      const schema = {
        id: 0,
      }
      const data = [id]
      const value = 'link'
      const token = 'token'
      const { titleOnClick } = getTitleParams(
        value,
        undefined,
        data,
        schema,
        FILE_HANDLE_COLUMN_TYPE,
        'Table',
        id,
        token,
      )
      expect(titleOnClick).toBeDefined()

      // mock function call
      const mockEntityCall = jest.fn()
      const SynapseClient = require('../../../lib/utils/SynapseClient')
      SynapseClient.getActualFileHandleByIdURL = mockEntityCall

      titleOnClick!()
      expect(mockEntityCall).toHaveBeenCalledWith(
        value,
        token,
        FileHandleAssociateType.TableEntity,
        id,
        false,
      )
    })
  })
})

describe('it makes the correct URL for the secondary labels', () => {
  const renderLabel = GenericCardPackage.renderLabel
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
  const selectColumns: SelectColumn[] = [
    {
      columnType: EntityColumnType.STRING,
      id: 'a',
      name: 'dataset',
    },
  ]

  it('works with a single value', () => {
    const value = 'syn1234567'
    const wrapper = mount(
      <>
        {renderLabel({
          value,
          labelLink: labelLinkConfig[0],
          isHeader: false,
          selectColumns: selectColumns,
          columnModels: undefined,
          columnName: DATASETS,
        })}
      </>,
    )
    const link = wrapper.find('a')
    expect(link).toHaveLength(1)
    expect(link.props().href).toEqual(`/${datasetBaseURL}?${DATASETS}=${value}`)
    // double check the style
    expect(link.hasClass(`SRC-primary-text-color`)).toBeTruthy()
  })

  it('works with a header', () => {
    const value = 'syn1234567'
    const wrapper = mount(
      <>
        {renderLabel({
          value,
          labelLink: labelLinkConfig[0],
          isHeader: true,
          selectColumns,
          columnModels: undefined,
          columnName: DATASETS,
        })}
      </>,
    )
    const link = wrapper.find('a')
    expect(link).toHaveLength(1)
    expect(link.hasClass(`SRC-lightLink`)).toBeTruthy()
  })

  it('works with a multi string value', () => {
    // add commas to ensure its not piecing those out
    const val1 = 'syn12,,34567'
    const val2 = 'syn1234,568'
    const val3 = 'syn,,12345,69'
    const value = `["${val1}","${val2}","${val3}"]`
    const wrapper = mount(
      <>
        {renderLabel({
          value,
          labelLink: labelLinkConfig[0],
          isHeader: false,
          selectColumns: [
            {
              columnType: EntityColumnType.STRING_LIST,
              id: 'a',
              name: DATASETS,
            },
          ],
          columnModels: undefined,
          columnName: DATASETS,
        })}
      </>,
    )
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

  it('works with a comma seperated value', () => {
    const val1 = 'syn1234567'
    const val2 = 'syn1234568'
    const val3 = 'syn1234569'
    const value = `${val1},${val2},${val3}`
    const wrapper = mount(
      <>
        {renderLabel({
          value,
          labelLink: labelLinkConfig[0],
          isHeader: false,
          selectColumns,
          columnModels: undefined,
          columnName: DATASETS,
        })}{' '}
      </>,
    )
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
      <>
        {renderLabel({
          value,
          labelLink: labelLinkConfig[1],
          isHeader: false,
          selectColumns: undefined,
          columnModels: undefined,
          columnName: '',
        })}{' '}
      </>,
    )
    const markdown = wrapper.find(MarkdownSynapse)
    expect(markdown).toHaveLength(1)
    // double check the html elements show up correctly from the markdown component
    expect(markdown.html().includes('<p>')).toBeFalsy()
    expect(markdown.html().includes('<a href=')).toBeTruthy()
  })

  it('works with a multi string markdown link ', async () => {
    const selectColumnsMultiString: SelectColumn[] = [
      {
        name: DATASETS,
        id: 'a',
        columnType: EntityColumnType.STRING_LIST,
      },
    ]
    // make sure it doesn't parse out the extra commas
    const value =
      '["[link],,(www.synapse.org)","[link2](w,,ww.synapse.org/#!)"]'
    const wrapper = await mount(
      <>
        {renderLabel({
          value,
          labelLink: labelLinkConfig[1],
          isHeader: false,
          selectColumns: selectColumnsMultiString,
          columnModels: undefined,
          columnName: DATASETS,
        })}
      </>,
    )
    const markdown = wrapper.find(MarkdownSynapse)
    expect(markdown).toHaveLength(2)
  })
})

describe('It renders markdown for the description', () => {
  const renderShortDescription = GenericCard.prototype.renderShortDescription
  const renderLongDescription = GenericCard.prototype.renderLongDescription
  const descriptionLinkConfig: MarkdownValue = {
    isMarkdown: true,
  }
  const value = '# header [website](synapse.org)'

  it('hides the short description if MarkdownValue is specified', () => {
    const wrapper = mount(
      <>{renderShortDescription(value, false, '', descriptionLinkConfig)} </>,
    )
    expect(wrapper.find(<div />)).toHaveLength(0)
  })
  it('shows the short description if MarkdownValue is not specified', () => {
    const wrapper = mount(
      <>{renderShortDescription(value, false, '', undefined)} </>,
    )
    expect(wrapper.find('div')).toHaveLength(1)
  })
  it('hides the short description if MarkdownValue is specified', () => {
    const wrapper = mount(
      <>{renderLongDescription(value, false, '', descriptionLinkConfig)} </>,
    )
    expect(wrapper.find(MarkdownSynapse)).toHaveLength(1)
    expect(wrapper.find(MarkdownSynapse).props().markdown).toEqual(value)
  })
})
