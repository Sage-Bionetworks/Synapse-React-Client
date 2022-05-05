import React, { useEffect } from 'react'
import ReactTooltip from 'react-tooltip'
import { TOOLTIP_DELAY_SHOW } from './table/SynapseTableConstants'
import {
  ArrowBackIos,
  ArrowForwardIos,
  Check,
  Clear,
  PhotoCameraOutlined,
  Cached,
  Group,
  InfoOutlined,
  AddShoppingCart,
  ShoppingCartOutlined,
  Delete,
  ExpandMore,
  ExpandLess,
  DashboardTwoTone,
  Star,
  PeopleTwoTone,
  SearchOutlined,
  HelpOutlined,
  AddCircleOutline,
  LanguageTwoTone,
  InsertDriveFileTwoTone,
  TableChartTwoTone,
  QuestionAnswerTwoTone,
  AssessmentTwoTone,
  GetAppTwoTone,
  StarTwoTone,
  SearchTwoTone,
  WatchLater,
  AddCircleTwoTone,
  ReportProblemOutlined,
  Code,
  GridOnTwoTone,
  RemoveCircleTwoTone,
  LockOpenTwoTone,
  VpnKeyTwoTone,
} from '@material-ui/icons'

import AccountCertified from '../assets/mui_components/AccountCertified'
import AccountRegistered from '../assets/mui_components/AccountRegistered'
import AccountValidated from '../assets/mui_components/AccountValidated'
import Chromatin from '../assets/mui_components/Chromatin'
import ContentCopy from '../assets/mui_components/ContentCopy'
import Data from '../assets/mui_components/Data'
import DataLocked from '../assets/mui_components/DataLocked'
import GeneExpression from '../assets/mui_components/GeneExpression'
import GeneVariants from '../assets/mui_components/GeneVariants'
import Clinical from '../assets/mui_components/Clinical'
import Imaging from '../assets/mui_components/Imaging'
import LineGraph from '../assets/mui_components/LineGraph'
import Rat from '../assets/mui_components/Rat'
import Kinomics from '../assets/mui_components/Kinomics'
import Login from '../assets/mui_components/Login'
import Proteomics from '../assets/mui_components/Proteomics'
import Other from '../assets/mui_components/Other'
import PackagableFile from '../assets/mui_components/PackagableFile'
import Docker from '../assets/mui_components/Docker'

export type IconSvgOptions = {
  icon: string
  color?: string // If no color is provided, it should inherit current color
  size?: string
  padding?: 'left' | 'right'
  label?: string // If provided, will activate tooltip
}

export type IconSvgProps = {
  options: IconSvgOptions
}

export type SVGStyleProps = {
  color?: string
  verticalAlign?: string
  fill?: string
}

const getIcon = (options: IconSvgOptions) => {
  const { icon, color } = options

  // Styles for svg imported from mui
  const muiSvgStyle: SVGStyleProps = {
    color: color,
    verticalAlign: 'middle',
  }
  // Styles for custom svg missing from mui
  const customSvgStyle: SVGStyleProps = {
    fill: color,
    color: color,
    verticalAlign: 'middle',
  }

  switch (icon) {
    case 'accessOpen':
      return <LockOpenTwoTone style={customSvgStyle} />
    case 'accessClosed':
      return <VpnKeyTwoTone style={customSvgStyle} />
    case 'arrowBack':
      return <ArrowBackIos style={muiSvgStyle} />
    case 'arrowForward':
      return <ArrowForwardIos style={muiSvgStyle} />
    case 'check':
      return <Check style={muiSvgStyle}></Check>
    case 'clear':
      return <Clear style={muiSvgStyle}></Clear>
    case 'cart':
      return <ShoppingCartOutlined style={muiSvgStyle}></ShoppingCartOutlined>
    case 'code':
      return <Code style={muiSvgStyle}></Code>
    case 'dashboard':
      return <DashboardTwoTone style={muiSvgStyle}></DashboardTwoTone>
    case 'delete':
      return <Delete style={muiSvgStyle}></Delete>
    case 'addToCart':
      return <AddShoppingCart style={muiSvgStyle}></AddShoppingCart>
    case 'addCircleOutline':
      return <AddCircleOutline style={muiSvgStyle}></AddCircleOutline>
    case 'addCircleTwoTone':
      return <AddCircleTwoTone style={muiSvgStyle}></AddCircleTwoTone>
    case 'reload':
      return <Cached style={muiSvgStyle}></Cached>
    case 'team':
      return <Group style={muiSvgStyle}></Group>
    case 'photoCamera':
      return <PhotoCameraOutlined style={muiSvgStyle}></PhotoCameraOutlined>
    case 'info':
      return (
        <InfoOutlined fontSize={'small'} style={muiSvgStyle}></InfoOutlined>
      )
    case 'favTwoTone':
      return <StarTwoTone style={muiSvgStyle}></StarTwoTone>
    case 'fav':
      return <Star style={muiSvgStyle}></Star>
    case 'peopleTwoTone':
      return <PeopleTwoTone style={muiSvgStyle}></PeopleTwoTone>
    case 'challengesTwoTone':
      return <AssessmentTwoTone style={muiSvgStyle}></AssessmentTwoTone>
    case 'download':
      return <GetAppTwoTone style={muiSvgStyle}></GetAppTwoTone>
    case 'searchOutlined':
      return <SearchOutlined style={muiSvgStyle}></SearchOutlined>
    case 'searchTwoTone':
      return <SearchTwoTone style={muiSvgStyle}></SearchTwoTone>
    case 'time':
      return <WatchLater style={muiSvgStyle}></WatchLater>
    case 'login':
      return <Login fill={color} style={customSvgStyle}></Login>
    case 'helpOutlined':
      return <HelpOutlined style={muiSvgStyle}></HelpOutlined>
    case 'expandLess':
      return <ExpandLess fontSize={'small'} style={muiSvgStyle}></ExpandLess>
    case 'expandMore':
      return <ExpandMore fontSize={'small'} style={muiSvgStyle}></ExpandMore>
    case 'rat':
      return <Rat fill={color} style={customSvgStyle}></Rat>
    case 'chromatin':
      return <Chromatin fill={color} style={customSvgStyle}></Chromatin>
    case 'clinical':
      return <Clinical fill={color} style={customSvgStyle}></Clinical>
    case 'contentCopy':
      return <ContentCopy fill={color} style={customSvgStyle} />
    case 'data':
      return <Data fill={color} style={customSvgStyle}></Data>
    case 'dataLocked':
      return <DataLocked fill={color} style={customSvgStyle}></DataLocked>
    case 'geneExpression':
      return (
        <GeneExpression fill={color} style={customSvgStyle}></GeneExpression>
      )
    case 'geneVariants':
      return <GeneVariants fill={color} style={customSvgStyle}></GeneVariants>
    case 'imaging':
      return <Imaging fill={color} style={customSvgStyle}></Imaging>
    case 'lineGraph':
      return <LineGraph fill={color} style={customSvgStyle}></LineGraph>
    case 'kinomics':
      customSvgStyle.fill = 'none'
      return (
        <Kinomics
          fill={color ? color : 'currentColor'}
          style={customSvgStyle}
        ></Kinomics>
      )
    case 'proteomics':
      customSvgStyle.fill = 'none'
      return (
        <Proteomics
          fill={color ? color : 'currentColor'}
          style={customSvgStyle}
        ></Proteomics>
      )
    case 'packagableFile':
      customSvgStyle.fill = 'none'
      return (
        <PackagableFile
          fill={color ? color : 'currentColor'}
          style={customSvgStyle}
        ></PackagableFile>
      )
    case 'other':
      return <Other fill={color} style={customSvgStyle}></Other>
    case 'wiki':
      return <LanguageTwoTone style={muiSvgStyle} />
    case 'file':
      return <InsertDriveFileTwoTone style={muiSvgStyle} />
    case 'table':
      return <TableChartTwoTone style={muiSvgStyle} />
    case 'challenge':
      return <AssessmentTwoTone style={muiSvgStyle} />
    case 'discussion':
      return <QuestionAnswerTwoTone style={muiSvgStyle} />
    case 'dataset':
      return <GridOnTwoTone style={muiSvgStyle} />
    case 'docker':
      return (
        <Docker fill={color ? color : 'currentColor'} style={customSvgStyle} />
      )
    case 'accountCertified':
      return <AccountCertified></AccountCertified>
    case 'accountRegistered':
      return <AccountRegistered></AccountRegistered>
    case 'accountValidated':
      return <AccountValidated></AccountValidated>
    case 'warningOutlined':
      return <ReportProblemOutlined style={muiSvgStyle}></ReportProblemOutlined>
    case 'removeCircle':
      return <RemoveCircleTwoTone style={muiSvgStyle}></RemoveCircleTwoTone>
    default:
      return <></>
  }
}

const IconSvg: React.FunctionComponent<IconSvgProps> = props => {
  const { options } = props
  const { icon, color, padding, label } = options
  let mounted = true

  // Do not set inline style unless it is specified because it's hard to override
  const getPadding = (padding: any) => {
    if (padding === 'left') {
      return { paddingLeft: '0.2rem' }
    }
    if (padding === 'right') {
      return { paddingRight: '0.2rem' }
    }
    return {}
  }
  const wrapperCss = getPadding(padding)

  useEffect(() => {
    if (mounted) {
      //
    }
    return () => {
      mounted = false
    }
  }, [icon, color])

  return (
    <>
      <span
        data-svg={icon}
        className="styled-svg-wrapper"
        style={wrapperCss}
        id={`icon-${icon}`}
        data-for={`icon-${icon}`}
        data-tip={label}
      >
        {getIcon(options)}
      </span>
      {label && (
        <ReactTooltip
          className={'icon-svg-tooltip'}
          delayShow={TOOLTIP_DELAY_SHOW}
          id={`icon-${icon}`}
          place={'top'}
        />
      )}
    </>
  )
}

export default IconSvg
