import React, { useCallback } from 'react'
import {
  BrowserRouter,
  MemoryRouter,
  Link,
  NavLink,
  Route,
  Switch,
  useParams,
} from 'react-router-dom'
import { useGetCurrentUserBundle } from '../../utils/hooks/SynapseAPI/useUserBundle'
import { SubmissionState } from '../../utils/synapseTypes'
import Typography from '../../utils/typography/Typography'
import { AccessRequestSubmissionTable } from '../AccessRequestSubmissionTable'
import IconSvg, { Icon } from '../IconSvg'
import { SynapseSpinner } from '../LoadingScreen'
import { AccessRequirementDashboard } from './AccessRequirementDashboard'
import SubmissionPage from './SubmissionPage'

function LinkTab(props: {
  href: string
  children: React.ReactNode
  icon: Icon
}) {
  const { href, children, icon } = props
  return (
    <NavLink className="Tab textDecorationNone" role="tab" to={href}>
      <IconSvg
        options={{
          icon: icon,
          padding: 'right',
        }}
      />
      <Typography variant="buttonLink">{children}</Typography>
    </NavLink>
  )
}

type ReviewerDashboardProps = {
  /** Used to determine the base path for the component. Default is #!DataAccessManagement:default */
  routerBaseName?: string
  /** If true use a MemoryRouter, which prevents the browser URL from updating. For demo purposes only. */
  useMemoryRouter?: boolean
}

export function ReviewerDashboard(props: ReviewerDashboardProps) {
  const {
    routerBaseName = '#!DataAccessManagement:default',
    useMemoryRouter = false,
  } = props

  const { data: userBundle, isLoading } = useGetCurrentUserBundle()

  const hasActPermissions = userBundle?.isACTMember
  const hasReviewerPermissions =
    userBundle?.isACTMember || userBundle?.isARReviewer

  const Router = useCallback(
    props => {
      if (useMemoryRouter) {
        return <MemoryRouter {...props} />
      } else {
        return <BrowserRouter {...props} />
      }
    },
    [useMemoryRouter],
  )

  if (isLoading) {
    return <SynapseSpinner size={50} />
  }

  return (
    <Router basename={routerBaseName}>
      <div className="ReviewerDashboard">
        <div className="Tabs" role="tablist">
          {hasActPermissions && (
            <LinkTab href="/AccessRequirements" icon="accessClosed">
              Access Requirements
            </LinkTab>
          )}
          {hasReviewerPermissions && (
            <LinkTab href="/Submissions" icon="discussion">
              Submissions
            </LinkTab>
          )}
          {hasActPermissions && (
            <LinkTab href="/UserAccessHistory" icon="history">
              User Access History
            </LinkTab>
          )}
        </div>
        <div className="TabContentContainer">
          <Switch>
            {hasActPermissions && (
              <Route path="/AccessRequirements">
                <AccessRequirementDashboard />
              </Route>
            )}
            {hasReviewerPermissions && (
              <>
                <Route exact path="/Submissions">
                  <Typography variant="headline1">
                    Inputs coming soon!
                  </Typography>
                  <AccessRequestSubmissionTable
                    showSubmitter={true}
                    showStatus={false}
                    showRequesters={true}
                    submissionState={SubmissionState.SUBMITTED}
                  />
                </Route>

                <Route path="/Submissions/:id">
                  <SubmissionPageRouteRenderer />
                </Route>
              </>
            )}
            {hasActPermissions && (
              <Route path="/UserAccessHistory">
                <Typography variant="headline1">Coming soon!</Typography>
              </Route>
            )}
          </Switch>
        </div>
      </div>
    </Router>
  )
}

function SubmissionPageRouteRenderer() {
  const { id } = useParams<{ id: string }>()
  return (
    <>
      <div className="Breadcrumb">
        <Typography variant="breadcrumb1">
          <IconSvg
            options={{
              icon: 'accessManagement',
            }}
          />
          <IconSvg
            options={{
              icon: 'chevronRight',
            }}
          />
          <Link to="/Submissions">
            <span>Submissions</span>
          </Link>
          <IconSvg
            options={{
              icon: 'chevronRight',
            }}
          />
          <span>{id}</span>
        </Typography>
      </div>

      <SubmissionPage
        submissionId={id}
        onRejectClicked={function (): void {
          throw new Error('Function not implemented.')
        }}
      />
    </>
  )
}

export default ReviewerDashboard
