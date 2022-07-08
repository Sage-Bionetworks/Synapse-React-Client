import React, { useCallback } from 'react'
import {
  BrowserRouter,
  MemoryRouter,
  NavLink,
  Route,
  Switch,
  useParams,
} from 'react-router-dom'
import { useGetCurrentUserBundle } from '../../utils/hooks/SynapseAPI/user/useUserBundle'
import Typography from '../../utils/typography/Typography'
import { SynapseErrorBoundary } from '../ErrorBanner'
import IconSvg, { Icon } from '../IconSvg'
import { SynapseSpinner } from '../LoadingScreen'
import { UserHistoryDashboard } from './AccessHistoryDashboard'
import { AccessRequirementDashboard } from './AccessRequirementDashboard'
import { DataAccessSubmissionDashboard } from './AccessSubmissionDashboard'
import SubmissionPage from './SubmissionPage'

function LinkTab(props: {
  href: string
  children: React.ReactNode
  icon: Icon
}) {
  const { href, children, icon } = props
  return (
    <NavLink className="Tab" role="tab" to={href}>
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
  /** Used to show the reject submission dialog */
  onRejectSubmissionClicked: (onReject: (reason: string) => void) => void
}

export function ReviewerDashboard(props: ReviewerDashboardProps) {
  const {
    routerBaseName = '#!DataAccessManagement:default',
    useMemoryRouter = false,
    onRejectSubmissionClicked,
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
          <SynapseErrorBoundary>
            <Switch>
              {hasActPermissions && (
                <Route path="/AccessRequirements">
                  <AccessRequirementDashboard />
                </Route>
              )}
              {hasReviewerPermissions && [
                <Route exact path="/Submissions" key="/Submissions">
                  <DataAccessSubmissionDashboard />
                </Route>,

                <Route path="/Submissions/:id" key="/Submissions/:id">
                  <SubmissionPageRouteRenderer
                    onRejectSubmissionClicked={onRejectSubmissionClicked}
                  />
                </Route>,
              ]}
              {
                <Route exact path="/UserAccessHistory">
                  <UserHistoryDashboard />
                </Route>
              }
            </Switch>
          </SynapseErrorBoundary>
        </div>
      </div>
    </Router>
  )
}

function SubmissionPageRouteRenderer(props: {
  onRejectSubmissionClicked: (onReject: (reason: string) => void) => void
}) {
  const { id } = useParams<{ id: string }>()
  return (
    <SubmissionPage
      submissionId={id}
      onRejectClicked={props.onRejectSubmissionClicked}
    />
  )
}

export default ReviewerDashboard
