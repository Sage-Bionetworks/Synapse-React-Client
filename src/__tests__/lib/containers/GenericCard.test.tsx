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
import MarkdownSynapse from '../../../lib/containers/MarkdownSynapse'
import {
  SelectColumn,
  EntityColumnType,
  ColumnType,
} from '../../../lib/utils/synapseTypes'
import { FileHandleLink } from '../../../lib/containers/widgets/FileHandleLink'
import { ImageFileHandle } from '../../../lib/containers/widgets/ImageFileHandle'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import UserCard from '../../../lib/containers/UserCard'
import { SynapseTestContext } from '../../../mocks/MockSynapseContext'

const renderComponent = (props: GenericCardProps) => {
  const wrapper = mount(<GenericCard {...props} />, {
    wrappingComponent: SynapseTestContext,
  })
  const instance = wrapper.instance() as GenericCard
  return { wrapper, instance }
}

mockAllIsIntersecting(true)

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
    secondaryLabels: [labelOneColumnName, 'labelTwo'],
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
    id: 7,
    image: 8,
    userIdList: 9,
  }

  const MOCKED_TITLE = 'MOCKED TITLE'
  const MOCKED_SUBTITLE = 'MOCKED SUBTITLE'
  const MOCKED_DESCRIPTION = 'MOCKED DESCRIPTION'
  const MOCKED_ICON = 'AMP-AD'
  const MOCKED_LABELONE = 'MOCKED_LABELONE'
  const MOCKED_LABELTWO = 'MOCKED_LABELONE'
  const MOCKED_LINK = 'MOCKED_LINK'
  const MOCKED_ID = 'MOCKED_ID'
  const MOCKED_IMAGE_FILE_HANDLE_ID = 'MOCKED_IMAGE_FILE_HANDLE_ID'
  const MOCKED_USER_ID = '[12345]'

  const data = [
    MOCKED_TITLE,
    MOCKED_SUBTITLE,
    MOCKED_DESCRIPTION,
    MOCKED_ICON,
    MOCKED_LABELONE,
    MOCKED_LABELTWO,
    MOCKED_LINK,
    MOCKED_ID,
    MOCKED_IMAGE_FILE_HANDLE_ID,
    MOCKED_USER_ID,
  ]

  const propsForNonHeaderMode: GenericCardProps = {
    data,
    genericCardSchema,
    schema,
    secondaryLabelLimit: 3,
    selectColumns: [],
    columnModels: [],
    tableEntityConcreteType: '',
    tableId: '',
  }

  const propsForHeaderMode: GenericCardProps = {
    data,
    iconOptions,
    schema,
    genericCardSchema: genericCardSchemaHeader,
    isHeader: true,
    selectColumns: [],
    columnModels: [],
    tableEntityConcreteType: '',
    tableId: '',
  }

  it('renders without crashing in non header mode', () => {
    const { wrapper } = renderComponent(propsForNonHeaderMode)
    expect(wrapper).toBeDefined()
  })

  it('renders the correct UI in non header mode', () => {
    const { wrapper } = renderComponent(propsForNonHeaderMode)
    expect(wrapper.find('img')).toBeDefined()
    expect(wrapper.find('div.SRC-type').text()).toEqual(commonProps.type)
    expect(wrapper.find('a.SRC-primary-text-color').text()).toEqual(data[0])
    expect(wrapper.find(`.${CARD_SHORT_DESCRIPTION_CSS}`).text()).toEqual(
      MOCKED_DESCRIPTION,
    )
    expect(wrapper.find(Utils.CardFooter)).toBeDefined()
  })

  it('renders as a Header without crashing', () => {
    const { wrapper } = renderComponent(propsForHeaderMode)
    expect(wrapper).toBeDefined()
    expect(wrapper.find('img').prop('src')).toEqual(iconOptions['AMP-AD'])
    expect(wrapper.find('div.SRC-type').text()).toEqual(commonProps.type)
    expect(wrapper.find('h3').text()).toEqual(data[0])
    expect(wrapper.find(Utils.ShowMore)).toHaveLength(0)
    expect(wrapper.find('.SRC-font-size-base').text()).toEqual(data[2])
    expect(wrapper.find(Utils.CardFooter)).toHaveLength(1)
  })

  it.skip('renders the query handles corretly', () => {
    const { wrapper } = renderComponent(propsForHeaderMode)
    expect(wrapper.find(`[data-search-handle]`).text()).toEqual(
      commonProps.title,
    )
  })

  describe('Renders UserCards when a UserId_List column is present', () => {
    const tableId = 'TABLE_ID_MOCK'
    const columnModelWithUserIdList = [
      {
        columnType: ColumnType.USERID_LIST,
        id: 'MOCKID',
        name: 'userIdList',
      },
    ]
    it('Renders a UserCard with an EntityView associate type', () => {
      const tableEntityConcreteType = 'EntityView'
      const { wrapper } = renderComponent({
        ...propsForNonHeaderMode,
        genericCardSchema: {
          ...genericCardSchema,
          secondaryLabels: ['userIdList'],
        },
        tableEntityConcreteType,
        columnModels: columnModelWithUserIdList,
        titleLinkConfig: undefined,
        tableId,
      })
      expect(wrapper.find(UserCard)).toHaveLength(1)
      expect(wrapper.find(UserCard).props()).toEqual({
        ownerId: 12345,
        size: 'SMALL USER CARD',
      })
    })
  })

  describe('Renders a FileHandleLink when the title is a file handle ', () => {
    const FILE_HANDLE_COLUMN_TYPE = ColumnType.FILEHANDLEID
    const tableId = 'TABLE_ID_MOCK'
    const columnModelWithFileHandleTitle = [
      {
        columnType: FILE_HANDLE_COLUMN_TYPE,
        id: 'MOCKID',
        name: 'link',
      },
    ]

    it('Renders a FileHandleLink with an EntityView associate type', () => {
      const tableEntityConcreteType = 'EntityView'
      const { wrapper } = renderComponent({
        ...propsForNonHeaderMode,
        tableEntityConcreteType,
        columnModels: columnModelWithFileHandleTitle,
        titleLinkConfig: undefined,
        tableId,
      })
      expect(wrapper.find(FileHandleLink)).toHaveLength(1)
      expect(wrapper.find(FileHandleLink).props()).toEqual({
        token: undefined,
        fileHandleId: MOCKED_LINK,
        showDownloadIcon: true,
        tableEntityConcreteType,
        rowId: MOCKED_ID,
        tableId,
        displayValue: MOCKED_TITLE,
      })
    })

    it('Renders a FileHandleLink with a table associate type', () => {
      const tableEntityConcreteType = 'Table'
      const { wrapper } = renderComponent({
        ...propsForNonHeaderMode,
        tableEntityConcreteType,
        columnModels: columnModelWithFileHandleTitle,
        titleLinkConfig: undefined,
        tableId,
      })
      expect(wrapper.find(FileHandleLink)).toHaveLength(1)
      expect(wrapper.find(FileHandleLink).props()).toEqual({
        token: undefined,
        fileHandleId: MOCKED_LINK,
        showDownloadIcon: true,
        tableEntityConcreteType,
        rowId: MOCKED_ID,
        tableId,
        displayValue: MOCKED_TITLE,
      })
    })
  })

  describe('Renders a ImageFileHandle when imageFileHandleColumnName is set ', () => {
    const FILE_HANDLE_COLUMN_TYPE = ColumnType.FILEHANDLEID
    const tableId = 'TABLE_ID_MOCK'
    const columnModelWithFileHandle = [
      {
        columnType: FILE_HANDLE_COLUMN_TYPE,
        id: 'MOCKID',
        name: 'image',
      },
    ]
    it('Renders a ImageFileHandle with an EntityView associate type', () => {
      const tableEntityConcreteType = 'EntityView'
      const { wrapper } = renderComponent({
        ...propsForNonHeaderMode,
        genericCardSchema: {
          ...genericCardSchema,
          imageFileHandleColumnName: 'image',
        },
        tableEntityConcreteType,
        columnModels: columnModelWithFileHandle,
        titleLinkConfig: undefined,
        tableId,
      })
      expect(wrapper.find(ImageFileHandle)).toHaveLength(1)
      expect(wrapper.find(ImageFileHandle).props()).toEqual({
        token: undefined,
        fileHandleId: MOCKED_IMAGE_FILE_HANDLE_ID,
        tableEntityConcreteType,
        rowId: MOCKED_ID,
        tableId,
      })
    })
    it('Renders a ImageFileHandle with a table associate type', () => {
      const tableEntityConcreteType = 'Table'
      const { wrapper } = renderComponent({
        ...propsForNonHeaderMode,
        genericCardSchema: {
          ...genericCardSchema,
          imageFileHandleColumnName: 'image',
        },
        tableEntityConcreteType,
        columnModels: columnModelWithFileHandle,
        titleLinkConfig: undefined,
        tableId,
      })
      expect(wrapper.find(ImageFileHandle)).toHaveLength(1)
      expect(wrapper.find(ImageFileHandle).props()).toEqual({
        token: undefined,
        fileHandleId: MOCKED_IMAGE_FILE_HANDLE_ID,
        tableEntityConcreteType,
        rowId: MOCKED_ID,
        tableId,
      })
    })
  })

  describe('it makes the correct URL for the title', () => {
    const { instance } = renderComponent(propsForHeaderMode)
    const SELF = '_self'
    const BLANK = '_blank'

    it('creates a link to synapse', () => {
      const synId = 'syn12345678'
      const synLink = `https://www.synapse.org/#!Synapse:${synId}`
      const { href, target } = instance.getLinkParams(
        synId,
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
      const { href, target } = instance.getLinkParams(
        doi,
        undefined,
        undefined,
        undefined,
      )
      expect(href).toEqual(doiLink)
      expect(target).toEqual(BLANK)
    })

    it('creates a DOI link PORTALS-1801', () => {
      const doi = '10.1007/s00401-020-02230-x '
      const doiLink = `https://dx.doi.org/${doi.trim()}`
      const { href, target } = instance.getLinkParams(
        doi,
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
      const { href, target } = instance.getLinkParams(
        '',
        titleLinkConfig,
        data,
        schema,
      )
      expect(href).toEqual(expectedLink)
      expect(target).toEqual(SELF)
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

  it('auto-links a single Synapse ID value', () => {
    const value = 'syn1234567'
    const wrapper = mount(
      <>
        {renderLabel({
          value,
          labelLink: undefined,
          isHeader: false,
          selectColumns: selectColumns,
          columnModels: undefined,
          columnName: DATASETS,
        })}
      </>,
    )
    const link = wrapper.find('a')
    expect(link).toHaveLength(1)
    expect(link.props().href).toEqual(
      `https://www.synapse.org/#!Synapse:${value}`,
    )
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
