import React from 'react'
import { MemoryRouter } from 'react-router'
import { SynapseWrapper } from '../utils/SynapseContext'
import RenderIfInView from './RenderIfInView'
import UniversalCookies from 'universal-cookie'
import { EXPERIMENTAL_MODE_COOKIE } from '../utils/SynapseConstants'
import { DATETIME_UTC_COOKIE_KEY } from '../utils/functions/DateFormatter'
const cookies = new UniversalCookies()

export const StyleGuidistComponentWrapper: React.FC = props => {
  return (
    <SynapseWrapper
      synapseContext={{
        accessToken: global.accessToken!,
        isInExperimentalMode: cookies.get(EXPERIMENTAL_MODE_COOKIE),
        utcTime: cookies.get(DATETIME_UTC_COOKIE_KEY),
      }}
    >
      <MemoryRouter>
        <RenderIfInView>{props.children}</RenderIfInView>
      </MemoryRouter>
    </SynapseWrapper>
  )
}

export default StyleGuidistComponentWrapper
