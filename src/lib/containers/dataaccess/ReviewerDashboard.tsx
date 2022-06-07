import React from 'react'
import { useParams } from 'react-router'
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom'
import Typography from '../../utils/typography/Typography'
import IconSvg from '../IconSvg'
import AccessRequirementDashboard from './AccessRequirementDashboard'
import SubmissionPage from './SubmissionPage'

function LinkTab(props: any) {
  return (
    <NavLink className="Tab" role="tab" to={props.href} {...props}>
      <Typography variant="buttonLink">{props.children}</Typography>
    </NavLink>
  )
}

type ReviewerDashboardProps = {
  routerBaseName?: string
}

export default function ReviewerDashboard(props: ReviewerDashboardProps) {
  const { routerBaseName = '#!DataAccessManagement:default' } = props
  return (
    <BrowserRouter basename={routerBaseName}>
      <div className="ReviewerDashboard">
        <div className="Tabs">
          <LinkTab href="/AccessRequirements">
            <IconSvg
              options={{
                icon: 'accessClosed',
                padding: 'right',
              }}
            />
            Access Requirements
          </LinkTab>
          <LinkTab href="/Submissions">
            <IconSvg
              options={{
                icon: 'discussion',
                padding: 'right',
              }}
            />
            Submissions
          </LinkTab>
          <LinkTab href="/UserAccessHistory">
            <IconSvg
              options={{
                icon: 'history',
                padding: 'right',
              }}
            />
            User Access History
          </LinkTab>
        </div>
        <div className="TabContentContainer">
          <Switch>
            <Route path="/AccessRequirements">
              <AccessRequirementDashboard />
            </Route>
            <Route path="/Submissions">
              Submissions page here
              <Link to="/Submissions/315">Submission 315</Link>
            </Route>
            <Route path="/Submissions/:id">
              <SubmissionPageRouteRenderer />
            </Route>

            <Route path="/UserAccessHistory">User history page here</Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

function SubmissionPageRouteRenderer() {
  const { id } = useParams<{ id: string }>()
  return (
    <SubmissionPage
      submissionId={id}
      onRejectClicked={function (): void {
        throw new Error('Function not implemented.')
      }}
    />
  )
}
