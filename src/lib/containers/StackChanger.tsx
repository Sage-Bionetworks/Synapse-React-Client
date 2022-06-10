import { isEqual } from 'lodash-es'
import * as React from 'react'
import { useEffect, useState } from 'react'
import UniversalCookies from 'universal-cookie'
import { EndpointObject } from '../utils/functions/getEndpoint'
import { getStyleguideStack } from '../utils/SynapseClient'
import { STYLEGUIDE_STACK_COOKIE } from '../utils/SynapseConstants'
import { RadioGroup } from './widgets/RadioGroup'

type Stack = 'production' | 'staging' | 'development'
const STACK_MAP: Record<Stack, EndpointObject> = {
  production: {
    REPO: 'https://repo-prod.prod.sagebase.org',
    PORTAL: 'https://www.synapse.org/',
  },
  staging: {
    REPO: 'https://repo-staging.prod.sagebase.org',
    PORTAL: 'https://staging.synapse.org/',
  },
  development: {
    REPO: 'https://repo-dev.dev.sagebase.org',
    PORTAL: 'https://portal-dev.dev.sagebase.org/',
  },
}
const cookies = new UniversalCookies()

const StackChanger: React.FC = () => {
  const [stack, setStack] = useState<Stack>('production')

  useEffect(() => {
    console.log(getStyleguideStack())
    const stackFromCookie = Object.entries(STACK_MAP).find(entry => {
      const endpointConfig = entry[1]
      return isEqual(endpointConfig, getStyleguideStack())
    })

    if (stackFromCookie) {
      setStack(stackFromCookie[0] as Stack)
    } else {
      setStack('production')
    }
  }, [])

  const createStyleguideStackCookie = React.useCallback((stack: Stack) => {
    const endpointConfig = STACK_MAP[stack]
    cookies.set(STYLEGUIDE_STACK_COOKIE, endpointConfig)
    window['SRC'] = {
      OVERRIDE_ENDPOINT_CONFIG: endpointConfig,
    }
  }, [])

  useEffect(() => {
    createStyleguideStackCookie(stack)
  }, [createStyleguideStackCookie, stack])

  return (
    <span className={'experimental-mode-wrapper'}>
      <RadioGroup
        id={`stack-changer-radio-group`}
        value={stack}
        options={[
          {
            label: 'Production (synapse.org)',
            value: 'production',
          },
          {
            label: 'Staging (staging.synapse.org)',
            value: 'staging',
          },
          {
            label: 'Development (portal-dev.dev.sagebase.org)',
            value: 'development',
          },
        ]}
        onChange={(value: string) => setStack(value as Stack)}
      />
    </span>
  )
}

export default StackChanger
